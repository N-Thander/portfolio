import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { certifications } from "@/content/data/certifications";

export function Certifications() {
  // Render nothing until there's at least one certification to show.
  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" command="ls certifications/">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => {
          const card = (
            <div className="glow-hover h-full rounded-md border border-surface0 bg-crust/40 p-5 hover:border-accent/50">
              <h3 className="font-medium text-text">{c.title}</h3>
              <p className="mt-1 text-sm text-subtext0">{c.issuer}</p>
              <p className="mt-2 font-mono text-xs text-green">{c.date}</p>
            </div>
          );
          return (
            <Reveal key={`${c.title}-${i}`} delay={i * 70}>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
