import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Methods Lab" },
      { name: "description", content: "Terms that apply to use of the Methods Lab website and engagements." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="container-narrow max-w-3xl py-16 text-muted-foreground">
        <p>These terms govern your use of the Methods Lab website. By using this site you agree to these terms.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Information on the site</h2>
        <p>Content on this site is provided for general informational purposes. While we work to keep it accurate, we make no warranties about completeness or fitness for a particular purpose.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Engagements</h2>
        <p>Any service engagement with Methods Lab is governed by a separate written agreement, including scope, deliverables, payment terms, and confidentiality. This website is not itself an offer to enter into a contract.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Intellectual property</h2>
        <p>All website content, branding, and design are owned by Methods Lab unless otherwise noted. Code samples and case study materials are shown for illustrative purposes.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Limitation of liability</h2>
        <p>To the extent permitted by law, Methods Lab is not liable for any indirect or consequential damages arising from use of this website.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Changes</h2>
        <p>We may update these terms from time to time. Continued use of the site means you accept the updated terms.</p>
      </section>
    </SiteLayout>
  ),
});
