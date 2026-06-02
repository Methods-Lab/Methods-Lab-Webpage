import { createFileRoute } from "@tanstack/react-router";

// The real sitemap is shipped as a static file at /public/sitemap.xml, which
// Vercel serves directly (the filesystem handler in vercel.json runs before the
// SPA fallback). This route is intentionally a no-op so the generated router
// tree stays valid and never tries to render HTML at /sitemap.xml.
export const Route = createFileRoute("/sitemap.xml")({
  component: () => null,
});
