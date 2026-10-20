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
  metadataBase: new URL("https://anvikstudio.com"),
  title: "Anvik Studio — Web Development That Converts | India, US & UK",
  description:
    "One point of contact. Two expert developers. We build websites that turn visitors into customers. Serving businesses in India, the US and the UK.",
  keywords: [
    "web development agency",
    "Next.js developer",
    "e-commerce development",
    "website design India",
    "web developer UK",
    "web developer US",
    "Anvik Studio",
  ],
  authors: [{ name: "Anvik Studio" }],
  openGraph: {
    title: "Anvik Studio — Web Development That Converts",
    description:
      "One point of contact. Two expert developers. Websites that turn visitors into customers.",
    url: "https://anvikstudio.com", // TODO: Replace with real URL
    siteName: "Anvik Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/work/archifit-desktop.png",
        width: 1200,
        height: 630,
        alt: "Anvik Studio - Premium Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvik Studio — Web Development That Converts",
    description:
      "One point of contact. Two expert developers. Websites that turn visitors into customers.",
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
    name: "Anvik Studio",
    description:
      "Web development agency serving businesses in India, the US and the UK.",
    url: "https://anvikstudio.com", // TODO: Replace with real URL
    logo: "https://anvikstudio.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@anvikstudio.com",
      contactType: "customer service",
      areaServed: ["IN", "US", "GB"],
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
