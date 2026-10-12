/** Copy for the static content pages. Headings use *word* for italic emphasis. */

export const howWeWork = [
  { title: "Tell us how you travel", text: "Share your dates, interests and the pace you enjoy, through our enquiry form or a call." },
  { title: "Meet your Travel Designer", text: "One expert who knows Australia personally takes your journey from first idea to final transfer." },
  { title: "Shape the journey together", text: "We send a considered proposal, then refine it with you until every day feels right." },
  { title: "Travel, supported", text: "Private guides and pilots meet you along the way, and your Travel Designer is never far away." },
];

export const whyReasons = [
  {
    title: "One Travel Designer, start to finish",
    text: "The person who designs your journey is the person who looks after you while you travel. There are no hand-offs between departments.",
  },
  {
    title: "Excellence, personally checked",
    text: "We recommend lodges, guides and pilots our team knows first-hand, and we keep visiting them so our advice stays current.",
  },
  {
    title: "Authentic and flexible",
    text: "Itineraries are hand-crafted rather than packaged. If the weather turns or a new idea appeals, we adapt the plan with you.",
  },
  {
    title: "Privileged access",
    text: "Private touring, after-hours experiences and relationships with the country's finest lodges open doors that are hard to find alone.",
  },
  {
    title: "Distances, solved",
    text: "Australia is vast. We use private and scenic flights where they help, so more of your time is spent in remarkable places.",
  },
  {
    title: "A limited number of journeys",
    text: "We take on a set number of journeys each year, so every guest receives the time and attention a trip like this deserves.",
  },
];

export const story = {
  heading: "Our *story*",
  paragraphs: [
    "The Tailor was founded in Adelaide by Drew Kluska with a clear idea: travellers who come a long way to see Australia deserve more than a standard itinerary. They deserve someone who knows the country intimately and designs around them.",
    "Today our Travel Designers plan private journeys across every state and territory, as well as New Zealand and Fiji. We work closely with Australia's finest lodges, guides and pilots, and we keep our numbers deliberately small.",
    "Our sister businesses, Australia In Style, The Tailor Touring Co. and Ultimate Fishing Australia, share the same approach: personal service, local knowledge and journeys that go beyond expectation.",
  ],
};

export const sustainability = {
  intro:
    "Australia's landscapes, wildlife and living cultures are the reason people travel here. We aim to leave each a little better for every guest we host.",
  commitments: [
    { title: "First Nations experiences", text: "We prioritise Aboriginal-owned and Aboriginal-guided experiences, so cultural knowledge is shared on its owners' terms. [Partner names placeholder]" },
    { title: "Local operators", text: "We work with independent guides, family-owned lodges and regional businesses wherever we can, keeping more of your spend in local communities." },
    { title: "Conservation partners", text: "We favour lodges and operators that invest in habitat restoration, reef health and wildlife research. [Partner names placeholder]" },
    { title: "Responsible wildlife", text: "Wildlife encounters are in the wild, with expert guides who follow park and marine guidelines and never bait or handle animals." },
    { title: "Thoughtful flying", text: "Flights are the largest part of any journey's footprint. We design routes with fewer, longer stays and use charter flights where they replace several legs." },
    { title: "Less waste", text: "We ask partners to remove single-use plastics and provide refillable bottles on all private touring." },
  ],
};

export const privateTravel = {
  intro:
    "For journeys entirely on your own terms: private jet and helicopter charters, exclusive-use lodges, remote expeditions and celebrations planned to the last detail.",
  offers: [
    { title: "Private air charters", text: "Jet, turboprop and helicopter charters that link the Red Centre, the Reef, the Kimberley and beyond on your schedule." },
    { title: "Exclusive-use lodges", text: "Whole-property buy-outs for families, milestone birthdays and private gatherings in Australia's most remarkable settings." },
    { title: "Celebrations", text: "Vow renewals on a Reef sand cay, private dinners beneath the desert sky and weddings with trusted local planners." },
    { title: "Expedition journeys", text: "Remote coastlines, aerial safaris over Lake Eyre and expedition cruises along the Kimberley, with expert guides." },
  ],
};

export const legalPages: Record<string, { title: string; updated: string; body: string[] }> = {
  terms: {
    title: "Terms of use",
    updated: "2026-10-01",
    body: [
      "[Placeholder] These terms govern your use of this website. Full booking terms and conditions are provided with every proposal and must be accepted before a booking is confirmed.",
      "Content on this site, including itineraries and prices, is for guidance only and may change. Prices are shown in Australian dollars; amounts in other currencies are indicative conversions.",
      "Replace this page with terms reviewed by your legal counsel before launch.",
    ],
  },
  privacy: {
    title: "Privacy policy",
    updated: "2026-10-01",
    body: [
      "[Placeholder] We collect the information you share with us through our forms, by email or by phone in order to plan and operate your journey.",
      "We never sell your data. We share only what is needed with the lodges, guides, airlines and operators that deliver your journey.",
      "You can ask to see, correct or delete your data at any time by emailing us. Replace this page with a policy reviewed by your legal counsel before launch.",
    ],
  },
  cookies: {
    title: "Cookie policy",
    updated: "2026-10-01",
    body: [
      "[Placeholder] This site uses your browser's local storage to remember your chosen currency and your progress in the enquiry form. No advertising cookies are set.",
      "If analytics are added later, list them here with their purpose and retention period.",
    ],
  },
};
