import SiteHeader, { SiteFooter } from "./components/site-header";
import ContactForm from "./components/contact-form";
import LocalTime from "./components/local-time";
import { EducationList, ExperienceList, IndustryList, ProjectGrid, SkillGrid, WritingList } from "./components/sections";
import { faqItems, lastUpdated, profile, quickFacts, siteUrl } from "./site-config";

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Harsh Kumar | Full Stack Developer",
      dateCreated: "2026-08-23",
      dateModified: lastUpdated,
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
      primaryImageOfPage: `${siteUrl}/og.png`,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

function Block({ id, title, note, children }: { id: string; title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="block" id={id} aria-labelledby={`${id}-title`}>
      <div className="block-head">
        <h2 id={`${id}-title`}>{title}</h2>
        {note && <p className="mono">{note}</p>}
      </div>
      <div className="block-body">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData).replace(/</g, "\\u003c") }} />
      <SiteHeader />

      <main id="main" className="container">
        <section className="intro" aria-label="Introduction">
          <p className="mono intro-meta">Harsh Kumar · Full Stack Developer · Gurugram, India</p>
          <h1>I build web and mobile products, <mark>from the database up.</mark></h1>
          <div className="intro-cols">
            <div className="intro-text">
              <p>{profile.summary}</p>
              <p>
                I&apos;m happiest owning a feature from start to finish: the schema, the API, the screen, the deploy, and the bug report that shows up two weeks later.
              </p>
              <p className="intro-links">
                <a className="btn" href="#contact">Get in touch</a>
                <a href={profile.resume} download>Resume (PDF)</a>
                <a href={profile.github} target="_blank" rel="noreferrer me">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer me">LinkedIn</a>
              </p>
            </div>
            <aside className="now" aria-label="Current status">
              <h2 className="mono">Right now</h2>
              <p>Full Stack Engineer at <strong>TruxWorks</strong>, building a multi-tenant SaaS platform for contractors for a US client.</p>
              <h2 className="mono">Open to</h2>
              <p>Remote full stack, frontend, backend and senior engineer roles, and <a href="/freelance-developer">freelance projects</a>.</p>
              <h2 className="mono">Based in</h2>
              <p>Gurugram, India (IST, UTC+5:30).<LocalTime /></p>
            </aside>
          </div>
        </section>

        <section className="block block-facts" aria-label="Quick facts">
          <dl className="facts">
            {quickFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          </dl>
        </section>

        <Block id="experience" title="Experience" note="Jun 2023 – now">
          <ExperienceList />
        </Block>

        <Block id="work" title="What I've built" note="By domain">
          <p className="block-lead">Grouped by the kind of product rather than by project name.</p>
          <ProjectGrid />
          <p className="aside-link"><a href="/projects">More on this work</a></p>
        </Block>

        <Block id="toolbox" title="Toolbox" note="Used in production">
          <p className="block-lead">Grouped roughly by where each tool sits in the stack.</p>
          <SkillGrid />
        </Block>

        <Block id="writing" title="Things I've written about" note="On LinkedIn">
          <WritingList />
          <p className="aside-link"><a href={profile.linkedinPosts} target="_blank" rel="noreferrer">All posts on LinkedIn</a></p>
        </Block>

        <Block id="background" title="Background">
          <div className="two-col">
            <div>
              <IndustryList />
              <p>Along the way I&apos;ve done my share of non-code work too: sprint planning, code reviews, mentoring juniors, and being the person the client calls.</p>
            </div>
            <EducationList />
          </div>
        </Block>

        <Block id="faq" title="Questions people ask me">
          <div className="qa">
            {faqItems.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
          </div>
        </Block>

        <Block id="contact" title="Say hello">
          <div className="two-col">
            <div>
              <p className="big-mail"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p>Or message me on WhatsApp at <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">{profile.phone}</a>.</p>
              <p>I&apos;m open to remote full-time roles and freelance work. A line or two about what you&apos;re building is plenty to start with.</p>
            </div>
            <ContactForm compact />
          </div>
        </Block>
      </main>

      <SiteFooter />
    </>
  );
}
