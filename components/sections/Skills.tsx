import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { skills } from "@/content/data/skills";

export function Skills() {
  return (
    <Section id="skills" command="cat skills.json">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.key} delay={i * 70}>
            <div className="rounded-md border border-surface0 bg-crust/40 p-5">
              <h3 className="font-mono text-sm">
                <span className="text-mauve">{group.key}</span>
                <span className="text-overlay1">: [</span>
              </h3>
              <div className="my-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <span className="font-mono text-sm text-overlay1">]</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
