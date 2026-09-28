import { describe, expect, it } from "vitest";

import { getFeaturedProjects } from "@/lib/projects/registry";
import { buildPortfolioTechnologyGroups } from "@/lib/projects/summarize";

describe("portfolio technology summary", () => {
  it("derives technology groups from featured project content", () => {
    const groups = buildPortfolioTechnologyGroups(getFeaturedProjects());

    expect(groups.length).toBeGreaterThan(0);

    const mlAi = groups.find((group) => group.category === "ml-ai");

    expect(mlAi?.items).toContain("scikit-learn");
    expect(mlAi?.items).toContain("XGBoost");
    expect(
      groups.find((group) => group.category === "framework")?.items,
    ).toContain("LangChain");
    expect(mlAi?.items).toContain("FAISS");
  });

  it("deduplicates technologies shared across projects", () => {
    const groups = buildPortfolioTechnologyGroups(getFeaturedProjects());

    const languageGroup = groups.find((group) => group.category === "language");

    const pythonEntries =
      languageGroup?.items.filter((item) => item.startsWith("Python")) ?? [];

    expect(new Set(pythonEntries).size).toBe(pythonEntries.length);
  });

  it("keeps technology items sorted within each group", () => {
    const groups = buildPortfolioTechnologyGroups(getFeaturedProjects());

    for (const group of groups) {
      expect(group.items).toEqual(
        [...group.items].sort((first, second) => first.localeCompare(second)),
      );
    }
  });
});
