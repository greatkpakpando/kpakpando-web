# Validation and handover

Verified 1 November 2026 against Next.js 16.4.3 / React 19.2.8 on Windows, using the production server and local Chrome through Playwright. Browser tooling, axe-core and formatting tooling were installed in a temporary directory, not added to the application dependencies.

## Build and code checks

- `npm run lint`: passed, no errors or warnings.
- `node node_modules/typescript/bin/tsc --noEmit`: passed.
- `npm run build`: passed on Next.js 16.4.3. All seven content pages are statically rendered. Shared error, robots and sitemap routes are generated. The old mock admin route returns 404 and has noindex metadata.
- The pinned pnpm 10.25.0 restored the dependency tree and generated the updated pnpm lockfile. Next and eslint-config-next were updated together from 16.3.1 to 16.4.3 after production auditing identified critical Next advisories. A source-map-js override to 1.2.2 resolves its transitive high-severity advisory.
- `pnpm audit --prod --json`: zero reported vulnerabilities after these changes.
- Full dependency audit: 4 moderate and 6 high advisories remain in development tooling/transitive dependencies; zero critical. These are outside the production dependency audit. No blanket force-upgrade or major ESLint migration was performed.

## Browser checks

35 page/viewport combinations: all seven pages at widths 320, 390, 768, 1024 and 1440 CSS pixels.

- All returned HTTP 200 with one H1, meaningful titles, no horizontal overflow and no observed broken loaded images.
- No browser runtime errors were recorded.
- All visible images across all seven desktop pages were separately loaded and checked successfully after scrolling through each page.
- Mobile menu opens/closes, Escape closes it, and navigation to Gallery works and closes the menu.
- Gallery category filtering, show-all reset, enlargement, next-image control, Escape dismissal and returning focus to the opening button passed.
- Reduced-motion mode changes root scroll behavior to auto.
- Unknown routes and `/admin` return HTTP 404.
- Direct telephone and email links use the supplied historical contact details. External phone/email delivery and the current operation of those contact points cannot be verified by browser testing.

## Accessibility and visual review

axe-core checks using WCAG 2 A, AA and WCAG 2.1 AA tags returned zero automated violations on all seven pages at the tested mobile viewport. This is an automated baseline, not a full manual accessibility certification or screen-reader audit.

Actual full-page rendered screenshots were opened and visually reviewed for the homepage on desktop and phone, and all other pages on desktop. Mobile gallery screenshots were also reviewed. Initial tests identified and fixed a header overflow at 320px. Final checks were rerun after the research-related pages and Next upgrade.

Representative final screenshots are in `docs/screenshots/home-desktop.png` and `docs/screenshots/home-mobile.png`. Originals and additional page screenshots are in the temporary local browser-tool directory's sibling files. Screenshot capture scrolls through lazy-loaded images and disables smooth scrolling while positioning the viewport to avoid misleading sticky-header captures.

## Content limitations

All three shared research responses were recovered and reviewed; full client prompts and approval history are absent. Refer to `research-reconciliation.md` for the source comparison. The 2023 founding date, provisional beneficiary totals, suggested training trades, clinical services, legal networks, new palette and generated image prompts were not treated as verified operations.

Videos were metadata-checked and sampled visually, not fully transcribed or editorially approved. Several contain sideways footage and none includes supplied accessible captions; they remain unpublished original source assets. No videos were silently autoplayed.

Current contacts, deployment origin, adopted policies, programme capacity, registration details, social URLs and image permissions remain client confirmation items. No payment collection, fake enquiry form, confidential case intake or unsupported impact/news content is included.

## Local commands

With the existing dependencies restored, run `npm run dev` and open http://localhost:3000. For a clean installation use the project's pinned pnpm 10.25.0: `pnpm install --frozen-lockfile` then `pnpm dev`. Production uses `npm run build` followed by `npm run start`.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed deployment origin before the production build to enable the sitemap and correct social-image URLs. `.env.example` documents the setting. Without it, the development origin is localhost and the sitemap contains no unverified URLs.
