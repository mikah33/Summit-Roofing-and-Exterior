import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ExitIntentPopup, StickyCTA } from "@/components/sticky-cta";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Roofing, Siding & Decks in ${site.address.city}, ${site.address.state}`,
    template: `%s | ${site.name}`,
  },
  description: `Premium roof replacement, roof repair, free inspections, storm damage restoration, insurance claim assistance, siding, and custom decks across the ${site.address.city} metro. Licensed, insured, lifetime workmanship warranty. Call ${site.phone}.`,
  keywords: [
    "roofing contractor",
    "roof replacement",
    "roof repair",
    "free roof inspection",
    "storm damage",
    "hail damage",
    "insurance claims",
    "siding installation",
    "deck builder",
    `roofing ${site.address.city}`,
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Roofing Built to Last`,
    description: `Premium roofing, siding & decks for the ${site.address.city} metro. Free inspections, insurance claim help, lifetime workmanship warranty.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Premium residential roof installed by Summit Roofing & Exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Roofing Built to Last`,
    description: `Premium roofing, siding & decks. Free inspections. Call ${site.phone}.`,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  image: `${site.url}/logos/horizontal-color.svg`,
  logo: `${site.url}/logos/icon-color.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: site.serviceAreas.map((city) => ({
    "@type": "City",
    name: `${city}, CO`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(site.stats.fiveStarReviews),
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Remodeling Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
