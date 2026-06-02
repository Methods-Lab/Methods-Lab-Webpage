import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { nav, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-muted">
      <div className="container-narrow grid gap-12 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background font-semibold">M</span>
            <span className="font-semibold tracking-tight">Methods Lab</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Applied AI and ML systems for teams that need reliable, data-driven products.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{site.location}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Studio</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href={site.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted">
              <Github className="h-4 w-4" />
            </a>
            <a href={site.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={site.socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-narrow flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Methods Lab. All rights reserved.</p>
          <p>AI Agents • ML Systems • Recommenders • Data Platforms</p>
        </div>
      </div>
    </footer>
  );
}
