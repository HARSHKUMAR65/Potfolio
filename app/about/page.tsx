import type { Metadata } from "next";
import ProfilePageShell, { PageCta } from "../components/profile-page-shell";
import { EducationList, ExperienceList, IndustryList, SkillGrid } from "../components/sections";
import { lastUpdated, profile, siteUrl } from "../site-config";

const title = "About Harsh Kumar | Full Stack Developer in Gurugram";
const description = "Meet Harsh Kumar, a full stack developer in Gurugram, India with 3+ years of experience in React, Next.js, React Native, Node.js, Python, PostgreSQL, real-time systems and AWS.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: { title, description, url: `${siteUrl}/about`, type: "profile", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

const profileSchema = { "@context": "https://schema.org", "@type": "ProfilePage", "@id": `${siteUrl}/about#profile`, url: `${siteUrl}/about`, name: title, dateCreated: "2026-08-23", dateModified: lastUpdated, mainEntity: { "@id": `${siteUrl}/#person` } };

export default function AboutPage() {
  return <ProfilePageShell route="/about" label="About" eyebrow="About" title="Hi, I'm Harsh Kumar." description={description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }} />
    <section className="prose">
      <p>{profile.summary}</p>
      <p>I&apos;m currently a Full Stack Engineer at TruxWorks, working remotely for a US client on a multi-tenant SaaS platform for contractors: dashboards, AI assistance, Twilio SMS workflows and a website builder. Before that I spent three and a half years at Brandeducer Digital Solutions in Gurugram, first as a Frontend Developer and then as a Full Stack Engineer leading a team of four across 10+ SaaS modules.</p>
      <p>What I care about most: software that stays fast and easy to change after launch, and keeping the people I build for in the loop.</p>
    </section>
    <section className="section-sm"><h2>Where I&apos;ve worked</h2><div className="prose"><IndustryList /></div></section>
    <section className="section-sm"><h2>Toolbox</h2><SkillGrid /></section>
    <section className="section-sm"><h2>Experience</h2><ExperienceList /></section>
    <section className="section-sm"><h2>Education &amp; certification</h2><EducationList /></section>
    <PageCta title="Looking for a full stack developer?" text="Let's talk about your product, team or engineering challenge." label="Contact Harsh" />
  </ProfilePageShell>;
}
