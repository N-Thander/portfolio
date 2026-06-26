import { cn } from "@/lib/utils";

/**
 * Terminal prompt fragment: `user@nasir:~$`. The `$` uses the green success
 * accent; the path uses the primary accent.
 */
export function Prompt({
  path = "~",
  className,
}: {
  path?: string;
  className?: string;
}) {
  return (
    <span className={cn("select-none whitespace-nowrap", className)}>
      <span className="text-green">user@nasir</span>
      <span className="text-overlay1">:</span>
      <span className="text-accent">{path}</span>
      <span className="text-green">$</span>{" "}
    </span>
  );
}
