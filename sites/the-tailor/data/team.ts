/**
 * Team. Only Drew Kluska is a confirmed name; the other entries are placeholders to be
 * replaced with real team members, bios and photographs before launch.
 */
import type { TeamMember } from "./types";

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

export const team: TeamMember[] = [
  {
    name: "Drew Kluska",
    role: "Founder & Managing Director",
    bio: "Drew founded The Tailor to design private journeys across Australia, New Zealand and Fiji with the care of a bespoke service. He leads the company from its Adelaide base and sets the standard for every journey the team designs.",
    image: {
      src: portrait("1560250097-0b93528c311a"),
      alt: "Portrait placeholder",
      credit: "Photo: LinkedIn Sales Solutions / Unsplash",
    },
    languages: ["English"],
  },
  {
    name: "[Travel Designer name]",
    role: "Travel Designer, Adelaide",
    bio: "Designs private journeys with a focus on South Australia, Kangaroo Island and the Red Centre. Works with each client from the first conversation through to their return home.",
    image: {
      src: portrait("1573496359142-b8d87734a5a2"),
      alt: "Portrait placeholder",
      credit: "Photo: Christina @ wocintechchat.com M / Unsplash",
    },
    languages: ["English", "French"],
  },
  {
    name: "[Travel Designer name]",
    role: "Travel Designer, Sydney",
    bio: "Specialises in the east coast, the Great Barrier Reef and journeys that continue to New Zealand and Fiji. Known for careful pacing and well-chosen guides.",
    image: {
      src: portrait("1519085360753-af0119f7cbe7"),
      alt: "Portrait placeholder",
      credit: "Photo: Ali Morshedlou / Unsplash",
    },
    languages: ["English", "German"],
  },
  {
    name: "[Guest Experience lead name]",
    role: "Guest Experience Lead",
    bio: "Looks after clients while they are travelling, coordinating with lodges, pilots and guides behind the scenes. The calm voice on the phone if plans need to change.",
    image: {
      src: portrait("1494790108377-be9c29b29330"),
      alt: "Portrait placeholder",
      credit: "Photo: Michael Dam / Unsplash",
    },
    languages: ["English", "Mandarin"],
  },
];
