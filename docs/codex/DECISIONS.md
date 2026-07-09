# Decision Log

## Format
Date: YYYY-MM-DD
Decision: What was decided
Rationale: Why
Trade-offs: What was sacrificed or gained

---

Date: 2026-07-09
Decision: Build the project as a Webpack-powered static one-page website using semantic HTML, SCSS/CSS, and vanilla JavaScript.
Rationale: The destination project already contains Webpack configuration and npm scripts, and the requested experience is content-led and interaction-light.
Trade-offs: The bundled site is simple to host and maintain, but dynamic features such as newsletter storage, CMS editing, and lead management require future integrations.

---

Date: 2026-07-09
Decision: Treat `src/` as the source of truth and keep root HTML/CSS/JS as static preview copies.
Rationale: Webpack expects `src/index.js` and `src/index.html`, while a direct-open static preview is useful for quick inspection.
Trade-offs: Maintaining both source and preview copies can introduce drift unless updates are mirrored intentionally.

---

Date: 2026-07-09
Decision: Use pnpm package metadata and ignore the optional `@parcel/watcher` build script non-interactively.
Rationale: The local global npm command is misconfigured, while bundled pnpm is available. The ignored watcher build script blocks non-interactive installs but is not required for compiling this static Webpack site.
Trade-offs: Dev-server file watching may rely on fallback behavior if the optional watcher is not built.

---

Date: 2026-07-09
Decision: Use `Handshake` as the visible studio name.
Rationale: The brief specified `Handshake` as the brand while allowing replacement with `[Studio Name]`.
Trade-offs: Final naming can be changed quickly, but all visible copy and docs should be reviewed if the brand changes.

---

Date: 2026-07-09
Decision: Use a minimalist architecture-magazine visual direction with warm off-white, stone, concrete gray, charcoal, and restrained bronze/olive accents.
Rationale: This follows the user's visual direction for a calm, premium, editorial residential architecture studio.
Trade-offs: The palette avoids flashy contrast and requires careful image selection and typography to preserve richness.

---

Date: 2026-07-09
Decision: Implement portfolio and service sections as horizontally scrollable gallery rails with button controls.
Rationale: The brief requested gallery-like portfolio behavior and carousel/swipe behavior for services.
Trade-offs: Horizontal rails preserve an editorial feel, but they need manual testing on touch devices and keyboard navigation.

---

Date: 2026-07-09
Decision: Use external Unsplash image URLs as high-quality placeholder imagery.
Rationale: The brief requested placeholder architecture/interior photography without copying original template assets.
Trade-offs: This allows fast visual prototyping, but production launch should replace placeholders with licensed or studio-owned assets. `[NEEDS CONFIRMATION]`
