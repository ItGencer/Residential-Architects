# Project Context

## Summary
Handshake Residential Architects is a premium one-page Webpack site for a Seattle residential architecture studio. It is designed for homeowners, developers, builders, and design-conscious clients who want calm, thoughtful architectural guidance for private residences, remodels, builder partnerships, and planning support.

## Users & Stakeholders
- **Primary users**: Homeowners, developers, builders, and design-conscious residential clients.
- **Business goals**: Communicate trust, design maturity, warmth, and craft; show selected project work; explain services; answer common pre-engagement questions; encourage qualified project inquiries and newsletter signups.

## Goals & Non-Goals
### Goals
- Create a polished one-page residential architecture website with a refined editorial Framer-style feel.
- Include sticky navigation with smooth anchor scrolling and mobile menu behavior.
- Present the required sections: hero, about, portfolio, services, FAQ, team, contact, newsletter, and footer.
- Use high-quality placeholder architecture, interior, and portrait imagery.
- Keep motion understated: scroll reveals, subtle image hover scale, accordion height animation, and swipeable gallery rails.
- Maintain responsive layouts across desktop, tablet, and mobile.
- Keep controls accessible with semantic HTML, visible focus states, aria attributes, and reduced-motion support.

### Non-Goals
- No backend application is implemented.
- No real newsletter provider integration is implemented.
- No CMS, database, booking system, or payment flow is implemented.
- No authenticated user experience is included.

## Technology Stack
- **Frontend**: Semantic HTML, SCSS/CSS, vanilla JavaScript
- **Build tool**: pnpm, Webpack 5, Webpack Dev Server, HtmlWebpackPlugin, MiniCssExtractPlugin, css-loader, sass-loader
- **Backend**: None
- **Database**: None
- **Hosting**: `[NEEDS CONFIRMATION]`

## Architecture
The project is a static one-page site built through Webpack:

- `src/index.html` defines content structure, section anchors, accessible labels, and image assets for the bundled site.
- `src/style/styles.scss` defines Sass design tokens, editorial layout, responsive behavior, animation states, and component presentation.
- `src/index.js` imports the SCSS and enhances the page through OOP controllers for mobile navigation, sticky header state, reveal-on-scroll classes, horizontal rail controls, FAQ accordion behavior, and a local newsletter acknowledgement.
- `webpack.config.js` builds `src/index.js` and `src/index.html` into `public/`.

The site should work without JavaScript for core reading and navigation, while JavaScript improves interaction quality.

## Important Constraints & Assumptions
- Studio name defaults to `Handshake`; the brief allows replacing it with `[Studio Name]`.
- The studio is positioned as residential architects based in Seattle, USA.
- Tone should remain calm, confident, thoughtful, design-led, warm, and minimal.
- The visual system should avoid bright gradients, decorative blobs, dark SaaS styling, and overly rounded cards.
- The hero headline must remain `Residential Architects`.
- Contact details are placeholders and need client-approved production values. `[NEEDS CONFIRMATION]`
- Unsplash image URLs are placeholder assets and should be replaced with licensed final imagery before production. `[NEEDS CONFIRMATION]`

## Dependencies & External Services
- External image hosting through Unsplash CDN placeholder URLs.
- Development dependencies are listed in `package.json` for Webpack, SCSS loading, HTML generation, and CSS extraction.
- Package manager metadata declares `pnpm@11.7.0`.
- Newsletter submission currently has local front-end acknowledgement only; production provider is `[NEEDS CONFIRMATION]`.
