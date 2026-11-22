import type { Metadata } from "next";
import ProfilePageShell, { PageCta } from "../components/profile-page-shell";
import { siteUrl } from "../site-config";

const title = "Freelance Web & SaaS Development Services | Harsh Kumar";
const description = "Hire Harsh Kumar for Next.js and React development, SaaS architecture, Node.js APIs, real-time applications, Python automation, AWS deployment, and technical leadership.";

export const metadata: Metadata = { title, description, alternates: { canonical: `${siteUrl}/services` }, openGraph: { title, description, url: `${siteUrl}/services`, type: "website", images: ["/og.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og.png"] } };

const services = [
  { number: "01", title: "Next.js & React Development", text: "High-performance websites, SaaS dashboards, customer portals, and responsive web applications built with Next.js, React, TypeScript, and accessible interface patterns.", stack: "Next.js · React · TypeScript · Tailwind CSS · SSR · ISR" },
  { number: "02", title: "SaaS Product Architecture", text: "Scalable multi-tenant SaaS products with reliable account models, subscription billing, permissions, admin dashboards, background jobs, and clean API boundaries.", stack: "System Design · Multi-tenancy · Stripe · PostgreSQL · Prisma" },
  { number: "03", title: "Node.js APIs & Backend Engineering", text: "Production-ready REST APIs, webhooks, authentication systems, optimized database queries, and backend services designed for speed, reliability, and growth.", stack: "Node.js · Express.js · PostgreSQL · MongoDB · Redis" },
  { number: "04", title: "Real-time Applications", text: "Live chat, notifications, collaborative interfaces, event-driven workflows, and real-time dashboards that stay responsive for concurrent global users.", stack: "Socket.IO · WebSockets · Redis · Events · React Native" },
  { number: "05", title: "Payments, FinTech & Automation", text: "Stripe, Razorpay, PayPal and Paystack integrations with subscriptions and webhook-driven workflows, plus Python automation that removes repetitive manual work.", stack: "Stripe · Razorpay · PayPal · Paystack · Python · Selenium · Puppeteer" },
  { number: "06", title: "AI & Workflow Automation", text: "Automated research, data extraction, background processing, AI-assisted product workflows, and operational systems that reduce repetitive manual work.", stack: "Python · BullMQ · Selenium · Puppeteer · BeautifulSoup" },
  { number: "07", title: "Cloud Delivery & Technical Leadership", text: "AWS deployment, Docker-based infrastructure, release planning, engineering mentorship, client communication, and ownership from discovery to production.", stack: "AWS EC2 · AWS ECS · AWS S3 · Docker · CI/CD · Team Leadership" },
];

const serviceSchema = { "@context": "https://schema.org", "@graph": services.map((service) => ({ "@type": "Service", "@id": `${siteUrl}/services#service-${service.number}`, name: service.title, description: service.text, provider: { "@id": `${siteUrl}/#person` }, areaServed: "Worldwide", serviceType: service.title })) };

export default function ServicesPage() {
  return <ProfilePageShell route="/services" label="Services" eyebrow="Services" title="Development services for products that need to perform." description={description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
    <div className="grid-3">{services.map((service) => <article className="card" key={service.number}><p className="eyebrow">{service.number}</p><h2 className="h3">{service.title}</h2><p>{service.text}</p><p className="muted small">{service.stack}</p></article>)}</div>
    <section className="section-sm"><h2>How we can work together</h2><div className="grid-3">
      <article className="card"><h3>Product development</h3><p>Build a new SaaS application, mobile app, customer platform or internal tool from the ground up.</p></article>
      <article className="card"><h3>Engineering leadership</h3><p>Architecture planning, code reviews, mentoring, sprint ownership and client communication.</p></article>
      <article className="card"><h3>System modernization</h3><p>Speed up slow APIs, modernize legacy frontends, add real-time features or move to the cloud.</p></article>
    </div></section>
    <p>Looking for project-based collaboration? <a className="link" href="/freelance-developer">Explore freelance development and the project process.</a></p>
    <PageCta title="Need a remote full stack developer?" text="Available for freelance projects, ongoing product development and remote roles." label="Discuss your project" />
  </ProfilePageShell>;
}
