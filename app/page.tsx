import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SiteChrome withBoot />
      <main className="flex-1">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
