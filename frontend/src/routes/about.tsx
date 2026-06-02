import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { techStack } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Methods Lab" },
      { name: "description", content: "Methods Lab is an applied AI team focused on real-world ML systems." },
      { property: "og:title", content: "About — Methods Lab" },
      { property: "og:description", content: "A founder-led AI lab building production ML systems." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const philosophy = [
  { title: "Clarity", body: "Transparent experiments and decisions lead to better ML outcomes." },
  { title: "Rigor", body: "We prioritize evaluation, baselines, and reproducibility." },
  { title: "Impact", body: "Models must ship and improve real workflows." },
  { title: "Partnership", body: "We aim to become long-term AI partners, not just vendors." },
];

const audience = ["AI teams", "Product leaders", "Data teams", "Research groups", "Operations teams", "Founders"];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="An applied AI lab built around clarity and rigor"
        lead="Methods Lab partners with teams to design ML systems that are measurable, reliable, and aligned with real business goals."
      />

      <section className="container-narrow py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Our mission</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ship AI systems that perform in real conditions.</h2>
          </div>
          <p className="text-muted-foreground">
            We focus on practical ML engineering — systems that ship, hold up under real usage, and are easy to evolve. We work as a small, hands-on team to keep feedback loops short.
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface-muted">
        <div className="container-narrow py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Philosophy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What we believe</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Team</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Founder-led lab</h2>
            <p className="mt-4 text-muted-foreground">
              Methods Lab is founder-led. Every engagement is run directly by senior engineers — no handoffs. We bring in trusted specialists when a project benefits from extra capacity.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Working hours:</strong> Asia/Karachi, with overlap for UAE, Europe, and US clients.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Who we work with</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {audience.map((a) => (
                <li key={a} className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground">{a}</li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-brand">Tech we use</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {techStack.map((t) => (
                <li key={t} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
