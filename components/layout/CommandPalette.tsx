"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { navItems } from "@/content/data/nav";
import { siteConfig } from "@/content/data/site";
import { cn } from "@/lib/utils";

type Command = {
  id: string;
  label: string;
  hint: string;
  keywords?: string;
  run: () => void;
};

/**
 * Cmd/Ctrl-K command palette: section navigation + flavor commands. Controlled
 * via the `open`/`onOpenChange` props so the header button and the global
 * shortcut share one source of truth.
 */
export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [output, setOutput] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    onOpenChange(false);
    setQuery("");
    setOutput(null);
    setActive(0);
  }, [onOpenChange]);

  const go = useCallback(
    (href: string) => {
      close();
      // Same-page hash link (e.g. "/#about"): smooth-scroll if already home,
      // otherwise let the router navigate and resolve the hash.
      if (href.startsWith("/#") && window.location.pathname === "/") {
        document
          .getElementById(href.slice(2))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      router.push(href);
    },
    [close, router],
  );

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = navItems.map((item) => ({
      id: `go-${item.href}`,
      label: item.command,
      hint: item.blurb,
      keywords: `${item.label} ${item.dir}`,
      run: () => go(item.href),
    }));

    const flavor: Command[] = [
      {
        id: "whoami",
        label: "whoami",
        hint: "who is this",
        run: () =>
          setOutput(`${siteConfig.name} — ${siteConfig.role}. ${siteConfig.tagline}`),
      },
      {
        id: "home",
        label: "cd ~",
        hint: "back home",
        keywords: "home top root",
        run: () => go("/"),
      },
      {
        id: "about",
        label: "cat about.md",
        hint: "about me",
        keywords: "bio whoami who",
        run: () => go("/#about"),
      },
      {
        id: "contact",
        label: "echo $CONTACT",
        hint: "get in touch",
        keywords: "email reach hire",
        run: () => go("/#contact"),
      },
      {
        id: "resume",
        label: "download resume",
        hint: "grab the .pdf",
        keywords: "cv pdf",
        run: () => {
          window.open(siteConfig.resume, "_blank");
          close();
        },
      },
      {
        id: "github",
        label: "open github",
        hint: siteConfig.socials.githubUser,
        keywords: "git source code",
        run: () => {
          window.open(siteConfig.socials.github, "_blank");
          close();
        },
      },
      {
        id: "linkedin",
        label: "open linkedin",
        hint: siteConfig.socials.linkedinUser,
        keywords: "social",
        run: () => {
          window.open(siteConfig.socials.linkedin, "_blank");
          close();
        },
      },
      {
        id: "email",
        label: "mail nasir",
        hint: siteConfig.email,
        keywords: "contact email",
        run: () => {
          window.location.href = `mailto:${siteConfig.email}`;
          close();
        },
      },
      {
        id: "help",
        label: "help",
        hint: "what can I type",
        run: () =>
          setOutput(
            "Type to filter. ↑/↓ to move, ↵ to run, esc to close. Try: whoami, ls projects, download resume, open github.",
          ),
      },
    ];

    return [...nav, ...flavor];
  }, [go, close]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.hint} ${c.keywords ?? ""}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  // Focus the input when opened.
  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  // Keep the active item in view.
  useEffect(() => {
    const node = listRef.current?.children[active] as HTMLElement | undefined;
    node?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[150] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <button
        type="button"
        aria-label="Close command palette"
        className="absolute inset-0 bg-crust/70 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg border border-surface1 bg-mantle shadow-2xl">
        <div className="flex items-center gap-2 border-b border-surface0 px-4 py-3 font-mono text-sm">
          <span className="select-none text-green">❯</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="type a command… (try: whoami, ls projects)"
            className="w-full bg-transparent text-text placeholder:text-overlay0 focus:outline-none"
            aria-label="Command input"
          />
        </div>

        <ul ref={listRef} className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-3 font-mono text-sm text-overlay1">
              command not found: {query}
            </li>
          )}
          {filtered.map((c, i) => (
            <li key={c.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => c.run()}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-4 py-2 text-left font-mono text-sm transition-colors",
                  i === active ? "bg-surface0 text-text" : "text-subtext1",
                )}
              >
                <span>
                  <span className="text-accent">$ </span>
                  {c.label}
                </span>
                <span className="truncate text-xs text-overlay1">{c.hint}</span>
              </button>
            </li>
          ))}
        </ul>

        {output && (
          <div className="border-t border-surface0 px-4 py-3 font-mono text-xs leading-relaxed text-subtext0">
            <span className="text-green">→ </span>
            {output}
          </div>
        )}

        <div className="flex items-center gap-4 border-t border-surface0 px-4 py-2 font-mono text-[10px] text-overlay0">
          <span>↑↓ move</span>
          <span>↵ run</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
