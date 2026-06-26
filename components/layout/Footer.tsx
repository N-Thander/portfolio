import { Prompt } from "@/components/ui/Prompt";
import { siteConfig } from "@/content/data/site";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-5 pb-12 pt-8 sm:px-8">
      <div className="border-t border-surface0 pt-8 font-mono text-sm">
        <p className="flex flex-wrap items-baseline gap-x-2 text-subtext0">
          <Prompt path="~" />
          <span className="text-text">echo $CONTACT</span>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-subtext1">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-accent"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            github/{siteConfig.socials.githubUser}
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            linkedin/{siteConfig.socials.linkedinUser}
          </a>
        </div>
        <p className="mt-8 text-xs text-overlay0">
          <span className="text-overlay1"># </span>
          built with next.js + tailwind · catppuccin frappé ·{" "}
          {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
