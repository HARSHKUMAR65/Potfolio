import { FaCode, FaHandshake, FaNetworkWired, FaProjectDiagram, FaRocket, FaUsers } from 'react-icons/fa';

const competencies = [
  {
    title: "SaaS Architecture",
    icon: <FaProjectDiagram size={28} className="text-blue-500" />,
    description: "Designing scalable SaaS modules, multi-tenant applications, and production-ready platform architecture.",
    tags: ["SaaS", "Multi-tenant", "System Design"],
  },
  {
    title: "Technical Leadership",
    icon: <FaUsers size={28} className="text-green-500" />,
    description: "Leading a 4-person engineering team across planning, code reviews, mentoring, and delivery ownership.",
    tags: ["Team Lead", "Code Reviews", "Mentoring"],
  },
  {
    title: "Full Stack Development",
    icon: <FaCode size={28} className="text-fuchsia-400" />,
    description: "Building high-performance applications across Next.js, React, Node.js, APIs, databases, and cloud infrastructure.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    title: "Real-time Systems",
    icon: <FaNetworkWired size={28} className="text-cyan-400" />,
    description: "Architecting chat, notifications, WebSocket flows, and responsive systems for concurrent global users.",
    tags: ["Socket.io", "WebSockets", "Notifications"],
  },
  {
    title: "Client Relations",
    icon: <FaHandshake size={28} className="text-orange-400" />,
    description: "Managing Australian and European client accounts from requirement calls through deployment and support.",
    tags: ["Scoping", "Milestones", "Support"],
  },
  {
    title: "Performance Optimization",
    icon: <FaRocket size={28} className="text-accent-primary" />,
    description: "Optimizing APIs, PostgreSQL queries, SSR/ISR frontends, and background processing for production speed.",
    tags: ["PostgreSQL", "SSR/ISR", "BullMQ"],
  },
];

function Expert() {
  return (
    <section
      name="about"
      id="about"
      className="section-reveal w-full py-24 px-4 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            SaaS Architecture, System Design, Technical Leadership, Client Relations, Real-time Systems, Full Stack Development, API Architecture, Multi-tenant Applications, Background Job Processing, Performance Optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {competencies.map((item) => (
            <article key={item.title} className="glass-card depth-card rounded-lg p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/70 rounded-lg shadow-lg shadow-slate-900/5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-cyan-50 text-xs text-accent-primary border border-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expert;
