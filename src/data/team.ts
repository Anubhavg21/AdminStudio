export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photo?: string;
  initial: string;
  gradientFrom: string;
  gradientTo: string;
  accentGlow: string;
  isContact?: boolean;
  phone?: string;
  whatsapp?: string;
  email?: string;
  statusBadge: string;
}

export const team: TeamMember[] = [
  {
    name: "Vanshika",
    role: "Project Lead & Performance Marketer",
    bio: "Your direct point of contact — leading client discovery, high-converting Meta & Google ad campaigns, SEO growth, and seamless project delivery.",
    skills: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & PPC Funnels",
      "SEO & Organic Traffic Growth",
      "Client Discovery & Scoping",
      "Agile Project Management",
    ],
    initial: "V",
    gradientFrom: "#4F46E5",
    gradientTo: "#7C3AED",
    accentGlow: "rgba(79, 70, 229, 0.15)",
    isContact: true,
    phone: "+91 85720 30864",
    whatsapp: "918572030864",
    email: "vanshika@anvikstudio.com",
    statusBadge: "Available for Calls & Ad Strategy",
  },
  {
    name: "Anubhav",
    role: "Lead Full-Stack Engineer",
    bio: "Engineers high-performance web applications, interactive UI experiences, and scalable Next.js architectures.",
    skills: [
      "Next.js App Router",
      "React & TypeScript",
      "Modern Tailwind & UI Motion",
      "High-Performance Architecture",
      "API Design & State Management",
    ],
    initial: "A",
    gradientFrom: "#0284C7",
    gradientTo: "#4F46E5",
    accentGlow: "rgba(2, 132, 199, 0.12)",
    statusBadge: "Full-Stack & UI Lead",
  },
  {
    name: "Ankit",
    role: "AI Automations & Systems Architect",
    bio: "Builds intelligent AI workflows, automated business tools, robust backend pipelines, and custom API integrations.",
    skills: [
      "AI Automations & LLM Agents",
      "n8n / Make / Zapier Workflows",
      "Node.js & MongoDB",
      "E-commerce (Shopify/WooCommerce)",
      "Payment Gateways & APIs",
    ],
    initial: "A",
    gradientFrom: "#059669",
    gradientTo: "#0284C7",
    accentGlow: "rgba(5, 150, 105, 0.12)",
    statusBadge: "AI & Backend Lead",
  },
];
