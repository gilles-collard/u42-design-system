## Voici la commande classique avec **node-sass** en mode watch :

```bash
sass --watch styles/styles styles.css
```

Si tu veux surveiller tout un dossier :

```bash
sass --watch src/scss -o dist/css
```

Et avec les options utiles (minification par exemple) :

```bash
sass --watch src/scss -o dist/css --output-style compressed
```

Si tu utilises une version récente de l’écosystème, sache que **node-sass est déprécié** - on utilise plutôt `sass` (Dart Sass) :

```bash
sass --watch src/scss:dist/css
```
