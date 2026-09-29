import type { PortfolioProject } from "@/lib/projects/schema";

export const developerPortfolioPlatform = {
  slug: "developer-portfolio-platform",

  title: "Developer Portfolio Platform",

  positioning: {
    primaryDiscipline: "software-engineering",
    secondaryDisciplines: [],
    systemArchetype: "Developer Portfolio Platform",
    tagline:
      "A production-style portfolio platform built around validated content, reusable rendering, automated quality gates, and professional deployment.",
    summary:
      "A Next.js and TypeScript platform that presents engineering projects through validated structured content, generic project routing, reusable case-study components, automated testing and accessibility checks, CI/CD, and production deployment on a custom domain.",
  },

  status: "complete",

  problem: {
    context:
      "A professional engineering portfolio must communicate technical depth clearly while remaining maintainable as new projects, evidence, and capabilities are added over time.",
    challenge:
      "Build a recruiter-facing portfolio that avoids bespoke project pages, validates public claims before rendering, preserves a consistent presentation model, and enforces production-style quality standards.",
    objective:
      "Create an extensible portfolio platform where validated project definitions automatically participate in routing, metadata, sitemap generation, evidence presentation, automated testing, and production deployment.",
  },

  architecture: {
    summary:
      "Structured TypeScript project definitions are validated with Zod, registered through a centralized project registry, rendered through shared Next.js routes and React components, validated through automated quality gates, and deployed to Vercel.",

    components: [
      {
        name: "Structured Content Layer",
        responsibility:
          "Represents portfolio projects as structured TypeScript data instead of project-specific page implementations.",
        technologies: ["TypeScript"],
      },
      {
        name: "Validation Layer",
        responsibility:
          "Validates project definitions and content constraints before data reaches rendering logic.",
        technologies: ["Zod"],
      },
      {
        name: "Project Registry",
        responsibility:
          "Provides centralized validated project lookup and separates flagship projects from additional engineering work.",
        technologies: ["TypeScript"],
      },
      {
        name: "Application and Routing Layer",
        responsibility:
          "Generates reusable project routes, metadata, sitemap participation, and not-found behavior through the Next.js App Router.",
        technologies: ["Next.js", "React"],
      },
      {
        name: "Presentation Layer",
        responsibility:
          "Renders project cards, case studies, technology summaries, navigation, and responsive portfolio sections through reusable components.",
        technologies: ["React", "Tailwind CSS"],
      },
      {
        name: "Quality Layer",
        responsibility:
          "Enforces linting, type safety, unit testing, browser testing, accessibility checks, formatting, and production-build validation.",
        technologies: [
          "ESLint",
          "TypeScript",
          "Vitest",
          "React Testing Library",
          "Playwright",
          "axe",
          "Prettier",
        ],
      },
      {
        name: "Delivery Layer",
        responsibility:
          "Runs automated CI validation and delivers the application to the production custom domain.",
        technologies: ["GitHub Actions", "Vercel"],
      },
    ],

    dataFlow: [
      "Structured project definition",
      "Zod validation",
      "Validated project registry",
      "Generic project discovery and routing",
      "Reusable case-study rendering",
      "Automated quality gates",
      "Production deployment",
    ],

    assets: [],
  },

  technologies: [
    {
      category: "language",
      items: ["TypeScript 5"],
    },
    {
      category: "framework",
      items: ["Next.js 16.3.6", "React 19.2.8", "Tailwind CSS 4", "Zod 4"],
    },
    {
      category: "testing",
      items: ["Vitest 5", "React Testing Library", "Playwright", "axe-core"],
    },
    {
      category: "devops",
      items: ["GitHub Actions", "Vercel"],
    },
    {
      category: "other",
      items: ["Node.js 24.x", "ESLint 9", "Prettier 3"],
    },
  ],

  contributions: [
    {
      title: "Designed a validated content architecture",
      description:
        "Modeled portfolio projects as structured TypeScript content validated by Zod so project claims and presentation data fail early when they violate the content contract.",
      evidenceIds: ["validated-content-model"],
    },
    {
      title: "Built generic project routing and rendering",
      description:
        "Implemented shared dynamic routes and reusable case-study components so registered projects receive routing, metadata, and presentation without project-specific page implementations.",
      evidenceIds: ["generic-project-routing"],
    },
    {
      title: "Added extensible project discovery",
      description:
        "Separated flagship systems from additional engineering work through registry-driven collections so new supporting projects can appear without changing project-specific rendering logic.",
      evidenceIds: ["extensible-project-discovery"],
    },
    {
      title: "Implemented automated quality and accessibility gates",
      description:
        "Integrated linting, type checking, unit tests, production builds, browser tests, automated accessibility analysis, formatting checks, and whitespace validation into the engineering workflow.",
      evidenceIds: ["quality-gates", "accessibility-testing"],
    },
    {
      title: "Established continuous integration and production delivery",
      description:
        "Configured GitHub Actions to validate changes and deployed the portfolio to Vercel behind the dmortalla.dev custom domain.",
      evidenceIds: ["ci-pipeline", "production-deployment"],
    },
    {
      title: "Documented architectural decisions and release state",
      description:
        "Maintained architecture documentation, an accepted architecture decision record, project-status tracking, and versioned production releases.",
      evidenceIds: ["architecture-documentation"],
    },
  ],

  evidence: [
    {
      id: "validated-content-model",
      type: "code",
      title: "Validated Project Content Model",
      description:
        "The repository defines a Zod-backed PortfolioProject schema covering positioning, architecture, technologies, contributions, evidence, capabilities, repository metadata, featured state, and SEO.",
      sourceUrl:
        "https://github.com/dmortalla/developer-portfolio-platform/blob/main/lib/projects/schema.ts",
    },
    {
      id: "generic-project-routing",
      type: "architecture",
      title: "Generic Static Project Routing",
      description:
        "A shared dynamic Next.js route derives static parameters and project metadata from the project registry and renders every registered project through the reusable ProjectCaseStudy component.",
      sourceUrl:
        "https://github.com/dmortalla/developer-portfolio-platform/blob/main/app/projects/%5Bslug%5D/page.tsx",
    },
    {
      id: "extensible-project-discovery",
      type: "code",
      title: "Registry-Driven Project Discovery",
      description:
        "The project registry separates featured and additional projects through reusable selectors, while the homepage renders both collections generically.",
      sourceUrl:
        "https://github.com/dmortalla/developer-portfolio-platform/blob/main/lib/projects/registry.ts",
    },
    {
      id: "quality-gates",
      type: "test",
      title: "Automated Quality Gates",
      description:
        "The project validates linting, TypeScript type safety, Vitest tests, production builds, Playwright E2E behavior, formatting, and whitespace integrity before release.",
      sourceUrl: "https://github.com/dmortalla/developer-portfolio-platform",
    },
    {
      id: "accessibility-testing",
      type: "test",
      title: "Automated Accessibility Testing",
      description:
        "Playwright browser tests integrate axe to detect automatically identifiable accessibility violations on portfolio pages.",
      sourceUrl:
        "https://github.com/dmortalla/developer-portfolio-platform/blob/main/tests/e2e/portfolio.spec.ts",
    },
    {
      id: "ci-pipeline",
      type: "ci-cd",
      title: "GitHub Actions CI Pipeline",
      description:
        "GitHub Actions installs dependencies and runs linting, type checking, unit tests, a production build, Playwright accessibility tests, and formatting validation on pull requests and main-branch changes.",
      sourceUrl:
        "https://github.com/dmortalla/developer-portfolio-platform/blob/main/.github/workflows/ci.yml",
    },
    {
      id: "production-deployment",
      type: "validation",
      title: "Production Custom-Domain Deployment",
      description:
        "The portfolio is deployed through Vercel and served from the dmortalla.dev production domain.",
      sourceUrl: "https://dmortalla.dev",
    },
    {
      id: "architecture-documentation",
      type: "documentation",
      title: "Architecture and Decision Documentation",
      description:
        "The repository documents the platform architecture, its core extensibility invariant, release status, and the accepted decision to use a static-first Next.js platform architecture.",
      sourceUrl:
        "https://github.com/dmortalla/developer-portfolio-platform/blob/main/docs/ARCHITECTURE.md",
    },
  ],

  capabilities: [
    {
      name: "Production-style software engineering",
      description:
        "Demonstrates structured application architecture, reusable components, typed content contracts, automated verification, CI, and production deployment.",
      evidenceIds: [
        "validated-content-model",
        "quality-gates",
        "ci-pipeline",
        "production-deployment",
      ],
    },
    {
      name: "Extensible platform architecture",
      description:
        "Demonstrates a data-driven architecture in which project content participates in generic discovery, routing, metadata, and rendering without a bespoke project page.",
      evidenceIds: [
        "generic-project-routing",
        "extensible-project-discovery",
        "architecture-documentation",
      ],
    },
    {
      name: "Quality and accessibility engineering",
      description:
        "Demonstrates automated unit, browser, accessibility, formatting, type-safety, and production-build verification as release gates.",
      evidenceIds: ["quality-gates", "accessibility-testing", "ci-pipeline"],
    },
  ],

  repository: {
    githubUrl: "https://github.com/dmortalla/developer-portfolio-platform",
  },

  demo: {
    url: "https://dmortalla.dev",
    label: "View production site",
  },

  featured: {
    enabled: false,
  },

  seo: {
    title:
      "Developer Portfolio Platform | Software Engineering Portfolio Project",
    description:
      "A production-style Next.js and TypeScript portfolio platform with validated content, reusable project rendering, automated testing, accessibility checks, CI/CD, and Vercel deployment.",
  },

  metadata: {},
} satisfies PortfolioProject;
