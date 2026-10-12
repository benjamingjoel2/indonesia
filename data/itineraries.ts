import type { Itinerary } from "./types";

/**
 * Sample itineraries. Every trip is tailor-made; these are starting points
 * with realistic routing, stays and seasonal pricing for 2027.
 * Prices are per person, sharing, in USD.
 */
export const itineraries: Itinerary[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "bali-slow-and-soulful",
    title: "Bali, Slow and Soulful",
    durationDays: 10,
    nights: 9,
    destinations: ["bali"],
    experiences: ["temples-culture", "wellness-retreats"],
    budgetTier: "premium",
    heroImage: {
      src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1800&q=80",
      alt: "Terraced rice fields stepping down a valley beneath coconut palms in central Bali",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1800&q=80",
        alt: "Pura Ulun Danu Beratan on Lake Beratan with clouds over the hills behind",
      },
      {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80",
        alt: "A therapist pouring oil during a massage in a spa",
      },
      {
        src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1800&q=80",
        alt: "Tanah Lot sea temple silhouetted on its rock at sunset",
      },
    ],
    summary:
      "Ten unhurried days moving from the river valleys of Sayan to the rice terraces of Sidemen and on to the cliffs of Uluwatu. Mornings are for walking and ceremony, afternoons for the pool, and every stop leaves room for nothing in particular.",
    inclusionLine: "All breakfasts · 6 guided experiences · Private transfers",
    highlights: [
      "A water blessing at a spring temple with a local priest",
      "Sunrise walk along the Campuhan ridge",
      "Three nights among the rice terraces of Sidemen",
      "Kecak performance on the cliffs at Uluwatu",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Bali, up to the Ayung valley",
        body: "Your driver meets you at Ngurah Rai airport for the hour-long drive north to Sayan, just west of Ubud. The villa sits above the Ayung River gorge, and the sound of water carries up through the trees. The rest of the day is free: a swim, an early dinner and a long sleep after the flight. Your guide will drop by to talk through the week ahead.",
        stay: "sayan-ridge-villas",
        meals: ["D"],
        image: {
          src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1800&q=80",
          alt: "A narrow river winding between tall coconut palms with a small boat on the water",
        },
      },
      {
        day: 2,
        title: "Campuhan ridge and Ubud's markets",
        body: "Set out at first light along the Campuhan ridge, a grassy spine between two rivers where farmers are already at work. Breakfast back at the villa, then into Ubud with your guide for the morning market, the royal palace and a quiet temple most visitors pass by. The afternoon is yours, perhaps for a private yoga session in the villa pavilion.",
        makeItYours: "Swap the market for a Balinese cooking class in a family compound.",
        stay: "sayan-ridge-villas",
        meals: ["B"],
      },
      {
        day: 3,
        title: "Water blessing at a spring temple",
        body: "Drive north to a spring temple near Tampaksiring, timed before the tour buses arrive. With a priest, you take part in melukat, a purification ritual beneath a line of carved spouts, then share offerings and tea. Return through the Tegallalang terraces and stop at a family-run coffee garden. Late afternoon, a two-hour boreh treatment at the villa spa.",
        stay: "sayan-ridge-villas",
        meals: ["B"],
      },
      {
        day: 4,
        title: "A free day in Sayan",
        body: "Nothing is scheduled. Walk down to the river, read by the pool or ask the villa team to arrange a rafting trip on the Ayung. In the evening, a table is booked at one of Ubud's better kitchens, where Balinese ingredients are cooked with care and without fuss. Your driver is on call for the day.",
        stay: "sayan-ridge-villas",
        meals: ["B"],
      },
      {
        day: 5,
        title: "East to Sidemen",
        body: "A ninety-minute drive east brings you to Sidemen, a valley of rice terraces and weaving villages under Mount Agung. Stop on the way at Kerta Gosa in Klungkung, the old court of justice with its painted ceilings. The lodge is simple and beautifully placed, with open views across the valley and a small pool. Dinner is cooked from the garden.",
        stay: "sidemen-terrace-lodge",
        meals: ["B", "D"],
      },
      {
        day: 6,
        title: "Walking the Sidemen valley",
        body: "A local guide leads a three-hour walk along irrigation channels and field paths, explaining the subak water system that has governed Balinese rice farming for a thousand years. Stop at a songket workshop where women weave gold-threaded cloth on wooden looms. The afternoon is free, with a massage on the lodge terrace if you wish.",
        makeItYours: "Climb Mount Agung's southern route with an experienced guide, starting at midnight.",
        stay: "sidemen-terrace-lodge",
        meals: ["B", "D"],
        image: {
          src: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1800&q=80",
          alt: "Green rice terraces in morning haze with forested hills and a volcano behind",
        },
      },
      {
        day: 7,
        title: "Mother temple and the eastern coast",
        body: "An early drive to Besakih, Bali's largest temple complex, on the flanks of Mount Agung. Your guide explains the ancestral shrines of each clan and the temple's role in island life. Afterwards, lunch overlooking the sea near Amed, then an hour snorkeling over the Japanese wreck before returning to Sidemen for a quiet final evening.",
        stay: "sidemen-terrace-lodge",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "South to the Bukit cliffs",
        body: "Drive around two and a half hours to the Bukit Peninsula in the far south, where limestone cliffs drop to surf breaks. The resort sits above the Indian Ocean with pools facing west. At sunset, your guide takes you to Uluwatu temple for the Kecak, a chant-driven dance performed by dozens of men in a circle as the light fades.",
        stay: "uluwatu-cliff-house",
        meals: ["B"],
      },
      {
        day: 9,
        title: "Beaches below the cliffs",
        body: "Spend the day as you choose. Steps lead down to small beaches at Padang Padang and Bingin, where you can swim at low tide and watch surfers further out. A gentle surf lesson can be arranged for the morning. In the evening, a farewell dinner at a cliffside seafood restaurant at Jimbaran is booked for you.",
        stay: "uluwatu-cliff-house",
        meals: ["B", "D"],
      },
      {
        day: 10,
        title: "Departure",
        body: "A slow breakfast and a last swim before checkout. Your driver takes you to Ngurah Rai airport, around forty minutes away depending on traffic, in good time for your flight. If you fly late in the evening, we can arrange a day room or a final spa treatment so the last day does not feel like a waiting room.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "4 nights at Sayan Ridge Villas in a pool villa",
        "3 nights at Sidemen Terrace Lodge in a valley-view room",
        "2 nights at Uluwatu Cliff House in an ocean-view suite",
      ],
      travel: [
        "Private air-conditioned car and driver throughout",
        "Airport meet and greet with fast-track arrival",
      ],
      experiences: [
        "Melukat water blessing with a temple priest",
        "Guided Sidemen valley walk and songket workshop",
        "Besakih temple with a specialist guide",
        "Uluwatu temple and Kecak performance",
        "Boreh spa treatment and one private yoga session",
      ],
    },
    excluded: [
      "International flights",
      "Indonesian visa on arrival and Bali tourist levy",
      "Travel insurance",
      "Lunches and dinners not listed",
      "Gratuities for guides and drivers",
    ],
    priceFromUSD: 3450,
    rates: [
      { label: "Low season", from: "2027-01-01", to: "2027-03-31", priceUSD: 3450 },
      { label: "Shoulder season", from: "2027-04-01", to: "2027-06-30", priceUSD: 3690 },
      { label: "Peak season", from: "2027-07-01", to: "2027-08-31", priceUSD: 4150 },
      { label: "Late season", from: "2027-09-01", to: "2027-12-31", priceUSD: 3790 },
    ],
    badge: "Most requested",
    featured: true,
    seo: {
      title: "Bali Slow Travel Itinerary: Ubud, Sidemen, Uluwatu",
      description:
        "A 10-day Bali itinerary at an easy pace: Sayan's river valley, the rice terraces of Sidemen and Uluwatu's cliffs, with temple blessings, walks and spa time.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "komodo-by-phinisi",
    title: "Komodo Under Sail",
    durationDays: 4,
    nights: 3,
    destinations: ["komodo"],
    experiences: ["phinisi-cruises", "diving-snorkeling", "island-hopping"],
    budgetTier: "ultra",
    heroImage: {
      src: "https://images.unsplash.com/photo-1653404786584-2166b81a5b3c?auto=format&fit=crop&w=1800&q=80",
      alt: "Aerial view of a two-masted phinisi anchored in a clear turquoise bay below green hills",
      credit: "Photo: Johnny Africa / Unsplash",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1725073696774-dc3c2dc0a35e?auto=format&fit=crop&w=1800&q=80",
        alt: "A Komodo dragon lying on a sandy beach in front of a wooden jetty",
        credit: "Photo: Vivien Placzek / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1736478772941-8da5e214dea5?auto=format&fit=crop&w=1800&q=80",
        alt: "Aerial view of a pink-sand beach curving along turquoise water in Komodo National Park",
        credit: "Photo: Simon Spring / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1623468020653-b0682380e56b?auto=format&fit=crop&w=1800&q=80",
        alt: "A manta ray gliding through blue water above the reef",
        credit: "Photo: Swanson Chan / Unsplash",
      },
    ],
    summary:
      "Three nights aboard a five-cabin phinisi in Komodo National Park, sailing from Labuan Bajo. Climb Padar at sunrise, walk with rangers among Komodo dragons, swim with mantas and fall asleep at anchor in a different bay each night.",
    inclusionLine: "All meals on board · 8 guided excursions · Return flights from Bali",
    highlights: [
      "Sunrise from the ridge of Padar Island",
      "Ranger-led walk among Komodo dragons",
      "Manta rays at Makassar Reef",
      "Flying foxes leaving Kalong Island at dusk",
    ],
    days: [
      {
        day: 1,
        title: "Fly to Labuan Bajo and set sail",
        body: "A morning flight from Bali to Labuan Bajo takes around an hour and ten minutes. The crew meets you at the airport and a tender carries you out to the boat in the harbour. After lunch on deck, sail to Kelor for a short climb and a first snorkel, then anchor off Kalong Island to watch thousands of flying foxes stream overhead at dusk.",
        stay: "sea-wanderer-phinisi",
        meals: ["L", "D"],
        image: {
          src: "https://images.unsplash.com/photo-1696488997773-3982fd023c20?auto=format&fit=crop&w=1800&q=80",
          alt: "Boats moored in the harbour at Labuan Bajo below a dry, terraced hillside",
          credit: "Photo: Wayan Aditya / Unsplash",
        },
      },
      {
        day: 2,
        title: "Padar sunrise and Komodo's dragons",
        body: "Leave the boat by tender at 5am for the thirty-minute climb up Padar's ridge, arriving as light reaches its three curving bays. Breakfast on board, then cross to Komodo Island for a ranger-led walk through dry forest where dragons rest in the shade. After lunch, swim and snorkel at the rosy sands of Pink Beach before anchoring for the night.",
        makeItYours: "Divers can replace Pink Beach with two dives at Batu Bolong, one of the park's richest pinnacles.",
        stay: "sea-wanderer-phinisi",
        meals: ["B", "L", "D"],
      },
      {
        day: 3,
        title: "Mantas, sandbars and turtles",
        body: "Morning at Makassar Reef, where manta rays gather over a sandy channel to feed and be cleaned. The cruise director times your swim with the tide. Afterwards, walk the Taka Makassar sandbar at low water, then snorkel the reef at Siaba Besar, where green turtles graze on seagrass. A sunset dinner is served on the top deck.",
        stay: "sea-wanderer-phinisi",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Kanawa and the flight back",
        body: "A last swim on the shallow house reef at Kanawa, among blue starfish and anemonefish, then breakfast as the boat sails back to Labuan Bajo. The crew transfers you to the airport for an early afternoon flight to Bali. If time allows, a short stop at the Batu Cermin cave on the edge of town can be added before check-in.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights aboard Sea Wanderer phinisi in a deluxe cabin with en-suite bathroom",
        "Full board on the boat, with soft drinks, tea and coffee",
      ],
      travel: [
        "Return economy flights Bali to Labuan Bajo",
        "Airport and harbour transfers in Labuan Bajo",
        "Tender transfers to every landing",
      ],
      experiences: [
        "Komodo National Park entrance and ranger fees",
        "Guided Padar sunrise hike",
        "Snorkeling equipment, kayaks and paddleboards",
        "Cruise director and onboard naturalist",
      ],
    },
    excluded: [
      "International flights",
      "Scuba diving (from USD 65 per dive)",
      "Alcoholic drinks on board",
      "Travel insurance",
      "Crew gratuities",
    ],
    priceFromUSD: 2950,
    rates: [
      { label: "Wet season", from: "2027-01-01", to: "2027-03-31", priceUSD: 2950 },
      { label: "Shoulder season", from: "2027-04-01", to: "2027-06-30", priceUSD: 3250 },
      { label: "Peak season", from: "2027-07-01", to: "2027-09-30", priceUSD: 3590 },
      { label: "Late dry season", from: "2027-10-01", to: "2027-12-31", priceUSD: 3150 },
    ],
    featured: true,
    seo: {
      title: "Komodo Phinisi Cruise: 4 Days from Labuan Bajo",
      description:
        "Three nights on a luxury phinisi in Komodo National Park: Padar sunrise, a ranger walk with Komodo dragons, manta snorkeling and Pink Beach, with flights.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "raja-ampat-dive-escape",
    title: "Raja Ampat: Reef and Lagoon",
    durationDays: 8,
    nights: 7,
    destinations: ["raja-ampat"],
    experiences: ["diving-snorkeling", "island-hopping"],
    budgetTier: "premium",
    heroImage: {
      src: "https://images.unsplash.com/photo-1703769605314-18648cfc3428?auto=format&fit=crop&w=1800&q=80",
      alt: "Small forested karst islands rising from a turquoise lagoon in Raja Ampat",
      credit: "Photo: Simon Spring / Unsplash",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1800&q=80",
        alt: "A shallow coral reef with schools of small orange fish in sunlit water",
      },
      {
        src: "https://images.unsplash.com/photo-1715940094024-b704b7493be4?auto=format&fit=crop&w=1800&q=80",
        alt: "A small wooden canoe on clear green water in front of a beach with thatched huts",
        credit: "Photo: r0229 oke / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1800&q=80",
        alt: "A speedboat crossing a lagoon between steep green islets",
        credit: "Photo: Ridho Ibrahim / Unsplash",
      },
    ],
    summary:
      "Four nights at a reef lodge in remote Misool, then three nights aboard a phinisi cruising north through the Dampier Strait. Built for divers but generous to snorkelers, with soft-coral walls, mantas and the viewpoint at Piaynemo.",
    inclusionLine: "Full board · 16 guided dives or snorkel trips · Boat and lodge transfers",
    highlights: [
      "House reef snorkeling straight from your bungalow at Misool",
      "Soft-coral walls and pygmy seahorses at Boo Windows",
      "Manta rays at Manta Sandy in the Dampier Strait",
      "The view over the lagoons of Piaynemo",
    ],
    days: [
      {
        day: 1,
        title: "Sorong to Misool",
        body: "Most guests arrive in Sorong on an early flight from Jakarta or Makassar, often after a night in transit. You are met at Domine Eduard Osok airport and taken to the harbour for the speedboat south to Misool, around four hours across open water with a stop for lunch. Arrive at the lodge in time for a sunset swim off the jetty.",
        stay: "misool-reef-lodge",
        meals: ["L", "D"],
      },
      {
        day: [2, 4],
        title: "Diving and snorkeling around Misool",
        body: "Three full days on the reefs of the Misool marine reserve, where fishing has been banned for years and the results are clear. Expect two or three boat dives a day, with snorkelers taken to shallower sites nearby. Highlights include Boo Windows, Magic Mountain's mantas and the jellyfish lake at Lenmakana. Evenings are spent on the deck over the water.",
        makeItYours: "Non-divers can kayak through the karst channels with a guide and visit ancient rock paintings.",
        stay: "misool-reef-lodge",
        meals: ["B", "L", "D"],
        image: {
          src: "https://images.unsplash.com/photo-1724258207520-7870359e112a?auto=format&fit=crop&w=1800&q=80",
          alt: "A long wooden jetty crossing a shallow reef to overwater bungalows",
          credit: "Photo: SnapSaga / Unsplash",
        },
      },
      {
        day: 5,
        title: "Board the phinisi and sail north",
        body: "After a last morning dive, the phinisi collects you from the lodge. Settle into your cabin as the boat heads north through the Dampier Strait, with an afternoon stop to snorkel a quiet bay. The overnight passage is planned for calm water, and dinner is served at anchor once the crew has the boat settled.",
        stay: "coral-spirit-phinisi",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Dampier Strait and Manta Sandy",
        body: "Wake near Arborek, a small village island known for its strong community-run marine conservation. Dive or snorkel Manta Sandy, where reef mantas circle cleaning stations in shallow water, then Cape Kri, famous for its density of fish. In the afternoon, visit Arborek village, where women weave hats and bags from pandanus leaves.",
        stay: "coral-spirit-phinisi",
        meals: ["B", "L", "D"],
      },
      {
        day: 7,
        title: "Piaynemo and Star Lagoon",
        body: "Climb the wooden staircase at Piaynemo for the view over a scatter of karst islands, then snorkel in the clear shallows of Star Lagoon. After lunch on board, a final dive at Melissa's Garden, one of Raja Ampat's best hard-coral sites. Your last evening includes dinner on deck and a briefing on tomorrow's transfer.",
        stay: "coral-spirit-phinisi",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "Disembark and fly out",
        body: "The boat drops you at Waisai on Waigeo Island after breakfast. From there, the public fast ferry takes about two hours to Sorong, where your driver meets you for the short drive to the airport. Allow at least eighteen hours after your last dive before flying, which today's late flights to Jakarta or Makassar should comfortably meet.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "4 nights at Misool Reef Lodge in a water-view bungalow, full board",
        "3 nights aboard Coral Spirit phinisi in an en-suite cabin, full board",
      ],
      travel: [
        "Speedboat transfer Sorong to Misool",
        "Ferry Waisai to Sorong with private transfers at each end",
        "Airport and harbour assistance in Sorong",
      ],
      experiences: [
        "Up to 16 guided boat dives or equivalent snorkel trips",
        "Raja Ampat marine park entry permit",
        "Piaynemo viewpoint and Arborek village visit",
        "Kayaks and snorkeling equipment",
      ],
    },
    excluded: [
      "International flights",
      "Domestic flights to and from Sorong",
      "Dive equipment rental and Nitrox",
      "Travel and dive insurance",
      "Gratuities for lodge and crew",
    ],
    priceFromUSD: 4200,
    rates: [
      { label: "Prime season", from: "2027-01-01", to: "2027-04-30", priceUSD: 4590 },
      { label: "Shoulder season", from: "2027-05-01", to: "2027-06-30", priceUSD: 4390 },
      { label: "Windy season", from: "2027-07-01", to: "2027-08-31", priceUSD: 4200 },
      { label: "Late season", from: "2027-09-01", to: "2027-12-31", priceUSD: 4690 },
    ],
    featured: true,
    seo: {
      title: "Raja Ampat Dive Trip: Misool Lodge and Phinisi",
      description:
        "Eight days in Raja Ampat: four nights at a Misool reef lodge and three on a phinisi through the Dampier Strait, with up to 16 dives, mantas and Piaynemo.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "java-bali-overland",
    title: "Temples and Fire: Java to Bali",
    durationDays: 12,
    nights: 11,
    destinations: ["yogyakarta", "mount-bromo", "java", "bali"],
    experiences: ["temples-culture", "volcano-treks"],
    budgetTier: "premium",
    heroImage: {
      src: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1800&q=80",
      alt: "Bell-shaped stone stupas on the upper terrace of Borobudur in morning mist",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1800&q=80",
        alt: "The stone spires of Prambanan temple under a bright blue sky",
        credit: "Photo: Eugenia Clara / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=1800&q=80",
        alt: "The Tengger caldera and Mount Bromo at dawn with a distant peak above the clouds",
      },
      {
        src: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?auto=format&fit=crop&w=1800&q=80",
        alt: "A carved Balinese split gate framed by red flowers against a blue sky",
      },
    ],
    summary:
      "An overland journey from the temples of central Java to the volcanoes of the east, crossing the Bali Strait by ferry. Borobudur at dawn, Bromo at sunrise and Ijen's crater lake, then six nights in Bali to slow down.",
    inclusionLine: "All breakfasts · 7 guided experiences · Private transfers and train",
    highlights: [
      "Borobudur's upper terraces in the first hour of light",
      "Sunrise over the Tengger caldera and Bromo",
      "Ijen's turquoise crater lake at dawn",
      "Ferry across the Bali Strait to finish in Ubud and Uluwatu",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Yogyakarta",
        body: "Fly into Yogyakarta International Airport, usually via Jakarta or Bali. Your guide meets you for the drive of about an hour and a half to the hills above Borobudur, where the retreat looks across the Kedu plain to the Menoreh hills. In the late afternoon, take a walk through nearby villages as the call to prayer drifts across the fields.",
        stay: "borobudur-hill-retreat",
        meals: ["D"],
      },
      {
        day: 2,
        title: "Borobudur at first light",
        body: "Leave before dawn to reach Borobudur for the first timed entry to the upper terraces. With an archaeologist guide, walk clockwise past the relief panels that tell the Buddha's path, rising through the levels to the stupas at the top. Breakfast back at the retreat, then visit the small temples of Mendut and Pawon, aligned with Borobudur.",
        stay: "borobudur-hill-retreat",
        meals: ["B"],
        image: {
          src: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1800&q=80",
          alt: "A visitor walking towards Borobudur temple across an open lawn in soft morning light",
        },
      },
      {
        day: 3,
        title: "Prambanan and the Kraton",
        body: "Drive into Yogyakarta to the Kraton, the sultan's palace, still a working court where gamelan rehearsals are held most mornings. Visit a batik studio to learn the wax-resist technique. In the afternoon, continue to Prambanan, the great ninth-century Hindu temple complex, and stay for sunset at the hilltop ruins of Ratu Boko.",
        makeItYours: "Add an evening performance of the Ramayana ballet on the open-air stage at Prambanan.",
        stay: "borobudur-hill-retreat",
        meals: ["B"],
      },
      {
        day: 4,
        title: "Train east and up to Bromo",
        body: "Take the morning executive train east through the rice plains of central Java, a journey of around seven hours to Probolinggo. A driver then climbs for about an hour and a half to Cemoro Lawang on the rim of the Tengger caldera. The night is spent in a simple, warm mountain lodge; bring layers, as it gets cold after dark.",
        meals: ["B", "D"],
      },
      {
        day: 5,
        title: "Bromo sunrise, then on to Ijen",
        body: "A 3:30am jeep ride takes you to a viewpoint on the Penanjakan ridge for sunrise over Bromo, Batok and Semeru. Afterwards, cross the sand sea and climb the steps to Bromo's smoking crater. After breakfast, drive around six hours east to the coffee plantations near Ijen, where a quiet plantation guesthouse awaits.",
        meals: ["B", "D"],
        image: {
          src: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1800&q=80",
          alt: "Mount Bromo and the Tengger caldera rising out of a sea of mist at sunrise",
        },
      },
      {
        day: 6,
        title: "Ijen crater and across to Bali",
        body: "Set off around 1am for the two-hour climb to Ijen's rim, wearing gas masks provided by your guide. Watch sulphur miners at work and, if conditions allow, the faint blue flames before dawn reveals the turquoise lake. After breakfast, take the hour-long ferry from Ketapang to Gilimanuk, then drive across Bali to Sayan, arriving by late afternoon.",
        stay: "sayan-ridge-villas",
        meals: ["B"],
      },
      {
        day: [7, 8],
        title: "Two easy days in Sayan",
        body: "After the early starts in Java, these days are deliberately light. Walk the Campuhan ridge, visit the Tegallalang terraces or the Goa Gajah cave, or simply stay by the pool above the Ayung River. A massage at the villa spa is included. Your driver is on hand both days, and your guide can suggest a temple ceremony if one falls during your stay.",
        makeItYours: "Spend one morning in a Balinese cooking class with a family in Penestanan.",
        stay: "sayan-ridge-villas",
        meals: ["B"],
      },
      {
        day: 9,
        title: "South to Uluwatu",
        body: "Drive around ninety minutes south to the Bukit Peninsula. The resort sits on the cliffs above the Indian Ocean, with pools facing the sunset. In the evening, visit Uluwatu temple on its headland for the Kecak dance, performed by a circle of chanting men as the sun goes down behind them.",
        stay: "uluwatu-cliff-house",
        meals: ["B"],
      },
      {
        day: [10, 11],
        title: "The Bukit at your own pace",
        body: "Two free days on the coast. Swim at Melasti or Padang Padang, take a surf lesson at Bingin, or book a spa morning. On one evening, dinner is reserved at a seafood restaurant on the sand at Jimbaran. Your guide can arrange a half-day boat trip to Nusa Penida's cliffs if you would like one more adventure.",
        stay: "uluwatu-cliff-house",
        meals: ["B"],
      },
      {
        day: 12,
        title: "Departure",
        body: "Breakfast on the terrace and a last swim. Your driver takes you to Ngurah Rai airport, around forty minutes away, in good time for your onward flight. If your flight leaves late, a day room or extended checkout can be arranged so the last afternoon is spent by the pool rather than in the terminal.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights at Borobudur Hill Retreat",
        "1 night in a mountain lodge at Cemoro Lawang and 1 night at a plantation guesthouse near Ijen",
        "3 nights at Sayan Ridge Villas and 3 nights at Uluwatu Cliff House",
      ],
      travel: [
        "Executive-class train Yogyakarta to Probolinggo",
        "Private car and driver in Java and Bali",
        "Bromo jeep and Ketapang to Gilimanuk ferry",
      ],
      experiences: [
        "Borobudur upper-terrace entry with an archaeologist guide",
        "Prambanan, Ratu Boko and the Kraton",
        "Bromo sunrise and Ijen crater trek with gas masks",
        "Uluwatu temple and Kecak performance",
        "One spa treatment in Sayan",
      ],
    },
    excluded: [
      "International flights",
      "Domestic flight into Yogyakarta",
      "Indonesian visa on arrival and Bali tourist levy",
      "Travel insurance",
      "Gratuities for guides and drivers",
    ],
    priceFromUSD: 3890,
    rates: [
      { label: "Low season", from: "2027-01-01", to: "2027-03-31", priceUSD: 3890 },
      { label: "Shoulder season", from: "2027-04-01", to: "2027-06-30", priceUSD: 4150 },
      { label: "Peak season", from: "2027-07-01", to: "2027-08-31", priceUSD: 4590 },
      { label: "Late season", from: "2027-09-01", to: "2027-12-31", priceUSD: 4250 },
    ],
    badge: "Special offer",
    featured: true,
    seo: {
      title: "Java to Bali Overland: Borobudur, Bromo and Ijen",
      description:
        "A 12-day overland journey from Yogyakarta to Bali: Borobudur at dawn, Prambanan, Bromo sunrise and Ijen's crater lake, then Ubud and Uluwatu to unwind.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bali-komodo-honeymoon",
    title: "Jungle, Sea and Cliff: A Bali and Komodo Honeymoon",
    durationDays: 11,
    nights: 10,
    destinations: ["bali", "komodo"],
    experiences: ["honeymoons", "phinisi-cruises", "luxury-villas"],
    budgetTier: "ultra",
    heroImage: {
      src: "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?auto=format&fit=crop&w=1800&q=80",
      alt: "Golden evening light on the ridges and bays of Padar Island in Komodo National Park",
      credit: "Photo: Rizknas / Unsplash",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1800&q=80",
        alt: "A curved villa bedroom with tall windows opening onto a pool and the sea",
      },
      {
        src: "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&w=1800&q=80",
        alt: "Dusk over the bays and hills of Komodo National Park seen from a ridge",
        credit: "Photo: william kusno / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1800&q=80",
        alt: "A wooden pool deck with sun loungers and parasols facing the sea in late light",
      },
    ],
    summary:
      "Four nights in a private-pool villa above the Ayung River, three nights on a luxury phinisi in Komodo and three on Bali's southern cliffs. Private transfers, private time and a few quiet surprises along the way.",
    inclusionLine: "All breakfasts · Full board at sea · 3 private dinners · Private transfers",
    highlights: [
      "A private dinner in the jungle at Sayan",
      "A phinisi cabin with a sea-view bathroom",
      "Padar Island at sunrise, before the day boats arrive",
      "Clifftop suite with a plunge pool at Uluwatu",
    ],
    days: [
      {
        day: 1,
        title: "Arrive and go slowly",
        body: "Met at the aircraft door and taken through fast-track arrival, you drive an hour north to Sayan. Your villa has its own pool above the Ayung River gorge and a butler who will unpack if you wish. A floral bath is drawn for your arrival. Dinner is served in the villa whenever you are ready for it.",
        stay: "sayan-ridge-villas",
        meals: ["D"],
      },
      {
        day: [2, 4],
        title: "Sayan and Ubud, on your terms",
        body: "Three days with very little planned. A private guide is available for a sunrise walk in the rice fields, a visit to the water temple at Tirta Empul or a morning at an Ubud art studio. A couples' massage is booked for the second afternoon. On the final night, a private dinner is set by candlelight on a terrace above the river.",
        makeItYours: "Add a private pre-dawn trek up Mount Batur, with breakfast at the summit above the caldera lake.",
        stay: "sayan-ridge-villas",
        meals: ["B"],
        image: {
          src: "https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=1800&q=80",
          alt: "Aerial view of terraced rice fields and forest on a Balinese hillside",
        },
      },
      {
        day: 5,
        title: "Fly to Labuan Bajo and board",
        body: "A morning flight takes around an hour and ten minutes from Bali to Labuan Bajo on Flores. The cruise director meets you and the tender carries you to the phinisi. Sail through the afternoon to Kelor and Rinca, with a snorkel stop on the way, and anchor near Kalong Island as flying foxes cross the evening sky.",
        stay: "sea-wanderer-phinisi",
        meals: ["L", "D"],
      },
      {
        day: 6,
        title: "Padar and Komodo",
        body: "Climb Padar's ridge at first light, timed before the day boats arrive from Labuan Bajo. After breakfast, a ranger walks you through the dry forest of Komodo Island to see the dragons. The afternoon is for swimming at Pink Beach and paddleboarding in the shallows. Dinner is served on the top deck under the stars.",
        stay: "sea-wanderer-phinisi",
        meals: ["B", "L", "D"],
        image: {
          src: "https://images.unsplash.com/photo-1604560929658-bbc3c2ba6a36?auto=format&fit=crop&w=1800&q=80",
          alt: "The three bays of Padar Island seen from the ridge, with green hills and blue water",
          credit: "Photo: Fajruddin Mudzakkir / Unsplash",
        },
      },
      {
        day: 7,
        title: "Mantas and a sandbar lunch",
        body: "Swim with manta rays at Makassar Reef, guided by the onboard dive team. The crew then sets up lunch on Taka Makassar, a sandbar that appears only at low tide. In the afternoon, snorkel with turtles at Siaba Besar. For your last night aboard, the boat anchors in a quiet bay for a private dinner on deck.",
        stay: "sea-wanderer-phinisi",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "Back to Bali and the southern cliffs",
        body: "A final swim at Kanawa, then sail back to Labuan Bajo for the flight to Bali. Your driver takes you to the Bukit Peninsula, about forty minutes from the airport. Your suite has its own plunge pool facing the ocean. Watch the sunset from the terrace and keep the evening simple.",
        stay: "uluwatu-cliff-house",
        meals: ["B", "L"],
      },
      {
        day: [9, 10],
        title: "Ocean days at Uluwatu",
        body: "Unstructured days on the coast. The beach club below the resort is a short ride on the inclined lift, and the beaches at Bingin and Padang Padang are nearby. A private sunset cruise from Benoa can be booked on one evening, and on the last night dinner is set for two on the cliff edge as the light goes.",
        stay: "uluwatu-cliff-house",
        meals: ["B", "D"],
      },
      {
        day: 11,
        title: "Departure",
        body: "A slow breakfast and last swim, then a private transfer to Ngurah Rai airport with fast-track departure assistance. Late checkout is arranged in advance where possible. If your flight leaves at night, we can book a final spa ritual and dinner so the day ends gently rather than in a departure lounge.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "4 nights at Sayan Ridge Villas in a one-bedroom pool villa",
        "3 nights aboard Sea Wanderer phinisi in the master cabin",
        "3 nights at Uluwatu Cliff House in a plunge-pool suite",
      ],
      travel: [
        "Return flights Bali to Labuan Bajo",
        "Private transfers throughout with fast-track arrival and departure",
      ],
      experiences: [
        "Three private dinners: jungle terrace, phinisi deck and clifftop",
        "Couples' massage in Sayan",
        "Komodo National Park fees and ranger walk",
        "Manta snorkeling with the onboard dive team",
      ],
    },
    excluded: [
      "International flights",
      "Scuba diving and alcoholic drinks on board",
      "Indonesian visa on arrival and Bali tourist levy",
      "Travel insurance",
      "Gratuities",
    ],
    priceFromUSD: 6750,
    rates: [
      { label: "Wet season", from: "2027-01-01", to: "2027-03-31", priceUSD: 6750 },
      { label: "Shoulder season", from: "2027-04-01", to: "2027-06-30", priceUSD: 7250 },
      { label: "Peak season", from: "2027-07-01", to: "2027-09-30", priceUSD: 7950 },
      { label: "Late season", from: "2027-10-01", to: "2027-12-31", priceUSD: 7390 },
    ],
    featured: false,
    seo: {
      title: "Bali and Komodo Honeymoon: Villa, Phinisi, Cliffs",
      description:
        "An 11-day Bali and Komodo honeymoon: a private-pool villa in Sayan, three nights on a luxury phinisi and a clifftop suite at Uluwatu, with private dinners.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sumatra-orangutans-lake-toba",
    title: "Sumatra: Orangutans and the Great Lake",
    durationDays: 9,
    nights: 8,
    destinations: ["sumatra", "lake-toba"],
    experiences: ["orangutan-trekking"],
    budgetTier: "value",
    heroImage: {
      src: "https://images.unsplash.com/photo-1754546784315-c9ba50caa7e9?auto=format&fit=crop&w=1800&q=80",
      alt: "An orangutan resting in the branches of a rainforest tree",
      credit: "Photo: Arne Wambeke / Unsplash",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1601058497548-f247dfe349d6?auto=format&fit=crop&w=1800&q=80",
        alt: "Green hills and a winding valley running down to Lake Toba",
        credit: "Photo: Irfannur Diah / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1537871285173-eb73c57c6ef4?auto=format&fit=crop&w=1800&q=80",
        alt: "An orangutan mother hanging from a branch with her infant clinging to her",
      },
      {
        src: "https://images.unsplash.com/photo-1553515831-1ee03d85e31c?auto=format&fit=crop&w=1800&q=80",
        alt: "The steep upswept roof of a traditional Batak house above Lake Toba",
        credit: "Photo: Leo Sagala / Unsplash",
      },
    ],
    summary:
      "Three nights on the edge of Gunung Leuser National Park in search of wild orangutans, a night in the cool highlands of Berastagi and three on Samosir Island in Lake Toba, the largest volcanic lake on earth.",
    inclusionLine: "All breakfasts · 5 guided experiences · Private transfers",
    highlights: [
      "Two days trekking in Gunung Leuser with licensed guides",
      "A night camping by the Bohorok River",
      "Sunrise over the Sinabung and Sibayak volcanoes",
      "Batak villages and stone chairs on Samosir Island",
    ],
    days: [
      {
        day: 1,
        title: "Kualanamu to Bukit Lawang",
        body: "Arrive at Kualanamu International Airport, near Medan, where your driver is waiting. The drive to Bukit Lawang takes around three and a half to four hours through rubber and oil palm plantations. Check into a riverside eco-lodge with bungalows looking across the Bohorok River to the forest edge. Fall asleep to the sound of the water.",
        meals: ["D"],
      },
      {
        day: 2,
        title: "Into Gunung Leuser",
        body: "Set off after breakfast with a licensed guide for a full-day trek in Gunung Leuser National Park. Paths are steep and muddy in places, and the guide reads the forest for signs of orangutans, Thomas leaf monkeys and hornbills. Lunch is eaten in the jungle. In the late afternoon, reach a riverside camp for the night, with a simple dinner by the fire.",
        meals: ["B", "L", "D"],
        image: {
          src: "https://images.unsplash.com/photo-1723153437528-d9ac530fa1f7?auto=format&fit=crop&w=1800&q=80",
          alt: "An adult male orangutan with broad cheek pads among rainforest leaves",
          credit: "Photo: Nick Reijrink / Unsplash",
        },
      },
      {
        day: 3,
        title: "River tubing back to the village",
        body: "Wake to gibbons calling across the valley. After a morning walk near camp, return to Bukit Lawang the traditional way: floating downriver on lashed inner tubes, steered by your guides. The afternoon is free to rest at the lodge, visit the village or join a cooking session with the kitchen team.",
        makeItYours: "Spend this night in the jungle camp as well for a second full day of trekking.",
        meals: ["B", "L"],
      },
      {
        day: 4,
        title: "Up to Berastagi",
        body: "Drive around four hours into the Karo highlands, where the air cools and the fields fill with cabbages, oranges and passion fruit. Stop at Berastagi's fruit market, then visit the Karo village of Lingga, with its tall timber longhouses. Stay in a colonial-era hillside hotel with views of the Sibayak volcano.",
        meals: ["B"],
      },
      {
        day: 5,
        title: "Sibayak sunrise and Lake Toba",
        body: "An optional pre-dawn hike up Sibayak, around two hours to the crater, rewards you with sunrise over Sinabung. After breakfast, drive south past the Sipiso-piso waterfall, which drops 120 metres into a gorge above the lake. From Parapat, the ferry to Samosir Island takes about forty-five minutes. Check into a lakeside hotel in Tuktuk.",
        meals: ["B"],
      },
      {
        day: [6, 7],
        title: "Samosir Island",
        body: "Two days on Samosir, an island roughly the size of Singapore in the middle of Lake Toba. With a local guide, visit the stone chairs of Ambarita, the royal tombs at Tomok and the Batak museum at Simanindo, where traditional sigale-gale puppet dances are performed. Swim from the jetty, cycle the lakeshore road or simply watch fishermen at work.",
        meals: ["B"],
        image: {
          src: "https://images.unsplash.com/photo-1440558929809-1412944a6225?auto=format&fit=crop&w=1800&q=80",
          alt: "Lake Toba stretching between green hills under a wide sky",
          credit: "Photo: Dio Hasibuan / Unsplash",
        },
      },
      {
        day: 8,
        title: "Back towards Medan",
        body: "Take the morning ferry back to Parapat, then drive north to Medan, around four to five hours with a lunch stop. In the afternoon, visit the Maimun Palace and the Grand Mosque with your guide, and try the city's celebrated street food. The final night is spent in a comfortable city hotel close to the airport road.",
        meals: ["B"],
      },
      {
        day: 9,
        title: "Departure from Kualanamu",
        body: "After breakfast, a short drive takes you to Kualanamu International Airport for your onward flight, usually via Jakarta, Kuala Lumpur or Singapore. If you are continuing to Bali or Java, we can arrange the connection and an extra night on arrival so you avoid a long travel day. Your guide will see you through check-in.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights in a riverside eco-lodge at Bukit Lawang, one of them in a jungle camp",
        "1 night in a highland hotel at Berastagi",
        "3 nights in a lakeside hotel on Samosir and 1 night in Medan",
      ],
      travel: [
        "Private car and driver throughout",
        "Ferry crossings to and from Samosir Island",
      ],
      experiences: [
        "Guided jungle trek and overnight camp in Gunung Leuser",
        "Park permits and licensed guide fees",
        "River tubing back to Bukit Lawang",
        "Guided day on Samosir Island",
      ],
    },
    excluded: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners not listed",
      "Optional Sibayak guide fee",
      "Gratuities for guides and drivers",
    ],
    priceFromUSD: 2150,
    rates: [
      { label: "Early dry season", from: "2027-01-01", to: "2027-03-31", priceUSD: 2290 },
      { label: "Shoulder season", from: "2027-04-01", to: "2027-06-30", priceUSD: 2350 },
      { label: "Peak season", from: "2027-07-01", to: "2027-09-30", priceUSD: 2550 },
      { label: "Wet season", from: "2027-10-01", to: "2027-12-31", priceUSD: 2150 },
    ],
    featured: false,
    seo: {
      title: "Sumatra Orangutan Trek and Lake Toba Itinerary",
      description:
        "Nine days in North Sumatra: trek for wild orangutans in Gunung Leuser from Bukit Lawang, then the Karo highlands and three nights on Lake Toba's Samosir.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "flores-sumba-overland",
    title: "Flores and Sumba: Villages of the East",
    durationDays: 10,
    nights: 9,
    destinations: ["flores", "komodo", "sumba"],
    experiences: ["island-hopping", "temples-culture"],
    budgetTier: "premium",
    heroImage: {
      src: "https://images.unsplash.com/photo-1578019448201-09ad2ac7995a?auto=format&fit=crop&w=1800&q=80",
      alt: "Cone-shaped thatched houses of Wae Rebo village in a mountain clearing beneath low cloud",
      credit: "Photo: Marcella Oscar / Unsplash",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1678150913309-cbebdf17d804?auto=format&fit=crop&w=1800&q=80",
        alt: "A group of horses running along a rocky beach in Sumba",
        credit: "Photo: Deepavali Gaind / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1776442564181-fd60b00b9afc?auto=format&fit=crop&w=1800&q=80",
        alt: "Traditional Sumbanese houses with tall peaked thatched roofs around a sandy clearing",
        credit: "Photo: Wahde Stock / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1586730657455-fbb1d1bcf7e5?auto=format&fit=crop&w=1800&q=80",
        alt: "Rice terraces covering rolling green hills in western Flores",
        credit: "Photo: Jan Kaptein / Unsplash",
      },
    ],
    summary:
      "Start with a day in Komodo National Park, then head into the highlands of Flores to sleep in the mountain village of Wae Rebo. Finish with four nights on Sumba's west coast among megalithic tombs, horse country and empty beaches.",
    inclusionLine: "All breakfasts · 7 guided experiences · Flights within Nusa Tenggara",
    highlights: [
      "A night in a traditional cone house at Wae Rebo",
      "The spider-web rice fields at Cancar",
      "Megalithic tombs and peaked houses at Ratenggaro",
      "Swimming in the Weekuri lagoon on Sumba",
    ],
    days: [
      {
        day: 1,
        title: "Fly to Labuan Bajo",
        body: "The flight from Bali to Labuan Bajo takes around an hour and ten minutes. Your guide meets you and drives you to a boutique hotel on the hill above the harbour. In the late afternoon, walk up to a viewpoint for sunset over the islands, then eat grilled fish at the night market on the waterfront.",
        meals: ["D"],
      },
      {
        day: 2,
        title: "A day in Komodo National Park",
        body: "Leave early by private speedboat, which allows Padar, Komodo and Pink Beach in a single day. Climb Padar's ridge before the heat builds, walk with a ranger among the dragons on Komodo Island, then swim at Pink Beach before the run back to Labuan Bajo by late afternoon. Lunch is served on board.",
        meals: ["B", "L"],
        image: {
          src: "https://images.unsplash.com/photo-1660280274563-767dd6b56374?auto=format&fit=crop&w=1800&q=80",
          alt: "A Komodo dragon walking along a pale sand beach at the water's edge",
          credit: "Photo: Mitch Hodiono / Unsplash",
        },
      },
      {
        day: 3,
        title: "Into the hills: Wae Rebo",
        body: "Drive around five hours east and south along winding roads to the village of Denge. From here, a steady three-hour hike climbs through forest and coffee gardens to Wae Rebo, a cluster of seven cone-shaped mbaru niang houses at 1,100 metres. After a welcome ceremony from the elders, share dinner and sleep on mats in the communal guesthouse.",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Down to Ruteng and Cancar",
        body: "Wake to mist lifting off the valley and coffee roasted over a wood fire. Walk back down to Denge and drive to Ruteng, the Manggarai highland town. On the way, stop at the viewpoint over the lingko rice fields of Cancar, divided like spider webs according to traditional land law. Stay at a simple, comfortable guesthouse in Ruteng.",
        meals: ["B", "L"],
      },
      {
        day: 5,
        title: "Cunca Wulang and back to the coast",
        body: "Return west towards Labuan Bajo, around four hours, stopping for a short walk into the Cunca Wulang canyon, where you can swim in a green pool beneath limestone walls. Arrive in Labuan Bajo by late afternoon for a final night at the harbourside hotel and a farewell dinner overlooking the boats.",
        makeItYours: "Swap the canyon for a morning at a Manggarai coffee farm near Ruteng.",
        meals: ["B"],
      },
      {
        day: 6,
        title: "Fly to Sumba",
        body: "A short flight takes you to Tambolaka in West Sumba; on some days the route connects via Bali. Your driver meets you for the forty-minute drive to the coast. The estate sits above a long, quiet beach with its own surf break and stables. Spend the afternoon by the pool and watch the sun drop into the Indian Ocean.",
        stay: "sumba-coast-estate",
        meals: ["B", "D"],
      },
      {
        day: 7,
        title: "Ratenggaro and Weekuri",
        body: "With a Sumbanese guide, visit Ratenggaro, a clan village where tall-roofed houses stand among megalithic stone tombs above the beach. Learn about Marapu, the ancestral faith still practised across the island, and why the tombs sit at the heart of each village. After lunch, swim in the Weekuri lagoon, a saltwater pool fed through the rocks by the open sea.",
        stay: "sumba-coast-estate",
        meals: ["B", "D"],
        image: {
          src: "https://images.unsplash.com/photo-1618479357329-14dd10e76f5e?auto=format&fit=crop&w=1800&q=80",
          alt: "Clear turquoise lagoon water beside a wooden platform and steps among green scrub",
          credit: "Photo: Delphine Fant / Unsplash",
        },
      },
      {
        day: 8,
        title: "Waterfalls and weaving",
        body: "Drive inland to Lapopu waterfall, which falls in stepped cascades into clear pools in the forest. Return through villages where ikat cloth is woven by hand, its patterns dyed with indigo and morinda root over months. In the evening, ride along the beach on one of the estate's Sandalwood horses.",
        stay: "sumba-coast-estate",
        meals: ["B", "D"],
      },
      {
        day: 9,
        title: "A free day on the coast",
        body: "Nothing is scheduled. Surf the break in front of the estate, book a spa treatment, or ask the guides about a visit to a Marapu funeral or village celebration if one is taking place nearby. Dinner is set on the beach for your final evening, with Sumbanese dishes cooked over coconut husks.",
        stay: "sumba-coast-estate",
        meals: ["B", "D"],
      },
      {
        day: 10,
        title: "Departure",
        body: "After breakfast, your driver takes you back to Tambolaka airport for the flight to Bali, around an hour, and your onward connections. We recommend allowing a night in Bali before a long-haul flight, as schedules from Sumba occasionally shift with little notice. A day room near Ngurah Rai airport can also be booked for late departures.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights at a boutique harbour hotel in Labuan Bajo",
        "1 night in the Wae Rebo village guesthouse and 1 night in Ruteng",
        "4 nights at Sumba Coast Estate in an ocean-view villa",
      ],
      travel: [
        "Flights Bali to Labuan Bajo, Labuan Bajo to Tambolaka, and Tambolaka to Bali",
        "Private car and driver on Flores and Sumba",
        "Private speedboat in Komodo National Park",
      ],
      experiences: [
        "Komodo National Park fees and ranger walk",
        "Wae Rebo hike, welcome ceremony and village stay",
        "Ratenggaro, Weekuri and Lapopu with a Sumbanese guide",
        "Sunset horse ride on Sumba",
      ],
    },
    excluded: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners not listed",
      "Spa treatments and surf guiding",
      "Gratuities for guides and drivers",
    ],
    priceFromUSD: 4650,
    rates: [
      { label: "Wet season", from: "2027-01-01", to: "2027-03-31", priceUSD: 4650 },
      { label: "Shoulder season", from: "2027-04-01", to: "2027-06-30", priceUSD: 4950 },
      { label: "Peak season", from: "2027-07-01", to: "2027-09-30", priceUSD: 5390 },
      { label: "Late season", from: "2027-10-01", to: "2027-12-31", priceUSD: 4890 },
    ],
    badge: "New",
    featured: false,
    seo: {
      title: "Flores and Sumba Itinerary: Komodo to Wae Rebo",
      description:
        "Ten days across eastern Indonesia: Komodo by speedboat, a night in Wae Rebo village, the rice fields of Cancar and four nights on Sumba's quiet west coast.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lombok-gilis-family",
    title: "Bali, Gilis and Lombok with Children",
    durationDays: 9,
    nights: 8,
    destinations: ["bali", "lombok-gilis"],
    experiences: ["family-trips", "island-hopping"],
    budgetTier: "value",
    heroImage: {
      src: "https://images.unsplash.com/photo-1619681216575-d6b3964fc278?auto=format&fit=crop&w=1800&q=80",
      alt: "Aerial view of a small Gili island ringed by white sand and shallow turquoise reef",
      credit: "Photo: Danny de Groot / Unsplash",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1709483095301-2d1f3e95b1d4?auto=format&fit=crop&w=1800&q=80",
        alt: "A green sea turtle swimming over a reef in clear blue water",
        credit: "Photo: Sébastien Goldberg / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1694637173869-72c51857c6e9?auto=format&fit=crop&w=1800&q=80",
        alt: "A wide white-sand beach with turquoise water and a boat in the distance",
        credit: "Photo: Baptiste P / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1800&q=80",
        alt: "Rice terraces under palm trees in a valley near Ubud",
      },
    ],
    summary:
      "A relaxed family loop with short transfers: three nights near Ubud, three on car-free Gili Meno with turtles off the beach, and two on Lombok's south coast. Plenty of pool time, a little culture and nothing that requires a 4am start.",
    inclusionLine: "All breakfasts · 5 family activities · Private transfers and fast boats",
    highlights: [
      "Snorkeling with green turtles from the beach on Gili Meno",
      "A rice-planting and kite-making afternoon in Ubud",
      "Bicycles and horse carts instead of cars on the Gilis",
      "Gentle surf lessons on Lombok's south coast",
    ],
    days: [
      {
        day: 1,
        title: "Arrive in Bali",
        body: "Your driver meets you at Ngurah Rai airport with child seats fitted. The drive to the Ubud area takes around an hour and a half. Your family villa, run by a Balinese family, has interconnecting rooms and a fenced pool among the rice fields. Settle in, swim and have an early dinner in the garden.",
        meals: ["D"],
      },
      {
        day: 2,
        title: "Rice fields and kites",
        body: "A morning with a farming family outside Ubud: plant rice, feed the ducks and learn how the water channels work. After lunch, a local craftsman helps the children build a small Balinese kite, ready for flying in the afternoon breeze. Older children may enjoy a visit to the Sacred Monkey Forest with a guide close at hand.",
        meals: ["B", "L"],
        image: {
          src: "https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=1800&q=80",
          alt: "Rice terraces and forest on a Balinese hillside seen from above",
        },
      },
      {
        day: 3,
        title: "A day by the water",
        body: "Spend the morning at a river park near Ubud with natural pools and gentle slides, or take an easy rafting trip on the Ayung suitable for children from seven. Afternoon is free for swimming at the villa. In the evening, watch a short children's Legong dance performance in a village pavilion.",
        makeItYours: "Swap the river day for a morning at a batik workshop where everyone makes their own cloth.",
        meals: ["B"],
      },
      {
        day: 4,
        title: "Fast boat to Gili Meno",
        body: "Drive about an hour to Padang Bai on Bali's east coast for the fast boat to the Gilis, around two hours across the Lombok Strait. Gili Meno is the quietest of the three islands, with no cars or motorbikes. A horse cart carries your bags to the beach house, where shallow reef starts a few steps from the sand.",
        stay: "gili-meno-beach-house",
        meals: ["B"],
      },
      {
        day: [5, 6],
        title: "Turtles, bikes and sand",
        body: "Two days to explore at your own pace. A guide takes the family snorkeling with green turtles off the east coast and around the underwater statues. Cycle the sandy track around the island in about an hour, visit the small turtle hatchery and watch the sunset towards Bali's Mount Agung from the west beach.",
        stay: "gili-meno-beach-house",
        meals: ["B"],
        image: {
          src: "https://images.unsplash.com/photo-1581773683195-b36cada8b4d2?auto=format&fit=crop&w=1800&q=80",
          alt: "A sea turtle resting on the sandy seabed in clear shallow water",
          credit: "Photo: Uber Scuba Gili / Unsplash",
        },
      },
      {
        day: 7,
        title: "Across to Lombok's south coast",
        body: "A short boat ride of about fifteen minutes brings you to Bangsal on Lombok, where your driver is waiting. Drive around two hours south, stopping at the Sasak village of Sade to see traditional rice barns and weaving. Check into a family-friendly beach hotel near Kuta Lombok with a large pool and garden.",
        meals: ["B"],
      },
      {
        day: 8,
        title: "Beaches of the south",
        body: "A surf coach meets the family on the soft sand at Selong Belanak, where small waves suit first-timers of all ages. Later, drive to Tanjung Aan for swimming in calm water and a picnic lunch, then climb the short hill at Bukit Merese for the sunset view across the bays.",
        meals: ["B", "L"],
      },
      {
        day: 9,
        title: "Departure from Lombok",
        body: "After breakfast, the drive to Lombok International Airport takes around thirty minutes. Flights connect to Bali, Jakarta and Singapore for onward journeys. If you prefer to fly home from Bali, we can book the short hop across or extend your stay with a final night near the airport. Packed breakfasts are available for early flights.",
        meals: ["B"],
      },
    ],
    included: {
      stay: [
        "3 nights in a family-run villa near Ubud with interconnecting rooms",
        "3 nights at Gili Meno Beach House in a two-bedroom villa",
        "2 nights in a family beach hotel near Kuta Lombok",
      ],
      travel: [
        "Private car and driver with child seats in Bali and Lombok",
        "Fast boat Padang Bai to Gili Meno",
        "Boat transfer Gili Meno to Bangsal",
      ],
      experiences: [
        "Rice-farming morning and kite-making with local hosts",
        "Guided turtle snorkeling on Gili Meno",
        "Family surf lesson at Selong Belanak",
        "Children's dance performance in a village pavilion",
      ],
    },
    excluded: [
      "International flights",
      "Indonesian visa on arrival and Bali tourist levy",
      "Travel insurance",
      "Lunches and dinners not listed",
      "Optional rafting and river park entry",
    ],
    priceFromUSD: 1980,
    rates: [
      { label: "Low season", from: "2027-01-01", to: "2027-03-31", priceUSD: 1980 },
      { label: "Shoulder season", from: "2027-04-01", to: "2027-06-30", priceUSD: 2150 },
      { label: "Summer holidays", from: "2027-07-01", to: "2027-08-31", priceUSD: 2490 },
      { label: "Late season", from: "2027-09-01", to: "2027-12-31", priceUSD: 2190 },
    ],
    featured: false,
    seo: {
      title: "Bali, Gili Islands and Lombok Family Holiday",
      description:
        "A nine-day family trip with short transfers: villas near Ubud, turtle snorkeling on car-free Gili Meno and gentle surf lessons on Lombok's southern beaches.",
    },
  },
];
