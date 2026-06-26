"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/content/data/nav";
import { siteConfig } from "@/content/data/site";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { cn } from "@/lib/utils";

/**
 * Fixed header with page-based navigation. Desktop shows inline links; mobile
 * collapses into a hamburger menu. The active link is derived from the pathname.
 */
export function Header({ onOpenPalette }: { onOpenPalette?: () => void }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled || menuOpen
          ? "border-surface0 bg-mantle/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-1 font-mono text-sm font-medium"
        >
          <span className="text-green">~/</span>
          <span
            className={cn(
              "text-text group-hover:text-accent",
              pathname === "/" && "text-accent",
            )}
          >
            {siteConfig.handle}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block rounded px-2.5 py-1 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-subtext0 hover:text-text",
                )}
              >
                <ScrambleText text={item.label} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="flex items-center gap-2 rounded-md border border-surface0 bg-crust/60 px-2.5 py-1.5 text-xs text-subtext0 transition-colors hover:border-accent/60 hover:text-text"
            aria-label="Open command palette"
          >
            <span className="hidden sm:inline">Search</span>
            <kbd className="rounded border border-surface1 bg-mantle px-1.5 py-0.5 font-mono text-[10px] text-subtext1">
              ⌘K
            </kbd>
          </button>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-surface0 bg-crust/60 text-subtext0 transition-colors hover:border-accent/60 hover:text-text md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Hamburger open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-surface0 bg-mantle/95 backdrop-blur-md md:hidden",
          menuOpen ? "max-h-80" : "pointer-events-none max-h-0 border-t-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <ul className="mx-auto max-w-5xl px-5 py-3 font-mono text-sm sm:px-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded px-2 py-2.5 transition-colors",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-subtext1 hover:text-text",
                )}
              >
                <span>
                  <span className="text-green">$ </span>
                  {item.command}
                </span>
                <span className="text-xs text-overlay1">{item.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-4" aria-hidden>
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-4 bg-current transition-transform duration-300",
          open ? "top-1.5 rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1.5 block h-0.5 w-4 bg-current transition-opacity duration-200",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-4 bg-current transition-transform duration-300",
          open ? "top-1.5 -rotate-45" : "top-3",
        )}
      />
    </span>
  );
}
