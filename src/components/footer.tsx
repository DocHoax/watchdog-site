import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WatchdogLogo } from "@/components/icons";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterGroup {
  heading: string;
  links: FooterLink[];
}

const footerLinks: FooterGroup[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: siteConfig.nav.features },
      { label: "Installation", href: siteConfig.nav.installation },
      { label: "Documentation", href: siteConfig.github.docs, external: true },
      { label: "Releases", href: siteConfig.github.releases, external: true },
    ],
  },
  {
    heading: "Project",
    links: [
      { label: "GitHub", href: siteConfig.github.repo, external: true },
      { label: "License", href: siteConfig.github.license, external: true },
      { label: "Security", href: siteConfig.github.security, external: true },
      {
        label: "Contributing",
        href: siteConfig.github.contributing,
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <WatchdogLogo className="h-6 w-6 text-accent" />
              <span className="font-semibold text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-muted max-w-xs">
              A fast, cross-platform system monitoring and diagnostics CLI built
              in Go.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Watchdog. MIT License.
          </p>
          <Link
            href={siteConfig.github.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            Open Source on GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
