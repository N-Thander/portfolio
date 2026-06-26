import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { projects } from "@/content/data/projects";

export function Projects() {
  return (
    <Section id="projects" command="ls projects/">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 80}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <TerminalWindow
              title={`~/projects/${project.slug}`}
              accent
              className="h-full"
              bodyClassName="flex h-full flex-col"
            >
              <h3 className="text-lg font-medium text-text">
                {project.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-subtext1">
                {project.oneLiner}
              </p>
              <p className="mt-3 font-mono text-xs text-green">
                <span className="text-overlay1"># result: </span>
                {project.result}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              {project.href && (
                <div className="mt-4 pt-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-accent transition-colors hover:text-lavender"
                  >
                    → view source
                  </a>
                </div>
              )}
            </TerminalWindow>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
