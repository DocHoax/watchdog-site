"use client";

import { RevealSection } from "@/components/reveal-section";
import { siteConfig } from "@/config/site";

const platforms = [
  {
    name: "Linux",
    icon: "🐧",
    details: "Kernel 3.10+, amd64/arm64/armv7",
    install: siteConfig.install.linux,
    shell: "bash",
  },
  {
    name: "macOS",
    icon: "🍎",
    details: "11.0+ (Big Sur – Sequoia), arm64 & amd64",
    install: siteConfig.install.macos,
    shell: "bash",
  },
  {
    name: "Windows",
    icon: "🪟",
    details: "10/11, Server 2016–2025, amd64/arm64",
    install: siteConfig.install.windows,
    shell: "powershell",
  },
];

export function CrossPlatformSection() {
  return (
    <RevealSection
      id="installation"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Cross-Platform
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            One binary, every major platform. Zero external runtime
            dependencies.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-border bg-surface overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                <span className="text-2xl" aria-hidden="true">
                  {p.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{p.name}</h3>
                  <p className="text-xs text-muted">{p.details}</p>
                </div>
              </div>

              {/* Install snippet */}
              <div className="p-4 bg-[#0c0c0e]">
                <pre className="font-mono text-xs text-muted leading-relaxed whitespace-pre-wrap overflow-x-auto">
                  <code>
                    <span className="text-accent">$</span>{" "}
                    {p.install}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Go install / Docker */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2 font-mono">
              Go Install
            </h3>
            <pre className="font-mono text-xs text-muted whitespace-pre-wrap">
              <code>
                <span className="text-accent">$</span> {siteConfig.install.go}
              </code>
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2 font-mono">
              Docker
            </h3>
            <pre className="font-mono text-xs text-muted whitespace-pre-wrap">
              <code>
                <span className="text-accent">$</span>{" "}
                {siteConfig.install.docker}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
