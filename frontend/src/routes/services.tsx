import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { services, engagementModels } from "@/data/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Methods Lab" },
      { name: "description", content: "AI agents, recommender systems, data platforms, and MLOps delivery." },
      { property: "og:title", content: "Services — Methods Lab" },
      { property: "og:description", content: "Applied AI, ML systems, and data engineering services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="What we build"
        lead="We help teams design, build, and deploy AI systems that create measurable value."
      />

      <section className="container-narrow py-16 md:py-24">
        <div className="grid gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-soft md:p-10"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                  <div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-muted text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground">{s.short}</p>
                    <p className="mt-6 text-sm text-muted-foreground">
                      Starting from <span className="font-semibold text-foreground">{s.priceFrom}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Common scope</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface-muted">
        <div className="container-narrow py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Engagement models</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">How we work together</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {engagementModels.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            <strong className="text-foreground">Pricing note:</strong> Prices shown are starting points. Final quotes depend on data availability, integrations, and timeline.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
