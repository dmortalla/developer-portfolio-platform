import { z } from "zod";

export const projectDisciplineSchema = z.enum([
  "data-engineering",
  "analytics-bi",
  "data-science",
  "ml-engineering",
  "mlops",
  "ai-engineering",
  "llm-engineering",
  "agentic-ai",
  "automation",
  "software-engineering",
]);

export const projectStatusSchema = z.enum(["complete", "active", "archived"]);

export const narrativeStageSchema = z.enum([
  "raw-data",
  "data-engineering",
  "analytics-bi",
  "predictive-ml",
  "generative-ai",
]);

export const technologyCategorySchema = z.enum([
  "language",
  "framework",
  "data",
  "analytics",
  "ml-ai",
  "cloud",
  "devops",
  "testing",
  "observability",
  "visualization",
  "other",
]);

export const evidenceTypeSchema = z.enum([
  "architecture",
  "screenshot",
  "dashboard",
  "validation",
  "test",
  "metric",
  "ci-cd",
  "code",
  "documentation",
]);

export const architectureAssetSchema = z.object({
  type: z.enum(["diagram", "data-flow", "deployment"]),
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
});

export const architectureComponentSchema = z.object({
  name: z.string().min(1),
  responsibility: z.string().min(1),
  technologies: z.array(z.string().min(1)).default([]),
});

export const technologyGroupSchema = z.object({
  category: technologyCategorySchema,
  items: z.array(z.string().min(1)).min(1),
});

export const engineeringContributionSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  evidenceIds: z.array(z.string().min(1)).default([]),
});

export const evidenceItemSchema = z.object({
  id: z.string().min(1),
  type: evidenceTypeSchema,
  title: z.string().min(1),
  description: z.string().min(1),
  asset: z
    .object({
      src: z.string().min(1),
      alt: z.string().min(1),
    })
    .optional(),
  sourceUrl: z.url().optional(),
});

export const capabilitySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  evidenceIds: z.array(z.string().min(1)).min(1),
});

export const portfolioProjectSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),

  title: z.string().min(1),

  positioning: z.object({
    primaryDiscipline: projectDisciplineSchema,
    secondaryDisciplines: z.array(projectDisciplineSchema).default([]),
    systemArchetype: z.string().min(1),
    tagline: z.string().min(1),
    summary: z.string().min(1),
  }),

  status: projectStatusSchema,

  problem: z.object({
    context: z.string().min(1),
    challenge: z.string().min(1),
    objective: z.string().min(1),
  }),

  architecture: z.object({
    summary: z.string().min(1),
    components: z.array(architectureComponentSchema).min(1),
    dataFlow: z.array(z.string().min(1)).optional(),
    assets: z.array(architectureAssetSchema).default([]),
  }),

  technologies: z.array(technologyGroupSchema).min(1),

  contributions: z.array(engineeringContributionSchema).min(1),

  evidence: z.array(evidenceItemSchema).min(1),

  capabilities: z.array(capabilitySchema).min(1),

  repository: z.object({
    githubUrl: z.url(),
  }),

  demo: z
    .object({
      url: z.url(),
      label: z.string().min(1),
    })
    .optional(),

  featured: z.object({
    enabled: z.boolean(),
    order: z.number().int().positive().optional(),
    narrativeStage: narrativeStageSchema.optional(),
  }),

  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    image: z.string().min(1).optional(),
  }),

  metadata: z.object({
    created: z.string().min(1).optional(),
    updated: z.string().min(1).optional(),
  }),
});

export type PortfolioProject = z.infer<typeof portfolioProjectSchema>;
export type ProjectDiscipline = z.infer<typeof projectDisciplineSchema>;
export type NarrativeStage = z.infer<typeof narrativeStageSchema>;
