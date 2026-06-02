import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="border-b border-border/60 bg-surface-muted">
      <div className="container-narrow py-16 md:py-24">
        {eyebrow && <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
      </div>
    </section>
  );
}
