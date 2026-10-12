import Image from "next/image";
import type { ReactNode } from "react";
import type { Img } from "@/data/types";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/Heading";

/** Full-bleed image hero used by destination, experience, trip and stay pages. */
export function PageHero({
  image,
  eyebrow,
  title,
  tagline,
  crumbs,
  children,
}: {
  image: Img;
  eyebrow?: string;
  title: string;
  tagline?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-jungle-950 text-sand-50">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-jungle-950/90 via-jungle-950/45 to-jungle-950/20" />
      <div className="container-edit flex min-h-[32rem] flex-col justify-between gap-16 pb-12 pt-8 md:min-h-[38rem] md:pb-16">
        {crumbs ? <Breadcrumbs items={crumbs} tone="light" /> : <span />}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow text-sand-300">{eyebrow}</p>}
          <Heading as="h1" size="2xl" className="mt-4">
            {title}
          </Heading>
          {tagline && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand-100 md:text-xl">{tagline}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

/** Simple text hero for content pages (about, FAQ, contact…). */
export function TextHero({ eyebrow, title, intro, crumbs }: { eyebrow?: string; title: string; intro?: string; crumbs?: Crumb[] }) {
  return (
    <section className="border-b border-sand-300 bg-sand-100">
      <div className="container-edit pb-16 pt-8 md:pb-24">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="mt-14 max-w-3xl md:mt-20">
          {eyebrow && <p className="eyebrow text-lagoon-500">{eyebrow}</p>}
          <Heading as="h1" size="2xl" className="mt-4">
            {title}
          </Heading>
          {intro && <p className="mt-6 text-lg leading-relaxed text-ink-soft md:text-xl">{intro}</p>}
        </div>
      </div>
    </section>
  );
}
