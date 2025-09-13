import { FaLaptopCode, FaMobileAlt, FaHandshake, FaServer, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

function Expert() {
  return (
    <div
      name="about"
      className="w-full py-20 px-4 text-gray-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold border-b-4 border-pink-600 inline-block mb-16 text-white">
          About Me
        </h2>

        {/* Grid: now 3 columns on xl, 2 on md */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16 text-left w-full">
          {/* Web Developer */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <FaLaptopCode size={32} className="text-blue-500" />
              <h3 className="text-2xl font-semibold">Web Developer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I craft fast, accessible, and pixel-perfect web apps with <span className="text-white font-semibold">React, Next.js, Tailwind</span>,
              and modern tooling. From landing pages to complex dashboards, I blend clean UI with robust engineering to ship reliably and iterate quickly.
            </p>
          </div>

          {/* Mobile App Developer */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <FaMobileAlt size={32} className="text-green-500" />
              <h3 className="text-2xl font-semibold">Mobile App Developer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I build smooth, cross-platform apps with <span className="text-white font-semibold">React Native</span>—feels-native UX, efficient state
              management, secure APIs, and optimized bundles for both Android & iOS. From MVP to production, performance is a first-class citizen.
            </p>
          </div>

          {/* Backend Engineer */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <FaServer size={32} className="text-yellow-400" />
              <h3 className="text-2xl font-semibold">Backend Engineer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I design reliable, scalable APIs and services using <span className="text-white font-semibold">Node.js, Express, Nest.js</span>.
              I care about architecture, auth, and observability—<span className="text-white font-semibold">JWT/OAuth2, RBAC, caching, queues</span>—and
              robust data layers with <span className="text-white font-semibold">MongoDB, PostgreSQL</span>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-black/30">REST & GraphQL</span>
              <span className="px-3 py-1 rounded-full bg-black/30">Prisma/Mongoose</span>
              <span className="px-3 py-1 rounded-full bg-black/30">Redis</span>
            </div>
          </div>

          {/* Databases & DevOps */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <FaDatabase size={32} className="text-cyan-400" />
              <h3 className="text-2xl font-semibold">Data & DevOps</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Schema design, indexing, backups, and migrations are part of my routine. I ship with
              <span className="text-white font-semibold"> Docker</span>, set up <span className="text-white font-semibold">CI/CD</span>, monitor with logs/metrics,
              and tune performance for real-world traffic.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-black/30">PostgreSQL/MongoDB</span>
              <span className="px-3 py-1 rounded-full bg-black/30">Docker</span>
              <span className="px-3 py-1 rounded-full bg-black/30">CI/CD</span>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <SiTensorflow size={32} className="text-orange-400" />
              <h3 className="text-2xl font-semibold">Machine Learning</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I build data-driven features—classification, recommendations, NLP pre-processing—with
              <span className="text-white font-semibold"> Python, scikit-learn, TensorFlow</span>. I focus on clean pipelines, evaluation, and shipping
              models behind stable APIs for real users.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-black/30">Pandas/NumPy</span>
              <span className="px-3 py-1 rounded-full bg-black/30">Feature Engg.</span>
              <span className="px-3 py-1 rounded-full bg-black/30">Model Serving</span>
            </div>
          </div>

          {/* Deep Learning / NLP / CV */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <FaBrain size={32} className="text-purple-400" />
              <h3 className="text-2xl font-semibold">Deep Learning</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              From fine-tuning transformers to image inference, I work with <span className="text-white font-semibold">PyTorch</span> and modern
              DL tooling to deliver practical solutions—text classification, embeddings, and lightweight CV models optimized for production.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-black/30">Transformers</span>
              <span className="px-3 py-1 rounded-full bg-black/30">PyTorch</span>
              <span className="px-3 py-1 rounded-full bg-black/30">ONNX/Optimization</span>
            </div>
          </div>
        </div>

        {/* Footer Description */}
        <div className="mt-16 max-w-3xl text-lg text-gray-400 leading-relaxed flex flex-col items-center gap-4 text-center">
          <FaHandshake size={40} className="text-red-500" />
          <p>
            I’m a builder at heart—combining product sense with solid engineering across frontend, backend, and ML.
            Whether you’re validating an MVP or scaling to thousands of users, I bring clarity, reliability, and momentum.
            Let’s turn ideas into software people love to use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expert;
