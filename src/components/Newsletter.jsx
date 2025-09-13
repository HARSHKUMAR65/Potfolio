import { FaCode, FaRocket, FaCloud, FaShieldAlt, FaCogs, FaBrain, FaMobileAlt } from "react-icons/fa";
import { MdStorage, MdApi, MdSpeed } from "react-icons/md";
import { AiOutlineBug } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

const skills = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-pink-500 text-xl mr-2" />,
    items: [
      "React.js, Next.js, React Native, Angular, TypeScript",
      "Redux Toolkit, React Query/SWR, Context API",
      "Tailwind CSS, MUI, Sass, Framer Motion",
      "SSR/SSG, SEO basics, form handling (React Hook Form/Zod)"
    ]
  },
  {
    title: "State Management & APIs",
    icon: <MdApi className="text-blue-400 text-xl mr-2" />,
    items: [
      "Redux Toolkit & RTK Query, Context API",
      "REST & GraphQL integration (Axios/Fetch), WebSockets/Socket.io",
      "Auth flows: JWT/OAuth2, RBAC, input validation (Zod/Joi)"
    ]
  },
  {
    title: "Backend Engineering",
    icon: <FaCogs className="text-indigo-400 text-xl mr-2" />,
    items: [
      "Node.js, Express, Nest.js (API design & microservices)",
      "Queues, caching, rate limiting, file uploads (S3)",
      "Payments & integrations (Stripe/Razorpay), email/SMS"
    ]
  },
  {
    title: "Databases & ORMs",
    icon: <MdStorage className="text-purple-400 text-xl mr-2" />,
    items: [
      "PostgreSQL, MongoDB, Redis",
      "Prisma & Mongoose, schema design, indexing",
      "Migrations, transactions, aggregation pipelines"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud className="text-cyan-400 text-xl mr-2" />,
    items: [
      "Docker, CI/CD (GitHub Actions), NGINX, PM2",
      "Deployments: Vercel, Netlify, Render, VPS",
      "AWS (S3/EC2 basics), Firebase (Auth/Firestore/FCM)"
    ]
  },
  {
    title: "Testing & Quality",
    icon: <AiOutlineBug className="text-yellow-400 text-xl mr-2" />,
    items: [
      "Jest, React Testing Library, Cypress/Playwright",
      "Postman/Insomnia, contract tests, mock servers",
      "Lighthouse audits, performance budgets"
    ]
  },
  {
    title: "Performance & Accessibility",
    icon: <MdSpeed className="text-emerald-400 text-xl mr-2" />,
    items: [
      "Code-splitting, lazy loading, bundle optimization",
      "Caching strategies, image optimization, CDN",
      "Accessibility (ARIA, keyboard nav, color contrast)"
    ]
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt className="text-green-400 text-xl mr-2" />,
    items: [
      "React Native, navigation, deep links",
      "Maps & real-time chat (Socket.io), push notifications",
      "App performance & profiling (Android/iOS)"
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <FaBrain className="text-purple-300 text-xl mr-2" />,
    items: [
      "Python, NumPy, Pandas, scikit-learn",
      "TensorFlow/PyTorch (basics), embeddings/NLP pre-processing",
      "Model serving with FastAPI/Flask, inference APIs"
    ]
  },
  {
    title: "Security & Best Practices",
    icon: <FaShieldAlt className="text-red-400 text-xl mr-2" />,
    items: [
      "Input validation & sanitization, OWASP top 10 awareness",
      "HTTPS, CORS, CSRF, content security policy",
      "Secrets management, env handling, audit logging"
    ]
  },
  {
    title: "Build, Deployment & Version Control",
    icon: <FaRocket className="text-green-400 text-xl mr-2" />,
    items: [
      "Vite, Webpack, Babel, npm/yarn/pnpm",
      "Git (GitHub/GitLab), trunk-based development & PR reviews",
      "Release versioning, changelogs, conventional commits"
    ]
  },
  {
    title: "Other Skills",
    icon: <GiSkills className="text-orange-400 text-xl mr-2" />,
    items: [
      "Data structures & CRUD patterns, API design principles",
      "3rd-party integrations (maps, payments, analytics)",
      "Agile/Scrum, clear documentation, client communication"
    ]
  }
];

const Newsletter = () => {
  return (
    <section className="py-12 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-4 text-white">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          A snapshot of the tools and practices I use to ship reliable, high-performance products across
          <span className="text-white font-semibold"> web</span>, <span className="text-white font-semibold">mobile</span>, and
          <span className="text-white font-semibold"> backend/ML</span>. (2+ years hands-on)
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {skills.map((section, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md shadow-md rounded-xl p-6 transform hover:scale-105 transition duration-300"
          >
            <div className="flex items-center justify-start mb-4">
              {section.icon}
              <h3 className="text-xl text-white font-semibold">{section.title}</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-300">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newsletter;
