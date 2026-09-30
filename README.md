# ByteSpace New

A responsive frontend implementation of the ByteSpace course website, built with React, TypeScript, and Vite. Includes the full landing-page section sequence visible in the supplied Figma screenshots, bonus login/signup pages, and an interactive course catalog.

**Updating the earlier ZIP? Read [UPDATE_NOTES.md](UPDATE_NOTES.md) first.**

**Start with [START_HERE.md](START_HERE.md)** for the full GitHub → pull request → Vercel → assessment-portal walkthrough.

## Run locally

Use Node.js **22.12 or newer** (Node 22 is configured for CI).

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

```bash
npm run build       # TypeScript check and production build
npm run preview     # Serve the production build locally
npm run format      # Format the source and documentation
npm run format:check
```

No `.env`, API key, database, or backend is required. Fonts and images are included locally, so visitors do not need external image/font services.

## Included pages

| URL                  | Features                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`                  | Hero, search, partner strip, six-course grid, category chips, six learning paths, professional-growth section, course-creation section, creator CTA, testimonials, newsletter/footer |
| `/login`             | Email/password validation, show/hide password, signup and reset links, social-provider explanatory feedback                                                                          |
| `/signup`            | Name/email/password validation, accessible field errors, success feedback                                                                                                            |
| `/forgot-password`   | Validated reset-form demonstration                                                                                                                                                   |
| `/courses`           | Search, category and level filters, sorting, URL-backed state, empty state and reset                                                                                                 |
| `/courses/:id`       | Course overview, accessible About/Lessons/Reviews tabs, enrollment CTA                                                                                                               |
| `/privacy`, `/terms` | Demo-specific information                                                                                                                                                            |
| Unknown routes       | Friendly 404 page                                                                                                                                                                    |

## Implementation

- `src/components/` — shared navigation, brand, footer, search, course cards, decorative shapes, and landing sections.
- `src/pages/` — page components.
- `src/data/courses.ts` — typed local sample dataset and course filtering.
- `src/styles.css` — theme variables, layouts, interaction styles, and responsive breakpoints.
- `src/styles/landing-details.css` — footer, community section, and shared 3D coil styles.
- `public/images/` — local visual assets.
- `tests/website.spec.ts` — desktop/mobile browser journeys.
- `vercel.json` — Vite deployment and client-route fallback.
- `.github/workflows/ci.yml` — build and browser-test workflow on pushes and PRs.

The design uses a blue grid background, lime accents, locally bundled Poppins, responsive grids, semantic landmarks, focus indicators, a skip link, reduced-motion support, and labeled form controls. Desktop layouts become a touch-friendly single column on narrow screens.

## Browser checks

```bash
npx playwright install chromium
npm run build
npm run test:e2e
```

Linux CI can use `npx playwright install --with-deps chromium`. Six user journeys run in desktop Chromium and mobile Chromium emulation (twelve checks total). The mobile project is an iPhone-sized viewport; it is **not** a test on physical iOS Safari. Results are summarized in [docs/QA_REPORT.md](docs/QA_REPORT.md).

## Scope and design fidelity

The provided assessment requires the landing page and offers login/signup as bonuses. All visible landing sections from the supplied overview and close-up screenshots are implemented. The Figma design tool requires an authenticated account connection; exact node measurements and original image exports remain unavailable. The September 30 close-ups provide the full footer and testimonial text used in this update.

This is a **screenshot-based reconstruction**, not a claim of pixel-perfect Figma reproduction. The clearer supplied screenshots were used for visible headings and copy. Generated student and continuous-coil assets, locally downloaded stock portraits, CSS/SVG shapes, and a redrawn mark replace unavailable original assets. Footer and testimonial wording now matches the clearer references, including the footer’s Search button, 2023 date, and three link columns. Course metadata remains illustrative. See [docs/DESIGN_NOTES.md](docs/DESIGN_NOTES.md) and [docs/ASSET_CREDITS.md](docs/ASSET_CREDITS.md).

Authentication, OAuth, newsletter delivery, course editing, video playback, enrollment, payments, and review submission are **not connected to a backend**. Forms validate and explicitly explain the demo outcome; they do not store credentials or pretend to perform real authentication. No password is written to browser storage or sent over the network. Course catalog data and testimonials are illustrative, not verified commercial claims.

## Publishing status

This package contains the completed local implementation and deployment configuration. No public GitHub repository, hosted PR, Vercel deployment, or assessment-portal submission has been created on the student's behalf. Follow `START_HERE.md` from the student's own accounts to complete those steps.

## Design reference

[ByteSpace New — supplied Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1)

Design ownership remains with the original designer. This project is for the supplied frontend assessment.
