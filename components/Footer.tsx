export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", padding: "44px 28px 28px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem", fontWeight: 300, color: "var(--ivory)", letterSpacing: "0.12em" }}>
            Salong <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Vi</em>
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
            {[
              { label: "Instagram", href: "https://instagram.com/salongvi" },
              { label: "Facebook", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                style={{ fontSize: "0.58rem", fontWeight: 300, letterSpacing: "0.2em", color: "var(--ash)", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid rgba(154,148,142,0.4)", paddingBottom: 2 }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "20px 0" }} />

      <p style={{ fontSize: "0.68rem", fontWeight: 300, color: "var(--ash)", lineHeight: 1.8, letterSpacing: "0.04em" }}>
        Strandvägen 8 · 444 31 Stenungsund<br />
        vi@salongvi.nu · 0303 10168
      </p>
      <p style={{ marginTop: 20, fontSize: "0.55rem", fontWeight: 300, letterSpacing: "0.18em", color: "var(--stone)", textTransform: "uppercase" }}>
        © 2025 Salong Vi Naglar och Frisör · Alla rättigheter förbehållna
      </p>
    </footer>
  );
}
