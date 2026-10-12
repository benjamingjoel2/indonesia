/** Copy for the static content pages. Headings use *word* for italic emphasis. */

export const howWeWork = [
  { title: "Tell us how you travel", text: "Share dates, a rough budget and what you love, through the planner, WhatsApp or a call." },
  { title: "Meet your specialist", text: "One person who knows the islands takes your trip from first idea to final transfer." },
  { title: "Shape the route together", text: "We send a draft itinerary with honest pricing, then refine it until it feels right." },
  { title: "Travel, supported", text: "Private drivers and guides meet you, and your specialist is on WhatsApp around the clock." },
];

export const whyReasons = [
  {
    title: "One specialist, start to finish",
    text: "You will never be passed between departments. The person who designs your trip is the person who answers when your ferry is delayed.",
  },
  {
    title: "We know the islands first-hand",
    text: "Our team has sailed the phinisi routes, walked the Ijen crater at 2am and slept in every villa we suggest. If we haven't inspected it, we don't sell it.",
  },
  {
    title: "Rates that match booking direct",
    text: "We work on commission from our partners, so the price you pay is the price you would find yourself. The planning and support cost nothing extra.",
  },
  {
    title: "Logistics that actually connect",
    text: "Indonesian travel is all about the joins: flights, fast boats, tides and ferry schedules. We plan around them so your days aren't spent waiting.",
  },
  {
    title: "Support on the ground, 24/7",
    text: "A local team in Bali and Jakarta, a WhatsApp line answered by people, and drivers and guides we have worked with for years.",
  },
  {
    title: "Travel that gives back",
    text: "We favour locally owned stays, pay guides fairly and contribute to reef and forest projects on every trip. See our sustainability notes.",
  },
];

export const story = {
  heading: "Our *story*",
  paragraphs: [
    "The Island Edit began in 2011 in a small office above a warung in Ubud. Our founders had spent years guiding in Bali, Flores and Raja Ampat, and kept meeting travellers who had seen a great deal but understood very little of the places they had passed through.",
    "We set out to do it differently: fewer stops, better chosen, with time to sit still. Every route is built by a specialist who has travelled it, and every stay is somewhere we would send our own families.",
    "Fifteen years on, we are a team of Indonesian and international specialists based in Bali and Jakarta. We still answer our own WhatsApp, and we still think the best moment of any trip is the one nobody planned for.",
  ],
};

export const sustainability = {
  intro:
    "Indonesia's reefs, forests and communities are the reason people come. We try to leave each of them a little better for every guest we send.",
  commitments: [
    { title: "Local first", text: "Around 80% of the stays we recommend are Indonesian-owned or locally managed, and we work with independent guides rather than large operators wherever we can." },
    { title: "Fair pay for guides and crews", text: "We pay above market day rates, settle invoices within 14 days and fund first-aid and language training for our regular guides." },
    { title: "Reefs and forests", text: "A contribution from every booking goes to coral restoration in Komodo and Raja Ampat and to orangutan habitat protection in North Sumatra. [Partner names placeholder]" },
    { title: "Less plastic", text: "Refillable bottles and water stations on every phinisi and in every private vehicle. We ask partners to remove single-use plastics from rooms." },
    { title: "Responsible wildlife", text: "No elephant rides, no captive dolphin swims, no feeding wild orangutans. We follow park guidelines in Komodo and Raja Ampat and choose operators who do too." },
    { title: "Carbon, honestly", text: "Long-haul flights are the largest part of any trip's footprint. We suggest longer stays, fewer internal flights and overland routes where they work well." },
  ],
};

export const privateTravel = {
  intro:
    "For those who want the islands entirely on their own terms: private phinisi charters, exclusive-use villas, remote island buy-outs and celebrations planned down to the last frangipani.",
  offers: [
    { title: "Private yacht charters", text: "Full-boat phinisi charters in Komodo, Raja Ampat and the Banda Sea, with your own crew, chef and dive team." },
    { title: "Exclusive-use villas", text: "Estates in Bali and Sumba with staff, chefs and drivers, ideal for multi-generation families and milestone birthdays." },
    { title: "Weddings & celebrations", text: "Vow renewals on a sandbank, a cliff-top anniversary dinner or a full wedding week, with trusted local planners." },
    { title: "Expedition-style journeys", text: "Seaplane and helicopter-assisted routes into Papua, Maluku and the Forgotten Islands, with expert naturalists." },
  ],
};

export const legalPages: Record<string, { title: string; updated: string; body: string[] }> = {
  terms: {
    title: "Terms of use",
    updated: "2026-10-01",
    body: [
      "[Placeholder] These terms govern your use of this website. Full booking terms and conditions are provided with every proposal and must be accepted before a booking is confirmed.",
      "Content on this site, including itineraries and prices, is for guidance only and may change. Prices are shown from a USD base; amounts in other currencies are indicative conversions.",
      "Replace this page with terms reviewed by your legal counsel before launch.",
    ],
  },
  privacy: {
    title: "Privacy policy",
    updated: "2026-10-01",
    body: [
      "[Placeholder] We collect the information you share with us through our forms, by email or on WhatsApp in order to plan and operate your trip.",
      "We never sell your data. We share only what is needed with the hotels, boats, guides and airlines that deliver your trip.",
      "You can ask to see, correct or delete your data at any time by emailing us. Replace this page with a policy reviewed by your legal counsel before launch.",
    ],
  },
  cookies: {
    title: "Cookie policy",
    updated: "2026-10-01",
    body: [
      "[Placeholder] This site uses your browser's local storage to remember your chosen currency and your progress in the trip planner. No advertising cookies are set.",
      "If analytics are added later, list them here with their purpose and retention period.",
    ],
  },
};
