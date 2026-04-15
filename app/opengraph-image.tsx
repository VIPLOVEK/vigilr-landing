import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Vigilr — AI-Native Third-Party Risk Management Platform"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`
  // IE11 UA → Google Fonts returns woff (not woff2); fontkit in this Next.js build supports woff but not woff2
  const css = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
    },
  }).then((r) => r.text())

  const match = css.match(/src: url\(([^)]+)\) format\('woff'\)/)
  if (!match) throw new Error(`Could not find woff URL for ${family}:${weight}`)
  return fetch(match[1]).then((r) => r.arrayBuffer())
}

export default async function OgImage() {
  const [interRegular, interSemiBold] = await Promise.all([
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 600),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "#0f1219",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Teal glow — top center */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 300,
            width: 600,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(32,178,148,0.22) 0%, transparent 65%)",
          }}
        />

        {/* Subtle bottom-right glow */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(32,178,148,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "52px 72px 44px",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 11,
                background: "#20B294",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <span
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "#edf2f7",
                letterSpacing: "-0.5px",
              }}
            >
              Vigilr
            </span>

            {/* Divider */}
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.12)", marginLeft: 8 }} />

            {/* Tag */}
            <span style={{ fontSize: 14, color: "#8a9ab5", fontWeight: 400, marginLeft: 8 }}>
              Third-Party Risk Intelligence
            </span>
          </div>

          {/* Headline block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              gap: 16,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(32,178,148,0.12)",
                border: "1px solid rgba(32,178,148,0.28)",
                borderRadius: 999,
                padding: "6px 16px",
                width: "fit-content",
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#20B294" }} />
              <span style={{ fontSize: 14, color: "#20B294", fontWeight: 500 }}>
                AI-Native · Real-Time · Day 1 Value
              </span>
            </div>

            {/* Main headline */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontSize: 66,
                  fontWeight: 600,
                  color: "#edf2f7",
                  lineHeight: 1.08,
                  letterSpacing: "-2px",
                }}
              >
                Vendor risk,
              </span>
              <span
                style={{
                  fontSize: 66,
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-2px",
                  color: "#20B294",
                }}
              >
                always-on.
              </span>
            </div>

            {/* Subheadline */}
            <span
              style={{
                fontSize: 22,
                color: "#7a8fa8",
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: 700,
              }}
            >
              Continuous CVE monitoring, breach detection, and AI risk scoring —
              replacing annual questionnaires with real-time intelligence.
            </span>
          </div>

          {/* Bottom stats bar */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: 24,
              gap: 0,
            }}
          >
            {[
              { value: "50+", label: "Automated data sources" },
              { value: "Real-time", label: "Continuous monitoring" },
              { value: "Day 1", label: "Time to first risk score" },
              { value: "SOC 2 Type II", label: "Certified" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  flex: 1,
                  paddingLeft: i > 0 ? 28 : 0,
                  paddingRight: i < 3 ? 28 : 0,
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#edf2f7",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: 13, color: "#7a8fa8" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interSemiBold, style: "normal", weight: 600 },
      ],
    }
  )
}
