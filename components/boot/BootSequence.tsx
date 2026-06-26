"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { bootLines } from "@/components/boot/bootLines";
import { Cursor } from "@/components/ui/Cursor";
import { cn } from "@/lib/utils";

const SEEN_KEY = "nasir.boot.seen.v1";

/**
 * BIOS-style boot overlay shown on first load. Fully bypassed on repeat visits
 * (localStorage flag) or prefers-reduced-motion. Skippable via button / any key.
 */
export function BootSequence({ onDone }: { onDone: () => void }) {
  // Start hidden; an effect decides whether to play (avoids SSR/hydration flash).
  const [shouldPlay, setShouldPlay] = useState(false);
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore storage errors (private mode) */
    }
    setExiting(true);
    setTimeout(onDone, 320);
  }, [onDone]);

  useEffect(() => {
    // The play/skip decision is inherently client-only (localStorage +
    // matchMedia) and runs exactly once on mount, so a synchronous setState
    // here is intentional and cannot cause a render loop.
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (reduce || seen) {
      onDone();
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only boot decision
    setShouldPlay(true);
  }, [onDone]);

  // Reveal lines one at a time using each line's delay.
  useEffect(() => {
    if (!shouldPlay) return;
    if (count >= bootLines.length) {
      const t = setTimeout(finish, 420);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setCount((c) => c + 1),
      bootLines[count]?.delay ?? 180,
    );
    return () => clearTimeout(t);
  }, [shouldPlay, count, finish]);

  // Skip on any key press.
  useEffect(() => {
    if (!shouldPlay) return;
    const onKey = () => finish();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shouldPlay, finish]);

  if (!shouldPlay) return null;

  return (
    <div
      role="status"
      aria-label="System boot sequence"
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-crust px-6 transition-opacity duration-300",
        exiting ? "opacity-0" : "opacity-100",
        "motion-safe:[animation:boot-flicker_0.5s_ease-out]",
      )}
    >
      <div className="w-full max-w-lg font-mono text-sm">
        {bootLines.slice(0, count).map((line, i) => (
          <p key={i} className="flex items-baseline gap-2 py-0.5 text-subtext1">
            <span className="text-overlay1 select-none">
              [{(i * 0.12).toFixed(2)}]
            </span>
            <span className="flex-1">{line.text}</span>
            {line.status && (
              <span
                className={cn(
                  line.status === "OK" && "text-green",
                  line.status === "DONE" && "text-teal",
                  line.status === "READY" && "text-blue",
                )}
              >
                [{line.status}]
              </span>
            )}
          </p>
        ))}
        {count < bootLines.length && (
          <p className="py-0.5">
            <Cursor />
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={finish}
        className="absolute bottom-6 right-6 rounded-md border border-surface0 px-3 py-1.5 text-xs text-subtext0 transition-colors hover:border-accent/60 hover:text-text"
      >
        skip [esc]
      </button>
    </div>
  );
}
