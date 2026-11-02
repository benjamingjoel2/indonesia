import Image from "next/image";
import type { ReactNode } from "react";
import type { Img } from "@/data/types";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/Heading";

/**
 * Hero for destination, experience, trip and stay pages: title on cream,
 * then a full-width photo with torn edges rising up behind the text panel.
 */
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
    <section className="relative isolate overflow-hidden bg-paper text-ink">
      <div className="container-edit pt-6">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="edge-torn-br relative z-10 mt-8 inline-block max-w-3xl bg-paper pb-10 pr-8 md:mt-12 md:pb-14 md:pr-16">
          {eyebrow && <p className="eyebrow text-clay-500">{eyebrow}</p>}
          <Heading as="h1" size="2xl" className="mt-4">
            {title}
          </Heading>
          {tagline && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{tagline}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
      <div className="edge-torn-y relative -z-10 -mt-16 h-[22rem] w-full md:-mt-28 md:h-[34rem]">
        <Image src={image.src} alt={image.alt} fill priority quality={55} sizes="100vw" className="object-cover" />
      </div>
    </section>
  );
}

/** Simple text hero for content pages (about, FAQ, contact…). */
export function TextHero({ eyebrow, title, intro, crumbs }: { eyebrow?: string; title: string; intro?: string; crumbs?: Crumb[] }) {
  return (
    <section className="bg-paper">
      <div className="container-edit pb-12 pt-6 md:pb-20">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="mt-12 max-w-3xl md:mt-16">
          {eyebrow && <p className="eyebrow text-clay-500">{eyebrow}</p>}
          <Heading as="h1" size="2xl" className="mt-4">
            {title}
          </Heading>
          {intro && <p className="mt-6 text-lg leading-relaxed text-ink-soft md:text-xl">{intro}</p>}
        </div>
      </div>
    </section>
  );
}
