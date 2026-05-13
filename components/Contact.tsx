const rows = [
  { glyph: "☏", label: "Telefon", value: "0303 10168", sub: "Ring oss direkt", href: "tel:030310168" },
  { glyph: "✉", label: "E-post", value: "vi@salongvi.nu", sub: "Vi svarar inom 24h", href: "mailto:vi@salongvi.nu" },
  { glyph: "◈", label: "Adress", value: "Strandvägen 8, Stenungsund", sub: "Visa på karta", href: "https://maps.apple.com/?q=Strandvägen+8+Stenungsund" },
  { glyph: "◉", label: "Instagram", value: "@salongvi", sub: "Följ oss", href: "https://instagram.com/salongvi" },
];

export default function Contact() {
  return (
    <section id="kontakt" style={{ background: "var(--linen)", padding: "52px 28px" }}>
      <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.32em", color: "var(--ash)", textTransform: "uppercase", marginBottom: 14 }}>
        Kontakt
      </p>
      <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", fontWeight: 300, lineHeight: 1.15, color: "var(--ink)", marginBottom: 32 }}>
        Vi ser fram<br /><em style={{ fontStyle: "italic", color: "var(--stone)" }}>emot dig</em>
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {rows.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "18px 0", borderBottom: "1px solid var(--silk)", textDecoration: "none", cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 36, height: 36, border: "1px solid var(--silk)", background: "var(--pw)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", flexShrink: 0 }}>
                  {r.glyph}
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.82rem", fontWeight: 400, color: "var(--ink)" }}>{r.value}</strong>
                  <small style={{ fontSize: "0.65rem", fontWeight: 300, color: "var(--ash)", letterSpacing: "0.06em" }}>{r.sub}</small>
                </div>
              </div>
              <span style={{ fontSize: "0.7rem", color: "var(--gold)" }}>→</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hours */}
      <div style={{ marginTop: 28, background: "var(--pw)", border: "1px solid var(--silk)", padding: 20 }}>
        <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.28em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>
          Öppettider
        </p>
        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem", fontWeight: 300, fontStyle: "italic", color: "var(--charcoal)", lineHeight: 1.5 }}>
          Vi tar emot kunder vid bokning.<br />
          Boka din tid online – dygnet runt.
        </p>
      </div>
    </section>
  );
}
