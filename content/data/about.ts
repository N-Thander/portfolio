export const about = {
  // Short narrative paragraphs — AI/ML engineer who ships.
  paragraphs: [
    "I'm an AI/ML engineer who ships. Not slideware — production systems: multi-agent automation, RAG pipelines, computer-vision models, and diffusion architectures built from the ground up.",
    "I'm pragmatic and cost-aware. I once replaced an LLM pipeline with classical ML to drop per-query inference cost to effectively $0, and I'll run a cloud cost analysis across 30+ instance configs before I let a bill surprise anyone.",
    "My range runs from the factory floor to the org chart: computer-vision molten-steel tracking on a live steel plant at >94% accuracy, and role-aware multi-agent AI serving 70+ employees. Competition-tested, and happiest when an idea is in front of real users.",
  ],
  // Quick "facts" rendered as a key/value block.
  facts: [
    { key: "role", value: "AI/ML Engineer @ Cognizant" },
    { key: "focus", value: "Agentic systems · CV · GenAI · MLOps" },
    { key: "location", value: "India · open to remote" },
    { key: "status", value: "building & shipping" },
  ],
} as const;
