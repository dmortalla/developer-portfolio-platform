import { describe, expect, it } from "vitest";

import {
  getAdditionalProjects,
  getFeaturedProjects,
  getProjectBySlug,
} from "@/lib/projects/registry";

describe("Developer Portfolio Platform", () => {
  it("is registered as additional engineering work", () => {
    const project = getProjectBySlug("developer-portfolio-platform");
    const additionalProjects = getAdditionalProjects();

    expect(project?.title).toBe("Developer Portfolio Platform");
    expect(project?.positioning.primaryDiscipline).toBe("software-engineering");
    expect(project?.featured.enabled).toBe(false);
    expect(
      additionalProjects.some(
        (additionalProject) =>
          additionalProject.slug === "developer-portfolio-platform",
      ),
    ).toBe(true);
  });

  it("does not alter the four-system flagship progression", () => {
    const featuredProjects = getFeaturedProjects();

    expect(featuredProjects).toHaveLength(4);
    expect(
      featuredProjects.some(
        (project) => project.slug === "developer-portfolio-platform",
      ),
    ).toBe(false);
  });

  it("preserves verified production and quality evidence", () => {
    const project = getProjectBySlug("developer-portfolio-platform");

    expect(project?.demo?.url).toBe("https://dmortalla.dev");
    expect(
      project?.evidence.some((evidence) => evidence.id === "ci-pipeline"),
    ).toBe(true);
    expect(
      project?.evidence.some(
        (evidence) => evidence.id === "accessibility-testing",
      ),
    ).toBe(true);
    expect(
      project?.evidence.some(
        (evidence) => evidence.id === "production-deployment",
      ),
    ).toBe(true);
  });
});
