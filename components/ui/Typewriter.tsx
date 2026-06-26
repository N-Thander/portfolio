"use client";

import { useEffect, useState } from "react";
import { Cursor } from "@/components/ui/Cursor";

/**
 * Types out a string character-by-character. Under reduced-motion it renders
 * the full text immediately (and keeps a steady cursor).
 */
export function Typewriter({
  text,
  speed = 38,
  startDelay = 0,
  className,
  showCursor = true,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
}) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      // Reduced-motion: skip the animation and show the full text at once.
      if (reduce) {
        setShown(text);
        setDone(true);
        return;
      }
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {shown}
      {showCursor && !done && <Cursor />}
    </span>
  );
}
