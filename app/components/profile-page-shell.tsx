import type { ReactNode } from "react";
import { profile } from "../site-config";

export default function ProfilePageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <div className="profile-page-shell">
      <header className="profile-page-header section-wrap"><a href="/" className="brand" aria-label="Harsh Kumar portfolio"><span className="brand-mark">HK</span><span className="brand-copy">Harsh Kumar<small>Full Stack Engineer</small></span></a><nav aria-label="Profile navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/contact">Contact</a></nav><a href={`mailto:${profile.email}`} className="profile-header-cta">Let&apos;s talk ↗</a></header>
      <main className="profile-page-main section-wrap">
        <div className="profile-page-intro"><p className="section-kicker">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
        {children}
      </main>
      <footer className="profile-page-footer section-wrap"><a href="/">← Back to immersive portfolio</a><p>{profile.location} · Available remotely worldwide</p><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </div>
  );
}
