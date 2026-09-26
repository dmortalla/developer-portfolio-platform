# Developer Portfolio Platform Architecture

## Purpose

The Developer Portfolio Platform is both:

1. a recruiter-facing professional portfolio, and
2. a production-style software engineering artifact.

The visible experience should remain clean, fast, accessible, and easy to
understand while the underlying implementation demonstrates disciplined
engineering practices.

## Portfolio Narrative

The initial featured systems communicate a progression across the modern
data and AI stack:

Raw Data → Data Engineering → Analytics / BI → Predictive ML → Generative AI

The four launch projects are:

1. Urban Mobility Data Lakehouse
2. Executive Healthcare BI System
3. Customer Churn Prediction Platform
4. AI RAG Knowledge Assistant

## Core Architectural Invariant

Adding a new portfolio project must not require modification of page-level
rendering logic.

Projects are represented as validated structured content and rendered through
reusable components and dynamic routes.

## Core Stack

- Next.js
- React
- TypeScript
- Next.js App Router
- Tailwind CSS
- Zod
- Vitest
- React Testing Library
- Playwright
- axe
- ESLint
- Prettier
- GitHub Actions
- Vercel

## Architectural Layers

### Content Layer

Structured project definitions describe projects, architecture, technology,
engineering contributions, evidence, capabilities, repository links, and SEO
metadata.

### Validation Layer

Zod schemas validate project content before it reaches rendering logic.

Validation failures should fail early rather than produce malformed pages.

### Application Layer

Next.js App Router provides:

- layouts
- routing
- static generation
- metadata generation
- sitemap generation
- not-found behavior

Static generation is preferred for portfolio content.

### Presentation Layer

Reusable React components render validated content through the Technical
Editorial visual system.

The design is:

- light-first
- restrained
- highly readable
- evidence-oriented
- responsive
- minimally animated

### Quality Layer

The repository uses:

- ESLint
- TypeScript strict mode
- Vitest
- React Testing Library
- Playwright
- axe
- Prettier
- production builds
- whitespace validation

### Delivery Layer

GitHub Actions validates pull requests and main-branch changes.

Vercel is the intended production deployment platform.

Hostinger may provide domain registration and DNS management.

## Rendering Strategy

Server components and static rendering are preferred by default.

Client components are introduced only when a meaningful interaction requires
client-side JavaScript.

## Evidence Principle

Public project claims must be supported by verified implementation evidence.

The platform must not invent:

- scale
- production usage
- deployment state
- performance results
- business outcomes
- security capabilities
- observability capabilities
- technologies not actually implemented

## Accessibility

Accessibility is a product requirement.

The platform should support:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible naming
- sufficient contrast
- logical heading hierarchy
- reduced-motion preferences
- meaningful alternative text

Automated accessibility checks will be introduced into the E2E quality gate.

## Extensibility Test

A future project should be addable primarily by creating validated project
content and assets.

That content should automatically participate in:

- project routing
- portfolio views
- metadata generation
- sitemap generation
- evidence rendering

without introducing a project-specific page implementation.

## Architecture Freeze

The v1 architecture is frozen.

Structural changes require evidence of a genuine architectural defect rather
than implementation convenience.
