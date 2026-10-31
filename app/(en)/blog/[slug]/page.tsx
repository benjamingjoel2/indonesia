import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { site } from "@/data/site";
import { getPost, getPostSlugs, getPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { BlogCard, fmtDate } from "@/components/cards/BlogCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/Heading";
import { JsonLd } from "@/components/ui/JsonLd";
import { getLocale, t } from "@/lib/i18n/server";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return buildMetadata({ title: post.meta.title, description: post.meta.excerpt, path: `/blog/${post.meta.slug}`, image: post.meta.heroImage.src });
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { meta, body } = post;
  const more = getPosts().filter((p) => p.slug !== meta.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.excerpt,
          image: meta.heroImage.src,
          datePublished: meta.date,
          inLanguage: getLocale(),
          author: { "@type": "Person", name: meta.author },
          publisher: { "@type": "Organization", name: site.name },
        }}
      />
      <article>
        <header className="container-edit max-w-4xl pt-8">
          <Breadcrumbs items={[{ label: t("Blog"), href: "/blog" }, { label: meta.title, href: `/blog/${meta.slug}` }]} />
          <p className="eyebrow mt-14 text-lagoon-500">
            {meta.category} · {t("{n} min read", { n: meta.readingMinutes })}
          </p>
          <Heading as="h1" size="xl" className="mt-4">
            {meta.title}
          </Heading>
          <p className="mt-5 text-lg text-ink-soft">{meta.excerpt}</p>
          <p className="mt-6 text-sm text-ink-soft">
            {t("By")}{" "}<span className="text-ink">{meta.author}</span> · {fmtDate(meta.date)}
          </p>
        </header>
        <div className="container-edit mt-10 max-w-6xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-sm bg-sand-200">
            <Image src={meta.heroImage.src} alt={meta.heroImage.alt} fill priority quality={50} sizes="(min-width: 1200px) 1150px, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="prose-edit container-edit max-w-3xl py-14 md:py-20">
          <MDXRemote source={body} />
        </div>
      </article>
      {more.length > 0 && (
        <section aria-labelledby="more-title" className="border-t border-sand-300 py-20">
          <div className="container-edit">
            <Heading id="more-title" size="lg" className="mb-10">
              {t("Keep *reading*")}
            </Heading>
            <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <BlogCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <FinalCta />
    </>
  );
}
