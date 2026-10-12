import type { Img, Slug } from "./types";
import { destinations } from "./destinations";

const imageOf = (slug: Slug): Img => {
  const d = destinations.find((x) => x.slug === slug);
  if (!d) throw new Error(`home.ts: unknown destination "${slug}"`);
  return d.heroImage;
};

/** Homepage copy and curation. Headings use *word* for the italic emphasis. */
export const home = {
  hero: {
    eyebrow: "Private luxury journeys · Australia, New Zealand & Fiji",
    heading: "Australia, beyond *expectation*.",
    intro:
      "We design private, tailor-made journeys across Australia, from the red heart of the Centre to the outer Reef. One dedicated Travel Designer shapes every detail with you and stays close throughout your trip.",
    image: imageOf("uluru"),
    // Optional background video (muted, looping). Leave empty to use the image only.
    videoSrc: "",
  },
  valueProps: [
    { title: "One Travel Designer", text: "A single expert plans your journey and supports you while you travel." },
    { title: "Hand-crafted itineraries", text: "Every journey is built from scratch around your pace and interests." },
    { title: "Privileged access", text: "Private guides, after-hours experiences and the country's finest lodges." },
    { title: "Limited each year", text: "We take on a set number of journeys so each gets our full attention." },
    { title: "Seamless logistics", text: "Private air charters, transfers and touring, all timed to connect." },
    { title: "Australia, NZ & Fiji", text: "Every state and territory, plus New Zealand and the Fijian islands." },
  ],
  destinations: {
    heading: "Where to *go*.",
    intro: "Four places that define a first journey to Australia, and every return.",
    slugs: ["uluru", "great-barrier-reef", "kangaroo-island", "kimberley"] as Slug[],
  },
  experiences: {
    heading: "By the kind of *journey*.",
    intro: "Start with what you want to feel. We'll find the places, the season and the lodges to match.",
    slugs: [
      "best-of-australia",
      "enriching-encounters",
      "five-star-luxury",
      "wildlife-safaris",
      "reef-and-islands",
      "outback-by-air",
    ] as Slug[],
  },
  journeys: {
    heading: "Our most considered *journeys*.",
    intro: "Sample routes to start the conversation. Every journey is redesigned around your dates, pace and interests.",
  },
  stays: {
    heading: "Australia's finest places to *stay*.",
    intro: "Clifftop lodges, private islands and safari camps beneath desert skies, each known personally by our team.",
  },
  why: {
    heading: "Why The *Tailor*",
    paragraphs: [
      "The Tailor began with a simple belief: the best of Australia is rarely found on a standard itinerary. It is in the guide who knows where the rock-wallabies come out at dusk, the lodge that holds a table on the dunes, the pilot who takes the long way over the Bungle Bungles.",
      "Each journey is designed by one Travel Designer who knows these places personally and stays with you from first idea to final transfer. We take on a limited number of journeys each year, so every one receives the time and care it deserves.",
    ],
  },
  brochure: {
    title: "The Australia Collection",
    subtitle: "Our free guide to luxury travel in Australia",
    text: "Seasons state by state, sample journeys, the lodges we love and practical notes on travelling the country in style. Sent to your inbox as a PDF.",
    cover: imageOf("kangaroo-island"),
  },
  finalCta: {
    heading: "Your journey, *designed* around you.",
    text: "Tell us a little about how you like to travel. A Travel Designer will reply with ideas within one business day.",
  },
};
