import Link from "next/link";
import { site } from "@/data/site";

/** Placeholder wordmark — swap for The Tailor's official logo SVG. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-jungle-900" : "text-sand-50";
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${color}`} aria-label={`${site.name} — home`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 10h14M16 10v13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 22c4-2.5 7-1 9 1s6 2.5 9 0" fill="none" stroke="currentColor" strokeWidth="1.1" strokeDasharray="2 2" />
      </svg>
      <span className="font-display text-[1.2rem] leading-none tracking-[-0.01em]">
        The <em className="font-light italic">Tailor</em>
      </span>
    </Link>
  );
}
