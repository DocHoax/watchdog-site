"use client";

import Link from "next/link";
import { RevealSection } from "@/components/reveal-section";
import { siteConfig } from "@/config/site";

/** Section placeholder for documentation — links to the GitHub README for now. */
export function DocsSection() {
  return (
    <RevealSection
      id="docs"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Documentation
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Full usage documentation is available in the project README. Command
            references, configuration options, and deployment guides are all
            covered.
          </p>
          <Link
            href={siteConfig.github.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-alt transition-colors"
          >
            Read the Docs →
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
