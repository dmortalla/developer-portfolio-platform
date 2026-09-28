import Link from "next/link";

import type { PortfolioProject } from "@/lib/projects/schema";

type ProjectCaseStudyProps = {
  project: PortfolioProject;
};

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
      <div className="mb-10">
        <Link
          href="/#featured-systems"
          className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
        >
          ← Back to featured systems
        </Link>
      </div>

      <header className="max-w-5xl">
        <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
          {formatLabel(project.positioning.primaryDiscipline)}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-700">
          {project.positioning.tagline}
        </p>

        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-700 lg:text-lg lg:leading-8">
          {project.positioning.summary}
        </p>

        <div className="mt-8">
          <a
            href={project.repository.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            View repository
          </a>
        </div>
      </header>

      <section
        aria-labelledby="problem-heading"
        className="mt-12 rounded-3xl border border-stone-200 bg-white/80 px-6 py-10 shadow-sm sm:px-8 lg:mt-16"
      >
        <h2
          id="problem-heading"
          className="border-l-4 border-blue-700 pl-4 text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Problem
        </h2>

        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-zinc-950">Context</h3>
            <p className="mt-2 leading-7 text-zinc-700 lg:leading-8">
              {project.problem.context}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-950">Challenge</h3>
            <p className="mt-2 leading-7 text-zinc-700 lg:leading-8">
              {project.problem.challenge}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-950">Objective</h3>
            <p className="mt-2 leading-7 text-zinc-700 lg:leading-8">
              {project.problem.objective}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="architecture-heading"
        className="mt-12 rounded-3xl border border-stone-200 bg-white/80 px-6 py-10 shadow-sm sm:px-8 lg:mt-16"
      >
        <h2
          id="architecture-heading"
          className="border-l-4 border-blue-700 pl-4 text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Architecture
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-zinc-700 lg:text-lg lg:leading-8">
          {project.architecture.summary}
        </p>

        {project.architecture.dataFlow ? (
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {project.architecture.dataFlow.map((step, index) => (
              <li
                key={step}
                className="rounded-xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-xs font-semibold text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium text-zinc-800">{step}</p>
              </li>
            ))}
          </ol>
        ) : null}

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {project.architecture.components.map((component) => (
            <div
              key={component.name}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="font-semibold text-zinc-950">{component.name}</h3>

              <p className="mt-2 leading-7 text-zinc-700 lg:leading-8">
                {component.responsibility}
              </p>

              {component.technologies.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {component.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="technology-heading"
        className="mt-12 rounded-3xl border border-stone-200 bg-white/80 px-6 py-10 shadow-sm sm:px-8 lg:mt-16"
      >
        <h2
          id="technology-heading"
          className="border-l-4 border-blue-700 pl-4 text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Technology
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.technologies.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase">
                {formatLabel(group.category)}
              </h3>

              <ul className="mt-3 space-y-2 text-zinc-800">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="contributions-heading"
        className="mt-12 rounded-3xl border border-stone-200 bg-white/80 px-6 py-10 shadow-sm sm:px-8 lg:mt-16"
      >
        <h2
          id="contributions-heading"
          className="border-l-4 border-blue-700 pl-4 text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Engineering Contribution
        </h2>

        <div className="mt-8 space-y-8">
          {project.contributions.map((contribution) => (
            <div key={contribution.title}>
              <h3 className="text-lg font-semibold text-zinc-950">
                {contribution.title}
              </h3>
              <p className="mt-2 max-w-2xl leading-7 text-zinc-700 lg:text-lg lg:leading-8">
                {contribution.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="evidence-heading"
        className="mt-12 rounded-3xl border border-stone-200 bg-white/80 px-6 py-10 shadow-sm sm:px-8 lg:mt-16"
      >
        <h2
          id="evidence-heading"
          className="border-l-4 border-blue-700 pl-4 text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Engineering Evidence
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {project.evidence.map((evidence) => (
            <div
              key={evidence.id}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                {formatLabel(evidence.type)}
              </p>

              <h3 className="mt-2 font-semibold text-zinc-950">
                {evidence.title}
              </h3>

              <p className="mt-2 leading-7 text-zinc-700 lg:leading-8">
                {evidence.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="mt-12 rounded-3xl border border-stone-200 bg-white/80 px-6 py-10 shadow-sm sm:px-8 lg:mt-16"
      >
        <h2
          id="capabilities-heading"
          className="border-l-4 border-blue-700 pl-4 text-3xl font-semibold tracking-tight text-zinc-950"
        >
          What It Proves
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {project.capabilities.map((capability) => (
            <div key={capability.name}>
              <h3 className="font-semibold text-zinc-950">{capability.name}</h3>
              <p className="mt-2 leading-7 text-zinc-700 lg:leading-8">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
