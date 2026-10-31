import type { Img, Slug } from "./types";

/** Homepage copy and curation. Headings use *word* for the italic emphasis. */
export const home = {
  hero: {
    eyebrow: "Tailor-made Indonesia · Since 2011",
    heading: "Seventeen thousand islands. *One* considered journey.",
    intro:
      "We design private, tailor-made trips across Indonesia, from Bali's rice-terraced uplands to the reefs of Raja Ampat. One dedicated travel specialist plans every detail with you, then stays in touch until you're home.",
    image: {
      src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=80",
      alt: "Morning light over a Balinese temple gate with mountains behind",
    } satisfies Img,
    // Optional background video (muted, looping). Leave empty to use the image only.
    videoSrc: "",
  },
  valueProps: [
    { title: "One specialist", text: "The same person plans, books and looks after your whole trip." },
    { title: "15 years on the islands", text: "Founded in Bali in 2011, with offices in Bali and Jakarta." },
    { title: "320 partner stays & boats", text: "Villas, eco-lodges and phinisi we have stayed on ourselves." },
    { title: "Fair, transparent pricing", text: "Our rates match booking direct. The planning costs you nothing." },
    { title: "24/7 support", text: "A real person on the ground, any hour, from arrival to departure." },
    { title: "40+ islands covered", text: "From Sumatra in the west to Papua in the east." },
  ],
  destinations: {
    heading: "Where to *go*.",
    intro: "Four places our guests return to, and a good place to start.",
    slugs: ["bali", "komodo", "raja-ampat", "yogyakarta"] as Slug[],
  },
  experiences: {
    heading: "By the kind of *trip*.",
    intro: "Start with what you want to feel, and we'll find the islands to match.",
    slugs: [
      "diving-snorkeling",
      "phinisi-cruises",
      "honeymoons",
      "family-trips",
      "volcano-treks",
      "orangutan-trekking",
    ] as Slug[],
  },
  journeys: {
    heading: "Our most considered *journeys*.",
    intro: "Sample routes, each a starting point. Every trip is rebuilt around your dates, pace and budget.",
  },
  stays: {
    heading: "A curated collection of Indonesia's *finest*.",
    intro: "Clifftop villas, reef-side lodges and hand-built phinisi. Every one inspected by our team.",
  },
  why: {
    heading: "Why The Island *Edit*",
    paragraphs: [
      "We started The Island Edit after years of guiding in Bali and Flores, frustrated by trips that rushed people between photo stops. Our idea was simple: fewer places, better chosen, with someone who knows the islands planning every connection.",
      "Today our specialists are based in Bali and Jakarta. They have sailed the routes, slept in the villas and walked the trails they recommend. We book at the same rates you would find direct, so the planning, the local knowledge and the 24/7 support come at no extra cost.",
    ],
  },
  brochure: {
    title: "The Indonesia Edit",
    subtitle: "Our free 48-page guide to the archipelago",
    text: "Seasons island by island, sample routes, the stays we love and practical notes on getting around. Sent to your inbox as a PDF.",
    cover: {
      src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=80",
      alt: "Brochure cover showing Balinese rice terraces",
    } satisfies Img,
  },
  finalCta: {
    heading: "Plan a trip, the *unhurried* way.",
    text: "Tell us a little about how you like to travel. Your specialist will reply with ideas, usually within the hour.",
  },
};
