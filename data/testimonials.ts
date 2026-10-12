import type { Testimonial } from "./types";

/**
 * Seed testimonials. Every entry is a placeholder written to show tone and
 * layout; replace with verified reviews (and real source links) before launch.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t-hannah-tom",
    name: "Hannah & Tom R.",
    from: "Bristol, UK",
    date: "2025-10-18",
    trip: "bali-slow-and-soulful",
    quote:
      "We asked Putu for a Bali that wasn't all beach clubs and he delivered exactly that. Three nights in Sidemen were the heart of the trip: walking the rice paths at seven, a weaving lesson with a family in the village, early nights. Every driver was on time and knew who we were. We came home rested, which has never happened before.",
    rating: 5,
    source: { label: "[Review platform]", url: "#" },
    placeholder: true,
  },
  {
    id: "t-james",
    name: "James K.",
    from: "Melbourne, Australia",
    date: "2025-08-03",
    trip: "komodo-by-phinisi",
    quote:
      "Dewi talked us out of a shared boat and into a smaller private charter for three nights, and she was right. We reached Padar before sunrise with nobody else on the trail, and the crew moved the snorkelling around the tides so we always had the reef to ourselves. One flight was rescheduled and she had it rebooked before we had even noticed.",
    rating: 5,
    source: { label: "[Review platform]", url: "#" },
    placeholder: true,
  },
  {
    id: "t-mei-lin",
    name: "Mei Lin T.",
    from: "Singapore",
    date: "2026-02-21",
    trip: "raja-ampat-dive-escape",
    quote:
      "Raja Ampat involves a lot of logistics and Arif handled all of it: the Sorong connection, the lodge boat, even a spare mask strap in my welcome pack. The diving in Misool was the best I have done in fifteen years. My only note is that the boat transfer is long, which we were warned about, so pack a book.",
    rating: 4,
    source: { label: "[Review platform]", url: "#" },
    placeholder: true,
  },
  {
    id: "t-laura-ben",
    name: "Laura & Ben M.",
    from: "Denver, USA",
    date: "2025-09-12",
    trip: "java-bali-overland",
    quote:
      "Putu built our route from Yogyakarta to Bali around trains, a night at Ijen and a slow drive along the north coast. Borobudur at first light with our guide Wayan was extraordinary, and the hotel staff seemed to expect us everywhere we went. It felt like travelling with a very organised friend who also happened to know every road.",
    rating: 5,
    source: { label: "[Review platform]", url: "#" },
    placeholder: true,
  },
  {
    id: "t-sophie-max",
    name: "Sophie & Max B.",
    from: "Munich, Germany",
    date: "2026-05-30",
    trip: "bali-komodo-honeymoon",
    quote:
      "We planned our honeymoon with Dewi over four months and she never once rushed us. Ubud, then two nights on a phinisi, then Uluwatu to finish, which was exactly the right order. Small touches made it: a dinner on the deck under the stars, a late checkout we never asked for. We have already sent two friends her way.",
    rating: 5,
    source: { label: "[Review platform]", url: "#" },
    placeholder: true,
  },
  {
    id: "t-van-dijk",
    name: "Eva & Joost V.",
    from: "Utrecht, Netherlands",
    date: "2026-07-14",
    trip: "lombok-gilis-family",
    quote:
      "Travelling with two children under eight, we wanted short transfers and no surprises. Arif chose Gili Meno for exactly that reason, and the kids still talk about the turtles off the beach. The fast boat was the only part we worried about, but he booked the most reliable operator and had someone meet us on both sides.",
    rating: 5,
    source: { label: "[Review platform]", url: "#" },
    placeholder: true,
  },
];
