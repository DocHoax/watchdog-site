"use client";

import { RevealSection } from "@/components/reveal-section";

/**
 * Architecture diagram showing the Watchdog data pipeline:
 * Collectors → Diagnostics / Anomaly Detection → Storage / Reporting → API / Prometheus
 */
export function ArchitectureSection() {
  return (
    <RevealSection
      id="architecture"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Architecture
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A single binary. No external dependencies. Pure Go from collectors
            to API.
          </p>
        </div>

        {/* Pipeline diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: horizontal pipeline with arrows between stages */}
          <div className="hidden md:flex items-stretch gap-3">
            <PipelineStage
              title="Collectors"
              items={["CPU / Memory", "Disk / Network", "Processes", "Containers"]}
              accent="text-accent"
              borderColor="border-accent/30"
            />

            <PipelineArrow />

            <PipelineStage
              title="Analysis"
              items={[
                "10-Rule Diagnostics",
                "EWMA Anomaly Detection",
                "Z-Score Evaluation",
                "Threshold Alerts",
              ]}
              accent="text-status-warn"
              borderColor="border-status-warn/30"
            />

            <PipelineArrow />

            <PipelineStage
              title="Storage"
              items={[
                "SQLite WAL Database",
                "Time-Series Metrics",
                "Alert Event Log",
                "Retention Pruning",
              ]}
              accent="text-status-ok"
              borderColor="border-status-ok/30"
            />

            <PipelineArrow />

            <PipelineStage
              title="Output"
              items={[
                "REST API",
                "Prometheus /metrics",
                "HTML / JSON / CSV",
                "Interactive TUI",
              ]}
              accent="text-purple-400"
              borderColor="border-purple-400/30"
            />
          </div>

          {/* Mobile: vertical stack with down-arrows */}
          <div className="flex flex-col gap-3 md:hidden">
            <PipelineStage
              title="Collectors"
              items={["CPU / Memory", "Disk / Network", "Processes", "Containers"]}
              accent="text-accent"
              borderColor="border-accent/30"
            />

            <PipelineArrowDown />

            <PipelineStage
              title="Analysis"
              items={[
                "10-Rule Diagnostics",
                "EWMA Anomaly Detection",
                "Z-Score Evaluation",
                "Threshold Alerts",
              ]}
              accent="text-status-warn"
              borderColor="border-status-warn/30"
            />

            <PipelineArrowDown />

            <PipelineStage
              title="Storage"
              items={[
                "SQLite WAL Database",
                "Time-Series Metrics",
                "Alert Event Log",
                "Retention Pruning",
              ]}
              accent="text-status-ok"
              borderColor="border-status-ok/30"
            />

            <PipelineArrowDown />

            <PipelineStage
              title="Output"
              items={[
                "REST API",
                "Prometheus /metrics",
                "HTML / JSON / CSV",
                "Interactive TUI",
              ]}
              accent="text-purple-400"
              borderColor="border-purple-400/30"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
          {[
            {
              label: "Zero CGO",
              detail: "Pure Go — single static binary, no C dependencies",
            },
            {
              label: "< 25 MB RSS",
              detail: "Minimal memory footprint with < 1% CPU overhead",
            },
            {
              label: "WAL Mode",
              detail: "Concurrent reads, safe writes, auto retention pruning",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center rounded-lg border border-border bg-surface p-4"
            >
              <div className="text-sm font-mono font-semibold text-accent mb-1">
                {item.label}
              </div>
              <div className="text-xs text-muted">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function PipelineStage({
  title,
  items,
  accent,
  borderColor,
}: {
  title: string;
  items: string[];
  accent: string;
  borderColor: string;
}) {
  return (
    <div
      className={`flex-1 min-w-0 rounded-lg border ${borderColor} bg-surface p-5 flex flex-col`}
    >
      <h3 className={`text-sm font-semibold ${accent} mb-3 font-mono`}>
        {title}
      </h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-xs text-muted flex items-start gap-2">
            <span className={`mt-1 h-1 w-1 rounded-full bg-current ${accent} shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Horizontal arrow for the desktop layout. */
function PipelineArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 w-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-border"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** Vertical arrow for the mobile layout. */
function PipelineArrowDown() {
  return (
    <div className="flex items-center justify-center h-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-border"
        aria-hidden="true"
      >
        <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
