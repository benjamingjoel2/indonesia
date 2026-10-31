import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalPages } from "@/data/pages";
import { addressLines, site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { TextHero } from "@/components/sections/PageHero";
import { formatDate, t, tx } from "@/lib/i18n/server";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(legalPages).map((slug) => ({ slug }));

const fill = (s: string) =>
  s.replaceAll("{brand}", site.name).replaceAll("{email}", site.email).replaceAll("{address}", addressLines.join(", "));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = legalPages[slug];
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.intro.replaceAll("{brand}", site.name), path: `/legal/${slug}` });
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const en = legalPages[slug];
  if (!en) notFound();
  const p = { ...en, title: t(en.title), sections: tx(en.sections) };
  return (
    <>
      <TextHero title={p.title} crumbs={[{ label: p.title, href: `/legal/${slug}` }]} intro={`${fill(t(p.intro))} ${t("Last updated {date}.", { date: formatDate(p.updated) })}`} />
      <div className="prose-edit container-edit max-w-3xl py-16">
        {p.sections.map((sec) => (
          <section key={sec.heading}>
            <h2>{sec.heading}</h2>
            {sec.body.map((b) => (
              <p key={b.slice(0, 40)}>{fill(b)}</p>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
