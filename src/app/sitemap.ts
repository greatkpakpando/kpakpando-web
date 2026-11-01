import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return origin
    ? [
        "",
        "/about",
        "/our-work",
        "/widows-rights",
        "/get-involved",
        "/gallery",
        "/contact",
      ].map((path) => ({
        url: `${origin}${path}`,
      }))
    : [];
}
