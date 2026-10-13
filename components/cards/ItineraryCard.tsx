import Image from "next/image";
import Link from "next/link";
import type { Itinerary } from "@/data/types";
import { destinationLabel } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Price } from "@/components/ui/Price";

export function ItineraryCard({ it, headingLevel = "h3" }: { it: Itinerary; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-sand-300 bg-paper">
      <Link href={`/trips/${it.slug}`} className="relative block aspect-[3/2] overflow-hidden bg-sand-200" tabIndex={-1} aria-hidden="true">
        <Image
          src={it.heroImage.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
        />
        {it.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-paper px-2.5 py-1 text-xs font-medium text-jungle-900">
            {it.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-sm bg-sand-100 px-2 py-1 font-medium">{it.durationDays} days</span>
          <span className="rounded-sm bg-sand-100 px-2 py-1">Indonesia · {destinationLabel(it.destinations.slice(0, 2))}</span>
        </p>
        <H className="mt-4 font-display text-display-sm">
          <Link href={`/trips/${it.slug}`} className="after:absolute after:inset-0 hover:underline hover:decoration-1 hover:underline-offset-4 focus-visible:outline-none">
            {it.title}
          </Link>
        </H>
        <p className="mt-2 text-sm text-ink-soft">{it.inclusionLine}</p>
        <ul className="mt-4 space-y-1.5 text-[0.8125rem]">
          {it.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2">
              <Icon name="check" size={16} className="mt-1 shrink-0 text-lagoon-500" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <div className="border-t border-sand-300 pt-4">
            <p className="text-sm text-ink-soft">
              From <Price usd={it.priceFromUSD} className="font-display text-2xl text-ink" /> per person
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              ≈ <Price usd={it.priceFromUSD * 2} /> for two · international flights excluded
            </p>
            <p className="link-arrow mt-4 text-[0.8125rem]">
              View itinerary <Icon name="arrow" size={16} />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
