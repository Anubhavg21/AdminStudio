import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { CurrencyProvider } from "@/lib/currency-context";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevora.com"),
  title: "Elevora — Senior Digital Agency | Web, Automations & Growth",
  description:
    "Elevora is a senior digital agency engineering high-converting websites, web apps, CRM systems, and AI automations for ambitious businesses worldwide.",
  keywords: [
    "Elevora",
    "digital agency",
    "web development agency",
    "Next.js agency",
    "e-commerce development",
    "AI automations",
    "CRM setup",
    "custom web apps",
    "Meta ads agency",
    "SEO services",
  ],
  authors: [{ name: "Elevora" }],
  openGraph: {
    title: "Elevora — Senior Digital Agency | Web, Automations & Growth",
    description:
      "One dedicated team. Senior talent. Websites, systems, and growth tools that turn visitors into customers.",
    url: "https://elevora.com",
    siteName: "Elevora",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/work/archifit-desktop.png",
        width: 1200,
        height: 630,
        alt: "Elevora - Senior Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevora — Senior Digital Agency | Web, Automations & Growth",
    description:
      "One dedicated team. Senior talent. Websites, systems, and growth tools that turn visitors into customers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Elevora",
    description:
      "Senior digital agency engineering web platforms, CRM architectures, and AI automations for ambitious companies worldwide.",
    url: "https://elevora.com",
    logo: "https://elevora.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "anubhavgup21@gmail.com",
      contactType: "customer service",
      areaServed: ["US", "GB", "EU", "IN"],
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
