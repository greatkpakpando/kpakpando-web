import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/assets/former_site/"],
    },
    ...(process.env.NEXT_PUBLIC_SITE_URL
      ? {
          sitemap: `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/sitemap.xml`,
        }
      : {}),
  };
}
