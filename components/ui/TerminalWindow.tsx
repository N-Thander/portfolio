import { cn } from "@/lib/utils";

/**
 * A terminal "window" container with a title bar (three dots + path label).
 * Used sparingly as a framing device for cards and panels.
 */
export function TerminalWindow({
  title,
  children,
  className,
  bodyClassName,
  accent = false,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-surface0 bg-crust/70 backdrop-blur-sm",
        "transition-colors",
        accent && "glow-hover hover:border-accent/50",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-surface0 bg-mantle/80 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
        </span>
        {title && (
          <span className="ml-1 truncate text-xs text-subtext0">{title}</span>
        )}
      </div>
      <div className={cn("p-4 sm:p-5", bodyClassName)}>{children}</div>
    </div>
  );
}
