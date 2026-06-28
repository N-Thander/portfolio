"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#abcdef0123456789";

/**
 * On hover, scrambles the characters and then "organizes" them back into the
 * real text (classic decode effect). Respects reduced-motion (renders plain).
 * `text` is assumed static.
 */
export function ScrambleText({
  text,
  className,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Cancel any in-flight animation on unmount.
    return () => {
      if (raf.current !== undefined) cancelAnimationFrame(raf.current);
    };
  }, []);

  const scramble = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (raf.current !== undefined) cancelAnimationFrame(raf.current);

    const queue = text.split("").map((char) => ({
      char,
      start: Math.floor(Math.random() * 8),
      end: Math.floor(Math.random() * 8) + 8,
    }));

    let frame = 0;
    const tick = () => {
      let out = "";
      let done = 0;
      for (const item of queue) {
        if (frame >= item.end) {
          done += 1;
          out += item.char;
        } else if (frame >= item.start) {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          out += item.char;
        }
      }
      setDisplay(out);
      if (done === queue.length) {
        raf.current = undefined;
        return;
      }
      // Advance by a fraction of a frame per tick to slow the decode down.
      frame += 0.4;
      raf.current = requestAnimationFrame(tick);
    };
    tick();
  }, [text]);

  return (
    <Tag className={className} onMouseEnter={scramble}>
      {display}
    </Tag>
  );
}
