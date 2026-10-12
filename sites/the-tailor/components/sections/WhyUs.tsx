import { home } from "@/data/home";
import type { Testimonial } from "@/data/types";
import { ArrowLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { TestimonialQuote } from "@/components/cards/TestimonialQuote";

export function WhyUs({ testimonial }: { testimonial?: Testimonial }) {
  return (
    <section aria-labelledby="why-title" className="bg-sand-100 py-20 md:py-28">
      <div className="container-edit grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <Heading id="why-title" size="xl">
            {home.why.heading}
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            {home.why.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <ArrowLink href="/why-travel-with-us" className="mt-8">
            Why travel with us
          </ArrowLink>
        </div>
        {testimonial && <TestimonialQuote t={testimonial} large />}
      </div>
    </section>
  );
}
