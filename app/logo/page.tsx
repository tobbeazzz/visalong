import Image from "next/image";

export default function LogoPreview() {
  const logos = [
    { file: "/logo/logo-primary.svg",    label: "Primär – vertikal",     bg: "#FDFCFB", w: 320, h: 120 },
    { file: "/logo/logo-dark.svg",       label: "Primär – mörkt läge",  bg: "#161412", w: 320, h: 120 },
    { file: "/logo/logo-horizontal.svg", label: "Horisontell – navbar",  bg: "#FDFCFB", w: 400, h:  56 },
    { file: "/logo/logo-mark.svg",       label: "Märke – favicon/ikon",  bg: "#FDFCFB", w:  80, h:  80 },
    { file: "/logo/logo-mark.svg",       label: "Märke – på mörkt",      bg: "#161412", w:  80, h:  80 },
  ];

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#F7F4F0", minHeight: "100vh", padding: "48px 32px" }}>
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.28em", color: "#9A948E", textTransform: "uppercase", marginBottom: 8 }}>
        Salong Vi · Brand Assets
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "2.4rem", color: "#161412", marginBottom: 8 }}>
        Logotyp<em style={{ fontStyle: "italic", color: "#9A948E" }}> – varianter</em>
      </h1>
      <p style={{ fontSize: "0.78rem", color: "#9A948E", marginBottom: 48, fontWeight: 300 }}>
        /public/logo/ · SVG · skalas utan kvalitetsförlust
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {logos.map((l, i) => (
          <div key={i}>
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", color: "#C4A96A", textTransform: "uppercase" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "0.7rem", fontWeight: 300, color: "#5C5650", letterSpacing: "0.08em" }}>{l.label}</span>
              <div style={{ flex: 1, height: 1, background: "#D4CEC8" }} />
              <span style={{ fontSize: "0.6rem", color: "#D4CEC8", fontFamily: "monospace" }}>{l.file}</span>
            </div>

            {/* Logo display */}
            <div
              style={{
                background: l.bg,
                border: "1px solid #D4CEC8",
                padding: "32px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={l.file} alt={l.label} width={l.w} height={l.h} />
            </div>

            {/* Usage note */}
            <p style={{ marginTop: 8, fontSize: "0.65rem", color: "#9A948E", fontWeight: 300 }}>
              {i === 0 && "Använd på: splash-sidor, tryck, sociala medier (kvadratisk yta)"}
              {i === 1 && "Använd på: mörk bakgrund, dark mode, merchandise"}
              {i === 2 && "Använd på: navbar (TopBar), e-post header, PDF-header"}
              {i === 3 && "Använd på: favicon, app-ikon, profilbild Instagram"}
              {i === 4 && "Använd på: favicon mörk, stämpel på mörkt material"}
            </p>
          </div>
        ))}
      </div>

      {/* Handoff section */}
      <div style={{ marginTop: 64, borderTop: "1px solid #D4CEC8", paddingTop: 40 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.6rem", color: "#161412", marginBottom: 24 }}>
          Design Handoff
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {[
            { label: "Primär font – serif", value: "Cormorant Garamond, 300, italic", note: "Logotypens 'Vi'" },
            { label: "Sekundär font – sans", value: "Jost, 200, normal", note: "SALONG, STENUNGSUND" },
            { label: "Guld – primär accent", value: "#C4A96A", note: "Linjer, diamant, understrykning" },
            { label: "Bläck – text mörk", value: "#161412", note: "Logotyp på ljus bakgrund" },
            { label: "Elfenben – text ljus", value: "#F7F4F0", note: "Logotyp på mörk bakgrund" },
            { label: "Aska – sekundär text", value: "#9A948E", note: "SALONG / STENUNGSUND" },
            { label: "Linjestorlek", value: "0.75px (primary), 0.35px (secondary)", note: "Aldrig fylld yta" },
            { label: "Min-storlek", value: "80×80px (mark), 200×75px (horizontal)", note: "Under dessa: använd text-only" },
          ].map((r, i) => (
            <div key={i} style={{ background: "#FDFCFB", border: "1px solid #EDE9E4", padding: "16px 18px" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.16em", color: "#C4A96A", textTransform: "uppercase", marginBottom: 6 }}>{r.label}</div>
              <div style={{ fontSize: "0.82rem", fontWeight: 400, color: "#161412", marginBottom: 4, fontFamily: "monospace" }}>{r.value}</div>
              <div style={{ fontSize: "0.65rem", color: "#9A948E", fontWeight: 300 }}>{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
