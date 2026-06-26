export type Experience = {
  role: string;
  org: string;
  dates: string;
  location: string;
  /** mission-log style bullets, lead with quantified wins */
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer (Salesforce / Agentforce)",
    org: "Cognizant",
    dates: "2025 — Present",
    location: "India",
    bullets: [
      "Building on the Salesforce platform with Agentforce and Lightning Web Components (LWC), bridging enterprise CRM workflows with agentic AI.",
      "Translating ML/GenAI experience into production-grade, role-aware automation inside a regulated enterprise stack.",
    ],
    tags: ["Salesforce", "Agentforce", "LWC", "Apex"],
  },
  {
    role: "AI/ML Intern",
    org: "Codebuddy",
    dates: "2024 — 2025",
    location: "India",
    bullets: [
      "Built role-aware multi-agent AI serving 70+ employees, recovering 7+ hours/week per team through automated workflows.",
      "Replaced an LLM pipeline with classical ML where it fit, cutting marginal inference cost to ~$0 per query with no accuracy loss.",
      "Ran cloud cost analyses across 30+ instance configurations to right-size deployment.",
    ],
    tags: ["Multi-agent", "LLMs", "Classical ML", "Cost optimization"],
  },
  {
    role: "R&D Intern",
    org: "Hi-Tech Systems (SAIL IISCO Steel Plant)",
    dates: "2023 — 2024",
    location: "India",
    bullets: [
      "Engineered a computer-vision molten-steel tracking system deployed on a live steel plant, achieving >94% accuracy in harsh industrial conditions.",
      "Owned the pipeline end to end: data capture, model training, and on-site evaluation.",
    ],
    tags: ["Computer Vision", "PyTorch", "OpenCV", "Industrial AI"],
  },
  {
    role: "GenAI Facilitator",
    org: "Google Developer Student Clubs (GDSC)",
    dates: "2023 — 2024",
    location: "India",
    bullets: [
      "Facilitated GenAI sessions for student developers, translating cutting-edge model concepts into hands-on builds.",
      "Mentored peers on practical RAG and agent patterns.",
    ],
    tags: ["GenAI", "Mentorship", "Community"],
  },
];
