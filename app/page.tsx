import { AboutTeaser } from "@/components/site/about-teaser";
import { BeforeAfter } from "@/components/site/before-after";
import { ClosingBand } from "@/components/site/closing-band";
import { Durability } from "@/components/site/durability";
import { FeaturedProject } from "@/components/site/featured-project";
import { Hero } from "@/components/site/hero";
import { JournalTeaser } from "@/components/site/journal-teaser";
import { Process } from "@/components/site/process";
import { ServiceArea } from "@/components/site/service-area";
import { Services } from "@/components/site/services";
import { StatsBand } from "@/components/site/stats-band";
import { Testimonials } from "@/components/site/testimonials";
import { JsonLd } from "@/components/ui/json-ld";
import { PageTransition } from "@/components/ui/page-transition";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Landscaping in Hamilton and the Surrounding Areas",
  description:
    "Full service landscaping in Hamilton and the surrounding areas. Design, hardscape, lawn care, irrigation and garden maintenance, from one crew that builds it and keeps it.",
  path: "/",
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Pure Oasis",
  inLanguage: "en-CA",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export default function HomePage() {
  return (
    <PageTransition>
      <JsonLd data={websiteSchema} />
      <Hero />
      <ServiceArea />
      <AboutTeaser />
      <Services />
      <StatsBand />
      <BeforeAfter />
      <FeaturedProject />
      <Durability />
      <Process />
      <Testimonials />
      <JournalTeaser />
      <ClosingBand />
    </PageTransition>
  );
}
