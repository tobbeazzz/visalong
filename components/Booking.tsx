// Replace GHL_CALENDAR_ID with your actual GoHighLevel calendar ID
const GHL_CALENDAR_ID = process.env.NEXT_PUBLIC_GHL_CALENDAR_ID ?? "";

const steps = ["Välj tjänst", "Välj tid", "Bekräfta"];

const perks = [
  { icon: "💬", label: "SMS-bekräftelse" },
  { icon: "🔔", label: "Påminnelse 24h" },
  { icon: "🔄", label: "Enkel ombokning" },
  { icon: "🔐", label: "Säker betalning" },
];

export default function Booking() {
  return (
    <section id="bokning" style={{ background: "var(--linen)", padding: "56px 28px" }}>
      <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.32em", color: "var(--ash)", textTransform: "uppercase", marginBottom: 14 }}>
        Reservera
      </p>
      <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 300, lineHeight: 1.15, color: "var(--ink)", marginBottom: 8 }}>
        Din tid<br /><em style={{ fontStyle: "italic", color: "var(--stone)" }}>väntar på dig</em>
      </h2>
      <p style={{ fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.75, color: "var(--stone)", marginBottom: 32, paddingBottom: 24, borderBottom: "1px solid var(--silk)" }}>
        Välj behandling, stylist och tid som passar dig. Vi bekräftar omgående via SMS och skickar en personlig påminnelse dagen innan.
      </p>

      {/* Steps */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                border: "1px solid rgba(196,169,106,0.4)",
                color: "var(--gold)", fontSize: "0.8rem", fontWeight: 600,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 6px",
              }}>{i + 1}</div>
              <div style={{ fontSize: "0.65rem", color: "var(--ash)", fontWeight: 500 }}>{s}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 20, height: 1, background: "var(--silk)", flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>

      {/* GHL Frame */}
      <div style={{ border: "1px solid var(--silk)", background: "var(--pw)" }}>
        {/* Header */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--silk)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", color: "var(--stone)", textTransform: "uppercase" }}>Online-bokning</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.58rem", fontWeight: 300, letterSpacing: "0.12em", color: "var(--ash)", textTransform: "uppercase" }}>
            <span className="animate-live" style={{ width: 6, height: 6, borderRadius: "50%", background: "#6BB587", display: "inline-block" }} />
            Öppen för bokning
          </span>
        </div>

        {/* Embed */}
        <div style={{ padding: "28px 20px" }}>
          {GHL_CALENDAR_ID ? (
            <iframe
              src={`https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`}
              width="100%"
              height={600}
              style={{ border: "none" }}
              title="Boka tid – Salong Vi"
            />
          ) : (
            <div style={{ background: "var(--ivory)", border: "1px dashed var(--silk)", padding: "40px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: 14, opacity: 0.6 }}>◈</div>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 300, color: "var(--ink)", marginBottom: 8 }}>
                GoHighLevel-kalender
              </h3>
              <p style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--ash)", lineHeight: 1.6, marginBottom: 16 }}>
                Sätt miljövariabeln <code>NEXT_PUBLIC_GHL_CALENDAR_ID</code> till ditt GHL kalender-ID.
              </p>
              <pre style={{ background: "var(--ink)", color: "var(--gold-pale)", padding: "12px 14px", fontSize: "0.65rem", textAlign: "left", overflowX: "auto", lineHeight: 1.7 }}>
{`NEXT_PUBLIC_GHL_CALENDAR_ID=DIN-KALENDER-ID`}
              </pre>
            </div>
          )}
        </div>

        {/* Perks */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--silk)" }}>
          {perks.map((p, i) => (
            <div key={i} style={{ background: "var(--pw)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: "0.9rem" }}>{p.icon}</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 300, color: "var(--stone)" }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
