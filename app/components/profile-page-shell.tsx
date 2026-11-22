import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader, { SiteFooter } from "./site-header";
import { siteUrl } from "../site-config";

export default function ProfilePageShell({ route, label, eyebrow, title, description, children }: {
  route: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: label, item: siteUrl + route },
    ],
  };
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="container page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
        <div className="page-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
        </div>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

export function PageCta({ title, text, href = "/contact", label }: { title: string; text: string; href?: string; label: string }) {
  return (
    <section className="cta">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <a className="btn btn-primary" href={href}>{label}</a>
    </section>
  );
}
