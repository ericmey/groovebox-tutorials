import Link from "next/link";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">Groovebox Tutorials</p>
          <Link href="/" className="site-title">
            Learning systems for hardware music devices
          </Link>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/devices/seqtrak">SEQTRAK Demo</Link>
          <Link href="/docs">Project Notes</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
