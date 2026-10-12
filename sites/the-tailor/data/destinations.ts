import type { Destination, Img, Month, MonthRating, SeasonRating } from "./types";

/** Build an Unsplash image reference in the house format. */
const img = (id: string, alt: string, photographer?: string): Img => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`,
  alt,
  ...(photographer ? { credit: `Photo: ${photographer} / Unsplash` } : {}),
});

/** Twelve ratings, January to December, plus optional notes keyed by month. */
const season = (
  ratings: [
    SeasonRating, SeasonRating, SeasonRating, SeasonRating,
    SeasonRating, SeasonRating, SeasonRating, SeasonRating,
    SeasonRating, SeasonRating, SeasonRating, SeasonRating,
  ],
  notes: Partial<Record<Month, string>> = {},
): MonthRating[] =>
  ratings.map((rating, i) => {
    const month = (i + 1) as Month;
    const note = notes[month];
    return note ? { month, rating, note } : { month, rating };
  });

export const destinations: Destination[] = [
  /* ------------------------------------------------------------------ */
  /* Iconic                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "great-barrier-reef",
    name: "Great Barrier Reef",
    region: "Tropical North Queensland",
    group: "iconic",
    topDestination: true,
    partnerStays: 18,
    hook: "Private island lodges, outer-reef moorings and quiet coral cays",
    tagline:
      "Two thousand kilometres of coral, cays and continental islands, approached by seaplane, private boat and a guide who knows the tides.",
    heroImage: img("1546026423-cc4642628d2b", "Close view of living hard and soft corals on the Great Barrier Reef", "qui nguyen"),
    gallery: [
      img("1582623838120-455da222cdc7", "A dense school of small fish moving through clear blue water", "Francesco Ungaro"),
      img("1581242163722-caf37479b25c", "A clownfish sheltering among the tentacles of an anemone on a coral reef", "Giorgia Doglioni"),
      img("1587139223877-04cb899fa3e8", "Rainforest-covered headland meeting blue sea on the tropical Queensland coast", "Manny Moreno"),
    ],
    overview: {
      heading: "Which side of the *Reef* suits you?",
      paragraphs: [
        "The Reef is less a single place than a coastline of choices. In the far north, Lizard Island sits close to the outer reef and feels almost private, with two dozen beaches and very few people. Further south, the Whitsundays trade remoteness for sheltered sailing, silica sand and a wider spread of lodges. Between them, Port Douglas pairs the reef with the Daintree, the oldest tropical rainforest on earth, and it is often where a first visit begins.",
        "How you reach the coral matters as much as where you stay. Large day boats are efficient, but we prefer smaller vessels with a marine biologist on board, or a private charter that leaves early and reaches a mooring before anyone else. Scenic flights over Heart Reef and Whitehaven are worth the time, and a seaplane landing on a remote sand cay is one of the more memorable ways to spend a morning in Australia.",
        "Your Travel Designer will help you weigh the trade-offs: water clarity against travel time, a single island base against a reef-and-rainforest combination, and how much time you want in the water against time on the deck with a book. Most travellers find that five or six nights in the region, split between two stays, gives the right balance without feeling rushed.",
      ],
    },
    highlights: [
      { title: "Outer reef by private boat", text: "Leave before the day fleets and snorkel ribbon reefs with only your guide and skipper. Visibility on the outer edge is usually far better than on the inshore reefs." },
      { title: "Lizard Island", text: "A national park island with a single lodge, a research station and twenty-four beaches. It is the closest resort to the outer reef and reached by light aircraft from Cairns." },
      { title: "Whitehaven by seaplane", text: "Land in the Whitsundays, walk the swirled sands of Hill Inlet at low tide and be back for a late lunch. Timing the flight to the tide is the detail that makes it work." },
      { title: "Reef and rainforest", text: "Pair coral with the Daintree, where a naturalist can show you cassowaries, ancient fan palms and the creeks that run down to the sea." },
    ],
    bestTime: season(
      ["mixed", "avoid", "mixed", "good", "good", "best", "best", "best", "best", "best", "good", "mixed"],
      {
        2: "Peak of the wet season, with heavy rain and the highest cyclone risk.",
        7: "Humpback and dwarf minke whales pass through the northern reef from June to August.",
        11: "Coral spawning often occurs a few nights after the November full moon.",
      },
    ),
    bestTimeSummary:
      "June to October brings dry weather, calm seas and the clearest water. November to May is warmer and wetter, with marine stingers present, so lycra suits are worn when swimming.",
    gettingThere:
      "Cairns Airport is about three hours by air from Sydney, with Lizard Island a further hour by light aircraft. For the Whitsundays, Hamilton Island has direct flights from Sydney, Melbourne and Brisbane.",
    faqs: [
      { q: "Is the coral still worth seeing?", a: "Yes. The reef has been affected by bleaching events, and some sites have suffered more than others, but large areas remain vibrant. Guides choose moorings day by day based on conditions, which is one reason we favour small, private operators." },
      { q: "Do I need to be a strong swimmer?", a: "No. Most snorkelling is from a moored boat or a pontoon, with flotation vests and guides in the water. Glass-bottom tours, semi-submersibles and scenic flights let non-swimmers see the reef too." },
      { q: "What are stingers and when are they around?", a: "Box and Irukandji jellyfish can be present in tropical waters, mainly from November to May. Operators provide full-length lycra suits, and swimming is restricted to netted areas on mainland beaches during that period." },
      { q: "How many nights should I allow?", a: "Five to six nights suits most travellers, often split between an island and a mainland stay near the Daintree. Allow at least two full days on the water so a single windy day does not cost you the reef." },
    ],
    seo: {
      title: "Great Barrier Reef Luxury Holidays & Island Lodges",
      description:
        "Private Great Barrier Reef journeys: island lodges, outer-reef charters, seaplanes over Whitehaven and the Daintree, planned by one dedicated Travel Designer.",
    },
  },
  {
    slug: "uluru",
    name: "Uluru & the Red Centre",
    region: "Northern Territory",
    group: "iconic",
    topDestination: true,
    partnerStays: 7,
    hook: "Desert dawns, Anangu stories and dinners under a vast sky",
    tagline:
      "The physical and spiritual heart of the continent, experienced slowly, with Aboriginal guides, desert walks and long evenings of starlight.",
    heroImage: img("1529108190281-9a4f620bc2d8", "Uluru rising above the arid plain under a blue sky with wispy cloud", "Photoholgic"),
    gallery: [
      img("1548296404-93c7694b2f91", "Uluru glowing red in low sun above the desert landscape", "Ondrej Machart"),
      img("1557214997-7eae7e0e7aaa", "Uluru seen across the surrounding desert scrub", "Antoine Fabre"),
      img("1602997907233-2cd71a73d6a8", "The silhouette of a rock formation beneath a sky full of stars", "Steven Wei"),
    ],
    overview: {
      heading: "What does it take to really *see* Uluru?",
      paragraphs: [
        "Most people see Uluru from a coach window at sunset and leave the next morning. It deserves more. The rock changes colour by the hour, and walking its base, about ten kilometres, reveals waterholes, rock art and caves that are invisible from the viewing areas. Time spent with an Anangu guide, the traditional owners of this country, turns a famous landmark into a place with law, family and story attached to every crease.",
        "Kata Tjuta, forty minutes' drive west, is just as striking and often quieter. The Valley of the Winds walk threads between its domes in the cool of the morning. Further afield, Kings Canyon and the West MacDonnell Ranges reward an extra two or three days, either by road or by helicopter, and they show how varied the Centre is beyond its best-known silhouette.",
        "Accommodation here is limited, which is part of the appeal. A small number of tented pavilions face the rock directly, with private dinners set out on the dunes. We plan around the light, booking sunrise walks, a late-afternoon camel ride or helicopter flight, and an evening under the southern sky with an astronomer, so that each day has a natural shape and plenty of rest in the heat of the afternoon.",
      ],
    },
    highlights: [
      { title: "Base walk with an Anangu guide", text: "Walk sections of the base with a traditional owner who can share the stories that are appropriate to share. It is the single most important experience in the park." },
      { title: "Kata Tjuta at first light", text: "Start the Valley of the Winds walk early, before the heat, when the domes are lit red and the trail is nearly empty." },
      { title: "Dinner on the dunes", text: "A private table set on a sand dune with Uluru and Kata Tjuta on the horizon, followed by a guided tour of the night sky." },
      { title: "Kings Canyon by helicopter", text: "Fly over the George Gill Range and walk the canyon rim, where sheer sandstone walls drop to the palm-lined Garden of Eden." },
    ],
    bestTime: season(
      ["avoid", "avoid", "mixed", "best", "best", "best", "best", "best", "best", "good", "mixed", "avoid"],
      {
        1: "Daytime temperatures regularly exceed 40°C and walks close early.",
        7: "Clear, mild days but nights can drop below freezing.",
        8: "Wildflowers often appear after winter rain.",
      },
    ),
    bestTimeSummary:
      "April to September is ideal, with warm days and cool to cold nights. December to February is very hot, and some walks close by late morning.",
    gettingThere:
      "Ayers Rock Airport has direct flights from Sydney (about three hours), Melbourne, Brisbane and Alice Springs. Lodges are a short transfer from the terminal.",
    faqs: [
      { q: "Can I climb Uluru?", a: "No. The climb was permanently closed in October 2019 at the request of the Anangu traditional owners. The base walk, guided cultural walks and scenic flights are the respectful ways to experience the rock." },
      { q: "How many nights do I need?", a: "Three nights is a sensible minimum for Uluru and Kata Tjuta. Add two nights if you would like to include Kings Canyon or the West MacDonnell Ranges." },
      { q: "Are there flies?", a: "Bush flies are common in the warmer months, particularly from September to March. Lodges supply fly nets, and they are worth wearing on walks." },
      { q: "Do I need a park pass?", a: "Yes, entry to Uluru-Kata Tjuta National Park requires a pass, which we arrange as part of your itinerary. It covers several consecutive days of entry." },
    ],
    seo: {
      title: "Uluru & Red Centre Luxury Tours and Desert Lodges",
      description:
        "Private Uluru journeys with Anangu guides, Kata Tjuta walks, desert dinners and Kings Canyon by helicopter, designed around the light by your Travel Designer.",
    },
  },
  {
    slug: "sydney",
    name: "Sydney",
    region: "New South Wales",
    group: "iconic",
    topDestination: true,
    partnerStays: 14,
    hook: "A harbour city best seen from the water and the coastal paths",
    tagline:
      "Harbour mornings, ocean pools and long lunches, with private access that shows a quieter side of Australia's best-known city.",
    heroImage: img("1546268060-2592ff93ee24", "Aerial view of the Sydney Harbour Bridge and Opera House", "Jamie Davies"),
    gallery: [
      img("1590716209211-ea74d5f63573", "The Sydney Opera House and city skyline at golden hour", "Nico Smit"),
      img("1554869284-9e692207599b", "Swimmers in an ocean pool on the edge of the sea", "Clarinta"),
      img("1524562865630-b991c6c2f261", "The Sydney Harbour Bridge lit up at night", "Christopher Burns"),
    ],
    overview: {
      heading: "How do you find the *quiet* side of Sydney?",
      paragraphs: [
        "Sydney rewards those who get out on its water. A private launch in the morning, before the ferries are busy, gives you the harbour beaches, the bays of the North Shore and the cliffs of North Head with almost no one around. From the water the city makes sense: a series of headlands and coves, each with its own character, joined by bridges and ferries rather than a single centre.",
        "On land, the coastal walk from Bondi to Coogee is a classic for good reason, but we often suggest the quieter stretches around Manly and the Spit, or the harbour-side tracks of Sydney Harbour National Park. Ocean pools, carved into the rock along the shoreline, are a local ritual, and an early swim followed by breakfast at a beachside café is a fine way to start a day here.",
        "Sydney is also a gateway. The Blue Mountains are two hours west, the Hunter Valley a similar distance north, and Lord Howe Island under two hours by air. We usually recommend three or four nights in the city itself, with a stay in a harbour-view hotel and a mix of private guiding, restaurant bookings and unscheduled time to wander through the city's neighbourhoods at your own pace.",
      ],
    },
    highlights: [
      { title: "Private harbour cruise", text: "A skippered launch to secluded harbour beaches, with lunch on board or ashore at a waterside restaurant." },
      { title: "Behind the sails", text: "A guided tour of the Opera House that goes backstage, followed by a performance or dinner with a view of the harbour." },
      { title: "Coastal walks and ocean pools", text: "Walk the cliffs between beaches with a local guide and stop for a swim in one of the rock pools along the way." },
      { title: "Day in the Blue Mountains", text: "Escape the city for sandstone escarpments, eucalyptus valleys and lookouts over the Three Sisters, with a private guide and driver." },
    ],
    bestTime: season(
      ["good", "good", "best", "best", "good", "mixed", "mixed", "mixed", "good", "best", "best", "good"],
      {
        1: "Warm and humid, with school holidays and busier beaches.",
        12: "New Year's Eve on the harbour books out many months ahead.",
      },
    ),
    bestTimeSummary:
      "Sydney is pleasant year-round. March to May and September to November bring warm, settled days and fewer crowds than the summer school holidays.",
    gettingThere:
      "Sydney Airport has direct international flights from most of Asia, North America and the Middle East. Domestic flights from Adelaide take about two hours, and the city centre is twenty minutes away by car.",
    faqs: [
      { q: "How many nights should I spend in Sydney?", a: "Three to four nights is right for most first visits. That allows a day on the harbour, a day of walks and galleries, and a day trip to the Blue Mountains or Hunter Valley." },
      { q: "Where should I stay?", a: "The Rocks and Circular Quay put you close to the harbour and the Opera House, while Bondi and the eastern suburbs suit travellers who want the beach on their doorstep. Your Travel Designer will match the hotel to how you like to spend your days." },
      { q: "Is it safe to swim at Sydney's beaches?", a: "Yes, when you swim between the red and yellow flags on patrolled beaches. Ocean pools and harbour beaches are calmer options for less confident swimmers." },
      { q: "Can I combine Sydney with the Reef or Uluru?", a: "Easily. Both have direct flights from Sydney, about three hours to Cairns or Ayers Rock, so the city often works as the first or last stop of a longer journey." },
    ],
    seo: {
      title: "Luxury Sydney Holidays: Harbour, Beaches & Beyond",
      description:
        "A private Sydney stay built around the harbour, coastal walks, ocean pools and fine dining, with add-ons to the Blue Mountains, Hunter Valley and Lord Howe.",
    },
  },
  {
    slug: "kangaroo-island",
    name: "Kangaroo Island",
    region: "South Australia",
    group: "iconic",
    topDestination: true,
    partnerStays: 9,
    hook: "Sea lions, wild coastline and a table set with island produce",
    tagline:
      "Sea lions, granite sculptures and long empty beaches, a short flight from Adelaide and one of Australia's finest wildlife regions.",
    heroImage: img("1652593707316-246dec33aed8", "A kangaroo standing on open ground above the ocean on Kangaroo Island", "Zac Edmonds"),
    gallery: [
      img("1697818487965-5c278b7c023a", "Close view of a kangaroo resting in grass", "Mattia Astori"),
      img("1675746056643-8d5280174346", "A lighthouse on a hilltop against the sky", "Richard Lin"),
      img("1656904889109-e59d094ab030", "Waves breaking over a rocky shoreline", "Rod Long"),
    ],
    overview: {
      heading: "Why does Kangaroo Island feel so *wild*?",
      paragraphs: [
        "Kangaroo Island is Australia's third-largest island, about 150 kilometres long, yet it has only a few thousand residents. Separated from the mainland for around ten thousand years, it has kept animals that have struggled elsewhere, and a third of the island is protected as national or conservation park. You will see kangaroos and wallabies at dusk, koalas in the manna gums and echidnas crossing the road, often without looking for them.",
        "The coastline is the island's great drama. At Seal Bay, a ranger can walk you onto the beach among a colony of Australian sea lions. In Flinders Chase National Park, the Remarkable Rocks balance on a granite dome above the Southern Ocean, and New Zealand fur seals haul out beneath the limestone arch of Admirals Arch. The western end is still recovering from the 2019–20 bushfires, and the regrowth is a remarkable thing to see.",
        "The island is also a serious place to eat and drink. Local producers make gin, wine, sheep's-milk cheese and honey from Ligurian bees, and oysters come straight from the water at American River. Three or four nights at a clifftop lodge, with a private guide who blends wildlife, walking and long lunches, shows the island at its best, in every season and every kind of weather.",
      ],
    },
    highlights: [
      { title: "Seal Bay with a ranger", text: "Walk among Australian sea lions resting on the sand, one of the few places in the world where this is possible." },
      { title: "Flinders Chase National Park", text: "See the Remarkable Rocks and Admirals Arch, and walk coastal trails through bushland returning after the fires." },
      { title: "Dusk wildlife drive", text: "A naturalist guide takes you to quiet paddocks and woodland edges where kangaroos, wallabies and koalas are most active." },
      { title: "Island producers", text: "Taste gin at a small distillery, honey from Ligurian bees and oysters shucked at the water's edge." },
    ],
    bestTime: season(
      ["good", "best", "best", "best", "good", "mixed", "mixed", "mixed", "good", "good", "best", "good"],
      {
        1: "Warm and busy with summer holidays, and total fire bans are common.",
        7: "Cool and showery, but sea lions and whales are active and lodges are quiet.",
      },
    ),
    bestTimeSummary:
      "Late spring to autumn (November to April) offers the warmest, most settled weather. Winter is cooler and wetter but good for wildlife and solitude.",
    gettingThere:
      "Flights from Adelaide to Kingscote take about 30 minutes. Alternatively, drive or transfer to Cape Jervis and take the SeaLink ferry, a 45-minute crossing.",
    faqs: [
      { q: "How many nights do I need on Kangaroo Island?", a: "Three nights is ideal. The island is larger than most people expect, and distances between Seal Bay, Flinders Chase and the north coast beaches take time to drive." },
      { q: "Has the island recovered from the bushfires?", a: "Much of the western end burned in 2019–20. The bush is regenerating strongly, wildlife numbers are recovering, and lodges and walking trails have reopened. Seeing the recovery is now part of the experience." },
      { q: "Should I self-drive or use a guide?", a: "You can self-drive, but a private guide adds a great deal. Guides know where animals are likely to be, carry spotting scopes and arrange lunches with local producers that are not open to the public." },
      { q: "Can I combine the island with other parts of South Australia?", a: "Yes, it pairs naturally with Adelaide, the Barossa and McLaren Vale. Many travellers fly into Adelaide, spend a few nights in the wine regions and then take the short flight to the island." },
    ],
    seo: {
      title: "Kangaroo Island Luxury Lodges & Wildlife Journeys",
      description:
        "Private Kangaroo Island journeys: Seal Bay sea lions, Flinders Chase, dusk wildlife drives and island produce, with clifftop lodges near Adelaide.",
    },
  },
  {
    slug: "kimberley",
    name: "The Kimberley",
    region: "Western Australia",
    group: "iconic",
    topDestination: true,
    partnerStays: 8,
    hook: "Gorges, ancient rock art and a coastline seen by very few",
    tagline:
      "One of the planet's last great wildernesses, explored by expedition ship, helicopter and outback station during its short dry season.",
    heroImage: img("1763688506548-e951513ba60c", "Turquoise water meeting red earth and sparse trees on the Kimberley coast", "Rod Long"),
    gallery: [
      img("1547079170-901edfadd685", "Rounded sandstone ranges under a clear blue sky", "Ben Carless"),
      img("1767862370710-5aa66e38892e", "Jagged rock formations beneath a clear blue sky", "Adam Greer"),
      img("1650502518461-c4213d6bbba5", "A waterfall pouring into a pool in remote country", "Isabelle Truong"),
    ],
    overview: {
      heading: "How do you *reach* the Kimberley?",
      paragraphs: [
        "The Kimberley covers an area larger than Germany, with fewer than forty thousand residents and very few sealed roads. That remoteness shapes everything about a visit. The dry season, roughly May to September, is the only practical window, and within it you choose between the coast, the inland gorges and the stations, or a combination of all three. Each requires a different way of travelling.",
        "The coast between Broome and Wyndham is best seen from a small expedition ship. Over ten to fourteen nights, Zodiacs take you up tidal rivers, beneath waterfalls and to galleries of Gwion Gwion and Wandjina rock art. Inland, the Gibb River Road leads to gorges and swimming holes, while a helicopter over the Bungle Bungle Range in Purnululu National Park reveals the striped domes in a way that the ground cannot.",
        "Accommodation ranges from a well-appointed station homestead to a wilderness camp beside a gorge. Comfort here comes from good guiding, cold drinks at sunset and an attentive team rather than marble bathrooms. Your Travel Designer will help you decide whether to sail, fly or drive, and how to combine the Kimberley with Broome and its pearling history at either end.",
      ],
    },
    highlights: [
      { title: "Expedition cruise", text: "Sail the coast between Broome and Wyndham, with daily Zodiac landings at waterfalls, rock-art sites and tidal reef systems." },
      { title: "Bungle Bungle Range", text: "Fly over the beehive domes of Purnululu, then walk into Cathedral Gorge and Echidna Chasm with a local guide." },
      { title: "Horizontal Falls", text: "Watch huge tides force water through two narrow gaps in the McLarty Ranges, seen by seaplane and fast boat." },
      { title: "Station life", text: "Stay on a working cattle station, swim in gorges and spend evenings around a fire with people who live on this land." },
    ],
    bestTime: season(
      ["avoid", "avoid", "avoid", "mixed", "best", "best", "best", "best", "good", "mixed", "avoid", "avoid"],
      {
        4: "Early dry season; waterfalls are full but some roads may still be closed.",
        5: "Waterfalls are at their peak as the dry season begins.",
        10: "Hot and humid as the build-up to the wet season begins.",
      },
    ),
    bestTimeSummary:
      "Travel between May and September, the dry season, when roads open and days are warm and clear. From December to March heavy rain closes most roads and many lodges.",
    gettingThere:
      "Broome is about two and a half hours by air from Perth, with seasonal direct flights from the east coast. Kununurra, the eastern gateway, has flights from Perth and Darwin.",
    faqs: [
      { q: "Is an expedition cruise or a land journey better?", a: "The coast is only accessible by ship or air, so a cruise is the best way to see waterfalls and rock art there. Land journeys suit those who want gorges, stations and the Bungle Bungle Range. Many travellers combine a short cruise with a few nights inland." },
      { q: "How comfortable is the accommodation?", a: "Expedition ships and the best wilderness lodges are very comfortable, with ensuite rooms and excellent food. Facilities are simpler than city hotels, and connectivity is limited." },
      { q: "Are there crocodiles?", a: "Yes, saltwater crocodiles live in rivers and along the coast. Guides know which gorges and pools are safe for swimming, and you should only swim where they advise." },
      { q: "How far ahead should I book?", a: "Expedition cruises and the best lodges often fill twelve to eighteen months in advance because the season is short. It is worth planning early, particularly for June and July." },
    ],
    seo: {
      title: "Kimberley Luxury Expeditions, Cruises & Lodges",
      description:
        "Private Kimberley journeys in the dry season: expedition cruises, Bungle Bungle flights, Horizontal Falls and station stays, planned by a Travel Designer.",
    },
  },
  {
    slug: "tasmania",
    name: "Tasmania",
    region: "Tasmania",
    group: "iconic",
    topDestination: true,
    partnerStays: 16,
    hook: "Granite coastline, alpine lakes and some of the country's best food",
    tagline:
      "A compact island of wilderness walks, cool-climate wine and serious art, where a few days can hold mountains, beaches and memorable dinners.",
    heroImage: img("1627110466624-436b91b5d20b", "A blue lake below mountains in Tasmania on a clear day", "Lochie Riordan"),
    gallery: [
      img("1599411989681-3b7f4c983220", "A timber boatshed on a lake beneath a rugged mountain", "Sean Robertson"),
      img("1620962427047-7bb126260abd", "Granite rocks at the edge of the sea", "Christian Devereux"),
      img("1595215296432-4abf071b4d91", "A blue lake surrounded by mountains under a clear sky", "Tim Hart"),
    ],
    overview: {
      heading: "Where should a first *Tasmania* journey begin?",
      paragraphs: [
        "Tasmania is small enough to cross in a day, yet nearly half of it is protected as national park or reserve. Most journeys begin in Hobart, where MONA, the Salamanca waterfront and a strong restaurant culture set the tone. From there the island opens out: the Tasman Peninsula with its sea cliffs, Bruny Island with oysters and cheese, and the quiet wombat country of Maria Island.",
        "The east coast is where many travellers spend the heart of their stay. Freycinet's pink granite and the curve of Wineglass Bay draw people for good reason, and lodges here face the Hazards across the water. Further north, the Bay of Fires lines its boulders with orange lichen. Inland, Cradle Mountain offers alpine walks, glacial lakes and an excellent chance of seeing wombats grazing in the late afternoon.",
        "Food and wine run through every itinerary. Cool-climate pinot noir and sparkling wine from the Tamar and Coal River valleys, seafood from clean southern waters and an abundance of small producers make Tasmania one of Australia's great places to eat. We usually suggest seven to ten days, with private guides for walks and a driver so you can enjoy the cellar doors.",
      ],
    },
    highlights: [
      { title: "Freycinet and Wineglass Bay", text: "Walk to the lookout above Wineglass Bay, then take a boat or kayak along the granite coastline of the Freycinet Peninsula." },
      { title: "Cradle Mountain", text: "Circle Dove Lake beneath the jagged peak, and watch wombats graze in the button grass at dusk." },
      { title: "MONA and Hobart", text: "Arrive at the Museum of Old and New Art by ferry up the Derwent, then spend the evening in Hobart's restaurants." },
      { title: "Guided multi-day walks", text: "The Three Capes, Maria Island and Bay of Fires walks combine full days on foot with comfortable lodges and good food." },
    ],
    bestTime: season(
      ["best", "best", "best", "good", "mixed", "mixed", "mixed", "mixed", "mixed", "good", "good", "best"],
      {
        4: "Autumn colour; the native deciduous beech, fagus, turns gold in late April and May.",
        6: "Winter brings the Dark Mofo festival in Hobart and a chance of the aurora australis.",
      },
    ),
    bestTimeSummary:
      "December to March offers the longest days and mildest weather for walking. Autumn is crisp and colourful, while winter is cold but atmospheric and quiet.",
    gettingThere:
      "Hobart and Launceston have direct flights from Melbourne (about an hour), Sydney (around two hours), Brisbane and Adelaide. The Spirit of Tasmania ferry also crosses overnight from Geelong.",
    faqs: [
      { q: "How long should I spend in Tasmania?", a: "Seven to ten days lets you see Hobart, the east coast and Cradle Mountain without long days in the car. Five days works if you focus on one or two regions." },
      { q: "Is Tasmania cold?", a: "Summers are mild, typically 18–24°C, and the weather can change quickly, especially in the highlands. Pack layers and a waterproof jacket at any time of year." },
      { q: "Do I need to be fit for the walks?", a: "Many of the best walks are short, like the Wineglass Bay lookout or the Dove Lake circuit. Guided multi-day walks require reasonable fitness, typically walking 10–20 kilometres a day." },
      { q: "Should I self-drive?", a: "Roads are good but often winding. Many travellers combine self-drive sections with a private driver-guide for wine regions and longer transfers." },
    ],
    seo: {
      title: "Luxury Tasmania Holidays: Walks, Wine & Wilderness",
      description:
        "Private Tasmania journeys across Hobart, Freycinet, Cradle Mountain and the Bay of Fires, combining guided walks, cool-climate wine and fine island produce.",
    },
  },

  /* ------------------------------------------------------------------ */
  /* States & territories                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "queensland",
    name: "Queensland",
    region: "Australia's north-east",
    group: "states",
    topDestination: false,
    partnerStays: 32,
    hook: "Reef, rainforest and island lodges along a warm coastline",
    tagline:
      "From the Daintree to the Whitsundays and the outback beyond, a state of warm water, ancient forest and unhurried island life.",
    heroImage: img("1610056352054-a68fe4f998e1", "Aerial view of white sandbars and turquoise water at Whitehaven Beach", "Lochie Riordan"),
    gallery: [
      img("1598522038344-293c492adaf0", "Aerial view of forested islands and blue sea in the Whitsundays", "Lochie Riordan"),
      img("1709690053808-2da854a0d770", "Dense green rainforest canopy", "Aaron De Wit"),
      img("1514907283155-ea5f4094c70c", "Blue and grey reef fish swimming near corals", "Shaun Low"),
    ],
    overview: {
      heading: "Which corner of *Queensland* fits your trip?",
      paragraphs: [
        "Queensland is vast, and the coast alone stretches more than two thousand kilometres. In the north, the Daintree and Cape Tribulation are where the rainforest meets the reef, and Port Douglas makes an easy base. The Whitsundays offer sailing and island lodges, while southern islands such as Lady Elliot and Heron sit directly on the reef with turtles nesting in summer.",
        "Away from the coast, the Queensland outback has its own pull: dinosaur fossils near Winton, the Channel Country after rain, and remote stations reached by light aircraft. Brisbane and the Gold Coast hinterland add a gentler mix of rainforest walks and good restaurants. Your Travel Designer will help you choose two or three areas and link them without long days of travel.",
      ],
    },
    highlights: [
      { title: "The Daintree", text: "Walk ancient rainforest with an Aboriginal guide and cruise the Daintree River looking for crocodiles and birds." },
      { title: "Whitsunday sailing", text: "Charter a crewed yacht among the islands and anchor in quiet bays overnight." },
      { title: "Southern reef islands", text: "Lady Elliot and Heron islands sit on the reef itself, with turtles and manta rays close to shore." },
      { title: "Outback by air", text: "Fly to remote stations and fossil sites in central Queensland for a few days of space and silence." },
    ],
    bestTime: season(
      ["mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "best", "good", "good", "mixed"],
      {
        1: "Wet season in the tropical north, but turtle hatching on southern reef islands.",
        8: "Peak humpback whale season off the coast.",
      },
    ),
    bestTimeSummary:
      "May to September brings dry, sunny weather and calm seas across the tropical north. The summer months are hot and humid, with tropical rain in the north.",
    gettingThere:
      "Brisbane, Cairns and Hamilton Island have direct flights from Sydney and Melbourne, about one and a half to three hours. Light aircraft and seaplanes connect the islands.",
    faqs: [
      { q: "Is the wet season a bad time to visit?", a: "Not necessarily. Rain often falls in short afternoon bursts and the rainforest is at its most lush. Some roads and reef trips can be affected, so flexibility is useful." },
      { q: "Can I see the reef from the Whitsundays?", a: "Yes. Day trips and scenic flights reach the outer reef, including Heart Reef, and the fringing reefs around the islands offer good snorkelling." },
      { q: "How long should I spend in Queensland?", a: "Seven to ten days allows two or three regions, such as the Daintree, the reef and a Whitsunday island. Shorter visits work well when focused on one area." },
    ],
    seo: {
      title: "Luxury Queensland Holidays: Reef, Rainforest & Islands",
      description:
        "Private Queensland journeys linking the Great Barrier Reef, the Daintree, Whitsunday islands and the outback, with handpicked lodges and expert guides.",
    },
  },
  {
    slug: "new-south-wales",
    name: "New South Wales",
    region: "Australia's south-east",
    group: "states",
    topDestination: false,
    partnerStays: 26,
    hook: "Harbour city, sandstone mountains and an island in the Tasman",
    tagline:
      "Sydney, the Blue Mountains, the Hunter Valley and Lord Howe Island, linked by short drives and flights into one easy journey.",
    heroImage: img("1665395492464-fa1da74d2e5c", "A rocky cliff and valley in the Blue Mountains with the Three Sisters in the distance", "Calvin Kurlekar"),
    gallery: [
      img("1506973035872-a4ec16b8e8d9", "The Sydney Opera House in daylight", "Dan Freeman"),
      img("1702538861107-53d5a56be28e", "A wide view across the forested valleys of the Blue Mountains", "Michael Pohl"),
      img("1608682207726-499ae8443334", "A hot air balloon drifting over hills at sunset", "Noah hill"),
    ],
    overview: {
      heading: "What lies *beyond* Sydney?",
      paragraphs: [
        "Most visitors to New South Wales begin in Sydney and stay there, which leaves a great deal unseen. Two hours west, the Blue Mountains open into deep eucalyptus valleys and sandstone escarpments, with lodges set on the edge of the World Heritage area. To the north, the Hunter Valley has some of Australia's oldest vineyards, known particularly for semillon and shiraz.",
        "Further afield, Lord Howe Island is a two-hour flight from Sydney and limits visitor numbers to around four hundred at a time. The far south coast offers whale watching and empty beaches, and the Snowy Mountains suit summer walking or winter skiing. Your Travel Designer will help you combine the city with one or two of these regions at a comfortable pace.",
      ],
    },
    highlights: [
      { title: "Lord Howe Island", text: "Snorkel the world's southernmost coral reef and climb Mount Gower with a local guide." },
      { title: "Blue Mountains lodges", text: "Stay on the edge of the escarpment and walk among waterfalls and cliffs at dawn." },
      { title: "Hunter Valley", text: "Private tastings with winemakers, followed by long lunches among the vines." },
      { title: "South Coast whales", text: "Watch humpbacks migrate past Jervis Bay and Eden between May and November." },
    ],
    bestTime: season(
      ["good", "good", "best", "best", "good", "mixed", "mixed", "mixed", "good", "best", "best", "good"],
      {
        7: "Snow season in the Snowy Mountains; cool, clear days in Sydney.",
        10: "Lord Howe's seabirds return and the weather warms.",
      },
    ),
    bestTimeSummary:
      "Autumn (March to May) and spring (September to November) are the most comfortable seasons across the state. Summer suits the coast and Lord Howe.",
    gettingThere:
      "Sydney Airport is the main gateway, with flights to Lord Howe Island taking around two hours. The Blue Mountains and Hunter Valley are both about two hours by road.",
    faqs: [
      { q: "Is Lord Howe Island worth the trip?", a: "Yes, for those who value peace and nature. Visitor numbers are capped, there is little mobile coverage, and the island offers outstanding walking, snorkelling and birdlife." },
      { q: "Can I visit the Blue Mountains as a day trip?", a: "Yes, but an overnight stay lets you walk at dawn and dusk when the light is best and the lookouts are quiet." },
      { q: "When is the best time for the Hunter Valley?", a: "Harvest, from late January to March, is lively. Autumn and spring are mild and comfortable for exploring cellar doors." },
    ],
    seo: {
      title: "Luxury New South Wales Holidays Beyond Sydney",
      description:
        "Private New South Wales journeys combining Sydney with the Blue Mountains, Hunter Valley wine country, Lord Howe Island and the quiet South Coast.",
    },
  },
  {
    slug: "victoria",
    name: "Victoria",
    region: "Australia's south-east",
    group: "states",
    topDestination: false,
    partnerStays: 22,
    hook: "Laneway dining, cool-climate wine and a famous coastal drive",
    tagline:
      "Melbourne's restaurants and galleries, the Great Ocean Road and the vineyards of the Yarra Valley and Mornington Peninsula.",
    heroImage: img("1596430222039-4a2d7b4cd767", "Limestone stacks rising from the sea along the Great Ocean Road coast", "Wee Ping Khoo"),
    gallery: [
      img("1535796726072-82d5a7395525", "Aerial view of a coastal road running beside the sea", "Tim Patch"),
      img("1585217514204-d025f2f1b116", "A green and yellow tram on a Melbourne street", "Daniel Pelaez Duque"),
      img("1596527199903-6cdaacee1208", "A bridge over the Yarra River with Melbourne's city buildings behind", "Paul Macallan"),
    ],
    overview: {
      heading: "Is Victoria a state best *tasted*?",
      paragraphs: [
        "Melbourne is Australia's food capital in the eyes of many, with laneway cafés, ambitious restaurants and a strong arts scene centred on the National Gallery of Victoria. An hour away, the Yarra Valley and Mornington Peninsula produce elegant pinot noir and chardonnay, and both have excellent places to stay and eat among the vines. Cellar doors here are often small and family-run, and a private guide can open doors that are closed to walk-in visitors.",
        "The Great Ocean Road runs west along cliffs and surf beaches to the limestone stacks of the Twelve Apostles. Taken slowly, with a night or two on the way, it includes rainforest in the Otways and koalas in the trees. Inland, the Grampians offer walking, Aboriginal rock art and good regional dining, while Phillip Island's little penguins return to shore each evening.",
      ],
    },
    highlights: [
      { title: "Great Ocean Road", text: "Drive the coast with a guide, walk in the Otways and see the Twelve Apostles by helicopter." },
      { title: "Melbourne's table", text: "Book tables at the city's best restaurants and explore its laneways with a local food writer." },
      { title: "Yarra Valley", text: "Private tastings, a hot air balloon at dawn and lunch at a vineyard restaurant." },
      { title: "The Grampians", text: "Walk sandstone ranges and visit rock art sites in Gariwerd with an Aboriginal guide." },
    ],
    bestTime: season(
      ["good", "best", "best", "best", "good", "mixed", "mixed", "mixed", "mixed", "good", "good", "good"],
      { 3: "Settled weather and autumn harvest in the wine regions." },
    ),
    bestTimeSummary:
      "February to April brings warm, stable weather and harvest in the wine regions. Winter is cool but suits Melbourne's restaurants and galleries.",
    gettingThere:
      "Melbourne Airport has direct international flights and is about one and a half hours from Sydney by air. The Great Ocean Road starts about ninety minutes from the city by car.",
    faqs: [
      { q: "How long does the Great Ocean Road take?", a: "The drive can be done in a long day, but two or three days lets you walk, stop for lunch and see the Twelve Apostles at sunset." },
      { q: "Is Melbourne's weather really changeable?", a: "Yes, it can shift several times in a day, particularly in spring. Layers and an umbrella are sensible." },
      { q: "Can I see wildlife near Melbourne?", a: "Yes. Phillip Island's little penguins, koalas along the Great Ocean Road and kangaroos in the Grampians are all within reach." },
    ],
    seo: {
      title: "Luxury Victoria Holidays: Melbourne, Wine & Coast",
      description:
        "Private Victoria journeys through Melbourne's restaurants and galleries, the Great Ocean Road, the Grampians and the Yarra Valley and Mornington wine regions.",
    },
  },
  {
    slug: "south-australia",
    name: "South Australia",
    region: "South Australia",
    group: "states",
    topDestination: false,
    partnerStays: 24,
    hook: "Our home state of great wine, wild islands and ancient ranges",
    tagline:
      "Adelaide, the Barossa and McLaren Vale, Kangaroo Island and the Flinders Ranges, the state we know best and call home.",
    heroImage: img("1776861671778-f7ba46f820fa", "A winery entrance with vineyard and rolling hills", "Rafid Tahmid"),
    gallery: [
      img("1472352327492-9765783b74e1", "Clusters of white grapes in a vineyard at golden hour", "Thomas Schaefer"),
      img("1512719994953-eabf50895df7", "Cricket players on the field at Adelaide Oval", "Marcus Wallis"),
      img("1596017497096-90ee17fb4e82", "A wooden jetty stretching out over the sea", "Syed Hadi"),
    ],
    overview: {
      heading: "Why do we call *South Australia* home?",
      paragraphs: [
        "We are based in Adelaide, so South Australia is the region we know most closely. Within an hour of the city lie the Barossa, Clare Valley, McLaren Vale and the Adelaide Hills, together producing many of the country's finest wines. Adelaide itself is easy to enjoy, with a strong food scene, a central market and a calendar of festivals in late summer.",
        "Beyond the vines, the state has striking natural variety. Kangaroo Island is thirty minutes by air, the ancient Flinders Ranges are a short flight north, and the Eyre Peninsula offers swimming with sea lions and some of Australia's best oysters. Our Travel Designers have stayed, eaten and walked in all of these places, and it shows in the detail of every itinerary we design here.",
      ],
    },
    highlights: [
      { title: "Barossa and McLaren Vale", text: "Taste old-vine shiraz with winemakers and enjoy lunch in historic cellars." },
      { title: "Flinders Ranges", text: "Fly over Wilpena Pound and explore ancient landscapes with an Adnyamathanha guide." },
      { title: "Kangaroo Island", text: "Sea lions, wild coastline and island produce, just thirty minutes from Adelaide." },
      { title: "Eyre Peninsula", text: "Swim with sea lions at Baird Bay and taste Coffin Bay oysters at the water's edge." },
    ],
    bestTime: season(
      ["good", "good", "best", "best", "good", "mixed", "mixed", "mixed", "good", "best", "best", "good"],
      {
        3: "Vintage season in the wine regions and Adelaide's festival period winds down.",
        7: "Mild winter days are a good time for the Flinders Ranges.",
      },
    ),
    bestTimeSummary:
      "Spring and autumn are ideal for wine regions and the coast. The Flinders Ranges are best from April to October, avoiding summer heat.",
    gettingThere:
      "Adelaide Airport is about two hours from Sydney and just over an hour from Melbourne, and twenty minutes from the city. Regional flights reach Kangaroo Island, the Flinders and the Eyre Peninsula.",
    faqs: [
      { q: "How many wine regions can I visit in one trip?", a: "Two or three is comfortable. The Barossa, McLaren Vale and Adelaide Hills are all within an hour of the city, so you can stay in one and visit others as day trips." },
      { q: "Is the Flinders Ranges hot in summer?", a: "Yes, temperatures often exceed 35°C from December to February. The cooler months are much better for walking." },
      { q: "Can I combine South Australia with other states?", a: "Easily. Adelaide has direct flights to most cities and to Alice Springs, so it pairs well with Uluru or a journey east to Melbourne." },
    ],
    seo: {
      title: "Luxury South Australia Holidays: Wine & Wilderness",
      description:
        "Private South Australia journeys planned from our Adelaide home: the Barossa, McLaren Vale, Kangaroo Island, the Flinders Ranges and the Eyre Peninsula.",
    },
  },
  {
    slug: "western-australia",
    name: "Western Australia",
    region: "Australia's west",
    group: "states",
    topDestination: false,
    partnerStays: 28,
    hook: "Indian Ocean coastline, wine country and remote northern reefs",
    tagline:
      "Margaret River, Ningaloo Reef, the Kimberley and Perth, spread across a third of the continent and connected by short flights.",
    heroImage: img("1615119426553-bfdabf6f3bd4", "Aerial view of a white-sand beach and clear water in Western Australia", "Corey Serravite"),
    gallery: [
      img("1589528273672-181f1ed3b317", "Aerial view of green bushland beside blue sea", "Tom Öhlin"),
      img("1581929798475-10fbceb99037", "Rock formations in clear blue sea", "Tom Öhlin"),
      img("1755717390548-fba83921bc2b", "A small boat floating on turquoise water among sandbars", "Bob Brewer"),
    ],
    overview: {
      heading: "How do you plan for a state this *large*?",
      paragraphs: [
        "Western Australia covers a third of the continent, so the first decision is which part to see. In the south-west, Margaret River combines world-class wine with surf beaches, karri forest and fine dining. Further north, Ningaloo Reef lies close to shore, where whale sharks gather from March to July and humpbacks pass in winter. Lodges here are low-key tented camps set in the dunes of Cape Range National Park.",
        "The Kimberley in the far north offers gorges, rock art and expedition cruising in the dry season. Perth and Fremantle are relaxed bases with good food and river views, and Rottnest Island, a short ferry ride away, is home to the quokka. Distances are large, so your Travel Designer will plan with flights rather than long drives, and will help you decide which regions are worth the extra time.",
      ],
    },
    highlights: [
      { title: "Swim with whale sharks", text: "Snorkel alongside the world's largest fish on Ningaloo Reef between March and July." },
      { title: "Margaret River", text: "Private tastings, forest walks and long lunches overlooking vineyards and the Indian Ocean." },
      { title: "Rottnest Island", text: "Cycle between quiet bays, swim in clear water and meet the island's quokkas." },
      { title: "The Kimberley", text: "Gorges, waterfalls and ancient rock art in one of the world's great wildernesses." },
    ],
    bestTime: season(
      ["good", "good", "best", "best", "good", "good", "good", "good", "best", "best", "good", "good"],
      {
        4: "Whale shark season at Ningaloo, roughly March to July.",
        9: "Wildflower season across the south-west.",
      },
    ),
    bestTimeSummary:
      "Spring brings wildflowers and mild weather in the south. The north is best from May to September, while whale shark season runs from about March to July.",
    gettingThere:
      "Perth is about four and a half to five hours by air from Sydney and has direct flights from Asia and London. Domestic flights link Perth with Exmouth, Broome and Kununurra.",
    faqs: [
      { q: "Can I see the north and south in one trip?", a: "Yes, with flights. Ten to fourteen days allows Margaret River, Ningaloo and a few days in the Kimberley or Broome." },
      { q: "When can I swim with whale sharks?", a: "The season usually runs from March to July at Ningaloo. Humpback whale swims are possible from August to October." },
      { q: "Is Perth worth a stay?", a: "Yes, for two or three nights. It has good restaurants, a lively Fremantle port and Rottnest Island a short ferry ride away." },
    ],
    seo: {
      title: "Luxury Western Australia Holidays & Coastal Journeys",
      description:
        "Private Western Australia journeys linking Margaret River wine country, Ningaloo's whale sharks, Rottnest, Perth and the wild gorges of the Kimberley coast.",
    },
  },
  {
    slug: "northern-territory",
    name: "Northern Territory",
    region: "Australia's north",
    group: "states",
    topDestination: false,
    partnerStays: 12,
    hook: "Desert monoliths, tropical wetlands and living Aboriginal culture",
    tagline:
      "From Uluru and the Red Centre to the wetlands of Kakadu and Arnhem Land, a territory of deep culture and vast country.",
    heroImage: img("1589138036184-582d8adc803f", "Escarpment and river under blue sky in Kakadu National Park", "Vladimir Haltakov"),
    gallery: [
      img("1589137837093-32fb8407958d", "A water bird standing in shallow wetlands", "Vladimir Haltakov"),
      img("1654692870756-ea1ebcb8be1d", "A great rock rising from the desert of the Red Centre", "Trevor McKinnon"),
      img("1612807831838-5d74ee4abddc", "Star trails over the outback at night", "Steven Wei"),
    ],
    overview: {
      heading: "Desert or *wetland*: which Territory will you see?",
      paragraphs: [
        "The Northern Territory holds two very different worlds. In the south, the Red Centre has Uluru, Kata Tjuta, Kings Canyon and the West MacDonnell Ranges, with dry heat and huge night skies. In the tropical Top End, Kakadu and Arnhem Land offer floodplains, escarpments, rock art galleries and abundant birdlife. The two are around 1,500 kilometres apart, so each deserves its own time.",
        "Both regions have a strong Aboriginal presence, and the most memorable experiences here involve local guides who share their country. Many travellers combine the two with a flight between Alice Springs or Ayers Rock and Darwin, spending three or four nights in each. Guided cultural experiences, from bush food walks to rock art interpretation, are central to how we plan here, and they are often the moments travellers remember long after the journey ends.",
      ],
    },
    highlights: [
      { title: "Kakadu wetlands", text: "Cruise Yellow Water at dawn among crocodiles, jabiru and magpie geese." },
      { title: "Arnhem Land", text: "Visit remote communities and rock art sites by permit with Aboriginal guides." },
      { title: "Uluru and Kata Tjuta", text: "Walk the base of Uluru with an Anangu guide and explore Kata Tjuta at dawn." },
      { title: "Litchfield National Park", text: "Swim in safe waterholes beneath waterfalls, a short drive from Darwin." },
    ],
    bestTime: season(
      ["avoid", "avoid", "mixed", "good", "best", "best", "best", "best", "good", "mixed", "mixed", "avoid"],
      {
        1: "Top End wet season and very hot conditions in the Centre.",
        6: "Dry season in the Top End and cool, clear days in the Centre.",
      },
    ),
    bestTimeSummary:
      "May to September is ideal across the Territory, with dry weather in the Top End and mild days in the Centre. Summer is very hot in the south and wet in the north.",
    gettingThere:
      "Darwin is about four and a half hours by air from Sydney, and Ayers Rock about three. Flights connect Darwin with Alice Springs and Ayers Rock.",
    faqs: [
      { q: "Can I combine Kakadu and Uluru?", a: "Yes, by flying between Darwin and Ayers Rock or Alice Springs. Allow at least three nights in each region." },
      { q: "Do I need a permit for Arnhem Land?", a: "Yes, entry requires a permit from the Northern Land Council. We arrange this as part of a guided visit." },
      { q: "Is the wet season worth visiting?", a: "It can be dramatic, with storms and full waterfalls, but many roads close and some sites are inaccessible. Scenic flights are a good way to see the Top End during the wet." },
    ],
    seo: {
      title: "Luxury Northern Territory Holidays: Uluru & Kakadu",
      description:
        "Private Northern Territory journeys combining Uluru, Kata Tjuta and Kings Canyon with Kakadu's wetlands and Arnhem Land, guided by local Aboriginal hosts.",
    },
  },

  /* ------------------------------------------------------------------ */
  /* Beyond Australia                                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "Pacific",
    group: "beyond",
    topDestination: false,
    partnerStays: 30,
    hook: "Alpine lakes, fiords and lodges set deep in quiet country",
    tagline:
      "Glacial lakes, fiords and vineyards across two islands, with luxury lodges and helicopters to reach places roads cannot.",
    heroImage: img("1465056836041-7f43ac27dcb5", "A still lake beneath mountains in New Zealand", "Tobias Keller"),
    gallery: [
      img("1528988719300-046ff7faf8cb", "People on a rocky peak overlooking a lake and snow-capped mountains", "Aaron Sebastian"),
      img("1528287942171-fbe365d1d9ac", "Sheep grazing on rolling green hills in a misty valley at golden hour", "Boon Panthalany"),
      img("1508971607899-a238a095d417", "Aerial view of a beach backed by mountains", "Rod Long"),
    ],
    overview: {
      heading: "North Island, South Island, or *both*?",
      paragraphs: [
        "New Zealand is a short flight from Australia, yet it feels like another world. The South Island holds most of the drama: Queenstown and its lakes, the fiords of Fiordland, the glaciers of the West Coast and the vineyards of Central Otago and Marlborough. Lodges are often set on large private estates, with fly fishing, walking and helicopter access on the doorstep.",
        "The North Island offers Māori culture in Rotorua, the geothermal landscapes of Taupō, and the beaches and islands of the Bay of Islands and the Hauraki Gulf. For a first visit we often suggest ten to fourteen days across both islands, using short flights and helicopters to avoid long drives. That leaves more time for what the country does best: walking, fishing, and long dinners at lodges with very few other guests.",
      ],
    },
    highlights: [
      { title: "Milford Sound by air", text: "Fly over the Southern Alps into Fiordland, cruise the sound and return the same day." },
      { title: "Central Otago wine", text: "Taste pinot noir among the dry hills and schist landscapes around Queenstown." },
      { title: "Heli-hiking", text: "Land on remote ridges and glaciers for walks that would otherwise take days to reach." },
      { title: "Bay of Islands", text: "Sail among the islands and learn about the signing of the Treaty of Waitangi." },
    ],
    bestTime: season(
      ["best", "best", "best", "good", "mixed", "good", "good", "good", "mixed", "good", "good", "best"],
      {
        4: "Autumn colour around Queenstown and Arrowtown.",
        7: "Ski season in Queenstown and Wānaka, from June to August.",
      },
    ),
    bestTimeSummary:
      "December to March offers long, warm days for walking and touring. June to August is ski season in the south, and autumn brings colour and quieter roads.",
    gettingThere:
      "Auckland is about three hours from Sydney, and Queenstown has direct flights from Sydney, Melbourne and Brisbane. Domestic flights and helicopters link the regions.",
    faqs: [
      { q: "Do Australians need a visa for New Zealand?", a: "No. Australian citizens can enter without a visa. Many other nationalities need a New Zealand Electronic Travel Authority (NZeTA), which should be applied for before travel." },
      { q: "How long should I spend?", a: "Ten to fourteen days allows a good look at both islands. A week works well if you focus on the South Island." },
      { q: "Is it worth going in winter?", a: "Yes, for skiing, quiet lodges and snow-covered mountains. Some alpine roads and walks are affected by weather, so allow flexibility." },
    ],
    seo: {
      title: "Luxury New Zealand Holidays: Lodges, Lakes & Fiords",
      description:
        "Private New Zealand journeys across Queenstown, Fiordland, Central Otago and the North Island, with luxury lodges, heli-hiking and planning from Adelaide.",
    },
  },
  {
    slug: "fiji",
    name: "Fiji",
    region: "Pacific",
    group: "beyond",
    topDestination: false,
    partnerStays: 15,
    hook: "Private islands, warm reefs and a genuinely welcoming culture",
    tagline:
      "Over three hundred islands in warm, clear water, with private-island resorts, soft-coral reefs and Fijian hospitality.",
    heroImage: img("1530736822234-c8562cb0a710", "Bird's-eye view of a small island ringed by reef in Fiji", "Prem Kurumpanai"),
    gallery: [
      img("1483683804023-6ccdb62f86ef", "Bird's-eye view of islands and shallow reefs", "Denys Nevozhai"),
      img("1575000898743-9128b75a89b7", "A white and blue boat on open ocean", "Nicolas Weldingh"),
      img("1717361054046-eda52d552736", "A large swimming pool surrounded by palm trees", "Louise Smith"),
    ],
    overview: {
      heading: "Which *island* will be yours?",
      paragraphs: [
        "Fiji's appeal lies in its warmth, both in the water and in the people. The Mamanuca and Yasawa groups, west of Nadi, are reached by seaplane or boat and offer white-sand beaches and calm lagoons. To the north, Vanua Levu and Taveuni are greener and quieter, known for the soft corals of the Rainbow Reef and the Somosomo Strait. Inland, rainforest and waterfalls offer a change from the beach.",
        "Private-island resorts are a particular strength here, with only a handful of villas on each island. Days might include diving, a visit to a village for a kava ceremony, or simply time on the beach. Fiji is an easy add-on to an Australian journey, or a restful stay on its own. We favour resorts that employ and support the surrounding villages, which shapes the warmth of the welcome.",
      ],
    },
    highlights: [
      { title: "Private-island resorts", text: "Stay on an island with only a few villas, where staff learn your name on arrival." },
      { title: "Rainbow Reef", text: "Dive or snorkel among the soft corals of the Somosomo Strait near Taveuni." },
      { title: "Village visit", text: "Join a kava ceremony and learn about Fijian customs with local hosts." },
      { title: "Seaplane arrival", text: "Fly over reefs and islands on your way to the Mamanuca or Yasawa groups." },
    ],
    bestTime: season(
      ["mixed", "avoid", "mixed", "good", "best", "best", "best", "best", "best", "best", "good", "mixed"],
      {
        2: "Peak of the wet season and cyclone risk.",
        7: "Dry, mild and clear; popular with Australian and New Zealand school holidays.",
      },
    ),
    bestTimeSummary:
      "May to October is the dry season, with lower humidity and clear water. November to April is warmer and wetter, with a risk of cyclones from January to March.",
    gettingThere:
      "Nadi International Airport is about four hours from Sydney and three from Brisbane. Seaplanes, helicopters and domestic flights connect to outer islands.",
    faqs: [
      { q: "Do Australians need a visa for Fiji?", a: "No. Australian passport holders receive a visitor permit on arrival for up to four months. Your passport must be valid for at least six months beyond your stay." },
      { q: "Is Fiji suitable for families?", a: "Yes. Many resorts welcome children and run kids' clubs, while some private-island resorts are adults-only. Your Travel Designer will match the stay to your group." },
      { q: "Can I combine Fiji with an Australian trip?", a: "Yes. Direct flights from Sydney and Brisbane make Fiji an easy final stop for a few days of rest." },
    ],
    seo: {
      title: "Luxury Fiji Holidays: Private Islands & Reef Escapes",
      description:
        "Private Fiji journeys with island resorts, seaplane arrivals, Rainbow Reef diving and village visits, planned by a Travel Designer and paired with Australia.",
    },
  },
];
