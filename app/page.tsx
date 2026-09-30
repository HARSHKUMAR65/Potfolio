import type { ReactNode } from "react";
import SiteHeader from "./components/site-header";
import ContactForm from "./components/contact-form";
import { faqItems, profile, siteUrl } from "./site-config";

const competencies = [
  { number: "01", title: "SaaS Architecture", description: "Scalable modules, multi-tenant products, and production-ready platform foundations.", tags: ["System design", "Multi-tenant", "Scale"] },
  { number: "02", title: "Technical Leadership", description: "Planning, code reviews, mentoring, and delivery ownership across a four-person team.", tags: ["Team lead", "Mentoring", "Delivery"] },
  { number: "03", title: "Full Stack Engineering", description: "Fast, accessible products across React, Next.js, Node.js, APIs, and databases.", tags: ["Next.js", "Node.js", "React"] },
  { number: "04", title: "Real-time Systems", description: "Responsive chat, notifications, WebSocket flows, and concurrent user experiences.", tags: ["Socket.io", "WebSockets", "Events"] },
  { number: "05", title: "Client Partnership", description: "Clear ownership from discovery and scoping through launch and long-term support.", tags: ["Scoping", "Milestones", "Support"] },
  { number: "06", title: "Performance", description: "Faster APIs, sharper queries, optimized rendering, and reliable background processing.", tags: ["PostgreSQL", "SSR / ISR", "BullMQ"] },
];

const projects = [
  {
    index: "01",
    name: "Trend2SaaS",
    type: "AI-powered trend analysis platform",
    description: "Transforms live trend signals into structured SaaS opportunities—complete with problem, audience, monetization, and why-now insight.",
    stack: ["Next.js", "Python", "Redis", "BullMQ"],
    outcomes: ["99.9% reliable asynchronous analysis workflow", "One-click structured PDF report generation", "Architecture built for real-time AI expansion"],
    signal: "AI workflow",
  },
  {
    index: "02",
    name: "Claritools",
    type: "Calculator and practical guide platform",
    description: "A search-first public product that helps users discover useful finance, career, and technology tools in fewer steps.",
    stack: ["Next.js", "Search UX", "Responsive UI", "SEO"],
    outcomes: ["Keyboard-friendly discovery experience", "Useful tools reachable in fewer than three clicks", "Fast, accessible, production-ready frontend"],
    signal: "Product UX",
  },
];

const stackGroups = [
  { label: "Languages", items: "JavaScript · TypeScript · Python · SQL" },
  { label: "Frontend", items: "Next.js · React · React Native · Tailwind" },
  { label: "Backend", items: "Node.js · Express · Flask · REST APIs" },
  { label: "Data", items: "PostgreSQL · MongoDB · Prisma · Redis" },
  { label: "Cloud", items: "AWS · Docker · CI/CD · Vercel" },
  { label: "Systems", items: "BullMQ · Socket.io · WebSockets" },
  { label: "Payments", items: "Stripe · Subscriptions · Webhooks" },
  { label: "Automation", items: "Selenium · Puppeteer · BeautifulSoup" },
];

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Harsh Kumar — Senior Full Stack Developer and Technical Lead",
      dateCreated: "2026-08-23",
      dateModified: "2026-09-29",
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14M13 6l6 6-6 6"} /></svg>;
}

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`tilt-card ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData).replace(/</g, "\\u003c") }} />
      <div className="scroll-progress" aria-hidden="true"><span /></div>


      <SiteHeader />

      <main id="main">
        <section className="cinematic-hero" id="top">
          <div className="hero-coordinates"><span>28.4595° N</span><span>77.0266° E</span></div>
          <div className="cinematic-copy">
            <div className="eyebrow"><i /> Freelance full stack developer · India</div>
            <h1 aria-label="Harsh Kumar — Senior Full Stack Developer, Next.js Engineer and Technical Lead">{["HARSH", "KUMAR"].map(word => <span className="hero-word" key={word}>{word.split("").map((letter, index) => <span className="hero-letter" key={index}>{letter}</span>)}</span>)}</h1>
            <p>Senior full stack developer in Gurugram, India. I help businesses build Next.js websites, SaaS products and automation tools. Available for freelance projects and remote collaborations worldwide.</p>
            <div className="cinematic-actions"><a className="button button-primary" href="/#contact">Start a project <Arrow /></a><a className="button button-ghost" href="#work">Selected work <Arrow /></a></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-caption"><span>CREATIVE ENGINEERING</span><span>001 — HK</span></div>
            <div className="orbital-machine"><div className="orbit-ring ring-a" /><div className="orbit-ring ring-b" /><div className="orbit-ring ring-c" /><div className="orbit-axis" /><div className="orbit-core"><span>&lt;/&gt;</span></div><span className="orbit-satellite" /></div>
            <div className="floating-label label-top"><i /> AVAILABLE FOR FREELANCE</div>
            <div className="floating-label label-bottom">BUILD. SHIP. SCALE. <span>↗</span></div>
            <div className="art-footer"><span>IDEAS → REALITY</span><span>Full stack / Full potential</span></div>
          </div>
          <div className="hero-index"><span>AVAILABLE WORLDWIDE</span><span>EST. 2023</span></div>
          <a className="cinematic-scroll" href="#manifesto"><span>SCROLL TO EXPLORE</span><i /></a>
        </section>

        <section className="manifesto-section" id="manifesto">
          <div className="manifesto-sticky">
            <div className="manifesto-copy">
              <p className="section-kicker">ENGINEERING × EXPERIENCE</p>
              <div className="story-scenes">
                <div className="story-scene"><span className="story-number" aria-hidden="true">01</span><h2>I don&apos;t just<br /><span>build websites.</span></h2><p>From architecture to animation, every detail is designed to move the product—and the business—forward.</p></div>
                <div className="story-scene"><span className="story-number" aria-hidden="true">02</span><h2>I build<br /><em>strong systems.</em></h2><p>Scalable SaaS platforms, real-time systems, and intelligent automation. Built for what comes next.</p></div>
                <div className="story-scene"><span className="story-number" aria-hidden="true">03</span><h2>I build<br /><em>impact.</em></h2><p>Product thinking, engineering depth, and delivery leadership. Ambitious ideas, brought into production.</p></div>
              </div>
              <div className="story-track" aria-hidden="true"><span /></div>
            </div>
            <div className="manifesto-metrics"><div><strong>10+</strong><span>PRODUCT MODULES</span></div><div><strong>99.9%</strong><span>JOB RELIABILITY</span></div><div><strong>45%</strong><span>FASTER EXPERIENCE</span></div></div>
          </div>
        </section>

        <div className="capability-marquee" aria-label="Engineering capabilities"><div><span>FULL STACK ENGINEERING</span><i>✳</i><span>IMMERSIVE WEB</span><i>✳</i><span>SAAS ARCHITECTURE</span><i>✳</i><span>AI AUTOMATION</span><i>✳</i><span>REAL-TIME SYSTEMS</span><i>✳</i><span>FULL STACK ENGINEERING</span><i>✳</i><span>IMMERSIVE WEB</span><i>✳</i><span>SAAS ARCHITECTURE</span><i>✳</i></div></div>

        <section className="section-wrap content-section" id="expertise">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">01 / EXPERTISE</p><h2>Strategy in the front.<br /><em>Strong systems</em> underneath.</h2>
            <p>I combine product thinking, engineering depth, and delivery leadership to move ambitious ideas into production.</p>
          </div>
          <div className="competency-grid">
            {competencies.map((item) => <TiltCard key={item.title} className="competency-card"><article data-reveal><div className="card-number">{item.number}</div><h3>{item.title}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="card-axis" aria-hidden="true" /></article></TiltCard>)}
          </div>
        </section>

        <section className="section-wrap freelance-banner" id="freelance">
          <div className="freelance-copy"><p className="section-kicker">AVAILABLE FOR FREELANCE / REMOTE WORLDWIDE</p><h2>Your idea.<br /><em>My next build.</em></h2><p>Work directly with a freelance full stack developer on your website, SaaS MVP, backend, or automation project.</p><a className="button button-primary" href="/freelance-developer">Explore freelance services</a></div>
          <div className="engagement-list">{[["01", "Launch a product", "Next.js websites, SaaS MVPs and custom web apps."], ["02", "Improve what exists", "Faster APIs, new features and dependable integrations."], ["03", "Keep moving forward", "Ongoing development and technical collaboration."]].map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </section>

        <section className="section-wrap content-section projects-section" id="work">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="section-kicker">02 / SELECTED WORK</p><h2>Built to solve.<br /><em>Designed to scale.</em></h2></div>
            <p>Two focused products combining dependable architecture with simple, useful user experiences.</p>
          </div>
          <div className="project-list" aria-label="Selected projects">
            {projects.map((project) => <TiltCard className="project-card" key={project.name}><article data-reveal>
              <div className="project-head"><span className="project-index">{project.index}</span><span className="project-signal"><i /> {project.signal}</span></div>
              <div className={`project-visual visual-${project.index}`} aria-label={`${project.name} interface concept`}>
                <span className="concept-label">INTERFACE CONCEPT / {project.index}</span>
                <div className="browser-concept"><div className="concept-top"><span>● ● ●</span><span>{project.name.toLowerCase()}</span><span>↗</span></div>
                  {project.index === "01" ? <div className="trend-concept"><small>YOUR NEXT BIG IDEA</small><h4>Find the signal.<br />Build what&apos;s next.</h4><div className="concept-chart">{[25,45,35,62,48,72,65,90].map((v,i)=><i key={i} style={{height:`${v}%`}} />)}</div><div className="concept-tags"><span>AI signals</span><span>SaaS opportunities ↗</span></div></div> : <div className="tools-concept"><small>LESS GUESSWORK. MORE CLARITY.</small><h4>Everyday tools.<br />Clearer decisions.</h4><div className="concept-search">Find your next tool <span>⌕</span></div><div className="concept-tools"><span>↗<b>Finance</b></span><span>✳<b>Career</b></span><span>⌘<b>Technology</b></span></div></div>}
                </div>
              </div>
              <div className="project-body">
                <div className="project-main"><p>{project.type}</p><h3>{project.name}</h3><div className="tag-row stack-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
                <p className="project-description">{project.description}</p><ul>{project.outcomes.map((outcome) => <li key={outcome}><span>↗</span>{outcome}</li>)}</ul>
              </div>
            </article></TiltCard>)}
          </div>
        </section>

        <section className="section-wrap content-section experience-section" id="experience">
          <div className="experience-intro" data-reveal>
            <p className="section-kicker">03 / EXPERIENCE</p><h2>Leading from<br /><em>idea to impact.</em></h2>
            <p>Hands-on engineering leadership with ownership across product architecture, team delivery, and global client relationships.</p>
            <div className="availability-card"><i /><span>Freelance projects, senior engineering<br />and technical lead roles</span></div>
          </div>
          <div className="timeline" data-reveal>
            <div className="timeline-rail"><i /></div>
            <article className="timeline-card">
              <div className="timeline-meta"><span>MAY 2023 — PRESENT</span><span>GURGAON · INDIA · REMOTE</span></div>
              <p className="company">Brandeducer Digital Solutions</p><h3>Full Stack Developer<br />&amp; Team Lead</h3>
              <p className="timeline-summary">Leading full-stack delivery across SaaS, CRM, real-time systems, automation tools, and high-performance web applications.</p>
              <div className="impact-grid"><div><strong>40%</strong><span>Faster client sales response</span></div><div><strong>35%</strong><span>Lower average API response time</span></div><div><strong>45%</strong><span>Improved key page load speed</span></div><div><strong>90%</strong><span>Manual research automated</span></div></div>
              <ul className="experience-points"><li>Led a four-person engineering team across 10+ production SaaS modules.</li><li>Managed 5+ Australian and European client accounts end-to-end.</li><li>Built multi-tenant job systems, enterprise CRM, subscriptions, and real-time messaging.</li><li>Owned code reviews, sprint planning, technical mentoring, and release quality.</li></ul>
              <div className="experience-stack">React · Next.js · Node.js · PostgreSQL · MongoDB · Redis · AWS</div>
            </article>
          </div>
        </section>

        <section className="section-wrap content-section stack-section" id="stack">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="section-kicker">04 / TOOLKIT</p><h2>A versatile stack.<br /><em>One clear standard.</em></h2></div>
            <p>The tools change. The goal stays the same: reliable systems, clean delivery, and a product people enjoy using.</p>
          </div>
          <div className="stack-grid">{stackGroups.map((group, index) => <article key={group.label} className="stack-card" data-reveal><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{group.label}</h3><p>{group.items}</p></div></article>)}</div>
          <div className="credentials-row" data-reveal><div><span>EDUCATION</span><strong>B.Tech · Computer Science</strong><small>STAREX Institute of Education · 2019—2023</small></div><div><span>CERTIFICATION</span><strong>Responsive Web Design</strong><small>freeCodeCamp</small></div></div>
        </section>

        <section className="section-wrap content-section faq-section" id="faq">
          <div className="section-heading split-heading" data-reveal><div><p className="section-kicker">05 / COMMON QUESTIONS</p><h2>Useful answers.<br /><em>No guesswork.</em></h2></div><p>Everything you need to know before hiring a senior full stack developer, Next.js engineer, or technical lead.</p></div>
          <div className="faq-list">{faqItems.map((item, index) => <details key={item.question} className="faq-item" data-reveal><summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.question}</h3><i>+</i></summary><p>{item.answer}</p></details>)}</div>
          <nav className="profile-directory" aria-label="More about Harsh Kumar" data-reveal><a href="/about"><span>01</span><strong>Complete professional profile</strong><i>↗</i></a><a href="/services"><span>02</span><strong>Development services</strong><i>↗</i></a><a href="/projects"><span>03</span><strong>Projects and case studies</strong><i>↗</i></a><a href="/contact"><span>04</span><strong>Contact and availability</strong><i>↗</i></a></nav>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-frame" data-reveal>
            <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
            <div className="contact-content">
              <p className="section-kicker">06 / LET&apos;S BUILD</p><h2>Have a complex idea?<br /><em>Let&apos;s make it clear.</em></h2>
              <p>Available for freelance development, ongoing product support, and remote Senior Full Stack Engineer or Technical Lead opportunities.</p>
              <div className="contact-actions"><a className="button button-primary" href="mailto:harshkumar672001@gmail.com">Email me <Arrow /></a><a className="button button-ghost" href="https://wa.me/918800288159" target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a></div>
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="home-contact-form"><ContactForm compact /></div>
          </div>
        </section>
      </main>

      <div className="footer-wordmark" aria-hidden="true"><span>LET’S BUILD</span><i>↗</i></div>
      <footer className="footer section-wrap">
        <div><span className="brand-mark">HK</span><p>Senior Full Stack Engineer<br />Technical Lead</p></div><p>Gurgaon, Haryana, India · Open to remote</p>
        <div className="social-links"><a href="https://github.com/HARSHKUMAR65" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/harsh-kumar-1849b61b8/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div>
        <nav className="footer-page-links" aria-label="Portfolio pages"><a href="/about">About</a><a href="/services">Services</a><a href="/freelance-developer">Freelance</a><a href="/projects">Projects</a><a href="/contact">Contact</a><a href="/sitemap.xml">Sitemap</a></nav>
      </footer>
      <a className="quick-contact" href="mailto:harshkumar672001@gmail.com" aria-label="Email Harsh Kumar"><span /><b>Let&apos;s talk</b></a>
    </div>
  );
}
