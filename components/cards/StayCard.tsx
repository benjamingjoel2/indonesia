import Image from "next/image";
import Link from "@/components/i18n/Link";
import type { Stay } from "@/data/types";
import { destinationName, stayTypeLabel } from "@/lib/data";
import { Price } from "@/components/ui/Price";
import { t } from "@/lib/i18n/server";

export function StayCard({ s, headingLevel = "h3" }: { s: Stay; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link href={`/stays/${s.slug}`} className="group block">
      <div className="edge-soft relative aspect-[4/3] overflow-hidden bg-sand-200">
        <Image
          src={s.heroImage.src}
          alt={s.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
        />
        <span className="pill absolute left-4 top-4 border-transparent bg-paper/95 text-ink">{t(stayTypeLabel[s.type])}</span>
      </div>
      <p className="eyebrow mt-5 text-clay-500">
        {s.area} · {destinationName(s.destination)}
      </p>
      <H className="mt-2 font-display text-display-sm font-medium group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {s.name}
      </H>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{s.summary}</p>
      <p className="mt-3 text-sm">
        {t("From")} <Price usd={s.priceFromUSD} className="text-lg font-bold" /> <span className="text-ink-soft">/ {t("per person · night")}</span>
      </p>
    </Link>
  );
}
