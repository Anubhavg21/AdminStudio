export interface Project {
  slug: string;
  title: string;
  category: string;
  label?: string;
  problem: string;
  solution: string;
  techTags: string[];
  liveUrl: string;
  desktopImage: string;
  mobileImage: string;
}

export const projects: Project[] = [
  {
    slug: "archifit",
    title: "ArchiFit",
    category: "E-commerce Store",
    label: "Concept Project",
    problem: "An architectural hardware brand needed a modern online store.",
    solution:
      "We built a sleek e-commerce experience with product filtering, cart, and secure checkout.",
    techTags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    liveUrl: "https://ecommerce-rho-gold.vercel.app/",
    desktopImage: "/work/archifit-desktop.png",
    mobileImage: "/work/archifit-mobile.png",
  },
  {
    slug: "bmindful",
    title: "B_mindful",
    category: "Personal Brand & Booking",
    problem: "A psychologist needed a professional site with easy session booking.",
    solution:
      "A warm, trust-building website with an integrated booking system and blog.",
    techTags: ["Next.js", "React", "Tailwind CSS", "CMS"],
    liveUrl: "https://be-mindful-alpha.vercel.app/",
    desktopImage: "/work/bmindful-desktop.png",
    mobileImage: "/work/bmindful-mobile.png",
  },
  {
    slug: "ipas-hardware",
    title: "IPAS Hardware",
    category: "B2B Catalog & Trade Portal",
    problem: "A manufacturer needed a digital product catalogue for trade buyers.",
    solution:
      "A structured B2B portal with product categories, specs and dealer enquiry forms.",
    techTags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://ipa-shardware.vercel.app/",
    desktopImage: "/work/ipas-desktop.png",
    mobileImage: "/work/ipas-mobile.png",
  },
];
