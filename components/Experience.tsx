const items = [
  { glyph: "☕", name: "Välkomnande dryck", desc: "Espresso, handplockat te eller vatten med citrus. Alltid. Utan att fråga.", wide: false },
  { glyph: "🔇", name: "Akustisk ro", desc: "Lokalen är designad för låg ljudnivå. Mjuk musik, inga onödiga samtal. Din tid är din.", wide: false },
  { glyph: "◈", name: "Material med karaktär", desc: "Trä, kalksten, linne och mässing. Material som åldras med värdighet – valda för att du ska känna skillnaden.", wide: false },
  { glyph: "🎯", name: "Djupkonsultation", desc: "Inget behandlingsbesök börjar utan att vi lyssnar. Dina önskemål, din hårtyp, din vardag.", wide: false },
  { glyph: "🔒", name: "Begränsat antal platser", desc: "Vi tar medvetet emot färre kunder per dag än vi skulle kunna. Det är det enda sättet att aldrig kompromissa.", wide: false },
  { glyph: "✉", name: "Personlig uppföljning via GHL", desc: "Dagen efter din behandling får du skötselråd skräddarsydda för just ditt hår eller naglar – automatiserat via GoHighLevel, men alltid personligt i tonen.", wide: true },
];

export default function Experience() {
  return (
    <section style={{ background: "var(--ink)", padding: "52px 28px" }}>
      <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.32em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 14 }}>
        Upplevelsen
      </p>
      <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 300, lineHeight: 1.15, color: "var(--ivory)", marginBottom: 36 }}>
        Mer än en<br /><em style={{ fontStyle: "italic", color: "var(--gold-pale)" }}>salong</em>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              gridColumn: item.wide ? "1 / -1" : undefined,
              background: "var(--charcoal)",
              border: "1px solid rgba(255,255,255,0.05)",
              padding: "24px 18px",
            }}
          >
            <span style={{ fontSize: "1.3rem", marginBottom: 12, display: "block" }}>{item.glyph}</span>
            <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem", fontWeight: 300, color: "var(--ivory)", marginBottom: 6 }}>{item.name}</div>
            <div style={{ fontSize: "0.72rem", fontWeight: 300, color: "var(--ash)", lineHeight: 1.6 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
