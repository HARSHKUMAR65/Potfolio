import { FaLaptopCode, FaMobileAlt, FaHandshake } from 'react-icons/fa';

function Expert() {
  return (
    <div
      name="about"
      className="w-full py-20 px-4  text-gray-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold border-b-4 border-pink-600 inline-block mb-16 text-white">
          About Me
        </h2>

        {/* Two-Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-left w-full">
          {/* Web Developer Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <FaLaptopCode size={32} className="text-blue-500" />
              <h3 className="text-2xl font-semibold">Web Developer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I am Harsh Kumar — a full-stack developer focused on crafting
              high-performing, pixel-perfect websites. I work extensively with
              technologies like React, Node.js, and MongoDB to build scalable
              web solutions. Whether it is a landing page or an enterprise app,
              I deliver with both design precision and code performance.
            </p>
          </div>

          {/* Mobile App Developer Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <FaMobileAlt size={32} className="text-green-500" />
              <h3 className="text-2xl font-semibold">Mobile App Developer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I build seamless cross-platform mobile applications using React
              Native. From idea to launch, I help businesses deliver apps that
              feel fast, intuitive, and native — for both Android and iOS.
              Always built with performance and user experience at heart.
            </p>
          </div>
        </div>

        {/* Footer Description */}
        <div className="mt-16 max-w-3xl text-lg text-gray-400 leading-relaxed flex flex-col items-center gap-4 text-center">
          <FaHandshake size={40} className="text-red-500" />
          <p>
            I’m passionate about solving problems through technology. Whether
            you are a startup or a growing enterprise, I bring creativity,
            curiosity, and solid engineering to every project. Let’s build
            something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expert;
