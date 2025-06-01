const skills = [
  {
    title: "Frontend Development",
    items: [
      "React.js, React Native, Next.js, Redux, Angular",
      "JavaScript (ES6+), TypeScript, HTML5, CSS3",
      "Tailwind CSS, Material UI (MUI), Sass",
      "Building complex UI components and optimizing performance"
    ]
  },
  {
    title: "State Management & APIs",
    items: [
      "Redux, Context API",
      "RESTful APIs integration using Axios and Fetch API"
    ]
  },
  {
    title: "Testing & Debugging",
    items: [
      "Jest, React Testing Library",
      "Debugging with React DevTools, Console, Sources tab, Lighthouse"
    ]
  },
  {
    title: "Build, Deployment & Version Control",
    items: [
      "Webpack, Babel, Vite, NPM, Yarn",
      "Git, GitHub, GitLab, Version Control Systems",
      "Deployment on Netlify, Vercel, GitHub Pages, VPS, C-Panel"
    ]
  },
  {
    title: "Backend & Database",
    items: [
      "Node.js (basic/backend scripting)",
      "Databases: SQL, MongoDB, PostgreSQL"
    ]
  },
  {
    title: "Other Skills",
    items: [
      "Data Structures and CRUD operations",
      "3rd-party dependency integration and debugging",
      "UI/UX best practices and performance optimization"
    ]
  }
];


const Newsletter = () => {
  return (
    <div className="py-12 px-4">
            <div className="text-center">
                <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-10 text-white">
                Skills & Expertise
            </h2>
            </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((section, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md shadow-md rounded-xl p-6 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl text-white font-semibold mb-4 text-center">{section.title}</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
