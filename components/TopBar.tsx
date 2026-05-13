"use client";
import Link from "next/link";

export default function TopBar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        height: 54,
        background: "rgba(253,252,251,0.94)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--silk)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      {/* Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontSize: "1.3rem",
            letterSpacing: "0.22em",
            color: "var(--ink)",
            textTransform: "uppercase",
          }}
        >
          Salong Vi
        </span>
        <span
          style={{
            fontFamily: "var(--font-jost)",
            fontWeight: 200,
            fontSize: "0.52rem",
            letterSpacing: "0.38em",
            color: "var(--ash)",
            textTransform: "uppercase",
            marginTop: 1,
          }}
        >
          Stenungsund · Atelier
        </span>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a
          href="tel:030310168"
          style={{
            fontSize: "0.68rem",
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: "var(--stone)",
            textDecoration: "none",
          }}
        >
          0303 10168
        </a>
        <Link
          href="#bokning"
          style={{
            height: 32,
            padding: "0 18px",
            border: "1px solid var(--ink)",
            background: "transparent",
            fontFamily: "var(--font-jost)",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--ink)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          Reservera
        </Link>
      </div>
    </header>
  );
}
