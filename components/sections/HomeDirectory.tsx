import Link from "next/link";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { navItems } from "@/content/data/nav";

/**
 * The home page's primary navigation: a terminal `ls ~` directory listing where
 * each "directory" links to a page.
 */
export function HomeDirectory() {
  return (
    <TerminalWindow
      title="~ — ls -la"
      accent
      bodyClassName="font-mono text-sm"
      className="glow-hover"
    >
      <p className="mb-3 text-overlay1">
        # {navItems.length} directories · pick one
      </p>
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-baseline justify-between gap-4 rounded px-2 py-1.5 transition-colors hover:bg-surface0/60"
            >
              <span className="text-accent group-hover:text-lavender">
                <ScrambleText text={`${item.dir}/`} />
              </span>
              <span className="truncate text-xs text-overlay1 group-hover:text-subtext0">
                {item.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </TerminalWindow>
  );
}
