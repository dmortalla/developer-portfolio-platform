import type { PortfolioProject } from "@/lib/projects/schema";

export type PortfolioTechnologyGroup = {
  category: string;
  items: string[];
};

export function buildPortfolioTechnologyGroups(
  projects: readonly PortfolioProject[],
): PortfolioTechnologyGroup[] {
  const technologies = new Map<string, Set<string>>();

  for (const project of projects) {
    for (const group of project.technologies) {
      const existing = technologies.get(group.category) ?? new Set<string>();

      for (const item of group.items) {
        existing.add(item);
      }

      technologies.set(group.category, existing);
    }
  }

  return Array.from(technologies.entries()).map(([category, items]) => ({
    category,
    items: Array.from(items).toSorted((first, second) =>
      first.localeCompare(second),
    ),
  }));
}
