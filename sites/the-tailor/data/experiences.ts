import type { Experience, Img } from "./types";

const img = (id: string, alt: string, photographer: string): Img => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`,
  alt,
  credit: `Photo: ${photographer} / Unsplash`,
});

export const experiences: Experience[] = [
  {
    slug: "best-of-australia",
    name: "Best of Australia",
    hook: "The harbour, the Rock and the reef, joined up without the rush",
    intro:
      "A first journey to Australia usually means the three places everyone pictures: Sydney Harbour, Uluru and the Great Barrier Reef. We link them with sensible flight times, unhurried stays of three nights where it matters, and private guides who know when to talk and when to let the landscape do the work.",
    tripCount: 24,
    heroImage: img(
      "1590716209211-ea74d5f63573",
      "The Sydney Opera House and city skyline at golden hour",
      "Nico Smit",
    ),
    destinations: ["sydney", "uluru", "great-barrier-reef", "kangaroo-island"],
    highlights: [
      "Private harbour time in Sydney before the crowds",
      "Three nights facing Uluru and Kata Tjuta",
      "Reef days on a charter rather than a crowded pontoon",
      "Domestic flights routed to avoid needless backtracking",
    ],
    faqs: [
      {
        q: "How long do we need for a first trip?",
        a: "Twelve to fourteen nights lets you see Sydney, the Red Centre and the reef properly. Ten nights works if you are happy with one fewer region; anything shorter tends to feel like a series of airports.",
      },
      {
        q: "Which order should we travel in?",
        a: "It depends on your arrival city and the season. Ayers Rock Airport has direct flights from Sydney and Cairns, so we often run Sydney, Uluru, then the reef, finishing somewhere you can simply rest.",
      },
      {
        q: "Is it all too much flying?",
        a: "Australia is large, so some flying is unavoidable. We keep it to one flight on travel days, schedule late-morning departures where possible and use private transfers at each end.",
      },
    ],
    seo: {
      title: "Best of Australia: Sydney, Uluru and the Reef",
      description:
        "Private journeys linking Sydney Harbour, Uluru and the Great Barrier Reef, with considered flight routing, three-night stays and guides who know each place well.",
    },
  },
  {
    slug: "enriching-encounters",
    name: "Enriching Encounters",
    hook: "Time with the people who know Country, kitchens and coastlines best",
    intro:
      "Some of the most memorable hours in Australia are spent listening. These journeys are built around Aboriginal-guided walks, conversations with winemakers, scientists and rangers, and small-group access that is arranged in advance rather than improvised on the day.",
    tripCount: 14,
    heroImage: img(
      "1548296404-93c7694b2f91",
      "Uluru glowing in the low sun above a vast desert landscape",
      "Ondrej Machart",
    ),
    destinations: ["uluru", "northern-territory", "kimberley", "sydney"],
    highlights: [
      "Aboriginal-guided walks at Uluru and in Arnhem Land",
      "Rock art sites visited with Traditional Owner permission",
      "Behind-the-scenes time with reef scientists and rangers",
      "Private tastings hosted by the people who make the wine",
    ],
    faqs: [
      {
        q: "Are the cultural experiences authentic?",
        a: "We work with Aboriginal-owned and Aboriginal-guided operators wherever possible, and we follow the protocols set by Traditional Owners, including where photography is and is not appropriate.",
      },
      {
        q: "Do we need permits for Arnhem Land?",
        a: "Yes. Entry to Arnhem Land requires a permit, which we arrange as part of your journey. Some sites are closed at certain times of year for cultural reasons, and we plan around those closures.",
      },
      {
        q: "Can children join these experiences?",
        a: "Most can, and many families find them the highlight of the trip. A few walks and tastings have minimum ages, which your Travel Designer will flag when shaping the itinerary.",
      },
    ],
    seo: {
      title: "Cultural and Expert-Led Journeys in Australia",
      description:
        "Australian journeys built around Aboriginal-guided walks, rock art, rangers, reef scientists and winemakers, with access arranged in advance and protocols respected.",
    },
  },
  {
    slug: "five-star-luxury",
    name: "Five-Star Luxury",
    hook: "Australia's finest lodges, linked by private transfers and quiet planning",
    intro:
      "Australia's best lodges are small, remote and often booked out a year ahead. We secure the right rooms at places such as Longitude 131, Southern Ocean Lodge and Lizard Island, then handle every connection between them so the only decisions left are about lunch.",
    tripCount: 22,
    heroImage: img(
      "1709333564389-5758e3a254f2",
      "A pair of red chairs beside a swimming pool",
      "simon reeve",
    ),
    destinations: ["uluru", "kangaroo-island", "great-barrier-reef", "tasmania", "western-australia"],
    highlights: [
      "Signature suites at Australia's most sought-after lodges",
      "Private air charters where scheduled flights fall short",
      "Meet-and-greet at every airport and lodge",
      "Inclusive stays with dining, drinks and guiding",
    ],
    faqs: [
      {
        q: "How far ahead should we book?",
        a: "For peak months, nine to twelve months is sensible, particularly for Longitude 131, Southern Ocean Lodge and Lizard Island, which each have a small number of suites.",
      },
      {
        q: "Are the lodges all-inclusive?",
        a: "Most of the lodges we use include meals, a curated drinks list and a programme of guided experiences. A few premium wines and private charters are extra, and we set those out clearly in your quote.",
      },
      {
        q: "Can you arrange private flights?",
        a: "Yes. Private aircraft can save a full day on routes such as Uluru to the Whitsundays or Ningaloo to the Kimberley, and allow access to strips that scheduled airlines do not serve.",
      },
    ],
    seo: {
      title: "Luxury Lodge Journeys Across Australia",
      description:
        "Private Australian journeys staying at Longitude 131, Southern Ocean Lodge, Lizard Island and Saffire Freycinet, with every flight and transfer arranged for you.",
    },
  },
  {
    slug: "wildlife-safaris",
    name: "Wildlife & safaris",
    hook: "Kangaroos at dusk, sea lions on the sand and whales offshore",
    intro:
      "Australia's wildlife is best seen with someone who knows where to look and when to wait. We pair lodges that sit within good habitat with naturalist guides, so a sighting of a koala, a wombat or a pod of dolphins arrives as part of the day rather than a box ticked.",
    tripCount: 18,
    heroImage: img(
      "1575699914911-0027c7b95fb6",
      "A kangaroo with a joey in its pouch standing on grass",
      "Ondrej Machart",
    ),
    destinations: ["kangaroo-island", "tasmania", "queensland", "western-australia", "northern-territory"],
    highlights: [
      "Australian sea lions on Kangaroo Island's south coast",
      "Wombats and wallabies at dusk in Tasmania",
      "Swimming with whale sharks or humpbacks off Ningaloo",
      "Cassowary country in the Daintree rainforest",
    ],
    faqs: [
      {
        q: "When is the best time for wildlife?",
        a: "Almost any month has something. Whale sharks gather at Ningaloo from about March to July, humpbacks pass the coast from June to November, and Kangaroo Island is rewarding all year.",
      },
      {
        q: "Will we see animals in the wild or in sanctuaries?",
        a: "Mostly in the wild, with expert guides. We occasionally include a well-run sanctuary for close views of shy species, and we only work with places whose animal welfare we have checked.",
      },
      {
        q: "Is this suitable for keen photographers?",
        a: "Very. Tell your Travel Designer about your kit and goals, and we can arrange private guiding with longer waits, early starts and vehicles set up for photography.",
      },
    ],
    seo: {
      title: "Wildlife Safaris in Australia with Expert Guides",
      description:
        "Private wildlife journeys to Kangaroo Island, Tasmania, Ningaloo and the Daintree, guided by naturalists and paired with lodges that sit within good habitat.",
    },
  },
  {
    slug: "reef-and-islands",
    name: "Reef & islands",
    hook: "Private island lodges on the reef, from Lizard Island to the Whitsundays",
    intro:
      "The Great Barrier Reef stretches over 2,300 kilometres, and where you stay shapes what you see. We choose between the remote northern reefs around Lizard Island and the sheltered Whitsundays, and add Ningaloo on the west coast for those who want reef from the beach.",
    tripCount: 20,
    heroImage: img(
      "1610056352054-a68fe4f998e1",
      "Aerial view of white sandbars and turquoise water at Whitehaven Beach",
      "Lochie Riordan",
    ),
    destinations: ["great-barrier-reef", "queensland", "western-australia", "fiji"],
    highlights: [
      "Lizard Island's 24 beaches and outer reef snorkelling",
      "A seaplane flight over Heart Reef and Whitehaven",
      "Snorkelling Ningaloo straight off the sand at Sal Salis",
      "Private boat days with a marine biologist on board",
    ],
    faqs: [
      {
        q: "When is the reef at its best?",
        a: "June to November usually brings the clearest water and most settled weather. Stinger suits are worn in the warmer months, roughly November to May, and are provided by the lodges.",
      },
      {
        q: "Do we need to be strong swimmers?",
        a: "No. Many snorkelling sites are calm and shallow, and guides can arrange flotation and gentle starts. Certified divers can also join dives on the outer reef.",
      },
      {
        q: "How do we reach Lizard Island?",
        a: "By light aircraft from Cairns, a flight of about an hour along the reef and the Cape York coast. We time it to connect with your arrival into Cairns.",
      },
    ],
    seo: {
      title: "Great Barrier Reef and Island Lodge Holidays",
      description:
        "Island journeys to Lizard Island, qualia on Hamilton Island and Ningaloo's Sal Salis, with private boat days, seaplane flights and expert-led snorkelling.",
    },
  },
  {
    slug: "outback-by-air",
    name: "Outback by air",
    hook: "Seeing the Kimberley and the Top End from a private aircraft",
    intro:
      "Much of northern Australia is only reachable by air, and some of it is best understood from above. Private light aircraft and helicopters take you over the Bungle Bungles and Mitchell Falls, then set down at remote stations and coastal camps that roads do not reach.",
    tripCount: 9,
    heroImage: img(
      "1688982925743-98732218a3a4",
      "A small plane flying low over the water",
      "K8",
    ),
    destinations: ["kimberley", "northern-territory", "western-australia", "uluru"],
    highlights: [
      "A scenic flight over the Bungle Bungle Range",
      "A helicopter landing at Mitchell Falls",
      "Seaplane access to the Kimberley coast",
      "A private pilot who stays with you for the journey",
    ],
    faqs: [
      {
        q: "When can we fly the Kimberley?",
        a: "The dry season, from about April to September, is when lodges are open and the weather is reliable. In the wet season many airstrips and roads close.",
      },
      {
        q: "Is there a luggage limit?",
        a: "Usually yes, often around 15 kilograms per person in soft bags. We arrange for larger luggage to be held or forwarded so you only carry what you need.",
      },
      {
        q: "Is it safe?",
        a: "We work only with established charter operators who hold the relevant aviation approvals and fly these routes regularly. Flights are timed for calm morning air wherever possible.",
      },
    ],
    seo: {
      title: "Private Air Journeys in the Kimberley and Top End",
      description:
        "Fly over the Bungle Bungles, land beside Mitchell Falls and reach remote Kimberley and Top End lodges by private aircraft, helicopter and seaplane in the dry season.",
    },
  },
  {
    slug: "food-and-wine",
    name: "Food & wine",
    hook: "Barossa shiraz, Tasmanian oysters and long lunches with makers",
    intro:
      "Australia's wine regions are close enough to the cities to visit properly and quiet enough to feel personal. We arrange private cellar visits in the Barossa, oyster lunches on Tasmania's east coast and tables at kitchens that cook from what is close at hand.",
    tripCount: 12,
    heroImage: img(
      "1598306442928-4d90f32c6866",
      "Wine glasses, cheese and crackers on a wooden board in a vineyard",
      "Chelsea Pridham",
    ),
    destinations: ["south-australia", "tasmania", "kangaroo-island", "victoria", "new-south-wales"],
    highlights: [
      "Private tastings of old-vine Barossa shiraz",
      "Oysters eaten on the lease at Freycinet",
      "Kangaroo Island produce at Southern Ocean Lodge",
      "A driver, so no one draws the short straw",
    ],
    faqs: [
      {
        q: "Which wine regions do you recommend?",
        a: "The Barossa and McLaren Vale near Adelaide are the natural starting point. Tasmania suits lovers of cool-climate wines, and the Yarra Valley pairs well with time in Melbourne.",
      },
      {
        q: "Can you book restaurants that are hard to get into?",
        a: "We book well ahead and know many of the owners. We cannot promise every table, but we usually find a way, and we have strong alternatives ready.",
      },
      {
        q: "Can you cater for dietary needs?",
        a: "Yes. Tell us early and we pass the details to every lodge, restaurant and guide, so you do not need to explain yourself at each meal.",
      },
    ],
    seo: {
      title: "Food and Wine Journeys in Australia",
      description:
        "Private food and wine journeys through the Barossa, Kangaroo Island and Tasmania, with cellar-door tastings, oyster lunches, hard-to-book tables and a driver.",
    },
  },
  {
    slug: "family-journeys",
    name: "Family journeys",
    hook: "Rainforest, reef and wildlife paced for children and grandparents",
    intro:
      "Travelling with children in Australia works well when the days have shape and the transfers are short. We choose lodges that welcome families, guides who are good with young people, and a rhythm that leaves room for afternoons in the pool.",
    tripCount: 11,
    heroImage: img(
      "1579972383667-4894c883d674",
      "A koala resting in a tree",
      "Gary Runn",
    ),
    destinations: ["queensland", "great-barrier-reef", "kangaroo-island", "sydney"],
    highlights: [
      "Guided rainforest walks pitched at young legs",
      "Shallow-water snorkelling on calm reef sites",
      "Close encounters with koalas and kangaroos",
      "Connecting rooms or private villas for the whole family",
    ],
    faqs: [
      {
        q: "What age is best for an Australian family trip?",
        a: "From about six, children get a great deal from the wildlife and reef. Some lodges, including qualia and Lizard Island, have minimum ages, so we plan around them.",
      },
      {
        q: "How do you handle long flights with children?",
        a: "We build in a rest day after arrival and keep domestic travel to one short flight per transfer day, with private cars waiting at each end.",
      },
      {
        q: "Can grandparents come too?",
        a: "Often they do. We arrange accessible rooms, gentler guiding options and private vehicles, so everyone can join in at their own pace.",
      },
    ],
    seo: {
      title: "Family Holidays in Australia: Reef and Rainforest",
      description:
        "Family journeys to Queensland's rainforest and reef, Kangaroo Island and Sydney, with child-friendly guides, short transfers and lodges that welcome children.",
    },
  },
  {
    slug: "honeymoons",
    name: "Honeymoons & romance",
    hook: "Desert dinners, island suites and long days with no fixed plans",
    intro:
      "A honeymoon in Australia can move from the stillness of the desert to a private beach on the reef in a single day's travel. We keep the schedule light, choose suites with real privacy and arrange the occasional surprise, such as dinner under the stars at Uluru.",
    tripCount: 16,
    heroImage: img(
      "1497414826197-4166f61a8e14",
      "A couple holding hands on the shore at golden hour",
      "Nathan Dumlao",
    ),
    destinations: ["great-barrier-reef", "uluru", "tasmania", "fiji", "new-zealand"],
    highlights: [
      "A private beach picnic on Lizard Island",
      "Dinner beneath the desert sky near Uluru",
      "Suites with plunge pools at qualia and Saffire",
      "Optional extension to Fiji or New Zealand",
    ],
    faqs: [
      {
        q: "How long should a honeymoon be?",
        a: "Ten to fourteen nights gives time to unwind. We usually suggest two or three stays at most, ending with several nights in one place.",
      },
      {
        q: "Can we combine Australia with Fiji?",
        a: "Yes. Fiji is a direct flight of about four hours from Sydney or Brisbane, and it makes a quiet ending to an Australian journey.",
      },
      {
        q: "Do you arrange special touches?",
        a: "Quietly, yes. Tell your Travel Designer what matters to you and we will speak with each lodge ahead of time.",
      },
    ],
    seo: {
      title: "Honeymoons in Australia, Fiji and New Zealand",
      description:
        "Private honeymoons pairing Uluru, the Great Barrier Reef and Tasmania with suites built for privacy, unhurried days and an optional Fiji or New Zealand extension.",
    },
  },
  {
    slug: "fishing-expeditions",
    name: "Fishing expeditions",
    hook: "Barramundi, black marlin and flats fishing with expert guides",
    intro:
      "Northern Australia offers some of the most varied sport fishing anywhere, from barramundi in Top End rivers to black marlin off the reef near Lizard Island. We pair experienced guides with comfortable lodges and plan around the seasons that matter for each species.",
    tripCount: 6,
    heroImage: img(
      "1734498566034-e41d117c4231",
      "A man sitting on a boat, fishing in the water",
      "Kaptured by Kasia",
    ),
    destinations: ["northern-territory", "great-barrier-reef", "kimberley", "western-australia"],
    highlights: [
      "Barramundi on the rivers of Arnhem Land",
      "Black marlin season on the outer reef",
      "Saltwater flats fishing on the Kimberley coast",
      "Catch-and-release practised throughout",
    ],
    faqs: [
      {
        q: "When is the best fishing season?",
        a: "Black marlin off the northern reef peak from about September to December. Top End barramundi fishing is strong after the wet season, roughly March to May, and again late in the dry.",
      },
      {
        q: "Do we need our own gear?",
        a: "No. Guides supply quality tackle, though serious anglers are welcome to bring favourite rods. We advise on airline and light aircraft limits.",
      },
      {
        q: "Can non-fishing partners come along?",
        a: "Certainly. The lodges we use offer walks, spa time and scenic flights, so everyone has a full day.",
      },
    ],
    seo: {
      title: "Fishing Expeditions in Northern Australia",
      description:
        "Guided fishing expeditions for barramundi in the Top End, black marlin on the Great Barrier Reef and Kimberley flats fishing, staying at comfortable remote lodges.",
    },
  },
];
