const reviews = [
  { stars: 5, text: "Känslan av att komma hit är som att checka in på ett spa. Alltid nöjd – varje gång.", author: "Emma K.", source: "Stamkund" },
  { stars: 5, text: "Mina naglar håller längre och ser bättre ut än någon annanstans jag testat. Charlott är ett proffs.", author: "Johanna L.", source: "Google" },
  { stars: 5, text: "Mindy är en magiker med fransar. Sparar mig tid varje morgon och jag känner mig fantastisk.", author: "Sara M.", source: "Instagram" },
];

export default function Testimonials() {
  return (
    <section style={{ background: "var(--pw)", padding: "56px 0" }}>
      <div style={{ padding: "0 28px", marginBottom: 36 }}>
        <p style={{ fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.32em", color: "var(--ash)", textTransform: "uppercase", marginBottom: 14 }}>
          Gästernas ord
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", fontWeight: 300, color: "var(--ink)" }}>
          Erfarenheter
        </h2>
      </div>

      <div className="snap-x-mandatory no-scrollbar" style={{ display: "flex", gap: 2, overflowX: "auto" }}>
        {reviews.map((r, i) => (
          <div
            key={i}
            className="snap-start"
            style={{
              flexShrink: 0,
              width: "84vw",
              maxWidth: 320,
              background: "var(--linen)",
              padding: "28px 24px",
              marginLeft: i === 0 ? 28 : 0,
              marginRight: i === reviews.length - 1 ? 28 : 0,
            }}
          >
            <div style={{ fontSize: "0.7rem", letterSpacing: 4, color: "var(--gold)", marginBottom: 16 }}>
              {"★".repeat(r.stars)}
            </div>
            <blockquote style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 300, fontStyle: "italic", lineHeight: 1.55, color: "var(--charcoal)", marginBottom: 20 }}>
              "{r.text}"
            </blockquote>
            <p style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.18em", color: "var(--ash)", textTransform: "uppercase" }}>
              {r.author} · {r.source}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
