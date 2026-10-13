import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/data/types";

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function BlogCard({ p }: { p: BlogPostMeta }) {
  return (
    <Link href={`/blog/${p.slug}`} className="group block">
      <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-sand-200">
        <Image
          src={p.heroImage.src}
          alt={p.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <p className="eyebrow mt-5 text-lagoon-500">
        {p.category} · {p.readingMinutes} min read
      </p>
      <h2 className="mt-2 font-display text-display-sm group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {p.title}
      </h2>
      <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">{p.excerpt}</p>
      <p className="mt-3 text-sm text-ink-soft">{fmtDate(p.date)}</p>
    </Link>
  );
}
