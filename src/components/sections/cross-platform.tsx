"use client";

import type { LucideIcon } from "lucide-react";
import { Terminal, Container } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";
import { siteConfig } from "@/config/site";

interface IconProps {
  className?: string;
}

/** Tux — simplified Linux penguin. */
function LinuxIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.503 2c-.466 0-.862.19-1.164.518-.303.33-.508.793-.637 1.334-.253 1.055-.256 2.45-.076 3.953a11.2 11.2 0 0 0-2.17 2.384c-.763 1.13-1.302 2.47-1.302 3.811 0 .896.174 1.614.474 2.197.295.576.71 1.017 1.178 1.367a7.3 7.3 0 0 0-.862 1.12c-.376.628-.573 1.285-.397 1.89.178.61.71.997 1.46 1.178.713.173 1.618.17 2.567.082a14 14 0 0 0 .93-.122c.285.107.595.177.926.22a5.4 5.4 0 0 0 1.14.008c.327-.04.634-.107.916-.212.3.04.616.077.94.1.95.072 1.854.06 2.562-.127.744-.197 1.262-.597 1.426-1.208.16-.604-.044-1.254-.424-1.871a7 7 0 0 0-.828-1.064c.454-.35.857-.787 1.142-1.357.29-.58.454-1.288.454-2.172 0-1.338-.54-2.677-1.302-3.807a11.2 11.2 0 0 0-2.164-2.378c.174-1.486.17-2.864-.08-3.912-.127-.538-.332-1-.634-1.328A1.48 1.48 0 0 0 12.503 2z" />
    </svg>
  );
}

/** Apple logo — simplified. */
function MacOSIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/** Windows logo — simplified four-pane window. */
function WindowsIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 12V6.5l8-1.1V12H3zm0 .5h8v6.6l-8-1.1V12.5zM11.5 5.3l9.5-1.3v8h-9.5V5.3zm0 7.2h9.5v8l-9.5-1.3v-6.7z" />
    </svg>
  );
}

const platforms = [
  {
    name: "Linux",
    Icon: LinuxIcon,
    details: "Kernel 3.10+, amd64/arm64/armv7",
    install: siteConfig.install.linux,
    shell: "bash",
  },
  {
    name: "macOS",
    Icon: MacOSIcon,
    details: "11.0+ (Big Sur – Sequoia), arm64 & amd64",
    install: siteConfig.install.macos,
    shell: "bash",
  },
  {
    name: "Windows",
    Icon: WindowsIcon,
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
                <p.Icon className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground">{p.name}</h3>
                  <p className="text-xs text-muted">{p.details}</p>
                </div>
              </div>

              {/* Install snippet */}
              <div className="p-4 bg-[#0c0c0e] overflow-x-auto">
                <pre className="font-mono text-xs text-muted leading-relaxed whitespace-pre-wrap break-all sm:break-normal">
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
          <div className="rounded-lg border border-border bg-surface p-5 overflow-hidden">
            <h3 className="text-sm font-semibold text-foreground mb-2 font-mono">
              Go Install
            </h3>
            <pre className="font-mono text-xs text-muted whitespace-pre-wrap break-all sm:break-normal overflow-x-auto">
              <code>
                <span className="text-accent">$</span> {siteConfig.install.go}
              </code>
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 overflow-hidden">
            <h3 className="text-sm font-semibold text-foreground mb-2 font-mono">
              Docker
            </h3>
            <pre className="font-mono text-xs text-muted whitespace-pre-wrap break-all sm:break-normal overflow-x-auto">
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
