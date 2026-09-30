"use client";
import { useEffect, useState } from "react";
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14M13 6l6 6-6 6"} /></svg>;
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const nav = document.querySelector<HTMLElement>(".nav-links");
    const button = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const links = nav?.querySelectorAll<HTMLAnchorElement>("a");
    links?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); button?.focus(); }
      if (event.key === "Tab" && links?.length) {
        const first = links[0], last = button;
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

return (<header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Harsh Kumar home">
          <span className="brand-mark">HK</span><span className="brand-copy">Harsh Kumar<small>Full Stack Engineer</small></span>
        </a>
        <nav id="primary-navigation" className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="/services" onClick={closeMenu}>Services</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#stack" onClick={closeMenu}>Stack</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <Arrow /></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
      </header>);
}
