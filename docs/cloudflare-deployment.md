# Cloudflare deployment configuration and verification

## Diagnosis

The supplied error 10143 targeted Worker `kpakpando-web` but declared a `WORKER_SELF_REFERENCE` service destination of `kpakpando-foundation-web`, which does not exist. Before this change the repository had no `wrangler.jsonc` or `open-next.config.ts`, no installed adapter/CLI, and no explicit Cloudflare build/deploy scripts. The failing binding was therefore outside the tracked configuration. Renaming the package alone did not give the repository control over the deployed bindings.

The repository now defines the Worker, asset/image bindings, adapter cache strategy, tool versions and scripts explicitly. The site content, React components, photographs, videos, fonts and styles are unchanged.

## Why the self-reference binding is omitted

The source has no ISR intervals, on-demand revalidation, Server Actions or revalidation queue usage. The production build confirms that all seven content pages are prerendered. OpenNext 1.20.15's installed implementation was inspected:

- `dist/api/overrides/queue/memory-queue.js` and `dist/api/durable-objects/queue.js` use `WORKER_SELF_REFERENCE` for revalidation.
- `dist/cli/build/patches/plugins/res-revalidate.js` patches a revalidation path to use the binding.
- `dist/api/overrides/incremental-cache/static-assets-incremental-cache.js` reads the prerendered cache using `ASSETS`.
- `dist/cli/templates/images.js` fetches the site's local images using `ASSETS` and optimizes them using `IMAGES`; it does not require the self-reference service.

`open-next.config.ts` follows OpenNext's SSG approach: read-only static-assets incremental caching with interception enabled. Queue, tag cache and purge implementations are explicitly `dummy`. `wrangler.jsonc` therefore has no `services` entries and no reference to the missing Worker. Do not use this static cache strategy unchanged if adding ISR or runtime cache writes later.

## Files

- `wrangler.jsonc`: Worker `kpakpando-web`, main `.open-next/worker.js`, assets `.open-next/assets`, `ASSETS` and `IMAGES`, and the required Node compatibility flags. No account identifier or credentials are embedded.
- `open-next.config.ts`: static cache configuration and disabled revalidation components. No R2 bucket, Durable Object, D1 database or queue is required.
- `next.config.ts`: initializes Cloudflare context only for `PHASE_DEVELOPMENT_SERVER`. The phase guard avoids starting local Workers emulation during production builds and type workers.
- `package.json` / `pnpm-lock.yaml`: pin `@opennextjs/cloudflare` 1.20.15 and Wrangler 4.156.0, preserving Next 16.4.3 and React 19.2.8. The adapter peer range includes this Next version. Wrangler requires Node 22+; `.node-version` records 22.21.1 and package engines express the minimum.
- `public/_headers`: immutable caching for fingerprinted `/_next/static/*` assets. Existing media are untouched.
- `.gitignore`, ESLint and TypeScript configuration: keep generated Cloudflare build/runtime directories out of Git and source validation; preserve the environment template while ignoring local values.

## Cloudflare dashboard settings

Use the checked-in tools instead of automatic setup or an unpinned `npx wrangler deploy`:

| Setting             | Value                                                                |
| ------------------- | -------------------------------------------------------------------- |
| Worker/project name | `kpakpando-web`                                                      |
| Install             | `pnpm install --frozen-lockfile`, including development dependencies |
| Build               | `pnpm run build:cloudflare`                                          |
| Deploy              | `pnpm run deploy:cloudflare`                                         |
| Node                | 22.21.1, or a compatible Node 22+ runtime                            |
| Build variable      | `NEXT_PUBLIC_SITE_URL` set to the verified HTTPS site origin         |

The build command invokes the normal Next production build and then creates the adapter bundle. The deploy command publishes that existing bundle. `pnpm deploy` combines both for manual authenticated use; `pnpm preview` combines build and local Workers preview. No remote deployment was performed in this task.

Clear any stale generated configuration/build cache from the earlier automatic setup if it still appears in deployment logs. The effective Wrangler configuration must not contain the previous `WORKER_SELF_REFERENCE` service destination. Do not override the Worker name with the old name in dashboard commands or environment-specific configuration.

## Verification performed

- Frozen, offline pnpm installation: passed; dependency resolution matches the committed lockfile inputs.
- `npm run build`: passed on Next 16.4.3, including TypeScript checking and prerendering all seven content pages.
- `npm run lint`: passed.
- Direct config evaluation confirmed static-assets caching, interception enabled, and `dummy` queue/tag/purge overrides.
- Wrangler's own `unstable_readConfig` successfully parsed the configuration as Worker `kpakpando-web`, bindings `ASSETS` and `IMAGES`, and `services: []`.
- `git diff --check`: passed; `git diff --name-only -- src public/assets` showed no website/source-media changes.

### Local OpenNext verification limit

`npm run build:cloudflare` was attempted. The adapter warned that Windows is not fully supported, then its esbuild config-compilation stage failed in this restricted environment with `Cannot read directory "../../../..": Access is denied`. This occurred before Worker bundling; it was not error 10143 and did not contact the deployment API. An explicit relative configuration path was also attempted with the same filesystem restriction. WSL access was unavailable.

Consequently the normal production build and configuration validation passed, but a complete OpenNext Worker bundle and real Cloudflare deployment have not been verified locally. Run the documented Cloudflare build command on the Linux Workers Builds runner to finish that verification. Do not treat the local Next build as proof of a successful remote deployment.

## References

- [OpenNext setup and script requirements](https://opennext.js.org/cloudflare/get-started)
- [OpenNext caching guidance, including SSG](https://opennext.js.org/cloudflare/caching)
- [OpenNext image bindings](https://opennext.js.org/cloudflare/howtos/image)
- [Cloudflare service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/)
