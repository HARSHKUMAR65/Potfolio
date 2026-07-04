import { FaCloud, FaCode, FaCogs, FaDatabase, FaMobileAlt, FaRobot, FaRocket } from "react-icons/fa";
import { MdApi, MdPayments, MdStorage } from "react-icons/md";

const skills = [
  {
    title: "Languages & Web Core",
    icon: <FaCode className="text-accent-primary text-xl mr-2" />,
    items: [
      "JavaScript ES6+, TypeScript, Python, SQL",
      "HTML5, CSS3, responsive UI",
      "Performance-focused frontend architecture",
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: <FaMobileAlt className="text-green-400 text-xl mr-2" />,
    items: [
      "Next.js, React.js, React Native",
      "Tailwind CSS, Material UI",
      "Redux, React Query, SSR, ISR",
    ],
  },
  {
    title: "Backend & APIs",
    icon: <MdApi className="text-blue-400 text-xl mr-2" />,
    items: [
      "Node.js, Express.js, Flask",
      "REST APIs, Webhooks, Authentication",
      "API integrations and SaaS module delivery",
    ],
  },
  {
    title: "Databases & ORM",
    icon: <FaDatabase className="text-cyan-400 text-xl mr-2" />,
    items: [
      "PostgreSQL, MySQL, MongoDB",
      "Prisma ORM, Redis",
      "Query optimization and data modeling",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud className="text-sky-400 text-xl mr-2" />,
    items: [
      "Docker, AWS EC2, AWS S3, AWS ECS",
      "CI/CD, Vercel, Git, GitHub",
      "Deployment and post-launch support",
    ],
  },
  {
    title: "Real-time & Jobs",
    icon: <MdStorage className="text-purple-400 text-xl mr-2" />,
    items: [
      "BullMQ, Redis-backed job queues",
      "Socket.io, WebSockets",
      "Background job processing and notifications",
    ],
  },
  {
    title: "Payments",
    icon: <MdPayments className="text-yellow-500 text-xl mr-2" />,
    items: [
      "Stripe API integrations",
      "Subscriptions, webhooks, invoices",
      "Payment failure recovery workflows",
    ],
  },
  {
    title: "Automation",
    icon: <FaRobot className="text-orange-400 text-xl mr-2" />,
    items: [
      "Selenium, Puppeteer, BeautifulSoup",
      "Python data extraction scrapers",
      "Manual workflow automation",
    ],
  },
  {
    title: "Leadership Workflow",
    icon: <FaRocket className="text-pink-400 text-xl mr-2" />,
    items: [
      "Sprint planning and technical mentoring",
      "Code reviews and release quality",
      "Client scoping and milestone delivery",
    ],
  },
];

const Newsletter = () => {
  return (
    <section className="section-reveal py-24 px-4 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Strong expertise in Next.js, React, Node.js, PostgreSQL, Redis, BullMQ, AWS, Docker, Stripe, and Python automation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((section) => (
          <article
            key={section.title}
            className="glass-card depth-card p-6 rounded-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-start mb-4 gap-3">
              <div className="p-2 bg-white/60 rounded-lg shadow-lg shadow-slate-900/5 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-lg text-slate-950 font-bold">{section.title}</h3>
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start text-sm text-slate-600">
                  <span className="text-accent-primary mr-2 mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Newsletter;
