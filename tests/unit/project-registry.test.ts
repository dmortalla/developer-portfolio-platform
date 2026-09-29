import { describe, expect, it } from "vitest";

import {
  getAdditionalProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjects,
} from "@/lib/projects/registry";

describe("project registry", () => {
  it("contains the Urban Mobility Data Lakehouse", () => {
    const projects = getProjects();

    expect(
      projects.some(
        (project) => project.slug === "urban-mobility-data-lakehouse",
      ),
    ).toBe(true);
  });

  it("retrieves Urban Mobility by slug", () => {
    const project = getProjectBySlug("urban-mobility-data-lakehouse");

    expect(project?.title).toBe("Urban Mobility Data Lakehouse");
    expect(project?.positioning.primaryDiscipline).toBe("data-engineering");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("not-a-real-project")).toBeUndefined();
  });

  it("registers Urban Mobility as the first featured project", () => {
    const featuredProjects = getFeaturedProjects();

    expect(featuredProjects[0]?.slug).toBe("urban-mobility-data-lakehouse");
    expect(featuredProjects[0]?.featured.order).toBe(1);
    expect(featuredProjects[0]?.featured.narrativeStage).toBe(
      "data-engineering",
    );
  });

  it("preserves exactly four featured systems", () => {
    const featuredProjects = getFeaturedProjects();

    expect(featuredProjects).toHaveLength(4);
    expect(featuredProjects.every((project) => project.featured.enabled)).toBe(
      true,
    );
  });

  it("partitions registered projects into featured and additional collections", () => {
    const projects = getProjects();
    const featuredProjects = getFeaturedProjects();
    const additionalProjects = getAdditionalProjects();

    const featuredSlugs = new Set(
      featuredProjects.map((project) => project.slug),
    );
    const additionalSlugs = new Set(
      additionalProjects.map((project) => project.slug),
    );

    expect(
      additionalProjects.every((project) => !project.featured.enabled),
    ).toBe(true);

    expect(
      featuredProjects.every((project) => !additionalSlugs.has(project.slug)),
    ).toBe(true);

    expect(
      additionalProjects.every((project) => !featuredSlugs.has(project.slug)),
    ).toBe(true);

    expect(featuredProjects.length + additionalProjects.length).toBe(
      projects.length,
    );
  });

  it("preserves the verified Gold mart evidence", () => {
    const project = getProjectBySlug("urban-mobility-data-lakehouse");

    const goldMartEvidence = project?.evidence.find(
      (evidence) => evidence.id === "gold-marts",
    );

    expect(goldMartEvidence?.description).toContain("daily_trip_summary");
    expect(goldMartEvidence?.description).toContain("borough_hour_demand");
    expect(goldMartEvidence?.description).toContain("payment_type_revenue");
  });
});
