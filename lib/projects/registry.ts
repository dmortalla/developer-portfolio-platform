import { aiRagKnowledgeAssistant } from "@/content/projects/ai-rag-knowledge-assistant";
import { customerChurnPredictionPlatform } from "@/content/projects/customer-churn-prediction-platform";
import { developerPortfolioPlatform } from "@/content/projects/developer-portfolio-platform";
import { executiveHealthcareBiSystem } from "@/content/projects/executive-healthcare-bi-system";
import { urbanMobilityDataLakehouse } from "@/content/projects/urban-mobility-data-lakehouse";
import type { PortfolioProject } from "@/lib/projects/schema";
import { validateProjects } from "@/lib/projects/validate";

const projectDefinitions: readonly unknown[] = [
  urbanMobilityDataLakehouse,
  executiveHealthcareBiSystem,
  customerChurnPredictionPlatform,
  aiRagKnowledgeAssistant,
  developerPortfolioPlatform,
];

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

export function getAdditionalProjects(): readonly PortfolioProject[] {
  return projects.filter((project) => !project.featured.enabled);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((project) => project.slug === slug);
}
