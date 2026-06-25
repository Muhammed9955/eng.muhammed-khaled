import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { coursesData } from "@/config/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.domain;

  const coursesRoutes = coursesData.map((course) => ({
    url: `${domain}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${domain}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...coursesRoutes,
  ];
}
