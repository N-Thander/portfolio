/** Tiny classnames joiner — avoids a dependency for simple conditional classes. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
