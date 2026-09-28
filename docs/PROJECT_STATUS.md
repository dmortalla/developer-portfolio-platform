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

## VS06 — v1.1.0 Portfolio Readability and Presentation Polish

Status: Complete

The post-v1 experience refinement is complete and verified in production.

### Readability and visual hierarchy

- Light-first editorial styling is now enforced consistently instead of inheriting automatic operating-system dark mode.
- Body-text contrast and accessibility were strengthened.
- Major section headings use wider layout measures where appropriate.
- Supporting intro copy uses wider, more consistent reading widths.
- Long-form case-study prose remains intentionally narrower for readability.
- Case-study sections use stronger visual hierarchy through bordered panels, accent headings, and improved spacing.
- Homepage and project presentation remain responsive across desktop and mobile layouts.

### Homepage presentation

- The hero headline uses a wider measure for cleaner desktop wrapping.
- Portfolio Focus now appears below the hero rather than competing with the primary headline.
- Portfolio Focus uses a responsive horizontal summary on desktop and stacked presentation on smaller screens.
- The portfolio progression is expressed through concrete engineering artifacts:
  `Data Lakehouse Pipeline → Executive BI System → Containerized ML API → Vector Retrieval RAG API`.
- The broader portfolio progression section now keeps its supporting copy aligned with the section heading rather than floating into a separate right-hand column.

### Technology taxonomy

- Portfolio technology aggregation normalizes duplicate display labels.
- Generic `Python` is suppressed when a versioned Python label is available.
- `Pytest` / `pytest` are normalized to `pytest`.
- LangChain is classified under Frameworks rather than Machine Learning & AI.
- The Technology Toolkit uses a stable two-column desktop layout.

### Repository consistency

- The Customer Churn repository was renamed from `customer-churn-platform` to `customer-churn-prediction-platform`.
- Public README references, CI badge URLs, and portfolio repository URLs were updated to the new canonical repository name.
- Internal MLflow/configuration identifiers were intentionally left unchanged because they are runtime/history identifiers rather than public repository URLs.
- The AI RAG Knowledge Assistant README now includes a technology badge row consistent with the other flagship repositories.

### Verification

- Desktop production presentation verified at `https://dmortalla.dev`.
- Mobile production presentation verified.
- Homepage and project accessibility checks pass.
- Full quality gate passes:
  - ESLint
  - TypeScript
  - unit tests
  - production build
  - Playwright E2E
  - axe accessibility checks
  - Prettier
  - `git diff --check`

### Architecture

The existing architectural invariant remains unchanged:

Adding a new project must not require modifying page-level rendering logic.
