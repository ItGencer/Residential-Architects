# Codex Manual - Handshake Residential Architects

## Project Overview
- **Type**: Webpack-powered static one-page website
- **Stack**: Semantic HTML, SCSS/CSS, vanilla JavaScript, Webpack
- **Main purpose**: Present a premium residential architecture studio website for Handshake, a Seattle-based practice serving homeowners, developers, builders, and design-conscious clients.

## Development Environment
### Prerequisites
- Node.js and pnpm. The package metadata currently declares `pnpm@11.7.0`.
- A modern browser.

### Commands
| Command | Description |
|---------|-------------|
| `pnpm install` | Install Webpack and build tooling dependencies. |
| `pnpm start` | Run `webpack serve --mode development` on the configured dev server. |
| `pnpm run build` | Build production assets into `public/`. |
| Open `index.html` | View the static preview copy directly in a browser. |

## Project Structure
- `src/index.html` - Webpack HTML template for header, hero, about, portfolio, services, FAQ, team, contact, newsletter, and footer sections.
- `src/styles.scss` - Source visual system, responsive layouts, animation rules, carousels, accordions, and mobile navigation styling.
- `src/index.js` - Source interaction layer for sticky header state, mobile menu, reveal animations, gallery controls, FAQ accordion, and newsletter acknowledgement.
- `index.html` - Static preview copy that can be opened directly.
- `styles.css` - Static preview styles.
- `script.js` - Static preview JavaScript.
- `index.js` - Scaffold compatibility note; Webpack entry lives in `src/index.js`.
- `package.json` - pnpm package metadata, scripts, dev dependencies, and build-script policy.
- `pnpm-lock.yaml` - Generated pnpm lockfile after dependency installation.
- `pnpm-workspace.yaml` - Build-script approval metadata; `@parcel/watcher` is explicitly not approved.
- `webpack.config.js` - Webpack entry, output, SCSS pipeline, HTML template, and dev server configuration.
- `public/` - Generated production output after `pnpm run build`.
- `docs/codex/` - Project context, task list, decisions, and testing documentation.
- `docs/design/` - Block-level visual and interaction specification.

## Important Constraints
- Preserve the calm, premium architecture-magazine aesthetic.
- Use warm off-white and stone backgrounds with near-black charcoal text.
- Avoid bright gradients, decorative blobs, overly rounded SaaS-style cards, and crowded marketing-page composition.
- Keep the hero headline large, editorial, uppercase, and readable on mobile.
- Keep image-forward sections spacious, asymmetrical, and gallery-like.
- Maintain accessible keyboard focus, semantic sections, aria states for interactive controls, and reduced-motion support.
- External images are placeholder architecture/interior/portrait assets and should be replaced with licensed studio-approved imagery before launch. `[NEEDS CONFIRMATION]`
- Contact email, phone, and address are placeholders and must be replaced before production. `[NEEDS CONFIRMATION]`

## How to Contribute / Modify
1. Treat `src/` as the source of truth for Webpack builds.
2. Update content in `src/index.html` and keep section anchors aligned with the navigation.
3. Adjust global visual tokens in `src/styles.scss` before making one-off component changes.
4. Keep interactions in `src/index.js` small, accessible, and progressive-enhancement friendly.
5. If maintaining the direct-open static preview, mirror source changes to root `index.html`, `styles.css`, and `script.js`.
6. Test desktop, tablet, and mobile layouts after changing typography, images, or grid behavior.
7. Update `docs/codex/TASKS.md`, `docs/codex/DECISIONS.md`, and `docs/design/BLOCK_SPEC.md` when changing scope, design direction, or key interactions.
