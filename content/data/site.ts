export const siteConfig = {
  name: "Nasiruddin Thander",
  handle: "nasir",
  role: "AI/ML Engineer",
  // Refined positioning line for the hero (do not copy resume verbatim).
  tagline:
    "AI/ML engineer building agentic systems, computer-vision pipelines, and cost-efficient ML — from molten-steel tracking to multi-agent automation.",
  description:
    "Nasiruddin Thander is an AI/ML engineer building agentic systems, computer-vision pipelines, and cost-efficient ML. Multi-agent systems, RAG, computer vision, and diffusion models — shipped to production.",
  // Update to the real domain once configured (see README deploy section).
  url: "https://nasiruddinthander.com",
  email: "nasiruddinthander2002@gmail.com",
  phone: "+91-8100416433",
  location: "India",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/N-Thander",
    githubUser: "N-Thander",
    linkedin: "https://www.linkedin.com/in/nasiruddin-thander",
    linkedinUser: "nasiruddin-thander",
  },
} as const;

export type SiteConfig = typeof siteConfig;
