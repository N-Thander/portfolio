import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { siteConfig } from "@/content/data/site";

export function Contact() {
  return (
    <Section id="contact" command="echo $CONTACT">
      <Reveal>
        <TerminalWindow title="~/contact" bodyClassName="font-mono text-sm">
          <p className="text-subtext1">
            <span className="text-green">$</span> Got an agentic system, a CV
            pipeline, or a cost problem worth solving?
          </p>
          <p className="mt-1 text-subtext1">
            <span className="text-green">$</span> Let&apos;s talk.
          </p>

          <div className="mt-5 space-y-2">
            <ContactRow
              k="email"
              v={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactRow k="phone" v={siteConfig.phone} />
            <ContactRow
              k="github"
              v={`github.com/${siteConfig.socials.githubUser}`}
              href={siteConfig.socials.github}
            />
            <ContactRow
              k="linkedin"
              v={`linkedin.com/in/${siteConfig.socials.linkedinUser}`}
              href={siteConfig.socials.linkedin}
            />
            <ContactRow k="resume" v="download (.pdf)" href={siteConfig.resume} />
          </div>
        </TerminalWindow>
      </Reveal>
    </Section>
  );
}

function ContactRow({ k, v, href }: { k: string; v: string; href?: string }) {
  const value = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      download={k === "resume" ? true : undefined}
      className="text-accent transition-colors hover:text-lavender"
    >
      {v}
    </a>
  ) : (
    <span className="text-subtext1">{v}</span>
  );

  return (
    <p className="flex flex-wrap gap-x-2">
      <span className="w-20 shrink-0 text-overlay1">{k}</span>
      <span className="text-overlay1">=</span>
      {value}
    </p>
  );
}
