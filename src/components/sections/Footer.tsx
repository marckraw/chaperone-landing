import { GITHUB_URL, RELEASES_URL, ISSUES_URL, VERSION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-semibold">Chaperone</span>
          <span className="text-xs font-mono text-text-muted bg-bg-tertiary px-2 py-0.5 rounded">
            {VERSION}
          </span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-text-secondary">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Releases
          </a>
          <a
            href={ISSUES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Issues
          </a>
        </nav>

        <div className="text-xs text-text-muted">
          Built with Bun
        </div>
      </div>
    </footer>
  );
}
