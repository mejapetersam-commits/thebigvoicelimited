/**
 * Central SEO config. If the main domain changes, update SITE_URL here AND the
 * two static files: public/robots.txt and public/sitemap.xml.
 */
export const SITE_URL = "https://thebigvoicelimited.co.ke";
export const SITE_NAME = "The Big Voice Ltd";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const PHONE_E164 = "+254717003755";
export const EMAIL = "thebigvoicelimited@gmail.com";

/** Google Analytics 4 Measurement ID (looks like "G-XXXXXXXXXX"). Leave empty to keep analytics off. */
export const GA_MEASUREMENT_ID: string = "";

type PageSeo = { path: string; title: string; description: string };

/** Title, description, social tags and canonical URL for a page. */
export function seo({ path, title, description }: PageSeo) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-192.png`,
  image: OG_IMAGE,
  description:
    "Voice over and audio production, event sound and podcast production in Nairobi, Kenya.",
  telephone: PHONE_E164,
  email: EMAIL,
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  areaServed: "Kenya",
  sameAs: ["https://instagram.com/thebigvoiceltd"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      "Voice & Audio Production",
      "Event & Sound Experience",
      "Podcast Production",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: "Kenya",
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function blogPostSchema(p: { slug: string; title: string; description: string; date: string }) {
  const url = `${SITE_URL}/blog/${p.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    image: OG_IMAGE,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}
