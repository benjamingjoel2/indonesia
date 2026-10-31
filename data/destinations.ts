import type { Destination, Img, MonthRating, SeasonRating } from "./types";

/* ---------- helpers ---------- */

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`;

// The third argument (photographer) is kept for the photo log; credits are not shown on the site.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const img = (id: string, alt: string, photographer?: string): Img => ({ src: u(id), alt });

/** Twelve ratings, January to December, with optional notes keyed by month. */
const months = (
  ratings: [
    SeasonRating, SeasonRating, SeasonRating, SeasonRating,
    SeasonRating, SeasonRating, SeasonRating, SeasonRating,
    SeasonRating, SeasonRating, SeasonRating, SeasonRating,
  ],
  notes: Partial<Record<MonthRating["month"], string>> = {},
): MonthRating[] =>
  ratings.map((rating, i) => {
    const month = (i + 1) as MonthRating["month"];
    const note = notes[month];
    return note ? { month, rating, note } : { month, rating };
  });

/* ---------- destinations ---------- */

export const destinations: Destination[] = [
  /* ===== Top destinations ===== */
  {
    slug: "bali",
    name: "Bali",
    region: "Lesser Sunda Islands",
    group: "eastern",
    topDestination: true,
    partnerStays: 58,
    hook: "Temple ceremonies, rice terraces and some of Asia's finest villas",
    tagline:
      "An island of daily offerings and terraced valleys, where the quiet corners are still there if you know which roads to take.",
    heroImage: img(
      "1555400038-63f5ba517a47",
      "Terraced rice paddies stepping down a palm-fringed valley in central Bali",
    ),
    gallery: [
      img(
        "1544644181-1484b3fdfc62",
        "The tiered shrines of Pura Ulun Danu Beratan on the edge of a lake, with red flowers in the foreground",
      ),
      img(
        "1518548419970-58e3b4079ab2",
        "Tanah Lot sea temple on its rocky outcrop, silhouetted against a low setting sun",
      ),
      img(
        "1537953773345-d172ccf13cf1",
        "A lone figure framed between the carved split gates of Pura Lempuyang, reflected in still water",
      ),
    ],
    overview: {
      heading: "Which *Bali* is right for you?",
      paragraphs: [
        "Bali is small enough to cross in a morning and varied enough to feel like several islands. The south is cliffs, surf and long lunches above the Indian Ocean; the centre is Ubud's river gorges and craft villages; the east and north are slower still, with volcanic slopes, black-sand coves and villages where tourism remains a sideline. Most first visits try to do all of it from one base. We would rather you split your nights between two or three, each chosen for the kind of days you want.",
        "What lifts Bali above other beach destinations is its living Hindu culture. Nearly every household makes offerings each morning, temple anniversaries fill the lanes with processions, and the subak irrigation system that shapes the rice terraces is recognised by UNESCO. With a good guide you can join a temple ceremony respectfully, learn how a village banjar works, or spend a morning with a mask carver whose family has done the same work for generations.",
        "The island's popularity is real, and the traffic around Canggu and Seminyak can test anyone's patience. The answer is planning rather than avoidance. Sidemen, Munduk, the north-west coast and the quieter reaches of the Bukit peninsula all offer space and calm, and private drivers who know the back roads make the distances feel shorter. We match stays to the rhythm of your trip, from a jungle villa to a clifftop suite.",
      ],
    },
    highlights: [
      {
        title: "Sidemen and the east",
        text: "Terraced valleys beneath Mount Agung, weaving villages and almost no traffic. An easy antidote to the busier south.",
      },
      {
        title: "Ubud with a local guide",
        text: "Walk the ridge paths at dawn, visit a family compound and eat at a warung the guidebooks have not found.",
      },
      {
        title: "Temple ceremonies",
        text: "With proper dress and a guide, visitors are often welcome to observe an odalan temple festival. We check the calendar for you.",
      },
      {
        title: "Uluwatu at sunset",
        text: "Clifftop temple, Kecak dance and the Indian Ocean below. Best paired with a few nights on the Bukit peninsula.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "best", "good", "mixed", "mixed"],
      {
        3: "Nyepi, the Day of Silence, usually falls in March; the whole island shuts down for 24 hours.",
        8: "Peak season; book villas and drivers well ahead.",
      },
    ),
    bestTimeSummary:
      "The dry season from April to October brings the most reliable weather, with May, June and September offering the best balance of sunshine and space. The wet months bring short, heavy downpours rather than days of rain.",
    gettingThere:
      "Ngurah Rai International Airport (DPS) has direct flights from Singapore, Australia, the Gulf and much of Asia, and is under two hours from Jakarta.",
    faqs: [
      {
        q: "How many days do I need in Bali?",
        a: "Ten days lets you settle into two or three areas without rushing. With a week, we usually suggest Ubud or Sidemen followed by the coast. Shorter stays work best when Bali is the restful end of a wider Indonesia trip.",
      },
      {
        q: "Is there a tourist tax for Bali?",
        a: "Yes. International visitors pay a one-off levy of IDR 150,000 per person, separate from the visa. It is paid online before travel or on arrival, and we send the current details with your travel documents.",
      },
      {
        q: "Is Bali still worth visiting given the crowds?",
        a: "Yes, if you plan where to stay. The crowds concentrate in a few southern districts and at a handful of photogenic spots. Base yourself in the east, the north or the central highlands and Bali feels very different.",
      },
      {
        q: "What should I wear to visit temples?",
        a: "Cover your shoulders and knees, and wear a sarong and sash, which most temples lend or rent at the entrance. Women who are menstruating are traditionally asked not to enter temple grounds. Your guide will explain local customs on the day.",
      },
    ],
    seo: {
      title: "Bali Holidays: Tailor-Made Trips & Private Villas",
      description:
        "Tailor-made Bali holidays planned by specialists: quiet villas, private guides, temple ceremonies and rice terraces, with the best time to visit explained.",
    },
  },
  {
    slug: "komodo",
    name: "Komodo & Labuan Bajo",
    region: "Nusa Tenggara Timur",
    group: "eastern",
    topDestination: true,
    partnerStays: 22,
    hook: "Dragons, pink sand and island hopping by traditional phinisi",
    tagline:
      "A national park of bare volcanic islands and current-fed reefs, best explored slowly from the deck of a wooden phinisi.",
    heroImage: img(
      "1604560929658-bbc3c2ba6a36",
      "The ridged green hills and curved bays of Padar Island in Komodo National Park under a dramatic sky",
      "Fajruddin Mudzakkir",
    ),
    gallery: [
      img(
        "1562578057-3ca1f7815237",
        "A Komodo dragon resting its head on a log, forked tongue extended",
        "David Clode",
      ),
      img(
        "1736478772941-8da5e214dea5",
        "Aerial view of a pink-sand beach and clear turquoise shallows below grassy hills in Komodo National Park",
        "Simon Spring",
      ),
      img(
        "1571880826835-7ab2b833ad07",
        "Boats anchored in a sheltered bay beneath the steep ridges of Padar Island",
        "Rizknas",
      ),
    ],
    overview: {
      heading: "Why sail *Komodo* rather than visit?",
      paragraphs: [
        "Komodo National Park covers a cluster of islands between Sumbawa and Flores, and most of what matters here is reached by water. Day trips from Labuan Bajo are possible but hurried, with early starts and long runs back to port. Two or three nights on a private phinisi changes the experience entirely: you wake at anchor beside empty islands, hike Padar before the day boats arrive and snorkel the reefs when the light is best.",
        "The dragons are the reason most people come, and seeing them on Komodo or Rinca with a park ranger is genuinely memorable. Yet the marine life often leaves the stronger impression. Nutrient-rich currents flowing between the Pacific and Indian Oceans feed some of the healthiest reefs in Indonesia, with manta rays, turtles and reef sharks seen regularly by snorkellers as well as divers.",
        "Labuan Bajo itself has grown quickly from a fishing harbour into a small, busy town with good restaurants and a handful of excellent hotels on the hills and beaches nearby. We use it as a comfortable base either side of a sailing trip, and as the gateway to Flores for travellers continuing overland to the highland villages and crater lakes further east.",
      ],
    },
    highlights: [
      {
        title: "Dragons with a ranger",
        text: "Walk the trails of Rinca or Komodo with a park ranger to see wild Komodo dragons in their dry-forest habitat.",
      },
      {
        title: "Padar at first light",
        text: "A short, steep climb to the viewpoint over three bays of different coloured sand, ideally before the day boats arrive.",
      },
      {
        title: "Manta Point",
        text: "Snorkel or dive over a current-swept channel where manta rays gather to feed and be cleaned.",
      },
      {
        title: "A private phinisi",
        text: "Traditional wooden sailing ships with cabins, a crew and a cook, chartered for two nights or a week.",
      },
    ],
    bestTime: months(
      ["avoid", "avoid", "mixed", "best", "best", "best", "best", "best", "best", "best", "best", "mixed"],
      {
        1: "Peak of the wet season; rough seas and fewer boats operating.",
        4: "Hills still green after the rains, with calmer seas returning.",
        12: "Rains begin; sailing still possible on calmer days.",
      },
    ),
    bestTimeSummary:
      "April to November is the sailing season, with settled seas and dry, sunny days. January and February bring the heaviest rain and swell, and many boats stop operating.",
    gettingThere:
      "Komodo Airport (LBJ) in Labuan Bajo is about 1 hour 15 minutes from Bali and around 2 hours from Jakarta, with several flights a day.",
    faqs: [
      {
        q: "Are Komodo dragons dangerous?",
        a: "They can be, which is why visits are only permitted with a park ranger on set trails. Rangers keep groups at a safe distance and the risk to visitors who follow instructions is very low. Women who are menstruating are asked to let the rangers know beforehand.",
      },
      {
        q: "How many nights should I spend on a boat?",
        a: "Two nights is the minimum we recommend to reach the main sights without rushing. Three or four nights allows quieter anchorages and more time in the water. Liveaboard dive trips often run for a week.",
      },
      {
        q: "Can non-divers enjoy Komodo?",
        a: "Absolutely. Many of the best reefs are shallow enough for snorkelling, and mantas are often seen from the surface. The hikes, beaches and dragon walks need no diving at all.",
      },
      {
        q: "Do I need to pay park fees?",
        a: "Yes. Komodo National Park charges entry and activity fees, and the structure has changed several times in recent years. We include current fees in your quote so there are no surprises on the day.",
      },
    ],
    seo: {
      title: "Komodo & Labuan Bajo Trips: Phinisi Sailing",
      description:
        "Private phinisi sailing in Komodo National Park: dragon walks with rangers, Padar Island at dawn and manta snorkelling, planned around the right season.",
    },
  },
  {
    slug: "raja-ampat",
    name: "Raja Ampat",
    region: "Southwest Papua",
    group: "eastern",
    topDestination: true,
    partnerStays: 14,
    hook: "The richest coral reefs on earth, far from anywhere",
    tagline:
      "Karst islands, lagoons and reefs of extraordinary diversity at the far eastern edge of the archipelago, for those who want true remoteness.",
    heroImage: img(
      "1702664045144-8c97b3034d26",
      "Aerial view of a turquoise lagoon scattered with small forested karst islets in Raja Ampat",
      "Simon Spring",
    ),
    gallery: [
      img(
        "1516690561799-46d8f74f9abf",
        "Mushroom-shaped limestone islets rising from clear blue water in Raja Ampat",
        "sutirta budiman",
      ),
      img(
        "1715940094024-b704b7493be4",
        "A small wooden boat on emerald water in front of a thatched hut on a white-sand beach",
        "r0229 oke",
      ),
      img(
        "1724258391590-6cfdc2d783b4",
        "Forested islets spread across a calm blue bay under a bright sky",
        "SnapSaga",
      ),
    ],
    overview: {
      heading: "Is *Raja Ampat* worth the journey?",
      paragraphs: [
        "Raja Ampat sits off the western tip of New Guinea, where the Pacific meets the Indian Ocean, and its reefs hold more species of hard coral and reef fish than anywhere else that has been surveyed. Marine biologists have recorded hundreds of fish species on a single dive at Cape Kri. Above the water the scenery is just as striking: jungle-topped limestone islands, hidden lagoons and stilted villages where life still follows the tides.",
        "Getting here takes time. Most journeys involve a flight to Sorong, a two-hour ferry to Waisai and then a speedboat to your resort or boat. That distance is precisely what keeps the region so unspoilt. Visitor numbers are small, many homestays and resorts are community-linked, and a marine park fee helps fund local conservation and reef patrols. Many villages also manage their own no-take zones, and the results show in the size of the fish.",
        "There are two ways to explore. A well-run eco-resort gives you a fixed base with a house reef, daily boat trips and a slower pace. A liveaboard or private phinisi reaches the far north, including Wayag, and suits keen divers. We usually suggest at least six nights in the region, and we plan the long journey so it feels like part of the trip rather than an obstacle.",
      ],
    },
    highlights: [
      {
        title: "Piaynemo viewpoint",
        text: "A wooden staircase climbs to one of Indonesia's great views over a maze of small karst islands.",
      },
      {
        title: "Snorkelling from the jetty",
        text: "At Arborek and many resort house reefs, the coral starts in water shallow enough to stand in.",
      },
      {
        title: "Birds of paradise",
        text: "Early-morning walks on Waigeo to watch Wilson's and red birds of paradise displaying in the forest.",
      },
      {
        title: "Wayag by boat",
        text: "The far northern islands are the region's most photographed, reachable by liveaboard or a long day by speedboat.",
      },
    ],
    bestTime: months(
      ["best", "best", "best", "best", "mixed", "avoid", "avoid", "avoid", "good", "best", "best", "best"],
      {
        6: "South-east winds bring choppy seas; many liveaboards move elsewhere.",
        10: "Calm seas return and visibility is often excellent.",
      },
    ),
    bestTimeSummary:
      "October to April brings the calmest seas and the best conditions for diving and boat trips. From June to August, stronger winds make crossings rough and many boats relocate.",
    gettingThere:
      "Fly to Sorong (SOQ), around 4 hours direct from Jakarta or via Makassar from Bali, then take a 2-hour ferry to Waisai and a speedboat onward.",
    faqs: [
      {
        q: "Do I need to be a diver to visit Raja Ampat?",
        a: "No. The reefs are so close to the surface that snorkellers see an astonishing amount, and the island scenery, birdlife and village visits are reasons in themselves. That said, divers will find few better places in the world.",
      },
      {
        q: "How long should I stay?",
        a: "We suggest a minimum of six nights in Raja Ampat itself, as the journey takes most of a day in each direction. Ten nights or more lets you combine a resort stay with a few nights at sea.",
      },
      {
        q: "Is there a fee to enter the marine park?",
        a: "Yes. Every visitor needs a Raja Ampat marine park entry permit, valid for the calendar year. The fee supports conservation and local communities, and we arrange it for you in advance.",
      },
      {
        q: "Is Raja Ampat suitable for families?",
        a: "Older children who are confident swimmers usually love it. The remoteness means medical facilities are limited, so it suits families comfortable with simple travel. Some resorts have minimum age policies, which we check for you.",
      },
    ],
    seo: {
      title: "Raja Ampat Holidays: Eco-Resorts & Liveaboards",
      description:
        "Plan a Raja Ampat trip with specialists: eco-resorts, private boats, world-class snorkelling and diving, plus honest advice on seasons and getting there.",
    },
  },
  {
    slug: "yogyakarta",
    name: "Yogyakarta",
    region: "Central Java",
    group: "western",
    topDestination: true,
    partnerStays: 16,
    hook: "Borobudur at dawn, Prambanan at dusk and Java's cultural heart",
    tagline:
      "Java's royal city and the gateway to its two great temple complexes, with batik workshops, court dance and a volcano on the horizon.",
    heroImage: img(
      "1596402184320-417e7178b2cd",
      "Stone stupas on the upper terraces of Borobudur silhouetted against a misty dawn sky",
    ),
    gallery: [
      img(
        "1578469550956-0e16b69c6a3d",
        "The stone spires of the Prambanan temple complex under a bright blue sky",
        "Eugenia Clara",
      ),
      img(
        "1620549146396-9024d914cd99",
        "A seated stone Buddha among bell-shaped stupas at Borobudur",
        "Mario La Pergola",
      ),
      img(
        "1584810359583-96fc3448beaa",
        "A traveller walking towards the stepped mass of Borobudur temple on a hazy morning",
      ),
    ],
    overview: {
      heading: "What makes *Yogyakarta* special?",
      paragraphs: [
        "Yogyakarta, known simply as Jogja, is the place to understand Java. It is still a sultanate, with a working palace at its centre, and the city takes its role as the guardian of Javanese culture seriously. Gamelan rehearsals drift out of courtyards, batik is drawn by hand in small workshops, and students fill the cafés. It is lively without being overwhelming, and a refreshing contrast to the coast.",
        "Within an hour's drive are two of the greatest monuments in Asia. Borobudur, built in the ninth century, is the world's largest Buddhist temple, its terraces carved with thousands of relief panels. Prambanan, a Hindu complex from the same era, rises in tall, slender spires a short distance east of the city. Seeing both, at quiet times of day and with a guide who can read the carvings, is the reason most people come.",
        "Beyond the temples lies a rural landscape of rice fields, villages and the smoking cone of Mount Merapi. We like to base guests near Borobudur for a night or two, where the mornings are misty and the countryside is peaceful, then move into the city for food, markets and an evening of traditional performance. A becak ride through the lanes around the palace is a gentle way to end the day.",
      ],
    },
    highlights: [
      {
        title: "Borobudur in the early morning",
        text: "Arrive with the first light and walk the terraces before the heat and crowds. Upper-terrace access runs on timed, guided slots, which we book for you.",
      },
      {
        title: "Prambanan and the Ramayana ballet",
        text: "Explore the Hindu temples in the late afternoon, then watch the open-air Ramayana performance with the spires lit behind the stage.",
      },
      {
        title: "Batik and silver workshops",
        text: "Spend a morning with a batik artisan learning the wax-resist technique, or visit the silversmiths of Kotagede.",
      },
      {
        title: "Merapi by jeep",
        text: "Drive the lava trails on the slopes of Java's most active volcano, with views of the summit on clear mornings.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "best", "good", "mixed", "mixed"],
      {
        5: "Dry, clear mornings; good conditions for dawn at Borobudur.",
        12: "Afternoon downpours, though mornings are often fine for sightseeing.",
      },
    ),
    bestTimeSummary:
      "May to September is dry and best for sunrise at the temples. The wet season brings afternoon storms, but mornings are often clear and the countryside is at its greenest.",
    gettingThere:
      "Yogyakarta International Airport (YIA) is about 1 hour 15 minutes from Jakarta or Bali. Comfortable express trains also connect Jakarta and Yogyakarta in around six to seven hours.",
    faqs: [
      {
        q: "Can I still climb Borobudur?",
        a: "Yes, but access to the upper terraces is now limited to timed, guided visits with a daily quota, and visitors wear special woven sandals to protect the stone. Tickets sell out at busy times, so we book them as part of your itinerary.",
      },
      {
        q: "How many days do I need in Yogyakarta?",
        a: "Three nights covers Borobudur, Prambanan and the city at a comfortable pace. Add a night or two if you would like to explore Merapi, the southern coast or take a craft workshop.",
      },
      {
        q: "Is Yogyakarta a good addition to a Bali holiday?",
        a: "It is one of the most popular combinations. The short flight makes it easy, and Jogja's culture and history balance the beach and villa days in Bali well.",
      },
      {
        q: "What should I wear at the temples?",
        a: "Light, modest clothing covering the shoulders and knees is appropriate, and a sarong is provided at Borobudur. Bring a hat and water, as there is very little shade.",
      },
    ],
    seo: {
      title: "Yogyakarta Tours: Borobudur, Prambanan & Jogja",
      description:
        "Tailor-made Yogyakarta trips: Borobudur at dawn, Prambanan and the Ramayana ballet, batik workshops and Merapi, with private guides and handpicked hotels.",
    },
  },
  {
    slug: "lombok-gilis",
    name: "Lombok & the Gilis",
    region: "West Nusa Tenggara",
    group: "eastern",
    topDestination: true,
    partnerStays: 24,
    hook: "Car-free islands, turtles offshore and a volcano to climb",
    tagline:
      "Bali's quieter neighbour, with sweeping southern bays, the slopes of Rinjani and three small islands where the only traffic is bicycles.",
    heroImage: img(
      "1583022846753-83a4eba54ac1",
      "Aerial view of boats moored in turquoise water off the beach of Gili Trawangan",
      "Tom Bixler",
    ),
    gallery: [
      img(
        "1619681216575-d6b3964fc278",
        "Aerial view of a small, flat Gili island ringed by pale reef and deep blue sea",
        "Danny de Groot",
      ),
      img(
        "1709166796897-d5da6e01ca4f",
        "A green sea turtle swimming over a coral reef",
        "Aria Bima",
      ),
      img(
        "1724063382622-67e2c59395b6",
        "Steep green mountain ridges rising above a valley of rice fields on Lombok",
        "Filipe Freitas",
      ),
    ],
    overview: {
      heading: "Lombok or the *Gilis*, or both?",
      paragraphs: [
        "Lombok sits just east of Bali across the Lombok Strait, and is often described as Bali as it once was. That undersells it. Lombok has its own culture, shaped by the Sasak people and by Islam rather than Hinduism, and its own landscapes: long, empty bays in the south, the great volcano of Rinjani in the north and terraced farmland around Tetebatu that sees very few visitors.",
        "Off the north-west coast lie the three Gili islands. Gili Trawangan is the liveliest, Gili Air the most balanced and Gili Meno the quietest. None has cars or motorbikes, so you get around by bicycle, on foot or by horse cart. Turtles graze on the seagrass just off the beaches, and the sunsets look back across the water towards Bali's Mount Agung.",
        "We often pair a few nights on a Gili with time on Lombok itself, either in the south around Kuta and Selong Belanak or in the cooler foothills. Fast boats link the Gilis with Bali in around two hours, making this an easy extension, though we time crossings carefully because the strait can be choppy in the afternoons. For calmer journeys, the short flight to Lombok is often the better choice.",
      ],
    },
    highlights: [
      {
        title: "Snorkelling with turtles",
        text: "Green and hawksbill turtles are seen most days on the reefs around all three Gilis, often within swimming distance of the shore.",
      },
      {
        title: "Rinjani trek",
        text: "Two or three days on Indonesia's second-highest volcano, camping on the crater rim above the Segara Anak lake.",
      },
      {
        title: "The southern bays",
        text: "Selong Belanak, Mawun and Tanjung Aan offer wide sandy bays with gentle surf breaks and very little development.",
      },
      {
        title: "Sasak villages and weaving",
        text: "Visit weaving villages such as Sukarara and learn about Sasak traditions with a local guide.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "best", "good", "mixed", "mixed"],
      {
        1: "Rinjani's trekking routes are usually closed from January to March.",
        7: "Dry and clear; the busiest months on the Gilis.",
      },
    ),
    bestTimeSummary:
      "April to October is dry and ideal for beaches, snorkelling and trekking. Rinjani's trails generally close during the height of the wet season, from January to March.",
    gettingThere:
      "Lombok International Airport (LOP) is a 40-minute flight from Bali. Fast boats run from Bali to the Gilis in around two hours, and public boats cross from Lombok's Bangsal harbour in about 15 minutes.",
    faqs: [
      {
        q: "Which Gili island should I choose?",
        a: "Gili Trawangan has the most restaurants and nightlife, Gili Air is relaxed but sociable, and Gili Meno is the quietest and suits couples. We match the island to the mood you want.",
      },
      {
        q: "How hard is the Rinjani trek?",
        a: "It is demanding, with steep, loose ground and cold nights near the crater rim. A reasonable level of fitness is needed for the two-day crater rim route, and more for the summit at 3,726 metres. Porters carry camping gear and cook.",
      },
      {
        q: "Are the fast boats from Bali safe?",
        a: "Standards vary. We use established operators with good safety records, avoid overcrowded services and will reschedule if the sea is too rough. For calmer journeys, a short flight to Lombok is an alternative.",
      },
      {
        q: "Is Lombok more conservative than Bali?",
        a: "Lombok is predominantly Muslim, so modest dress is appreciated away from the beaches, especially in villages. Swimwear is fine at resorts and on the beach. During Ramadan some restaurants keep shorter hours.",
      },
    ],
    seo: {
      title: "Lombok & Gili Islands Holidays, Tailor-Made",
      description:
        "Tailor-made Lombok and Gili Islands trips: car-free islands, turtle snorkelling, Rinjani treks and quiet southern bays, with boutique stays and transfers.",
    },
  },
  {
    slug: "mount-bromo",
    name: "Mount Bromo",
    region: "East Java",
    group: "western",
    topDestination: true,
    partnerStays: 7,
    hook: "Sunrise over a sea of sand and a smoking volcanic crater",
    tagline:
      "One of Java's most extraordinary sights: a smoking crater rising from an ancient caldera, best seen as the sun comes up over the clouds.",
    heroImage: img(
      "1588668214407-6ea9a6d8c272",
      "Mount Bromo's smoking crater and the cone of Batok rising above a sea of cloud at sunrise, with Semeru behind",
    ),
    gallery: [
      img(
        "1518043610038-064362b44076",
        "Aerial view of the Bromo caldera at dawn, with mist filling the valleys below",
        "Thomas Ciszewski",
      ),
      img(
        "1534227749049-06c3ed80963c",
        "Mount Semeru releasing a plume of ash behind the Bromo volcanoes under a blue morning sky",
        "Adrian Hartanto",
      ),
      img(
        "1586016413664-864c0dd76f53",
        "A four-wheel-drive jeep on a dirt track across the grassland of the Bromo Tengger Semeru National Park",
      ),
    ],
    overview: {
      heading: "How to see *Bromo* at its best",
      paragraphs: [
        "Mount Bromo sits inside the vast Tengger caldera in East Java, surrounded by a flat plain of volcanic sand. Beyond it rises Semeru, the highest mountain on Java, which often releases small puffs of ash into the morning sky. The classic view, from the rim of the caldera at dawn, is one of the most memorable sunrises in Asia. The whole area is protected as the Bromo Tengger Semeru National Park, and the Tenggerese villages on its rim farm potatoes and leeks on impossibly steep slopes.",
        "Most visits follow a set rhythm. You leave your lodge around 3am by jeep, climb to a viewpoint such as Penanjakan or one of the quieter alternatives in time for first light, then drive down across the sand sea to climb the steps to Bromo's crater rim. Standing at the edge of a steaming crater, with the sound of the vent below, is quite something.",
        "The popular viewpoints can be crowded, so we work with local guides who know quieter spots and the right moment to arrive. We also recommend staying on the caldera rim rather than in a city several hours away. Bromo pairs naturally with Ijen, a few hours east, and with Yogyakarta, making a rewarding overland route across Java. Allow two nights so you have a spare morning if cloud hides the first sunrise.",
      ],
    },
    highlights: [
      {
        title: "Sunrise from the rim",
        text: "Watch the first light reach Bromo, Batok and Semeru from a viewpoint on the edge of the caldera.",
      },
      {
        title: "The crater edge",
        text: "Cross the sand sea and climb around 250 steps to look into Bromo's steaming vent.",
      },
      {
        title: "Tengger culture",
        text: "The Tenggerese people of the highlands keep their own Hindu traditions, including the annual Yadnya Kasada offering ceremony.",
      },
      {
        title: "Ijen and its crater lake",
        text: "A natural extension to the east: a night hike to a turquoise acid lake and the sulphur miners who work there.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "best", "good", "mixed", "mixed"],
      {
        7: "Clearest skies, though nights at the rim can drop close to freezing.",
        12: "Cloud often obscures sunrise views during the wet season.",
      },
    ),
    bestTimeSummary:
      "The dry season from April to October gives the best chance of a clear sunrise. Pack warm layers: temperatures on the rim at dawn are cold year-round.",
    gettingThere:
      "Fly to Surabaya (SUB), around an hour from Bali or Jakarta, or to Malang, then drive three to four hours to the Bromo area. Many guests arrive overland from Yogyakarta or Ijen.",
    faqs: [
      {
        q: "How cold does it get at Bromo?",
        a: "At dawn on the caldera rim, temperatures often sit between 5 and 10 degrees Celsius, and can fall lower in July and August. Bring a warm jacket, hat and gloves.",
      },
      {
        q: "Is the walk to the crater difficult?",
        a: "It is a short walk across the sand followed by a staircase of about 250 steps. It is steep but manageable for most people at a steady pace. Horses can be hired for the walk across the sand.",
      },
      {
        q: "Is Bromo ever closed?",
        a: "Occasionally. The volcano is active, and access to the crater is restricted when activity increases. We monitor official alerts and adjust plans if needed.",
      },
      {
        q: "Should I combine Bromo with Ijen?",
        a: "Many people do. Ijen involves a second very early start, so we suggest a rest day or a comfortable lodge in between, rather than doing both on consecutive nights.",
      },
    ],
    seo: {
      title: "Mount Bromo Tours: Sunrise & Crater Walks",
      description:
        "Plan a Mount Bromo trip: sunrise over the Tengger caldera, the crater walk, quiet viewpoints and stays on the rim, with Ijen and Yogyakarta extensions.",
    },
  },

  /* ===== Further destinations ===== */
  {
    slug: "java",
    name: "Java",
    region: "Greater Sunda Islands",
    group: "western",
    topDestination: false,
    partnerStays: 26,
    hook: "Volcanoes, temples and the cultural core of Indonesia",
    tagline:
      "Indonesia's most populous island, with ancient temples, active volcanoes and tea country, best explored on a slow journey from west to east.",
    heroImage: img(
      "1505993597083-3bd19fb75e57",
      "The volcanoes of the Bromo Tengger massif in silhouette at golden hour, with Semeru on the horizon",
      "Pukpik",
    ),
    gallery: [
      img(
        "1628488321763-eb2f79b7f3b5",
        "The Hindu temples of Prambanan, with fallen stone blocks in the grass in front",
        "Edmund Lou",
      ),
      img(
        "1567756396406-f529ebb5583d",
        "The Jakarta skyline lit at dusk under a warm, hazy sky",
        "Blunimo Digital",
      ),
      img(
        "1586016413664-864c0dd76f53",
        "A four-wheel-drive jeep crossing open grassland beneath volcanic hills in East Java",
      ),
    ],
    overview: {
      heading: "How to travel through *Java*",
      paragraphs: [
        "Java is home to more than half of Indonesia's people and much of its history. A journey across the island takes you from the colonial architecture and modern energy of Jakarta through the cool tea plantations around Bandung to Yogyakarta and its temples, then east to the volcanic landscapes of Bromo and Ijen. Each region has its own character, food and dialect.",
        "Travelling by private car and train lets you see the island at ground level, from rice paddies to market towns. We plan the route so drives are broken by worthwhile stops, and pair the essential sights with experiences such as a cooking class in a village home or a night in a restored plantation house. Java rewards curiosity: some of our favourite moments here happen in small towns that appear on no itinerary.",
      ],
    },
    highlights: [
      {
        title: "Borobudur and Prambanan",
        text: "Two of Southeast Asia's greatest monuments, both within easy reach of Yogyakarta.",
      },
      {
        title: "Bromo and Ijen",
        text: "Sunrise over the Tengger caldera and a night hike to Ijen's turquoise crater lake.",
      },
      {
        title: "Tea country",
        text: "Cool hills, plantation walks and colonial-era guesthouses in the highlands of West Java.",
      },
      {
        title: "Java by rail",
        text: "Comfortable executive trains link the main cities, a relaxed way to watch the countryside pass.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "best", "good", "mixed", "mixed"],
      {
        1: "Wettest month; heavy rain can cause flooding in Jakarta.",
      },
    ),
    bestTimeSummary:
      "May to September is the driest time to travel across Java, with clear mornings for volcano sunrises. The wet season brings afternoon storms but greener landscapes.",
    gettingThere:
      "Jakarta (CGK), Yogyakarta (YIA) and Surabaya (SUB) all have frequent flights, and each is around 1 to 2 hours from Bali.",
    faqs: [
      {
        q: "How long do I need to travel across Java?",
        a: "Ten to twelve days allows a comfortable journey from Jakarta or Yogyakarta to Bromo and Ijen, finishing with a short crossing to Bali. A week covers Yogyakarta and Bromo well.",
      },
      {
        q: "Is it better to travel by train or car?",
        a: "A mix works best. Trains are comfortable and avoid traffic between major cities, while a private car and driver is better for rural areas and volcano visits.",
      },
      {
        q: "Can I combine Java with Bali?",
        a: "Easily. Ijen is just across a short ferry crossing from western Bali, so many trips travel overland across Java and finish with a stay on Bali.",
      },
    ],
    seo: {
      title: "Java Tours: Temples, Volcanoes & Tea Country",
      description:
        "Tailor-made Java itineraries by train and private car: Borobudur, Prambanan, Bromo, Ijen and tea country, planned by Indonesia specialists who know the island.",
    },
  },
  {
    slug: "sumatra",
    name: "Sumatra",
    region: "Greater Sunda Islands",
    group: "western",
    topDestination: false,
    partnerStays: 12,
    hook: "Rainforest treks to find wild orangutans in Gunung Leuser",
    tagline:
      "A vast, wild island of rainforest and highlands, home to Sumatran orangutans, Batak culture and one of the world's largest volcanic lakes.",
    heroImage: img(
      "1754546781327-025bd116e592",
      "An orangutan feeding in the treetop canopy of the Sumatran rainforest",
      "Arne Wambeke",
    ),
    gallery: [
      img(
        "1723153247780-02e191e1dd0c",
        "An orangutan sitting among branches in dense jungle",
        "Nick Reijrink",
      ),
      img(
        "1591284915748-bc48608e894d",
        "Green and brown mountains sloping down to a river in the Sumatran highlands",
        "Levi T.",
      ),
      img(
        "1592639298199-7b9d01c1cf29",
        "A red boat on a lake below forested hills and mountains in North Sumatra",
        "Laurentiu Morariu",
      ),
    ],
    overview: {
      heading: "Why go to *Sumatra*?",
      paragraphs: [
        "Sumatra is for travellers who want wildlife and wilderness. Gunung Leuser National Park in the north is one of the last strongholds of the Sumatran orangutan, and guided treks from Bukit Lawang or Ketambe offer a real chance to see them in the wild, along with gibbons, Thomas's leaf monkeys and hornbills. Accommodation is simple near the forest, but the encounters stay with you.",
        "Beyond the jungle, the island rewards those who travel further. Lake Toba and Samosir Island introduce Batak culture, while the Minangkabau highlands of West Sumatra offer distinctive peaked-roof houses and some of Indonesia's best food. Further south, the Mentawai Islands draw surfers from around the world. Distances on Sumatra are long and roads can be slow, so we plan trips with realistic drive times, internal flights where they help and comfortable stops along the way.",
      ],
    },
    highlights: [
      {
        title: "Orangutan treks",
        text: "Guided walks in Gunung Leuser National Park, from half a day to several nights camping in the forest.",
      },
      {
        title: "Lake Toba",
        text: "A vast crater lake with Samosir Island at its centre and Batak villages along the shore.",
      },
      {
        title: "Minangkabau highlands",
        text: "Bukittinggi, the Harau Valley and the rich cuisine of West Sumatra, including the original rendang.",
      },
      {
        title: "Tangkahan",
        text: "A quiet riverside village on the edge of the national park, with jungle walks and natural hot springs.",
      },
    ],
    bestTime: months(
      ["mixed", "good", "good", "good", "best", "best", "best", "best", "good", "mixed", "mixed", "mixed"],
      {
        6: "Drier trails make jungle trekking more comfortable; orangutans are present all year.",
        11: "Wetter months; trails are muddy but the forest is at its most lush.",
      },
    ),
    bestTimeSummary:
      "Orangutans can be seen year-round. May to August is generally the driest period in the north, while the wetter months from October to January make trails muddier.",
    gettingThere:
      "Kualanamu International Airport (KNO) in Medan is around 2 hours 20 minutes from Jakarta, with direct flights from Singapore and Kuala Lumpur. Bukit Lawang is a 3 to 4 hour drive.",
    faqs: [
      {
        q: "How likely am I to see orangutans?",
        a: "With an experienced guide in Gunung Leuser, sightings are very likely on a full-day trek, though never guaranteed as these are wild or semi-wild animals. Longer treks increase your chances and take you deeper into the forest.",
      },
      {
        q: "How fit do I need to be for a jungle trek?",
        a: "The terrain is steep, humid and often slippery, so moderate fitness is needed. Shorter treks of a few hours are available, and we match the route to your ability.",
      },
      {
        q: "Is it ethical to visit orangutans?",
        a: "It can be, when guides keep a safe distance, never feed the animals and keep groups small. We only work with guides who follow these practices and support local conservation efforts.",
      },
    ],
    seo: {
      title: "Sumatra Tours: Orangutans & Lake Toba",
      description:
        "Tailor-made Sumatra trips: orangutan treks in Gunung Leuser, Lake Toba and Batak culture, and the Minangkabau highlands, with ethical, expert local guides.",
    },
  },
  {
    slug: "kalimantan",
    name: "Kalimantan (Borneo)",
    region: "Indonesian Borneo",
    group: "western",
    topDestination: false,
    partnerStays: 5,
    hook: "Drift upriver by klotok to see orangutans in the wild",
    tagline:
      "Indonesian Borneo, where wooden riverboats carry you through peat-swamp forest to the research camps of Tanjung Puting.",
    heroImage: img(
      "1537871285173-eb73c57c6ef4",
      "An orangutan mother hanging from a branch with her baby clinging to her side",
      "Chris Charles",
    ),
    gallery: [
      img(
        "1727079183356-9a24f87a3f70",
        "Aerial view of a brown river winding through dense green rainforest in Borneo",
        "Yosafat Gusti",
      ),
      img(
        "1727004135367-05ca2ad5cad0",
        "A mother orangutan holding her infant close in the forest",
        "Simone Dinoia",
      ),
      img(
        "1701289870791-594cf2ce0448",
        "A calm river flowing between tall rainforest trees under a pale sky",
        "Polina Koroleva",
      ),
    ],
    overview: {
      heading: "What is a *klotok* journey like?",
      paragraphs: [
        "Tanjung Puting National Park in Central Kalimantan is one of the best places in the world to see orangutans. The classic way to visit is aboard a klotok, a two-deck wooden riverboat with a crew and cook. By day you drift up the Sekonyer River past proboscis monkeys and kingfishers, stopping at camps such as Camp Leakey where rehabilitated and wild orangutans come to feeding platforms.",
        "Nights are spent moored on the river, sleeping on deck under a mosquito net and listening to the forest. The comforts are simple, but the experience is deeply rewarding. Three days and two nights is the usual length. Elsewhere in Kalimantan, the Derawan islands off the east coast offer reefs, turtles and a lake of stingless jellyfish. Both regions are a long way from the usual routes, which is much of their appeal.",
      ],
    },
    highlights: [
      {
        title: "Camp Leakey",
        text: "The research station founded in 1971, where orangutans gather at the afternoon feeding.",
      },
      {
        title: "Life on the river",
        text: "Proboscis monkeys, hornbills and fireflies seen from the deck of your private klotok.",
      },
      {
        title: "Night walks",
        text: "Guided walks in the forest after dark to find tarsiers, insects and sleeping birds.",
      },
      {
        title: "Derawan islands",
        text: "A separate extension in East Kalimantan for turtles, mantas and the jellyfish lake of Kakaban.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "mixed", "good", "best", "best", "best", "good", "good", "mixed", "mixed"],
      {
        9: "In dry years, smoke haze from land fires can affect visibility in September and October.",
        12: "Wet season; orangutans still visit the feeding platforms, often in greater numbers.",
      },
    ),
    bestTimeSummary:
      "June to August is drier and most comfortable, but orangutans are present year-round and often visit feeding platforms more in the wetter months, when wild fruit is scarcer.",
    gettingThere:
      "Fly to Pangkalan Bun (PKN), about 1 hour 15 minutes from Jakarta, with connections via Surabaya or Semarang. The klotok departs from Kumai, a 20-minute drive away.",
    faqs: [
      {
        q: "What is sleeping on a klotok like?",
        a: "You sleep on mattresses on the upper deck under mosquito nets, with a simple bathroom on board. It is basic but comfortable, and the private boat is yours for the duration of the trip.",
      },
      {
        q: "Is Kalimantan suitable for children?",
        a: "Children who enjoy wildlife often love it. The boat is safe and the walks are short, though the heat and simple facilities suit families comfortable with adventurous travel.",
      },
      {
        q: "Do I need malaria tablets?",
        a: "Malaria is present in parts of Kalimantan. Please consult a travel health clinic before your trip for current advice on antimalarials and vaccinations.",
      },
    ],
    seo: {
      title: "Borneo Orangutan Tours: Tanjung Puting by Klotok",
      description:
        "Private klotok riverboat journeys in Tanjung Puting, Indonesian Borneo: wild orangutans at Camp Leakey, proboscis monkeys and nights moored on the river.",
    },
  },
  {
    slug: "jakarta",
    name: "Jakarta",
    region: "Java",
    group: "western",
    topDestination: false,
    partnerStays: 10,
    hook: "Old Batavia, street food and a capital that never slows",
    tagline:
      "Indonesia's sprawling capital, best approached in small doses: colonial history in the old town, excellent food and a lively arts scene.",
    heroImage: img(
      "1567756396406-f529ebb5583d",
      "Jakarta's high-rise skyline lit at dusk under a hazy amber sky",
      "Blunimo Digital",
    ),
    gallery: [
      img(
        "1587053114035-e94f4162a358",
        "Visitors in Fatahillah Square in front of the white colonial-era Jakarta History Museum in Kota Tua",
        "Heru Eko Saputro",
      ),
      img(
        "1555899434-94d1368aa7af",
        "The Selamat Datang Monument and its fountain at the Bundaran HI roundabout, surrounded by skyscrapers",
        "Eko Herwantoro",
      ),
      img(
        "1590930754517-64d5fffa06ac",
        "Close view of the tall white shaft of the National Monument against a blue sky",
        "Sulthan Auliya",
      ),
    ],
    overview: {
      heading: "Is *Jakarta* worth a stop?",
      paragraphs: [
        "Jakarta rarely features on holiday wish lists, but a day or two with a good guide shows a more interesting side. Kota Tua, the old Dutch quarter of Batavia, has restored colonial buildings and museums, while the nearby Sunda Kelapa harbour still sees wooden phinisi schooners loading cargo. The National Museum holds one of the finest collections of Indonesian art and artefacts anywhere.",
        "The city is also one of the best places in the country to eat, from street stalls in Glodok, the Chinese quarter, to some of Southeast Asia's most ambitious restaurants. We usually recommend Jakarta as a stopover between international flights and onward travel, staying somewhere central and planning sightseeing around the traffic. An evening in the galleries and cafés of Kemang or Senopati shows the capital's creative side.",
      ],
    },
    highlights: [
      {
        title: "Kota Tua",
        text: "Walk the old town of Batavia, with its colonial squares, museums and the Fatahillah Museum.",
      },
      {
        title: "Sunda Kelapa harbour",
        text: "Watch wooden phinisi ships being loaded by hand at the city's historic port.",
      },
      {
        title: "Glodok food tour",
        text: "Explore Jakarta's Chinatown with a guide, tasting dishes from long-running family stalls.",
      },
      {
        title: "The Thousand Islands",
        text: "A string of small islands in Jakarta Bay, an easy escape by boat for a night or two.",
      },
    ],
    bestTime: months(
      ["avoid", "mixed", "mixed", "good", "good", "best", "best", "best", "best", "good", "mixed", "mixed"],
      {
        1: "Peak rainfall; flooding can disrupt road travel.",
        2: "Still wet, with occasional flooding in low-lying areas.",
      },
    ),
    bestTimeSummary:
      "June to September is the driest period. January and February bring the heaviest rain and occasional flooding, which can make getting around the city slow.",
    gettingThere:
      "Soekarno-Hatta International Airport (CGK) is Indonesia's main hub, about 1 hour 50 minutes from Bali, with direct flights from across Asia, the Middle East and Europe.",
    faqs: [
      {
        q: "How long should I spend in Jakarta?",
        a: "One or two nights is enough for most travellers, ideally around an international flight. This allows time for Kota Tua, a museum and a good dinner without feeling rushed.",
      },
      {
        q: "How bad is the traffic?",
        a: "It can be very heavy, especially at rush hour and in the rain. We plan sightseeing outside peak times, and the MRT and airport train help for some journeys.",
      },
      {
        q: "Where is the best area to stay?",
        a: "Central areas such as Menteng and around Thamrin and Sudirman offer good hotels and easy access to the sights. Near the airport is practical for very early flights.",
      },
    ],
    seo: {
      title: "Jakarta Stopover: Old Batavia & Street Food",
      description:
        "Make the most of a Jakarta stopover with private guides: Kota Tua and old Batavia, Sunda Kelapa harbour, the National Museum and the city's best street food.",
    },
  },
  {
    slug: "lake-toba",
    name: "Lake Toba",
    region: "North Sumatra",
    group: "western",
    topDestination: false,
    partnerStays: 6,
    hook: "A vast volcanic lake and the Batak villages of Samosir",
    tagline:
      "The world's largest volcanic lake, cool and calm at 900 metres, with Samosir Island and its Batak traditions at the centre.",
    heroImage: img(
      "1440558929809-1412944a6225",
      "View over Lake Toba from a forested hillside, with green slopes and distant peninsulas under a blue sky",
      "Dio Hasibuan",
    ),
    gallery: [
      img(
        "1642762205001-aada86f9dbe2",
        "Green hills sloping down to the still blue water of Lake Toba beneath cloudy mountains",
        "Rizaldie Project",
      ),
      img(
        "1625024017825-1a1dfc2f4ad7",
        "Rocky shoreline of Lake Toba with grassy golden hills rising across the water",
        "Bagoes Ilhamy",
      ),
      img(
        "1553515831-1ee03d85e31c",
        "The upswept roof of a traditional Batak house among trees above Lake Toba",
        "Leo Sagala",
      ),
    ],
    overview: {
      heading: "What is there to do at *Lake Toba*?",
      paragraphs: [
        "Lake Toba fills the caldera of a supervolcano that erupted around 74,000 years ago. Today it is a peaceful, sweeping lake ringed by steep green hills, around 100 kilometres long, with Samosir Island, almost the size of Singapore, sitting in the middle. The altitude keeps the air pleasantly cool, a welcome change after the heat of the lowlands, and evenings on the water are wonderfully still.",
        "This is the homeland of the Toba Batak people, and villages on Samosir still have their distinctive boat-shaped houses, stone tombs and carved ancestral sites. The pleasures here are unhurried: cycling quiet lanes, swimming from a jetty, visiting weaving villages and watching the light change on the water. It pairs well with orangutan trekking in Gunung Leuser, a scenic drive away through the hills of North Sumatra.",
      ],
    },
    highlights: [
      {
        title: "Samosir Island",
        text: "Batak villages, stone chairs and royal tombs, best explored by bicycle or with a local guide.",
      },
      {
        title: "Sipiso-piso waterfall",
        text: "A tall, slender waterfall dropping into a gorge at the northern end of the lake.",
      },
      {
        title: "Batak music and ulos weaving",
        text: "Hear traditional gondang music and meet weavers making the ulos cloth used in ceremonies.",
      },
      {
        title: "Lake swimming",
        text: "The clear, fresh water is calm and pleasant for swimming from the shore or a private jetty.",
      },
    ],
    bestTime: months(
      ["mixed", "good", "good", "good", "best", "best", "best", "best", "good", "mixed", "mixed", "mixed"],
      {
        7: "Drier and clear, with cool evenings.",
      },
    ),
    bestTimeSummary:
      "May to August is generally the driest and clearest time. Rain is more frequent from October to January, though it often comes as afternoon showers.",
    gettingThere:
      "Silangit Airport (DTB) near the southern shore has direct flights from Jakarta of around 2 hours 20 minutes. Alternatively, fly to Medan and drive about four to five hours.",
    faqs: [
      {
        q: "How do I get to Samosir Island?",
        a: "Regular ferries cross from Parapat or Ajibata to Tuk Tuk and Tomok on Samosir in under an hour. Car ferries are also available, and Samosir is connected to the mainland by a small bridge on its western side.",
      },
      {
        q: "How long should I stay at Lake Toba?",
        a: "Two or three nights gives time to explore Samosir and relax by the lake. It works well combined with Bukit Lawang for orangutan trekking.",
      },
      {
        q: "Is the lake safe for swimming?",
        a: "Yes, swimming is popular around Tuk Tuk and other villages on Samosir. The water is deep close to shore, so it suits confident swimmers.",
      },
    ],
    seo: {
      title: "Lake Toba & Samosir Island Trips",
      description:
        "Discover Lake Toba, the world's largest volcanic lake: Samosir Island, Batak villages and cool highland air, combined with Sumatra's orangutan trekking.",
    },
  },
  {
    slug: "flores",
    name: "Flores",
    region: "Nusa Tenggara Timur",
    group: "eastern",
    topDestination: false,
    partnerStays: 11,
    hook: "Highland villages, coloured crater lakes and a road trip east",
    tagline:
      "A long, mountainous island east of Komodo, with traditional villages, coloured crater lakes and one of Indonesia's great road journeys.",
    heroImage: img(
      "1643785879506-ec3e637a9f2d",
      "The conical thatched houses of Wae Rebo village on a green clearing surrounded by mountains",
      "Ash Hayes",
    ),
    gallery: [
      img(
        "1519901246372-95385e087ff3",
        "Steep crater walls above the milky turquoise water of one of the Kelimutu crater lakes",
        "Pierre-Yves Burgi",
      ),
      img(
        "1578019448201-09ad2ac7995a",
        "Traditional cone-shaped houses in a mountain village shrouded in low cloud",
        "Marcella Oscar",
      ),
      img(
        "1607427225127-a4ae1d4b050c",
        "A white boat moored in a calm bay surrounded by green hills near Labuan Bajo",
        "Denissa Devy",
      ),
    ],
    overview: {
      heading: "Why continue east into *Flores*?",
      paragraphs: [
        "Most visitors see only Labuan Bajo, the port at Flores' western tip, before boarding a boat to Komodo. Those who continue east find one of Indonesia's most rewarding islands: volcanic ridges, spider-web rice fields around Ruteng, the traditional village of Wae Rebo and the megalithic stone platforms of Bena near Bajawa. Along the way are hot springs, quiet beaches and the islands of Riung, all far from the crowds.",
        "The journey ends at Kelimutu, where three crater lakes sit side by side, each changing colour over time due to volcanic minerals. Driving the length of the island takes five or six days with a private driver and guide, staying in simple but characterful lodges along the way. It is the right trip for travellers who value culture and landscape over polished comfort.",
      ],
    },
    highlights: [
      {
        title: "Wae Rebo",
        text: "A remote mountain village of cone-shaped houses, reached by a three-hour hike, where visitors can stay overnight.",
      },
      {
        title: "Kelimutu crater lakes",
        text: "Three lakes on the summit of a volcano, each a different colour, seen at sunrise from the viewpoint.",
      },
      {
        title: "Bena and the Ngada villages",
        text: "Ancestral houses and megalithic stones in villages below the cone of Mount Inerie.",
      },
      {
        title: "Spider-web rice fields",
        text: "Circular lingko fields near Ruteng, divided like the spokes of a wheel according to local custom.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "best", "good", "good", "mixed"],
      {
        8: "Clear mornings give the best chance of seeing Kelimutu's colours at sunrise.",
        1: "Rain can cause landslides on the mountain roads.",
      },
    ),
    bestTimeSummary:
      "May to September is the driest time for travelling overland and the best chance of clear mornings at Kelimutu. The wet season can bring landslides on mountain roads.",
    gettingThere:
      "Fly into Labuan Bajo (LBJ) in the west, about 1 hour 15 minutes from Bali, and out of Ende or Maumere in the east, which connect to Bali via Kupang.",
    faqs: [
      {
        q: "Can I stay overnight in Wae Rebo?",
        a: "Yes. Guests sleep on mats in one of the traditional houses, sharing meals with the village. Facilities are basic, and the hike up takes around three hours from the trailhead.",
      },
      {
        q: "Why do the Kelimutu lakes change colour?",
        a: "The colours come from dissolved volcanic minerals and gases, which shift with changes in the volcano's activity. The lakes have been turquoise, green, red and nearly black at different times.",
      },
      {
        q: "How comfortable are the hotels in Flores?",
        a: "Outside Labuan Bajo, accommodation is simple: clean, friendly guesthouses and small lodges rather than luxury resorts. We choose the best available at each stop.",
      },
    ],
    seo: {
      title: "Flores Overland Tours: Wae Rebo & Kelimutu",
      description:
        "Explore Flores beyond Labuan Bajo: overnight in Wae Rebo, sunrise at the Kelimutu crater lakes and Bena's megaliths, on a private overland journey.",
    },
  },
  {
    slug: "sumba",
    name: "Sumba",
    region: "Nusa Tenggara Timur",
    group: "eastern",
    topDestination: false,
    partnerStays: 8,
    hook: "Savannah, wild horses and villages of towering thatched roofs",
    tagline:
      "A dry, rolling island of savannah and limestone coast, where the ancestral Marapu faith still shapes village life.",
    heroImage: img(
      "1776442564181-fd60b00b9afc",
      "Traditional Sumbanese houses with tall, peaked thatched roofs around a dusty village clearing",
      "Wahde Stock",
    ),
    gallery: [
      img(
        "1648873581098-3b37f8e10652",
        "Aerial view of rolling grassy hills and a winding track across the Sumba savannah",
        "Reza Irawan",
      ),
      img(
        "1678150913309-cbebdf17d804",
        "A group of horses running along a rocky beach beside the surf",
        "Deepavali Gaind",
      ),
      img(
        "1642510099705-206661e94bfd",
        "A lone twisted tree standing in shallow water on a tidal flat",
        "sutirta budiman",
      ),
    ],
    overview: {
      heading: "What makes *Sumba* different?",
      paragraphs: [
        "Sumba lies south of Flores and feels quite unlike the rest of Indonesia. Much of the island is open savannah, grazed by horses and buffalo, and its villages are dominated by houses with soaring thatched roofs, built around megalithic stone tombs. Many Sumbanese follow Marapu, an ancestral faith that guides ceremonies, weaving and the rhythm of the year. Horses remain central to life here, and are still exchanged as part of wedding and funeral customs.",
        "The west is greener, with surf beaches, lagoons and the traditional villages of Ratenggaro and Praijing. The east is drier and known for fine ikat textiles. Sumba also has a small number of exceptional resorts, which makes it possible to combine real cultural depth with very comfortable stays. Roads are quiet and distances manageable, so a few nights here can feel surprisingly unhurried.",
      ],
    },
    highlights: [
      {
        title: "Traditional villages",
        text: "Ratenggaro, Praijing and others, with peaked-roof houses and ancient stone tombs.",
      },
      {
        title: "Ikat weaving",
        text: "Visit weavers in East Sumba, where hand-dyed ikat textiles are among Indonesia's finest.",
      },
      {
        title: "Pasola",
        text: "A ritual mounted contest between villages, held in western Sumba in February or March.",
      },
      {
        title: "Weekuri lagoon",
        text: "A clear, saltwater lagoon fed by the sea through limestone rocks, ideal for a calm swim.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "good", "good", "best", "best", "best", "best", "best", "best", "good", "mixed"],
      {
        2: "Pasola usually takes place in February or March, with dates set by village elders.",
        9: "Dry and golden; the savannah at its most striking.",
      },
    ),
    bestTimeSummary:
      "May to October is dry and sunny, with golden savannah and good surf. The wet season is shorter here than in much of Indonesia, and the landscape turns green.",
    gettingThere:
      "Tambolaka (TMC) in West Sumba and Waingapu (WGP) in the east both have direct flights from Bali of around one hour.",
    faqs: [
      {
        q: "Can visitors watch the Pasola?",
        a: "Yes. Visitors are welcome, though the dates are set each year according to traditional signs, so plans need flexibility. We follow local announcements closely.",
      },
      {
        q: "How should I behave when visiting villages?",
        a: "Visit with a guide who can introduce you properly, ask before taking photographs and dress modestly. A small contribution or betel nut offering is customary.",
      },
      {
        q: "Is Sumba good for surfing?",
        a: "The south and west coasts have powerful reef breaks suited to experienced surfers. Beginners will find gentler conditions at some beaches, but Sumba is not primarily a learner destination.",
      },
    ],
    seo: {
      title: "Sumba Holidays: Villages, Ikat & Savannah",
      description:
        "Discover Sumba: traditional villages with towering thatched roofs, Marapu culture, ikat weaving, wild coastlines and exceptional resorts, tailor-made for you.",
    },
  },
  {
    slug: "sulawesi",
    name: "Sulawesi (Toraja)",
    region: "South Sulawesi",
    group: "eastern",
    topDestination: false,
    partnerStays: 9,
    hook: "Tongkonan houses, cliff graves and the Toraja highlands",
    tagline:
      "In the mountains of South Sulawesi, the Toraja people's elaborate funeral rites and ancestral houses offer a glimpse of a unique worldview.",
    heroImage: img(
      "1582426007790-f5a2e2392dd3",
      "Traditional Toraja tongkonan houses with sweeping boat-shaped roofs among trees in Tana Toraja",
      "Heru Haryanto",
    ),
    gallery: [
      img(
        "1734190684856-c0e072d726d3",
        "A lush valley of rice fields and villages surrounded by forested hills in the Sulawesi highlands",
        "Joshua Umboh",
      ),
      img(
        "1675206362603-b3c3c3ca47c6",
        "Close view of the carved wooden facade and curved roof of a Toraja tongkonan",
        "hasyir anshori",
      ),
      img(
        "1676134690674-fa97718b8510",
        "Aerial view of a tongkonan house with red roofs set in thick mountain forest",
        "Faried Anzyari",
      ),
    ],
    overview: {
      heading: "What should I know about *Toraja*?",
      paragraphs: [
        "Tana Toraja sits in the cool highlands of South Sulawesi, a long drive north of Makassar. The Toraja people are known for their tongkonan, ancestral houses with dramatic upswept roofs, and for funeral ceremonies that can last several days and bring entire communities together. The dead are laid to rest in cliff-face graves and caves, watched over by carved wooden effigies.",
        "Visiting with a respectful local guide allows you to understand rather than simply observe these traditions. Beyond Toraja, Sulawesi offers some of Indonesia's finest diving, at Bunaken and the Lembeh Strait in the north and Wakatobi in the south-east, so the island suits combined culture and reef itineraries. Its odd, sprawling shape means flights rather than roads link the regions, and we plan the connections so they flow smoothly.",
      ],
    },
    highlights: [
      {
        title: "Ke'te Kesu",
        text: "A well-preserved village of tongkonan and rice barns, with ancient graves on the hillside behind.",
      },
      {
        title: "Lemo and Londa",
        text: "Cliff graves guarded by tau-tau effigies, and burial caves explored by lamplight.",
      },
      {
        title: "Highland walks",
        text: "Gentle hikes through rice terraces and bamboo forest between traditional villages.",
      },
      {
        title: "Diving in the north",
        text: "Combine Toraja with the walls of Bunaken or the muck diving of the Lembeh Strait.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "mixed", "good", "best", "best", "best", "best", "good", "mixed", "mixed"],
      {
        7: "Funeral ceremonies are most frequent from July to September, after the harvest.",
      },
    ),
    bestTimeSummary:
      "June to September is drier and the main season for funeral ceremonies. Rain is more frequent from November to April, though the highlands are green and quiet.",
    gettingThere:
      "Fly to Makassar (UPG), around 1 hour 20 minutes from Bali, then drive eight to nine hours north, or take one of the limited flights to Toraja's small airport.",
    faqs: [
      {
        q: "Can visitors attend a Toraja funeral?",
        a: "Visitors are often welcomed at funeral ceremonies when accompanied by a local guide, and it is customary to bring a gift such as sugar or cigarettes for the family. Ceremonies involve animal sacrifice, which some people may find distressing.",
      },
      {
        q: "How long should I spend in Toraja?",
        a: "Three nights allows time to explore the main villages and grave sites and, if timing allows, attend a ceremony. The long journey from Makassar makes shorter stays hard to justify.",
      },
      {
        q: "Is Sulawesi good for diving?",
        a: "Exceptionally. Bunaken, the Lembeh Strait and Wakatobi are among Indonesia's most celebrated dive areas, and can be combined with Toraja on a longer trip.",
      },
    ],
    seo: {
      title: "Toraja & Sulawesi Tours: Culture and Diving",
      description:
        "Travel to Tana Toraja in Sulawesi: tongkonan houses, cliff graves and funeral traditions with respectful local guides, plus diving at Bunaken and Lembeh.",
    },
  },
  {
    slug: "maluku",
    name: "Maluku",
    region: "Spice Islands",
    group: "eastern",
    topDestination: false,
    partnerStays: 4,
    hook: "The original Spice Islands, with nutmeg groves and quiet reefs",
    tagline:
      "Remote islands whose nutmeg and cloves once drove empires, now offering forts, spice groves and some of Indonesia's least visited reefs.",
    heroImage: img(
      "1703081350237-ef57fafb6f6a",
      "The volcano of Gunung Api rising across a calm turquoise bay in the Banda Islands, framed by trees",
      "Sanjia (Jay)",
    ),
    gallery: [
      img(
        "1715394898879-4bc0610a14bb",
        "View from a green hillside over a sheltered bay and island village in the Banda Islands",
        "Sony Adam",
      ),
      img(
        "1687958129750-fa7d1618c905",
        "A pale green bay curving below thickly forested hills in Maluku",
        "The Ian",
      ),
      img(
        "1583212292454-1fe6229603b7",
        "Sunlight filtering through clear water onto a shallow coral reef with small fish",
      ),
    ],
    overview: {
      heading: "Why visit the *Spice Islands*?",
      paragraphs: [
        "For centuries the tiny Banda Islands were the world's only source of nutmeg and mace, and control of them shaped European history. The Dutch fortified Banda Neira, and the nearby island of Run was famously exchanged for Manhattan under the Treaty of Breda in 1667. Today the islands are peaceful, with crumbling colonial mansions, Fort Belgica overlooking the harbour and nutmeg trees shading the plantations.",
        "Maluku is also excellent for snorkelling and diving, with healthy reefs, coral gardens and walls that see very few visitors. Ambon, the provincial capital, is the usual gateway and has its own reefs and historic churches. Getting further requires time and flexibility, as ferries and flights are infrequent, but those who make the journey find an unhurried place with a deep sense of history.",
      ],
    },
    highlights: [
      {
        title: "Banda Neira",
        text: "Colonial streets, Fort Belgica and a harbour overlooked by the volcano of Gunung Api.",
      },
      {
        title: "Nutmeg plantations",
        text: "Walk through groves of nutmeg shaded by tall kenari trees, and learn how the spice is harvested.",
      },
      {
        title: "Reefs and lava flows",
        text: "Snorkel coral that has regrown over lava flows from Gunung Api's 1988 eruption.",
      },
      {
        title: "Climb Gunung Api",
        text: "A steep early-morning climb for views across the Banda Islands.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "good", "best", "good", "avoid", "avoid", "avoid", "mixed", "best", "best", "good"],
      {
        7: "Maluku's wet season; strong south-east winds make sea crossings rough.",
        10: "Calm seas and good visibility for diving.",
      },
    ),
    bestTimeSummary:
      "Maluku follows a different pattern from Bali. October to December and March to May bring calmer seas, while June to August is wet and windy, with rough crossings.",
    gettingThere:
      "Fly to Ambon (AMQ), about 3 hours from Jakarta or via Makassar. Banda Neira is reached by fast ferry in around six hours, or occasional small-plane flights.",
    faqs: [
      {
        q: "How easy is it to reach Banda Neira?",
        a: "It takes some effort. Ferries from Ambon do not run every day and can be cancelled in rough weather, and flights are infrequent. We build in buffer days so schedules stay relaxed.",
      },
      {
        q: "What is accommodation like in Maluku?",
        a: "Mostly small heritage guesthouses and dive lodges rather than resorts. Several are in restored colonial buildings with a great deal of character.",
      },
      {
        q: "Is Maluku good for diving?",
        a: "Yes. Banda has excellent visibility, walls, healthy coral and seasonal schools of hammerhead sharks for experienced divers. Ambon Bay is known for unusual macro life.",
      },
    ],
    seo: {
      title: "Maluku & Banda Islands: Spice Island Trips",
      description:
        "Explore Maluku and the Banda Islands, the original Spice Islands: nutmeg plantations, colonial forts and quiet reefs, planned with plenty of buffer time.",
    },
  },
  {
    slug: "papua",
    name: "Papua",
    region: "New Guinea Highlands",
    group: "eastern",
    topDestination: false,
    partnerStays: 4,
    hook: "Highland valleys, Dani villages and birds of paradise",
    tagline:
      "Indonesia's wildest frontier, from the Baliem Valley highlands to remote coasts, for travellers seeking genuine expedition travel.",
    heroImage: img(
      "1622638989794-3c2dd13726ed",
      "A wide highland valley of fields and scattered houses beneath forested mountains and white clouds in Papua",
      "Deco Kogoya",
    ),
    gallery: [
      img(
        "1608501408162-d9db758dd88e",
        "A crowd of Papuan men in feathered headdresses and traditional dress at a cultural festival",
        "Bob Brewer",
      ),
      img(
        "1640576925051-ce4c9f3697b7",
        "Green hills and a winding road through a valley with mountains behind",
        "Yurri Ann",
      ),
      img(
        "1615608178738-37d47d27c13d",
        "A small forested island in a calm, mountain-ringed bay off the Papuan coast",
        "Asso Myron",
      ),
    ],
    overview: {
      heading: "Is *Papua* right for you?",
      paragraphs: [
        "Papua covers the western half of New Guinea and is one of the least explored places on earth. The Baliem Valley, reached by air from Jayapura, is home to the Dani and neighbouring peoples, whose villages, pig feasts and highland farming have changed relatively little. Treks here pass through gardens and forest between small settlements, staying in simple guesthouses or village huts.",
        "On the coast, Cenderawasih Bay offers encounters with whale sharks, and the forests are home to several species of birds of paradise. Travel in Papua requires patience, flexible schedules and an appetite for adventure. Flights are small and weather-dependent, and comforts are limited outside the towns. In return, it offers encounters with cultures and wildlife found almost nowhere else, and very few other travellers.",
      ],
    },
    highlights: [
      {
        title: "Baliem Valley Festival",
        text: "Held each August, with mock battles, music and dance from highland communities.",
      },
      {
        title: "Highland treks",
        text: "Walks of several days between villages in the Baliem Valley, guided by local porters.",
      },
      {
        title: "Whale sharks",
        text: "Swim alongside whale sharks that gather near fishing platforms in Cenderawasih Bay.",
      },
      {
        title: "Birds of paradise",
        text: "Dawn walks into the forest to see these extraordinary birds displaying.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "good", "best", "best", "best", "good", "good", "mixed", "mixed"],
      {
        8: "The Baliem Valley Festival takes place in August.",
      },
    ),
    bestTimeSummary:
      "The highlands can be visited year-round, with June to August generally drier and August bringing the Baliem Valley Festival. Rain is frequent at any time.",
    gettingThere:
      "Fly to Jayapura (DJJ), around five hours from Jakarta, often via Makassar, then take a 45-minute flight to Wamena in the Baliem Valley.",
    faqs: [
      {
        q: "Do I need a permit to visit Papua?",
        a: "Requirements change from time to time, and some areas need a travel permit or police registration. We check the current rules and arrange paperwork for your route.",
      },
      {
        q: "How fit do I need to be for highland treks?",
        a: "Reasonable fitness is needed, as trails are often steep and muddy. Porters carry gear, and routes can be adapted to suit different abilities.",
      },
      {
        q: "Is Papua safe for travellers?",
        a: "Some parts of Papua experience periodic unrest, and conditions can change. We follow official travel advice closely, work with trusted local partners and only plan routes in areas we consider suitable.",
      },
    ],
    seo: {
      title: "Papua Expeditions: Baliem Valley & Beyond",
      description:
        "Expedition travel in Papua: Baliem Valley treks and festival, Dani villages, whale sharks and birds of paradise, planned with trusted local partners.",
    },
  },
  {
    slug: "nusa-penida",
    name: "Nusa Penida",
    region: "Bali",
    group: "eastern",
    topDestination: false,
    partnerStays: 9,
    hook: "Towering sea cliffs, manta rays and a quieter side of Bali",
    tagline:
      "A rugged island just off Bali's south-east coast, with soaring limestone cliffs and reliable manta ray encounters.",
    heroImage: img(
      "1539367628448-4bc5c9d171c8",
      "The headland of Kelingking Beach on Nusa Penida curving into the sea, with white sand and waves below",
    ),
    gallery: [
      img(
        "1573790387438-4da905039392",
        "Limestone cliffs and rock stacks above Diamond Beach on Nusa Penida's east coast",
      ),
      img(
        "1577717903315-1691ae25ab3f",
        "Sea stacks and a white-sand cove beneath steep cliffs on the coast of Nusa Penida",
      ),
      img(
        "1544551763-46a013bb70d5",
        "A scuba diver swimming beside a dense school of yellow fish over a reef",
      ),
    ],
    overview: {
      heading: "Should you stay on *Nusa Penida*?",
      paragraphs: [
        "Nusa Penida is just a short boat ride from Bali, yet feels like a different world. Its coastline is all high limestone cliffs and secluded coves, including the famous T-shaped headland above Kelingking Beach. Inland, the island is dry and rural, with small temples and villages where tourism has arrived only recently. Seaweed farming, not tourism, still supports many families along the western shore.",
        "Most visitors come on a day trip, which means long hours on rough roads and crowded viewpoints. Staying a night or two lets you see the cliffs at quieter times and spend more time in the water. Manta Point and Crystal Bay offer some of the region's best snorkelling and diving, including reliable manta rays and, in season, the occasional ocean sunfish.",
      ],
    },
    highlights: [
      {
        title: "Kelingking Beach",
        text: "The island's most photographed viewpoint, best visited early in the morning.",
      },
      {
        title: "Manta Point",
        text: "Snorkel or dive with reef manta rays that visit cleaning stations year-round.",
      },
      {
        title: "Diamond and Atuh beaches",
        text: "Steep stairways lead down to pale sand coves framed by rock stacks on the east coast.",
      },
      {
        title: "Ocean sunfish",
        text: "Experienced divers can look for the mola mola at Crystal Bay between July and October.",
      },
    ],
    bestTime: months(
      ["mixed", "mixed", "mixed", "good", "good", "best", "best", "best", "best", "best", "good", "mixed"],
      {
        8: "Mola mola season runs roughly from July to October, with cooler water.",
        1: "Wet season brings rougher crossings and muddier roads.",
      },
    ),
    bestTimeSummary:
      "The dry season from April to November brings calmer seas and easier roads. July to October is best for divers hoping to see the mola mola.",
    gettingThere:
      "Fast boats from Sanur on Bali reach Nusa Penida in around 30 to 45 minutes, with several departures each day.",
    faqs: [
      {
        q: "Is a day trip to Nusa Penida worth it?",
        a: "It can be, but it is a long day with rough roads and busy viewpoints. Staying at least one night lets you see the island at a gentler pace and at quieter times.",
      },
      {
        q: "Are the beaches safe for swimming?",
        a: "Many of the island's beaches have strong currents and powerful waves, and swimming is dangerous at some, including Kelingking. Ask your guide which beaches are suitable on the day.",
      },
      {
        q: "Can beginners snorkel with manta rays?",
        a: "Yes, mantas are often visible from the surface at Manta Point, though conditions can be choppy. We use experienced operators who choose the right time and site.",
      },
    ],
    seo: {
      title: "Nusa Penida Trips: Cliffs, Coves & Manta Rays",
      description:
        "Discover Nusa Penida beyond a day trip: Kelingking Beach at dawn, manta ray snorkelling, quiet coves and boutique stays, just a short boat ride from Bali.",
    },
  },
];
