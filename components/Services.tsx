import Link from "next/link";

const services = [
  {
    num: "I",
    category: "Frisör · Signatur",
    name: "The Signature Cut",
    desc: "Börjar alltid med en djupkonsultation. Klippning, formgivning och avslutas med en behandling anpassad för din hårtyp. Inget är standard.",
    price: "695 kr",
  },
  {
    num: "II",
    category: "Frisör · Färg",
    name: "Nordic Blonde Ritual",
    desc: "Skandinaviskt inspirerad balayage och slingteknik. Ljus som rör sig naturligt – aldrig gjord, alltid rätt. Inkluderar hårmask och styling.",
    price: "1 495 kr",
  },
  {
    num: "III",
    category: "Naglar · Atelier",
    name: "The Nail Atelier",
    desc: "Gelénaglar utförda med samma precision som ett hantverk. Konsultation om form och nyans ingår. Vi arbetar tills varje detalj är exakt rätt.",
    price: "450 kr",
  },
  {
    num: "IV",
    category: "Fransar & Bryn · Ritual",
    name: "The Lash & Brow Edit",
    desc: "Lashlift, browlift eller fransstyling – diskret förstärkning av dina naturliga drag. Resultatet varar. Känslan håller längre.",
    price: "595 kr",
  },
  {
    num: "V",
    category: "Fotvård · Spa",
    name: "Nordic Foot Spa",
    desc: "En ritual för det som bär dig. Medicinsk fotvård och estetisk pedikyr i absolut tystnad. Varm handduk, lugnande olja, mjukt ljus.",
    price: "550 kr",
  },
  {
    num: "VI",
    category: "PMU · Permanent",
    name: "The Permanent Edit",
    desc: "3D-bryn och permanent makeup som förstärker – aldrig ersätter. Varje resultat är unikt ritat för ditt ansikte och din struktur.",
    price: "2 900 kr",
  },
];

export default function Services() {
  return (
    <section id="tjanster" style={{ background: "var(--ink)", padding: "52px 0" }}>
      {/* Header */}
      <div style={{ padding: "0 28px", marginBottom: 36 }}>
        <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.32em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 14 }}>
          Behandlingsmenyn
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.1, color: "var(--ivory)" }}>
          Utvalda<br /><em style={{ fontStyle: "italic", color: "var(--gold-pale)" }}>behandlingar</em>
        </h2>
      </div>

      {/* Scroll track */}
      <div className="snap-x-mandatory no-scrollbar" style={{ display: "flex", gap: 2, overflowX: "auto" }}>
        {services.map((s, i) => (
          <div
            key={i}
            className="snap-start"
            style={{
              flexShrink: 0,
              width: "78vw",
              maxWidth: 300,
              background: "var(--charcoal)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "32px 24px 28px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              marginLeft: i === 0 ? 28 : 0,
              marginRight: i === services.length - 1 ? 28 : 0,
            }}
          >
            {/* Background number */}
            <span
              style={{
                position: "absolute", top: 16, right: 20,
                fontFamily: "var(--font-cormorant)",
                fontSize: "3.5rem", fontWeight: 300,
                color: "rgba(255,255,255,0.06)", lineHeight: 1,
                userSelect: "none",
              }}
            >
              {s.num}
            </span>

            <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>
              {s.category}
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 300, color: "var(--ivory)", lineHeight: 1.2, marginBottom: 14 }}>
              {s.name}
            </h3>
            <p style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--ash)", lineHeight: 1.7, flex: 1, marginBottom: 24 }}>
              {s.desc}
            </p>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
              <div>
                <small style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--ash)", display: "block", marginBottom: 2 }}>Från</small>
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold-pale)" }}>{s.price}</span>
              </div>
              <Link
                href="#bokning"
                style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.22em", color: "var(--gold)", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid rgba(196,169,106,0.4)", paddingBottom: 2 }}
              >
                Reservera
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 28px 0" }}>
        <span className="animate-nudge" style={{ fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.22em", color: "var(--ash)", textTransform: "uppercase" }}>
          Bläddra →
        </span>
        <Link href="#" style={{ fontSize: "0.6rem", fontWeight: 400, letterSpacing: "0.22em", color: "var(--gold)", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid rgba(196,169,106,0.35)", paddingBottom: 2 }}>
          Se alla behandlingar
        </Link>
      </div>
    </section>
  );
}
