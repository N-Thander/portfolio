import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/content/data/about";

export function About() {
  return (
    <Section id="about" command="cat about.md">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-pretty leading-relaxed text-subtext1">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="lg:col-span-5">
          <dl className="rounded-md border border-surface0 bg-crust/40 p-5 font-mono text-sm">
            {about.facts.map((fact) => (
              <div
                key={fact.key}
                className="flex flex-wrap gap-x-2 border-b border-surface0 py-2 last:border-0"
              >
                <dt className="text-accent">{fact.key}:</dt>
                <dd className="text-subtext1">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
