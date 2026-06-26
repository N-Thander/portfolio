import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { achievements } from "@/content/data/achievements";
import { cn } from "@/lib/utils";

// Map accent token -> text/border classes (static so Tailwind keeps them).
const accentText: Record<string, string> = {
  yellow: "text-yellow",
  green: "text-green",
  teal: "text-teal",
  peach: "text-peach",
  mauve: "text-mauve",
  blue: "text-blue",
};
const accentBorder: Record<string, string> = {
  yellow: "hover:border-yellow/60",
  green: "hover:border-green/60",
  teal: "hover:border-teal/60",
  peach: "hover:border-peach/60",
  mauve: "hover:border-mauve/60",
  blue: "hover:border-blue/60",
};

export function Achievements() {
  return (
    <Section id="achievements" command="ls achievements/">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 70}>
            <div
              className={cn(
                "flex items-start gap-4 rounded-md border border-surface0 bg-crust/40 p-4 transition-colors",
                accentBorder[a.accent],
              )}
            >
              <span
                aria-hidden
                className={cn("mt-0.5 text-xl", accentText[a.accent])}
              >
                ◈
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-overlay1">
                  achievement unlocked
                </p>
                <h3 className="mt-0.5 font-medium text-text">{a.title}</h3>
                <p className="text-sm text-subtext0">{a.detail}</p>
                <p
                  className={cn(
                    "mt-1.5 font-mono text-sm font-medium",
                    accentText[a.accent],
                  )}
                >
                  {a.rank}{" "}
                  <span className="text-overlay1">· {a.year}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
