# Developer Portfolio Platform

![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black)
![React](https://img.shields.io/badge/React-19.2.8-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)
![Tests](https://img.shields.io/badge/tests-Vitest%20%2B%20Playwright-success)
![Accessibility](https://img.shields.io/badge/accessibility-axe-success)
![CI](https://github.com/dmortalla/developer-portfolio-platform/actions/workflows/ci.yml/badge.svg?branch=main)

A production-style developer portfolio platform for presenting verified Data, Analytics, Machine Learning, and Generative AI engineering work through a validated, reusable, and testable content architecture.

The application serves both as a recruiter-facing professional portfolio and as a software engineering artifact.

## Live Site

**Production:** https://dmortalla.dev

## Overview

Projects are modeled as structured content rather than hard-coded pages. Each project definition describes its problem, architecture, technology stack, engineering contributions, evidence, capabilities, repository links, and SEO metadata.

Zod validates project content before it reaches rendering logic, while reusable React components and generic dynamic routes provide consistent presentation.

The core architectural invariant is:

> Adding a new portfolio project must not require a project-specific page implementation.

## Portfolio Narrative

The original four featured systems communicate a progression across the modern data and AI stack:

```text
Raw Data
   ↓
Data Engineering
   ↓
Analytics / BI
   ↓
Predictive ML
   ↓
Generative AI
```

The launch portfolio contains:

1. Urban Mobility Data Lakehouse
2. Executive Healthcare BI System
3. Customer Churn Prediction Platform
4. AI RAG Knowledge Assistant

Additional engineering projects can exist outside this featured progression while using the same validated project model and case-study renderer.

## Architecture

```text
Validated Project Content
          │
          ▼
      Zod Schemas
          │
          ▼
   Project Registry
          │
          ├───────────────┐
          ▼               ▼
   Portfolio Views    Dynamic Routes
          │               │
          └───────┬───────┘
                  ▼
          Reusable Components
                  │
                  ▼
          Static Next.js Output
                  │
                  ▼
               Vercel
```

### Architectural Layers

**Content layer** — Structured TypeScript project definitions live under `content/projects/`.

**Validation layer** — Zod schemas validate content and cross-project constraints before rendering.

**Application layer** — Next.js App Router provides layouts, dynamic project routes, static generation, metadata, sitemap generation, and not-found behavior.

**Presentation layer** — Reusable React components render project cards, case studies, technology summaries, navigation, and supporting portfolio sections.

**Quality and delivery layer** — Automated local gates and GitHub Actions validate changes before production deployment to Vercel.

## Technology Stack

| Area              | Technology               |
| ----------------- | ------------------------ |
| Framework         | Next.js 16.3.6           |
| UI                | React 19.2.8             |
| Language          | TypeScript 5             |
| Styling           | Tailwind CSS 4           |
| Validation        | Zod 4                    |
| Unit Testing      | Vitest 5                 |
| Component Testing | React Testing Library    |
| Browser Testing   | Playwright               |
| Accessibility     | axe-core with Playwright |
| Linting           | ESLint 9                 |
| Formatting        | Prettier 3               |
| Runtime           | Node.js 24.x             |
| CI                | GitHub Actions           |
| Hosting           | Vercel                   |
| Domain / DNS      | Hostinger                |

## Engineering Features

- Data-driven project definitions instead of project-specific pages
- Schema validation with Zod
- Generic dynamic project routing
- Static-first rendering with Server Components preferred
- Per-project metadata and SEO support
- Generated sitemap and robots configuration
- Responsive technical-editorial presentation
- Automated unit, browser, and accessibility testing
- CI validation for pull requests and `main`
- Production deployment on a custom domain

## Evidence Principle

Public portfolio claims are expected to be supported by verified implementation evidence. The platform deliberately avoids inventing unsupported claims about scale, production usage, performance, business outcomes, security, observability, or technologies that are not actually implemented.

## Quality Gates

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
npm run format:check
git diff --check
```

GitHub Actions runs linting, type checking, unit tests, a production build, Playwright browser tests, axe accessibility checks, and formatting validation.

## Accessibility

Accessibility is treated as a product requirement. The platform includes automated accessibility testing and targets semantic HTML, keyboard navigation, visible focus states, accessible naming, sufficient contrast, logical heading hierarchy, and meaningful alternative text.

## Adding a Project

A project is primarily added by creating a validated definition under:

```text
content/projects/
```

and registering it with the project registry.

The shared architecture then supplies project lookup, dynamic routing, static route generation, metadata generation, case-study rendering, and evidence presentation.

Project-specific page implementations are intentionally avoided.

## Repository Structure

```text
developer-portfolio-platform/
├── app/                  # Next.js routes, layouts, metadata, sitemap
├── components/           # Reusable presentation components
├── content/projects/     # Validated project definitions
├── docs/                 # Architecture, ADRs, project status
├── lib/projects/         # Schema, validation, registry, summaries
├── lib/site/             # Site-level profile and configuration
├── public/               # Static assets
├── tests/                # Unit, component, E2E, accessibility tests
├── .github/workflows/    # CI
└── package.json
```

## Local Development

Requires Node.js 24.x and npm.

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```powershell
npm run build
npm start
```

## Deployment

Production is deployed through Vercel at:

**https://dmortalla.dev**

The custom domain is registered and managed through Hostinger DNS.

## Engineering Documentation

- `docs/ARCHITECTURE.md`
- `docs/PROJECT_STATUS.md`
- `docs/adr/0001-nextjs-platform-stack.md`

## Release History

### v1.0.0

Initial production release with four featured systems, validated project content, generic routing, responsive presentation, SEO/discovery support, automated quality gates, and production deployment.

### v1.1.0

Readability and presentation release covering desktop reading measures, responsive Portfolio Focus presentation, stronger case-study hierarchy, technology-label normalization, accessibility contrast fixes, repository consistency, and desktop/mobile production verification.

### v1.2.0

Platform extensibility and self-dogfooding release including:

- generic discovery for non-featured engineering projects
- preserved four-system flagship progression
- Developer Portfolio Platform added through the validated content model
- automatic generic routing, metadata, sitemap, and case-study rendering
- registry partition invariants
- dedicated unit and E2E coverage
- automated accessibility verification for the new case study
- architecture documentation updated with verified extensibility evidence

## Current Status

**Release candidate: `v1.2.0`**

The v1 architecture is intentionally stable. Structural changes should be driven by demonstrated architectural requirements rather than implementation convenience.

## Author

**Darrell Mortalla**

Data & AI Engineer | Machine Learning, Data Science, Analytics, and Generative AI

- GitHub: https://github.com/dmortalla
- LinkedIn: https://www.linkedin.com/in/darrell-mortalla-77857012a
