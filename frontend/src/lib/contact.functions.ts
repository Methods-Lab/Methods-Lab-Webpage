export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  projectType?: string;
  message: string;
  website?: string;
};

const rawBase = import.meta.env.VITE_API_BASE_URL || "";
const apiBase = rawBase.replace(/\/+$/, "");

export async function submitContact({ data }: { data: ContactPayload }) {
  const res = await fetch(`${apiBase}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Could not send your message. Please email us directly.");
  }

  try {
    return await res.json();
  } catch {
    return { ok: true };
  }
}
