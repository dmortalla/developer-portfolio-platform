<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:portfolio-platform-rules -->

# Developer Portfolio Platform Rules

## Architecture

The v1 architecture is frozen.

Do not introduce structural changes unless a genuine architectural defect is
identified.

The central invariant is:

> Adding a new portfolio project must not require modification of page-level
> rendering logic.

## Engineering Workflow

Prefer small, reviewable changes.

Before considering work complete, run the relevant fail-fast quality gates:

1. `npm run lint`
2. `npm run typecheck`
3. `npm test`
4. `npm run build`
5. `npm run format:check`
6. `git diff --check`

Do not bypass dependency conflicts with `--force` or `--legacy-peer-deps`
without an explicitly documented reason.

## TypeScript

Keep TypeScript strict.

Do not weaken compiler settings to silence errors.

Avoid `any` unless a concrete integration requirement makes it unavoidable and
the reason is documented.

## Next.js

Use App Router conventions.

Prefer Server Components and static rendering.

Use Client Components only where meaningful interaction requires them.

Follow the installed Next.js documentation referenced above when current
framework behavior differs from prior knowledge.

## Content Architecture

Portfolio project data must be validated structured content.

Use Zod as the schema source of truth and infer TypeScript types from the Zod
schemas.

Do not duplicate the project domain model in separately maintained TypeScript
interfaces.

## Evidence

Public portfolio claims must be grounded in verified implementation.

Do not invent project capabilities, scale, production status, business impact,
deployment state, performance, or technologies.

## Accessibility

Accessibility is a product requirement, not a post-build enhancement.

Use semantic HTML, keyboard-accessible interaction, meaningful alternative
text, visible focus states, and automated accessibility testing where
applicable.

## Dependencies

Avoid speculative dependencies.

Add libraries only when an actual requirement justifies them.

## Documentation

Keep `docs/PROJECT_STATUS.md` current after meaningful milestones.

Use ADRs only for consequential architectural decisions.

<!-- END:portfolio-platform-rules -->
