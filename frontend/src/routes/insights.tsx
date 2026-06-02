import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Methods Lab" },
      { name: "description", content: "Notes on applied AI, recommender systems, and production ML." },
      { property: "og:title", content: "Insights — Methods Lab" },
      { property: "og:description", content: "Notes on applied AI and ML systems." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="Insights"
        title="Notes on applied AI systems"
        lead="Writing on AI agents, recommenders, data platforms, and ML in production. New essays coming soon."
      />
      <section className="container-narrow py-16">
        <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center text-muted-foreground">
          We're preparing the first set of articles. In the meantime, follow our work or reach out directly.
        </div>
      </section>
    </SiteLayout>
  ),
});
