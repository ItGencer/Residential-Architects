# Block Specification

## Pages
- Home - A premium one-page editorial website for Handshake, a residential architecture studio based in Seattle. Source lives in `src/index.html` for Webpack builds, with a root static preview copy.

## Blocks
### Header
- Sticky top navigation with centered/prominent wordmark.
- Desktop links: About, Portfolio, Services, Team, Contact, Newsletter.
- Mobile collapses into a clean full-screen menu opened by a compact Menu control.
- Navigation links use anchor targets and smooth scrolling.
- Header gains a subtle border and more opaque background after scrolling.

### Hero Section
- Full first-viewport impression with a hint of content below.
- Huge uppercase headline: `Residential Architects`.
- Supporting labels: `Based in Seattle` and `Scroll Down`.
- Uses tall residential architecture/interior imagery with white walls, pale wood, and clean modern forms.
- Layout is asymmetrical and gallery-like, with image columns offset from the typography.

### About
- Section label: `[01] About`.
- Large introductory paragraph about residential architects working from small projects to larger buildouts.
- Secondary paragraph emphasizes shelter, presence, craft, beauty, and function.
- Text CTA: `Work with Handshake`.
- Uses overlapping/offset architecture imagery.

### Portfolio
- Section label: `[02] Portfolio`.
- Large editorial heading about a decade of work and helping clients build a more beautiful world.
- Horizontal gallery rail with project cards.
- Projects:
  - Zellar Residence, 2026
  - Open Coworking, 2025
  - The Meridien, 2024
  - Du Ponte Residence, 2024
  - Mercury Interiors, 2023
  - Brady Residence, 2022
- Hover state uses subtle image scale and gentle contrast/saturation change.
- Arrow controls scroll the gallery on desktop; touch/trackpad swipe works on mobile.

### Services
- Section label: `[03] Services`.
- Heading: `How we can help`.
- Intro copy explains thoughtful modern architecture for new builds and reimagined spaces.
- Horizontally scrollable service carousel with next/back controls and swipe behavior.
- Service items:
  - Site Research
  - Schematic Design
  - Design Development
  - Permitting & Documentation
  - Construction Oversight
  - Interior Detailing
  - Post-Occupancy Support
- Each item includes a number, image thumbnail, title, and concise description.

### FAQ
- Title: `Common Questions`.
- Accordion rows with clean dividers.
- FAQ topics:
  - Typical project timeline
  - Permits and zoning approvals
  - Working with existing contractors
  - What architectural services include
  - Renovations and remodels
- Accordion buttons animate panel height and update `aria-expanded`.

### Team
- Section label: `[04] Team`.
- Heading: `Who we are`.
- Intro about lifelong friends turned business partners creating lasting spaces.
- Responsive portrait grid with grayscale/naturally lit image treatment.
- Roles:
  - Founder & CEO
  - Head of Operations
  - Architect
  - Lead Designer
  - 3D Rendering
  - Account Manager

### Contact
- Section label: `[05] Contact`.
- Heading: `Start a project`.
- Includes architectural imagery and statement: `Let's create something amazing.`
- Copy explains engagement models: private residences, builder partnerships, planning support, and 3 to 6 month project sprints.
- CTA button: `Work with Handshake`.

### Newsletter / Footer
- Section label: `[06] Newsletter`.
- Email signup for project highlights, design notes, and studio news.
- Footer columns:
  - Navigate links
  - Phone
  - Email
  - Address
- Large footer wordmark: `Handshake`.
- Includes `Back to top` anchor link.

## Components
### Wordmark
- Text: `Handshake`.
- Uses display serif typography with generous scale in footer.
- Header wordmark is centered on desktop and left-aligned on mobile.

### Button Link
- Props: `href`, text, accessible label when needed.
- States: default charcoal fill, hover/focus inverted outline, active scale, visible focus ring.

### Icon Button
- Used for gallery/carousel arrows.
- Props: direction, target rail id, screen-reader label.
- States: transparent default, charcoal hover/focus, active scale.

### Navigation Menu
- Desktop: horizontal links around wordmark.
- Mobile: fixed full-screen menu below sticky header.
- States: closed/open via `body.nav-open` and `aria-expanded`.

### Gallery Rail
- Props: rail id, scroll-snap cards.
- States: touch/trackpad scroll, arrow button scroll, keyboard focus on rail.
- Behavior: horizontal scroll with snap alignment and hidden scrollbar.

### Project Card
- Props: image, alt text, project name, year, destination.
- States: default, hover/focus subtle image scale.

### Service Card
- Props: number, image, alt text, title, description.
- States: default, hover image scale.

### Accordion Row
- Props: button label, panel id, panel copy.
- States: collapsed/expanded, plus icon rotates, panel max-height animates.

### Newsletter Form
- Props: email input, submit button, status message.
- States: default, required email validation, success acknowledgement.
- Production submission endpoint is `[NEEDS CONFIRMATION]`.

## Design Tokens
- Colors:
  - Warm off-white: `#f4f1ea`
  - Paper: `#fbfaf6`
  - Near-black charcoal: `#171715`
  - Muted gray: `#6b675f`
  - Divider stone: `#d6d0c4`
  - Concrete gray: `#9b978e`
  - Pale wood: `#b89672`
  - Subtle olive: `#747360`
  - Bronze accent: `#8a6f4f`
- Typography:
  - Display: editorial serif fallback stack for large headings and wordmark.
  - Sans: modern grotesk/system sans fallback for body and hero headline.
  - Mono: compact monospace fallback for labels, nav, metadata, and controls.
- Spacing:
  - Global page padding uses `clamp(1.25rem, 4vw, 4rem)`.
  - Section spacing uses `clamp(4rem, 10vw, 9rem)`.
  - Layouts use large editorial gaps and asymmetrical grid ratios.
- Radius:
  - Minimal to none; service cards use square edges with subtle borders.
- Motion:
  - Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
  - Slow reveal motion for headings/images/labels.
  - Subtle hover scale on project/service/team images.
  - Reduced-motion media query disables animation duration.

## Responsive Behavior
- Desktop: wide editorial grids, centered wordmark navigation, large typography, multi-column team grid, image-forward hero.
- Tablet: stacked editorial sections with preserved image scale and horizontal galleries.
- Mobile: single-column sections, readable hero headline, full-screen menu, swipeable galleries, stacked footer, no text overflow.
