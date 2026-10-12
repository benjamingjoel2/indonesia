import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalPages } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { TextHero } from "@/components/sections/PageHero";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(legalPages).map((slug) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = legalPages[slug];
  if (!p) return {};
  return { ...buildMetadata({ title: p.title, description: `${p.title} for The Tailor.`, path: `/legal/${slug}` }), robots: { index: false } };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const p = legalPages[slug];
  if (!p) notFound();
  return (
    <>
      <TextHero title={p.title} crumbs={[{ label: p.title, href: `/legal/${slug}` }]} intro={`Last updated ${p.updated}`} />
      <div className="prose-edit container-edit max-w-3xl py-16">
        {p.body.map((b) => (
          <p key={b.slice(0, 20)}>{b}</p>
        ))}
      </div>
    </>
  );
}
