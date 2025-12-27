import { FaBriefcase, FaLaptopHouse, FaTrophy, FaProjectDiagram } from 'react-icons/fa';

const corporateExperience = [
    {
        company: "Brandeducer Digital Solutions",
        role: "Full Stack Developer",
        duration: "May 2023 - Present",
        type: "Full Time",
        stack: "JavaScript, MySQL, WordPress, PHP",
        description: "Leading the development of scalable web applications and CRM solutions. I manage the full lifecycle from database design to frontend implementation, ensuring high performance and client satisfaction.",
        points: [
            "Architected and maintained responsive websites using HTML5, CSS3, and JavaScript.",
            "Optimized WordPress performance, reducing load times by 40%.",
            "Developed custom Sales CRM software, automating 30% of manual business processes.",
            "Implemented real-time features using WebSockets for dynamic client data updates."
        ]
    },
];

const freelanceExperience = [
    {
        project: "Petometer",
        role: "Frontend Developer",
        duration: "March 2025 - May 2025",
        stack: "React Native, React Query, Firebase",
        description: "Mobile app frontend ensuring real-time data synchronization and smooth user experience.",
        points: [
            "Integrated Google Maps API for route finding.",
            "Implemented Razorpay Payment Gateway for secure transactions."
        ]
    },
    {
        project: "Autvob",
        role: "Frontend Developer",
        duration: "Nov 2024 - Feb 2025",
        stack: "Next.js, Stripe, WebSockets",
        description: "Subscription-based platform with real-time communication features.",
        points: [
            "Integrated Stripe for recurring billing and webhook handling.",
            "Built live communication features using WebSockets and Laravel backend."
        ]
    },
    {
        project: "Korikart",
        role: "React Native Developer",
        duration: "April 2024 - Oct 2024",
        stack: "React Native, Redux",
        description: "E-commerce mobile application for a major retail brand.",
        points: [
            "Built complete mobile frontend with Redux state management.",
            "Delivered consistent UX across iOS and Android platforms."
        ]
    },
    {
        project: "Property Milegi",
        role: "Full Stack Developer",
        duration: "Jan 2024 - Mar 2024",
        stack: "Next.js, Prisma, MySQL",
        description: "Real estate listing platform with advanced filtering.",
        points: [
            "Implemented RESTful CRUD APIs for property management.",
            "Designed scalable database schema for high-volume data."
        ]
    }
];

const achievements = [
    "Improved website performance by optimizing SQL queries and enhancing UI responsiveness.",
    "Designed and implemented CRM solutions to streamline sales processes.",
    "Effectively handled client interactions, ensuring seamless project execution."
];

const personalProjects = [
    {
        name: "Emplog",
        stack: "MERN Stack",
        description: `Built a time tracking system with daily logs, admin dashboards, JWT-based auth, and role management — streamlining productivity tracking and reducing manual effort by ~30%.`,
        link: "https://emplog.com"
    },
    {
        name: "Apack Movers",
        stack: "Next.js, Tailwind",
        description: `Developed a responsive and SEO-focused moving service website with dynamic routing and clean UI/UX using Tailwind CSS — optimized for performance and search visibility.`,
        link: "https://apackmovers.com"
    }
];

const Experience = () => {
    return (
        <div id="projects" className="max-w-6xl mx-auto px-4 py-20 text-slate-900 scroll-mt-20">

            {/* Corporate Experience */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                    <FaBriefcase className="text-3xl text-accent-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
                </div>

                <div className="space-y-8">
                    {corporateExperience.map((exp, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl border-l-4 border-accent-primary relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-slate-400">
                                <FaBriefcase size={100} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                                        <p className="text-accent-secondary font-medium">{exp.role}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-sm text-slate-500">{exp.duration}</span>
                                        <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs mt-1">{exp.type}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-4 max-w-3xl">{exp.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {exp.stack.split(', ').map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-full border border-accent-primary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className="text-accent-primary mt-1">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <div className="flex items-center gap-4 mb-10">
                    <FaTrophy className="text-3xl text-yellow-400" />
                    <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((ach, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl border-t-2 border-yellow-200">
                            <p className="text-sm text-slate-700 leading-relaxed">{ach}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Experience;
