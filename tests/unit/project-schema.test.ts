import { describe, expect, it } from "vitest";

import { portfolioProjectSchema } from "@/lib/projects/schema";
import { validateProjects } from "@/lib/projects/validate";

const validProject = {
  slug: "example-project",
  title: "Example Project",

  positioning: {
    primaryDiscipline: "data-engineering",
    secondaryDisciplines: [],
    systemArchetype: "Example System",
    tagline: "A valid project used for schema tests.",
    summary: "A valid project used to verify portfolio content validation.",
  },

  status: "complete",

  problem: {
    context: "A test context.",
    challenge: "A test challenge.",
    objective: "A test objective.",
  },

  architecture: {
    summary: "A test architecture.",
    components: [
      {
        name: "Test Component",
        responsibility: "Supports schema validation tests.",
        technologies: ["TypeScript"],
      },
    ],
    assets: [],
  },

  technologies: [
    {
      category: "language",
      items: ["TypeScript"],
    },
  ],

  contributions: [
    {
      title: "Implemented validation",
      description: "Implemented project validation.",
      evidenceIds: ["validation-test"],
    },
  ],

  evidence: [
    {
      id: "validation-test",
      type: "test",
      title: "Validation Test",
      description: "Evidence used by the schema unit tests.",
    },
  ],

  capabilities: [
    {
      name: "Schema validation",
      description: "Demonstrates validated structured project content.",
      evidenceIds: ["validation-test"],
    },
  ],

  repository: {
    githubUrl: "https://github.com/example/example-project",
  },

  featured: {
    enabled: true,
    order: 1,
    narrativeStage: "data-engineering",
  },

  seo: {
    title: "Example Project",
    description: "Example project schema validation.",
  },

  metadata: {},
} as const;

describe("portfolioProjectSchema", () => {
  it("accepts a valid project", () => {
    expect(() => portfolioProjectSchema.parse(validProject)).not.toThrow();
  });

  it("rejects an invalid slug", () => {
    expect(() =>
      portfolioProjectSchema.parse({
        ...validProject,
        slug: "Invalid Project",
      }),
    ).toThrow();
  });

  it("rejects visual evidence without alternative text", () => {
    expect(() =>
      portfolioProjectSchema.parse({
        ...validProject,
        evidence: [
          {
            id: "validation-test",
            type: "screenshot",
            title: "Screenshot",
            description: "A screenshot without alt text.",
            asset: {
              src: "/images/example.png",
              alt: "",
            },
          },
        ],
      }),
    ).toThrow();
  });
});

describe("validateProjects", () => {
  it("rejects duplicate project slugs", () => {
    expect(() => validateProjects([validProject, validProject])).toThrow(
      "Duplicate project slug",
    );
  });

  it("rejects duplicate evidence ids", () => {
    expect(() =>
      validateProjects([
        {
          ...validProject,
          evidence: [validProject.evidence[0], validProject.evidence[0]],
        },
      ]),
    ).toThrow("Duplicate evidence id");
  });

  it("rejects unknown evidence references", () => {
    expect(() =>
      validateProjects([
        {
          ...validProject,
          contributions: [
            {
              ...validProject.contributions[0],
              evidenceIds: ["missing-evidence"],
            },
          ],
        },
      ]),
    ).toThrow("Unknown evidence id");
  });

  it("requires ordering metadata for featured projects", () => {
    expect(() =>
      validateProjects([
        {
          ...validProject,
          featured: {
            enabled: true,
            narrativeStage: "data-engineering",
          },
        },
      ]),
    ).toThrow("must define featured.order");
  });
});
