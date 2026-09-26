import { ProjectCard } from "@/components/projects/project-card";
import { TechnologyToolkit } from "@/components/projects/technology-toolkit";
import { getFeaturedProjects } from "@/lib/projects/registry";
import { buildPortfolioTechnologyGroups } from "@/lib/projects/summarize";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const technologyGroups = buildPortfolioTechnologyGroups(featuredProjects);

  return (
    <main>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Developer Portfolio Platform
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Engineering systems across the modern data and AI stack.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            A portfolio of production-style systems spanning data engineering,
            analytics, machine learning, and generative AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#featured-systems"
              className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              View featured systems
            </a>

            <a
              href="https://github.com/dmortalla"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-950 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <p className="text-sm font-semibold tracking-wide text-zinc-500 uppercase">
            Engineering progression
          </p>

          <ol className="mt-6 grid gap-3 text-sm font-medium text-zinc-700 sm:grid-cols-5">
            {[
              "Raw Data",
              "Data Engineering",
              "Analytics / BI",
              "Predictive ML",
              "Generative AI",
            ].map((stage, index) => (
              <li
                key={stage}
                className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3"
              >
                <span className="text-xs text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {stage}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-b border-zinc-200 bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              About
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Building across the modern data and AI stack.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-zinc-600">
            <p>
              This portfolio presents production-style systems spanning data
              engineering, analytics and business intelligence, machine learning
              engineering, MLOps, and generative AI.
            </p>

            <p>
              The projects are organized as an engineering progression from raw
              data and analytical modeling through predictive systems and
              retrieval-augmented AI applications.
            </p>

            <p>
              Each case study focuses on the problem, system architecture,
              implementation choices, verified engineering evidence, and the
              technical capabilities demonstrated by the work.
            </p>
          </div>
        </div>
      </section>

      <TechnologyToolkit groups={technologyGroups} />

      <section
        id="featured-systems"
        className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Featured systems
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Engineering evidence, not résumé decoration.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600">
            Each system is presented through its problem, architecture,
            implementation, evidence, and the engineering capability it
            demonstrates.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
