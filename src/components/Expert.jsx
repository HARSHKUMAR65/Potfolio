import { FaLaptopCode, FaMobileAlt, FaHandshake, FaServer, FaDatabase, FaBrain, FaDocker, FaAws } from 'react-icons/fa';
import { SiTensorflow, SiKubernetes, SiGraphql } from 'react-icons/si';

function Expert() {
  return (
    <div
      name="about"
      id="about"
      className="w-full py-24 px-4 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I combine deep technical knowledge with a product-first mindset to build comprehensive software solutions.
          </p>
        </div>

        {/* Grid: now 3 columns on xl, 2 on md */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {/* Web Developer */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <FaLaptopCode size={28} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Frontend Ops</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Crafting pixel-perfect, accessible, and performant web interfaces. I specialize in the React ecosystem.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-xs text-blue-700 border border-blue-100">React.js</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-xs text-blue-700 border border-blue-100">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-xs text-blue-700 border border-blue-100">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-xs text-blue-700 border border-blue-100">TypeScript</span>
            </div>
          </div>

          {/* Mobile App Developer */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                <FaMobileAlt size={28} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mobile Dev</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Building cross-platform mobile applications that feel native. Seamless performance on both iOS and Android.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-green-50 text-xs text-green-700 border border-green-100">React Native</span>
              <span className="px-3 py-1 rounded-full bg-green-50 text-xs text-green-700 border border-green-100">Expo</span>
              <span className="px-3 py-1 rounded-full bg-green-50 text-xs text-green-700 border border-green-100">Redux</span>
            </div>
          </div>

          {/* Backend Engineer */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-fuchsia-500/10 rounded-lg group-hover:bg-fuchsia-500/20 transition-colors">
                <FaServer size={28} className="text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Backend Systems</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Designing scalable APIs and microservices. I ensure data integrity, security, and high availability.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-fuchsia-50 text-xs text-fuchsia-700 border border-fuchsia-100">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-fuchsia-50 text-xs text-fuchsia-700 border border-fuchsia-100">Express/Nest</span>
              <span className="px-3 py-1 rounded-full bg-fuchsia-50 text-xs text-fuchsia-700 border border-fuchsia-100">GraphQL</span>
              <span className="px-3 py-1 rounded-full bg-fuchsia-50 text-xs text-fuchsia-700 border border-fuchsia-100">PostgreSQL</span>
            </div>
          </div>

          {/* Databases & DevOps */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <FaDocker size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">DevOps & Cloud</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Automating deployments and managing cloud infrastructure. CI/CD pipelines and containerization expert.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-xs text-cyan-700 border border-cyan-100">Docker</span>
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-xs text-cyan-700 border border-cyan-100">AWS</span>
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-xs text-cyan-700 border border-cyan-100">CI/CD</span>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                <SiTensorflow size={28} className="text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">AI / ML</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Integrating intelligence into applications using Python and modern ML libraries for data-driven features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-xs text-orange-700 border border-orange-100">Python</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-xs text-orange-700 border border-orange-100">TensorFlow</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-xs text-orange-700 border border-orange-100">Pandas</span>
            </div>
          </div>

          {/* Freelance */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group ring-1 ring-accent-primary/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent-primary/20 text-accent-primary text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              HIRE ME
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors">
                <FaHandshake size={28} className="text-accent-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Freelance</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Available for contract work. From MVP development to legacy code refactoring and performance optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-xs text-accent-primary border border-cyan-100">Web Apps</span>
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-xs text-accent-primary border border-cyan-100">Mobile Apps</span>
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-xs text-accent-primary border border-cyan-100">Consulting</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Expert;
