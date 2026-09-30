import type { ReactNode } from "react";
import { profile, siteUrl } from "../site-config";

export default function ProfilePageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  const route = eyebrow.startsWith("FREELANCE") ? "/freelance-developer" : eyebrow.startsWith("ABOUT") ? "/about" : eyebrow.startsWith("SERVICES") ? "/services" : eyebrow.startsWith("PROJECTS") ? "/projects" : "/contact";
  const label = route === "/freelance-developer" ? "Freelance development" : route.slice(1).replace(/^./, char => char.toUpperCase());
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: label, item: siteUrl + route }] };
  return (
    <div className="profile-page-shell">
      <header className="profile-page-header section-wrap"><a href="/" className="brand" aria-label="Harsh Kumar portfolio"><span className="brand-mark">HK</span><span className="brand-copy">Harsh Kumar<small>Full Stack Engineer</small></span></a><nav aria-label="Profile navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/freelance-developer">Freelance</a><a href="/projects">Projects</a><a href="/contact">Contact</a></nav><a href={`mailto:${profile.email}`} className="profile-header-cta">Let&apos;s talk ↗</a></header>
      <main className="profile-page-main section-wrap">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
        <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
        <div className="profile-page-intro"><p className="section-kicker">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
        {children}
      </main>
      <footer className="profile-page-footer section-wrap"><a href="/">← Back to immersive portfolio</a><p>{profile.location} · Available remotely worldwide</p><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </div>
  );
}
