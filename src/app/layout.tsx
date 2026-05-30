import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { BackToTop } from "@/components/layout/back-to-top";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { JsonLd, getLocalBusinessSchema, getOrganizationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Early Learning in Johnson County, KS`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "daycare Johnson County KS",
    "preschool Overland Park",
    "child care Leawood",
    "Montessori preschool Kansas City",
    "nature-based childcare",
    "infant daycare near me",
    "Pre-K program Kansas City",
    "best daycare Overland Park",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}>
      <head>
        <JsonLd data={[getLocalBusinessSchema(), getOrganizationSchema()]} />
      </head>
      <body className="min-h-full flex flex-col font-sans text-charcoal antialiased pb-16 lg:pb-0">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
