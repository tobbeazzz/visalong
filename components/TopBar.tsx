"use client";
import Link from "next/link";
import Image from "next/image";

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
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo/logo-horizontal.svg"
          alt="Salong Vi"
          width={200}
          height={28}
          priority
        />
      </Link>

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
