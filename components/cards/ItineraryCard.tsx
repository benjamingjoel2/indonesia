import Image from "next/image";
import Link from "@/components/i18n/Link";
import type { Itinerary } from "@/data/types";
import { destinationLabel, tierLabel } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Price } from "@/components/ui/Price";
import { buttonClass } from "@/components/ui/Button";
import { t } from "@/lib/i18n/server";

/** Cream trip card with a torn-edge photo, category pills and a pill button. */
export function ItineraryCard({ it, headingLevel = "h3" }: { it: Itinerary; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex h-full flex-col rounded-sm border border-sand-300 bg-paper p-5 text-ink md:p-6">
      <Link href={`/trips/${it.slug}`} className="edge-torn relative block aspect-[4/3] overflow-hidden bg-sand-200" tabIndex={-1} aria-hidden="true">
        <Image
          src={it.heroImage.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
        />
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="pill border-lagoon-500 text-lagoon-500">{t("{n} days", { n: it.durationDays })}</span>
        <span className="pill border-clay-500 text-clay-500">{destinationLabel(it.destinations.slice(0, 2))}</span>
        {it.badge && <span className="pill border-ink-soft text-ink-soft">{t(it.badge)}</span>}
      </div>

      <H className="mt-4 font-display text-display-sm font-medium">
        <Link href={`/trips/${it.slug}`} className="after:absolute after:inset-0 hover:underline hover:decoration-1 hover:underline-offset-4 focus-visible:outline-none">
          {it.title}
        </Link>
      </H>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{it.summary}</p>

      <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div className="flex gap-2">
          <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-ink-soft" />
          <div>
            <dt className="font-semibold">{t("Duration")}</dt>
            <dd className="text-ink-soft">{t("{n} days · {m} nights", { n: it.durationDays, m: it.nights })}</dd>
          </div>
        </div>
        <div className="flex gap-2">
          <Icon name="tag" size={18} className="mt-0.5 shrink-0 text-ink-soft" />
          <div>
            <dt className="font-semibold">{t("Style")}</dt>
            <dd className="text-ink-soft">{t(tierLabel[it.budgetTier])}</dd>
          </div>
        </div>
      </dl>
      <p className="mt-3 text-sm text-ink-soft">{it.inclusionLine}</p>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
        <div>
          <p className="text-sm text-ink-soft">{t("From")}</p>
          <p className="leading-none">
            <Price usd={it.priceFromUSD} className="text-3xl font-bold" />{" "}
            <span className="text-sm text-ink-soft">/ {t("per person")}</span>
          </p>
        </div>
        <span className={buttonClass("primary", "!min-h-11 !px-5 text-sm")}>
          {t("View itinerary")} <Icon name="arrowUpRight" size={15} strokeWidth={2} />
        </span>
      </div>
    </article>
  );
}
