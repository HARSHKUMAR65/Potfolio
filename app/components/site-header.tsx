import Link from "next/link";
import { profile } from "../site-config";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#toolbox", label: "Toolbox" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" href="/">{profile.name}</Link>
        <nav className="nav" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <a className="nav-resume" href={profile.resume} download>Resume ↓</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}. Built with Next.js.</p>
        <nav className="footer-links" aria-label="Site pages">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/freelance-developer">Freelance</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
