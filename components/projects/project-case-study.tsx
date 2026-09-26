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
    <article className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 lg:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
          {formatLabel(project.positioning.primaryDiscipline)}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 text-xl leading-8 text-zinc-600">
          {project.positioning.tagline}
        </p>

        <p className="mt-6 text-base leading-7 text-zinc-600">
          {project.positioning.summary}
        </p>

        <div className="mt-8">
          <a
            href={project.repository.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            View repository
          </a>
        </div>
      </header>

      <section
        aria-labelledby="problem-heading"
        className="mt-20 border-t border-zinc-200 pt-12"
      >
        <h2
          id="problem-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Problem
        </h2>

        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-zinc-950">Context</h3>
            <p className="mt-2 leading-7 text-zinc-600">
              {project.problem.context}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-950">Challenge</h3>
            <p className="mt-2 leading-7 text-zinc-600">
              {project.problem.challenge}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-950">Objective</h3>
            <p className="mt-2 leading-7 text-zinc-600">
              {project.problem.objective}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="architecture-heading"
        className="mt-20 border-t border-zinc-200 pt-12"
      >
        <h2
          id="architecture-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Architecture
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-zinc-600">
          {project.architecture.summary}
        </p>

        {project.architecture.dataFlow ? (
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {project.architecture.dataFlow.map((step, index) => (
              <li
                key={step}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
              >
                <span className="text-xs font-semibold text-zinc-400">
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
              className="rounded-xl border border-zinc-200 p-5"
            >
              <h3 className="font-semibold text-zinc-950">{component.name}</h3>

              <p className="mt-2 leading-7 text-zinc-600">
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
        className="mt-20 border-t border-zinc-200 pt-12"
      >
        <h2
          id="technology-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-950"
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
        className="mt-20 border-t border-zinc-200 pt-12"
      >
        <h2
          id="contributions-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Engineering Contribution
        </h2>

        <div className="mt-8 space-y-8">
          {project.contributions.map((contribution) => (
            <div key={contribution.title}>
              <h3 className="text-lg font-semibold text-zinc-950">
                {contribution.title}
              </h3>
              <p className="mt-2 max-w-3xl leading-7 text-zinc-600">
                {contribution.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="evidence-heading"
        className="mt-20 border-t border-zinc-200 pt-12"
      >
        <h2
          id="evidence-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-950"
        >
          Engineering Evidence
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {project.evidence.map((evidence) => (
            <div
              key={evidence.id}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                {formatLabel(evidence.type)}
              </p>

              <h3 className="mt-2 font-semibold text-zinc-950">
                {evidence.title}
              </h3>

              <p className="mt-2 leading-7 text-zinc-600">
                {evidence.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="mt-20 border-t border-zinc-200 pt-12"
      >
        <h2
          id="capabilities-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-950"
        >
          What It Proves
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {project.capabilities.map((capability) => (
            <div key={capability.name}>
              <h3 className="font-semibold text-zinc-950">{capability.name}</h3>
              <p className="mt-2 leading-7 text-zinc-600">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
