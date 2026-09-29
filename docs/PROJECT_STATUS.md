# Developer Portfolio Platform — Project Status

## Current Phase

Production maintenance and incremental portfolio expansion

## Current Milestone

VS07 — v1.2.0 Platform Extensibility and Self-Dogfooding

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

Local release gates:

1. `npm run lint`
2. `npm run typecheck`
3. `npm test`
4. `npm run build`
5. `npm run test:e2e`
6. `npm run format:check`
7. `git diff --check`

Current baseline:

- lint: passing
- typecheck: passing
- unit/component tests: passing
- production build: passing
- Playwright E2E: passing
- axe accessibility checks: passing
- formatting validation: passing
- whitespace validation: passing

## Current Automated Tests

The automated suite covers:

- project schema and registry behavior
- featured/additional project partitioning
- individual project content
- technology aggregation
- reusable project-card rendering
- site metadata and sitemap generation
- homepage navigation
- generic case-study routing
- the Developer Portfolio Platform self-dogfooding flow
- automated accessibility analysis

Playwright currently executes 5 E2E/accessibility tests.

## CI

GitHub Actions validates pull requests and changes to `main` through:

- dependency installation
- ESLint
- TypeScript type checking
- unit/component tests
- production build
- Playwright browser testing
- axe accessibility checks
- Prettier formatting validation

## Current VS07 Progress

Completed:

- generic additional-project registry selector
- conditional additional-engineering homepage section
- featured/additional collection partition tests
- Developer Portfolio Platform validated project definition
- automatic generic case-study routing
- automatic metadata generation
- automatic sitemap participation
- production demo and repository evidence
- E2E navigation coverage
- automated accessibility coverage
- local desktop visual verification
- full release quality gate

Release remaining:

- synchronize release documentation
- bump package metadata to v1.2.0
- final release gate
- merge to `main`
- push
- production verification
- create and push `v1.2.0` tag

## Known Limitations

- The four original systems remain the intentionally fixed flagship data-and-AI progression.
- Additional engineering work is presented separately so supporting projects do not distort that narrative.
- The Developer Portfolio Platform currently has no dedicated architecture-image asset; its architecture is rendered from structured project content.
- ESLint 10 remains intentionally deferred until the relevant Next.js linting dependencies declare compatible support.

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

## VS07 — v1.2.0 Platform Extensibility and Self-Dogfooding

Status: Complete pending production release verification

The platform's central extensibility invariant was exercised by adding the Developer Portfolio Platform itself as a new portfolio artifact.

### Extensibility implementation

- Added a generic `getAdditionalProjects()` registry selector.
- Preserved the original four-project Featured Systems progression.
- Added a generic Additional Engineering Work homepage surface for non-featured projects.
- Added the Developer Portfolio Platform through the same validated `PortfolioProject` content model used by all other projects.
- No project-specific page implementation was created.
- No slug-specific rendering condition was added.
- The existing dynamic project route and shared `ProjectCaseStudy` renderer handle the new project automatically.

### Automatic platform participation

Registration of the Developer Portfolio Platform automatically provides:

- validated project lookup
- homepage discovery
- static project-route generation
- project SEO metadata
- sitemap participation
- reusable case-study rendering
- repository and production-demo links

### Verification

- The four-system flagship progression remains unchanged.
- Featured and additional project collections are tested as a complete, disjoint partition of registered projects.
- Developer Portfolio Platform registry behavior is covered by focused unit tests.
- Homepage-to-case-study navigation is covered by Playwright.
- The Developer Portfolio Platform case study passes automated axe accessibility analysis.
- Local desktop presentation was visually verified.
- Full quality gate passes:
  - ESLint
  - TypeScript
  - unit/component tests
  - production build
  - 5 Playwright E2E/accessibility tests
  - Prettier
  - `git diff --check`

### Architectural result

The core invariant is now demonstrated rather than merely specified:

> Adding a new portfolio project does not require a project-specific page implementation.

The new project required structured content registration and generic collection support, while project routing, metadata, sitemap generation, and case-study rendering continued to use the existing shared architecture.
