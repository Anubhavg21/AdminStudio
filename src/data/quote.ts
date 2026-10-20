export interface QuoteOption {
  label: string;
  value: string;
}

export interface QuoteQuestion {
  id: string;
  question: string;
  options: QuoteOption[];
}

export const quoteQuestions: QuoteQuestion[] = [
  {
    id: "type",
    question: "What type of solution do you need?",
    options: [
      { label: "Business / Portfolio Website", value: "business" },
      { label: "E-commerce Store", value: "ecommerce" },
      { label: "Custom CRM & Sales Pipeline", value: "crm" },
      { label: "AI Automation Tool & Agent", value: "ai" },
      { label: "Custom Web App / SaaS MVP", value: "webapp" },
      { label: "WordPress / Shopify System", value: "cms" },
      { label: "High-Converting Landing Page", value: "landing" },
    ],
  },
  {
    id: "pages",
    question: "What is the expected scope / scale?",
    options: [
      { label: "1–5 pages / Lean setup", value: "small" },
      { label: "6–10 pages / Multi-channel", value: "medium" },
      { label: "11–20 pages / Enterprise", value: "large" },
      { label: "Complex System / Unlimited", value: "xlarge" },
    ],
  },
  {
    id: "features",
    question: "Which integrations & features do you need?",
    options: [
      { label: "Contact Form & WhatsApp Chat", value: "contact" },
      { label: "CRM Lead Pipeline Sync", value: "crm_integration" },
      { label: "AI Automation / Bot Workflow", value: "ai_bot" },
      { label: "Online Payments & Invoicing", value: "payments" },
      { label: "User Accounts & Authentication", value: "auth" },
      { label: "Automated Booking & Appointments", value: "booking" },
      { label: "Admin Analytics Dashboard", value: "admin" },
      { label: "SEO & Core Web Vitals Boost", value: "seo" },
    ],
  },
];

/** Price ranges in INR and USD based on selections */
export interface PriceRange {
  minINR: number;
  maxINR: number;
  minUSD: number;
  maxUSD: number;
}

export function calculateEstimate(
  type: string,
  pages: string,
  features: string[]
): PriceRange {
  // Base prices by type
  const basePrices: Record<string, PriceRange> = {
    business: { minINR: 14999, maxINR: 29999, minUSD: 299, maxUSD: 599 },
    ecommerce: { minINR: 49999, maxINR: 99999, minUSD: 999, maxUSD: 1999 },
    crm: { minINR: 34999, maxINR: 79999, minUSD: 699, maxUSD: 1599 },
    ai: { minINR: 29999, maxINR: 69999, minUSD: 599, maxUSD: 1399 },
    landing: { minINR: 9999, maxINR: 19999, minUSD: 199, maxUSD: 399 },
    webapp: { minINR: 74999, maxINR: 149999, minUSD: 1499, maxUSD: 2999 },
    cms: { minINR: 19999, maxINR: 39999, minUSD: 399, maxUSD: 799 },
  };

  // Page multipliers
  const pageMultipliers: Record<string, number> = {
    small: 1,
    medium: 1.3,
    large: 1.6,
    xlarge: 2,
  };

  // Feature add-ons
  const featureAdds: Record<string, PriceRange> = {
    contact: { minINR: 0, maxINR: 2000, minUSD: 0, maxUSD: 40 },
    crm_integration: { minINR: 8000, maxINR: 15000, minUSD: 160, maxUSD: 300 },
    ai_bot: { minINR: 10000, maxINR: 20000, minUSD: 200, maxUSD: 400 },
    payments: { minINR: 5000, maxINR: 10000, minUSD: 100, maxUSD: 200 },
    auth: { minINR: 8000, maxINR: 15000, minUSD: 160, maxUSD: 300 },
    booking: { minINR: 5000, maxINR: 10000, minUSD: 100, maxUSD: 200 },
    admin: { minINR: 10000, maxINR: 20000, minUSD: 200, maxUSD: 400 },
    seo: { minINR: 4000, maxINR: 8000, minUSD: 80, maxUSD: 160 },
  };

  const base = basePrices[type] || basePrices.business;
  const multiplier = pageMultipliers[pages] || 1;

  let result: PriceRange = {
    minINR: Math.round(base.minINR * multiplier),
    maxINR: Math.round(base.maxINR * multiplier),
    minUSD: Math.round(base.minUSD * multiplier),
    maxUSD: Math.round(base.maxUSD * multiplier),
  };

  for (const feat of features) {
    const add = featureAdds[feat];
    if (add) {
      result = {
        minINR: result.minINR + add.minINR,
        maxINR: result.maxINR + add.maxINR,
        minUSD: result.minUSD + add.minUSD,
        maxUSD: result.maxUSD + add.maxUSD,
      };
    }
  }

  return result;
}
