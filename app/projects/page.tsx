import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work — federated learning, RAG assistants, and diffusion models built from scratch.",
};

export default function ProjectsPage() {
  return (
    <PageLayout
      route="~/projects"
      title="projects/"
      blurb="A selection of things I've shipped — from privacy-preserving federated learning to RAG assistants and diffusion models built from first principles."
    >
      <Projects />
    </PageLayout>
  );
}
