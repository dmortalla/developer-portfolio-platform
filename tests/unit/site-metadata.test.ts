import { describe, expect, it } from "vitest";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { getProjects } from "@/lib/projects/registry";
import { siteUrl } from "@/lib/site/profile";

describe("site metadata routes", () => {
  it("allows public crawling and exposes the sitemap", () => {
    const result = robots();

    expect(result.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });

    expect(result.sitemap).toBe(`${siteUrl}/sitemap.xml`);
  });

  it("includes the homepage and every project route", () => {
    const entries = sitemap();

    expect(entries[0]?.url).toBe(siteUrl);

    for (const project of getProjects()) {
      expect(
        entries.some(
          (entry) => entry.url === `${siteUrl}/projects/${project.slug}`,
        ),
      ).toBe(true);
    }
  });
});
