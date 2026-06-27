#!/usr/bin/env bash
set -euo pipefail

SERVER="root@91.98.65.57"
SSH_KEY="$HOME/.ssh/id_ed25519"
REMOTE_DEST="/var/www/u42.design"
REMOTE_ZIP="/var/www/deploy-design.zip"
HASH_FILE=".deploy-hash"
ZIP_FILE="deploy-design.zip"

if [[ ! -d "build" ]]; then
  echo "build/ not found — run npm run build first." >&2
  exit 1
fi

CURRENT=$(find build -type f | sort | xargs -I{} sh -c 'echo "{}:$(wc -c < "{}")"' | md5sum | cut -d' ' -f1)

if [[ -f "$HASH_FILE" ]] && [[ "$(cat "$HASH_FILE")" == "$CURRENT" ]]; then
  echo "No changes since last deploy — aborting."
  exit 0
fi

echo "Changes detected, deploying..."

node -e "
const p = JSON.parse(require('fs').readFileSync('package.json','utf8'));
const clean = { name: p.name, version: p.version, type: p.type, dependencies: {} };
for (const [k,v] of Object.entries(p.dependencies||{})) {
  if (!v.startsWith('workspace:')) clean.dependencies[k] = v;
}
require('fs').writeFileSync('package.prod.json', JSON.stringify(clean, null, 2));
"

zip -r "$ZIP_FILE" build package.prod.json
rm package.prod.json

SIZE=$(du -sh "$ZIP_FILE" | cut -f1)
echo "Archive: $ZIP_FILE ($SIZE)"

echo "Uploading..."
scp -i "$SSH_KEY" "$ZIP_FILE" "${SERVER}:${REMOTE_ZIP}"

echo "Updating server..."
ssh -i "$SSH_KEY" "$SERVER" "
  mkdir -p $REMOTE_DEST
  unzip -o $REMOTE_ZIP -d $REMOTE_DEST
  cd $REMOTE_DEST && mv package.prod.json package.json && npm install --omit=dev
  pm2 restart design --update-env || pm2 start /var/www/ecosystem.design.config.cjs --only design
  pm2 save
  rm $REMOTE_ZIP
"

echo "$CURRENT" > "$HASH_FILE"
rm -f "$ZIP_FILE"
echo "Deploy complete."
