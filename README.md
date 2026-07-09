# Handshake Residential Architects

A premium one-page website for Handshake, a residential architecture studio based in Seattle, USA. The project uses semantic HTML, SCSS/CSS, vanilla JavaScript, and Webpack to deliver an editorial, gallery-like experience with smooth navigation, mobile menu behavior, accordions, reveal motion, and horizontal image rails.

## Run Locally

Install dependencies, then start the Webpack dev server:

```powershell
pnpm install
pnpm start
```

The dev server is configured for `http://localhost:3000`.

Build production assets:

```powershell
pnpm run build
```

You can also open the root `index.html` directly as a static preview.

## Project Files

- `src/index.html` - Webpack HTML template for the one-page site.
- `src/styles.scss` - Responsive editorial design system and layout.
- `src/index.js` - Navigation, scroll reveals, carousels, FAQ accordion, and newsletter form behavior.
- `index.html`, `styles.css`, `script.js` - Static preview copy of the site.
- `index.js` - Scaffold compatibility note; Webpack entry lives in `src/index.js`.
- `webpack.config.js` - Webpack build and dev server configuration.
- `package.json` - pnpm package metadata, scripts, and development dependencies.
- `pnpm-workspace.yaml` - Records the optional watcher build-script approval decision.
- `CODEX.md` - Codex operating manual for future work.
- `docs/` - Product, task, decision, testing, and design documentation.
