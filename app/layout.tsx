import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { business } from "@/lib/content";

import "./globals.css";

const description =
  "Landscape design and construction for homes in Hamilton, Burlington, Oakville and the west GTA. Terraces, natural stone, grading, planting, lighting and irrigation, built by one crew.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pureoasis.ca"),
  title: {
    default: `${business.name} | Landscape design and build, Hamilton and Burlington`,
    template: `%s | ${business.name}`,
  },
  description,
  keywords: [
    "landscaping Hamilton",
    "landscape design Burlington",
    "interlock Ancaster",
    "backyard design GTA",
    "natural stone patio Ontario",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: business.name,
    title: `${business.name} | Landscape design and build`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eff1ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0c110e" },
  ],
};

/** Applies a stored theme choice before first paint so the page never flips. */
const themeScript = `try{var t=localStorage.getItem("pureoasis-theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}`;

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: business.legalName,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLines[0],
    addressLocality: "Hamilton",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: business.serviceArea.map((name) => ({ "@type": "City", name })),
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-edge focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
