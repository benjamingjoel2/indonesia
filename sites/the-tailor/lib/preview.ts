/**
 * Static preview mode (NEXT_PUBLIC_STATIC_PREVIEW=1, see scripts/build-preview.mjs).
 * The site is exported as static files with no server, so form submissions are
 * simulated and in-app navigation uses full page loads to the exported .html files.
 */
export const isStaticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1";

type PreviewWindow = Window & { __previewHref?: (href: string) => string };

/** Navigate to an internal path, using the exported file in static preview mode. */
export function navigate(href: string, push: (href: string) => void) {
  const w = typeof window !== "undefined" ? (window as PreviewWindow) : undefined;
  if (isStaticPreview && w?.__previewHref) w.location.assign(w.__previewHref(href));
  else push(href);
}

/** POST JSON to an API route; simulated in static preview mode. */
export async function postJson<T extends { ok: boolean }>(url: string, body: unknown): Promise<T> {
  if (isStaticPreview) {
    console.info(`[preview] ${url} would receive:`, body);
    await new Promise((r) => setTimeout(r, 500));
    return { ok: true, reference: `PREVIEW-${Date.now().toString(36).toUpperCase()}` } as unknown as T;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = (await res.json().catch(() => ({ ok: false }))) as T;
  if (!res.ok || !json.ok) throw new Error(`Request to ${url} failed`);
  return json;
}
