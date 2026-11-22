import type { Metadata } from "next";
import ContactForm from "../components/contact-form";
import ProfilePageShell from "../components/profile-page-shell";
import { profile, siteUrl } from "../site-config";

const title = "Hire Harsh Kumar | Freelance & Remote Full Stack Developer";
const description = "Discuss your freelance website, SaaS, mobile app, API or automation project with Harsh Kumar, a full stack developer in Gurugram, India, working remotely worldwide.";

export const metadata: Metadata = { title, description, alternates: { canonical: `${siteUrl}/contact` }, openGraph: { title, description, url: `${siteUrl}/contact`, type: "website", images: ["/og.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og.png"] } };

const roles = ["Freelance Full Stack Developer", "Full Stack Developer", "Software Developer", "Backend Engineer", "Next.js / React Developer", "React Native Developer", "Node.js Developer", "SaaS Product Engineer"];

const contactSchema = { "@context": "https://schema.org", "@type": "ContactPage", "@id": `${siteUrl}/contact#page`, url: `${siteUrl}/contact`, name: title, description, about: { "@id": `${siteUrl}/#person` } };

export default function ContactPage() {
  return <ProfilePageShell route="/contact" label="Contact" eyebrow="Contact" title="Let's build something useful." description={description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c") }} />
    <div className="contact">
      <div className="contact-list">
        <a className="card" href={`mailto:${profile.email}`}><span className="muted small">Email</span><strong>{profile.email}</strong></a>
        <a className="card" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><span className="muted small">WhatsApp / Phone</span><strong>{profile.phone}</strong></a>
        <div className="card"><span className="muted small">Location</span><strong>{profile.location}</strong></div>
        <a className="card" href={profile.resume} download><span className="muted small">Resume</span><strong>Download PDF</strong></a>
      </div>
      <div className="card"><ContactForm /></div>
    </div>
    <section className="section-sm"><h2>Roles I&apos;m open to</h2><ul className="chips chips-lg">{roles.map((role) => <li key={role}>{role}</li>)}</ul></section>
  </ProfilePageShell>;
}
