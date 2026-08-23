import type { Metadata } from "next";
import ProfilePageShell from "../components/profile-page-shell";
import { profile, siteUrl } from "../site-config";

const title = "About Harsh Kumar — Senior Full Stack Developer in Gurugram";
const description = "Meet Harsh Kumar, a senior full stack developer and technical lead in Gurugram, India, with 3+ years of experience in React, Next.js, Node.js, SaaS, AWS, and engineering leadership.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: { title, description, url: `${siteUrl}/about`, type: "profile", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

const profileSchema = { "@context": "https://schema.org", "@type": "ProfilePage", "@id": `${siteUrl}/about#profile`, url: `${siteUrl}/about`, name: title, dateCreated: "2026-08-23", dateModified: "2026-08-23", mainEntity: { "@id": `${siteUrl}/#person` } };

export default function AboutPage() {
  return <ProfilePageShell eyebrow="ABOUT / SENIOR FULL STACK DEVELOPER" title="Engineering ambitious ideas into dependable products." description={description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }} />
    <section className="profile-editorial-grid"><article className="profile-story"><h2>Hi, I&apos;m Harsh Kumar.</h2><p>I am a Senior Full Stack Developer and Technical Lead based in Gurugram, Haryana, India. Since 2023, I have helped businesses turn complex requirements into production-ready SaaS platforms, customer relationship management systems, real-time applications, and automation workflows.</p><p>My work combines frontend engineering with React and Next.js, backend development with Node.js and Python, data architecture with PostgreSQL and Redis, and deployment on AWS. I focus on building systems that are practical, maintainable, and fast enough for real business growth.</p><p>At {profile.employer}, I lead a four-person engineering team and work directly with Australian and European clients through product discovery, scoping, development, deployment, and post-launch support.</p></article><aside className="profile-facts"><h3>At a glance</h3><div><span>Based in</span><strong>Gurugram, India</strong></div><div><span>Experience</span><strong>3+ years</strong></div><div><span>Production modules</span><strong>10+</strong></div><div><span>International accounts</span><strong>5+</strong></div><div><span>Engineering team</span><strong>4 developers</strong></div><div><span>Availability</span><strong>Remote worldwide</strong></div></aside></section>
    <section className="profile-detail-section"><h2>Professional experience</h2><article className="profile-feature-card"><p className="section-kicker">MAY 2023 — PRESENT</p><h3>Full Stack Developer &amp; Team Lead</h3><p>{profile.employer} · Gurugram, Haryana, India</p><ul><li>Led a four-person cross-functional engineering team across more than ten production SaaS modules.</li><li>Managed five-plus Australian and European client accounts from requirements through deployment.</li><li>Built real-time chat, notifications, enterprise CRM workflows, and subscription platforms.</li><li>Improved page load speed by 45%, reduced API response time by 35%, and achieved 99.9% background-job reliability.</li><li>Automated 90% of manual research workflows using Python, Selenium, Puppeteer, and BeautifulSoup.</li></ul></article></section>
    <section className="profile-detail-section"><h2>Education and credentials</h2><div className="profile-columns"><article><h3>Bachelor of Technology · Computer Science</h3><p>STAREX Institute of Education · 2019–2023</p></article><article><h3>Responsive Web Design Certification</h3><p>freeCodeCamp</p></article></div></section>
    <div className="profile-page-cta"><h2>Looking for a senior full stack developer?</h2><p>Let&apos;s discuss your product, team, or engineering challenge.</p><a className="button button-primary" href="/contact">Contact Harsh Kumar ↗</a></div>
  </ProfilePageShell>;
}
