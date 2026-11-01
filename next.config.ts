import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {};

export default function config(phase: string): NextConfig {
  // Do not start a local Workers runtime in production builds or type workers.
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    initOpenNextCloudflareForDev();
  }

  return nextConfig;
}
