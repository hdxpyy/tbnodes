import { SITE, SUPPORT_EMAIL, DISCORD_URL, LOCATION } from "@/config/site";
import { MC_TIERS, VPS } from "@/config/plans";
import { FAQS } from "@/config/faq";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    email: SUPPORT_EMAIL,
    sameAs: [DISCORD_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: LOCATION.city,
      addressCountry: LOCATION.country,
    },
    founder: {
      "@type": "Person",
      name: SITE.owner,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description,
    url: `${SITE.url}${url}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductCatalogSchema() {
  // Real product offers from verified plans data
  const basicPlans = MC_TIERS[0].plans.map((p) => ({
    "@type": "Offer",
    name: `TBNODES Minecraft ${p.name} Plan`,
    price: p.price,
    priceCurrency: "INR",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    url: `${SITE.url}/minecraft`,
    description: `${p.ram} RAM, ${p.cpu} CPU, ${p.storage} NVMe Storage, ${p.backups} Backups with Port and MySQL Database included.`,
  }));

  const intelPlans = VPS.intel.plans.map((p) => ({
    "@type": "Offer",
    name: `TBNODES Intel VPS ${p.name}`,
    price: p.price,
    priceCurrency: "INR",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    url: `${SITE.url}/vps/intel`,
    description: `${p.ram} RAM, ${p.cpu} CPU, ${p.storage} NVMe Storage on Intel Xeon Platinum 8269-CY in Delhi, India.`,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [...basicPlans, ...intelPlans].map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: offer,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
