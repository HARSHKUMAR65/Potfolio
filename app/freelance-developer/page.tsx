import type { Metadata } from "next";
import ProfilePageShell, { PageCta } from "../components/profile-page-shell";
import { siteUrl } from "../site-config";

const title = "Freelance Full Stack Developer in India | Harsh Kumar";
const description = "Hire Harsh Kumar for freelance Next.js, React, Node.js and SaaS development. Based in Gurugram, India; available for remote projects worldwide.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: `${siteUrl}/freelance-developer` },
  openGraph: { title, description, url: `${siteUrl}/freelance-developer`, type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};
const offers = [
  { number: "01", title: "Next.js & React websites", text: "Business websites, customer portals and web applications with responsive layouts, accessible interfaces and content search engines can read.", stack: "Next.js · React · TypeScript" },
  { number: "02", title: "SaaS MVP development", text: "Turn an initial product idea into a focused first release. Define the essential features, then build accounts, permissions, dashboards and subscription workflows around them.", stack: "SaaS architecture · PostgreSQL · Stripe" },
  { number: "03", title: "Backend & API development", text: "Connect your product to reliable Node.js APIs, payment services and databases. Improve slow queries, integrate third-party services or introduce background jobs.", stack: "Node.js · Express · Redis · BullMQ" },
  { number: "04", title: "Automation & product improvements", text: "Reduce repetitive work with Python automation and connected workflows. Add real-time features, improve frontend performance, or extend an existing application.", stack: "Python · WebSockets · AWS" },
];
const questions = [
  { question: "Do you work with clients outside India?", answer: "Yes. I am based in Gurugram, India, and available for remote freelance collaborations worldwide. My professional experience includes working with Australian and European client accounts." },
  { question: "Can you work on an existing application?", answer: "Yes. Share the current stack, the problem you want to solve and any access requirements. We can start with a code and requirements review before agreeing on the changes." },
  { question: "What should I share before starting a project?", answer: "Send your business goal, required features, target timeline and any designs or existing code. I can then discuss scope, delivery milestones and the most suitable way to work together." },
  { question: "Do you offer ongoing development?", answer: "Yes. I am open to ongoing product development, feature delivery and technical collaboration. Availability, responsibilities and support arrangements are agreed before the engagement starts." },
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": `${siteUrl}/freelance-developer#page`, url: `${siteUrl}/freelance-developer`, name: title, description, about: { "@id": `${siteUrl}/#person` }, isPartOf: { "@id": `${siteUrl}/#website` } },
  ...offers.map(service => ({ "@type": "Service", "@id": `${siteUrl}/freelance-developer#service-${service.number}`, name: service.title, description: service.text, provider: { "@id": `${siteUrl}/#person` }, areaServed: "Worldwide", serviceType: "Freelance software development", url: `${siteUrl}/freelance-developer` })),
  { "@type": "FAQPage", mainEntity: questions.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
] };

export default function FreelancePage() {
  return <ProfilePageShell route="/freelance-developer" label="Freelance development" eyebrow="Freelance · Gurugram, India · Remote worldwide" title="Freelance full stack developer for your next idea." description={description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="prose"><h2>Work directly with your developer.</h2><p>I&apos;m Harsh Kumar, a Full Stack Engineer with 3.5 years of experience across SaaS, FinTech, iGaming, Web3 and AI-powered products. I help businesses plan, build and improve web and mobile products using Next.js, React, React Native, Node.js and Python.</p><p>Whether you need a new website, a SaaS MVP or help with an existing system, we start with the business problem and agree on a practical scope. You work directly with me through development, review and handover.</p><p><a className="link" href="/projects">See my projects</a> or <a className="link" href="/services">browse services</a>.</p></section>
    <section className="section-sm"><h2>What I can build for you</h2><div className="grid-2">{offers.map(service=><article className="card" key={service.number}><p className="eyebrow">{service.number}</p><h3>{service.title}</h3><p>{service.text}</p><p className="muted small">{service.stack}</p></article>)}</div></section>
    <section className="section-sm"><h2>A clear process, from scope to handover.</h2><div className="grid-3">
      <article className="card"><p className="eyebrow">01 · Discover</p><h3>Define the work</h3><p>Discuss your users, goals and existing systems. Agree on priorities, deliverables and milestones before development begins.</p></article>
      <article className="card"><p className="eyebrow">02 · Build</p><h3>Review real progress</h3><p>Work through the agreed scope with regular reviews, testing across devices and addressing feedback along the way.</p></article>
      <article className="card"><p className="eyebrow">03 · Launch</p><h3>Ship and support</h3><p>Deploy to production, hand over documentation and access, and agree on ongoing support if you need it.</p></article>
    </div></section>
    <section className="section-sm"><h2>Freelance project questions</h2><div className="faq">{questions.map((item)=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>
    <PageCta title="Tell me what you want to build." text="Share your idea, timeline and current setup." label="Discuss your freelance project" />
  </ProfilePageShell>;
}
