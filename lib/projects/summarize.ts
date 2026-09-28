import type { PortfolioProject } from "@/lib/projects/schema";

export type PortfolioTechnologyGroup = {
  category: string;
  items: string[];
};

function normalizeTechnologyLabel(item: string): string {
  if (item.toLowerCase() === "pytest") {
    return "pytest";
  }

  return item;
}

export function buildPortfolioTechnologyGroups(
  projects: readonly PortfolioProject[],
): PortfolioTechnologyGroup[] {
  const technologies = new Map<string, Map<string, string>>();

  for (const project of projects) {
    for (const group of project.technologies) {
      const existing =
        technologies.get(group.category) ?? new Map<string, string>();

      for (const item of group.items) {
        const label = normalizeTechnologyLabel(item);
        existing.set(label.toLowerCase(), label);
      }

      technologies.set(group.category, existing);
    }
  }

  return Array.from(technologies.entries()).map(([category, items]) => {
    const labels = Array.from(items.values());

    const hasVersionedPython = labels.some((item) =>
      /^Python \d+(?:\.\d+)*$/.test(item),
    );

    const normalizedItems = hasVersionedPython
      ? labels.filter((item) => item !== "Python")
      : labels;

    return {
      category,
      items: normalizedItems.toSorted((first, second) =>
        first.localeCompare(second),
      ),
    };
  });
}
