export type Achievement = {
  title: string;
  detail: string;
  rank: string;
  year: string;
  /** accent token name used for the "unlocked" badge */
  accent: "yellow" | "green" | "teal" | "peach" | "mauve" | "blue";
};

export const achievements: Achievement[] = [
  {
    title: "TCS CodeVita Season 12",
    detail: "Global competitive programming contest",
    rank: "Global Rank 459",
    year: "2024",
    accent: "yellow",
  },
  {
    title: "HackHazard'25",
    detail: "National hackathon",
    rank: "2nd Runner-Up",
    year: "2025",
    accent: "teal",
  },
  {
    title: "Modelify Innovation'25",
    detail: "AI/ML innovation challenge",
    rank: "1st Place",
    year: "2025",
    accent: "green",
  },
  {
    title: "Aignite'25",
    detail: "AI hackathon",
    rank: "4th Place",
    year: "2025",
    accent: "peach",
  },
];
