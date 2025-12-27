"use client";

import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

function Banner() {
  return (
    <div className="w-full py-20 lg:py-32 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-[1240px] mx-auto text-center px-4">

        {/* Intro Tag */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card text-accent-primary text-sm font-medium tracking-wide">
          Available for Freelance Projects 🚀
        </div>

        {/* Intro */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Hi, I am <span className="text-gradient">Harsh Kumar</span>
        </h1>

        {/* Typed Text */}
        <div className="text-lg sm:text-2xl md:text-3xl text-slate-600 font-medium mb-8 h-[40px]">
          I build{' '}
          <ReactTyped
            className="text-slate-900"
            strings={[
              'Scalable Web Applications',
              'High-Performance Mobile Apps',
              'Robust Backend Systems',
              'Modern User Interfaces'
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        <p className="text-slate-600 md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A passionate <span className="text-slate-900 font-semibold">Full Stack Developer</span> specialized in building exceptional digital experiences.
          From <span className="text-slate-900 font-semibold">concept to deployment</span>, I help startups and businesses solve complex problems with clean, efficient code.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:harshkumar672001@gmail.com"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
          >
            Hire Me Now
          </a>
          {/* <a
            href="#projects"
            className="px-8 py-4 rounded-full glass-card text-slate-900 font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            View Projects
          </a> */}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <a href="https://github.com/HARSHKUMAR65" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 hover:scale-110 transition-all duration-300">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-kumar-1849b61b8/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 hover:scale-110 transition-all duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="https://hashnode.com/@harsh182" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 hover:scale-110 transition-all duration-300">
            <SiHashnode size={30} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-slate-200">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">2+</span>
            <span className="text-sm text-slate-500 mt-1">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">10+</span>
            <span className="text-sm text-slate-500 mt-1">Projects Done</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">5+</span>
            <span className="text-sm text-slate-500 mt-1">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">24/7</span>
            <span className="text-sm text-slate-500 mt-1">Support</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;
