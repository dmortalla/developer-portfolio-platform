# Developer Portfolio Platform — Project Status

## Current Phase

Implementation

## Current Milestone

VS02 — Urban Mobility Data Lakehouse Vertical Slice

## Architecture Status

Frozen

## Completed

- product vision
- audience definition
- four-project launch set
- data-to-AI narrative
- information architecture
- technology stack
- Technical Editorial visual system
- project-content architecture
- validation strategy
- testing strategy
- accessibility strategy
- SEO strategy
- CI/CD direction
- Vercel deployment direction
- architecture freeze
- Next.js repository scaffold
- Node 24 runtime standardization
- strict TypeScript configuration
- Zod dependency
- Vitest configuration
- React Testing Library configuration
- Playwright configuration
- axe dependency
- Prettier configuration
- repository line-ending policy
- baseline unit test

## Current Quality Baseline

Local gates:

1. `npm run lint`
2. `npm run typecheck`
3. `npm test`
4. `npm run build`
5. `npm run format:check`
6. `git diff --check`

Current baseline:

- lint: passing
- typecheck: passing
- unit tests: passing
- production build: passing
- Playwright E2E: passing
- axe accessibility checks: passing
- whitespace validation: passing

## Current Automated Tests

14 unit/component tests and 3 Playwright E2E/accessibility tests.

This baseline test verifies that the Vitest environment, jsdom environment,
setup file, and test discovery pipeline operate successfully.

## CI

GitHub Actions validates:

- dependency installation
- linting
- TypeScript
- unit tests
- production build
- formatting

E2E and automated accessibility execution will be added when the first
meaningful browser flow exists.

## Current VS02 Progress

Completed:

- project schema
- Zod validation
- project registry
- cross-project integrity validation
- schema and registry unit tests

Next:

- integrate verified Urban Mobility Data Lakehouse content

Planned scope:

- project schema
- Zod validation
- project repository/content service
- first real project definition
- reusable project card
- dynamic project route
- first case-study page
- metadata generation
- first meaningful E2E test
- first accessibility test

## Known Limitations

- project schema and registry foundation are complete
- no real portfolio project content has been integrated yet
- browser navigation is covered by Playwright E2E testing
- automated accessibility checks are active for the homepage and first project case study
- production deployment has not yet been configured
- visual design tokens have not yet been implemented

## Architectural Invariant

Adding a new project must not require modifying page-level rendering logic.

## VS04 Portfolio Experience Milestone

- Recruiter-facing site shell is implemented.
- Professional identity, LinkedIn, and GitHub links are integrated.
- Résumé remains private and is presented as available upon request.
- Homepage visual hierarchy and project-card presentation are refined.
- Project case studies use the shared generic renderer.
- Evidence-backed technology summaries are derived from validated project content.
- Open Graph metadata is configured for professional link sharing.
- Robots and sitemap metadata routes are implemented.
- Production site URLs are configured through `NEXT_PUBLIC_SITE_URL`.
- Responsive navigation behavior has been refined for narrow screens.
- Accessibility and browser validation remain part of the automated quality gate.

## VS05 — Production Deployment Verification

Status: Complete

The Developer Portfolio Platform is deployed to production and available through its custom domain.

### Production environment

- Production domain: https://dmortalla.dev
- Hosting platform: Vercel
- Domain registrar / DNS provider: Hostinger
- Production environment variable: `NEXT_PUBLIC_SITE_URL=https://dmortalla.dev`
- Custom-domain DNS configuration: verified
- HTTPS availability: verified
- Production homepage: verified
- `robots.txt`: verified
- `sitemap.xml`: verified
- All four flagship project URLs are present in the production sitemap.

### Production discovery verification

The deployed `robots.txt` references:

`https://dmortalla.dev/sitemap.xml`

The production sitemap uses `https://dmortalla.dev` as the canonical base URL and contains:

1. `/`
2. `/projects/urban-mobility-data-lakehouse`
3. `/projects/executive-healthcare-bi-system`
4. `/projects/customer-churn-prediction-platform`
5. `/projects/ai-rag-knowledge-assistant`

### Deferred dependency maintenance

ESLint remains on `9.39.5`.

An upgrade to ESLint 10 is intentionally deferred until the relevant dependencies used by `eslint-config-next@16.3.6` declare compatible ESLint 10 support. The current version produces a deployment maintenance warning but does not prevent successful builds or production deployment.

### Post-v1 experience backlog

Desktop case-study readability should receive a focused polish pass while preserving the current responsive/mobile behavior:

- increase body-text contrast
- narrow long-form desktop reading measure
- slightly increase desktop body font size and/or line height
- strengthen heading and section hierarchy
- reduce excessive horizontal whitespace in text-heavy sections

This is an experience refinement, not an architectural change.
