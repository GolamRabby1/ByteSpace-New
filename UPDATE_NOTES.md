# September 30 update — footer, community, and spirals

This ZIP contains the complete updated project.

## What changed

- Restored all three footer columns, all fifteen navigation items, newsletter spacing, full consent text, bottom divider, and the three bottom links from the supplied screenshot.
- Matched the footer button label (Search) and the supplied @ 2023 line exactly.
- Restored the full community introduction and all three testimonial names, roles, and quotes. Increased avatar/card sizes, aligned the cards at the top with natural heights, and adjusted the lime/blue background glow.
- Replaced stacked CSS ovals with continuous white and lime 3D coil assets in the hero, creator banner, growth artwork, and authentication artwork.
- Added working category links, page anchors, and accessible informational dialogs for footer items without a supplied service.
- Added responsive layouts and a browser check for footer navigation, dialogs, and the restored testimonial content.

The portraits are still stock replacements, and the new coils are generated reconstructions. Original Figma exports were inaccessible because the Figma tool requested an authenticated connection. See docs/DESIGN_NOTES.md for asset replacement guidance.

## If you already installed the first ZIP

1. Back up your project or commit your own changes before copying files.
2. Stop the dev server (Ctrl+C).
3. Copy/merge the following files from this ZIP into the matching locations in your existing project. New directories must be copied too.

```text
src/components/Footer.tsx
src/components/Decorations.tsx
src/components/LandingSections.tsx
src/components/Spiral.tsx                  (new)
src/pages/Auth.tsx
src/main.tsx
src/styles.css
src/styles/landing-details.css             (new)
public/images/spiral-white.png             (new)
public/images/spiral-lime.png              (new)
tests/website.spec.ts
```

Also copy README.md, START_HERE.md, UPDATE_NOTES.md, and the docs folder if you want the updated instructions and previews. If you modified any listed source file, merge the changes instead of overwriting your edits.

4. Run:

```bash
npm run dev
```

Dependencies and the lockfile have not changed. You do not need to rerun npm ci when updating your existing installed project. npm ci installs dependencies; it does not prevent editing your source files. If you extract into a completely new folder, run npm ci once there first.

5. Before deployment run npm run build. If you already created a GitHub repository, commit and push these changes on your existing feature branch and update its PR. Do not reinitialize the repository or replace its .git folder. Follow START_HERE.md for Vercel and portal submission.

## Preview files

The docs/previews folder includes updated desktop/mobile landing and authentication captures, plus separate footer, testimonial, and creator-banner previews for the changed areas.
