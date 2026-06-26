import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/content/data/experience";

export function Experience() {
  return (
    <Section id="experience" command="cat experience.log">
      <ol className="relative space-y-8 border-l border-surface0 pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.org}-${i}`} delay={i * 70}>
            {/* timeline node */}
            <span
              aria-hidden
              className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-base"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-text">
                {job.role}{" "}
                <span className="text-accent">@ {job.org}</span>
              </h3>
              <span className="font-mono text-xs text-subtext0">
                {job.dates}
              </span>
            </div>
            <p className="mt-0.5 font-mono text-xs text-overlay1">
              {job.location}
            </p>
            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 text-sm text-subtext1">
                  <span className="mt-0.5 select-none text-green">›</span>
                  <span className="text-pretty leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
