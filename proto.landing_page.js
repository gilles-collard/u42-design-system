async function loadContent() {
  const res = await fetch("./proto.landing_page.json");
  const t = await res.json();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = get(t, el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = get(t, el.dataset.i18nHtml).replace(/\n/g, "<br />");
  });

  document.querySelectorAll("[data-i18n-meta]").forEach((el) => {
    el.innerHTML = get(t, el.dataset.i18nMeta)
      .map(
        ({ key, value }) => `
        <div class="meta_data__item">
          <div class="key"><span class="label">${key}</span></div>
          <div class="value"><span class="smaller">${value}</span></div>
        </div>`
      )
      .join("");
  });

  document.querySelectorAll("[data-i18n-table]").forEach((el) => {
    el.innerHTML = get(t, el.dataset.i18nTable)
      .map((item) => {
        const live = item.status === "Live";
        const tag = live ? "a" : "div";
        const href = live ? ` href="/login"` : "";
        const mod = live ? "" : " table__row--disabled";
        return `<${tag} class="table__row${mod}"${href} role="row">
  <div class="table__id-name" role="cell">
    <span class="table__index">${item.index}</span>
    <div class="table__identity">
      <span class="table__name">${item.name}</span>
      <span class="table__role">${item.role}</span>
    </div>
  </div>
  <p class="table__desc" role="cell">${item.desc}</p>
  <span class="table__uri" role="cell">${item.uri}</span>
  <div class="table__status" role="cell">
    <span class="table__dot"></span>
    <span class="table__status-label">${item.status}</span>
  </div>
  <span class="table__arrow" role="cell">→</span>
</${tag}>`;
      })
      .join("\n");
  });
}

function get(obj, path) {
  return path.split(".").reduce((o, k) => o[k], obj);
}

loadContent();
