export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "A Starter site takes 7–10 business days. Business sites take 2–3 weeks. Larger custom projects or e-commerce stores usually take 3–6 weeks. We'll give you a clear timeline in our proposal.",
  },
  {
    question: "How does payment work?",
    answer:
      "We follow a milestone-based payment structure: 40% upfront to begin, 30% at the design preview stage, and 30% on launch. This way, you only pay as you see progress.",
  },
  {
    question: "What if I need changes after the site is live?",
    answer:
      "Every plan includes revision rounds during development. After launch, you get 30 days of free support for bug fixes and minor tweaks. Beyond that, we offer affordable maintenance packages.",
  },
  {
    question: "Do I own the source code and design?",
    answer:
      "Yes, 100%. Once the project is complete and paid for, all source code, design files and content belong to you. We can also sign an NDA on request.",
  },
  {
    question: "Do you help with hosting and domain setup?",
    answer:
      "We'll guide you through choosing the right hosting and domain, and we can set it all up for you. Many of our sites are deployed on Vercel or similar modern platforms for speed and reliability.",
  },
  {
    question: "I'm in the UK/US — can we still work together smoothly?",
    answer:
      "Absolutely. Our team works on IST, which overlaps well with UK mornings and US morning slots. Vanshika, your project lead, is available for calls and updates at times that suit your schedule.",
  },
  {
    question: "What if I already have a website that needs a redesign?",
    answer:
      "We will gladly evaluate your current website on a free discovery call. Based on your speed, UX, and conversion bottlenecks, we'll recommend whether a targeted redesign or a clean rebuild is the better investment.",
  },
];
