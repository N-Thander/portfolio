import Link from "next/link";
import { Cursor } from "@/components/ui/Cursor";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-1 flex-col justify-center px-5 sm:px-8">
      <div className="rounded-md border border-surface0 bg-crust/60 p-6 font-mono text-sm">
        <p className="text-subtext1">
          <span className="text-green">user@nasir</span>
          <span className="text-overlay1">:</span>
          <span className="text-accent">~</span>
          <span className="text-green">$</span> cat $REQUESTED_PATH
        </p>
        <p className="mt-3 text-red">
          error: 404 — no such file or directory
        </p>
        <p className="mt-1 text-subtext0">
          the page you&apos;re looking for has been unmounted.
          <Cursor className="ml-1" />
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/" className="text-accent hover:text-lavender">
            → cd ~
          </Link>
          <Link href="/projects" className="text-accent hover:text-lavender">
            → ls projects/
          </Link>
        </div>
      </div>
    </main>
  );
}
