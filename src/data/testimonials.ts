export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Founder, Studio Vistara",
    location: "Mumbai, India",
    quote:
      "Elevora transformed our digital presence completely. The site went live in two weeks and we started receiving high-ticket client inquiries within the very first month. The whole process was seamless and transparent.",
  },
  {
    name: "James O'Connor",
    role: "Managing Director, Apex Mechanical",
    location: "Manchester, UK",
    quote:
      "We were quoted £12,000 and 3 months by local London agencies. Elevora engineered a cleaner, faster web platform in three weeks at a fraction of the cost, with flawless time zone alignment.",
  },
  {
    name: "Sarah Mitchell",
    role: "Co-founder, Lumina Skincare",
    location: "Austin, Texas",
    quote:
      "Elevora rebuilt our Shopify storefront with custom conversion funnels and automated CRM tracking. Our mobile checkout conversion improved by 34% within 60 days. Truly a senior-level partner.",
  },
];
