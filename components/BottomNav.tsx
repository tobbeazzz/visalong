"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Hem",         href: "/",        icon: "◇" },
  { label: "Behandlingar", href: "#tjanster", icon: "◈" },
  { label: "Reservera",  href: "#bokning",  icon: null, cta: true },
  { label: "Kontakt",    href: "#kontakt",  icon: "☏" },
];

export default function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 300,
        height: 60,
        background: "rgba(22,20,18,0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          style={
            item.cta
              ? {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 22px",
                  border: "1px solid rgba(196,169,106,0.5)",
                  textDecoration: "none",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  padding: "8px 16px",
                  textDecoration: "none",
                }
          }
        >
          {!item.cta && item.icon && (
            <span style={{ fontSize: "1.1rem", color: "var(--ash)" }}>{item.icon}</span>
          )}
          <span
            style={{
              fontSize: item.cta ? "0.58rem" : "0.56rem",
              fontWeight: item.cta ? 400 : 300,
              letterSpacing: "0.18em",
              color: item.cta ? "var(--gold)" : "var(--stone)",
              textTransform: "uppercase",
            }}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
