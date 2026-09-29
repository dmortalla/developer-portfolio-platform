import { ProjectCard } from "@/components/projects/project-card";
import { TechnologyToolkit } from "@/components/projects/technology-toolkit";
import {
  getAdditionalProjects,
  getFeaturedProjects,
} from "@/lib/projects/registry";
import { buildPortfolioTechnologyGroups } from "@/lib/projects/summarize";
import { siteProfile } from "@/lib/site/profile";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const additionalProjects = getAdditionalProjects();
  const technologyGroups = buildPortfolioTechnologyGroups(featuredProjects);

  return (
    <main>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 lg:items-end lg:py-32">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
              {siteProfile.name}
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Engineering systems across the modern data and AI stack.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 font-medium text-zinc-800">
              {siteProfile.headline}
            </p>

            <p className="mt-4 max-w-4xl leading-7 text-zinc-600">
              Production-style systems spanning analytics, data science, machine
              learning, MLOps, data engineering, and generative AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#featured-systems"
                className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                View featured systems
              </a>

              <a
                href={siteProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-950 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                LinkedIn
              </a>

              <a
                href={siteProfile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-950 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
            <div className="border-b border-blue-100 bg-blue-50/70 px-6 py-4 lg:px-8">
              <p className="text-xs font-semibold tracking-widest text-blue-800 uppercase">
                Portfolio focus
              </p>
            </div>

            <dl className="grid divide-y divide-stone-200 px-6 md:grid-cols-[0.55fr_1.7fr_1fr] md:divide-x md:divide-y-0 lg:px-8">
              <div className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                <dt className="text-sm font-medium text-zinc-600">
                  Featured production systems
                </dt>
                <dd className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
                  4
                </dd>
              </div>

              <div className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                <dt className="text-sm font-medium text-zinc-600">
                  Portfolio progression
                </dt>
                <dd className="mt-2 text-base leading-7 font-semibold text-zinc-900">
                  Data Lakehouse Pipeline → Executive BI System → Containerized
                  ML API → Vector Retrieval RAG API
                </dd>
              </div>

              <div className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                <dt className="text-sm font-medium text-zinc-600">Résumé</dt>
                <dd className="mt-2 text-base font-medium text-zinc-900">
                  {siteProfile.resumeAvailability}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="flex max-w-4xl flex-col gap-4">
            <div>
              <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                Portfolio progression
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                From raw data to intelligent applications.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-zinc-600">
              The featured systems show a progression across the modern
              data-and-AI lifecycle rather than four isolated portfolio
              exercises.
            </p>
          </div>

          <ol className="mt-8 grid gap-3 text-sm font-medium text-zinc-700 sm:grid-cols-5">
            {[
              "Raw Data",
              "Data Engineering",
              "Analytics / BI",
              "Predictive ML",
              "Generative AI",
            ].map((stage, index) => (
              <li
                key={stage}
                className="rounded-xl border border-zinc-200 bg-white p-4"
              >
                <span className="text-xs font-semibold tracking-widest text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-2 text-sm font-semibold text-zinc-900">
                  {stage}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-b border-zinc-200 bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:py-24">
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

            <p className="font-medium text-zinc-800">
              {siteProfile.resumeAvailability}.
            </p>
          </div>
        </div>
      </section>

      <TechnologyToolkit groups={technologyGroups} />

      <section
        id="featured-systems"
        className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-zinc-600 uppercase">
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

      {additionalProjects.length > 0 ? (
        <section className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold tracking-widest text-zinc-600 uppercase">
                Additional engineering work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Production systems beyond the flagship progression.
              </h2>

              <p className="mt-4 leading-7 text-zinc-600">
                Additional projects demonstrate complementary software,
                platform, automation, and engineering capabilities while the
                featured systems preserve the core data-and-AI progression.
              </p>
            </div>

            <div className="mt-10 grid gap-6">
              {additionalProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
