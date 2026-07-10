# Handshake Residential Architects

Handshake is a premium one-page website for a residential architecture studio based in Seattle, USA. The implementation is inspired by a refined editorial architecture template, but uses its own layout, copy, image choices, styling, and interaction code.

## Stack

- Semantic HTML
- SCSS/CSS
- Vanilla JavaScript
- Webpack 5
- pnpm 11.7.0

## Run

```powershell
pnpm install
pnpm start
```

Production build:

```powershell
pnpm run build
```

Generated assets are emitted to `public/`.

## Source Of Truth

- `src/index.html` - bundled page template
- `src/style/styles.scss` - bundled styling
- `src/index.js` - bundled OOP interaction layer

## Notes

- Replace placeholder contact details before production.
- Replace Unsplash placeholder imagery with licensed or studio-owned assets before launch.
- Newsletter submission currently uses a front-end acknowledgement only.
- `pnpm-workspace.yaml` records that the optional `@parcel/watcher` build script is not approved for this project.
