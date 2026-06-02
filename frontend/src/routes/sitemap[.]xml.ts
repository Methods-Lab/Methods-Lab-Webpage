import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/sitemap.xml")({
  head: () => ({
    meta: [
      { title: "Sitemap — Methods Lab" },
      { name: "description", content: "Sitemap placeholder for Methods Lab." },
      { property: "og:title", content: "Sitemap — Methods Lab" },
      { property: "og:url", content: "/sitemap.xml" },
    ],
    links: [{ rel: "canonical", href: "/sitemap.xml" }],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-24">
        <h1 className="text-3xl font-semibold">Sitemap</h1>
        <p className="mt-4 text-muted-foreground">
          This route exists to keep the router tree consistent after migrating the frontend. The live site should still use your Vercel deployment sitemap settings.
        </p>
      </section>
    </SiteLayout>
  );
}
