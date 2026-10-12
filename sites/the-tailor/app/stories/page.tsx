import { getPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { BlogCard } from "@/components/cards/BlogCard";
import { BrochureSignup } from "@/components/sections/BrochureSignup";
import { TextHero } from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Stories: Australia travel notes",
  description: "Seasonal advice, destination guides and honest planning notes from The Tailor's Travel Designers.",
  path: "/stories",
});

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <TextHero
        eyebrow="Journal"
        title="Notes from the *islands*."
        intro="Practical, opinionated guides written by the people who plan our trips."
        crumbs={[{ label: "Blog", href: "/stories" }]}
      />
      <section aria-label="Articles" className="container-edit py-16 md:py-24">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
      <BrochureSignup />
    </>
  );
}
