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
          background: "#04141d",
          backgroundImage:
            "radial-gradient(680px circle at 6% -10%, rgba(33,158,188,0.35), transparent 60%), radial-gradient(560px circle at 100% 120%, rgba(255,183,3,0.18), transparent 60%)",
          color: "#eef5f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#8ecae6" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#219ebc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#012231",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            BK
          </div>
          Code · Create · Solve
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Badri Narayana Kancharla
          </div>
          <div style={{ fontSize: 32, color: "#b3c8d2" }}>
            Full-Stack &amp; AI Systems Engineer
          </div>
        </div>
      </div>
    ),
    size,
  );
}
