export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Built as a production-style developer portfolio platform.</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/dmortalla"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            GitHub
          </a>

          <a
            href="#featured-systems"
            className="font-medium transition hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            Featured systems
          </a>
        </div>
      </div>
    </footer>
  );
}
