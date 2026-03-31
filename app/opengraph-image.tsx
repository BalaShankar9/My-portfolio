import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bala Sankar Bollineni — Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: "-0.02em",
          }}
        >
          BALA SANKAR BOLLINENI
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            marginTop: "16px",
          }}
        >
          I taught myself to code, then shipped 7 products nobody asked me to
          build.
        </div>
        <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
          {["TypeScript", "Python", "Next.js", "FastAPI", "AI Agents"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  background: "#27272a",
                  borderRadius: "9999px",
                  fontSize: "16px",
                  color: "#a1a1aa",
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
