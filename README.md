# Maule Style — Reorganización Vite + React

Resumen de cambios:

- Scaffold de Vite + React (sin alterar comportamiento visual ni lógico).
- Estructura creada bajo `src/` con `components/`, `hooks/`, `styles/`, `assets/` y `pages/` (placeholders).
- Estilos originales migrados a `src/styles/global.css`.
- Lógica original de `script.js` portada a `src/hooks/useInitEffects.js` y llamada desde `App.jsx`.
- `index.html` adaptado para Vite y monta la app en `#root`.
- `vite.config.js` configurado con `base: './'` para compatibilidad con GitHub Pages y rutas relativas.
- `package.json` añadido con scripts `dev`, `build` y `preview`.

Notas importantes:

- Los assets binarios (PNG) se mantienen en `FRON PRESENTAICON APP/` y se importan desde `src/App.jsx` para no perder los ficheros originales. Si prefieres, puedo moverlos a `public/assets/images` — indícame si lo hago.
 - El APK de la app debe colocarse en `public/downloads/MAULESTYLE.APK` para que el botón "Descargar APK" funcione correctamente. He creado `public/downloads/README.md` con instrucciones.
- Para desplegar en GitHub Pages, el `base` está en `./`. Si tu repositorio usa `username.github.io/repo`, cambia `base` a `'/repo/'` o define `VITE_BASE` durante el build.

Comandos:

```
npm install
npm run dev
npm run build
```

Deploy a GitHub Pages (automático via Actions):

1. Asegúrate de que la rama principal se llame `main` y haz commit/push de todos los cambios:

```
git add .
git commit -m "Prepare site for GitHub Pages (Vite + React)"
git push origin main
```

2. El workflow `.github/workflows/gh-pages.yml` se ejecutará al pushear a `main`, construirá la app y publicará `dist/` en la rama `gh-pages`.

3. En el repositorio en GitHub, entra a Settings → Pages y verifica que el sitio esté configurado para servirse desde la rama `gh-pages` (la Action crea la rama automáticamente). Puedes tardar unos minutos en aparecer.

Nota: el `base` de Vite está configurado con rutas relativas (`./`) para minimizar 404s en distintos tipos de Pages. Si prefieres usar la ruta absoluta `/<repo>/`, edita `vite.config.js` y pon `base: '/REPO_NAME/'` antes de hacer build.
