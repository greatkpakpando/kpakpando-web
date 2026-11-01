import type { Metadata } from "next";
import localFont from "next/font/local";
import { FoundationHeader } from "@/components/layout/FoundationHeader";
import { FoundationFooter } from "@/components/layout/FoundationFooter";
import { foundation } from "@/data/foundation";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const description =
  "Empowering widows, orphans and young people through education, practical support and community outreach in Enugu State, Nigeria.";
export const metadata: Metadata = {
  title: {
    default: `${foundation.name} | Dignity, Opportunity & Hope`,
    template: `%s | ${foundation.name}`,
  },
  description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  openGraph: {
    title: foundation.name,
    description,
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 520,
        height: 535,
        alt: foundation.name,
      },
    ],
  },
  twitter: { card: "summary", title: foundation.name, description },
  icons: { icon: "/assets/logo.jpeg", apple: "/assets/logo.jpeg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <FoundationHeader />
        <main id="main-content">{children}</main>
        <FoundationFooter />
      </body>
    </html>
  );
}
