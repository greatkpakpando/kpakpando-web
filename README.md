# The Great Kpakpando & Elizabeth Foundation

A responsive informational website for The Great Kpakpando & Elizabeth Foundation (G-KAEF), representing its support for widows, orphans, children and young people in Nigeria. The implementation combines the supplied foundation history, official logo, real community photographs and conservatively reconciled website research.

The application is intentionally small: seven content pages, a shared layout, a filterable photograph gallery and direct contact links. It has no database, authentication, CMS, payment system, registration flow or enquiry-processing backend.

## Technology

| Technology                    | Role                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| Next.js 16.4.3                | App Router, file-based routes, static rendering, metadata and image optimization     |
| React / React DOM 19.2.8      | Page composition and the interactive navigation and gallery                          |
| TypeScript                    | Strictly checked application code; imports use the `@/*` alias for `src/*`           |
| Tailwind CSS 4                | Existing CSS toolchain and base styles, integrated through PostCSS                   |
| Custom CSS                    | Brand variables, component styling, layouts and responsive behavior in `globals.css` |
| Roboto variable               | Locally hosted site-wide typography through `next/font/local`                        |
| ESLint 9 + eslint-config-next | Next.js, React and TypeScript lint checks                                            |
| pnpm 10.25.0                  | Pinned package manager; `pnpm-lock.yaml` is the dependency lockfile                  |

`package.json` declares dependency versions/ranges. The lockfile records exact resolved versions. The package is private and named `kpakpando-web`; it is not intended for publishing to npm. Keep this name aligned with the Cloudflare Worker name because automatic deployment setup derives its self-reference service name from the project identity.

## Requirements and local setup

Next.js requires Node.js **20.9.0 or later**. Development was checked with Node.js 22.21.1 on Windows. Use the pinned pnpm version for reproducible installation.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the server with Ctrl+C. To use another port:

```sh
pnpm dev --port 3001
```

If dependencies are already installed, `npm run dev`, `npm run build`, `npm run start` and `npm run lint` also invoke the existing scripts. Prefer pnpm for installing or updating dependencies so the repository continues to use one lockfile.

### Commands

| Command                  | Purpose                                                           |
| ------------------------ | ----------------------------------------------------------------- |
| `pnpm dev`               | Start the development server with automatic updates               |
| `pnpm lint`              | Run ESLint                                                        |
| `pnpm exec tsc --noEmit` | Validate TypeScript without emitting JavaScript                   |
| `pnpm build`             | Compile, type-check and prerender the production application      |
| `pnpm start`             | Serve the existing production build                               |
| `pnpm audit --prod`      | Audit production dependencies against current advisories          |
| `pnpm audit`             | Audit the complete dependency tree, including development tooling |

There is no `test` or `typecheck` package script. Use the TypeScript command above. There is no committed unit-test runner or browser-test dependency; previous browser and accessibility checks used tools installed outside the application. Do not assume those temporary tools exist on another machine.

## Environment configuration

Copy `.env.example` to `.env.local` and set the public deployment origin:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-confirmed-domain.example
```

Replace the example with the actual, verified origin, including `https://` in production. Use `http://localhost:3000` for local development if needed. Never place secrets in a `NEXT_PUBLIC_` variable: its value is public.

This is the only application environment setting. It controls the metadata base URL, sitemap entries and the sitemap URL in robots.txt. When unset, metadata uses localhost and the sitemap deliberately contains no unverified URLs. Set it **before building**: the relevant routes are statically generated. Changing the deployment origin requires a rebuild.

Environment files are ignored by the current `.gitignore`; provision the setting separately in each deployment environment. No API keys or external services are required to render the website.

## Repository structure

```text
src/
  app/
    layout.tsx                 Shared page shell, font loading and default metadata
    page.tsx                   Homepage and its composed sections
    globals.css                Design tokens, styles and responsive rules
    not-found.tsx              Shared 404 experience
    about/page.tsx             Foundation and founder history
    our-work/page.tsx          Four areas of work
    widows-rights/page.tsx     Advocacy purpose and enquiry boundaries
    get-involved/page.tsx      Support and professional collaboration enquiries
    gallery/page.tsx           Gallery introduction and interactive gallery
    contact/page.tsx           Historical address, telephone and email details
    robots.ts                  Generated robots.txt
    sitemap.ts                 Generated sitemap.xml
    fonts/
      Roboto-Variable.ttf      Locally hosted variable font
      OFL.txt                  Font license; retain with the font
  components/
    layout/
      FoundationHeader.tsx     Branding, active links and responsive navigation
      FoundationFooter.tsx     Foundation summary, links and contact information
    sections/
      Shared.tsx               Arrow, PageIntro and ConnectSection
      NigeriaCollage.tsx       Homepage map-shaped photo composition
      Gallery.tsx              Category filtering and photograph enlargement
    ui/
      SunIcon.tsx              Shared decorative SVG sun; no icon dependency
  data/
    foundation.ts              Foundation details, navigation, work and gallery data
public/
  assets/
    logo.jpeg                  Original foundation seal
    nigeria-mask.svg           Vector mask for the homepage collage
    former_site/               Historical screenshots and source DOCX
    ...                        Original photographs, videos and reference materials
 docs/
  website-requirements.md       Verified identity, scope and unresolved content
  asset-inventory.md            Asset paths, intended uses and media limitations
  research-reconciliation.md    Comparison of the three shared research responses
  validation.md                 Recorded build, browser and accessibility checks
  screenshots/                  Captured design-review images
```

The actual source asset names include spaces and timestamps; retain their exact names unless all references are deliberately updated. `node_modules/`, `.next/`, `next-env.d.ts` and `*.tsbuildinfo` are installed or generated artifacts, not authored product code. The obsolete starter admin route is removed; `/admin` now uses the normal 404 behavior.

## Pages and visitor journeys

| Route            | Content and purpose                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`              | Nigeria-shaped community collage, mission, three beneficiary groups, founder-story introduction, four work highlights and invitation to connect |
| `/about`         | Elizabeth Eje's legacy, Mrs Joy Jideofor's founding purpose, values and the historical long-term vision                                         |
| `/our-work`      | Family welfare/livelihoods, widows' dignity and rights, education/skills, and substance-misuse awareness                                        |
| `/widows-rights` | The foundation's advocacy commitment, professional enquiries and limits around legal assistance                                                 |
| `/get-involved`  | Enquiries about sharing time, skills, professional expertise and practical support; care and accountability information                         |
| `/gallery`       | Genuine activity photographs, category filters and accessible enlargement                                                                       |
| `/contact`       | Direct email and telephone links plus the historically supplied Nigerian address                                                                |

Work links use stable fragments such as `/our-work#education`. Contact actions use `mailto:` and `tel:` and depend on the visitor's installed applications. They do not submit data to this website. The site does not guarantee response times, legal representation, clinical treatment or emergency assistance.

## Rendering and component architecture

Pages and the root layout are Server Components by default. Content is imported from local modules; no runtime API or database fetch is needed. The production build currently prerenders the content routes, robots.txt and sitemap.xml. This is a normal Next.js application, not an `output: export` static export: its default image optimization expects Next-compatible hosting.

Only two authored components declare `use client`:

- `FoundationHeader` uses pathname information for active navigation and local state for the menu. Following a menu link closes it; Escape closes it and returns focus to the menu button.
- `Gallery` holds the selected category and photograph in React state. It uses the browser's native modal `dialog`, restores focus to the opening button, supports Escape and left/right arrow keys, and provides previous/next buttons. Enlargement navigation cycles through the complete photo collection, even when a category filter is active.

`PageIntro` provides consistent inner-page headings. `ConnectSection` supplies the shared contact invitation. `NigeriaCollage` is server-rendered: CSS arranges the photographs, clips them with an SVG mask and provides restrained hover motion. It does not require a map SDK, geolocation API or animation library.

## Content editing guide

| Change                                             | Edit                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------- |
| Organization name, email, phone numbers or address | `foundation` in `src/data/foundation.ts`                            |
| Main navigation labels and destinations            | `navigation` in the same data module                                |
| Work titles, descriptions, images and ordering     | `programs` in the same module; entries are sorted by their `number` |
| Gallery images, captions, categories and alt text  | `galleryPhotos` in the same module                                  |
| Available category filter buttons                  | `categories` in `src/components/sections/Gallery.tsx`               |
| Hero headline, supporting text and calls to action | `src/app/page.tsx`                                                  |
| Hero collage photographs and alternative text      | `moments` in `NigeriaCollage.tsx`                                   |
| Founder biography or page-specific prose           | The relevant `src/app/.../page.tsx` file                            |
| Shared navigation/footer presentation              | `FoundationHeader.tsx` / `FoundationFooter.tsx`                     |
| Global/default SEO details                         | `src/app/layout.tsx`; inner pages also export their own metadata    |

The `photo(time)` helper constructs the existing timestamped JPEG paths. For unrelated new filenames, use their full `/assets/...` URL instead. A new image should have meaningful alternative text and an appropriate crop. Do not identify a photographed person, event date or outcome without supporting evidence.

When adding a page, create its App Router folder and `page.tsx`, add metadata, link to it where appropriate and update `src/app/sitemap.ts`. Add a new gallery category to both its image data and filter list. Preserve programme IDs when editing copy so existing fragment links continue to work.

The SVG sun and the message “Rooted in love. Built on the belief that everyone matters.” belong to the homepage story section, not the hero. `SunIcon.tsx` also supplies the values-banner and map-collage decorations, replacing the earlier text glyphs.

## Styling, typography and responsive design

`src/app/globals.css` imports Tailwind and defines the custom design system. Most presentation uses semantic component class names rather than long utility-class lists. No CSS-in-JS or component-library dependency is installed.

| Token         | Value / purpose                                                   |
| ------------- | ----------------------------------------------------------------- |
| `--brand-red` | `#ec0e1b`, representative red sampled from the supplied JPEG logo |
| `--red`       | `#b91b2a`, darker action/text red                                 |
| `--red-dark`  | `#981423`, deeper hover tone                                      |
| `--gold`      | `#eab509`, representative gold sampled from the logo              |
| `--cream`     | `#faf8f3`, warm background                                        |
| `--paper`     | `#fff`, white surfaces and hero                                   |
| `--ink`       | `#292421`, primary text                                           |
| `--muted`     | `#6c6660`, supporting text                                        |
| `--border`    | `#e5e0d7`, subtle divisions                                       |
| `--sans`      | Locally loaded Roboto with Arial/sans-serif fallback              |

Roboto is loaded in `layout.tsx` with a CSS variable, variable weights 100-900 and `display: swap`. Both headings and body text use it. The font is served from this application, so visitors do not need to contact Google Fonts. Keep `src/app/fonts/OFL.txt` when retaining or redistributing the font.

Responsive rules cover small phones through large desktops. Navigation changes to a menu up to 960px; primary content layouts change around 760px, with additional adjustments around 1100px, 440px and 360px. Headlines use fluid sizing. Reduced-motion preferences disable smooth scrolling and visual transitions. The earlier 1px increase to small text sizes is retained.

For the hero, edit the `.hero-nigeria`, `.nigeria-art`, `.nigeria-collage` and `.map-*` rules. The Nigeria outline is an SVG mask, not a rendered screenshot. The marker is illustrative of the foundation's Enugu roots; it is not an exact office locator or evidence of nationwide service coverage. CSS masking is intended for modern browsers.

## Assets, attribution and source materials

- `public/assets/logo.jpeg` is the official seal and is used intact for branding and metadata.
- Original foundation photographs illustrate education, farming support and youth outreach. The supplied reference `hero.png` informs the layout but is not displayed as foundation content.
- `nigeria-mask.svg` is a code-native vector mask derived from the [Nigeria GeoJSON boundary](https://github.com/johan/world.geo.json/blob/master/countries/NGA.geo.json).
- Roboto comes from the [official Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/roboto) and uses the included SIL Open Font License.
- Original videos remain available as source material. Several need orientation correction; transcripts, captions and editorial review are required before publication. There is no background-video autoplay.
- Former-site screenshots and the historical DOCX are reference materials, not website section images. Original client assets have not been deleted during cleanup.

Files in `public/` are addressable by URL. The robots exclusion for `/assets/former_site/` is a crawler preference, not access control. If any reference material must be private, remove it from the deployment artifact or move its archival copy outside `public/` before public hosting.

The screenshots in `docs/screenshots/` record earlier review states and can differ from the latest hero and typography. They are not imported by the application or served as page content.

## SEO and accessibility

The root layout defines the default title template, description, Open Graph/Twitter metadata and foundation-logo icons. Individual content pages supply their own titles and descriptions. `robots.ts` excludes the former-site reference directory and `/admin` from crawling and advertises the sitemap only when the deployment origin is configured.

The interface includes semantic landmarks, a skip-to-content link, one main page heading, alternative text, current-page navigation states, visible focus indicators, keyboard-operable controls and a native modal photo viewer. Nonessential symbols are hidden from assistive technology. Next Image supplies image sizing and optimization; the first hero collage images are preloaded and noncritical photographs use normal lazy loading.

Automated accessibility checks supplement, rather than replace, keyboard, screen-reader, contrast and content review.

## Configuration and maintenance

- `tsconfig.json`: strict TypeScript, bundler module resolution and the `@/*` import alias.
- `postcss.config.mjs`: Tailwind's PostCSS integration.
- `eslint.config.mjs`: Next.js core web vitals and TypeScript rules; generated output is ignored.
- `pnpm-workspace.yaml`: existing ignored build-script settings for sharp/unrs-resolver and a `source-map-js: 1.2.2` override addressing a recorded transitive advisory. Review current advisories when changing it.
- `.gitignore`: generated artifacts, dependencies, local environment files and debug logs.
- `AGENTS.md` / `CLAUDE.md`: repository instructions for coding assistants. Read the bundled `node_modules/next/dist/docs/` guides before Next-specific code changes as instructed there.

`next.config.ts` intentionally exports the default configuration. Keep this file: the OpenNext Cloudflare adapter requires a Next configuration file even when no custom settings are needed. Removing it causes an interactive setup prompt that fails in unattended CI. Do not add infrastructure or new dependencies for ordinary content or CSS changes. For dependency updates, use pnpm, review the lockfile, then rerun lint, TypeScript and the production build.

## Verification

```sh
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm audit --prod
```

Recorded implementation checks are detailed in [docs/validation.md](docs/validation.md): production build, lint and TypeScript passed; browser checks covered all seven pages at 320, 390, 768, 1024 and 1440px, including mobile navigation, gallery filters, modal focus restoration and 404 behavior. Automated WCAG A/AA scans reported no violations in their tested states. Subsequent hero/font changes were visually reviewed on desktop and mobile and checked for homepage overflow. Recheck the current implementation after changes; these are recorded results, not a continuously running test suite.

The last recorded production dependency audit was clear. The full development-tool audit still reported moderate/high advisories, documented in the validation report. Audit results change over time; rerun them before release. Next.js and its matching ESLint configuration were upgraded from 16.3.1 to 16.4.3 for verified dependency fixes.

## Deployment

### Cloudflare Workers / OpenNext

The Cloudflare deployment uses OpenNext. Keep the root `next.config.ts` committed so adapter setup does not stop at the “Missing required next.config file” prompt. This file uses Next.js defaults and does not import packages that are absent from the application dependencies. After pulling this fix, retry the existing Cloudflare deployment. Cloudflare-specific adapter, Worker bindings and account settings are managed by that deployment setup; the repository does not currently contain a Wrangler or OpenNext configuration.

The current deployment targets the Worker **`kpakpando-web`**. The package name is aligned to that exact name so automatically generated `WORKER_SELF_REFERENCE` bindings do not target the nonexistent `kpakpando-foundation-web` service. If a Wrangler configuration is introduced later, both its `name` and the `service` for `WORKER_SELF_REFERENCE` must be `kpakpando-web`. Keep `WORKER_SELF_REFERENCE` itself as the binding name. A CLI `--name` override changes the deployment target but does not automatically rewrite service-binding destinations. If a build cache retains an older generated configuration, clear that deployment cache and retry from the updated commit.

The local Next production build verifies application compilation, but does not upload a Worker or prove that Cloudflare account configuration is valid. If a later deployment step fails, inspect its new error separately. See the [OpenNext setup guide](https://opennext.js.org/cloudflare/get-started) for explicit adapter configuration when needed.

### Standard Node.js hosting

Use a host supporting Node.js and Next.js image optimization. Install with the pinned package manager, set `NEXT_PUBLIC_SITE_URL`, then build and start:

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

On a platform with managed Next.js hosting, configure the same install/build commands and public-origin environment setting. There are no migrations, database credentials or background workers to provision. Rebuild after changing content, font files, metadata or the public origin. Confirm that the deployed sitemap, social-image URLs, image optimization and telephone/email links work at the real domain.

## Research, content boundaries and launch gaps

The foundation's supplied history identifies Mrs Joy Jideofor (Esq) as founder, in honour of her mother Elizabeth Eje. Historical objectives and photographs substantiate the displayed education, livelihood and awareness activities.

All three shared ChatGPT assistant responses were recovered and compared. The shares omit the original client prompts and subsequent approvals, so AI suggestions were not treated as proof of new operational services. Despite its title, the second response concerns Nigeria. The latest draft emphasizes widow rights, girls' education and practical skills for girls and boys. The site organizes overlapping verified topics without claiming an established pro bono network, clinic, scheduled training programme, registration number or unsupported impact totals.

Before launch, confirm current contact details and domain ownership, image-publication permissions, legal identity, adopted policies and any professional service/referral capacity. Payment accounts, donation capabilities, confidential case intake, dated news, impact reports and additional policies need verified content and implementation before publication. The historical vision of future facilities is presented as an aspiration, not an existing campus.

Further documentation:

- [Website requirements](docs/website-requirements.md)
- [Asset inventory](docs/asset-inventory.md)
- [Research reconciliation](docs/research-reconciliation.md)
- [Validation and limitations](docs/validation.md)

## Cleanup record

Removed unused create-next-app SVGs (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`), the obsolete admin route, and 38 obsolete hero rules/selector branches. The empty Next configuration was initially removed, then restored because the OpenNext Cloudflare deployment requires it. Unused markup hooks were removed and the old serif token was consolidated into the active Roboto token. The generic starter package name was replaced with the foundation package name.

Original client materials, the active components, essential framework/tooling dependencies, repository instructions and required licensed font/map assets are retained. No application dependencies were added for this cleanup.
