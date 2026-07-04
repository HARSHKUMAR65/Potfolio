import { FaBrain, FaFilePdf, FaSearch, FaRocket } from "react-icons/fa";
import { MdCalculate, MdKeyboard } from "react-icons/md";

const projects = [
  {
    title: "Trend2SaaS",
    subtitle: "AI-powered Trend Analysis Platform",
    stack: "Next.js, Python, Redis, BullMQ",
    icon: <FaBrain className="text-4xl text-accent-primary" />,
    points: [
      "Built an AI-powered trend analysis tool that converts live trend signals into SaaS ideas with problem statements, solutions, target customers, monetization strategy, and why now insights.",
      "Engineered background job processing with Redis and BullMQ to handle asynchronous trend analysis workflows with 99.9% job reliability.",
      "Developed PDF export functionality, allowing users to generate structured SaaS idea reports in under 1 click.",
      "Designed a scalable full-stack architecture using Next.js and Python to support real-time trend processing and future AI workflow expansion.",
    ],
    highlights: [
      { label: "AI Workflow", icon: <FaRocket /> },
      { label: "PDF Export", icon: <FaFilePdf /> },
    ],
  },
  {
    title: "Claritools",
    subtitle: "Smart Calculator and Practical Guide Platform",
    stack: "Next.js, Modern UI, Responsive Design, Smart Search",
    icon: <MdCalculate className="text-5xl text-blue-500" />,
    points: [
      "Built a free public platform offering smart calculators and practical guides across finance, career, and technology categories.",
      "Developed a fully responsive Next.js interface with smart search, keyboard navigation, and clean UX across desktop and mobile devices.",
      "Improved content discovery through structured navigation and search-first UX, helping users access tools in fewer than 3 clicks.",
      "Delivered production-ready frontend architecture optimized for speed, accessibility, and SEO-friendly page structure.",
    ],
    highlights: [
      { label: "Smart Search", icon: <FaSearch /> },
      { label: "Keyboard UX", icon: <MdKeyboard /> },
    ],
  },
];

const Cards = () => {
  return (
    <section id="projects" className="section-reveal w-full px-4 py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl text-slate-950 font-bold">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 text-slate-800">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card tilt-card group block h-full"
            >
              <div className="glass-card depth-card relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-lg p-6 sm:p-8">
                <div className="tilt-inner relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-950">{project.title}</h3>
                      <p className="mt-2 text-base font-semibold text-accent-secondary">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-white/70 shadow-inner">
                      {project.icon}
                    </div>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.split(", ").map((tech) => (
                      <span key={tech} className="rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 border-t border-slate-200/70 pt-6">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                        <span className="mt-1 text-accent-primary">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    {project.highlights.map((highlight) => (
                      <span key={highlight.label} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15">
                        {highlight.icon}
                        {highlight.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
