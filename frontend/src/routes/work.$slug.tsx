import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Github, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { projects, site } from "@/data/content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Methods Lab` : "Case study — Methods Lab";
    const description = p?.summary ?? "Case study by Methods Lab.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-narrow py-24 text-center">
        <h1 className="text-3xl font-semibold">Case study not found</h1>
        <Link to="/work" className="mt-4 inline-block text-brand underline">Back to work</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="container-narrow py-24 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <Link to="/work" className="mt-4 inline-block text-brand underline">Back to work</Link>
      </div>
    </SiteLayout>
  ),
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();

  return (
    <SiteLayout>
      <section className="border-b border-border/60 bg-surface-muted">
        <div className="container-narrow py-16">
          <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-brand">{p.category}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.summary}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {p.stack.map((t: string) => (
              <span key={t} className="rounded-md bg-surface px-2 py-1 text-xs font-medium text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow py-16">
        <div className="aspect-[16/8] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-muted via-surface-muted to-surface relative">
          <div className="absolute inset-0 grid-bg opacity-60" />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="mt-3 text-muted-foreground">{p.problem}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Solution</h2>
              <p className="mt-3 text-muted-foreground">{p.solution}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {p.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Outcome</h2>
              <p className="mt-3 text-muted-foreground">{p.outcome}</p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold">Tech stack</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {p.stack.map((t: string) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold">Links</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                {p.repoUrl ? (
                  <a href={p.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand hover:underline">
                    <Github className="h-4 w-4" /> GitHub repository
                  </a>
                ) : (
                  <a href={site.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand hover:underline">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <ExternalLink className="h-4 w-4" /> Live demo on request
                </span>
              </div>
            </div>
            <Button asChild className="w-full bg-foreground text-background hover:bg-foreground/90">
              <a href={`mailto:${site.email}`}>Discuss a similar project</a>
            </Button>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
