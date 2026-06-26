export type SkillGroup = {
  label: string;
  /** terminal-style key for the syntax-highlight rendering */
  key: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    key: "languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Apex"],
  },
  {
    label: "ML / DL / GenAI",
    key: "ml_dl_genai",
    items: [
      "PyTorch",
      "TensorFlow",
      "Multi-agent systems",
      "RAG",
      "Computer Vision",
      "Diffusion Models",
      "Federated Learning",
      "LangChain",
      "Transformers",
    ],
  },
  {
    label: "Backend & MLOps",
    key: "backend_mlops",
    items: [
      "FastAPI",
      "Flask",
      "Docker",
      "REST APIs",
      "FAISS",
      "Groq",
      "CI/CD",
    ],
  },
  {
    label: "Databases & Platforms",
    key: "data_platforms",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "GCP",
      "Salesforce",
      "Git",
      "Linux",
    ],
  },
];
