import { cn } from "@/lib/utils";

/** Syntax-highlight-flavored chip for stacks/skills. */
export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-surface0 bg-crust/60 px-2 py-0.5",
        "text-xs text-subtext1 transition-colors hover:border-accent/60 hover:text-text",
        className,
      )}
    >
      {children}
    </span>
  );
}
