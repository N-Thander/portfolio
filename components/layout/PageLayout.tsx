import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";
import { Prompt } from "@/components/ui/Prompt";
import { Typewriter } from "@/components/ui/Typewriter";

/**
 * Shared shell for the subpages: chrome (header + palette), a terminal-style
 * page header, the page content, and the footer.
 */
export function PageLayout({
  route,
  title,
  blurb,
  children,
}: {
  /** prompt path shown in the header, e.g. "~/journey" */
  route: string;
  /** large page title, e.g. "journey.log" */
  title: string;
  blurb?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteChrome />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-5 pt-28 pb-2 sm:px-8">
          <p className="font-mono text-sm text-subtext0">
            <Prompt path="~" />
            <span className="text-text">cd {route} && ls</span>
          </p>
          <h1 className="mt-4 font-mono text-3xl font-semibold tracking-tight text-text text-glow sm:text-4xl">
            <Typewriter text={title} speed={55} startDelay={150} />
          </h1>
          {blurb && (
            <p className="mt-3 max-w-2xl text-pretty text-subtext1">{blurb}</p>
          )}
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
