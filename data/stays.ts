import type { Stay } from "./types";

/**
 * Partner stays. All properties below are fictional seed content, written to
 * show the shape and tone of a stay page. Replace with real partners before launch.
 * Prices are per person, per night, sharing, in USD.
 */

const img = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const stays: Stay[] = [
  {
    slug: "sayan-ridge-villas",
    name: "Sayan Ridge Villas",
    type: "villa",
    destination: "bali",
    area: "Sayan, Ubud",
    tier: "ultra",
    summary:
      "Eight private pool villas on the lip of the Ayung River gorge, ten minutes from Ubud but well out of earshot.",
    description: [
      "Sayan Ridge sits on the western edge of the Ayung valley, where the land drops away into a tangle of coconut palms, rice terraces and river mist. There are only eight villas, each set behind its own carved stone wall, so the feeling is closer to a private house than a hotel. Mornings start with the sound of the river and the farmers below.",
      "Every villa has a heated infinity pool, an open-sided bale for daybeds and massage, and a bedroom that opens fully onto the gorge. Interiors are teak, river stone and hand-loomed ikat from East Bali, with good reading lights and proper blackout blinds. A butler looks after two villas at most, so requests are handled quietly and quickly.",
      "We like it for travellers who want Ubud's temples, markets and kitchens within easy reach without staying in the middle of the traffic. The kitchen cooks Balinese family recipes alongside lighter dishes, and can set breakfast in your pool or dinner on a terrace above the rice. Guided walks along the ridge start at the gate before the heat builds.",
    ],
    heroImage: {
      src: img("1520250497591-112f2f40a3f4"),
      alt: "Turquoise resort pool framed by thatched pavilions, palms and forested hills",
    },
    gallery: [
      {
        src: img("1611892440504-42a792e24d32"),
        alt: "Warm-lit villa bedroom in dark timber with a glass door onto a tropical garden",
      },
      {
        src: img("1586861635167-e5223aadc9fe"),
        alt: "Floating breakfast trays of fruit and pastries in a pool overlooking the sea",
      },
      {
        src: img("1555400038-63f5ba517a47"),
        alt: "Green rice terraces stepping down a hillside between coconut palms",
      },
    ],
    amenities: [
      "Heated private infinity pool",
      "Dedicated villa butler",
      "In-villa massage bale",
      "Breakfast served anywhere, any time",
      "Guided ridge and rice-field walks",
      "Daily shuttle to central Ubud",
      "Balinese cooking class",
    ],
    priceFromUSD: 620,
    featured: true,
    seo: {
      title: "Sayan Ridge Villas: Private Pool Villas in Ubud",
      description:
        "Eight private pool villas above the Ayung River gorge in Sayan, Ubud, with butler service, in-villa massage and quick access to Ubud's temples and kitchens.",
    },
  },
  {
    slug: "uluwatu-cliff-house",
    name: "Uluwatu Cliff House",
    type: "resort",
    destination: "bali",
    area: "Uluwatu",
    tier: "premium",
    summary:
      "A low-rise clifftop resort on the Bukit peninsula, with ocean-facing suites and a staircase down to a quiet reef beach.",
    description: [
      "Uluwatu Cliff House is spread along a limestone headland on the southern tip of Bali, seventy metres above the Indian Ocean. The architecture is deliberately low, with coral-stone walls and grass roofs, so the view does the work. Most suites face due west, which means long, unhurried sunsets from your own terrace through the dry season.",
      "There are 32 suites and villas, a main infinity pool cut into the cliff edge and a smaller adults-only pool in the garden. A private staircase and inclinator lead down to a reef beach that is swimmable at mid to high tide. The spa uses local coconut oil and frangipani, and the restaurant leans on line-caught fish from Jimbaran.",
      "This is our usual recommendation for the last few nights of a longer trip, when guests want sea air and very little to organise. It is also a sound base for surfers, with several of the Bukit's best breaks a short drive away. Uluwatu Temple and its evening kecak dance are fifteen minutes up the road.",
    ],
    heroImage: {
      src: img("1582719508461-905c673771fd"),
      alt: "Sun loungers on a timber deck beside an infinity pool facing the open sea",
    },
    gallery: [
      {
        src: img("1540541338287-41700207dee6"),
        alt: "Curving resort pool with palm trees and umbrellas above a deep blue sea",
      },
      {
        src: img("1547036967-23d11aacaee0"),
        alt: "Aerial view of a narrow sand beach below dark rocky cliffs and clear green water",
      },
      {
        src: img("1618773928121-c32242e63f39"),
        alt: "Neutral-toned hotel bedroom with a large bed, bedside lamps and soft light",
      },
    ],
    amenities: [
      "Clifftop infinity pool",
      "Adults-only garden pool",
      "Private beach access by inclinator",
      "Sunset-facing terraces",
      "Spa with Balinese treatments",
      "Surf guiding on request",
      "Airport transfers included",
    ],
    priceFromUSD: 340,
    featured: true,
    seo: {
      title: "Uluwatu Cliff House: Clifftop Resort in Bali",
      description:
        "A low-rise clifftop resort in Uluwatu with sunset-facing suites, an infinity pool on the cliff edge and a private staircase to a quiet reef beach below.",
    },
  },
  {
    slug: "sidemen-terrace-lodge",
    name: "Sidemen Terrace Lodge",
    type: "eco-lodge",
    destination: "bali",
    area: "Sidemen valley",
    tier: "value",
    summary:
      "A simple, well-run lodge in the rice fields of East Bali, with views of Mount Agung and walks that start from the door.",
    description: [
      "The Sidemen valley is what many people imagine central Bali looked like thirty years ago: terraced rice, weaving villages and very few cars. Sidemen Terrace Lodge has twelve bungalows built from bamboo and reclaimed timber, each with a veranda looking across the valley to Mount Agung. On clear mornings the volcano appears before breakfast and is often gone by ten.",
      "Rooms are comfortable rather than lavish, with good mattresses, mosquito nets, hot showers and ceiling fans instead of air conditioning, which is rarely needed at this altitude. Power comes partly from solar panels on the roof, and most of the vegetables come from the lodge garden or the neighbours. The spring-fed pool is small, cold and very welcome after a walk.",
      "We use it as a two or three night pause between Ubud and the east coast. Days are for walking the subak irrigation paths with the lodge's guide, visiting a songket weaving family, or cooking with the kitchen team. Evenings are quiet, and the lodge is happy to keep them that way.",
    ],
    heroImage: {
      src: img("1536152470836-b943b246224c"),
      alt: "Volcano rising above misty fields and palm trees in blue early-morning light",
    },
    gallery: [
      {
        src: img("1559628233-100c798642d4"),
        alt: "Aerial view of curving green rice terraces and palm trees",
      },
      {
        src: img("1558005530-a7958896ec60"),
        alt: "Rice terraces and palms in soft sunlight with a mountain in the haze behind",
      },
      {
        src: img("1506126613408-eca07ce68773"),
        alt: "Silhouette of a person meditating on a wooden floor at sunrise",
      },
    ],
    amenities: [
      "Agung-facing verandas",
      "Spring-fed swimming pool",
      "Daily guided rice-field walk",
      "Garden-to-table kitchen",
      "Weaving village visits",
      "Partly solar powered",
    ],
    priceFromUSD: 140,
    featured: false,
    seo: {
      title: "Sidemen Terrace Lodge: Eco-Lodge in East Bali",
      description:
        "A small bamboo eco-lodge in the Sidemen valley with views of Mount Agung, a spring-fed pool, garden cooking and guided walks through the rice terraces.",
    },
  },
  {
    slug: "sea-wanderer-phinisi",
    name: "The Sea Wanderer",
    type: "phinisi",
    destination: "komodo",
    area: "Komodo National Park",
    tier: "ultra",
    summary:
      "A hand-built ironwood phinisi with five cabins, cruising Komodo National Park on private charters only.",
    description: [
      "The Sea Wanderer was built on the beaches of Tana Beru in South Sulawesi, where Bugis shipwrights have shaped phinisi schooners by eye for generations. She is 42 metres of ironwood and teak, with two masts and a broad upper deck, and she sails only as a private charter. That means your route, your timings and your menu, with no other guests aboard.",
      "Five cabins sleep up to ten, each with air conditioning, an ensuite bathroom and a window at sea level. The crew of fourteen includes a cruise director, a chef, two dive instructors and a ranger-trained guide for the island walks. There are kayaks, paddleboards and a fast tender for reaching the snorkelling sites before the day boats arrive.",
      "A typical three or four night itinerary takes in Padar at sunrise, a guided walk with Komodo dragons on Rinca or Komodo, the manta cleaning stations and the reefs around Siaba and Batu Bolong. Evenings are spent at anchor in sheltered bays, with dinner on deck and the generator off by eleven.",
    ],
    heroImage: {
      src: img("1500514966906-fe245eea9344"),
      alt: "Aerial view of a wooden boat pulled up on a white sand shore beside deep blue water",
    },
    gallery: [
      {
        src: img("1534447677768-be436bb09401"),
        alt: "Small sailing boat silhouetted on still water under a starry night sky",
      },
      {
        src: img("1544551763-46a013bb70d5"),
        alt: "Scuba diver swimming beside a dense school of yellow fish",
      },
      {
        src: img("1505228395891-9a51e7e86bf6"),
        alt: "Aerial view of white surf rolling onto a beach edged with green trees",
      },
    ],
    amenities: [
      "Private charter for up to 10 guests",
      "Five ensuite air-conditioned cabins",
      "Onboard dive instructors",
      "Kayaks and paddleboards",
      "Fast tender for early snorkelling",
      "Chef-cooked meals and open bar",
      "Ranger-led island walks",
    ],
    priceFromUSD: 950,
    featured: true,
    seo: {
      title: "The Sea Wanderer: Private Phinisi in Komodo",
      description:
        "A hand-built ironwood phinisi for private charters in Komodo National Park, with five ensuite cabins, dive instructors on board and a crew of fourteen.",
    },
  },
  {
    slug: "coral-spirit-phinisi",
    name: "Coral Spirit",
    type: "phinisi",
    destination: "raja-ampat",
    area: "Raja Ampat & Misool",
    tier: "premium",
    summary:
      "A dive-focused phinisi running small-group and private trips between the northern and southern reefs of Raja Ampat.",
    description: [
      "Coral Spirit is a 36-metre phinisi set up first and foremost for diving, with a spacious dive deck, nitrox on board and a guide for every four divers. She runs seven to ten night routes out of Sorong between October and April, when the seas around Raja Ampat are at their calmest and visibility is often excellent.",
      "There are six cabins, four doubles and two twins, all with ensuite bathrooms and air conditioning. The saloon doubles as a briefing room and library, and the shaded sun deck is where most people end up between dives. Non-divers are well looked after, with snorkelling guides, kayaks and village visits planned around the dive schedule.",
      "Routes usually link the Dampier Strait's manta and current dives with the soft coral walls of Misool in the south, plus a climb to the viewpoint over Piaynemo's karst islets. We book her for keen divers who want depth and variety, and for couples who would rather share a boat with a small group than charter a larger one.",
    ],
    heroImage: {
      src: img("1516690561799-46d8f74f9abf"),
      alt: "Green karst islets scattered across a turquoise lagoon under a wide sky",
    },
    gallery: [
      {
        src: img("1583212292454-1fe6229603b7"),
        alt: "Coral reef in clear blue water with small orange fish",
      },
      {
        src: img("1530053969600-caed2596d242"),
        alt: "Sunlight filtering down through deep blue water seen from below the surface",
      },
      {
        src: img("1540206395-68808572332f"),
        alt: "Aerial view of white waves breaking over dark blue and green water",
      },
    ],
    amenities: [
      "Six ensuite cabins",
      "Nitrox and full dive deck",
      "One dive guide per four divers",
      "Snorkelling guide for non-divers",
      "Kayaks and village visits",
      "Shaded sun deck and library",
    ],
    priceFromUSD: 520,
    featured: false,
    seo: {
      title: "Coral Spirit: Dive Phinisi in Raja Ampat",
      description:
        "A dive-focused phinisi sailing between the Dampier Strait and Misool, with six ensuite cabins, nitrox on board and snorkelling guides for non-divers.",
    },
  },
  {
    slug: "misool-reef-lodge",
    name: "Misool Reef Lodge",
    type: "eco-lodge",
    destination: "raja-ampat",
    area: "Southern Raja Ampat",
    tier: "premium",
    summary:
      "Water bungalows and beach cottages on a private island inside a no-take marine reserve in southern Raja Ampat.",
    description: [
      "Misool Reef Lodge occupies a small island in the far south of Raja Ampat, a four to five hour boat ride from Sorong. The surrounding reefs sit inside a no-take zone that the lodge helped establish with local villages, and the recovery is visible: sharks, schooling fish and soft corals in colours that are hard to describe. The house reef starts a few steps from your door.",
      "There are fifteen bungalows, some over the lagoon and some tucked into the treeline above the beach. Each is built from local and reclaimed hardwood, with a hammock deck, an outdoor shower and steps down into the water. Meals are shared at a long table in the main house, which helps on an island this remote.",
      "Days revolve around the water, with two or three guided dives, snorkelling with a guide, or kayaking through the karst channels. Part of every stay supports the ranger patrols and community programmes that keep the reserve protected. It suits travellers who are content with simple comforts in exchange for reefs that very few people see.",
    ],
    heroImage: {
      src: img("1499793983690-e29da59ef1c2"),
      alt: "Thatched timber building on stilts at the edge of a sandy beach and turquoise sea",
    },
    gallery: [
      {
        src: img("1516815231560-8f41ec531527"),
        alt: "Small thatched shelter on a boat moored in clear shallow water off a palm-lined beach",
      },
      {
        src: img("1546026423-cc4642628d2b"),
        alt: "Pink, orange and purple soft corals and sponges on a reef",
      },
      {
        src: img("1544161515-4ab6ce6db874"),
        alt: "Guest receiving a massage with warm oil",
      },
    ],
    amenities: [
      "Lagoon-front bungalows",
      "House reef from your deck",
      "Guided diving and snorkelling",
      "Kayaks for the karst channels",
      "Shared island dining",
      "Supports a local marine reserve",
      "Boat transfers from Sorong",
    ],
    priceFromUSD: 410,
    featured: true,
    seo: {
      title: "Misool Reef Lodge: Island Eco-Lodge, Raja Ampat",
      description:
        "Lagoon bungalows on a private island inside a marine reserve in southern Raja Ampat, with a house reef, guided diving and kayaking through karst channels.",
    },
  },
  {
    slug: "borobudur-hill-retreat",
    name: "Borobudur Hill Retreat",
    type: "boutique",
    destination: "yogyakarta",
    area: "Menoreh Hills, Magelang",
    tier: "premium",
    summary:
      "A small hillside hotel facing Borobudur across the Kedu plain, timed for early starts at the temple.",
    description: [
      "Borobudur Hill Retreat sits on the lower slopes of the Menoreh Hills, looking east across the Kedu plain to Borobudur and the volcanoes Merapi and Merbabu beyond. On most mornings the temple rises out of a layer of mist, and you can watch it from your terrace with a coffee grown a few kilometres away.",
      "The hotel has eighteen suites in a series of Javanese joglo-inspired buildings, with carved teak, batik textiles and deep bathtubs. There is a long pool facing the view, a library with books on Javanese history, and a restaurant serving dishes from Central Java alongside simpler international plates. Staff are from the surrounding villages and very proud of their valley.",
      "We place guests here to see Borobudur properly, early and with a good guide, before the coaches arrive from Yogyakarta. The hotel arranges cycling through the villages, visits to pottery and tofu makers, and a jeep trip up the flanks of Merapi. Prambanan and Yogyakarta are about an hour away for a day visit.",
    ],
    heroImage: {
      src: img("1596402184320-417e7178b2cd"),
      alt: "Bell-shaped stone stupas of Borobudur in hazy golden morning light",
    },
    gallery: [
      {
        src: img("1584810359583-96fc3448beaa"),
        alt: "Traveller walking across open ground towards Borobudur temple on a hilltop",
      },
      {
        src: img("1566073771259-6a8506099945"),
        alt: "Timber lodge with a steep roof, white loungers and a curved pool at dusk",
      },
      {
        src: img("1578469550956-0e16b69c6a3d"),
        alt: "Tall stone spires of the Prambanan temple complex under a blue sky",
      },
    ],
    amenities: [
      "Terraces facing Borobudur",
      "Long pool with volcano views",
      "Guided sunrise temple visits",
      "Village cycling and craft visits",
      "Javanese cooking and batik sessions",
      "Library on Javanese history",
    ],
    priceFromUSD: 290,
    featured: false,
    seo: {
      title: "Borobudur Hill Retreat: Boutique Hotel, Java",
      description:
        "A boutique hillside hotel facing Borobudur and Merapi across the Kedu plain, with joglo-style suites, a long view pool and guided sunrise temple visits.",
    },
  },
  {
    slug: "gili-meno-beach-house",
    name: "Gili Meno Beach House",
    type: "villa",
    destination: "lombok-gilis",
    area: "Gili Meno",
    tier: "value",
    summary:
      "Six garden villas a few steps from the sand on Gili Meno, the quietest of the three Gili islands.",
    description: [
      "Gili Meno has no cars and no motorbikes, only bicycles, horse carts and a sandy path around the shore that takes about an hour and a half to walk. Gili Meno Beach House has six villas set around a frangipani garden on the west coast, which means calm water in the morning and the sun going down behind Bali's Mount Agung in the evening.",
      "Each villa has a covered terrace, an outdoor bathroom and a plunge pool, with bicycles and snorkelling gear included. The style is barefoot and relaxed, and the small team is quick to arrange things like a picnic on the sand, a boat to the other Gilis or a massage on your terrace. Families tend to take two villas side by side.",
      "We like Meno for families with younger children and for couples at the end of a busy trip. The turtle sightings off the northeast beach are reliable, the water is shallow and clear, and the evenings are very quiet. Fast boats to Bali and the short crossing to Lombok both leave from the harbour a short cycle away.",
    ],
    heroImage: {
      src: img("1519046904884-53103b34b206"),
      alt: "White sand beach with a leaning palm, a rope swing and a thatched umbrella by calm sea",
    },
    gallery: [
      {
        src: img("1468413253725-0d5181091126"),
        alt: "Curving sandy beach lined with dense coconut palms",
      },
      {
        src: img("1568849676085-51415703900f"),
        alt: "Bicycle leaning against a signpost on a quiet palm-shaded lane",
      },
      {
        src: img("1507525428034-b723cf961d3e"),
        alt: "Gentle waves washing onto a sandy beach at sunset",
      },
    ],
    amenities: [
      "Private plunge pools",
      "Bicycles and snorkel gear included",
      "Sunset-facing west coast",
      "Two-villa family set-ups",
      "Beach picnics and boat trips",
      "Fast boat booking to Bali",
    ],
    priceFromUSD: 160,
    featured: false,
    seo: {
      title: "Gili Meno Beach House: Garden Villas, Gili Meno",
      description:
        "Six garden villas with plunge pools on the quiet west coast of Gili Meno, a few steps from the sand, with bicycles, snorkel gear and turtle reefs nearby.",
    },
  },
  {
    slug: "sumba-coast-estate",
    name: "Sumba Coast Estate",
    type: "resort",
    destination: "sumba",
    area: "West Sumba",
    tier: "ultra",
    summary:
      "A remote estate of high-roofed villas above a long empty beach in West Sumba, with its own horses and surf break.",
    description: [
      "Sumba is about an hour's flight east of Bali, and in many ways it feels a world away. The western half of the island is a landscape of savannah, high-peaked clan houses and megalithic tombs, and life still follows the ritual calendar of the Marapu faith. Sumba Coast Estate sits on a headland above an almost empty beach, a forty-minute drive from Tambolaka airport.",
      "The estate has fourteen villas, their tall thatched roofs echoing the traditional Sumbanese house, each with a private pool and a deck facing the Indian Ocean. Rooms are generous and cool, finished in local stone, alang-alang grass and Sumbanese ikat. Meals are planned with each guest, and much of the produce comes from the estate's own farm.",
      "Days can be as active or as still as you like: riding the estate's horses along the sand, surfing a reef break in front of the villas, or visiting traditional villages with a Sumbanese guide. The estate funds clean water and school projects across the region, and guests can visit them. Three nights is a minimum, four or five is better.",
    ],
    heroImage: {
      src: img("1584132967334-10e028bd69f7"),
      alt: "Timber deck with loungers beside an infinity pool, trees overhanging and calm sea beyond",
    },
    gallery: [
      {
        src: img("1602002418082-a4443e081dd1"),
        alt: "Rounded villa living room with tall windows opening onto a deck and turquoise water",
      },
      {
        src: img("1559494007-9f5847c49d94"),
        alt: "Waves running up a dark sand beach under an orange and purple sunset",
      },
      {
        src: img("1571003123894-1f0594d2b5d9"),
        alt: "Resort pool lined with curtained daybeds and palms at dusk",
      },
    ],
    amenities: [
      "Private pool villas",
      "Horse riding on the beach",
      "Reef break in front of the villas",
      "Farm-to-table dining",
      "Guided village and culture visits",
      "Community project visits",
      "Airport transfers included",
      "Three-night minimum stay",
    ],
    priceFromUSD: 780,
    featured: false,
    seo: {
      title: "Sumba Coast Estate: Luxury Villas in West Sumba",
      description:
        "Fourteen high-roofed pool villas above an empty beach in West Sumba, with horse riding, a reef break, farm cooking and guided visits to Sumbanese villages.",
    },
  },
];
