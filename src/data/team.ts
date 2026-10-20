export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  /** TODO: Replace with real photo path, e.g. "/team/vanshika.jpg" */
  photo?: string;
  initial: string;
  gradientFrom: string;
  gradientTo: string;
  isContact?: boolean;
  /** TODO: Replace with real WhatsApp number (with country code, no spaces) */
  whatsapp?: string;
  /** TODO: Replace with real email */
  email?: string;
}

export const team: TeamMember[] = [
  {
    name: "Vanshika",
    role: "Founder & Project Lead",
    bio: "Your single point of contact — from the first call to launch day and beyond.",
    skills: [
      "Client Discovery",
      "Project Management",
      "Proposals & Strategy",
      "Quality Assurance",
    ],
    initial: "V",
    gradientFrom: "#4F46E5",
    gradientTo: "#7C3AED",
    isContact: true,
    whatsapp: "919999999999", // TODO: Replace with real WhatsApp number
    email: "vanshika@anvikstudio.com", // TODO: Replace with real email
  },
  {
    name: "Anubhav",
    role: "Lead Full-Stack Developer",
    bio: "Turns designs into fast, polished interfaces that your customers love to use.",
    skills: ["Next.js", "React", "TypeScript", "Performance", "UI/UX"],
    initial: "A",
    gradientFrom: "#0EA5E9",
    gradientTo: "#4F46E5",
  },
  {
    name: "Ankit",
    role: "Backend & E-commerce Developer",
    bio: "Builds the engine behind your store — payments, databases and seamless integrations.",
    skills: [
      "Node.js",
      "MongoDB",
      "Shopify",
      "WooCommerce",
      "Stripe",
      "Razorpay",
    ],
    initial: "A",
    gradientFrom: "#16A34A",
    gradientTo: "#0EA5E9",
  },
];
