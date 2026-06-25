import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
 
export default function robots(): MetadataRoute.Robots {
  const domain = siteConfig.domain;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
