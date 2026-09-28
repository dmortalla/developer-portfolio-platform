import Image from "next/image";
import Link from "next/link";

import { siteProfile } from "@/lib/site/profile";

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#featured-systems", label: "Projects" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-md px-2 py-1 font-bold tracking-tight text-zinc-950 transition hover:bg-white hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
        >
          <Image
            src="/images/darrell-mortalla-avatar.png"
            alt=""
            width={40}
            height={40}
            aria-hidden="true"
            className="h-10 w-10 rounded-full border border-stone-300 object-cover shadow-sm transition group-hover:scale-105"
          />
          <span>{siteProfile.name}</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="rounded-xl border border-stone-200 bg-white/70 p-1 shadow-sm"
        >
          <ul className="flex flex-wrap items-center justify-center gap-1 text-sm font-medium text-zinc-700 sm:justify-end">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="hidden sm:list-item">
              <a
                href={siteProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                LinkedIn
              </a>
            </li>

            <li className="hidden sm:list-item">
              <a
                href={siteProfile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
