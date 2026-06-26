import { Prompt } from "@/components/ui/Prompt";
import { Reveal } from "@/components/ui/Reveal";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { cn } from "@/lib/utils";

/**
 * Wraps a home-page section with an anchor id and a terminal-style command
 * heading (e.g. `user@nasir:~$ cat about.md`).
 */
export function Section({
  id,
  command,
  children,
  className,
}: {
  id: string;
  command: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24",
        className,
      )}
    >
      <Reveal>
        <h2
          id={`${id}-heading`}
          className="mb-8 flex flex-wrap items-baseline gap-x-2 font-mono text-sm text-subtext0 sm:mb-10"
        >
          <Prompt path={`~/${id}`} />
          <ScrambleText text={command} className="text-text" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
