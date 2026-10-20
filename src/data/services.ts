import {
  Globe,
  ShoppingCart,
  Code2,
  Blocks,
  Target,
  RefreshCw,
  Rocket,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  benefit: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Business Websites",
    benefit:
      "A professional online presence that builds trust and brings you leads around the clock.",
    icon: Globe,
  },
  {
    title: "E-commerce Stores",
    benefit:
      "Sell products online with secure payments, inventory management and a smooth checkout.",
    icon: ShoppingCart,
  },
  {
    title: "Custom Web Apps",
    benefit:
      "Tailored tools and dashboards that automate your workflows and save hours every week.",
    icon: Code2,
  },
  {
    title: "WordPress & Shopify",
    benefit:
      "Get set up on the platform you prefer — fully customised, not a generic template.",
    icon: Blocks,
  },
  {
    title: "Landing Pages for Ads",
    benefit:
      "High-converting pages designed to turn your ad clicks into paying customers.",
    icon: Target,
  },
  {
    title: "Website Redesign",
    benefit:
      "Modernise your existing site so it loads fast, looks great and actually converts.",
    icon: RefreshCw,
  },
  {
    title: "SaaS MVP",
    benefit:
      "Launch your software idea with a lean, functional first version — fast.",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    benefit:
      "Keep your site updated, secure and running smoothly without lifting a finger.",
    icon: Wrench,
  },
];
