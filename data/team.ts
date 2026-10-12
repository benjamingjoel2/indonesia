import type { TeamMember } from "./types";

/**
 * Seed team profiles. Names, bios and photos are placeholders; replace with
 * the real team and their own portraits before launch.
 */
export const team: TeamMember[] = [
  {
    name: "Clara Whitfield",
    role: "Founder",
    bio: "Clara first came to Indonesia in 2004 to dive in Komodo and has lived in Ubud for most of the years since. She started The Island Edit to plan trips the way she would for her own family, with one person responsible from the first message to the final transfer.",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      alt: "Portrait placeholder for Clara Whitfield",
    },
    languages: ["English", "Bahasa Indonesia", "French"],
  },
  {
    name: "Putu Ardana",
    role: "Travel Specialist, Bali",
    bio: "Putu grew up in a village near Sidemen and spent ten years guiding across Bali, Lombok and Java before joining the team. He is the person to ask about temple ceremonies, quiet trekking routes and the best warung in any given valley.",
    image: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      alt: "Portrait placeholder for Putu Ardana",
    },
    languages: ["Balinese", "Bahasa Indonesia", "English"],
  },
  {
    name: "Dewi Santoso",
    role: "Travel Specialist, Jakarta",
    bio: "Dewi worked in hotel operations in Yogyakarta and Labuan Bajo before moving into trip planning, and she has sailed most of the phinisi we recommend. She plans many of our Java, Komodo and honeymoon journeys.",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      alt: "Portrait placeholder for Dewi Santoso",
    },
    languages: ["Bahasa Indonesia", "Javanese", "English", "Dutch"],
  },
  {
    name: "Arif Nugroho",
    role: "Guest Experience Lead",
    bio: "Arif leads the Bali-based team that looks after guests on the ground, from airport meetings to rebooking a cancelled fast boat at short notice. A keen diver, he also plans many of our Raja Ampat and family trips.",
    image: {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      alt: "Portrait placeholder for Arif Nugroho",
    },
    languages: ["Bahasa Indonesia", "English", "German"],
  },
];
