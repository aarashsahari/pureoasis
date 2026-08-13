import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site/site-footer";
import { MobileCallBar } from "@/components/site/mobile-call-bar";
import { SiteHeader } from "@/components/site/site-header";
import { TopBar } from "@/components/site/top-bar";
import { JsonLd } from "@/components/ui/json-ld";
import { SITE_URL, business } from "@/lib/content";
import { localBusinessSchema } from "@/lib/seo";

import "./globals.css";

const description =
  "Full service landscaping for homes in Hamilton and the surrounding areas. Design, hardscape, lawn care, irrigation and garden maintenance, from one crew.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} | Full Service Landscaping, Hamilton`,
    template: `%s | ${business.name}`,
  },
  description,
  applicationName: business.name,
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  publisher: business.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eff1ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0c110e" },
  ],
};

/** Applies a stored theme choice before first paint so the page never flips. */
const themeScript = `try{var t=localStorage.getItem("pureoasis-theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={localBusinessSchema()} />
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-edge focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <TopBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  );
}
