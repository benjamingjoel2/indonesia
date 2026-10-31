import Link from "@/components/i18n/Link";
import { site } from "@/data/site";

/** Placeholder wordmark — swap for the real logo SVG. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-jungle-900" : "text-sand-50";
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${color}`} aria-label={`${site.name} — home`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 20c3.5-1.6 7-1.6 11 0s7.5 1.6 11 0" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 17l5-7 3 4 2-2.5 4 5.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-[1.2rem] leading-none tracking-[-0.01em]">
        The Island <em className="font-light italic">Edit</em>
      </span>
    </Link>
  );
}
