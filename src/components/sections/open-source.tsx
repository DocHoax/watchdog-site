"use client";

import Link from "next/link";
import { RevealSection } from "@/components/reveal-section";
import { siteConfig } from "@/config/site";
import { GitHubIcon } from "@/components/icons";

export function OpenSourceSection() {
  return (
    <RevealSection
      id="open-source"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-border bg-surface mb-6">
            <GitHubIcon className="h-7 w-7 text-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Open Source
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Watchdog is fully open source under the MIT license. Inspect the
            code, report issues, or contribute — the entire codebase is on
            GitHub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={siteConfig.github.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-alt transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              View Repository
            </Link>
            <Link
              href={siteConfig.github.contributing}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md text-sm text-muted hover:text-foreground transition-colors px-6 py-3"
            >
              Contributing Guide →
            </Link>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
