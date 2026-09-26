import Link from "next/link";

import { siteProfile } from "@/lib/site/profile";

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#featured-systems", label: "Projects" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="font-semibold tracking-tight text-zinc-950 transition hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
        >
          {siteProfile.name}
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm font-medium text-zinc-600 sm:gap-5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
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
                className="transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
              >
                LinkedIn
              </a>
            </li>

            <li className="hidden sm:list-item">
              <a
                href={siteProfile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
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
