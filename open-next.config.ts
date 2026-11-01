import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// All routes are prerendered and content changes are published by rebuilding.
// No revalidation queue, tag store, R2 bucket or self-service binding is needed.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
  queue: "dummy",
  tagCache: "dummy",
  cachePurge: "dummy",
});
