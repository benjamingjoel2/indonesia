import { Eyebrow, Heading } from "@/components/ui/Heading";
import { LinkButton } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";

// Phase 1 placeholder — the full homepage arrives in phase 2.
export default function Home() {
  return (
    <section className="container-edit py-24 md:py-36">
      <Eyebrow>Tailor-made Indonesia · Since 2011</Eyebrow>
      <Heading as="h1" size="2xl" className="mt-5 max-w-4xl">
        {"Seventeen thousand islands, *one* considered journey."}
      </Heading>
      <p className="mt-6 max-w-xl text-lg text-ink-soft">
        Design tokens preview. Sample price: from <Price usd={2450} /> per person.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/plan-your-trip" arrow>Start planning</LinkButton>
        <LinkButton href="/why-travel-with-us" variant="secondary" arrow>How we work</LinkButton>
      </div>
    </section>
  );
}
