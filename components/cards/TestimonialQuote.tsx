import type { Testimonial } from "@/data/types";
import { Icon } from "@/components/ui/Icon";

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });

export function TestimonialQuote({ t, large = false }: { t: Testimonial; large?: boolean }) {
  return (
    <figure className={`flex h-full flex-col ${large ? "" : "rounded-sm border border-sand-300 bg-paper p-7"}`}>
      <div className="flex items-center gap-3">
        <span className="flex text-clay-500" role="img" aria-label={`Rated ${t.rating} out of 5`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Icon key={i} name="star" size={large ? 18 : 15} />
          ))}
        </span>
        {t.placeholder && (
          <span className="rounded-sm border border-dashed border-sand-400 px-2 py-0.5 text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
            Sample review
          </span>
        )}
      </div>
      <blockquote className={`mt-5 font-display ${large ? "text-display-md font-light" : "text-xl"} leading-snug`}>
        <p>“{t.quote}”</p>
      </blockquote>
      <figcaption className="mt-auto pt-6 text-sm">
        <span className="font-medium">{t.name}</span>
        <span className="text-ink-soft">
          {" "}
          · {t.from} · {fmtDate(t.date)}
        </span>
        <a
          href={t.source.url}
          className="mt-1 block text-ink-soft underline underline-offset-4 hover:text-ink"
          target={t.source.url.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          Read on {t.source.label}
        </a>
      </figcaption>
    </figure>
  );
}
