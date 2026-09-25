"use client";

import { useState } from "react";

interface TerminalLine {
  type: "prompt" | "output" | "header" | "blank" | "status";
  text: string;
  color?: string;
}

interface TerminalTab {
  label: string;
  command: string;
  lines: TerminalLine[];
}

const tabs: TerminalTab[] = [
  {
    label: "diagnose",
    command: "watchdog diagnose",
    lines: [
      { type: "header", text: "Watchdog Diagnostics — v1.0.0" },
      { type: "blank", text: "" },
      {
        type: "status",
        text: "✓ CPU saturation          OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Memory pressure         OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "⚠ Disk I/O latency        WARNING  avg 18ms (threshold: 15ms)",
        color: "text-status-warn",
      },
      {
        type: "status",
        text: "✓ Inode usage             OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ DNS resolution          OK  (avg 12ms)",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Paging / swap           OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Zombie processes        OK  (0 found)",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ OOM risk                OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Network errors          OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Container health        OK  (3/3 running)",
        color: "text-status-ok",
      },
      { type: "blank", text: "" },
      {
        type: "output",
        text: "9/10 checks passed · 1 warning · 0 critical",
      },
    ],
  },
  {
    label: "dashboard",
    command: "watchdog dash",
    lines: [
      { type: "header", text: "Watchdog Dashboard — v1.0.0" },
      { type: "blank", text: "" },
      {
        type: "output",
        text: "┌─ CPU ──────────────────────────────────┐",
      },
      {
        type: "output",
        text: "│ Core 0  ██████████████░░░░░░░░  62%    │",
      },
      {
        type: "output",
        text: "│ Core 1  ████████░░░░░░░░░░░░░░  35%    │",
      },
      {
        type: "output",
        text: "│ Core 2  ██████████████████░░░░  78%    │",
      },
      {
        type: "output",
        text: "│ Core 3  ██████░░░░░░░░░░░░░░░░  28%    │",
      },
      {
        type: "output",
        text: "└────────────────────────────────────────┘",
      },
      {
        type: "output",
        text: "┌─ Memory ───────────────────────────────┐",
      },
      {
        type: "output",
        text: "│ Used   5.2 GB / 16.0 GB   ████████░░  │",
      },
      {
        type: "output",
        text: "│ Swap   0.1 GB /  4.0 GB   ░░░░░░░░░░  │",
      },
      {
        type: "output",
        text: "└────────────────────────────────────────┘",
      },
      { type: "blank", text: "" },
      { type: "output", text: "  Processes: 284  │  Uptime: 14d 7h 23m" },
    ],
  },
  {
    label: "report",
    command: "watchdog report --format html --output report.html",
    lines: [
      { type: "header", text: "Watchdog Report Generator — v1.0.0" },
      { type: "blank", text: "" },
      { type: "output", text: "Collecting system metrics..." },
      { type: "output", text: "  → CPU, memory, disk, network     done" },
      { type: "output", text: "  → Process listing                done" },
      { type: "output", text: "  → Running diagnostics            done" },
      { type: "output", text: "  → Anomaly detection scan         done" },
      { type: "blank", text: "" },
      { type: "output", text: "Generating HTML report with inline SVG sparklines..." },
      {
        type: "status",
        text: "✓ Report saved to report.html  (42 KB)",
        color: "text-status-ok",
      },
    ],
  },
  {
    label: "server",
    command: "watchdog server --port 9100",
    lines: [
      { type: "header", text: "Watchdog Server — v1.0.0" },
      { type: "blank", text: "" },
      {
        type: "status",
        text: "✓ REST API listening on :9100/api/v1",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Prometheus metrics on :9100/metrics",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ pprof profiling on :9100/debug/pprof",
        color: "text-status-ok",
      },
      { type: "blank", text: "" },
      { type: "output", text: "Collectors active: cpu, memory, disk, network, process" },
      { type: "output", text: "Storage: SQLite WAL mode — ~/.watchdog/watchdog.db" },
      { type: "output", text: "Retention: 7 days (auto-pruning enabled)" },
      { type: "blank", text: "" },
      { type: "output", text: "Press Ctrl+C to stop." },
    ],
  },
];

export function TerminalDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-[#0c0c0e] shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-alt border-b border-border">
        <span className="h-3 w-3 rounded-full bg-status-error/80" />
        <span className="h-3 w-3 rounded-full bg-status-warn/80" />
        <span className="h-3 w-3 rounded-full bg-status-ok/80" />
        <span className="ml-3 text-xs text-muted font-mono">
          watchdog — bash
        </span>
      </div>

      {/* Tabs */}
      <div
        className="flex border-b border-border overflow-x-auto"
        role="tablist"
        aria-label="Terminal command demos"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={i === activeTab}
            className={`px-4 py-2 text-xs font-mono transition-colors whitespace-nowrap ${
              i === activeTab
                ? "text-accent border-b-2 border-accent bg-surface/50"
                : "text-muted hover:text-foreground"
            }`}
            onClick={() => setActiveTab(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Terminal body */}
      <div
        className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed min-h-[320px]"
        role="tabpanel"
        aria-label={`${active.label} output`}
      >
        {/* Command prompt */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-accent">$</span>
          <span className="text-foreground">{active.command}</span>
          <span className="terminal-cursor inline-block w-2 h-4 bg-accent/80 ml-0.5" />
        </div>

        {/* Output */}
        {active.lines.map((line, i) => {
          if (line.type === "blank")
            return <div key={i} className="h-3" aria-hidden="true" />;

          return (
            <div
              key={i}
              className={`whitespace-pre ${
                line.color ??
                (line.type === "header"
                  ? "text-accent font-semibold"
                  : "text-muted")
              }`}
            >
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
