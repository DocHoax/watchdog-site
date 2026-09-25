/** Shared icon components. */

export {
  Github as GitHubIcon,
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
