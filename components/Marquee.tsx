const items = [
  "The Signature Cut",
  "Nordic Blonde Ritual",
  "The Nail Atelier",
  "The Lash & Brow Edit",
  "Nordic Foot Spa",
  "The Permanent Edit",
  "The Restore Ritual",
  "The Smooth Edit",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: "var(--gold)", padding: "12px 0" }}>
      <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "0 20px",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink)",
            }}
          >
            {item}
            <span style={{ fontSize: "0.5rem", opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
