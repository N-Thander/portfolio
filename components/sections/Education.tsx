import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/content/data/education";

export function Education() {
  return (
    <Section id="education" command="cat education.md">
      <div className="space-y-4">
        {education.map((e, i) => (
          <Reveal key={e.institution} delay={i * 70}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-md border border-surface0 bg-crust/40 p-5">
              <div>
                <h3 className="font-medium text-text">{e.degree}</h3>
                <p className="text-sm text-subtext0">{e.institution}</p>
                <p className="mt-1 font-mono text-sm text-green">{e.detail}</p>
              </div>
              <span className="font-mono text-xs text-subtext0">{e.dates}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
