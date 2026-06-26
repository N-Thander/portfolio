import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";

export const metadata: Metadata = {
  title: "Arsenal",
  description:
    "The toolkit — languages, ML/GenAI, backend & MLOps — plus certifications and competition wins.",
};

export default function ArsenalPage() {
  return (
    <PageLayout
      route="~/arsenal"
      title="arsenal"
      blurb="The toolkit I build with, the credentials behind it, and a few unlocked achievements along the way."
    >
      <Skills />
      <Certifications />
      <Achievements />
    </PageLayout>
  );
}
