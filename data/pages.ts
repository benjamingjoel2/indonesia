/** Copy for the static content pages. Headings use *word* for italic emphasis. */

export const howWeWork = [
  { title: "Tell us how you travel", text: "Share dates, a rough budget and what you love, through the planner or by email." },
  { title: "Meet your specialist", text: "One person who knows the islands takes your trip from first idea to final transfer." },
  { title: "Shape the route together", text: "We send a draft itinerary with honest pricing, then refine it until it feels right." },
  { title: "Travel, supported", text: "Private drivers and guides meet you, and your specialist is on hand around the clock." },
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
    text: "A local team in Bali and Jakarta, messages answered by people, and drivers and guides we have worked with for years.",
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
    "Fifteen years on, we are a team of Indonesian and international specialists based in Bali and Jakarta. We still answer our own messages, and we still think the best moment of any trip is the one nobody planned for.",
  ],
};

export const sustainability = {
  intro:
    "Indonesia's reefs, forests and communities are the reason people come. We try to leave each of them a little better for every guest we send.",
  commitments: [
    { title: "Local first", text: "Around 80% of the stays we recommend are Indonesian-owned or locally managed, and we work with independent guides rather than large operators wherever we can." },
    { title: "Fair pay for guides and crews", text: "We pay above market day rates, settle invoices within 14 days and fund first-aid and language training for our regular guides." },
    { title: "Reefs and forests", text: "A contribution from every booking goes to coral restoration in Komodo and Raja Ampat and to orangutan habitat protection in North Sumatra." },
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

export type LegalSection = { heading: string; body: string[] };
export type LegalPage = { title: string; updated: string; intro: string; sections: LegalSection[] };

/**
 * Privacy Policy, Booking Terms and Cookie Policy. {brand}, {email} and {address} are filled in
 * when the page renders (see app/legal/[slug]/page.tsx).
 */
export const legalPages: Record<string, LegalPage> = {
  privacy: {
    title: "Privacy policy",
    updated: "2026-10-31",
    intro: "How {brand} collects, uses and protects the personal information you share with us.",
    sections: [
      {
        heading: "Who we are",
        body: [
          "{brand} plans private, tailor-made journeys in Indonesia. We are responsible for the personal information described in this policy. You can reach us at {email} or by post at {address}.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "When you use our trip planner, enquiry form or brochure request, or write to us, we collect the details you choose to give: your name, email address, phone number if you add one, travel dates, who is travelling, your interests and budget range, and anything you write in your message.",
          "If you go on to book, we also collect what is needed to arrange the trip, such as passport details, dates of birth, dietary needs, health or mobility information you choose to share, and emergency contacts.",
          "We do not collect payment card details through this website.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "To reply to your enquiry, prepare and adjust your itinerary and quote, make and manage your bookings, look after you while you travel, and send the brochure or information you asked for.",
          "We rely on taking steps at your request before a contract, on performing our contract with you, on our legitimate interest in running and improving our service, and, where the law requires it, on your consent. Information about health is only used with your explicit consent and only to arrange your trip safely.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We share only what each supplier needs to deliver your trip: hotels and villas, boat operators, drivers, local guides, airlines and transfer companies. Some are in Indonesia and other countries outside your own; we share only what is necessary for your trip and expect them to protect it.",
          "We also use service providers who host this website and our email. We never sell your personal information, and we do not share it for advertising.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Enquiries that do not lead to a booking are deleted within two years of our last contact. Booking records are kept for as long as tax and accounting rules require, and then deleted.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask to see the information we hold about you, have it corrected or deleted, restrict or object to how we use it, or receive a copy in a portable format. Where we rely on your consent, you can withdraw it at any time.",
          "Write to {email} and we will reply within one month. You can also complain to the data protection authority where you live.",
        ],
      },
      {
        heading: "Security",
        body: [
          "This website is served over an encrypted connection, and access to your information is limited to the people planning your trip.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: ["If we change this policy, we will update the date at the top of this page."],
      },
    ],
  },
  "booking-terms": {
    title: "Booking terms",
    updated: "2026-10-31",
    intro: "The terms that apply when you plan and book a tailor-made journey with {brand}.",
    sections: [
      {
        heading: "About these terms",
        body: [
          "These terms apply to every journey arranged by {brand} ({email}, {address}). They sit alongside the written proposal and confirmation we send you. Where the two differ, your confirmation takes priority.",
        ],
      },
      {
        heading: "Enquiries and proposals",
        body: [
          "Planning with us is free. When you enquire, we prepare a proposal with an itinerary and a price. Prices on this website start from the figure shown and are a guide only; your proposal sets out the price for your dates, rooms and choices.",
          "A proposal is not a booking. Availability is only held once we confirm it in writing.",
        ],
      },
      {
        heading: "Confirming your booking",
        body: [
          "To book, you accept the proposal and pay the deposit it states. Your booking is confirmed when we send a written confirmation. The person who makes the booking accepts these terms for everyone travelling and must be at least 18.",
        ],
      },
      {
        heading: "Paying for your trip",
        body: [
          "The balance is due by the date stated on your confirmation. If it is not paid on time, we may treat the booking as cancelled by you and apply the cancellation charges below.",
          "Prices are quoted in US dollars. Amounts shown in other currencies on this website are indicative conversions only.",
        ],
      },
      {
        heading: "Changes you make",
        body: [
          "Tell us in writing if you would like to change your trip. We will do our best to help. Any extra costs charged by hotels, boats, airlines or other suppliers, and a reasonable fee for our time, are passed on to you.",
        ],
      },
      {
        heading: "If you cancel",
        body: [
          "You can cancel by writing to us. Cancellation charges increase as your departure date gets closer and reflect the costs we and our suppliers cannot recover; they are set out in your proposal and confirmation. Some elements, such as flights, boat charters and peak-season stays, may be non-refundable once booked, and we will tell you before you book.",
        ],
      },
      {
        heading: "If we change or cancel",
        body: [
          "We occasionally have to make changes. We will tell you as soon as possible and offer a comparable alternative. If a significant change is not acceptable to you, or if we have to cancel, you may choose a full refund of what you have paid us.",
          "We are not responsible for changes or cancellations caused by events beyond our control, such as extreme weather, volcanic activity, natural disasters, epidemics, strikes or government action. In those cases we will help you rearrange and pass on any refunds we receive from suppliers.",
        ],
      },
      {
        heading: "Travel insurance",
        body: [
          "Comprehensive travel insurance is a condition of booking. It should cover cancellation, medical treatment, evacuation and repatriation, and any activities you plan, such as diving, trekking or volcano hikes.",
        ],
      },
      {
        heading: "Passports, visas and health",
        body: [
          "You are responsible for holding a valid passport, any visa or entry permit, and meeting the health requirements for Indonesia and any country you pass through. We are happy to point you to official sources, but requirements change and the official sources always apply. Please take medical advice about vaccinations and medication well before you travel.",
        ],
      },
      {
        heading: "Our responsibility",
        body: [
          "We arrange your trip with care and choose our suppliers carefully. We are responsible for the services we agree to provide, as described in your confirmation, to the extent the law requires.",
          "We are not responsible for loss, damage or delay caused by you, by a third party unconnected with your trip, or by events beyond our control. Where our liability is not excluded or limited by law, it is limited to the price of the services concerned. Nothing in these terms limits liability that cannot be limited by law.",
        ],
      },
      {
        heading: "On your trip",
        body: [
          "Please follow local laws and customs, the safety instructions of crews, guides and rangers, and the rules of the places you visit. Suppliers may refuse service to anyone whose behaviour puts others at risk.",
        ],
      },
      {
        heading: "Complaints",
        body: [
          "If something is not right during your trip, tell your specialist straight away so it can be put right on the spot. If you are still unhappy, write to {email} within 28 days of your return and we will reply in writing.",
        ],
      },
      {
        heading: "Law",
        body: [
          "These terms are governed by the law that applies to your contract with us, and any dispute will be heard by the courts that have jurisdiction under that law. Your rights as a consumer in the country where you live are not affected.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    updated: "2026-10-31",
    intro: "What this website stores in your browser, and how to remove it.",
    sections: [
      {
        heading: "Cookies",
        body: [
          "This website does not set cookies. There are no analytics, advertising or social media trackers.",
        ],
      },
      {
        heading: "Local storage",
        body: [
          "We use your browser's local storage for two things, and only after you use the feature concerned:",
          "tie-currency: the currency you chose for prices. Kept until you clear it.",
          "tie-planner-v1: your progress in the trip planner, so you can pick up where you left off. Removed when you send your request, or when you clear it.",
          "These items stay on your device. They are never sent to us or anyone else.",
        ],
      },
      {
        heading: "Your choice",
        body: [
          "Because these items are only created when you use the currency switcher or the trip planner, using those features is your consent. You can withdraw it at any time by clearing this site's data in your browser settings; the site keeps working, it simply forgets your choices.",
        ],
      },
      {
        heading: "Questions",
        body: ["Write to {email}. If we add any cookies in future, we will list them here and ask for your consent first."],
      },
    ],
  },
};
