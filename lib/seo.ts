import type { Metadata } from "next";

import { areas } from "@/lib/areas";
import { SITE_URL, business } from "@/lib/content";
import { services } from "@/lib/services";

const DEFAULT_OG = "/images/hero-terrace.jpg";

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  /** Route path beginning with a slash. */
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: business.name,
      locale: "en_CA",
      images: [{ url: image, width: 1400, height: 1750, alt: business.legalName }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** The organisation itself. Rendered once, in the root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": `${SITE_URL}/#business`,
    name: business.legalName,
    alternateName: business.name,
    url: SITE_URL,
    telephone: business.phone,
    email: business.email,
    image: `${SITE_URL}${DEFAULT_OG}`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.locality,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: "CA",
    },
    areaServed: areas.map((area) => ({ "@type": "City", name: area.city })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    sameAs: business.social.map((account) => account.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscape services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: `${SITE_URL}${step.path === "/" ? "" : step.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: areas.map((area) => ({ "@type": "City", name: area.city })),
  };
}

export function faqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  published,
  updated,
  author,
  image,
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
  author: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: published,
    dateModified: updated ?? published,
    author: { "@type": "Person", name: author },
    publisher: { "@id": `${SITE_URL}/#business` },
    image: `${SITE_URL}${image}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}
