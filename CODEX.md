# Codex Manual - Handshake Residential Architects

## Project Overview
- **Type**: Webpack-powered static one-page website
- **Stack**: Semantic HTML, SCSS/CSS, vanilla JavaScript, Webpack
- **Main purpose**: Present a premium residential architecture studio website for Handshake, a Seattle-based practice serving homeowners, developers, builders, and design-conscious clients.

## Development Environment
### Prerequisites
- Node.js and npm. The package metadata currently declares `npm@11.12.1`.
- A modern browser.

### Commands
| Command | Description |
|---------|-------------|
| `npm install` | Install Webpack and build tooling dependencies. |
| `npm start` | Run `webpack serve --mode development` on the configured dev server. |
| `npm run build` | Build production assets into `public/`. |

## Project Structure
- `src/index.html` - Webpack HTML template for header, hero, about, portfolio, services, FAQ, team, contact, newsletter, and footer sections.
- `src/style/styles.scss` - Source visual system, responsive layouts, animation rules, carousels, accordions, and mobile navigation styling.
- `src/index.js` - Source OOP interaction layer for sticky header state, mobile menu, reveal animations, gallery controls, FAQ accordion, and newsletter acknowledgement.
- `package.json` - npm package metadata, scripts, and development dependencies.
- `package-lock.json` - npm lockfile generated after dependency installation.
- `webpack.config.js` - Webpack entry, output, SCSS pipeline, HTML template, and dev server configuration.
- `public/` - Generated production output after `npm run build`.
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
3. Adjust global visual tokens in `src/style/styles.scss` before making one-off component changes.
4. Keep interactions in `src/index.js` small, accessible, and progressive-enhancement friendly.
5. Test desktop, tablet, and mobile layouts after changing typography, images, or grid behavior.
6. Update `docs/codex/TASKS.md`, `docs/codex/DECISIONS.md`, and `docs/design/BLOCK_SPEC.md` when changing scope, design direction, or key interactions.
