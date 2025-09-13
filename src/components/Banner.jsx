import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

function Banner() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Harsh_resume.pdf';
    link.setAttribute('download', 'Harsh_resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full py-[110px]">
      <div className="max-w-[1240px] mx-auto text-center">

        {/* Intro */}
        <div className="text-2xl text-white md:text-4xl font-bold md:p-[24px] p-[5px]">
          👋 Hello, I’m
        </div>

        {/* Name */}
        <h2 className="text-white font-bold md:text-[80px] text-3xl md:p-[24px] p-[15px]">
          Harsh Kumar
        </h2>

        {/* Typed Text */}
        <div className="text-[15px] md:text-[50px] bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent font-bold md:p-[24px] p-[15px]">
          <ReactTyped
            className="pl-3"
            strings={[
              'Software Engineer | 2+ Years of Experience',
              'Full-Stack Developer | React, Node.js, Express, MongoDB',
              'Building Scalable Web & Mobile Applications',
              'Passionate About Problem-Solving & Clean Code'
            ]}
            typeSpeed={80}
            loop
          />
        </div>


        <p className="text-gray-300 md:text-xl text-sm max-w-2xl mx-auto leading-relaxed mt-6">
          🚀 I specialize in developing modern, user-friendly <span className="text-white font-semibold">websites</span>
          and <span className="text-white font-semibold">mobile apps</span>. I help businesses and startups bring their ideas to life.
          <span className="block mt-3">
            I also take on <span className="text-white font-semibold">freelance / contract projects</span>—from MVPs and feature builds to
            bug fixes, performance audits, and app launches. <span className="text-white font-semibold">Available worldwide (remote)</span>
            for short-term or ongoing engagements.
          </span>
        </p>


        {/* Resume Button */}
        <button
          onClick={handleDownload}
          className="bg-white text-black font-semibold rounded-xl px-6 py-3 mt-6 hover:bg-gray-200 transition"
        >
          📄 Download My Resume
        </button>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <a href="https://github.com/HARSHKUMAR65" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-pink-500 text-3xl transition" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-kumar-1849b61b8/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-pink-500 text-3xl transition" />
          </a>
          <a href="https://hashnode.com/@harsh182" target="_blank" rel="noopener noreferrer">
            <SiHashnode className="text-white hover:text-pink-500 text-3xl transition" />
          </a>
        </div>

        {/* Extra Highlight (Optional Stats) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200 mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="mt-2">Projects Delivered</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-white">5+</h3>
            <p className="mt-2">Tech Stacks Mastered</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-white">100%</h3>
            <p className="mt-2">Client Satisfaction</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;
