import type { MetadataRoute } from "next";

import { getProjects } from "@/lib/projects/registry";
import { siteUrl } from "@/lib/site/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getProjects().map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
