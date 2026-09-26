import { describe, expect, it } from "vitest";

import { getFeaturedProjects, getProjectBySlug } from "@/lib/projects/registry";

describe("Executive Healthcare BI System", () => {
  it("is registered as the second featured system", () => {
    const featured = getFeaturedProjects();

    expect(featured[1]?.slug).toBe("executive-healthcare-bi-system");
    expect(featured[1]?.featured.order).toBe(2);
    expect(featured[1]?.featured.narrativeStage).toBe("analytics-bi");
  });

  it("exposes the validated healthcare dimensional model", () => {
    const project = getProjectBySlug("executive-healthcare-bi-system");

    expect(project).toBeDefined();

    const evidence = project?.evidence.find(
      (item) => item.id === "dimensional-model",
    );

    expect(evidence?.description).toContain("fact_admissions");
    expect(evidence?.description).toContain("dim_patients");
    expect(evidence?.description).toContain("dim_departments");
    expect(evidence?.description).toContain("dim_dates");
  });

  it("preserves verified KPI values and metric limitations", () => {
    const project = getProjectBySlug("executive-healthcare-bi-system");

    const kpiEvidence = project?.evidence.find(
      (item) => item.id === "validated-kpis",
    );

    const limitationEvidence = project?.evidence.find(
      (item) => item.id === "metric-limitations",
    );

    expect(kpiEvidence?.description).toContain("46.09%");
    expect(kpiEvidence?.description).toContain("4.40");
    expect(kpiEvidence?.description).toContain("3,474.27");

    expect(limitationEvidence?.description).toContain("proxy metric");
    expect(limitationEvidence?.description).toContain("30-day");
  });
});
