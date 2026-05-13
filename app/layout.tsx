import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salong Vi – Atelier | Stenungsund",
  description:
    "Frisör, naglar, fransar, fotvård och skönhet i Stenungsund. Vi tar emot färre kunder – för att ge dig mer.",
  keywords: ["frisör stenungsund", "naglar", "salong vi", "lashlift", "luxury salon"],
  openGraph: {
    title: "Salong Vi – Atelier",
    description: "Färre kunder. Mer av dig.",
    url: "https://salongvi.nu",
    siteName: "Salong Vi",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${jost.variable}`}>
      <body style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
