# ADR-0001: Use Next.js for the Developer Portfolio Platform

## Status

Accepted

## Context

The Developer Portfolio Platform must serve as both a recruiter-facing
portfolio and a production-style engineering artifact.

The platform requires:

- reusable React components
- structured content
- static generation
- dynamic project routes
- metadata generation
- strong TypeScript support
- SEO
- accessibility
- automated testing
- CI/CD
- professional deployment

Astro, React with Vite, and Next.js were considered.

## Decision

Use Next.js with:

- App Router
- React
- TypeScript
- Tailwind CSS

Use Vercel as the intended production deployment platform.

## Rationale

Next.js provides a broadly recognizable React-based engineering stack while
supporting the static-first architecture required by the portfolio.

It also provides sufficient headroom for future server-side or dynamic
capabilities without requiring an architectural migration.

## Consequences

### Positive

- mature React ecosystem
- strong TypeScript integration
- static generation
- dynamic routing
- metadata support
- strong SEO support
- straightforward Vercel integration
- broad industry recognition

### Negative

- more framework capability than v1 strictly requires
- careless implementation could introduce unnecessary client-side JavaScript
- framework upgrades require attention to current Next.js conventions

## Guardrails

- prefer static generation for portfolio content
- prefer Server Components by default
- introduce Client Components only for justified interactivity
- do not add server infrastructure without a concrete requirement
- do not add project-specific page implementations
