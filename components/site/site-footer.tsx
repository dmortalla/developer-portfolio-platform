import Link from "next/link";

import { siteProfile } from "@/lib/site/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-medium text-zinc-950">{siteProfile.name}</p>

          <p className="mt-1">
            Built as a production-style developer portfolio platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <a
            href={siteProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            LinkedIn
          </a>

          <a
            href={siteProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            GitHub
          </a>

          <Link
            href="/#featured-systems"
            className="font-medium transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            Featured systems
          </Link>
        </div>
      </div>
    </footer>
  );
}
