import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { site } from "@/data/content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Methods Lab" },
      { name: "description", content: "How Methods Lab handles data submitted through this website." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="container-narrow prose prose-neutral max-w-3xl py-16 text-muted-foreground">
        <p>This page describes how Methods Lab (“we”) handles information you provide when using this website.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">What we collect</h2>
        <p>When you submit the contact form we collect the information you provide: name, email address, optional company name, budget range, project type, and your message.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">How we use it</h2>
        <p>We use this information solely to respond to your inquiry and discuss a potential engagement. We do not sell or share this data with third parties for marketing.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Analytics</h2>
        <p>We may use privacy-respecting analytics (such as Plausible or Google Analytics 4 in cookieless mode) to understand aggregate traffic. No personal data is collected through analytics.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Data retention &amp; deletion</h2>
        <p>You may request deletion of any data you've submitted by emailing <a className="underline text-foreground" href={`mailto:${site.email}`}>{site.email}</a>.</p>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Contact</h2>
        <p>Questions about this policy? Email us at <a className="underline text-foreground" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </section>
    </SiteLayout>
  ),
});
