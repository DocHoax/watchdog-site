/** Shared icon components. */

export {
  Terminal as TerminalIcon,
  ChevronRight,
  BarChart3 as ChartIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon,
  Settings as SettingsIcon,
  Globe as GlobeIcon,
  Database as DatabaseIcon,
  ClipboardList as ClipboardIcon,
  Monitor as MonitorIcon,
  Radio as RadioIcon,
  BookOpen as BookOpenIcon,
  ArrowRight as ArrowRightIcon,
} from "lucide-react";

interface IconProps {
  className?: string;
}

/** Watchdog logo — stylised eye/shield motif. */
export function WatchdogLogo({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield outline */}
      <path
        d="M16 2L4 8v8c0 7.73 5.12 14.95 12 16 6.88-1.05 12-8.27 12-16V8L16 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Eye shape */}
      <path
        d="M9 16c0 0 3-5 7-5s7 5 7 5-3 5-7 5-7-5-7-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Pupil */}
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

/** GitHub mark — custom SVG since Lucide doesn't ship brand icons. */
export function GitHubIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
