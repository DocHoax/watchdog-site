"use client";

import { RevealSection } from "@/components/reveal-section";

const capabilities = [
  {
    title: "System Monitoring",
    description:
      "Real-time CPU, memory, disk, and network telemetry with per-core granularity and sparkline history.",
    icon: "📊",
  },
  {
    title: "Automated Diagnostics",
    description:
      "10-rule diagnostic engine checks CPU saturation, inode exhaustion, DNS latency, paging spikes, and more.",
    icon: "🔍",
  },
  {
    title: "Anomaly Detection",
    description:
      "Statistical anomaly detection using EWMA filtering and rolling Z-score evaluation (Z ≥ 2.5).",
    icon: "📈",
  },
  {
    title: "Process & Service Health",
    description:
      "Process listing with sorting, filtering, and kill support. Container health monitoring for Docker environments.",
    icon: "⚙️",
  },
  {
    title: "Network Diagnostics",
    description:
      "Network interface monitoring, error rate tracking, and DNS resolution latency checks.",
    icon: "🌐",
  },
  {
    title: "SQLite Storage",
    description:
      "Embedded SQLite time-series database with WAL mode, background retention pruning, and metric export.",
    icon: "💾",
  },
  {
    title: "Multi-Format Reports",
    description:
      "Generate self-contained HTML reports with inline SVG sparklines, plus JSON, CSV, and terminal output.",
    icon: "📋",
  },
  {
    title: "REST API & Server",
    description:
      "Built-in REST API with authentication, TLS support, and runtime pprof profiling.",
    icon: "🖥️",
  },
  {
    title: "Prometheus Integration",
    description:
      "Native /metrics endpoint for Prometheus scraping. Drop Watchdog into your existing monitoring stack.",
    icon: "📡",
  },
];

export function FeaturesSection() {
  return (
    <RevealSection id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Core Capabilities
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Everything you need to understand what your systems are doing — and
            what they should be doing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group rounded-lg border border-border bg-surface p-6 hover:border-accent/30 hover:bg-surface-alt transition-colors"
            >
              <div className="text-2xl mb-3" aria-hidden="true">
                {cap.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
