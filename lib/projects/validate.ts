import {
  portfolioProjectSchema,
  type PortfolioProject,
} from "@/lib/projects/schema";

export function validateProjects(
  projects: readonly unknown[],
): PortfolioProject[] {
  const parsedProjects = projects.map((project) =>
    portfolioProjectSchema.parse(project),
  );

  const slugs = new Set<string>();
  const featuredOrders = new Set<number>();

  for (const project of parsedProjects) {
    if (slugs.has(project.slug)) {
      throw new Error(`Duplicate project slug: ${project.slug}`);
    }

    slugs.add(project.slug);

    if (project.featured.enabled) {
      if (project.featured.order === undefined) {
        throw new Error(
          `Featured project "${project.slug}" must define featured.order.`,
        );
      }

      if (project.featured.narrativeStage === undefined) {
        throw new Error(
          `Featured project "${project.slug}" must define featured.narrativeStage.`,
        );
      }

      if (featuredOrders.has(project.featured.order)) {
        throw new Error(
          `Duplicate featured project order: ${project.featured.order}`,
        );
      }

      featuredOrders.add(project.featured.order);
    }

    const evidenceIds = new Set<string>();

    for (const evidence of project.evidence) {
      if (evidenceIds.has(evidence.id)) {
        throw new Error(
          `Duplicate evidence id "${evidence.id}" in project "${project.slug}".`,
        );
      }

      evidenceIds.add(evidence.id);
    }

    const referencedEvidenceIds = [
      ...project.contributions.flatMap(
        (contribution) => contribution.evidenceIds,
      ),
      ...project.capabilities.flatMap((capability) => capability.evidenceIds),
    ];

    for (const evidenceId of referencedEvidenceIds) {
      if (!evidenceIds.has(evidenceId)) {
        throw new Error(
          `Unknown evidence id "${evidenceId}" referenced by project "${project.slug}".`,
        );
      }
    }
  }

  return parsedProjects;
}
