# Website requirements and content decisions

## Verified identity and sources

The official seal reads “The Great Kpakpando & Elizabeth Foundation”, abbreviated G-KAEF, and “Empowering youths, widows & orphans”. The supplied DOCX identifies Mrs Joy Jideofor (Esq) as founder, in memory of her widowed mother, Elizabeth Eje (1936–2016). The previous About screenshot incorrectly implies Elizabeth founded the organization; the detailed supplied history takes precedence.

Sources reviewed: every JPEG in public/assets (including all eight former-site screenshots), the complete text of `public/assets/former_site/ABOUT GREAT KPAKPANDO FOUNDATION HISTORY NEW.docx`, the current application and project instructions. Photographs show school visits, drug-awareness sessions and foundation-supported crop and pig farming. No dated impact totals, audited accounts or registration details were supplied.

The foundation supports widows, orphans and young people, particularly in Enugu State and neighbouring Nigerian communities, through education, economic empowerment, advocacy and drug-abuse awareness. Its history describes career guidance, learning materials, school uniforms, skill acquisition and concern about exploitation and trafficking. Its historical values connect Christian faith with practical provision for people in need.

## Research retrieval, 1 November 2026

The browsing tool initially returned only the ChatGPT login shell for each link. A second direct HTTPS retrieval recovered the complete shared assistant response from embedded page data for all three:

- https://chatgpt.com/s/t_6add3019d6308191bafa52ddea747ed7
- https://chatgpt.com/s/t_6add3e129bf48191aec929d44498f75b
- https://chatgpt.com/s/t_6addbb4f8f9c819182941755009db041

All three shared assistant responses were read in full. Each share contains one assistant message and no client prompts, subsequent clarification turns or explicit approvals. See `docs/research-reconciliation.md` for the full comparison and decisions. No locally saved conversations were found. Research 2 actually concerns Nigeria despite its UK-themed title. Research 3 places particular emphasis on girls' education and practical skills for both girls and boys. The four-part grouping is used as an editorial structure where it overlaps the documented history; proposed operational services and unverified facts are not presented as established. Full client approval history remains unavailable.

## Sitemap and journeys

- `/`: mission, genuine outreach hero, three beneficiary groups, story introduction, work highlights and invitation to connect.
- `/about`: Elizabeth's legacy, founder history, purpose, values, historical long-term vision.
- `/our-work`: four areas—family welfare/livelihoods, widow dignity/rights, education/skills, and substance-misuse awareness. Activities are described without unsupported dates or results.
- `/widows-rights`: advocacy purpose, professional enquiries and service boundaries; no confidential legal case intake.
- `/get-involved`: practical support enquiries, professional collaboration, responsible participation and accountability questions.
- `/gallery`: categorized genuine photographs with accessible enlargement and captions.
- `/contact`: verified historical email, phone and address; direct email and telephone actions, no fake form or payment flow.

Historical contact details from the contact screenshot: info@greatkpakpandofoundation.com; +234 706 055 0994; +234 806 165 7977; behind NYSC Orientation Camp, Awgu, Enugu State, Nigeria. Their current operation still needs client confirmation. Social screenshots identify the founder's account but do not provide reliable foundation profile URLs; no invented social links.

## Design and architecture

Official JPEG seal retained intact. Red approximately #ec0e1b and golden yellow approximately #eab509 are sampled brand anchors; a darker red #b91b2a provides readable controls. Warm ivory #faf8f3, deep brown-black #292421 and muted taupe are derived supporting neutrals, not additional official brand colors. Editorial serif display typography, restrained sans serif body type, generous whitespace, real imagery and subtle borders. No stock photography, generated branding, statistics, fabricated testimonials or clinical claims.

App Router, TypeScript, existing Tailwind 4, shared server-rendered layout and content module. Client JavaScript limited to navigation and gallery. Responsive CSS, keyboard support, reduced motion, Next Image, page metadata, robots and sitemap. Canonical sitemap only emitted with NEXT_PUBLIC_SITE_URL; historical domain ownership and deployment origin need verification.

## Outstanding content and launch questions

Confirm current contact details and domain, client prompts and approval history for the recovered research drafts, image/publication consent (especially children's photographs), proposed professional/referral capacity, current projects and dates, approved donation/payment arrangements, social URLs, legal status and privacy information. Historical aspiration for a school, orphanage, widow training centre, hospital and chapel is explicitly a vision, never a claim that these facilities exist. No donation system, clinical service, news feed with invented dates, backend or volunteer registration is implemented.

## Environment

Initial node_modules consisted of empty copied directories and launchers pointing to another project. Bundled Next documentation was also empty; official Next documentation was consulted as fallback until dependencies could be restored. No repository .git directory is present.

After dependency restoration the bundled local guides for layouts/pages, server/client components, Image and metadata were read. A production dependency audit identified critical advisories in pinned Next 16.3.1; Next and eslint-config-next are updated together to 16.4.3 with the existing pnpm 10.25.0 package manager and regenerated lockfile. References: https://github.com/advisories/GHSA-p293-qw3h-jr36 and https://github.com/advisories/GHSA-2464-fhr4-w9xw. This is a necessary security maintenance change; no infrastructure is introduced.

A transitive source-map-js advisory is addressed with a pinned 1.2.2 override in pnpm-workspace.yaml; final production audit reports zero vulnerabilities. Remaining development-tool advisories are recorded in docs/validation.md.
