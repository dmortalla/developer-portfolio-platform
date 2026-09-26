import type { PortfolioProject } from "@/lib/projects/schema";
import { validateProjects } from "@/lib/projects/validate";

const projectDefinitions: readonly unknown[] = [];

const projects = validateProjects(projectDefinitions);

export function getProjects(): readonly PortfolioProject[] {
  return projects;
}

export function getFeaturedProjects(): readonly PortfolioProject[] {
  return projects
    .filter((project) => project.featured.enabled)
    .toSorted(
      (first, second) =>
        (first.featured.order ?? Number.MAX_SAFE_INTEGER) -
        (second.featured.order ?? Number.MAX_SAFE_INTEGER),
    );
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((project) => project.slug === slug);
}
