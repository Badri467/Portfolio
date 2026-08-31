import { ImageResponse } from "next/og";

export const alt = "Badri Narayana Kancharla — Full-Stack & AI Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0b0b0c",
          backgroundImage:
            "radial-gradient(600px circle at 8% 0%, rgba(59,130,246,0.28), transparent 60%)",
          color: "#ededf0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#60a5fa" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 18,
            }}
          >
            BK
          </div>
          AI · Backend · Production systems
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Badri Narayana Kancharla
          </div>
          <div style={{ fontSize: 32, color: "#a4a4ad" }}>
            Full-Stack &amp; AI Systems Engineer
          </div>
        </div>
      </div>
    ),
    size,
  );
}
