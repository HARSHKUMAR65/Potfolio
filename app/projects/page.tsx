import type { Metadata } from "next";
import ProfilePageShell, { PageCta } from "../components/profile-page-shell";
import { ProjectGrid } from "../components/sections";
import { projects, siteUrl } from "../site-config";

const title = "Work by Domain: iGaming, E-commerce, AI & SaaS | Harsh Kumar";
const description = "The kinds of products Harsh Kumar has built: iGaming and casino platforms, e-commerce, marketplaces, AI assistance, multi-tenant SaaS and CRM, FinTech payments, mobile apps and Web3.";

export const metadata: Metadata = { title, description, alternates: { canonical: `${siteUrl}/projects` }, openGraph: { title, description, url: `${siteUrl}/projects`, type: "website", images: ["/og.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og.png"] } };

const outcomes = [
  { title: "Faster APIs", text: "Reduced average API response time by ~35% by optimizing PostgreSQL queries and Prisma data access." },
  { title: "Reliable background jobs", text: "Reached 99.9% job reliability with Redis and BullMQ queues, retries and monitoring." },
  { title: "Automation", text: "Automated ~90% of manual research with 15+ Python tools built on Selenium, Puppeteer and BeautifulSoup." },
  { title: "Payments", text: "Stripe subscriptions and webhook-driven billing, plus Razorpay, PayPal and Paystack integrations." },
  { title: "Real-time features", text: "Live chat, notifications and live updates with WebSockets, Socket.IO, SSE and Postgres LISTEN/NOTIFY." },
  { title: "Multi-tenant SaaS", text: "Tenant-aware platforms for contractors and businesses, deployed on AWS, Docker and Vercel." },
];

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/projects#list`,
  name: "Work by Harsh Kumar, by domain",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: { "@type": "CreativeWork", name: `${project.name} development`, description: project.result ? `${project.description} Result: ${project.result}.` : project.description, keywords: project.stack.join(", "), creator: { "@id": `${siteUrl}/#person` } },
  })),
};

export default function ProjectsPage() {
  return <ProfilePageShell route="/projects" label="Projects" eyebrow="Projects" title="What I've built, by domain." description={description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c") }} />
    <p className="lead">Grouped by the kind of product rather than by project name.</p>
    <div className="section-sm"><ProjectGrid /></div>
    <section className="section-sm"><h2>Other production outcomes</h2><div className="grid-3">{outcomes.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <PageCta title="Want results like these?" text="Let's talk about your application, architecture or team." label="Start a conversation" />
  </ProfilePageShell>;
}
