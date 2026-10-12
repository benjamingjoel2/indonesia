import type { Metadata } from "next";
import { site } from "@/data/site";

/** Per-page metadata with canonical URL and Open Graph / Twitter cards. */
export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const images = image ? [{ url: image, width: 1600, height: 900 }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, type: "website", images },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined },
  };
}
