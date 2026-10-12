import type { Experience } from "./types";

/**
 * Travel styles. Each experience page lists matching destinations and sample
 * itineraries; `tripCount` is an editorial figure shown on cards.
 */
export const experiences: Experience[] = [
  {
    slug: "diving-snorkeling",
    name: "Diving & snorkeling",
    hook: "Manta cleaning stations, soft-coral walls and reefs off the beach",
    intro:
      "Indonesia sits at the heart of the Coral Triangle, and its reefs hold more fish and coral species than anywhere else on earth. We pair you with operators we know personally, from Komodo's current-swept pinnacles to the sheltered lagoons of Misool, and plan surface days around tides rather than timetables.",
    tripCount: 24,
    heroImage: {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=80",
      alt: "A scuba diver swimming beside a dense school of yellow fish near a reef wall",
    },
    destinations: ["raja-ampat", "komodo", "nusa-penida", "lombok-gilis", "sulawesi"],
    highlights: [
      "Manta rays at Komodo's Makassar Reef and Raja Ampat's Manta Sandy",
      "House reefs you can snorkel straight from the lodge jetty",
      "Small-group boats with a guide-to-diver ratio of 1:4 or better",
      "Courses from first breaths to Nitrox, booked before you fly",
    ],
    faqs: [
      {
        q: "Do I need to be a certified diver?",
        a: "No. Most of our reef trips work just as well for snorkelers, and we can arrange a PADI Open Water course in Bali or the Gilis before you head east. Some Komodo and Raja Ampat sites have strong currents, so we match dives to your logbook.",
      },
      {
        q: "When is the best time to dive in Indonesia?",
        a: "It depends on the region. Komodo is at its best from April to November, Raja Ampat from October to April, and the Gilis and Nusa Penida are diveable year round, with mola mola around Nusa Penida from July to October.",
      },
      {
        q: "How long should I wait before flying after diving?",
        a: "We follow the standard guidance of at least 18 hours after multiple dives and build a dive-free day into every itinerary before a flight home or onward.",
      },
    ],
    seo: {
      title: "Diving & Snorkeling Holidays in Indonesia",
      description:
        "Tailor-made diving and snorkeling trips to Raja Ampat, Komodo, Nusa Penida and the Gilis, with trusted dive operators, reef-front lodges and liveaboards.",
    },
  },
  {
    slug: "phinisi-cruises",
    name: "Phinisi liveaboard cruises",
    hook: "Hand-built wooden schooners, private cabins and a new bay each day",
    intro:
      "The phinisi is a two-masted schooner built by hand on the beaches of South Sulawesi, and today the finest of them carry a handful of guests through Komodo and Raja Ampat. Days follow the light: a sunrise hike, a morning dive, lunch at anchor and dinner on deck under the stars.",
    tripCount: 14,
    heroImage: {
      src: "https://images.unsplash.com/photo-1650445363412-275a423da839?auto=format&fit=crop&w=1800&q=80",
      alt: "A wooden phinisi schooner under red sails on blue water near a rocky headland",
      credit: "Photo: Johnny Africa / Unsplash",
    },
    destinations: ["komodo", "raja-ampat", "flores", "maluku"],
    highlights: [
      "Private charters or shared departures on boats we have sailed",
      "Crew of up to 14, including a cruise director and dive guide",
      "Routes adjusted daily for wind, current and wildlife",
      "Three nights in Komodo or a week in Raja Ampat",
    ],
    faqs: [
      {
        q: "Will I get seasick?",
        a: "Komodo cruises spend most nights at anchor in sheltered bays and crossings are short. Raja Ampat passages can be longer; we plan them for calm mornings and suggest bringing your usual remedy.",
      },
      {
        q: "Can we charter a whole boat?",
        a: "Yes. Most of the phinisi we work with have between three and seven cabins, and a private charter often costs little more than booking every cabin individually for a family or group of friends.",
      },
      {
        q: "Is the cruise suitable for non-divers?",
        a: "Very much so. Snorkeling, kayaking, paddleboarding, island walks and ranger-led Komodo dragon treks fill the days for anyone who prefers to stay above the surface.",
      },
    ],
    seo: {
      title: "Phinisi Liveaboard Cruises in Komodo & Raja Ampat",
      description:
        "Sail Komodo and Raja Ampat on a hand-built phinisi schooner. Private cabins, expert crew, daily snorkeling and diving, planned around tides and season.",
    },
  },
  {
    slug: "honeymoons",
    name: "Honeymoons",
    hook: "Clifftop suites, private boats and time that is entirely yours",
    intro:
      "A honeymoon in Indonesia can move from a jungle villa above the Ayung River to a schooner anchored off Padar to a pool facing the Indian Ocean. We keep the pace unhurried, the transfers private and the details quietly handled, so the trip feels like yours from the first morning.",
    tripCount: 18,
    heroImage: {
      src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=80",
      alt: "Two floating breakfast trays with fruit and juice in a turquoise swimming pool",
    },
    destinations: ["bali", "komodo", "sumba", "lombok-gilis"],
    highlights: [
      "Private-pool villas chosen for privacy, not just views",
      "A sunset sail or a private night on a phinisi",
      "Couples' spa rituals using Balinese boreh and frangipani",
      "Unscheduled days built into every itinerary",
    ],
    faqs: [
      {
        q: "How long should a honeymoon in Indonesia be?",
        a: "Ten to fourteen nights works well. That allows time in Bali's highlands and on its coast, plus either a Komodo cruise or a few nights on Sumba, without a transfer every other day.",
      },
      {
        q: "Do you arrange surprises or special dinners?",
        a: "We do, discreetly. Private dinners on the beach, a candlelit deck on the boat or a floral bath on arrival can be added, and we tell our partners only what you want them to know.",
      },
      {
        q: "Is the rainy season a bad time for a honeymoon?",
        a: "Not necessarily. Between November and March, Bali usually has bright mornings with afternoon showers, villas are quieter and rates are lower. Komodo cruises are best avoided in January and February.",
      },
    ],
    seo: {
      title: "Indonesia Honeymoons: Bali, Komodo & Sumba",
      description:
        "Tailor-made Indonesia honeymoons with private-pool villas in Bali, a phinisi cruise through Komodo and quiet beaches on Sumba, planned at an easy pace.",
    },
  },
  {
    slug: "family-trips",
    name: "Family trips",
    hook: "Turtles, rice fields and villas with room for everyone",
    intro:
      "Indonesia is a generous place to travel with children: people are warm, the food adapts easily and there is always water nearby. We plan shorter driving days, connecting rooms or villas, and guides who know how to hold the attention of an eight-year-old as well as a parent.",
    tripCount: 16,
    heroImage: {
      src: "https://images.unsplash.com/photo-1752769041956-1af511b2a225?auto=format&fit=crop&w=1800&q=80",
      alt: "A family relaxing on a garden lounger beside a swimming pool among tropical plants",
      credit: "Photo: Ari Kurniawan / Unsplash",
    },
    destinations: ["bali", "lombok-gilis", "yogyakarta", "komodo"],
    highlights: [
      "Snorkeling with green turtles off Gili Meno",
      "Batik, cooking and rice-planting sessions for all ages",
      "Drives kept under three hours wherever possible",
      "Car seats, cots and paediatric contacts arranged ahead",
    ],
    faqs: [
      {
        q: "What age is best for an Indonesia family trip?",
        a: "Any age can work, but children from about six upwards get the most from snorkeling, temple visits and gentle treks. We have planned trips for toddlers and for teenagers who want to learn to surf.",
      },
      {
        q: "Are the vaccinations and health risks manageable?",
        a: "Yes, with sensible planning. Speak to a travel clinic six to eight weeks before departure. Bali and Lombok have international-standard clinics, and we share the nearest one for every stay.",
      },
      {
        q: "Can we travel during school holidays?",
        a: "July and August are busy and prices rise, so we suggest booking six to nine months ahead. Easter and the October half-term often have better availability and similar weather.",
      },
    ],
    seo: {
      title: "Family Holidays in Indonesia: Bali, Lombok & Gilis",
      description:
        "Family trips to Bali, Lombok and the Gili Islands with short transfers, villas sized for everyone, turtle snorkeling and guides who are great with children.",
    },
  },
  {
    slug: "volcano-treks",
    name: "Volcano treks",
    hook: "Pre-dawn climbs to crater rims and sunrise above the clouds",
    intro:
      "Java and Bali sit along one of the most active volcanic arcs on the planet, and a few of its summits are within reach of anyone reasonably fit. Most climbs begin in darkness to reach the rim at first light, so we plan the night before as carefully as the walk itself.",
    tripCount: 11,
    heroImage: {
      src: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1800&q=80",
      alt: "Mount Bromo and its neighbouring cones rising from a sea of mist at sunrise",
    },
    destinations: ["mount-bromo", "java", "bali", "lombok-gilis", "flores"],
    highlights: [
      "Sunrise over Bromo and Semeru from the Penanjakan ridge",
      "Ijen's turquoise crater lake and sulphur miners at dawn",
      "Mount Batur's summit breakfast above Bali's caldera lake",
      "Experienced guides, gas masks and headlamps provided",
    ],
    faqs: [
      {
        q: "How fit do I need to be?",
        a: "Bromo is a short walk from the jeep drop-off. Ijen and Batur take around two hours of steady uphill walking each way on loose ground. Rinjani on Lombok is a serious multi-day trek and needs proper preparation.",
      },
      {
        q: "Are the volcanoes safe to visit?",
        a: "Access is controlled by Indonesia's volcanology agency, and parks close when activity rises. We monitor alert levels daily and always have an alternative day planned.",
      },
      {
        q: "What should I wear?",
        a: "Layers. Crater rims can drop below 5°C before sunrise even when the coast is hot. Bring a warm jacket, closed walking shoes and a buff; we supply gas masks for Ijen.",
      },
    ],
    seo: {
      title: "Volcano Treks in Java & Bali: Bromo, Ijen, Batur",
      description:
        "Guided volcano treks in Indonesia, from Bromo sunrise and Ijen's crater lake to Mount Batur in Bali, with careful logistics, warm layers and expert guides.",
    },
  },
  {
    slug: "orangutan-trekking",
    name: "Orangutan trekking",
    hook: "Rainforest walks with ranger guides to find wild orangutans",
    intro:
      "Orangutans live only on Sumatra and Borneo, and seeing one move through the canopy is unlike any other wildlife encounter. We work with licensed guides in Gunung Leuser and Tanjung Puting who keep groups small and distances respectful.",
    tripCount: 8,
    heroImage: {
      src: "https://images.unsplash.com/photo-1723153247780-02e191e1dd0c?auto=format&fit=crop&w=1800&q=80",
      alt: "A Sumatran orangutan sitting among branches in dense green rainforest",
      credit: "Photo: Nick Reijrink / Unsplash",
    },
    destinations: ["sumatra", "kalimantan", "lake-toba"],
    highlights: [
      "Jungle treks from Bukit Lawang into Gunung Leuser National Park",
      "Klotok houseboat journeys along Borneo's Sekonyer River",
      "Licensed guides who follow strict viewing distances",
      "Riverside lodges with forest sounds through the night",
    ],
    faqs: [
      {
        q: "Are sightings guaranteed?",
        a: "No, these are wild and semi-wild animals. That said, sightings in Bukit Lawang and Tanjung Puting are very likely on a full-day trek, and our guides know the forest well.",
      },
      {
        q: "How do I get to Bukit Lawang?",
        a: "Fly into Kualanamu International Airport near Medan. The drive to Bukit Lawang takes around three and a half to four hours, with the last stretch through oil palm and rubber plantations.",
      },
      {
        q: "Is orangutan trekking ethical?",
        a: "It can be when done well. We choose operators who forbid feeding and touching, keep at least ten metres from the animals and contribute to local conservation and reforestation projects.",
      },
    ],
    seo: {
      title: "Orangutan Trekking in Sumatra & Borneo",
      description:
        "See wild orangutans in Sumatra's Gunung Leuser and Borneo's Tanjung Puting with licensed guides, small groups and riverside lodges. Responsible and tailored.",
    },
  },
  {
    slug: "temples-culture",
    name: "Temples & culture",
    hook: "Borobudur at first light, Balinese ceremony and village life",
    intro:
      "From the ninth-century stupas of Borobudur to the daily offerings placed on every Balinese doorstep, Indonesia's culture is lived rather than displayed. Our guides are historians, dancers and village elders who can explain what you are seeing and when to simply watch.",
    tripCount: 32,
    heroImage: {
      src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=80",
      alt: "The tiered shrines of Pura Ulun Danu Beratan reflected in a misty lake in Bali",
    },
    destinations: ["yogyakarta", "bali", "java", "flores", "sumba"],
    highlights: [
      "Borobudur and Prambanan with an archaeologist guide",
      "Temple ceremonies in Bali, attended in proper dress",
      "Traditional villages of Wae Rebo and Ratenggaro",
      "Batik, silver and gamelan workshops in Yogyakarta",
    ],
    faqs: [
      {
        q: "What should I wear to visit temples?",
        a: "Shoulders covered and a sarong with a sash for Balinese temples; most sites lend them at the entrance. At Borobudur, sandals provided by the site are required on the upper terraces.",
      },
      {
        q: "Can we attend a ceremony?",
        a: "Often, yes. Ceremonies follow the Balinese calendar, so we check dates once your travel is confirmed and arrange an invitation through a family or village we know.",
      },
      {
        q: "Is Borobudur's upper terrace open?",
        a: "Access to the upper levels is limited to small timed groups with a licensed guide. We book these slots early, as they sell out in peak months.",
      },
    ],
    seo: {
      title: "Temples & Culture Tours in Java, Bali & Flores",
      description:
        "Cultural journeys to Borobudur, Prambanan, Bali's water temples and the villages of Flores and Sumba, guided by historians and local experts who know them.",
    },
  },
  {
    slug: "surf-trips",
    name: "Surf trips",
    hook: "Reef breaks for the experienced and gentle sand for first waves",
    intro:
      "Bali's Bukit Peninsula, the south coast of Lombok and the west of Sumba catch consistent Indian Ocean swell from April to October. We match breaks to ability, book local coaches and choose stays a short walk or scooter ride from the water.",
    tripCount: 9,
    heroImage: {
      src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=80",
      alt: "A surfer riding inside a curling turquoise wave",
    },
    destinations: ["bali", "lombok-gilis", "sumba", "sumatra"],
    highlights: [
      "Uluwatu, Padang Padang and Bingin on the Bukit",
      "Quiet reef breaks along Lombok's south coast",
      "Private coaching with video review for improvers",
      "Boat trips to Mentawai breaks for advanced surfers",
    ],
    faqs: [
      {
        q: "I've never surfed. Is this for me?",
        a: "Yes. Beginners start on the sand-bottom breaks at Batu Bolong or Kuta Lombok with a coach, and progress is usually quick in warm water.",
      },
      {
        q: "When is the surf season?",
        a: "The dry season from April to October brings the most reliable swell and offshore winds on Bali's west-facing breaks. In the wet season, the east coast around Keramas works well.",
      },
      {
        q: "Can I bring my own board?",
        a: "Most airlines carry boards for a fee, and domestic carriers have their own rules. We arrange quality rentals at every stop if you would rather travel light.",
      },
    ],
    seo: {
      title: "Surf Trips in Bali, Lombok, Sumba & Mentawai",
      description:
        "Tailor-made surf trips in Indonesia for beginners to experienced surfers: Uluwatu, Lombok's south coast, Sumba and Mentawai, with coaching and good stays.",
    },
  },
  {
    slug: "wellness-retreats",
    name: "Wellness & yoga retreats",
    hook: "Morning practice, rice-field walks and Balinese healing traditions",
    intro:
      "Wellness in Bali grows from local practice: the boreh body scrub, jamu tonics brewed from turmeric and ginger, and the water blessings at Tirta Empul. We pair private yoga and spa time with quiet walks and good food, so rest feels earned rather than prescribed.",
    tripCount: 13,
    heroImage: {
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=80",
      alt: "A person meditating cross-legged on a wooden deck facing the morning light",
    },
    destinations: ["bali", "lombok-gilis", "sumba"],
    highlights: [
      "Private yoga with teachers based in Ubud and Sidemen",
      "A purification ritual at a spring temple with a priest",
      "Jamu-making with a village healer",
      "Spa time in villas with treatment pavilions",
    ],
    faqs: [
      {
        q: "Do I need yoga experience?",
        a: "No. Private sessions are tailored to you, from gentle mobility to strong vinyasa, and sessions can be swapped for breathwork or meditation.",
      },
      {
        q: "Is this a structured retreat?",
        a: "It is as structured as you like. Some guests want a daily schedule; others want two sessions a week and plenty of time by the pool. We build the plan around you.",
      },
      {
        q: "Can I take part in a water purification ritual?",
        a: "Yes, respectfully. We arrange melukat blessings with a temple priest, explain the order of the spouts beforehand and provide the correct dress.",
      },
    ],
    seo: {
      title: "Wellness & Yoga Retreats in Bali",
      description:
        "Private yoga, Balinese healing rituals, spa time and slow walks through rice fields. Tailor-made wellness retreats in Ubud, Sidemen and on Bali's quiet coast.",
    },
  },
  {
    slug: "island-hopping",
    name: "Island hopping",
    hook: "Speedboats, ferries and short flights across the archipelago",
    intro:
      "With more than 17,000 islands, the real pleasure in Indonesia is the crossing. We stitch together fast boats, small-plane hops and private charters so that each transfer feels like part of the trip, with time built in for weather and the occasional pod of dolphins.",
    tripCount: 27,
    heroImage: {
      src: "https://images.unsplash.com/photo-1702664045144-8c97b3034d26?auto=format&fit=crop&w=1800&q=80",
      alt: "Aerial view of forested limestone islets and turquoise lagoons in Raja Ampat",
      credit: "Photo: Simon Spring / Unsplash",
    },
    destinations: ["lombok-gilis", "komodo", "raja-ampat", "nusa-penida", "flores"],
    highlights: [
      "Bali to the Gilis by fast boat in around two hours",
      "Labuan Bajo to Sumba and Komodo by air and sea",
      "Private speedboats through Raja Ampat's Dampier Strait",
      "Day trips to Nusa Penida's cliffs and manta points",
    ],
    faqs: [
      {
        q: "Are fast boats safe?",
        a: "We only use operators with a strong record, proper life jackets and current licences, and we avoid crossings in rough conditions. In the windier months we suggest morning departures.",
      },
      {
        q: "How much luggage can I take on small planes?",
        a: "Domestic flights to Labuan Bajo, Sumba and Sorong usually allow 20 kg in the hold. Soft bags are easier on boats, and we can store extra luggage in Bali.",
      },
      {
        q: "How many islands can we visit in two weeks?",
        a: "Three or four bases is comfortable. More than that and the trip becomes about transfers; we would rather you had a free afternoon on each island.",
      },
    ],
    seo: {
      title: "Island Hopping in Indonesia: Gilis to Raja Ampat",
      description:
        "Island-hopping trips across Indonesia by fast boat, small plane and private charter. Bali, the Gilis, Komodo, Sumba and Raja Ampat, joined up thoughtfully.",
    },
  },
  {
    slug: "luxury-villas",
    name: "Luxury villas",
    hook: "Private pools, personal staff and views you will not want to leave",
    intro:
      "Indonesia's best villas combine Balinese craft with real privacy: a pool hanging over a river gorge, a butler who remembers how you take your coffee, a chef who cooks from the morning market. We have stayed in each one we recommend and know which rooms to request.",
    tripCount: 21,
    heroImage: {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80",
      alt: "A clifftop infinity pool with white parasols overlooking the ocean",
    },
    destinations: ["bali", "sumba", "lombok-gilis", "nusa-penida"],
    highlights: [
      "Jungle villas above the Ayung River in Sayan",
      "Clifftop estates on Bali's Bukit Peninsula",
      "Beachfront residences on Sumba's west coast",
      "In-villa chefs, drivers and spa therapists on request",
    ],
    faqs: [
      {
        q: "Are villas suitable for families or groups?",
        a: "Many are ideal, with three to six bedrooms around a shared pool. We flag those with unfenced pools or steep steps so you can choose with young children in mind.",
      },
      {
        q: "What does the villa staff do?",
        a: "Typically a villa manager, housekeeping, a cook for breakfast and a security guard. Larger estates add a butler, chef and driver. Tipping guidance is included with your documents.",
      },
      {
        q: "Can we mix villas and hotels?",
        a: "Yes, and many guests do. A few nights in a full-service resort can be a good counterpoint to the privacy of a villa, particularly at the start of a trip.",
      },
    ],
    seo: {
      title: "Luxury Villas in Bali & Sumba",
      description:
        "Hand-picked private villas in Ubud, Uluwatu and Sumba with pools, personal staff and in-villa chefs, booked by people who have stayed in every one of them.",
    },
  },
];
