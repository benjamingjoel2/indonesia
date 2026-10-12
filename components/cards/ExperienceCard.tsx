import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/types";
import { destinationName } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

export function ExperienceCard({ e }: { e: Experience }) {
  const places = e.destinations.slice(0, 3).map(destinationName).join(", ");
  return (
    <Link
      href={`/experiences/${e.slug}`}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-sm bg-jungle-900 p-6 text-sand-50 md:aspect-[5/4]"
    >
      <Image
        src={e.heroImage.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover opacity-80 transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/90 via-jungle-950/35 to-transparent" />
      <div className="relative">
        <h3 className="font-display text-display-sm">{e.name}</h3>
        <p className="mt-1.5 text-sm text-sand-200">{places}</p>
        <p className="mt-4 flex items-center justify-between border-t border-sand-50/25 pt-3 text-sm">
          <span>{e.tripCount} trips</span>
          <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
