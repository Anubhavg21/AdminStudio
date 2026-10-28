import {
  Globe,
  ShoppingCart,
  Database,
  Bot,
  Code2,
  Target,
  Search,
  Blocks,
  RefreshCw,
  Rocket,
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
    title: "Business Websites",
    benefit:
      "High-speed, conversion-focused digital storefronts that establish instant brand authority and turn inbound visitors into qualified leads.",
    icon: Globe,
    tag: "Core Offering",
  },
  {
    title: "E-commerce Stores",
    benefit:
      "Frictionless online shopping experiences engineered with fast product discovery, optimized checkout funnels, and Stripe/Razorpay integrations.",
    icon: ShoppingCart,
  },
  {
    title: "CRM & Sales Pipelines",
    benefit:
      "Automate lead capture, deal tracking, and automated client follow-ups with tailored CRM architectures (HubSpot, Zoho, or custom builds).",
    icon: Database,
    tag: "High Demand",
  },
  {
    title: "AI Automations & Agents",
    benefit:
      "Deploy custom AI agents, automated customer support assistants, document parsers, and n8n/Zapier automations to eliminate repetitive manual work.",
    icon: Bot,
    tag: "Trending",
  },
  {
    title: "Custom Web Apps & Dashboards",
    benefit:
      "Tailor-made internal software tools, customer portals, and real-time analytics dashboards built to scale without third-party subscription lock-in.",
    icon: Code2,
  },
  {
    title: "Meta Ads & Digital Marketing",
    benefit:
      "Full-funnel paid campaigns across Facebook, Instagram, and Google paired with high-converting landing pages to lower acquisition costs and drive ROAS.",
    icon: Target,
    tag: "Growth",
  },
  {
    title: "SEO & Search Visibility",
    benefit:
      "Technical on-page SEO, schema markup, and Core Web Vitals optimization to win high-intent search traffic and outrank competitors on Google.",
    icon: Search,
  },
  {
    title: "WordPress & Shopify Systems",
    benefit:
      "Custom-coded, speed-optimized themes and headless builds on your platform of choice—clean, secure, and effortless for your team to manage.",
    icon: Blocks,
  },
  {
    title: "Website Redesign & Upgrades",
    benefit:
      "Revitalize dated, slow websites with modern aesthetics, lightning-fast performance, and responsive UX that restores visitor confidence.",
    icon: RefreshCw,
  },
  {
    title: "SaaS MVP Development",
    benefit:
      "Ship your software product in 3–5 weeks with production-ready architecture, secure authentication, subscription billing, and modular APIs.",
    icon: Rocket,
    tag: "Startups",
  },
];
