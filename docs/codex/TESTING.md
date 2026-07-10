# Testing Strategy

## Levels of Testing
- **Unit tests**: No JavaScript test framework is configured. `[NEEDS CONFIRMATION]`
- **Build tests**: Run `pnpm run build` after dependencies are installed to confirm Webpack compiles `src/index.js`, `src/style/styles.scss`, and `src/index.html`.
- **Integration tests**: Manually validate navigation, carousels, FAQ accordion, newsletter acknowledgement, and responsive menu behavior.
- **E2E tests**: Recommended future default is Playwright for anchor navigation, mobile menu, carousel controls, accordion state, and newsletter form flow. `[NEEDS CONFIRMATION]`
- **Visual regression**: Recommended future default is screenshot comparison at desktop, tablet, and mobile breakpoints. `[NEEDS CONFIRMATION]`
- **Performance**: Check image weight, lazy-loading opportunities, layout stability, and Lighthouse performance after final assets are selected.
- **Accessibility**: Validate semantic headings, keyboard focus, aria-expanded state, focus visibility, color contrast, reduced motion, and form labels.
- **SEO**: Validate document title, meta description, heading hierarchy, link text, image alt text, and crawlable static content.

## Manual Checks
- Run `pnpm install` if `node_modules/` is absent, then run `pnpm start` for local browser review and `pnpm run build` before handoff.
- Responsiveness on desktop, laptop, tablet, and mobile.
- Cross-browser checks for Chrome, Firefox, Safari, and Edge.
- Sticky header remains readable and does not cover anchor content.
- Mobile menu opens, closes, traps no focus unexpectedly, and closes on link click or Escape.
- Smooth scroll links reach About, Portfolio, Services, Team, Contact, Newsletter, and Back to top destinations.
- Hero headline remains readable and does not overflow on small mobile screens.
- Portfolio and service galleries scroll with touch, trackpads, keyboard focus, and arrow controls.
- FAQ accordion buttons animate height and update `aria-expanded` correctly.
- Newsletter form accepts a valid email and shows an accessible status message.
- Hover image scale remains subtle and does not shift layout.
- Reduced-motion users do not receive unnecessary motion.
- Placeholder contact details and image sources are replaced before launch.

## How to Fix Issues
- For overflow or cramped text, adjust section grid columns, `clamp()` values, or mobile breakpoints in `src/style/styles.scss`.
- For interaction bugs, keep changes scoped to `src/index.js` and preserve aria state updates.
- For image issues, replace the affected URL, set a better focal point with `object-position`, or optimize the asset dimensions.
- For accessibility issues, prefer semantic HTML controls before adding custom behavior.
- For performance issues, compress final assets, add explicit dimensions where useful, and avoid adding heavy dependencies.

## CI Integration
- No CI is configured. `[NEEDS CONFIRMATION]`
- Recommended future checks before deployment: HTML validation, style linting, Playwright smoke tests, Lighthouse CI, and accessibility scanning. `[NEEDS CONFIRMATION]`
