import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Catppuccin Frappé tokens (inline — ImageResponse can't read CSS vars).
const C = {
  base: "#303446",
  crust: "#232634",
  text: "#c6d0f5",
  subtext0: "#a5adce",
  green: "#a6d189",
  blue: "#8caaee",
  overlay1: "#838ba7",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: C.base,
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: C.overlay1, fontSize: 30 }}>
          <span style={{ color: C.green }}>user@nasir</span>
          <span>:~$ whoami</span>
        </div>
        <div
          style={{
            color: C.text,
            fontSize: 84,
            fontWeight: 700,
            marginTop: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ color: C.blue, fontSize: 40, marginTop: 12 }}>
          {`> ${siteConfig.role}`}
        </div>
        <div
          style={{
            color: C.subtext0,
            fontSize: 30,
            marginTop: 28,
            maxWidth: 980,
            lineHeight: 1.4,
          }}
        >
          agentic systems · computer vision · cost-efficient ML
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            color: C.overlay1,
            fontSize: 24,
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
