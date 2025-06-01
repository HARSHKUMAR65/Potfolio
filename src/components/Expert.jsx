import { FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

function Expert() {
  return (
    <div name="about" className="w-full py-20  text-gray-300">
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center text-center">

        <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">

          {/* Web Development */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 duration-300">
            <div className="flex items-center gap-4 mb-4 text-white">
              <FaLaptopCode size={30} />
              <h3 className="text-2xl font-semibold">Web Developer</h3>
            </div>
            <p className="text-gray-300 text-md leading-relaxed">
              I'm Harsh Kumar — a full-stack developer focused on crafting high-performing, pixel-perfect websites. I work extensively with modern technologies like React, Node.js, and MongoDB to deliver scalable, production-ready solutions. Whether it's a landing page or a large-scale app, I bring both design sense and engineering precision.
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 duration-300">
            <div className="flex items-center gap-4 mb-4 text-white">
              <FaMobileAlt size={30} />
              <h3 className="text-2xl font-semibold">Mobile App Developer</h3>
            </div>
            <p className="text-gray-300 text-md leading-relaxed">
              I also build smooth, cross-platform mobile applications using React Native. From idea to App Store, I help businesses launch intuitive and responsive apps that work seamlessly on both Android and iOS. My focus is always on user experience, performance, and maintainability.
            </p>
          </div>
        </div>

        {/* Footer Description */}
        <div className="mt-16 max-w-3xl text-lg text-gray-400 leading-relaxed">
          I’m passionate about learning, adapting, and solving problems with technology. Whether you’re a startup or an enterprise, I bring a creative mindset, collaborative energy, and deep technical skill to every project. Let’s connect and build something amazing together.
        </div>
      </div>
    </div>
  );
}

export default Expert;
