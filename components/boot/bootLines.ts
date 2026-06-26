export type BootLine = {
  text: string;
  /** trailing status chip */
  status?: "OK" | "DONE" | "READY";
  /** ms to wait before showing this line */
  delay?: number;
};

export const bootLines: BootLine[] = [
  { text: "POST … BIOS v4.6 — neural boot", delay: 120 },
  { text: "initializing kernel", status: "OK", delay: 220 },
  { text: "mounting /home/nasir", status: "OK", delay: 180 },
  { text: "loading neural_modules", status: "OK", delay: 240 },
  { text: "spawning multi-agent runtime", status: "OK", delay: 200 },
  { text: "calibrating computer-vision pipeline", status: "OK", delay: 220 },
  { text: "optimizing inference cost → $0.00", status: "DONE", delay: 220 },
  { text: "auth: user 'nasir' … access granted", status: "READY", delay: 260 },
];
