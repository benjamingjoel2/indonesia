import type { Img, Itinerary, SeasonalRate } from "./types";

const img = (id: string, alt: string, photographer: string): Img => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`,
  alt,
  credit: `Photo: ${photographer} / Unsplash`,
});

/** Four 2027 rate rows covering the full year. The lowest row equals priceFrom. */
const tropicalRates = (green: number, decPeak: number, dry: number, janPeak: number): SeasonalRate[] => [
  { label: "Peak (summer school holidays)", from: "2027-01-01", to: "2027-01-31", price: janPeak },
  { label: "Green season", from: "2027-02-01", to: "2027-03-31", price: green },
  { label: "Dry season", from: "2027-04-01", to: "2027-11-30", price: dry },
  { label: "Peak (Christmas & school holidays)", from: "2027-12-01", to: "2027-12-31", price: decPeak },
];

const southernRates = (base: number, shoulder: number, summer: number, peak: number): SeasonalRate[] => [
  { label: "Summer & early autumn", from: "2027-01-01", to: "2027-04-30", price: summer },
  { label: "Winter", from: "2027-05-01", to: "2027-08-31", price: base },
  { label: "Shoulder (spring)", from: "2027-09-01", to: "2027-11-30", price: shoulder },
  { label: "Peak (Christmas & school holidays)", from: "2027-12-01", to: "2027-12-31", price: peak },
];

const northernRates = (
  wet: number,
  earlyDry: number,
  dry: number,
  lateDry: number,
): SeasonalRate[] => [
  { label: "Wet season (on request, adapted route)", from: "2027-01-01", to: "2027-03-31", price: wet },
  { label: "Early dry season", from: "2027-04-01", to: "2027-05-31", price: earlyDry },
  { label: "Dry season", from: "2027-06-01", to: "2027-09-30", price: dry },
  { label: "Build-up & Christmas", from: "2027-10-01", to: "2027-12-31", price: lateDry },
];

export const itineraries: Itinerary[] = [
  /* 1 ------------------------------------------------------------------ */
  {
    slug: "red-centre-to-reef",
    title: "Red Centre to Reef",
    durationDays: 8,
    nights: 7,
    destinations: ["uluru", "great-barrier-reef", "queensland"],
    experiences: ["best-of-australia", "reef-and-islands"],
    budgetTier: "ultra",
    heroImage: img(
      "1529108190281-9a4f620bc2d8",
      "Uluru rising above the arid landscape under a blue sky with wispy clouds",
      "Photoholgic",
    ),
    gallery: [
      img("1557214997-7eae7e0e7aaa", "Uluru, also known as Ayers Rock, in central Australia", "Antoine Fabre"),
      img("1631006995557-9866a74ee05c", "Green rainforest covering a mountainside", "David Clode"),
      img("1546026423-cc4642628d2b", "Live corals on a reef", "qui nguyen"),
    ],
    summary:
      "Eight days that move from the ochre stillness of Uluru to the rainforest of the Daintree and the outer reef off Lizard Island. Direct flights from Ayers Rock to Cairns keep the travel simple, and each stay is long enough to settle in.",
    inclusionLine: "All meals · Private guiding · Light aircraft to Lizard Island",
    highlights: [
      "Three nights at Longitude 131 facing Uluru",
      "A direct flight from the desert to the tropics",
      "Rainforest walks with an Aboriginal guide in the Daintree",
      "Snorkelling the fringing reefs of Lizard Island",
    ],
    days: [
      {
        day: 1,
        title: "Arrive at Uluru",
        body:
          "Fly from Sydney to Ayers Rock Airport, a little over three hours, where a Longitude 131 guide meets you on the tarmac. Your tented pavilion looks straight across the dunes to Uluru, and the first evening is spent at the lodge's dune-top lounge as the colour drains from the rock. Dinner is served at Arnguli Grill or in your pavilion, depending on how much the journey has taken out of you.",
        stay: "longitude-131",
        meals: ["L", "D"],
        image: img("1602997907233-2cd71a73d6a8", "The silhouette of a rock formation beneath a starry night sky", "Steven Wei"),
      },
      {
        day: [2, 3],
        title: "Uluru and Kata Tjuta",
        body:
          "Two full days follow the light. Walk part of the Uluru base with a guide who explains the Anangu stories that are appropriate to share, and visit the Cultural Centre before the heat builds. Another morning takes you into Walpa Gorge at Kata Tjuta. Evenings bring Table 131°, a dinner under the desert sky, and long conversations about how a single rock can hold so much attention.",
        makeItYours: "Add a sunrise helicopter flight over Uluru and Kata Tjuta, or a dot-painting session with a local artist.",
        stay: "longitude-131",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Desert to rainforest",
        body:
          "A direct flight takes you from Ayers Rock to Cairns in about two and a half hours, crossing the country from red earth to green coast. A private driver follows the Captain Cook Highway north, with the Coral Sea on one side and rainforest ranges on the other, to Silky Oaks Lodge on the Mossman River. Your treehouse sits among the canopy, and the river is a short walk away for a late swim.",
        stay: "silky-oaks-lodge",
        meals: ["B", "D"],
      },
      {
        day: 5,
        title: "The Daintree with a local guide",
        body:
          "Begin at Mossman Gorge with a Kuku Yalanji guide, who explains how the rainforest has fed and housed people for tens of thousands of years. Later, cross the Daintree River by cable ferry to walk among fan palms and look for cassowaries near Cape Tribulation. The afternoon is yours, perhaps for a treatment at the lodge spa or a quiet hour on the river's edge with a book.",
        makeItYours: "Swap the afternoon for a private boat on the Daintree River to look for crocodiles and kingfishers.",
        stay: "silky-oaks-lodge",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Fly to Lizard Island",
        body:
          "A transfer back to Cairns connects with the light aircraft to Lizard Island, a flight of about an hour along the reef and the Cape York coast. The island has 24 beaches and a national park interior, and the resort holds only a few dozen suites. Lunch is served on the deck, and the afternoon might be spent snorkelling straight off the beach in front of your room.",
        stay: "lizard-island",
        meals: ["B", "L", "D"],
        image: img(
          "1580019542155-247062e19ce4",
          "A school of tropical fish swimming among colourful coral reefs in deep blue water",
          "Shifaz Abdul Hakkim",
        ),
      },
      {
        day: 7,
        title: "Reef and island",
        body:
          "Take a guided snorkelling trip to the Clam Gardens, where giant clams sit in clear, shallow water, or join a boat to the outer reef. Later, a dinghy and a picnic hamper let you claim a beach of your own for the afternoon. Climb Cook's Look before breakfast if you like an early start, for the same view Captain Cook used to plot a route through the reef in 1770.",
        makeItYours: "Certified divers can join a dive at Cod Hole on the Ribbon Reefs, a short boat run from the island.",
        stay: "lizard-island",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "Depart via Cairns",
        body:
          "A slow breakfast, a last swim and the light aircraft back to Cairns, timed to connect with your onward domestic or international flight. If you have a late departure, we can hold a day room in Cairns or arrange a private car to the Esplanade for lunch. Your Travel Designer will have your next steps confirmed well before you leave the island, including bag transfers and any overnight stay.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights at Longitude 131, Uluru",
        "2 nights at Silky Oaks Lodge, Daintree",
        "2 nights at Lizard Island, Great Barrier Reef",
      ],
      travel: [
        "Domestic flights Sydney–Ayers Rock–Cairns",
        "Return light aircraft Cairns–Lizard Island",
        "Private transfers throughout",
      ],
      experiences: [
        "Guided Uluru and Kata Tjuta walks",
        "Table 131° desert dinner",
        "Mossman Gorge walk with a Kuku Yalanji guide",
        "Guided snorkelling at Lizard Island",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Travel insurance",
      "Premium wines and spa treatments",
      "Optional helicopter flights and dives",
    ],
    priceFrom: 14900,
    rates: tropicalRates(14900, 16600, 15700, 16400),
    badge: "Most requested",
    featured: true,
    seo: {
      title: "Red Centre to Reef: 8 Days, Uluru to Lizard Island",
      description:
        "An eight-day private journey from Longitude 131 at Uluru to the Daintree rainforest and Lizard Island on the Great Barrier Reef, with private guiding.",
    },
  },

  /* 2 ------------------------------------------------------------------ */
  {
    slug: "around-australia-in-14-days",
    title: "Around Australia in 14 Days",
    durationDays: 14,
    nights: 13,
    destinations: ["sydney", "uluru", "great-barrier-reef", "kangaroo-island"],
    experiences: ["best-of-australia", "five-star-luxury"],
    budgetTier: "ultra",
    heroImage: img(
      "1546268060-2592ff93ee24",
      "Aerial view of the Sydney Harbour Bridge and Opera House",
      "Jamie Davies",
    ),
    gallery: [
      img("1654692870756-ea1ebcb8be1d", "Uluru rising from the desert", "Trevor McKinnon"),
      img("1582967788606-a171c1080cb0", "Small orange fish swimming around a vibrant coral reef", "Francesco Ungaro"),
      img("1652593707316-246dec33aed8", "A kangaroo standing on a dirt clearing beside the ocean", "Zac Edmonds"),
    ],
    summary:
      "Two weeks across four of Australia's defining landscapes: Sydney Harbour, Uluru, the northern Great Barrier Reef and Kangaroo Island. Each stay is three nights, so there is time to settle, and every flight is chosen to avoid doubling back.",
    inclusionLine: "Three-night stays · Private guiding · All domestic flights",
    highlights: [
      "A private harbour cruise on Sydney's sheltered bays",
      "Longitude 131 and Lizard Island in a single journey",
      "Sea lions and coastal walks on Kangaroo Island",
      "Inclusive dining at three of Australia's best lodges",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Sydney",
        body:
          "You are met as you clear customs and driven to a harbourside hotel with views across Circular Quay or Walsh Bay. The first day is left deliberately open so you can recover from the long flight. A short walk takes you around the forecourt of the Opera House and into the Royal Botanic Garden, and dinner can be booked close by so there is no need to travel far tonight.",
        meals: ["D"],
        image: img("1506973035872-a4ec16b8e8d9", "The Sydney Opera House on a clear day", "Dan Freeman"),
      },
      {
        day: [2, 3],
        title: "Sydney by water and on foot",
        body:
          "A private guide walks you through The Rocks and behind the scenes at the Opera House before the day's crowds arrive. The next day, a chartered boat takes you into the quiet coves of Middle Harbour and out towards the Heads, with lunch on board. There is time for the coastal walk from Bondi to Bronte, the Art Gallery of New South Wales, or simply long lunches overlooking the water.",
        makeItYours: "Add a seaplane lunch at a Pittwater restaurant, or a day in the Blue Mountains with a private guide.",
        meals: ["B", "L"],
      },
      {
        day: 4,
        title: "Fly to Uluru",
        body:
          "A morning flight from Sydney reaches Ayers Rock Airport in a little over three hours. You are collected and taken to Longitude 131, where each tented pavilion faces Uluru across the dunes. After lunch, rest through the heat of the day, then join the lodge's guides for a sunset walk at the base of the rock, followed by drinks on the Dune Top as the evening cools.",
        stay: "longitude-131",
        meals: ["L", "D"],
      },
      {
        day: [5, 6],
        title: "Uluru and Kata Tjuta",
        body:
          "Walk into Walpa Gorge at Kata Tjuta at first light, then spend time at the Cultural Centre learning about the Anangu and Tjukurpa. A guided walk along the Mala track at Uluru explains how the rock has been read and cared for over many generations. One evening is reserved for Table 131°, dinner beneath a sky dense with stars, with a guide pointing out the Southern Cross.",
        makeItYours: "Add a sunrise helicopter flight, or spend an afternoon with a local Anangu artist.",
        stay: "longitude-131",
        meals: ["B", "L", "D"],
      },
      {
        day: 7,
        title: "Desert to the northern reef",
        body:
          "Fly direct from Ayers Rock to Cairns, a flight of about two and a half hours, and connect to the light aircraft for Lizard Island. The hour-long hop follows the Great Barrier Reef north along the Cape York coast, with clear views of the reef below. By late afternoon you are on the island, where the resort's suites look onto white sand and calm, clear water.",
        stay: "lizard-island",
        meals: ["B", "D"],
      },
      {
        day: [8, 9],
        title: "Lizard Island",
        body:
          "Days here have little structure. Snorkel the Clam Gardens with a guide, take a boat to the outer reef, or claim one of the island's 24 beaches with a dinghy and a picnic. The Lizard Island Research Station runs occasional talks on reef science. Dinner at Salt Water is served on the terrace, and the evening breeze off the Coral Sea keeps the air comfortable.",
        makeItYours: "Certified divers can join a guided dive at Cod Hole, known for its resident potato cod.",
        stay: "lizard-island",
        meals: ["B", "L", "D"],
      },
      {
        day: 10,
        title: "South to Adelaide",
        body:
          "The light aircraft returns you to Cairns, from where a direct flight takes you to Adelaide in around three and a half hours. A driver meets you and takes you to a boutique hotel in the city. The evening is quiet, with dinner at a nearby restaurant that champions South Australian produce, and an early night before tomorrow's short flight across to Kangaroo Island.",
        meals: ["B"],
      },
      {
        day: 11,
        title: "Kangaroo Island",
        body:
          "The flight from Adelaide to Kingscote takes about 30 minutes. A guide from Southern Ocean Lodge meets you and drives you across the island, stopping for local cheese or honey along the way. The lodge sits on a cliff above Hanson Bay, and every suite faces the Southern Ocean. Afternoon drinks are served in the Great Room, with the coast stretching west beyond the glass.",
        stay: "southern-ocean-lodge",
        meals: ["L", "D"],
      },
      {
        day: [12, 13],
        title: "Seals, sea lions and wild coast",
        body:
          "Walk among Australian sea lions on the beach at Seal Bay with a ranger, then visit Remarkable Rocks and the New Zealand fur seals at Admirals Arch in Flinders Chase National Park. Evenings bring the lodge's Kangaroos and Kanapés experience, watching wildlife emerge in the dusk. There is time to walk sections of the coast, or simply sit by the fire with the island's wines.",
        makeItYours: "Add a private kayak on the Harriet River or a visit to a local distillery.",
        stay: "southern-ocean-lodge",
        meals: ["B", "L", "D"],
        image: img("1675746056643-8d5280174346", "A lighthouse on top of a hill against the sky", "Richard Lin"),
      },
      {
        day: 14,
        title: "Depart from Adelaide",
        body:
          "After breakfast you are driven back to Kingscote for the short flight to Adelaide, connecting with your onward domestic or international flight. If you have a late departure, we can arrange lunch in the Adelaide Hills or a few hours at the Art Gallery of South Australia. Your Travel Designer will have confirmed all connections and luggage arrangements before you leave the island.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights at a harbourside hotel in Sydney",
        "3 nights at Longitude 131, Uluru",
        "3 nights at Lizard Island",
        "1 night in Adelaide",
        "3 nights at Southern Ocean Lodge, Kangaroo Island",
      ],
      travel: [
        "All domestic flights in Economy, with Business on request",
        "Return light aircraft Cairns–Lizard Island",
        "Return flights Adelaide–Kangaroo Island",
        "Private transfers throughout",
      ],
      experiences: [
        "Private Sydney harbour charter",
        "Guided walks at Uluru and Kata Tjuta",
        "Guided snorkelling at Lizard Island",
        "Seal Bay and Flinders Chase with a guide",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Travel insurance",
      "Most meals in Sydney and Adelaide",
      "Premium wines and spa treatments",
      "Optional helicopter and seaplane flights",
    ],
    priceFrom: 29500,
    rates: tropicalRates(29500, 32900, 31200, 32400),
    featured: true,
    seo: {
      title: "Around Australia in 14 Days: Sydney to Kangaroo Island",
      description:
        "A 14-day private journey linking Sydney, Longitude 131 at Uluru, Lizard Island on the reef and Southern Ocean Lodge on Kangaroo Island, three nights in each.",
    },
  },

  /* 3 ------------------------------------------------------------------ */
  {
    slug: "iconic-australia-sea-city-culture",
    title: "Iconic Australia – Sea, City and Culture",
    durationDays: 10,
    nights: 9,
    destinations: ["sydney", "uluru", "great-barrier-reef"],
    experiences: ["best-of-australia", "enriching-encounters"],
    budgetTier: "premium",
    heroImage: img("1523059623039-a9ed027e7fad", "The Sydney Opera House in Sydney, Australia", "Photoholgic"),
    gallery: [
      img("1605235904827-2fc511a86dd0", "A large red rock formation under a blue sky", "Michael Jerrard"),
      img("1559651868-066bcc28f358", "People sitting on a bench by the Sydney Opera House", "Quentin Grignet"),
      img("1514907283155-ea5f4094c70c", "Blue and grey fish near corals", "Shaun Low"),
    ],
    summary:
      "Ten days built around Sydney, Uluru and the reef off Port Douglas, with a strong thread of Aboriginal culture running through each. Comfortable boutique stays keep the price considered without losing the private guiding.",
    inclusionLine: "Daily breakfast · Aboriginal-guided walks · Private reef charter",
    highlights: [
      "An Aboriginal-led walk through Sydney's Royal Botanic Garden",
      "Sunrise at Kata Tjuta with an Anangu-trained guide",
      "A private boat day on the Agincourt Reefs",
      "Treehouse nights at Silky Oaks Lodge",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Sydney",
        body:
          "A driver meets you at the airport and takes you to a boutique hotel in The Rocks, the city's oldest neighbourhood, a short walk from Circular Quay. After a rest, take an easy stroll along the harbour foreshore to the Opera House steps. Dinner tonight is booked at a restaurant within walking distance, so there is no need to think about getting anywhere.",
        meals: [],
      },
      {
        day: [2, 3],
        title: "Sydney's harbour and its first stories",
        body:
          "Start with an Aboriginal-led walk in the Royal Botanic Garden, learning how the Gadigal people used the plants and foreshore. In the afternoon, tour the Opera House with a guide. The next day is free for a ferry to Manly, the coastal walk from Bondi to Bronte or time at the Art Gallery of New South Wales and its collection of Aboriginal art.",
        makeItYours: "Add a private sunset sail on the harbour or a day in the Hunter Valley.",
        meals: ["B"],
      },
      {
        day: 4,
        title: "Fly to Uluru",
        body:
          "Fly from Sydney to Ayers Rock Airport, a little over three hours. You stay in a comfortable hotel in the Yulara resort precinct, a short drive from the national park, with a pool and rooms looking out over the dunes. In the late afternoon, a guide takes you to watch the changing colour of Uluru at sunset, with a glass of sparkling wine.",
        meals: ["B"],
        image: img("1612807831838-5d74ee4abddc", "A time-lapse of stars in the night sky", "Steven Wei"),
      },
      {
        day: [5, 6],
        title: "Uluru and Kata Tjuta",
        body:
          "Rise early for sunrise at Kata Tjuta and a walk into Walpa Gorge before the heat. Later, an Anangu-trained guide leads you along the base of Uluru, sharing stories that are appropriate to tell visitors. The second day brings time at the Cultural Centre, a dot-painting workshop with a local artist and an evening dinner beneath the stars in the desert.",
        makeItYours: "Add a sunrise camel ride or a helicopter flight over both landscapes.",
        meals: ["B", "D"],
      },
      {
        day: 7,
        title: "Fly to the tropics",
        body:
          "A direct flight from Ayers Rock to Cairns takes about two and a half hours. A private driver follows the coast road north to Silky Oaks Lodge, set in rainforest on the edge of the Mossman River and close to Port Douglas. Your treehouse sits within the canopy, with a deep bath and a hammock on the deck, and the evening is spent at the lodge's restaurant.",
        stay: "silky-oaks-lodge",
        meals: ["B", "D"],
      },
      {
        day: 8,
        title: "A private day on the reef",
        body:
          "A chartered boat from Port Douglas takes you out to the Agincourt Reefs on the edge of the continental shelf, about an hour and a half away. A marine biologist on board explains the reef's life and guides you on snorkels across coral gardens. Lunch is served on deck, and the return trip in the afternoon leaves time for a swim in the river back at the lodge.",
        meals: ["B", "L", "D"],
        stay: "silky-oaks-lodge",
        image: img("1587139223877-04cb899fa3e8", "Green trees beside a blue sea on a clear day", "Manny Moreno"),
      },
      {
        day: 9,
        title: "Mossman Gorge and the Daintree",
        body:
          "Walk Mossman Gorge with a Kuku Yalanji guide, who shows you bush foods and medicines along the way. After lunch, cross the Daintree River by ferry and continue north to Cape Tribulation, where rainforest meets the reef. The final evening is at the lodge, with a dinner of local produce and a last swim in the river before you pack.",
        makeItYours: "Swap the Daintree for a hot-air balloon flight over the Atherton Tablelands.",
        stay: "silky-oaks-lodge",
        meals: ["B", "D"],
      },
      {
        day: 10,
        title: "Depart from Cairns",
        body:
          "A slow breakfast at the lodge, then a private transfer to Cairns Airport, about an hour and a quarter by road, for your onward flight. If your flight leaves late in the day, we can arrange lunch in Port Douglas or a visit to a local art centre on the way to the airport. All luggage and timings are confirmed in advance.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights at a boutique hotel in The Rocks, Sydney",
        "3 nights at a resort hotel in Yulara, Uluru",
        "3 nights at Silky Oaks Lodge, Daintree",
      ],
      travel: [
        "Domestic flights Sydney–Ayers Rock–Cairns",
        "Private airport and lodge transfers",
        "Private vehicle with driver at Uluru",
      ],
      experiences: [
        "Aboriginal-led walk in the Royal Botanic Garden",
        "Guided Uluru and Kata Tjuta walks",
        "Private reef charter from Port Douglas",
        "Mossman Gorge walk with a Kuku Yalanji guide",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Travel insurance",
      "Meals not listed",
      "Optional helicopter flights and tours",
    ],
    priceFrom: 16800,
    rates: tropicalRates(16800, 18900, 17700, 18600),
    featured: true,
    seo: {
      title: "Iconic Australia: Sydney, Uluru and the Reef in 10 Days",
      description:
        "A 10-day private journey through Sydney, Uluru and the reef off Port Douglas, with Aboriginal-led walks, a private reef charter and nights at Silky Oaks Lodge.",
    },
  },

  /* 4 ------------------------------------------------------------------ */
  {
    slug: "reef-rainforest-wildlife-family",
    title: "Reef, Rainforest and Wildlife: A Family Itinerary",
    durationDays: 10,
    nights: 9,
    destinations: ["queensland", "great-barrier-reef"],
    experiences: ["family-journeys", "wildlife-safaris", "reef-and-islands"],
    budgetTier: "premium",
    heroImage: img(
      "1598522038344-293c492adaf0",
      "Aerial view of green forest meeting a blue sea",
      "Lochie Riordan",
    ),
    gallery: [
      img("1504575958497-ccdd586c2997", "A koala in a tree", "David Clode"),
      img("1581242163722-caf37479b25c", "A clownfish on a coral reef", "Giorgia Doglioni"),
      img("1709690053808-2da854a0d770", "A lush green forest filled with trees", "Aaron De Wit"),
    ],
    summary:
      "Ten days in tropical Queensland designed for families with children from about six. Four nights in the Daintree are followed by five on Hamilton Island in the Whitsundays, with reef, rainforest and wildlife paced to suit young travellers.",
    inclusionLine: "Daily breakfast · Family-friendly guides · Private reef and island days",
    highlights: [
      "Junior ranger-style rainforest walks in the Daintree",
      "A family snorkel on calm, shallow reef",
      "Whitehaven Beach by private boat",
      "Koalas and kangaroos at Hamilton Island's wildlife park",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Cairns",
        body:
          "A driver meets the family at Cairns Airport with booster seats fitted, for the scenic hour-long drive north to Silky Oaks Lodge. Family treehouses sit in the rainforest above the Mossman River, with space to spread out. The afternoon is for settling in and an easy swim in the river's clear swimming hole, and dinner can be early to suit tired travellers.",
        stay: "silky-oaks-lodge",
        meals: ["D"],
      },
      {
        day: 2,
        title: "Mossman Gorge",
        body:
          "A Kuku Yalanji guide leads the family on a gentle walk through Mossman Gorge, showing children how to find bush foods and make paint from ochre. There is time to swim in the gorge if conditions allow. The afternoon is free for the pool, a nap or a guided spotlighting walk at dusk to look for possums, frogs and the occasional tree kangaroo.",
        stay: "silky-oaks-lodge",
        meals: ["B", "L"],
        image: img("1598947859758-c024ef080982", "Green moss on rocks in a rainforest river", "Leigh"),
      },
      {
        day: 3,
        title: "The reef from Port Douglas",
        body:
          "A family-friendly reef trip from Port Douglas heads to the Low Isles, a small coral cay about an hour offshore with calm, shallow snorkelling ideal for beginners. Turtles are often seen grazing on seagrass near the shore. Lycra stinger suits and child-sized equipment are provided, and a marine guide stays close to younger swimmers throughout the day.",
        makeItYours: "Older children who swim confidently may prefer a private charter to the outer reef.",
        stay: "silky-oaks-lodge",
        meals: ["B", "L"],
      },
      {
        day: 4,
        title: "The Daintree and Cape Tribulation",
        body:
          "Cross the Daintree River by cable ferry and take a short river cruise to look for crocodiles sunning on the banks. Continue to Cape Tribulation, walking boardwalks through fan palms and mangroves with a naturalist who knows where cassowaries are often seen. Ice cream made from local tropical fruit is a reliable stop on the way back to the lodge.",
        stay: "silky-oaks-lodge",
        meals: ["B", "L"],
      },
      {
        day: 5,
        title: "Fly to the Whitsundays",
        body:
          "After a transfer to Cairns, a private charter flight takes the family south to Hamilton Island Airport in about an hour and a half. A buggy, the island's main way of getting around, is waiting for you. You stay in a private holiday home with a pool and views over the Coral Sea, with a kitchen stocked with groceries for easy breakfasts.",
        meals: ["B"],
      },
      {
        day: 6,
        title: "Whitehaven Beach by boat",
        body:
          "A private skippered boat takes you to Whitehaven Beach on Whitsunday Island, with its fine silica sand. Walk to the lookout at Hill Inlet to see the swirl of sand and water at low tide, then picnic on the beach. On the way back, the skipper stops at a sheltered bay for snorkelling, timed so younger children are not out too long.",
        meals: ["B", "L"],
        image: img("1598522038401-e3a462448c31", "Green trees on an island", "Lochie Riordan"),
      },
      {
        day: 7,
        title: "Wildlife and island time",
        body:
          "Visit Wild Life Hamilton Island for close views of koalas, kangaroos and crocodiles, with keeper talks timed for younger visitors. The rest of the day is free for the beach at Catseye Bay, where non-motorised watersports are available. In the evening, eat together at one of the island's family-friendly restaurants, looking out over the marina at dusk.",
        meals: ["B"],
      },
      {
        day: 8,
        title: "Over Heart Reef",
        body:
          "A seaplane or helicopter flight over the Great Barrier Reef shows the family Heart Reef and the wider pattern of coral below. Depending on the operator and the tides, you may land at a reef pontoon for a snorkel. The afternoon is set aside for rest, since everyone tends to need a slower day after a big morning.",
        makeItYours: "Swap the flight for a sailing day aboard a private yacht among the islands.",
        meals: ["B"],
      },
      {
        day: 9,
        title: "A free day on Hamilton Island",
        body:
          "With nothing scheduled, the family can choose its own pace. Walk the trail to Passage Peak for views across the islands, book a kids' club session for the younger ones or hire a small boat with a guide for fishing. A farewell dinner can be arranged at your house with a private chef cooking local seafood, keeping the evening relaxed.",
        meals: ["B"],
      },
      {
        day: 10,
        title: "Depart from Hamilton Island",
        body:
          "A final morning swim and a leisurely breakfast, then a buggy ride to Hamilton Island Airport for your flight home or onwards. Direct flights operate to Sydney, Melbourne and Brisbane, connecting with international departures. We confirm everything in advance, including child seats, luggage allowances and any overnight stay you might need near the international airport.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "4 nights in a family treehouse at Silky Oaks Lodge",
        "5 nights in a private holiday home on Hamilton Island",
      ],
      travel: [
        "Private charter flight Cairns–Hamilton Island",
        "Private transfers with child seats",
        "Golf buggy on Hamilton Island",
      ],
      experiences: [
        "Mossman Gorge walk with a Kuku Yalanji guide",
        "Low Isles reef trip with child-sized gear",
        "Private boat to Whitehaven Beach",
        "Scenic flight over Heart Reef",
        "Wild Life Hamilton Island entry",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Domestic flight from Hamilton Island",
      "Travel insurance",
      "Meals not listed",
      "Kids' club sessions",
    ],
    priceFrom: 11600,
    rates: tropicalRates(11600, 13400, 12300, 13200),
    badge: "New",
    featured: true,
    seo: {
      title: "Family Holiday: Daintree, Reef and Whitsundays",
      description:
        "A 10-day family journey in Queensland with rainforest walks, a gentle reef snorkel, Whitehaven Beach by boat and koalas, at Silky Oaks and Hamilton Island.",
    },
  },

  /* 5 ------------------------------------------------------------------ */
  {
    slug: "southern-safari-in-style",
    title: "Southern Safari in Style",
    durationDays: 9,
    nights: 8,
    destinations: ["kangaroo-island", "south-australia", "tasmania"],
    experiences: ["wildlife-safaris", "food-and-wine"],
    budgetTier: "premium",
    heroImage: img("1638834344937-30a2275798c3", "A beach with mountains in the distance", "Tim Lippis"),
    gallery: [
      img("1697818487965-5c278b7c023a", "A close-up of a kangaroo on grass", "Mattia Astori"),
      img("1506377247377-2a5b3b417ebb", "A wine glass overlooking an orchard on a sunny day", "Kym Ellis"),
      img("1627110465980-a076e5e02740", "Brown and green mountains beside a blue lake", "Lochie Riordan"),
    ],
    summary:
      "Nine days in Australia's south, from the vineyards of the Barossa to the wildlife of Kangaroo Island and the granite coast of Freycinet in Tasmania. The pace is gentle and the food and wine are a constant companion.",
    inclusionLine: "All meals at lodges · Private wildlife guiding · Barossa cellar visits",
    highlights: [
      "Private tastings with Barossa winemakers",
      "Sea lions at Seal Bay with a ranger",
      "Three nights at Saffire Freycinet",
      "Oysters on the water at Freycinet Marine Farm",
    ],
    days: [
      {
        day: 1,
        title: "Adelaide to the Barossa",
        body:
          "A driver meets you at Adelaide Airport for the hour-long drive to the Barossa Valley. You stay in a private vineyard retreat with a handful of suites, looking over rows of old vines. The afternoon includes a first tasting at a family winery, followed by dinner at a restaurant that cooks with produce from its own kitchen garden.",
        meals: ["D"],
        image: img("1472352327492-9765783b74e1", "Clusters of white grapes in a vineyard during the golden hour", "Thomas Schaefer"),
      },
      {
        day: 2,
        title: "Barossa cellars",
        body:
          "Spend the day with a private guide and driver, visiting cellar doors and meeting the people who make some of the region's most respected shiraz. Some vines here are more than a century old. Lunch is long and unhurried at a winery restaurant, and the afternoon allows a walk through the vineyards or a visit to a local cheesemaker.",
        makeItYours: "Blend your own wine with a winemaker, or add a hot-air balloon flight over the valley at dawn.",
        meals: ["B", "L"],
      },
      {
        day: 3,
        title: "Fly to Kangaroo Island",
        body:
          "Return to Adelaide Airport for the 30-minute flight to Kingscote. A Southern Ocean Lodge guide meets you and drives across the island, stopping at a honey farm or a distillery along the way. The lodge sits above Hanson Bay with suites facing the sea, and the evening brings drinks in the Great Room followed by dinner from the island's farms and waters.",
        stay: "southern-ocean-lodge",
        meals: ["L", "D"],
      },
      {
        day: [4, 5],
        title: "Kangaroo Island wildlife",
        body:
          "Walk among Australian sea lions at Seal Bay with a ranger, then explore Flinders Chase National Park, where Remarkable Rocks sit above the sea and New Zealand fur seals rest beneath Admirals Arch. Your guide knows where to find koalas, echidnas and kangaroos. At dusk, the lodge's Kangaroos and Kanapés experience watches the island's wildlife come out to graze.",
        makeItYours: "Add a private kayak trip on the Harriet River or a visit to a sheep's milk dairy.",
        stay: "southern-ocean-lodge",
        meals: ["B", "L", "D"],
        image: img("1656904889109-e59d094ab030", "Waves crashing on a rocky beach", "Rod Long"),
      },
      {
        day: 6,
        title: "Across to Tasmania",
        body:
          "Fly from Kangaroo Island to Adelaide and on to Hobart, then take a private transfer of around two and a half hours to Saffire Freycinet at Coles Bay. The drive follows the east coast through farmland and quiet towns. The lodge's curved main building faces the Hazards across Great Oyster Bay, and your suite has the same view from the bath.",
        stay: "saffire-freycinet",
        meals: ["B", "D"],
      },
      {
        day: 7,
        title: "Freycinet on foot and by water",
        body:
          "Walk to the Wineglass Bay lookout with a guide, continuing down to the beach if you are keen. In the afternoon, wade out in waders to the oyster lease at Freycinet Marine Farm and eat oysters fresh from the water with a glass of Tasmanian sparkling. The lodge's Tasmanian devil enclosure introduces you to the island's best-known marsupial and the work to protect it.",
        stay: "saffire-freycinet",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "A slow day at Saffire",
        body:
          "Take the morning at your own pace, perhaps with a treatment at the lodge spa, a beekeeping session or a guided walk along the coast. A boat trip around the Freycinet Peninsula may show dolphins, seals and sea eagles. The final evening at Saffire is a long dinner of Tasmanian produce, paired with wines from the island's cool-climate growers.",
        makeItYours: "Add a scenic flight over Wineglass Bay, or a vineyard tour of the nearby east coast wineries.",
        stay: "saffire-freycinet",
        meals: ["B", "L", "D"],
      },
      {
        day: 9,
        title: "Depart from Hobart or Launceston",
        body:
          "After breakfast, a private transfer takes you back to Hobart or north to Launceston, each about two and a half hours by road, for your onward flight. If you have time, stop at a vineyard or the Ross bakery along the way. Your Travel Designer will have confirmed connections and timings well before departure, including any overnight stay you might need.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "2 nights at a vineyard retreat in the Barossa",
        "3 nights at Southern Ocean Lodge, Kangaroo Island",
        "3 nights at Saffire Freycinet, Tasmania",
      ],
      travel: [
        "Domestic flights Adelaide–Kangaroo Island–Adelaide–Hobart",
        "Private transfers throughout",
        "Private driver-guide in the Barossa",
      ],
      experiences: [
        "Private Barossa cellar door visits",
        "Seal Bay and Flinders Chase with a guide",
        "Guided walk to Wineglass Bay lookout",
        "Freycinet Marine Farm oyster experience",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Travel insurance",
      "Meals in the Barossa not listed",
      "Spa treatments and optional flights",
    ],
    priceFrom: 15200,
    rates: southernRates(15200, 16100, 16800, 17400),
    featured: false,
    seo: {
      title: "Southern Safari: Barossa, Kangaroo Island and Tasmania",
      description:
        "A nine-day private journey from Barossa cellars to Southern Ocean Lodge on Kangaroo Island and Saffire Freycinet in Tasmania, with wildlife and wine guiding.",
    },
  },

  /* 6 ------------------------------------------------------------------ */
  {
    slug: "top-end-off-the-beaten-track",
    title: "Off the Beaten Track in Style: A Top End Itinerary",
    durationDays: 9,
    nights: 8,
    destinations: ["northern-territory", "kimberley"],
    experiences: ["outback-by-air", "enriching-encounters"],
    budgetTier: "ultra",
    heroImage: img(
      "1589138036184-582d8adc803f",
      "A green and brown escarpment beside a river under a blue sky",
      "Vladimir Haltakov",
    ),
    gallery: [
      img("1650502518461-c4213d6bbba5", "A pool of water with a waterfall in the background", "Isabelle Truong"),
      img("1601083624976-be0d40ee90eb", "Green trees beside water at sunset", "Will Roocke"),
      img("1589137837093-32fb8407958d", "A bird on the water", "Vladimir Haltakov"),
    ],
    summary:
      "Nine days by private aircraft through Arnhem Land and the East Kimberley, two regions few travellers reach. You visit rock art with Traditional Owners, fly over the Bungle Bungles and land beside Mitchell Falls, travelling in the dry season from April to September.",
    inclusionLine: "All meals · Private guiding · Scenic flights",
    highlights: [
      "Arnhem Land rock art visited with Traditional Owners",
      "A scenic flight over the Bungle Bungle Range",
      "A helicopter landing at Mitchell Falls",
      "Private light aircraft between remote lodges",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Darwin",
        body:
          "A driver meets you at Darwin Airport and takes you to a waterfront hotel near the city centre. Late in the afternoon, walk to the Mindil Beach Sunset Market, held on Thursday and Sunday evenings in the dry season, or take a sunset cruise on Darwin Harbour. Your guide briefs you over dinner on the days ahead and the light aircraft luggage limits.",
        meals: ["D"],
      },
      {
        day: [2, 4],
        title: "Arnhem Land",
        body:
          "A private light aircraft takes you about an hour east to a small wilderness lodge in Arnhem Land. With an Aboriginal guide and the necessary permits, you visit rock art galleries that have been added to over thousands of years. Days are spent on wetland boat trips among magpie geese and crocodiles, fishing for barramundi, and on walks to escarpment lookouts in the soft afternoon light.",
        makeItYours: "Keen anglers can spend a full day on the river with a specialist fishing guide.",
        meals: ["B", "L", "D"],
        image: img("1662278103347-4fb8a45432f1", "A crocodile in the water", "Leon Andov"),
      },
      {
        day: 5,
        title: "Fly to the East Kimberley",
        body:
          "Your private aircraft crosses into Western Australia and lands at Kununurra, about two hours from Arnhem Land. From here you continue to a homestead on a working cattle station in the Kimberley, set among gorges and spring-fed pools. The afternoon is spent swimming in a shaded gorge, followed by drinks on the verandah as the ranges turn red.",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Over the Bungle Bungles",
        body:
          "A morning scenic flight takes you over Purnululu National Park and the beehive domes of the Bungle Bungle Range. Land inside the park for a guided walk into Cathedral Gorge, where the sandstone walls form a natural amphitheatre. Lake Argyle, Australia's largest man-made lake, is visible on the return flight, and dinner is back at the homestead.",
        meals: ["B", "L", "D"],
        image: img("1709333564382-5c3871cff8a2", "A large body of water surrounded by green trees", "simon reeve"),
      },
      {
        day: 7,
        title: "Mitchell Falls by helicopter",
        body:
          "Fly north over the Kimberley plateau to the Mitchell Plateau, where a helicopter carries you over the four tiers of Mitchell Falls. The helicopter sets down beside the falls, allowing time to walk, swim in upper pools where permitted, and look for Gwion Gwion rock art with your guide. The light aircraft returns you to the homestead in the late afternoon.",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "Station life and gorges",
        body:
          "A slower day at the homestead. Ride along the river with the station's guides, take a boat trip through a gorge or walk to a waterfall pool for a swim. The evening is spent around a fire beneath a clear sky, with a dinner of local beef and barramundi, and the chance to talk to the people who run the station.",
        makeItYours: "Add a sunset cruise on Lake Argyle or a fishing trip on the Ord River.",
        meals: ["B", "L", "D"],
      },
      {
        day: 9,
        title: "Depart via Kununurra",
        body:
          "Your private aircraft returns you to Kununurra or Darwin, depending on your onward plans. Scheduled flights from Kununurra connect to Darwin, Broome and Perth. If you have time before departure, a guide can take you to Mirima National Park on the edge of town. Your Travel Designer will have confirmed every connection before you leave.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "1 night at a waterfront hotel in Darwin",
        "3 nights at a wilderness lodge in Arnhem Land",
        "4 nights at a station homestead in the East Kimberley",
      ],
      travel: [
        "Private light aircraft throughout",
        "Helicopter flight at Mitchell Falls",
        "Private transfers and guided vehicles",
      ],
      experiences: [
        "Arnhem Land permits and rock art visits",
        "Wetland boat trips and barramundi fishing",
        "Bungle Bungles scenic flight and Cathedral Gorge walk",
        "Gorge swimming and station activities",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Domestic flights to Darwin and from Kununurra",
      "Travel insurance",
      "Premium wines",
    ],
    priceFrom: 21400,
    rates: northernRates(23600, 21400, 22900, 23200),
    featured: false,
    seo: {
      title: "Top End and Kimberley by Private Aircraft: 9 Days",
      description:
        "A nine-day private air journey through Arnhem Land and the East Kimberley, with rock art, the Bungle Bungles and a helicopter landing at Mitchell Falls.",
    },
  },

  /* 7 ------------------------------------------------------------------ */
  {
    slug: "sydney-safari-reef-shiraz",
    title: "Sydney, Safari, Reef & Shiraz",
    durationDays: 12,
    nights: 11,
    destinations: ["sydney", "kangaroo-island", "south-australia", "great-barrier-reef"],
    experiences: ["food-and-wine", "wildlife-safaris", "best-of-australia"],
    budgetTier: "ultra",
    heroImage: img(
      "1624138784614-87fd1b6528f8",
      "The Sydney Opera House beside the water on a clear day",
      "Caleb",
    ),
    gallery: [
      img("1553361371-9b22f78e8b1d", "Red wine being poured into a glass", "Lefteris kallergis"),
      img("1713476612848-47fd2006a759", "A large rock on a green hillside", "Michael Obeysekera"),
      img("1583212292454-1fe6229603b7", "A school of fish in clear water", "Hiroko Yoshii"),
    ],
    summary:
      "Twelve days pairing Sydney with the Barossa, Kangaroo Island and Lizard Island. It moves from harbour city to vineyard to wild coast to coral reef, with three nights in most places and flights timed to keep transit days short.",
    inclusionLine: "All meals at lodges · Private cellar visits · Light aircraft to Lizard Island",
    highlights: [
      "Private harbour time and tables in Sydney",
      "Old-vine shiraz with Barossa winemakers",
      "Sea lions and wild coast on Kangaroo Island",
      "The outer reef from Lizard Island",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Sydney",
        body:
          "A driver meets you at the airport and takes you to a hotel overlooking the harbour. After a rest, walk around the foreshore to the Opera House and through the Royal Botanic Garden at an easy pace. A table is booked for an early dinner at a restaurant on the water, so the evening ends without effort and you can sleep off the long flight.",
        meals: ["D"],
      },
      {
        day: [2, 3],
        title: "Sydney Harbour",
        body:
          "A private guide shows you The Rocks and the Opera House, then a chartered boat takes you into the quiet bays of the harbour, with lunch on board. The next day is free for the coastal walk from Bondi to Bronte, the Art Gallery of New South Wales or a ferry to Manly. Dinner reservations are made at restaurants that suit your tastes.",
        makeItYours: "Add a seaplane lunch on Pittwater or a day with a private guide in the Blue Mountains.",
        meals: ["B", "L"],
      },
      {
        day: 4,
        title: "To the Barossa",
        body:
          "Fly from Sydney to Adelaide in about two hours, where a driver takes you an hour north to the Barossa Valley. You stay at a small vineyard retreat with suites overlooking old vines. The afternoon brings your first private tasting at a family winery, and dinner is served at a restaurant known for cooking with produce from its own garden.",
        meals: ["B", "D"],
        image: img("1594156547068-21882c2d27a5", "A tree on a green grassy field under a blue sky", "mick orlick"),
      },
      {
        day: 5,
        title: "Shiraz and the people who make it",
        body:
          "With a private driver-guide, visit cellar doors and meet winemakers working with vines planted in the nineteenth century. A long lunch at a winery restaurant leaves the afternoon free for a walk through the vineyards or a visit to a local butcher, baker or cheesemaker. The evening is quiet, with a light dinner and a glass of something you discovered today.",
        makeItYours: "Join a winemaker to blend your own bottle, or take a dawn balloon flight over the valley.",
        meals: ["B", "L"],
      },
      {
        day: 6,
        title: "Fly to Kangaroo Island",
        body:
          "A short drive back to Adelaide connects with the 30-minute flight to Kingscote. A Southern Ocean Lodge guide meets you and drives across the island, stopping for local honey or gin. The lodge stands above Hanson Bay, its suites facing the Southern Ocean. Afternoon drinks and a dinner of island produce are served in the Great Room.",
        stay: "southern-ocean-lodge",
        meals: ["L", "D"],
      },
      {
        day: [7, 8],
        title: "Kangaroo Island's wild side",
        body:
          "Walk among Australian sea lions at Seal Bay with a ranger, then explore Flinders Chase National Park, visiting Remarkable Rocks and the fur seals at Admirals Arch. At dusk, the lodge's Kangaroos and Kanapés experience brings kangaroos and wallabies into view. There is time to walk the coast, visit a local winery or simply rest by the fire.",
        makeItYours: "Add a private kayak on the Harriet River or a visit to a sheep's milk dairy.",
        stay: "southern-ocean-lodge",
        meals: ["B", "L", "D"],
      },
      {
        day: 9,
        title: "To Lizard Island",
        body:
          "Fly from Kangaroo Island to Adelaide, then direct to Cairns in about three and a half hours, connecting to an afternoon light aircraft to Lizard Island. The hour-long flight follows the reef and the Cape York coast. You arrive in time for a swim before dinner at Salt Water, served on the terrace looking out over Anchor Bay.",
        stay: "lizard-island",
        meals: ["B", "D"],
      },
      {
        day: [10, 11],
        title: "Reef days",
        body:
          "Snorkel the Clam Gardens with a guide, join a boat to the outer reef, or take a dinghy and picnic to one of the island's 24 beaches. Climb Cook's Look early in the morning for the view across the reef. The island's research station runs occasional talks, and the evenings are spent with long, unhurried dinners above the water.",
        makeItYours: "Certified divers can join a dive at Cod Hole on the Ribbon Reefs.",
        stay: "lizard-island",
        meals: ["B", "L", "D"],
        image: img("1515555585025-54136276b6e3", "A fish beside coral underwater", "Milos Prelevic"),
      },
      {
        day: 12,
        title: "Depart via Cairns",
        body:
          "A last swim and breakfast, then the light aircraft returns you to Cairns to connect with your onward flight. If your departure is later in the day, we can arrange a day room or lunch on the Cairns Esplanade. Your Travel Designer will have confirmed every connection and luggage arrangement before you leave the island.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights at a harbourside hotel in Sydney",
        "2 nights at a vineyard retreat in the Barossa",
        "3 nights at Southern Ocean Lodge, Kangaroo Island",
        "3 nights at Lizard Island",
      ],
      travel: [
        "Domestic flights Sydney–Adelaide–Kangaroo Island–Adelaide–Cairns",
        "Return light aircraft Cairns–Lizard Island",
        "Private transfers and Barossa driver-guide",
      ],
      experiences: [
        "Private Sydney harbour charter",
        "Barossa cellar door visits with winemakers",
        "Seal Bay and Flinders Chase with a guide",
        "Guided snorkelling at Lizard Island",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Travel insurance",
      "Meals in Sydney and the Barossa not listed",
      "Premium wines and spa treatments",
    ],
    priceFrom: 24800,
    rates: southernRates(24800, 26200, 26900, 27800),
    badge: "Special offer",
    featured: false,
    seo: {
      title: "Sydney, Barossa, Kangaroo Island and Lizard Island",
      description:
        "A 12-day private journey linking Sydney Harbour, Barossa cellars, Southern Ocean Lodge on Kangaroo Island and Lizard Island on the Great Barrier Reef.",
    },
  },

  /* 8 ------------------------------------------------------------------ */
  {
    slug: "australia-by-sea-coastal-odyssey",
    title: "Australia by Sea: The Ultimate Coastal Odyssey",
    durationDays: 11,
    nights: 10,
    destinations: ["kimberley", "western-australia", "great-barrier-reef"],
    experiences: ["reef-and-islands", "outback-by-air"],
    budgetTier: "ultra",
    heroImage: img(
      "1632018602741-db0b2d5623d9",
      "An aerial view of a beach and turquoise water",
      "Dylan Shaw",
    ),
    gallery: [
      img("1760758074076-1f28bb119717", "A manta ray swimming in dark water", "byronetmedia"),
      img("1724545828203-4a7c6f9586f0", "A large body of water at sunset", "Hector John Periquin"),
      img("1590573124389-83f2133e0307", "An aerial view of blue sea", "Dean McQuade"),
    ],
    summary:
      "Eleven days along three very different coastlines: the tidal Kimberley, Ningaloo Reef on the west coast and the Whitsundays on the Great Barrier Reef. A private jet links the two oceans, turning what would be a full day of connections into a single afternoon flight.",
    inclusionLine: "All meals · Seaplane to the Kimberley coast · Private jet coast to coast",
    highlights: [
      "A seaplane over Horizontal Falls and the Buccaneer Archipelago",
      "Snorkelling Ningaloo from the beach at Sal Salis",
      "A private jet from Learmonth to Hamilton Island",
      "Three nights at qualia in the Whitsundays",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Broome",
        body:
          "Fly into Broome from Perth or another capital, and a driver takes you to a resort near Cable Beach. In the late afternoon, walk along the beach as the sun sets over the Indian Ocean, perhaps watching the camel strings on the sand. Dinner is booked at a local restaurant, and your guide explains the seaplane luggage limits for the next day.",
        meals: ["D"],
      },
      {
        day: [2, 4],
        title: "The Kimberley coast",
        body:
          "A seaplane carries you north over the Buccaneer Archipelago, circling Horizontal Falls, where the tide forces water through two narrow gorges. You land at a remote coastal wilderness camp reachable only by air or sea. Days are spent on boat trips through tidal creeks, fishing for barramundi, looking for rock art with a guide and swimming in freshwater pools above the sea.",
        makeItYours: "Add a helicopter flight inland to see waterfalls tumbling off the Kimberley plateau.",
        meals: ["B", "L", "D"],
        image: img("1665021657505-3a680c9cf4b3", "A plane flying over water", "Ishan @seefromthesky"),
      },
      {
        day: 5,
        title: "South to Ningaloo",
        body:
          "Return to Broome by seaplane and continue on a private flight to Learmonth, the airport for Exmouth and Ningaloo. A guide drives you into Cape Range National Park, where Sal Salis sits among the dunes just above the reef. The tented suites are simple and comfortable, with solar power and views of the Indian Ocean. Dinner is served in the main tent beneath the stars.",
        stay: "sal-salis",
        meals: ["B", "D"],
      },
      {
        day: [6, 7],
        title: "Ningaloo Reef",
        body:
          "Snorkel straight from the beach with a guide, often seeing turtles and reef sharks within minutes. Depending on the season, a boat trip lets you swim with whale sharks from about March to July or humpback whales from August to October, while manta rays are present all year. Walk Mandu Mandu Gorge or kayak in the lagoon in the late afternoon.",
        makeItYours: "Add a scenic flight along the reef to see whale sharks, mantas and humpbacks from above.",
        stay: "sal-salis",
        meals: ["B", "L", "D"],
        image: img("1547079631-442498027a07", "Green and blue sea on a clear day", "Ben Carless"),
      },
      {
        day: 8,
        title: "Coast to coast by private jet",
        body:
          "A private jet takes you from Learmonth across the continent to Hamilton Island Airport, a flight of around five hours. On scheduled flights, the same trip would take a full day via Perth and Brisbane. A qualia buggy meets you on arrival, and you are at your pavilion in time for sunset over the Whitsunday Passage and dinner at Long Pavilion.",
        stay: "qualia",
        meals: ["B", "L", "D"],
      },
      {
        day: [9, 10],
        title: "The Whitsundays",
        body:
          "Take a seaplane over Heart Reef and land on the water at Whitehaven Beach, or charter a private yacht among the islands. Snorkel at a quiet bay with a marine guide, or spend the day by your plunge pool. qualia's spa uses Australian botanicals, and dinners alternate between the Long Pavilion and the more relaxed Pebble Beach.",
        makeItYours: "Add a helicopter flight to a pontoon on the outer reef for a private snorkel.",
        stay: "qualia",
        meals: ["B", "L", "D"],
      },
      {
        day: 11,
        title: "Depart from Hamilton Island",
        body:
          "A slow breakfast and a last swim, then a short buggy ride to Hamilton Island Airport for your onward flight. Direct flights connect to Sydney, Melbourne and Brisbane for international departures. Your Travel Designer will have confirmed every connection and any overnight stay in advance, so the only thing left is to pack.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "1 night at a resort near Cable Beach, Broome",
        "3 nights at a Kimberley coastal wilderness camp",
        "3 nights at Sal Salis, Ningaloo",
        "3 nights at qualia, Hamilton Island",
      ],
      travel: [
        "Return seaplane Broome–Kimberley coast",
        "Private flight Broome–Learmonth",
        "Private jet Learmonth–Hamilton Island",
        "Private transfers throughout",
      ],
      experiences: [
        "Horizontal Falls flyover",
        "Guided Kimberley coastal boat trips",
        "Guided snorkelling at Ningaloo",
        "Seaplane over Heart Reef and Whitehaven Beach",
      ],
    },
    excluded: [
      "International flights to Australia",
      "Domestic flights to Broome and from Hamilton Island",
      "Travel insurance",
      "Whale shark swim (seasonal, priced separately)",
      "Spa treatments and premium wines",
    ],
    priceFrom: 27900,
    rates: northernRates(29800, 27900, 29400, 29600),
    featured: false,
    seo: {
      title: "Australia by Sea: Kimberley, Ningaloo and Whitsundays",
      description:
        "An 11-day private journey from the Kimberley coast by seaplane to Sal Salis at Ningaloo and qualia in the Whitsundays, linked by private jet.",
    },
  },
];
