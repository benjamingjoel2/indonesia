import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPostMeta } from "@/data/types";
import { getLocale } from "@/lib/i18n/server";

const DIR = path.join(process.cwd(), "content", "blog");

interface Frontmatter {
  title: string;
  excerpt: string;
  date: string | Date;
  author: string;
  category: string;
  heroImageSrc: string;
  heroImageAlt: string;
  readingMinutes: number;
}

/** Articles live in content/blog/<slug>.mdx (English) and content/blog/<locale>/<slug>.mdx. */
function read(slug: string): { meta: BlogPostMeta; body: string } | null {
  const locale = getLocale();
  const localized = path.join(DIR, locale, `${slug}.mdx`);
  const file = locale !== "en" && fs.existsSync(localized) ? localized : path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const fm = data as Frontmatter;
  return {
    meta: {
      slug,
      title: fm.title,
      excerpt: fm.excerpt,
      date: fm.date instanceof Date ? fm.date.toISOString().slice(0, 10) : String(fm.date),
      author: fm.author,
      category: fm.category,
      heroImage: { src: fm.heroImageSrc, alt: fm.heroImageAlt },
      readingMinutes: Number(fm.readingMinutes) || 5,
    },
    body: content,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export function getPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map((s) => read(s)?.meta)
    .filter((m): m is BlogPostMeta => Boolean(m))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => read(slug);
