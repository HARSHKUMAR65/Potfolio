import type { Metadata } from "next";
import ProfilePageShell from "../components/profile-page-shell";
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
  return <ProfilePageShell eyebrow="FREELANCE / GURUGRAM, INDIA / REMOTE WORLDWIDE" title="Freelance full stack developer for your next idea." description={description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="profile-story"><h2>Work directly with your developer.</h2><p>I&apos;m Harsh Kumar, a Senior Full Stack Developer and Technical Lead with more than three years of experience. I help businesses plan, build and improve web products using Next.js, React, Node.js and Python.</p><p>Whether you need a new website, a SaaS MVP or help with an existing system, we start with the business problem and agree on a practical scope. You work directly with me through development, review and handover.</p><p><a className="inline-link" href="/projects">See my development projects</a> or <a className="inline-link" href="/about">read about my engineering experience</a>.</p></section>
    <section className="profile-detail-section"><h2>What I can build for you</h2><div className="services-directory">{offers.map(service=><article className="service-directory-card" key={service.number}><span>{service.number} /</span><h3>{service.title}</h3><p>{service.text}</p><small>{service.stack}</small></article>)}</div></section>
    <section className="profile-detail-section"><h2>A clear process, from scope to handover.</h2><div className="profile-columns engagement-process"><article><span>01 / DISCOVER</span><h3>Define the work</h3><p>Discuss your users, goals and existing systems. Agree on priorities, deliverables and milestones before development begins.</p></article><article><span>02 / BUILD</span><h3>Review real progress</h3><p>Work through the agreed scope with regular reviews. Test the experience across relevant devices and address feedback along the way.</p></article><article><span>03 / LAUNCH</span><h3>Make the handover clear</h3><p>Prepare the release, source code and setup notes. Discuss any ongoing development or support you need after delivery.</p></article></div></section>
    <section className="profile-detail-section"><h2>Freelance project questions</h2><div className="faq-list">{questions.map((item,index)=><details className="faq-item" key={item.question}><summary><span>0{index+1}</span><h3>{item.question}</h3><i>+</i></summary><p>{item.answer}</p></details>)}</div></section>
    <div className="profile-page-cta"><h2>Tell me what you want to build.</h2><p>Share your idea, timeline and current setup. Let&apos;s discuss a freelance collaboration that fits the work.</p><a className="button button-primary" href="/contact">Discuss your freelance project</a></div>
  </ProfilePageShell>;
}
