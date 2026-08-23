import type { Metadata, Viewport } from "next";
import { profile, seoKeywords, siteUrl } from "./site-config";
import "./globals.css";

const pageTitle = "Harsh Kumar | Senior Full Stack Developer, Next.js & React Engineer";
const pageDescription = "Hire Harsh Kumar, a Senior Full Stack Developer and Technical Lead in Gurugram, India. Expert in Next.js, React, Node.js, SaaS platforms, AWS, real-time systems, and AI automation. Available remotely worldwide.";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Harsh Kumar | Full Stack Developer",
  title: { default: pageTitle, template: "%s | Harsh Kumar" },
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
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: siteUrl,
    siteName: "Harsh Kumar | Full Stack Developer",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Harsh Kumar — Senior Full Stack Engineer and Technical Lead" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og.png"],
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram, Haryana, India",
    "geo.position": "28.4595;77.0266",
    ICBM: "28.4595, 77.0266",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060713",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Harsh Kumar | Senior Full Stack Developer",
      description: profile.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      alternateName: profile.alternateName,
      url: siteUrl,
      jobTitle: profile.title,
      description: profile.description,
      email: profile.email,
      telephone: profile.phone,
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: [...profile.skills],
      worksFor: { "@type": "Organization", name: profile.employer },
      alumniOf: { "@type": "CollegeOrUniversity", name: "STAREX Institute of Education" },
      homeLocation: { "@type": "Place", name: profile.location },
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
      hasOccupation: { "@type": "Occupation", name: "Senior Full Stack Developer", occupationLocation: { "@type": "City", name: "Gurugram" } },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
