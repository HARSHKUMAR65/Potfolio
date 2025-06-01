

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
    {
        company: "Petometer",
        roles: [
            {
                title: "Full Stack Developer",
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
                title: "Full Stack Developer",
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
                title: "Full Stack Developer",
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
];

const achievements = [
    "Improved website performance by optimizing SQL queries and enhancing UI responsiveness.",
    "Designed and implemented CRM solutions to streamline sales processes.",
    "Effectively handled client interactions, ensuring seamless project execution."
];

const Experience = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 text-white space-y-10">
            <div className="text-center">
                <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-10">
                Work Experience
            </h2>
            </div>


            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">{exp.company}</h3>
                        {exp.roles.map((role, i) => (
                            <div key={i} className="mb-6">
                                <div className="flex justify-between flex-wrap items-center mb-2">
                                    <h4 className="text-lg font-semibold">{role.title}</h4>
                                    <span className="text-sm text-gray-400">{role.duration}</span>
                                </div>
                                <p className="text-sm text-blue-400 italic mb-2">
                                    Tech Stack: {role.stack}
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 pl-2">
                                    {role.responsibilities.map((task, j) => (
                                        <li key={j}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Work Achievements</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 pl-2">
                    {achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
