"use client";

import { useState } from "react";

interface TerminalLine {
  type: "prompt" | "output" | "header" | "blank" | "status";
  text: string;
  /** Shorter text shown on mobile when the line is too wide. */
  mobileText?: string;
  color?: string;
}

interface TerminalTab {
  label: string;
  command: string;
  mobileCommand?: string;
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
        mobileText: "✓ CPU saturation       OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Memory pressure         OK",
        mobileText: "✓ Memory pressure      OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "⚠ Disk I/O latency        WARNING  avg 18ms (threshold: 15ms)",
        mobileText: "⚠ Disk I/O latency     WARN 18ms",
        color: "text-status-warn",
      },
      {
        type: "status",
        text: "✓ Inode usage             OK",
        mobileText: "✓ Inode usage          OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ DNS resolution          OK  (avg 12ms)",
        mobileText: "✓ DNS resolution       OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Paging / swap           OK",
        mobileText: "✓ Paging / swap        OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Zombie processes        OK  (0 found)",
        mobileText: "✓ Zombie processes     OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ OOM risk                OK",
        mobileText: "✓ OOM risk             OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Network errors          OK",
        mobileText: "✓ Network errors       OK",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Container health        OK  (3/3 running)",
        mobileText: "✓ Container health     OK",
        color: "text-status-ok",
      },
      { type: "blank", text: "" },
      {
        type: "output",
        text: "9/10 checks passed · 1 warning · 0 critical",
        mobileText: "9/10 passed · 1 warn · 0 crit",
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
        mobileText: "┌─ CPU ───────────────────┐",
      },
      {
        type: "output",
        text: "│ Core 0  ██████████████░░░░░░░░  62%    │",
        mobileText: "│ C0  █████████░░░  62%   │",
      },
      {
        type: "output",
        text: "│ Core 1  ████████░░░░░░░░░░░░░░  35%    │",
        mobileText: "│ C1  ██████░░░░░  35%   │",
      },
      {
        type: "output",
        text: "│ Core 2  ██████████████████░░░░  78%    │",
        mobileText: "│ C2  ███████████░  78%   │",
      },
      {
        type: "output",
        text: "│ Core 3  ██████░░░░░░░░░░░░░░░░  28%    │",
        mobileText: "│ C3  █████░░░░░░  28%   │",
      },
      {
        type: "output",
        text: "└────────────────────────────────────────┘",
        mobileText: "└─────────────────────────┘",
      },
      {
        type: "output",
        text: "┌─ Memory ───────────────────────────────┐",
        mobileText: "┌─ Memory ────────────────┐",
      },
      {
        type: "output",
        text: "│ Used   5.2 GB / 16.0 GB   ████████░░  │",
        mobileText: "│ Used  5.2/16 GB ████░░ │",
      },
      {
        type: "output",
        text: "│ Swap   0.1 GB /  4.0 GB   ░░░░░░░░░░  │",
        mobileText: "│ Swap  0.1/4 GB  ░░░░░░ │",
      },
      {
        type: "output",
        text: "└────────────────────────────────────────┘",
        mobileText: "└─────────────────────────┘",
      },
      { type: "blank", text: "" },
      {
        type: "output",
        text: "  Processes: 284  │  Uptime: 14d 7h 23m",
        mobileText: "Procs: 284 │ Up: 14d 7h",
      },
    ],
  },
  {
    label: "report",
    command: "watchdog report --format html --output report.html",
    mobileCommand: "watchdog report --format html",
    lines: [
      { type: "header", text: "Watchdog Report Generator — v1.0.0" },
      { type: "blank", text: "" },
      { type: "output", text: "Collecting system metrics..." },
      { type: "output", text: "  → CPU, memory, disk, network     done" },
      { type: "output", text: "  → Process listing                done" },
      { type: "output", text: "  → Running diagnostics            done" },
      { type: "output", text: "  → Anomaly detection scan         done" },
      { type: "blank", text: "" },
      {
        type: "output",
        text: "Generating HTML report with inline SVG sparklines...",
        mobileText: "Generating HTML report...",
      },
      {
        type: "status",
        text: "✓ Report saved to report.html  (42 KB)",
        mobileText: "✓ Saved report.html (42 KB)",
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
        mobileText: "✓ REST API on :9100",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ Prometheus metrics on :9100/metrics",
        mobileText: "✓ Prometheus on :9100",
        color: "text-status-ok",
      },
      {
        type: "status",
        text: "✓ pprof profiling on :9100/debug/pprof",
        mobileText: "✓ pprof on :9100",
        color: "text-status-ok",
      },
      { type: "blank", text: "" },
      {
        type: "output",
        text: "Collectors active: cpu, memory, disk, network, process",
        mobileText: "Collectors: cpu, mem, disk, net",
      },
      {
        type: "output",
        text: "Storage: SQLite WAL mode — ~/.watchdog/watchdog.db",
        mobileText: "Storage: SQLite WAL mode",
      },
      {
        type: "output",
        text: "Retention: 7 days (auto-pruning enabled)",
        mobileText: "Retention: 7 days (auto-prune)",
      },
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
        <span className="ml-3 text-xs text-muted font-mono truncate">
          watchdog — bash
        </span>
      </div>

      {/* Tabs */}
      <div
        className="flex border-b border-border overflow-x-auto scrollbar-none"
        role="tablist"
        aria-label="Terminal command demos"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={i === activeTab}
            className={`px-4 py-2 text-xs font-mono transition-colors whitespace-nowrap shrink-0 ${
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
        className="p-4 md:p-6 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed min-h-[280px] sm:min-h-[320px] overflow-x-auto"
        role="tabpanel"
        aria-label={`${active.label} output`}
      >
        {/* Command prompt */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-accent">$</span>
          <span className="text-foreground">
            <span className="hidden sm:inline">{active.command}</span>
            <span className="sm:hidden">{active.mobileCommand ?? active.command}</span>
          </span>
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
              {line.mobileText ? (
                <>
                  <span className="hidden sm:inline">{line.text}</span>
                  <span className="sm:hidden">{line.mobileText}</span>
                </>
              ) : (
                line.text
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
