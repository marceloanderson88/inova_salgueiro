import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = "Inova Salgueiro — Ecossistema de Inovação de Salgueiro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #07542F 0%, #08783F 58%, #0B8C4A 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 46, fontWeight: 800, color: "#FFFFFF", letterSpacing: -1 }}>
            INOVA
          </span>
          <span
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: "#F38A09",
              letterSpacing: -1,
              marginLeft: 14,
            }}
          >
            SALGUEIRO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.14,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Conectando pessoas, ideias e instituições para inovar em Salgueiro
          </span>
          <span style={{ fontSize: 27, color: "rgba(255,255,255,0.72)", marginTop: 26 }}>
            Ecossistema de inovação de Salgueiro — PE
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", width: 74, height: 6, background: "#F38A09", borderRadius: 3 }} />
          <span style={{ fontSize: 23, color: "rgba(255,255,255,0.62)", marginLeft: 22 }}>
            {site.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
