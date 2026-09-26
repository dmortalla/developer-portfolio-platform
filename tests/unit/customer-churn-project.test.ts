import { describe, expect, it } from "vitest";

import { getFeaturedProjects, getProjectBySlug } from "@/lib/projects/registry";

describe("Customer Churn Prediction Platform", () => {
  it("is registered as the third featured system", () => {
    const featured = getFeaturedProjects();

    expect(featured[2]?.slug).toBe("customer-churn-prediction-platform");
    expect(featured[2]?.featured.order).toBe(3);
    expect(featured[2]?.featured.narrativeStage).toBe("predictive-ml");
  });

  it("preserves the verified serving-model boundary", () => {
    const project = getProjectBySlug("customer-churn-prediction-platform");

    const evidence = project?.evidence.find(
      (item) => item.id === "serving-model-boundary",
    );

    expect(evidence?.description).toContain("Logistic Regression baseline");
    expect(evidence?.description).toContain("XGBoost");
  });

  it("preserves the verified API input limitation", () => {
    const project = getProjectBySlug("customer-churn-prediction-platform");

    const evidence = project?.evidence.find(
      (item) => item.id === "api-input-limitation",
    );

    expect(evidence?.description).toContain("engineered model features");
    expect(evidence?.description).toContain("raw customer records");
  });

  it("preserves the verified source dataset dimensions", () => {
    const project = getProjectBySlug("customer-churn-prediction-platform");

    const evidence = project?.evidence.find(
      (item) => item.id === "data-pipeline",
    );

    expect(evidence?.description).toContain("7,043");
    expect(evidence?.description).toContain("21-column");
  });
});
