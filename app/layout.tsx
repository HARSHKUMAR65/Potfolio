import type { Metadata, Viewport } from "next";
import { education, lastUpdated, profile, seoKeywords, siteUrl, skillGroups } from "./site-config";
import "./globals.css";

const pageTitle = "Harsh Kumar | Full Stack Developer in India";
const pageDescription = "Harsh Kumar is a Full Stack Developer in Gurugram, India with 3+ years building SaaS, FinTech, iGaming and AI products in React, Next.js, Node.js, Python and AWS.";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Harsh Kumar | Full Stack Developer",
  title: { default: pageTitle, template: "%s" },
  description: pageDescription,
  keywords: seoKeywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  verification: googleVerification ? { google: googleVerification } : undefined,
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }], shortcut: "/favicon.svg", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: siteUrl,
    siteName: "Harsh Kumar | Full Stack Developer",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Harsh Kumar, Full Stack Developer in Gurugram, India" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: profile.name,
    title: pageTitle,
    description: pageDescription,
    images: ["/og.png"],
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram, Haryana, India",
    "geo.position": "28.4595;77.0266",
    ICBM: "28.4595, 77.0266",
    "profile:first_name": "Harsh",
    "profile:last_name": "Kumar",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f1ea",
  colorScheme: "light dark",
};

const knowsAbout = Array.from(new Set(skillGroups.flatMap((group) => group.items)));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Harsh Kumar",
      alternateName: "Harsh Kumar | Full Stack Developer",
      description: profile.description,
      inLanguage: "en-IN",
      dateModified: lastUpdated,
      publisher: { "@id": `${siteUrl}/#person` },
      about: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      givenName: "Harsh",
      familyName: "Kumar",
      alternateName: profile.alternateName,
      url: siteUrl,
      image: `${siteUrl}/og.png`,
      jobTitle: profile.title,
      description: profile.description,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      sameAs: [profile.github, profile.linkedin],
      knowsAbout,
      worksFor: { "@type": "Organization", name: profile.employer },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Full Stack Developer",
          description: "Full Stack Engineer at TruxWorks, building a multi-tenant SaaS platform for contractors for a US client.",
          occupationLocation: { "@type": "Country", name: "India" },
          skills: knowsAbout.join(", "),
        },
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "STAREX Institute of Education" },
        { "@type": "Organization", name: "Brandeducer Digital Solutions", description: "Frontend Developer (Jun 2023 to Jun 2024), then Full Stack Engineer leading a team of 4 (Jul 2024 to Oct 2026)" },
      ],
      hasCredential: education.map((item) => ({
        "@type": "EducationalOccupationalCredential",
        name: item.title,
        credentialCategory: item.title.startsWith("B.Tech") ? "degree" : "certificate",
        recognizedBy: { "@type": "Organization", name: item.title.startsWith("B.Tech") ? "STAREX Institute of Education" : "freeCodeCamp" },
      })),
      homeLocation: { "@type": "Place", name: profile.location },
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
      contactPoint: { "@type": "ContactPoint", contactType: "professional enquiries", email: profile.email, telephone: profile.phone, availableLanguage: ["English"] },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" type="text/plain" title="LLM-readable profile" href="/llms.txt" />
        <link rel="author" href="/humans.txt" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout, so this loads on every page */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
