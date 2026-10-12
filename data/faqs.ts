import type { FaqGroup } from "./types";

/**
 * General FAQs, grouped for the FAQ page. Visa and entry rules change, so
 * check these answers against official sources before launch and at least yearly.
 */
export const faqGroups: FaqGroup[] = [
  {
    title: "Planning & booking",
    items: [
      {
        q: "How does planning a tailor-made trip work?",
        a: "You tell us when you would like to travel, who is coming and what matters to you, and one travel specialist drafts a first itinerary with prices, usually within two working days. We then refine it together by email, call or WhatsApp until it feels right. Nothing is booked until you are happy with every detail.",
      },
      {
        q: "When is the best time to visit Indonesia?",
        a: "For Bali, Lombok, Komodo and Java, the dry season from April to October is the most reliable, with July and August the busiest months. Raja Ampat works the other way round, with its calmest seas from October to April. The rainy months still bring plenty of sunshine, usually with heavy afternoon showers, and quieter, better-value hotels.",
      },
      {
        q: "How far ahead should we book?",
        a: "Four to six months ahead is comfortable for most trips, and nine to twelve months is wise for July, August, Christmas and New Year, or for private phinisi charters, which have limited dates. We can often arrange shorter-notice trips too, though the choice of boats and smaller hotels narrows quickly.",
      },
      {
        q: "Can you combine Indonesia with other countries?",
        a: "We focus on Indonesia only, which is how we know it well. We are happy to fit your trip around flights to or from Singapore, Kuala Lumpur or Australia, and to recommend trusted partners for other countries.",
      },
    ],
  },
  {
    title: "On the ground",
    items: [
      {
        q: "Do we need a visa for Indonesia?",
        a: "Many nationalities, including UK, US, Australian, EU and Singaporean passport holders, can enter on a visa on arrival or apply in advance online for an e-VoA, valid for 30 days and extendable once. Your passport needs at least six months' validity on arrival, and Bali also charges a separate tourist levy. Rules do change, so we confirm the current requirements for your nationality when you book.",
      },
      {
        q: "Who will look after us during the trip?",
        a: "You will have private drivers and, where it adds something, licensed local guides throughout, rather than shared tours. Your specialist and our Bali-based team are on WhatsApp 24/7 while you travel, so a delayed flight or a change of plan is handled in minutes rather than hours.",
      },
      {
        q: "How do we get between the islands?",
        a: "Most longer hops are short domestic flights, for example Bali to Labuan Bajo for Komodo or to Sorong for Raja Ampat. For the Gili islands and Lombok we use the more established fast boat operators, and private boats where it makes sense. Sea crossings can be cancelled in rough weather, so we always build a little slack into the plan around them.",
      },
    ],
  },
  {
    title: "Money & safety",
    items: [
      {
        q: "How and when do we pay?",
        a: "A 30% deposit confirms your trip and secures the hotels, boats and flights. The balance is due 60 days before you travel, or at the time of booking if you are travelling sooner. You can pay by bank transfer or card, and every payment is confirmed in writing.",
      },
      {
        q: "Do we need travel insurance?",
        a: "Yes, comprehensive travel insurance is a condition of booking. It should cover medical treatment and evacuation, cancellation and, if you plan to dive, scuba diving to the depths you will reach. We recommend taking it out as soon as you pay your deposit.",
      },
      {
        q: "Is Indonesia safe to travel in?",
        a: "The places we plan trips to are generally very safe for visitors, and Indonesians are known for their hospitality. The usual sense applies with valuables in busy areas, and the most common issues are sunburn, stomach upsets and traffic. We follow official travel advice closely and will contact you if anything affects your plans.",
      },
      {
        q: "What currency should we bring?",
        a: "The currency is the Indonesian rupiah. Cards are widely accepted in hotels and restaurants in Bali and the main towns, and ATMs are easy to find, but carry some cash for markets, small warungs and tips, especially in Komodo, Sumba and Raja Ampat.",
      },
    ],
  },
];

export const homeFaqs = faqGroups.flatMap((g) => g.items).slice(0, 6);
