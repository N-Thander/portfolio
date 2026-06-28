import { Prompt } from "@/components/ui/Prompt";
import { siteConfig } from "@/content/data/site";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-5 pt-8 pb-12 sm:px-8">
      <div className="border-surface0 border-t pt-8 font-mono text-sm">
        <p className="text-subtext0 flex flex-wrap items-baseline gap-x-2">
          <Prompt path="~" />
          <span className="text-text">echo $CONTACT</span>
        </p>
        <div className="text-subtext1 mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-accent transition-colors"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            github/{siteConfig.socials.githubUser}
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            linkedin/{siteConfig.socials.linkedinUser}
          </a>
        </div>
        {/*<p className="mt-8 text-xs text-overlay0">
          <span className="text-overlay1"># </span>
          built with next.js + tailwind · catppuccin frappé ·{" "}
          {new Date().getFullYear()} {siteConfig.name}
        </p>*/}
      </div>
    </footer>
  );
}
