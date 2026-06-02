import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { projects, projectCategories } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work & Case Studies — Methods Lab" },
      { name: "description", content: "Selected AI, ML, and data systems built by Methods Lab." },
      { property: "og:title", content: "Work — Methods Lab" },
      { property: "og:description", content: "Case studies in AI agents, recommenders, and data platforms." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Selected work"
        title="Case studies"
        lead="A curated set of open-source and research projects showing how we approach applied AI and ML delivery."
      />
      <section className="container-narrow py-12 md:py-16">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                filter === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-muted via-surface-muted to-surface">
                <div className="absolute inset-0 grid-bg opacity-60" />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-surface/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{p.category}</span>
              </div>
              <div className="p-6">
                <h2 className="font-semibold">{p.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  View case study <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
