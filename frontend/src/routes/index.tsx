import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Github, Shield, Lock, Clock, FileText } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { JsonLd } from "@/components/site/JsonLd";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services, trustPoints, projects, process, differentiators, faqs, site } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Methods Lab — Applied AI & ML Systems" },
      { name: "description", content: "Methods Lab builds applied AI systems, recommender engines, and data products for real-world teams." },
      { property: "og:title", content: "Methods Lab — Applied AI Systems" },
      { property: "og:description", content: "AI agents, recommender systems, and ML platforms built for production." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Methods Lab",
  description: "Applied AI lab building agents, recommender systems, and data products.",
  email: site.email,
  url: "/",
  areaServed: "Worldwide",
};

const servicesLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Methods Lab",
  description: "AI agents, recommender systems, MLOps, and data platform delivery.",
  serviceType: services.map((s) => s.title),
};

function HomePage() {
  return (
    <SiteLayout>
      <JsonLd data={orgLd} />
      <JsonLd data={servicesLd} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        <div className="container-narrow relative py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Applied AI research lab
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Building <span className="brand-gradient-text">Applied AI Systems</span> for Real-World Teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Methods Lab partners with teams to deliver AI agents, recommender systems, and data platforms that are measurable, reliable, and production-ready.
            </p>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              We focus on high-impact ML systems, clear evaluation, and robust deployment pipelines.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/contact">Call Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border/60 bg-surface-muted">
        <div className="container-narrow py-12">
          <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Why teams choose Methods Lab</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm text-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">Portfolio projects and pilot engagements available on request.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="container-narrow py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">The studio</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Software built around real business needs</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>At Methods Lab, we focus on applied AI that makes data useful and decisions faster.</p>
            <p>Whether you're building a recommender engine, automating analytics, or shipping an AI agent, we design systems that stay stable in production.</p>
            <p>Our approach blends research rigor, clear metrics, and pragmatic engineering.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border/60 bg-surface-muted">
        <div className="container-narrow py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Services</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">What we build</h2>
            </div>
            <Link to="/services" className="hidden text-sm font-medium text-foreground hover:underline md:inline">All services →</Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/services"
                  hash={s.slug}
                  className="group rounded-2xl border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="container-narrow py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Featured projects</h2>
          </div>
          <Link to="/work" className="hidden text-sm font-medium text-foreground hover:underline md:inline">View all →</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-brand-muted via-surface-muted to-surface relative">
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-border bg-surface/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </div>
                <div className="absolute bottom-4 right-4 text-2xl font-semibold text-foreground/80">{p.title.split(" ").map(w=>w[0]).join("").slice(0,3)}</div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((t) => (
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

      {/* Process */}
      <section className="border-y border-border/60 bg-surface-muted">
        <div className="container-narrow py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">How we work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A clear, predictable process</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Clear milestones, evaluation checkpoints, and documented results — so there are no surprises.</p>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background text-sm font-semibold">{i + 1}</span>
                    <Icon className="h-4 w-4 text-brand" />
                  </div>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Differentiators */}
      <section className="container-narrow py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Why Methods Lab</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Partners, not just vendors</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="rounded-2xl border border-border bg-surface p-6">
                <Icon className="h-5 w-5 text-brand" />
                <h3 className="mt-4 font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="border-y border-border/60 bg-surface-muted">
        <div className="container-narrow py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">References</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Trusted by research teams</h2>
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
            <p className="text-sm text-muted-foreground">
              We share references and case details after an initial conversation to keep client work confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Verification & security */}
      <section className="container-narrow py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-brand"><Shield className="h-5 w-5" /><h3 className="font-semibold text-foreground">Lab details</h3></div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Operating as <strong className="text-foreground">Methods Lab</strong> — applied AI research and engineering.</li>
              <li>Remote-first, headquartered in Pakistan, collaborating worldwide.</li>
              <li>Public code samples available on <a className="underline" href={site.socials.github} target="_blank" rel="noreferrer">GitHub <Github className="inline h-3 w-3" /></a>.</li>
              <li>Direct contact: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-brand"><Lock className="h-5 w-5" /><h3 className="font-semibold text-foreground">Security practices</h3></div>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><FileText className="h-4 w-4" /> NDAs available before any technical discussion</li>
              <li className="flex items-center gap-2"><Lock className="h-4 w-4" /> Private repositories by default</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> Least-privilege access for credentials & infra</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Data deletion on request after project end</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/60 bg-surface-muted">
        <div className="container-narrow py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Common questions</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr]">
            <p className="text-muted-foreground">Don't see your question? Email us — we usually reply within 24–48 hours.</p>
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-surface">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q-${i}`} className="px-5">
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-narrow py-24">
        <div className="rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Ready to ship real AI?</h2>
          <p className="mt-4 max-w-xl text-background/70">Tell us about your data, goals, and constraints. We will respond within 24–48 hours.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">Call Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background">
              <a href={`mailto:${site.email}`}>Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
