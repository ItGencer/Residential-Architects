# Handshake Residential Architects

A premium one-page website for Handshake, a residential architecture studio based in Seattle, USA. The project uses semantic HTML, SCSS/CSS, vanilla JavaScript, and Webpack to deliver an editorial, gallery-like experience with smooth navigation, mobile menu behavior, accordions, reveal motion, and horizontal image rails.

## Run Locally

Install dependencies, then start the Webpack dev server:

```powershell
npm install
npm start
```

The dev server is configured for `http://localhost:3000`.

Build production assets:

```powershell
npm run build
```

## Project Files

- `src/index.html` - Webpack HTML template for the one-page site.
- `src/style/styles.scss` - Responsive editorial design system and layout.
- `src/index.js` - OOP interaction layer for navigation, scroll reveals, carousels, FAQ accordion, and newsletter form behavior.
- `webpack.config.js` - Webpack build and dev server configuration.
- `package.json` - npm package metadata, scripts, and development dependencies.
- `package-lock.json` - Reproducible npm dependency lockfile.
- `CODEX.md` - Codex operating manual for future work.
- `docs/` - Product, task, decision, testing, and design documentation.
