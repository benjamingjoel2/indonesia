import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}: tailor-made Indonesia journeys`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Site-wide social sharing card, used by pages without their own photo. */
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
          padding: "72px 80px",
          background: "#0f2e2a",
          color: "#f4ede1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 2 }}>THE ISLAND EDIT</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05 }}>Seventeen thousand islands.</div>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontStyle: "italic", color: "#e3d3b8" }}>
            One considered journey.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#cdb791" }}>
          Tailor-made Indonesia · Bali · Komodo · Raja Ampat · Java
        </div>
      </div>
    ),
    size,
  );
}
