/**
 * Central site configuration.
 * All product URLs, release info, and metadata live here.
 */

export const siteConfig = {
  name: "Watchdog",
  tagline: "System monitoring. Diagnostics without the guesswork.",
  description:
    "A fast, cross-platform CLI for monitoring system health, detecting anomalies, diagnosing problems, and generating actionable reports.",
  url: "https://watchdog.dev",

  github: {
    repo: "https://github.com/DocHoax/watchdog",
    releases: "https://github.com/DocHoax/watchdog/releases",
    latest: "https://github.com/DocHoax/watchdog/releases/tag/v1.0.0",
    license: "https://github.com/DocHoax/watchdog/blob/main/LICENSE",
    contributing: "https://github.com/DocHoax/watchdog/blob/main/CONTRIBUTING.md",
    security: "https://github.com/DocHoax/watchdog/blob/main/SECURITY.md",
    docs: "https://github.com/DocHoax/watchdog#readme",
  },

  release: {
    version: "1.0.0",
    tag: "v1.0.0",
  },

  install: {
    go: "go install github.com/DocHoax/watchdog@v1.0.0",
    linux:
      'curl -sSL https://github.com/DocHoax/watchdog/releases/download/v1.0.0/watchdog_1.0.0_linux_amd64.tar.gz | tar xz\nsudo mv watchdog /usr/local/bin/',
    macos:
      'curl -sSL https://github.com/DocHoax/watchdog/releases/download/v1.0.0/watchdog_1.0.0_darwin_arm64.tar.gz | tar xz\nsudo mv watchdog /usr/local/bin/',
    windows:
      "# Download from GitHub Releases\nInvoke-WebRequest -Uri https://github.com/DocHoax/watchdog/releases/download/v1.0.0/watchdog_1.0.0_windows_amd64.zip -OutFile watchdog.zip\nExpand-Archive watchdog.zip -DestinationPath .\n# Add to PATH",
    docker:
      "docker build -t watchdog .\ndocker run --pid=host --net=host -v /proc:/proc:ro -v /sys:/sys:ro watchdog",
  },

  nav: {
    features: "#features",
    docs: "#docs",
    installation: "#installation",
    github: "https://github.com/DocHoax/watchdog",
    getStarted: "#installation",
  },
} as const;

export type SiteConfig = typeof siteConfig;
