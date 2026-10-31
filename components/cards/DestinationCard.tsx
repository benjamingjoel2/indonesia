import { t } from "@/lib/i18n/server";
import Image from "next/image";
import Link from "@/components/i18n/Link";
import type { Destination } from "@/data/types";

export function DestinationCard({ d, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" }: { d: Destination; sizes?: string }) {
  return (
    <Link href={`/${d.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand-200">
        <Image
          src={d.heroImage.src}
          alt={d.heroImage.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
        />
      </div>
      <p className="eyebrow mt-5 text-lagoon-500">{d.region}</p>
      <h3 className="mt-2 font-display text-display-sm group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {d.name}
      </h3>
      <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">{d.hook}</p>
      <p className="mt-3 text-sm font-medium">{t("{n} hand-picked stays", { n: d.partnerStays })}</p>
    </Link>
  );
}
