

const experiences = [
    {
        company: "Brandeducer Digital Solutions",
        roles: [
            {
                title: "Full Stack Developer (Full Time)",
                duration: "May 2023 - Current",
                stack: "JavaScript, MySQL, WordPress",
                responsibilities: [
                    "Led the development of scalable web applications using JavaScript, MySQL, and WordPress.",
                    "Designed and maintained responsive and interactive websites using HTML5 and CSS.",
                    "Optimized WordPress sites for performance and usability.",
                    "Managed MySQL databases, ensuring efficient data handling and retrieval.",
                    "Developed and implemented Sales CRM software solutions for business process automation.",
                    "Created and managed user accounts for clients, ensuring secure and appropriate access rights.",
                    "Integrated real-time WebSocket communication for client interactions and dynamic data updates.",
                    "Participated in client calls to understand project requirements and provide technical support.",
                    "Worked with overseas clients (Australia, Europe), delivering high-quality solutions within tight deadlines."
                ]
            }
        ]
    },
];

const projectsAtWork = [
    {
        company: "Petometer",
        roles: [
            {
                title: "Frontend Developer",
                duration: "March 2025 - May 2025",
                stack: "React Native, React Query",
                responsibilities: [
                    "Developed a mobile app frontend with real-time data handling along with Firebase.",
                    "Integrated APIs using React Query.",
                    "Implemented core features and improved user experience through responsive design.",
                    "Integrated RazorPay Payment Gateway.",
                    "Used Google Maps APIs for distance tracking and optimal route finding."
                ]
            }
        ]
    },
    {
        company: "Autvob",
        roles: [
            {
                title: "Frontend Developer",
                duration: "November 2024 - February 2025",
                stack: "Next.js, Stripe",
                responsibilities: [
                    "Developed the frontend UI and integrated Stripe for subscription-based billing workflows.",
                    "Managed secure payment processing and implemented webhook handling for real-time updates.",
                    "Integrated WebSocket connections with a Laravel backend for live communication features.",
                    "Integrated APIs using React Query.",
                    "Deployed the application on a Hostinger VPS with full server configuration."
                ]
            }
        ]
    },
    {
        company: "Korikart",
        roles: [
            {
                title: "Frontend Developer",
                duration: "April 2024 - October 2024",
                stack: "React Native, Redux",
                responsibilities: [
                    "Built the complete mobile frontend using React Native and Redux for efficient state management.",
                    "Delivered a seamless and consistent user experience across Android and iOS platforms.",
                    "Integrated Razorpay for secure in-app payments.",
                    "Connected and managed RESTful API integrations."
                ]
            }
        ]
    },
    {
        company: "Property Milegi",
        roles: [
            {
                title: "Full Stack Developer",
                duration: "January 2024 - March 2024",
                stack: "Next.js, Prisma, MySQL",
                responsibilities: [
                    "Developed a responsive real estate listings platform with advanced filtering.",
                    "Implemented CRUD APIs for property management using RESTful architecture.",
                    "Defined and optimized the database schema for scalability and efficiency."
                ]
            }
        ]
    },
    {
        company: "WeConsultIndia",
        roles: [
            {
                title: "Full Stack Developer",
                duration: "August 2023 - December 2023",
                stack: "Next.js (TypeScript), Prisma, MySQL",
                responsibilities: [
                    "Led end-to-end frontend development using TypeScript and Next.js.",
                    "Collaborated on API integration and UI logic.",
                    "Implemented CRUD APIs and designed scalable database schema."
                ]
            }
        ]
    },
    {
        company: "Rexunite",
        roles: [
            {
                title: "Full Stack Developer",
                duration: "May 2023 - July 2023",
                stack: "React.js, Next.js",
                responsibilities: [
                    "Implemented a scalable frontend with server-side rendering using Next.js.",
                    "Deployed the app on Hostinger VPS with CI/CD pipelines."
                ]
            }
        ]
    }
]

const achievements = [
    "Improved website performance by optimizing SQL queries and enhancing UI responsiveness.",
    "Designed and implemented CRM solutions to streamline sales processes.",
    "Effectively handled client interactions, ensuring seamless project execution."
];
const projects = [
    {
        name: "Emplog",
        stack: "MySQL, Express.js, React.js, Node.js ",
        description: `Built a time tracking system with daily logs, admin dashboards, JWT-based auth, and role management — streamlining productivity tracking and reducing manual effort by ~30%.`,
        link: "https://emplog.com"
    },
    {
    name: "Apack Movers",
    stack: "Next.js, Tailwind CSS",
    description: `Developed a responsive and SEO-focused moving service website with dynamic routing and clean UI/UX using Tailwind CSS — optimized for performance, user experience, and search visibility.`,
    link: "https://apackmovers.com"
  }
];

const Experience = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-14 text-white space-y-16">
            {/* Section Title */}
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold border-b-4 border-pink-600 inline-block mb-10">
                    Work Experience
                </h2>
            </div>

            {/* Work Experience Cards */}
            <div className="grid grid-cols-1  gap-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">{exp.company}</h3>
                        {exp.roles.map((role, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-center flex-wrap mb-2">
                                    <h4 className="text-lg md:text-xl font-semibold text-white">{role.title}</h4>
                                    <span className="text-sm text-gray-400">{role.duration}</span>
                                </div>
                                <p className="text-sm text-pink-400 italic mb-2">
                                    Tech Stack: {role.stack}
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-md text-gray-300 pl-2 max-h-[180px] overflow-y-auto scrollbar-hide  no-scrollbar no-scrollbar::-webkit-scrollbar">
                                    {role.responsibilities.map((task, j) => (
                                        <li key={j}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Projects at Work */}
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold border-b-4 border-pink-600 inline-block mb-10">
                    Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsAtWork.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">{exp.company}</h3>
                        {exp.roles.map((role, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-center flex-wrap mb-2">
                                    <h4 className="text-lg md:text-xl font-semibold text-white">{role.title}</h4>
                                    <span className="text-sm text-gray-400">{role.duration}</span>
                                </div>
                                <p className="text-sm text-pink-400 italic mb-2">
                                    Tech Stack: {role.stack}
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-md text-gray-300 pl-2 max-h-[180px] overflow-y-auto scrollbar-hide no-scrollbar no-scrollbar::-webkit-scrollbar">
                                    {role.responsibilities.map((task, j) => (
                                        <li key={j}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Work Achievements */}
            <div>
                <h3 className="text-4xl md:text-5xl font-bold text-center border-b-4 border-green-500 inline-block mb-10">
                    Work Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((ach, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <p className="text-base text-gray-300">{ach}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Personal Projects */}
            <div>
                <h3 className="text-4xl md:text-5xl font-bold text-center border-b-4 border-pink-600 inline-block mb-10">
                    Personal Projects
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-1">
                                    {project.name}
                                </h4>
                                <p className="text-sm text-pink-400 font-medium mb-2">
                                    {project.stack}
                                </p>
                                <p className="text-base text-gray-300 mb-4">
                                    {project.description}
                                </p>
                            </div>
                            <div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-400 text-sm font-semibold hover:underline"
                                >
                                    View Project ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
