import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100svh - 54px)",
        background: "var(--linen)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Marble texture overlay */}
      <div className="marble-bg" style={{ position: "absolute", inset: 0 }} />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(196,169,106,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(92,86,80,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Side text */}
      <span
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          fontFamily: "var(--font-jost)",
          fontSize: "0.6rem",
          fontWeight: 300,
          letterSpacing: "0.28em",
          color: "var(--ash)",
          textTransform: "uppercase",
          writingMode: "vertical-rl",
        }}
      >
        Est. 2010 · Stenungsund
      </span>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "0 28px 48px" }}>
        {/* Kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: "0.6rem",
            fontWeight: 400,
            letterSpacing: "0.32em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          <span style={{ display: "block", width: 32, height: 1, background: "var(--gold)" }} />
          Salong Vi · Atelier
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "3.8rem",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--ink)",
            marginBottom: 28,
          }}
        >
          Färre kunder.
          <br />
          Mer av
          <br />
          <em style={{ fontStyle: "italic", color: "var(--stone)" }}>dig.</em>
        </h1>

        {/* Standfirst */}
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--stone)",
            maxWidth: 300,
            marginBottom: 36,
            borderLeft: "1px solid var(--gold)",
            paddingLeft: 16,
          }}
        >
          Vi tar medvetet emot färre kunder än vi kunde. Det är det enda sättet
          att ge varje person den uppmärksamhet de förtjänar.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link
            href="#bokning"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              height: 52,
              background: "var(--ink)",
              color: "var(--ivory)",
              fontFamily: "var(--font-jost)",
              fontSize: "0.68rem",
              fontWeight: 400,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Reservera din tid
            <span
              style={{
                display: "inline-block",
                width: 20,
                height: 1,
                background: "var(--gold)",
                position: "relative",
              }}
            />
          </Link>
          <Link
            href="#tjanster"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
              background: "transparent",
              color: "var(--stone)",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              border: "1px solid var(--silk)",
              textDecoration: "none",
            }}
          >
            Utforska behandlingar
          </Link>
        </div>

        {/* Location */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: "0.65rem",
            fontWeight: 300,
            letterSpacing: "0.12em",
            color: "var(--ash)",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "var(--gold)" }}>◈</span>
          Strandvägen 8, Stenungsund
        </div>
      </div>
    </section>
  );
}
