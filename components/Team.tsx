import Link from "next/link";

const members = [
  {
    index: "01",
    name: "Mindy Markov",
    role: "Fotvård · Fransar · Browlift · Vaxning",
    specialties: ["Pedikyr", "Lashlift", "Browlift", "Fransstylist"],
    phone: "0737 08740",
    phoneHref: "tel:0737087400",
    instagram: "@salongvi.mindy",
    igHref: "https://instagram.com/salongvi.mindy",
  },
  {
    index: "02",
    name: "Emelie Stejn",
    role: "Frisör & Makeupstylist",
    specialties: ["Klippning", "Färg", "Makeup"],
    instagram: "@emeliestein",
    igHref: "https://instagram.com/emeliestein",
  },
  {
    index: "03",
    name: "Emma Svensson",
    role: "Frisör med Gesällbrev",
    specialties: ["Klippning", "Slingor", "Hårbehandlingar"],
    instagram: "@hairandbeautybyemma",
    igHref: "https://instagram.com/hairandbeautybyemma",
  },
];

export default function Team() {
  return (
    <section style={{ background: "var(--pw)", padding: "56px 0" }}>
      {/* Header */}
      <div style={{ padding: "0 28px", marginBottom: 40 }}>
        <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.32em", color: "var(--ash)", textTransform: "uppercase", marginBottom: 14 }}>
          Atelier
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 300, lineHeight: 1.15, color: "var(--ink)" }}>
          Vi finns<br /><em style={{ fontStyle: "italic", color: "var(--stone)" }}>för dig</em>
        </h2>
      </div>

      {/* Founder feature */}
      <div
        style={{
          margin: "0 28px 2px",
          background: "var(--linen)",
          padding: "32px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative quote mark */}
        <span
          aria-hidden
          style={{
            position: "absolute", bottom: -20, right: 16,
            fontFamily: "var(--font-cormorant)",
            fontSize: "12rem", color: "rgba(196,169,106,0.08)",
            lineHeight: 1, userSelect: "none",
          }}
        >
          "
        </span>

        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.24em",
            color: "var(--gold-deep)", textTransform: "uppercase",
            border: "1px solid var(--gold-pale)", padding: "5px 12px",
            marginBottom: 20,
          }}
        >
          ★ Grundare &amp; Ägare
        </div>

        <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", fontWeight: 300, lineHeight: 1.1, color: "var(--ink)", marginBottom: 4 }}>
          Charlott Green
        </h3>
        <p style={{ fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>
          Nagelspecialist · Grundare sedan 2010
        </p>
        <p style={{ fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.85, color: "var(--stone)", marginBottom: 20 }}>
          Charlott skapade Salong Vi med en enkel övertygelse: att varje kund förtjänar en upplevelse
          som är lika omsorgsfull som resultatet. Med mer än ett decennium i branschen kombinerar hon
          teknisk precision med ett varmt och personligt bemötande.
        </p>
        <a href="https://instagram.com/nailsbygreen" style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.16em", color: "var(--gold-deep)", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid var(--gold-pale)", paddingBottom: 2 }}>
          @nailsbygreen
        </a>
      </div>

      {/* Team list */}
      <div>
        {members.map((m) => (
          <div key={m.index} style={{ display: "flex", alignItems: "flex-start", borderBottom: "1px solid var(--silk)", margin: "0 28px" }}>
            {/* Index */}
            <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.7rem", fontWeight: 300, color: "var(--silk)", width: 28, paddingTop: 22, flexShrink: 0 }}>
              {m.index}
            </span>

            {/* Content */}
            <div style={{ flex: 1, padding: "20px 0 20px 12px" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 300, color: "var(--ink)", marginBottom: 3 }}>{m.name}</div>
              <div style={{ fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.1em", color: "var(--ash)", textTransform: "uppercase", marginBottom: 10 }}>{m.role}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                {m.specialties.map((s) => (
                  <span key={s} style={{ fontSize: "0.62rem", fontWeight: 300, color: "var(--stone)", border: "1px solid var(--silk)", padding: "3px 10px" }}>{s}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {m.phone && <a href={m.phoneHref} style={{ fontSize: "0.62rem", fontWeight: 300, letterSpacing: "0.1em", color: "var(--gold-deep)", textTransform: "uppercase", textDecoration: "none" }}>{m.phone}</a>}
                {m.instagram && <a href={m.igHref} style={{ fontSize: "0.62rem", fontWeight: 300, letterSpacing: "0.1em", color: "var(--gold-deep)", textTransform: "uppercase", textDecoration: "none" }}>{m.instagram}</a>}
              </div>
            </div>

            {/* Book button */}
            <div style={{ paddingTop: 20 }}>
              <Link
                href="#bokning"
                style={{
                  fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.2em",
                  color: "var(--gold)", textTransform: "uppercase", textDecoration: "none",
                  writingMode: "vertical-rl", borderLeft: "1px solid var(--gold-pale)",
                  paddingLeft: 10, display: "block",
                }}
              >
                Boka
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
