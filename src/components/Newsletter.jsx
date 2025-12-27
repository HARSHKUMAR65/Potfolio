import { FaCode, FaRocket, FaCloud, FaCogs, FaBrain, FaMobileAlt } from "react-icons/fa";
import { MdStorage, MdApi } from "react-icons/md";
import { AiOutlineBug } from "react-icons/ai";

const skills = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-accent-primary text-xl mr-2" />,
    items: [
      "React.js, Next.js, React Native, TypeScript",
      "Redux Toolkit, React Query, Zustand",
      "Tailwind CSS, Framer Motion, Shadcn UI",
      "SSR/SSG, Performance Optimization"
    ]
  },
  {
    title: "State Management & APIs",
    icon: <MdApi className="text-blue-400 text-xl mr-2" />,
    items: [
      "Redux Toolkit & RTK Query, Context API",
      "REST & GraphQL integration, WebSockets",
      "Auth flows: JWT/OAuth2, Zod Validation"
    ]
  },
  {
    title: "Backend Engineering",
    icon: <FaCogs className="text-purple-400 text-xl mr-2" />,
    items: [
      "Node.js, Express, Nest.js architecture",
      "Microservices, Caching (Redis), Queues",
      "Payment Gateways (Stripe/Razorpay)"
    ]
  },
  {
    title: "Databases & ORMs",
    icon: <MdStorage className="text-cyan-400 text-xl mr-2" />,
    items: [
      "PostgreSQL, MongoDB, Redis",
      "Prisma, Mongoose, TypeORM",
      "Complex Aggregations, Indexing"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud className="text-sky-400 text-xl mr-2" />,
    items: [
      "Docker, Kubernetes, CI/CD Pipelines",
      "AWS (EC2, S3, Lambda), Vercel, Railway",
      "Nginx, Linux Administration"
    ]
  },
  {
    title: "Testing & Quality",
    icon: <AiOutlineBug className="text-yellow-400 text-xl mr-2" />,
    items: [
      "Jest, React Testing Library, Playwright",
      "Postman/Insomnia, API Testing",
      "Code Quality: ESLint, Prettier, Husky"
    ]
  },
  // {
  //   title: "Performance & Accessibility",
  //   icon: <MdSpeed className="text-emerald-400 text-xl mr-2" />,
  //   items: [
  //     "Code-splitting, lazy loading, bundle optimization",
  //     "Caching strategies, image optimization, CDN",
  //     "Accessibility (ARIA, keyboard nav, color contrast)"
  //   ]
  // },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt className="text-green-400 text-xl mr-2" />,
    items: [
      "React Native CLI & Expo",
      "Native Modules, Push Notifications",
      "App Store & Play Store Deployment"
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <FaBrain className="text-orange-400 text-xl mr-2" />,
    items: [
      "Python, Pandas, NumPy, Scikit-learn",
      "TensorFlow/PyTorch basics",
      "LLM Integration (OpenAI/LangChain)"
    ]
  },
  // {
  //   title: "Security & Best Practices",
  //   icon: <FaShieldAlt className="text-red-400 text-xl mr-2" />,
  //   items: [
  //     "Input validation & sanitization, OWASP top 10 awareness",
  //     "HTTPS, CORS, CSRF, content security policy",
  //     "Secrets management, env handling, audit logging"
  //   ]
  // },
  {
    title: "Tools & Workflow",
    icon: <FaRocket className="text-pink-400 text-xl mr-2" />,
    items: [
      "Git, GitHub/GitLab, Trunk-based dev",
      "Jira, Trello, Linear",
      "Figma (Developer Handoff)"
    ]
  },
  // {
  //   title: "Other Skills",
  //   icon: <GiSkills className="text-orange-400 text-xl mr-2" />,
  //   items: [
  //     "Data structures & CRUD patterns, API design principles",
  //     "3rd-party integrations (maps, payments, analytics)",
  //     "Agile/Scrum, clear documentation, client communication"
  //   ]
  // }
];

const Newsletter = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          A deep dive into the technologies I use to build scalable and robust applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((section, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center justify-start mb-4 gap-3">
              <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-lg text-slate-900 font-bold">{section.title}</h3>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600">
                  <span className="text-accent-primary mr-2 mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newsletter;
