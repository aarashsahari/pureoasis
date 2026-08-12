import { Consult } from "@/components/site/consult";
import { Process } from "@/components/site/process";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/ui/page-transition";
import { SITE_URL, consult } from "@/lib/content";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get a Quote",
  description:
    "Get a quote for landscaping in Hamilton, Burlington, Ancaster, Dundas, Oakville or Stoney Creek. We answer within one business day and run site visits Monday to Friday.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: { "@id": `${SITE_URL}/#business` },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <JsonLd data={[breadcrumbSchema(crumbs), contactSchema]} />

      <PageHeader crumbs={crumbs} title={consult.headline} lead={consult.body} />

      <Consult />
      <Process />
    </PageTransition>
  );
}
