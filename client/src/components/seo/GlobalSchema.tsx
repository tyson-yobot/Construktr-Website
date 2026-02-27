import JsonLd from "./JsonLd";

const ecosystemData = {
  organization: {
    name: "Construktr",
    url: "https://construktr.ai",
    sameAs: [
      "https://automateai.bot",
      "https://inspectone.ai"
    ],
    logo: "/brand/construktr-logo.png"
  }
};

export default function GlobalSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ecosystemData.organization.name,
    url: ecosystemData.organization.url,
    logo: `${ecosystemData.organization.url}${ecosystemData.organization.logo}`,
    sameAs: ecosystemData.organization.sameAs,
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CONSTRUKTR",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
    description: "AI-powered contractor app automating estimates, scheduling, and payments for field service professionals.",
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareApplicationSchema} />
    </>
  );
}
