import Link from "next/link";

import { siteProfile } from "@/lib/site/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-zinc-300 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:py-12">
        <div>
          <p className="text-base font-semibold tracking-tight text-white">
            {siteProfile.name}
          </p>

          <p className="mt-1">
            Built as a production-style developer portfolio platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <a
            href={siteProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            LinkedIn
          </a>

          <a
            href={siteProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            GitHub
          </a>

          <Link
            href="/#featured-systems"
            className="rounded-lg px-3 py-2 font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Featured systems
          </Link>
        </div>
      </div>
    </footer>
  );
}
