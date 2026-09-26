import Link from "next/link";

import type { PortfolioProject } from "@/lib/projects/schema";

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700 uppercase">
          {project.positioning.primaryDiscipline.replaceAll("-", " / ")}
        </span>

        <span className="text-sm text-zinc-500">{project.status}</span>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
        {project.title}
      </h3>

      <p className="mt-3 text-base leading-7 text-zinc-600">
        {project.positioning.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
        >
          View case study
        </Link>

        <a
          href={project.repository.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 hover:decoration-zinc-950"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
