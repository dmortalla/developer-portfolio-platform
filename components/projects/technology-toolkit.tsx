import type { PortfolioTechnologyGroup } from "@/lib/projects/summarize";

function formatLabel(value: string): string {
  const labels: Record<string, string> = {
    language: "Languages",
    framework: "Frameworks",
    data: "Data Engineering",
    analytics: "Analytics & BI",
    "ml-ai": "Machine Learning & AI",
    cloud: "Cloud",
    devops: "DevOps & Delivery",
    testing: "Testing",
    observability: "Observability",
    visualization: "Visualization",
    other: "Other",
  };

  return labels[value] ?? value;
}

export function TechnologyToolkit({
  groups,
}: {
  groups: readonly PortfolioTechnologyGroup[];
}) {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Technical toolkit
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Technologies demonstrated through working systems.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600">
            This stack is derived directly from the featured projects rather
            than presented as an unsupported list of résumé keywords.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {groups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <h3 className="font-semibold text-zinc-950">
                {formatLabel(group.category)}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
