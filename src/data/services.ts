import {
  Globe,
  ShoppingCart,
  Code2,
  Blocks,
  Target,
  RefreshCw,
  Rocket,
  Wrench,
  Database,
  Bot,
  Cpu,
  Gauge,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  benefit: string;
  icon: LucideIcon;
  tag?: string;
}

export const services: Service[] = [
  {
    title: "CRM & Sales Pipelines",
    benefit:
      "Automate lead capture, customer tracking, and team follow-ups with tailored CRM dashboards (HubSpot, Zoho, or custom builds).",
    icon: Database,
    tag: "High Demand",
  },
  {
    title: "AI Automations & Agents",
    benefit:
      "Deploy intelligent AI assistants, automated customer support, document processors, and n8n/Zapier workflows to save 20+ hours weekly.",
    icon: Bot,
    tag: "Trending",
  },
  {
    title: "Business Websites",
    benefit:
      "A fast, high-converting digital storefront that builds authority and turns incoming traffic into qualified inquiries.",
    icon: Globe,
  },
  {
    title: "E-commerce Stores",
    benefit:
      "High-converting shopping experiences with seamless checkout, inventory tracking, Stripe/Razorpay, and abandoned cart recovery.",
    icon: ShoppingCart,
  },
  {
    title: "Custom Web Apps & Dashboards",
    benefit:
      "Tailor-made software tools and internal portals that streamline complex business processes without subscription bloat.",
    icon: Code2,
  },
  {
    title: "WordPress & Shopify Systems",
    benefit:
      "Fully customized, speed-optimized implementations on your preferred platform — never a generic, clunky template.",
    icon: Blocks,
  },
  {
    title: "Meta Ads & Digital Marketing",
    benefit:
      "Full-funnel ad campaigns across Facebook, Instagram & Google Ads paired with high-converting landing pages to lower CAC and maximize ROAS.",
    icon: Target,
    tag: "Growth",
  },
  {
    title: "SEO & Search Visibility",
    benefit:
      "Technical on-page SEO, schema markup, and keyword optimization to earn organic search traffic and outrank competitors on Google.",
    icon: Gauge,
  },
  {
    title: "Website Redesign & Upgrades",
    benefit:
      "Revamp outdated websites with modern design, faster load times, and mobile-first UX that restores visitor trust.",
    icon: RefreshCw,
  },
  {
    title: "SaaS MVP Development",
    benefit:
      "Ship your software idea in weeks with a lean, scalable production build ready for paying users and early investors.",
    icon: Rocket,
  },
  {
    title: "Cloud APIs & Integrations",
    benefit:
      "Connect your disparate tools, ERPs, accounting systems, and payment gateways into one unified, synchronized ecosystem.",
    icon: Cpu,
  },
  {
    title: "Speed & Core Web Vitals",
    benefit:
      "Eliminate slow loading and technical debt with code-level optimizations that boost Google search rankings.",
    icon: Gauge,
  },
  {
    title: "Ongoing Maintenance & Support",
    benefit:
      "Proactive security updates, uptime monitoring, bug fixes, and continuous improvements without needing an in-house hire.",
    icon: Wrench,
  },
];
