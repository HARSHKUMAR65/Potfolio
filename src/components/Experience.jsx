import { FaBriefcase, FaCertificate, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const corporateExperience = [
  {
    company: "Brandeducer Digital Solutions",
    role: "Full Stack Developer & Team Lead",
    duration: "May 2023 - Present",
    location: "Gurgaon, Haryana, India",
    type: "Full Time",
    stack: "React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Redis, AWS",
    description: "Leading full-stack delivery across SaaS platforms, real-time systems, CRM products, automation tools, and high-performance web applications.",
    points: [
      "Led a 4-person cross-functional engineering team across 10+ production SaaS modules, improving delivery ownership, sprint execution, and release quality.",
      "Managed 5+ Australian and European client accounts end-to-end, including requirement calls, scoping, milestone delivery, deployment, and post-launch support.",
      "Architected real-time chat and notification systems using Socket.io across Next.js web apps and React Native mobile apps, supporting global concurrent users.",
      "Built an enterprise CRM with real-time lead tracking and analytics dashboards, reducing client sales response time by 40%.",
      "Engineered a multi-tenant background job platform using Redis and BullMQ, achieving 99.9% job reliability under high-load production usage.",
      "Integrated Stripe API across 3 SaaS platforms for multi-currency subscription billing, webhook handling, invoice workflows, and payment failure recovery.",
      "Optimized PostgreSQL queries using Prisma ORM, reducing average API response time by 35% across high-traffic endpoints.",
      "Built responsive Next.js frontends using SSR and ISR optimization, improving page load speed by 45% on key client platforms.",
      "Developed 15+ Python data extraction scrapers using Selenium, Puppeteer, and BeautifulSoup, automating 90% of manual research workflows for global clients.",
      "Spearheaded weekly code reviews, sprint planning, and technical mentoring for junior developers, improving code quality and team delivery consistency.",
      "Delivered full-stack features across React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Redis, and AWS for 10+ live business-critical modules.",
      "Coordinated directly with clients across 2+ international regions to clarify requirements, manage delivery expectations, and resolve post-deployment issues.",
    ],
  },
];

const achievements = [
  "Led a 4-person engineering team across 10+ production SaaS modules.",
  "Managed 5+ Australian and European client accounts end-to-end.",
  "Delivered measurable improvements across API response time, page load speed, sales response time, and automation workflows.",
];

const education = {
  school: "STAREX Institute of Education",
  degree: "Bachelor of Technology, Computer Science",
  duration: "2019 - 2023",
};

const certifications = [
  "freeCodeCamp - Responsive Web Design Certification",
];

const Experience = () => {
  return (
    <section id="experience" className="section-reveal max-w-7xl mx-auto px-4 py-20 text-slate-900 scroll-mt-20">
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="glass-card rounded-lg p-3 text-accent-primary">
            <FaBriefcase className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {corporateExperience.map((exp) => (
            <article key={exp.company} className="glass-card depth-card p-8 rounded-lg border-l-4 border-accent-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-slate-400">
                <FaBriefcase size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{exp.company}</h3>
                    <p className="text-accent-secondary font-medium">{exp.role}</p>
                    <p className="text-sm text-slate-500 mt-1">{exp.location}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="block text-sm text-slate-500">{exp.duration}</span>
                    <span className="inline-block px-3 py-1 bg-white/70 rounded-full text-xs mt-1 border border-slate-200">{exp.type}</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 max-w-4xl">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.stack.split(', ').map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-full border border-accent-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="grid lg:grid-cols-2 gap-3">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent-primary mt-1">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="glass-card rounded-lg p-3 text-yellow-400">
            <FaTrophy className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950">Achievements</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <article key={achievement} className="glass-card depth-card p-6 rounded-lg border-t-2 border-yellow-200">
              <p className="text-sm text-slate-700 leading-relaxed">{achievement}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <article className="glass-card depth-card rounded-lg p-7">
          <div className="mb-5 flex items-center gap-4">
            <div className="rounded-lg bg-accent-primary/10 p-3 text-accent-primary">
              <FaGraduationCap size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-950">Education</h2>
          </div>
          <h3 className="text-xl font-bold text-slate-950">{education.school}</h3>
          <p className="mt-2 text-slate-600">{education.degree}</p>
          <p className="mt-1 text-sm text-slate-500">{education.duration}</p>
        </article>

        <article className="glass-card depth-card rounded-lg p-7">
          <div className="mb-5 flex items-center gap-4">
            <div className="rounded-lg bg-blue-500/10 p-3 text-blue-500">
              <FaCertificate size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-950">Certifications</h2>
          </div>
          <ul className="space-y-3">
            {certifications.map((certification) => (
              <li key={certification} className="flex items-start gap-2 text-slate-600">
                <span className="text-accent-primary mt-1">▹</span>
                {certification}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
