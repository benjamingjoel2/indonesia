import Image from "next/image";
import Link from "next/link";
import type { Stay } from "@/data/types";
import { destinationName, stayTypeLabel } from "@/lib/data";
import { Price } from "@/components/ui/Price";

export function StayCard({ s, headingLevel = "h3" }: { s: Stay; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link href={`/accommodation/${s.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand-200">
        <Image
          src={s.heroImage.src}
          alt={s.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-paper/95 px-2.5 py-1 text-xs font-medium">
          {stayTypeLabel[s.type]}
        </span>
      </div>
      <p className="eyebrow mt-5 text-lagoon-500">
        {s.area} · {destinationName(s.destination)}
      </p>
      <H className="mt-2 font-display text-display-sm group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {s.name}
      </H>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{s.summary}</p>
      <p className="mt-3 text-sm">
        From <Price amount={s.priceFrom} className="font-medium" /> per person · night
      </p>
    </Link>
  );
}
