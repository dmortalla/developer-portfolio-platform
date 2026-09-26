import Link from "next/link";

import type { PortfolioProject } from "@/lib/projects/schema";

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const technologies = project.technologies
    .flatMap((group) => group.items)
    .slice(0, 6);

  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md sm:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wide uppercase">
          <span className="rounded-full bg-zinc-950 px-3 py-1.5 text-white">
            {formatLabel(project.positioning.primaryDiscipline)}
          </span>

          {project.featured.narrativeStage ? (
            <span className="text-zinc-600">
              {formatLabel(project.featured.narrativeStage)}
            </span>
          ) : null}
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 text-base font-medium text-zinc-700">
            {project.positioning.tagline}
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
            {project.positioning.summary}
          </p>
        </div>

        <ul
          aria-label={`${project.title} technologies`}
          className="flex flex-wrap gap-2"
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-5 border-t border-zinc-100 pt-5 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition group-hover:decoration-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            View case study
          </Link>

          <a
            href={project.repository.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-600 transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            View repository
          </a>
        </div>
      </div>
    </article>
  );
}
