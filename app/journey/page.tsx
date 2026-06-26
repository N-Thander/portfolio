import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Where Nasiruddin Thander has worked and studied — from molten-steel computer vision to multi-agent automation.",
};

export default function JourneyPage() {
  return (
    <PageLayout
      route="~/journey"
      title="journey.log"
      blurb="The path so far — where I've worked and what I studied, from the factory floor to agentic systems."
    >
      <Experience />
      <Education />
    </PageLayout>
  );
}
