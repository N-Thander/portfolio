"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { BootSequence } from "@/components/boot/BootSequence";

/**
 * Client-side chrome: boot overlay, header, and the Cmd/Ctrl-K command palette
 * with a shared open state. Rendered around the page content.
 */
export function SiteChrome({
  withBoot = false,
}: {
  withBoot?: boolean;
}) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [booting, setBooting] = useState(withBoot);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {withBoot && booting && (
        <BootSequence onDone={() => setBooting(false)} />
      )}
      <Header onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
