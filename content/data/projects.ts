export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  result: string;
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "medhive",
    title: "MedHive",
    oneLiner:
      "Federated-learning platform for healthcare AI — train on distributed clinical data without it ever leaving the source.",
    result: "Hackathon-placed · privacy-preserving by design",
    stack: ["Flower", "PyTorch", "Federated Learning", "Python"],
    href: "https://github.com/N-Thander",
    featured: true,
  },
  {
    slug: "trixbot",
    title: "TrixBot",
    oneLiner:
      "RAG assistant answering domain questions over a custom knowledge base with grounded, low-latency responses.",
    result: "1,000+ users served",
    stack: ["FastAPI", "FAISS", "LLaMA-3.3-70B", "Groq", "RAG"],
    href: "https://github.com/N-Thander",
    featured: true,
  },
  {
    slug: "stable-diffusion-from-scratch",
    title: "Stable Diffusion from Scratch",
    oneLiner:
      "Implemented the full diffusion pipeline — UNet, attention, VAE, and CLIP conditioning — from first principles in PyTorch.",
    result: "Deep dive into generative model internals",
    stack: ["PyTorch", "Diffusion Models", "Deep Learning"],
    href: "https://github.com/N-Thander",
    featured: true,
  },
];
