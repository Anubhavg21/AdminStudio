export interface PricingPlan {
  name: string;
  description: string;
  priceINR: string;
  priceUSD: string;
  popular?: boolean;
  deliverables: string[];
  timeline: string;
  revisions: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for personal brands, portfolios and simple business sites.",
    priceINR: "₹14,999",
    priceUSD: "$299",
    deliverables: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics integration",
      "1 round of revisions",
    ],
    timeline: "7–10 business days",
    revisions: "1 round included",
  },
  {
    name: "Business",
    description: "For growing businesses that need a site that actually brings in leads.",
    priceINR: "₹34,999",
    priceUSD: "$699",
    popular: true,
    deliverables: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "CMS integration",
      "Advanced SEO & speed optimisation",
      "Blog or news section",
      "WhatsApp & chat integration",
      "Social media links",
      "2 rounds of revisions",
    ],
    timeline: "14–21 business days",
    revisions: "2 rounds included",
  },
  {
    name: "Custom & E-commerce",
    description: "Full-featured stores, portals and custom web applications.",
    priceINR: "₹74,999",
    priceUSD: "$1,499",
    deliverables: [
      "Unlimited pages",
      "Custom design & development",
      "E-commerce / payment gateway",
      "User accounts & dashboards",
      "Admin panel",
      "Third-party API integrations",
      "Performance & security audit",
      "3 rounds of revisions",
    ],
    timeline: "21–45 business days",
    revisions: "3 rounds included",
  },
];

export const pricingNote =
  "Final price is confirmed after a free discovery call. Every project is different — we'll give you an honest, fixed quote with no surprises.";
