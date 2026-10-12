import { site } from "@/data/site";
import { getTestimonials } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { TestimonialQuote } from "@/components/cards/TestimonialQuote";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextHero } from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Guest testimonials",
  description: "What travellers say after their tailor-made Indonesia trips with The Island Edit: Bali, Komodo, Raja Ampat, Java and beyond.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <TextHero
        eyebrow="Testimonials"
        title="In our guests' *words*."
        intro={`Rated ${site.rating.score} out of 5 from ${site.rating.count.toLocaleString("en-US")} reviews on ${site.rating.source}. The reviews below are placeholders until real ones are imported.`}
        crumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />
      <section aria-label="Reviews" className="container-edit py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {getTestimonials().map((t) => (
            <TestimonialQuote key={t.id} t={t} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
