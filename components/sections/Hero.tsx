"use client";

import { siteConfig } from "@/content/data/site";
import { Prompt } from "@/components/ui/Prompt";
import { Typewriter } from "@/components/ui/Typewriter";
import { HomeDirectory } from "@/components/sections/HomeDirectory";

/**
 * Asymmetric, off-center hero (no profile photo). The content column is pinned
 * left on a 12-col grid; a terminal `ls ~` directory on the right doubles as the
 * primary navigation and balances the negative space.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        {/* Off-center content column */}
        <div className="lg:col-span-7">
          <p className="mb-6 font-mono text-sm text-subtext0">
            <Prompt path="~" />
            <span className="text-text">whoami</span>
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-text text-glow sm:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 font-mono text-base text-accent sm:text-lg">
            <Typewriter
              text={`> ${siteConfig.role.toLowerCase()} :: agentic systems · computer vision · cost-efficient ML`}
              speed={26}
              startDelay={250}
            />
          </p>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-subtext1 sm:text-lg">
            {siteConfig.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/projects"
              className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-crust transition-colors hover:bg-lavender glow-accent"
            >
              View Projects
            </a>
            <a
              href={siteConfig.resume}
              download
              className="rounded-md border border-surface1 bg-crust/60 px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
            >
              Download Résumé
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2.5 text-sm text-subtext0 transition-colors hover:text-text"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2.5 text-sm text-subtext0 transition-colors hover:text-text"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-overlay0">
            press{" "}
            <kbd className="rounded border border-surface1 bg-mantle px-1 text-subtext1">
              ⌘K
            </kbd>{" "}
            to jump anywhere
          </p>
        </div>

        {/* Directory navigation — balances the off-center layout */}
        <div className="lg:col-span-5">
          <HomeDirectory />
        </div>
      </div>

      {/* Scroll hint — About + Contact sit below the hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <a
          href="#about"
          className="pointer-events-auto font-mono text-xs text-overlay0 transition-colors hover:text-subtext0"
        >
          scroll ↓ <span className="text-overlay1">cat about.md</span>
        </a>
      </div>
    </section>
  );
}
