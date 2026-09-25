import Link from "next/link";
import { siteConfig } from "@/config/site";
import { TerminalDemo } from "@/components/terminal-demo";
import { GitHubIcon, ChevronRight } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 grid-bg overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[480px] w-[680px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-status-ok animate-pulse" />
              v{siteConfig.release.version} released
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              System monitoring.{" "}
              <span className="text-accent">
                Diagnostics without the guesswork.
              </span>
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.nav.getStarted}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent/90 transition-colors"
              >
                Get Started
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.github.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-alt transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Terminal */}
          <div className="w-full max-w-2xl lg:max-w-none">
            <TerminalDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
