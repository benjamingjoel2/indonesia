import { t } from "@/lib/i18n/server";
import Image from "next/image";
import Link from "@/components/i18n/Link";
import type { Experience } from "@/data/types";
import { destinationName } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

export function ExperienceCard({ e }: { e: Experience }) {
  const places = e.destinations.slice(0, 3).map(destinationName).join(", ");
  return (
    <Link
      href={`/experiences/${e.slug}`}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-md bg-jungle-900 p-6 text-paper md:aspect-[5/4]"
    >
      <Image
        src={e.heroImage.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/90 via-jungle-950/30 to-transparent" />
      <div className="relative">
        <h3 className="font-display text-display-sm font-medium">{e.name}</h3>
        <p className="mt-1.5 text-sm text-sand-200">{places}</p>
        <p className="mt-4 flex items-center justify-between border-t border-paper/25 pt-3 text-sm font-semibold">
          <span>{t("{n} trips", { n: e.tripCount })}</span>
          <Icon name="arrowUpRight" size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </Link>
  );
}
