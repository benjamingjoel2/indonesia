/**
 * Partner stays.
 *
 * NOTE: priceFrom values are indicative "from" figures in AUD, per person, per night,
 * sharing. They vary by season, room category and length of stay and must be confirmed
 * with each property before publishing or quoting.
 *
 * Images are representative photographs of each property's landscape or setting, not of
 * the properties themselves.
 */
import type { Stay } from "./types";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`;

export const stays: Stay[] = [
  {
    slug: "southern-ocean-lodge",
    name: "Southern Ocean Lodge",
    type: "lodge",
    destination: "kangaroo-island",
    area: "Hanson Bay, Kangaroo Island",
    tier: "ultra",
    summary:
      "A clifftop lodge on Kangaroo Island's wild south-west coast, rebuilt after the 2019–20 bushfires and facing nothing but the Southern Ocean.",
    description: [
      "Southern Ocean Lodge sits low along the limestone cliffs above Hanson Bay, on the island's remote south-west coast. The original lodge was lost in the bushfires of 2019–20, and the rebuilt version reopened in late 2023 with a quieter, more restrained architecture. Every suite faces the sea, and the long glass walls make the weather part of the stay, whether it is a still blue morning or a winter front rolling in.",
      "The stay is all-inclusive in the fullest sense. Meals draw on Kangaroo Island produce and South Australian wine, the bar is open throughout, and the lodge's guides lead small-group outings each day. Typical choices include walks in Flinders Chase National Park, time with the sea lions at Seal Bay, and a quiet evening drive to look for kangaroos, wallabies and the island's distinctive birdlife.",
      "The Southern Spa offers treatments using Australian botanicals, and the main lodge has a sunken lounge and a library for unhurried afternoons. Most guests arrive by short flight from Adelaide to Kingscote, followed by a transfer across the island; private charter direct to the region is also possible. We suggest at least three nights so the coast, the national park and the island's farms all get their due.",
    ],
    heroImage: {
      src: u("1698754403631-a3ca8f9999d1"),
      alt: "Elevated view over the ocean from a coastal headland on Kangaroo Island",
      credit: "Photo: RE Walsh / Unsplash",
    },
    gallery: [
      {
        src: u("1656904889109-e59d094ab030"),
        alt: "Waves breaking over a rocky shoreline",
        credit: "Photo: Rod Long / Unsplash",
      },
      {
        src: u("1652593707316-246dec33aed8"),
        alt: "A kangaroo standing on open ground above the ocean",
        credit: "Photo: Zac Edmonds / Unsplash",
      },
      {
        src: u("1708001938983-0c6cd33311ef"),
        alt: "A rock formation on a beach under a wide sky",
        credit: "Photo: Haonan Zhang / Unsplash",
      },
    ],
    amenities: [
      "All-inclusive dining and open bar",
      "Daily guided experiences",
      "Ocean-facing suites",
      "Southern Spa",
      "Flinders Chase National Park nearby",
      "Airport transfers from Kingscote",
      "Wine cellar of South Australian labels",
    ],
    priceFrom: 2100,
    featured: true,
    seo: {
      title: "Southern Ocean Lodge, Kangaroo Island",
      description:
        "Stay at Southern Ocean Lodge on Kangaroo Island: clifftop suites above Hanson Bay, all-inclusive dining and guided wildlife experiences, arranged privately.",
    },
  },
  {
    slug: "longitude-131",
    name: "Longitude 131°",
    type: "safari-camp",
    destination: "uluru",
    area: "Uluru-Kata Tjuta",
    tier: "ultra",
    summary:
      "Sixteen tented pavilions in the red dunes of the Northern Territory, each looking straight across the desert to Uluru.",
    description: [
      "Longitude 131° is a small camp of luxury tented pavilions set along a dune ridge just outside Uluru-Kata Tjuta National Park. Each pavilion is raised above the sand with a full-height window framing Uluru, and the camp's scale keeps the atmosphere private. Mornings begin with the rock changing colour at first light, and evenings end with a sky that, on a clear night, is dense with stars.",
      "Stays are all-inclusive, with guided experiences that include sunrise and sunset at Uluru, a walk into Walpa Gorge or the Valley of the Winds at Kata Tjuta, and time with guides who share the cultural significance of the landscape to the Anangu, its Traditional Owners. Dinner at Table 131°, served on the dunes under the open sky, is a highlight when the weather allows.",
      "Between outings, the Dune House offers a lounge, bar and plunge pool, and Spa Kinara provides treatments drawing on native ingredients. Flights land at Ayers Rock (Connellan) Airport, a short transfer from camp. The desert can be hot in summer and cold at night in winter; we plan activity times around the season so the days stay comfortable.",
    ],
    heroImage: {
      src: u("1548296404-93c7694b2f91"),
      alt: "Uluru glowing in low sunlight above a wide desert plain",
      credit: "Photo: Ondrej Machart / Unsplash",
    },
    gallery: [
      {
        src: u("1529108190281-9a4f620bc2d8"),
        alt: "Uluru rising above arid scrubland under a blue sky with thin cloud",
        credit: "Photo: Photoholgic / Unsplash",
      },
      {
        src: u("1654692870756-ea1ebcb8be1d"),
        alt: "A large red rock formation in the middle of the desert",
        credit: "Photo: Trevor McKinnon / Unsplash",
      },
      {
        src: u("1612807831838-5d74ee4abddc"),
        alt: "Long-exposure star trails in a dark night sky",
        credit: "Photo: Steven Wei / Unsplash",
      },
    ],
    amenities: [
      "Pavilions with direct Uluru views",
      "All-inclusive dining and beverages",
      "Guided Uluru and Kata Tjuta experiences",
      "Dinner under the stars at Table 131°",
      "Dune House plunge pool",
      "Spa Kinara",
      "Airport transfers",
    ],
    priceFrom: 1900,
    featured: true,
    seo: {
      title: "Longitude 131°, Uluru",
      description:
        "Longitude 131° offers tented pavilions facing Uluru, guided visits to Kata Tjuta and dinners on the dunes. We arrange it as part of a private Red Centre trip.",
    },
  },
  {
    slug: "silky-oaks-lodge",
    name: "Silky Oaks Lodge",
    type: "lodge",
    destination: "queensland",
    area: "Daintree, Tropical North Queensland",
    tier: "premium",
    summary:
      "Treehouses on the banks of the Mossman River, on the edge of the World Heritage-listed Daintree Rainforest.",
    description: [
      "Silky Oaks Lodge is set in rainforest beside the Mossman River, a short drive from Port Douglas and close to Mossman Gorge. After a substantial refurbishment it reopened in 2021, with treehouse-style rooms raised among the canopy, each with a deep bath, a daybed and a deck that looks out into the trees. The sound of running water is a constant companion.",
      "The lodge works closely with the rainforest around it. Guided walks explore the forest's plants and wildlife, and the river's clear swimming holes are a short walk from the rooms. Further afield, the Daintree River, Cape Tribulation and the outer Great Barrier Reef are all within a day's reach, so the lodge pairs naturally with time on the reef or an island stay.",
      "Meals are served in the open-sided Treehouse Restaurant, where the menu leans on tropical produce from the region. The Healing Waters Spa offers treatments in a quiet riverside setting. Cairns Airport is roughly ninety minutes away by road along the coast. The drier months from May to October are the most comfortable, though the rainforest is at its most dramatic in the wet season.",
    ],
    heroImage: {
      src: u("1631006995557-9866a74ee05c"),
      alt: "Dense green rainforest covering a mountainside in Tropical North Queensland",
      credit: "Photo: David Clode / Unsplash",
    },
    gallery: [
      {
        src: u("1598947859758-c024ef080982"),
        alt: "Moss-covered rocks in a clear rainforest river",
        credit: "Photo: Leigh / Unsplash",
      },
      {
        src: u("1709690053808-2da854a0d770"),
        alt: "Tall trees and thick understorey in a lush rainforest",
        credit: "Photo: Aaron De Wit / Unsplash",
      },
      {
        src: u("1668314832395-484e51f0c1cf"),
        alt: "A shallow creek running through rainforest",
        credit: "Photo: Tyler Mower / Unsplash",
      },
    ],
    amenities: [
      "Riverside treehouse rooms",
      "Outdoor baths and daybeds",
      "Treehouse Restaurant",
      "Healing Waters Spa",
      "Guided rainforest walks",
      "Mossman River swimming holes",
    ],
    priceFrom: 900,
    featured: true,
    seo: {
      title: "Silky Oaks Lodge, Daintree",
      description:
        "Silky Oaks Lodge places riverside treehouses on the edge of the Daintree Rainforest, close to Port Douglas and the reef. We plan stays as part of private trips.",
    },
  },
  {
    slug: "lizard-island",
    name: "Lizard Island",
    type: "island-resort",
    destination: "great-barrier-reef",
    area: "Northern Great Barrier Reef",
    tier: "ultra",
    summary:
      "A national park island on the northern Great Barrier Reef, with a small resort, two dozen beaches and reef directly offshore.",
    description: [
      "Lizard Island lies far to the north of Cairns, a national park island fringed by reef and reached by a scenic light-aircraft flight of about an hour. The resort is the only accommodation on the island, with around forty suites and villas set behind its beaches, so the sense of space is considerable. Many of the island's two dozen beaches can be claimed for an afternoon with a picnic hamper and a small boat.",
      "The water is the reason to come. Snorkelling begins from the beach, and the resort's dive centre runs trips to the outer reef, including the well-known Cod Hole on Ribbon Reef No. 10. The island is also home to the Lizard Island Research Station, which has hosted reef scientists for decades, and guests can sometimes join a talk about the work under way.",
      "Rates include all meals and a selection of drinks, with menus that lean on seafood and tropical produce. Walks range from easy beach strolls to the steep climb up Cook's Look, where views stretch across the lagoon and outer reef. The resort has a minimum guest age, so it suits couples and older families. Calm, clear conditions are most common from September to December.",
    ],
    heroImage: {
      src: u("1635621265002-eb95cd6365ae"),
      alt: "A small island surrounded by open ocean",
      credit: "Photo: Ahmer Kalam / Unsplash",
    },
    gallery: [
      {
        src: u("1581242163722-caf37479b25c"),
        alt: "A clownfish among anemone tentacles on a coral reef",
        credit: "Photo: Giorgia Doglioni / Unsplash",
      },
      {
        src: u("1546026423-cc4642628d2b"),
        alt: "Close view of living hard and soft corals",
        credit: "Photo: qui nguyen / Unsplash",
      },
      {
        src: u("1442386967425-6205da77c3ed"),
        alt: "Aerial view of turquoise water over shallow reef",
        credit: "Photo: Yanguang Lan / Unsplash",
      },
    ],
    amenities: [
      "All meals and selected beverages",
      "Two dozen beaches",
      "Snorkelling from the shore",
      "Dive centre with outer reef trips",
      "Private picnic boats",
      "Day spa",
      "Charter flights from Cairns",
    ],
    priceFrom: 1800,
    featured: true,
    seo: {
      title: "Lizard Island, Northern Great Barrier Reef",
      description:
        "Lizard Island is a private-feeling resort on the northern Great Barrier Reef, with beach snorkelling, outer reef diving and all-inclusive dining for adults.",
    },
  },
  {
    slug: "qualia",
    name: "qualia",
    type: "island-resort",
    destination: "great-barrier-reef",
    area: "Hamilton Island, Whitsundays",
    tier: "ultra",
    summary:
      "An adults-only retreat of private pavilions on the quiet northern tip of Hamilton Island, looking over the Whitsunday Passage.",
    description: [
      "qualia occupies a secluded headland at the northern end of Hamilton Island, separated from the island's busier marina and resort precinct. Its sixty pavilions are scattered through native bushland, many with their own plunge pool and each with a view across the Whitsunday Passage. The resort welcomes adults only, which keeps the mood quiet from breakfast through to the last drinks at dusk.",
      "There are two restaurants: the Long Pavilion for longer, more formal dinners, and Pebble Beach for relaxed meals by the water. Spa qualia sits within the grounds, and the resort's own beach is a short walk from most pavilions. Because Hamilton Island has a commercial airport with direct flights from several capital cities, it is one of the simplest ways to reach the reef in comfort.",
      "Much of the appeal lies beyond the resort. Sailing days through the Whitsundays, a visit to Whitehaven Beach and Hill Inlet, and a scenic flight over Heart Reef are all easy to arrange from here, and we often add a private yacht for a full day on the water. From June to September humpback whales pass through the islands on their annual migration.",
    ],
    heroImage: {
      src: u("1610056352054-a68fe4f998e1"),
      alt: "Aerial view of white sandbars and turquoise water at Whitehaven Beach in the Whitsundays",
      credit: "Photo: Lochie Riordan / Unsplash",
    },
    gallery: [
      {
        src: u("1598522038344-293c492adaf0"),
        alt: "Aerial view of forested islands in clear blue water in the Whitsundays",
        credit: "Photo: Lochie Riordan / Unsplash",
      },
      {
        src: u("1755928683108-6ef780a17382"),
        alt: "Palm trees above a beach with turquoise water",
        credit: "Photo: Jannet Serhan / Unsplash",
      },
      {
        src: u("1589138845121-1f57482d7488"),
        alt: "A white boat on calm blue water",
        credit: "Photo: Vladimir Haltakov / Unsplash",
      },
    ],
    amenities: [
      "Adults only",
      "Pavilions with Whitsunday Passage views",
      "Private plunge pools in many pavilions",
      "Two restaurants",
      "Spa qualia",
      "Private yacht charters on request",
      "Direct flights to Hamilton Island",
    ],
    priceFrom: 1100,
    featured: false,
    seo: {
      title: "qualia, Hamilton Island",
      description:
        "qualia is an adults-only retreat on Hamilton Island's north tip, with pavilions over the Whitsunday Passage and quick access to Whitehaven Beach by sea or air.",
    },
  },
  {
    slug: "sal-salis",
    name: "Sal Salis",
    type: "safari-camp",
    destination: "western-australia",
    area: "Ningaloo Reef, Cape Range National Park",
    tier: "premium",
    summary:
      "A small wilderness camp in the dunes of Cape Range National Park, a few steps from the lagoon of Ningaloo Reef.",
    description: [
      "Sal Salis is a camp of a handful of wilderness tents tucked into the coastal dunes of Cape Range National Park, on the North West Cape of Western Australia. Ningaloo Reef runs close to shore here, so the lagoon in front of camp offers snorkelling straight from the beach. The camp runs on solar power and limited water, and the simplicity is deliberate: the focus is the reef and the range behind it.",
      "Guided experiences are included, from snorkelling the lagoon and kayaking the coast to walking Mandu Mandu Gorge in the limestone range. Seasonal encounters can be arranged with licensed operators in Exmouth: whale sharks typically from around March to July, humpback whales from roughly June to November, and manta rays for much of the year. Our Travel Designers time a stay around these windows.",
      "Meals are shared and relaxed, with all food and drinks included. Tents have private ensuites and decks facing the dunes or the ocean. Guests fly to Learmonth Airport, near Exmouth, and transfer by road into the national park, about an hour and a half away. Wi-Fi and phone coverage are minimal, which most guests come to appreciate within a day.",
    ],
    heroImage: {
      src: u("1632018602741-db0b2d5623d9"),
      alt: "Aerial view of a beach and clear reef lagoon at Ningaloo",
      credit: "Photo: Dylan Shaw / Unsplash",
    },
    gallery: [
      {
        src: u("1547079631-442498027a07"),
        alt: "Green and blue water along a sunlit coastline",
        credit: "Photo: Ben Carless / Unsplash",
      },
      {
        src: u("1464925029952-5d9ca1cf4f64"),
        alt: "A whale shark swimming underwater",
        credit: "Photo: Jeremy Bishop / Unsplash",
      },
      {
        src: u("1714700075592-60875bd9b16d"),
        alt: "A dirt road crossing dry, open country",
        credit: "Photo: Charlie Marriott / Unsplash",
      },
    ],
    amenities: [
      "All meals and drinks included",
      "Snorkelling from the beach",
      "Guided gorge walks and kayaking",
      "Tents with private ensuites",
      "Solar-powered camp",
      "Seasonal whale shark and humpback swims",
    ],
    priceFrom: 1000,
    featured: false,
    seo: {
      title: "Sal Salis, Ningaloo Reef",
      description:
        "Sal Salis is a dune-top wilderness camp in Cape Range National Park with snorkelling on Ningaloo Reef from the beach and seasonal whale shark encounters nearby.",
    },
  },
  {
    slug: "spicers-peak-lodge",
    name: "Spicers Peak Lodge",
    type: "lodge",
    destination: "queensland",
    area: "Scenic Rim, Queensland",
    tier: "premium",
    summary:
      "A high-country lodge on the edge of Main Range National Park, about two hours from Brisbane, with views across the Scenic Rim.",
    description: [
      "Spicers Peak Lodge sits high on the Great Dividing Range in Queensland's Scenic Rim, bordering Main Range National Park. At this elevation the air is noticeably cooler than on the coast, and in winter the lodge's fireplaces earn their keep. The suites and lodges are spread across a large rural property, with wide views over ridges and valleys that often fill with morning mist.",
      "The stay is all-inclusive, with dining built around a seasonal degustation that draws on producers from the surrounding region, and a cellar of Australian wines. Days can be as active or as idle as you like: walking trails across the property and into the national park, mountain biking, or simply reading by the fire. The Peak Spa offers treatments with views to the ranges.",
      "Its distance from the coast makes it an easy addition to a Queensland journey, either before heading north to the reef or after time in Brisbane. The drive from Brisbane takes about two hours, and helicopter transfers can be arranged. Autumn and winter bring clear, crisp days that suit walking; spring brings wildflowers and lambs on neighbouring farms.",
    ],
    heroImage: {
      src: u("1618797808112-08cdd1a4287d"),
      alt: "Green grassland below a mountain range under heavy cloud",
      credit: "Photo: Michael Mann / Unsplash",
    },
    gallery: [
      {
        src: u("1618797808003-389fb17bf212"),
        alt: "Open pasture rising toward forested mountains under white cloud",
        credit: "Photo: Michael Mann / Unsplash",
      },
      {
        src: u("1697441199027-7cf15b567f48"),
        alt: "A house on a hillside among trees, partly hidden in fog",
        credit: "Photo: sophie peng / Unsplash",
      },
      {
        src: u("1697441103925-602550d22d7d"),
        alt: "Two animals grazing in long grass on a hillside",
        credit: "Photo: sophie peng / Unsplash",
      },
    ],
    amenities: [
      "All-inclusive dining with seasonal degustation",
      "Views across the Scenic Rim",
      "Walking trails into Main Range National Park",
      "The Peak Spa",
      "Open fireplaces",
      "Helicopter transfers on request",
    ],
    priceFrom: 800,
    featured: false,
    seo: {
      title: "Spicers Peak Lodge, Scenic Rim",
      description:
        "Spicers Peak Lodge is a high-country retreat in Queensland's Scenic Rim, with all-inclusive dining, mountain walks and views across Main Range National Park.",
    },
  },
  {
    slug: "saffire-freycinet",
    name: "Saffire Freycinet",
    type: "lodge",
    destination: "tasmania",
    area: "Freycinet Peninsula, Tasmania",
    tier: "ultra",
    summary:
      "A twenty-suite lodge on Tasmania's east coast, looking across Great Oyster Bay to the granite peaks of the Hazards.",
    description: [
      "Saffire Freycinet stands on the shore of Great Oyster Bay near Coles Bay, on Tasmania's east coast. The main building's curving roofline is designed to echo the movement of the sea, and each of its twenty suites faces west across the water to the pink granite of the Hazards. Late afternoon light on those peaks is one of the quiet pleasures of a stay.",
      "Rates are all-inclusive, covering dining at Palate, the lodge restaurant, along with drinks and a selection of guided experiences. A well-known option is a visit to a nearby marine farm to taste oysters standing in the bay. Freycinet National Park is next door, and the walk to the Wineglass Bay lookout, or down to the beach itself, is a natural morning outing.",
      "Spa Saffire offers treatments with views to the mountains, and the lounge and bar are designed for long, slow evenings. The lodge is about two and a half hours by road from Hobart or Launceston, or a short helicopter or light-aircraft transfer. Tasmania's seasons are distinct; we plan walks and boat trips around the weather, which can change quickly at any time of year.",
    ],
    heroImage: {
      src: u("1627110466624-436b91b5d20b"),
      alt: "Blue water of a bay below granite mountains on the Freycinet Peninsula",
      credit: "Photo: Lochie Riordan / Unsplash",
    },
    gallery: [
      {
        src: u("1673597925600-1aaddad28e48"),
        alt: "Calm water beside a rocky shoreline",
        credit: "Photo: Alistair King / Unsplash",
      },
      {
        src: u("1638834346578-2e229bebe52c"),
        alt: "A sandy beach with mountains rising behind it",
        credit: "Photo: Tim Lippis / Unsplash",
      },
      {
        src: u("1673597925698-07f199e2836f"),
        alt: "The sun setting over the ocean beyond coastal rocks",
        credit: "Photo: Alistair King / Unsplash",
      },
    ],
    amenities: [
      "All-inclusive dining at Palate",
      "Suites facing the Hazards",
      "Guided experiences included",
      "Spa Saffire",
      "Freycinet National Park on the doorstep",
      "Helicopter and air transfers on request",
    ],
    priceFrom: 1600,
    featured: false,
    seo: {
      title: "Saffire Freycinet, Tasmania",
      description:
        "Saffire Freycinet looks across Great Oyster Bay to the Hazards, with all-inclusive dining, Spa Saffire and Wineglass Bay walks nearby on Tasmania's east coast.",
    },
  },
];
