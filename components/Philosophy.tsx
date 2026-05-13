export default function Philosophy() {
  return (
    <>
      {/* Rule */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "0 28px", margin: "48px 0" }}>
        <div style={{ flex: 1, height: 1, background: "var(--silk)" }} />
        <span style={{ fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.2em" }}>◈</span>
        <div style={{ flex: 1, height: 1, background: "var(--silk)" }} />
      </div>

      {/* Philosophy block */}
      <section style={{ padding: "0 28px 56px", background: "var(--pw)" }}>
        <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.32em", color: "var(--ash)", textTransform: "uppercase", marginBottom: 20 }}>
          Vår filosofi
        </p>
        <blockquote
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "2rem",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.35,
            color: "var(--charcoal)",
            marginBottom: 20,
          }}
        >
          "Vi kunde ta emot fler. Vi väljer att inte göra det."
        </blockquote>
        <p style={{ fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.16em", color: "var(--gold)", textTransform: "uppercase" }}>
          — Charlott Green, Grundare
        </p>
        <p
          style={{
            marginTop: 24,
            fontSize: "0.82rem",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "var(--stone)",
            paddingTop: 24,
            borderTop: "1px solid var(--silk)",
          }}
        >
          Salong Vi är byggt av trä, kalksten, linne och mässing – material som åldras med
          värdighet, precis som de relationer vi bygger med våra kunder. Varje detalj i lokalen
          är medvetet vald för att du aldrig ska behöva undra om du är prioriterad. Du är det. Alltid.
        </p>
      </section>
    </>
  );
}
