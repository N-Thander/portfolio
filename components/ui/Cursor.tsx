import { cn } from "@/lib/utils";

/** Blinking block cursor. Respects reduced-motion via globals.css. */
export function Cursor({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-[1em] w-[0.55em] translate-y-[0.12em] bg-accent",
        "motion-safe:[animation:blink_1.05s_step-end_infinite]",
        className,
      )}
    />
  );
}
