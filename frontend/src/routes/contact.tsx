import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, Linkedin, Facebook, CheckCircle2, CalendarClock } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { site } from "@/data/content";
import { submitContact } from "@/lib/contact.functions";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(200),
  company: z.string().trim().max(120).optional(),
  budget: z.string().max(60).optional(),
  projectType: z.string().max(60).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
  website: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Methods Lab" },
      { name: "description", content: "Tell us about your AI or ML project. We respond within 24–48 hours." },
      { property: "og:title", content: "Contact — Methods Lab" },
      { property: "og:description", content: "Get in touch about a project, audit, or partnership." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", budget: "", projectType: "", message: "", website: "" },
  });

  async function onSubmit(values: FormValues) {
    setErr(null);
    try {
      await submitContact({ data: values });
      setSent(true);
      form.reset();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something reliable"
        lead="Whether you're planning an AI agent, recommender system, or data platform, we'd be happy to talk."
      />

      <section className="container-narrow py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft md:p-8">
            {sent ? (
              <div className="flex flex-col items-start gap-3 py-8">
                <CheckCircle2 className="h-10 w-10 text-brand" />
                <h2 className="text-2xl font-semibold">Thanks — your message is in.</h2>
                <p className="text-muted-foreground">We'll review and reply within 24–48 hours. For something time-sensitive, email us directly at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
                <Button onClick={() => setSent(false)} variant="outline">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...form.register("website")} aria-hidden />
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Your name" error={form.formState.errors.name?.message}>
                    <Input {...form.register("name")} placeholder="Jane Doe" />
                  </Field>
                  <Field label="Email" error={form.formState.errors.email?.message}>
                    <Input type="email" {...form.register("email")} placeholder="jane@company.com" />
                  </Field>
                  <Field label="Company (optional)">
                    <Input {...form.register("company")} placeholder="Company Inc." />
                  </Field>
                  <Field label="Budget range (optional)">
                    <select {...form.register("budget")} className="h-10 w-full rounded-md border border-input bg-surface px-3 text-sm">
                      <option value="">Select…</option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000+</option>
                    </select>
                  </Field>
                  <Field label="Project type (optional)">
                    <select {...form.register("projectType")} className="h-10 w-full rounded-md border border-input bg-surface px-3 text-sm">
                      <option value="">Select…</option>
                      <option>AI agent / automation</option>
                      <option>Recommender system</option>
                      <option>Data pipeline / platform</option>
                      <option>Computer vision / NLP</option>
                      <option>MLOps / deployment</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>
                <Field label="Tell us about your project" error={form.formState.errors.message?.message}>
                  <Textarea rows={6} {...form.register("message")} placeholder="Goals, timeline, existing systems, and anything else useful." />
                </Field>

                {err && <p className="text-sm text-destructive">{err}</p>}

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" disabled={form.formState.isSubmitting} className="bg-foreground text-background hover:bg-foreground/90">
                    {form.formState.isSubmitting ? "Sending…" : "Send message"}
                  </Button>
                  <p className="text-xs text-muted-foreground">We reply within 24–48 hours.</p>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold">Direct contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a className="inline-flex items-center gap-2 hover:text-brand" href={`mailto:${site.email}`}><Mail className="h-4 w-4 text-brand" /> {site.email}</a></li>
                <li><a className="inline-flex items-center gap-2 hover:text-brand" href={site.socials.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 text-brand" /> GitHub</a></li>
                <li><a className="inline-flex items-center gap-2 hover:text-brand" href={site.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 text-brand" /> LinkedIn</a></li>
                <li><a className="inline-flex items-center gap-2 hover:text-brand" href={site.socials.facebook} target="_blank" rel="noreferrer"><Facebook className="h-4 w-4 text-brand" /> Facebook</a></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-foreground p-6 text-background">
              <CalendarClock className="h-5 w-5" />
              <h3 className="mt-3 font-semibold">Prefer to talk?</h3>
              <p className="mt-1 text-sm text-background/70">Share a few details and we will propose next steps, timeline, and scope.</p>
              <Button asChild className="mt-4 bg-background text-foreground hover:bg-background/90">
                <a href={`mailto:${site.email}`}>Email Us</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">We use form data only to respond to your inquiry. No third-party tracking on this form.</p>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
