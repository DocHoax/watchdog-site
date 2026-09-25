"use client";

import Link from "next/link";
import { RevealSection } from "@/components/reveal-section";
import { siteConfig } from "@/config/site";
import { ChevronRight, GitHubIcon } from "@/components/icons";

export function CTASection() {
  return (
    <RevealSection className="py-20 md:py-28 border-t border-border grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to stop guessing?
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Install Watchdog in seconds. A single binary, no dependencies, full
            system visibility.
          </p>

          <div className="inline-block rounded-lg border border-border bg-[#0c0c0e] px-6 py-3 font-mono text-sm text-muted mb-8">
            <span className="text-accent">$</span>{" "}
            {siteConfig.install.go}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={siteConfig.nav.getStarted}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent/90 transition-colors"
            >
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.github.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-alt transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
