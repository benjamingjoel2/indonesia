import Link from "@/components/i18n/Link";
import { site } from "@/data/site";

/** Placeholder wordmark — swap for the real logo SVG. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-ink" : "text-paper";
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${color}`} aria-label={`${site.name} — home`}>
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="26" cy="14" r="3" fill="currentColor" opacity="0.85" />
        <path d="M5 26c4-2.5 8-2.5 13 0s9 2.5 13 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 30c4-2 8-2 13 0s9 2 13 0" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <path d="M10 23l6-9 4 5 2.5-3 5 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-[1.35rem] font-medium leading-none">
        The Island <em className="italic">Edit</em>
      </span>
    </Link>
  );
}
