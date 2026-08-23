import type { Metadata } from "next";
import ContactForm from "../components/contact-form";
import ProfilePageShell from "../components/profile-page-shell";
import { profile, siteUrl } from "../site-config";

const title = "Contact Harsh Kumar — Remote Full Stack Developer";
const description = "Contact Harsh Kumar for senior full stack developer, Next.js engineer, React developer, SaaS architecture, technical lead, and remote software engineering opportunities.";

export const metadata: Metadata = { title, description, alternates: { canonical: `${siteUrl}/contact` }, openGraph: { title, description, url: `${siteUrl}/contact`, type: "website", images: ["/og.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og.png"] } };

export default function ContactPage() {
  return <ProfilePageShell eyebrow="CONTACT / AVAILABLE WORLDWIDE" title="Let&apos;s build something that matters." description={description}>
    <div className="contact-directory"><aside className="contact-direct-card"><h2>Reach out directly.</h2><p>Available for remote full-stack development, senior engineering, product development, SaaS architecture, and technical leadership opportunities.</p><a href={`mailto:${profile.email}`}><span>EMAIL</span><strong>{profile.email}</strong></a><a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>{profile.phone}</strong></a><div><span>LOCATION</span><strong>{profile.location}</strong></div><div><span>WORKING WITH</span><strong>India · Europe · Australia · Remote worldwide</strong></div></aside><ContactForm /></div>
    <section className="profile-detail-section"><h2>Opportunities I&apos;m open to</h2><div className="opportunity-tags"><span>Senior Full Stack Developer</span><span>Technical Lead</span><span>Next.js Developer</span><span>React Developer</span><span>Node.js Developer</span><span>SaaS Product Engineer</span><span>Remote Software Engineer</span><span>AI Automation Engineer</span></div></section>
  </ProfilePageShell>;
}
