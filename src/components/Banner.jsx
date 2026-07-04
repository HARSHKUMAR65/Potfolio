"use client";

import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Banner() {
  return (
    <section className="w-full min-h-screen flex items-center py-24 lg:py-28 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div className="section-reveal text-center lg:text-left">

          {/* Intro Tag */}
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full glass-card text-accent-primary text-sm font-medium tracking-wide">
            Senior Full Stack Engineer | Technical Lead
          </div>

          {/* Intro */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-950 mb-6 tracking-tight leading-[0.95]">
            Hi, I am <span className="text-gradient">Harsh Kumar</span>
          </h1>

          {/* Typed Text */}
          <div className="text-lg sm:text-2xl md:text-3xl text-slate-600 font-medium mb-8 min-h-[74px] sm:min-h-[42px]">
            I build{' '}
            <ReactTyped
              className="text-slate-950"
              strings={[
                'Scalable SaaS Platforms',
                'Real-time Systems',
                'CRM Products',
                'Automation Tools'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>

          <p className="text-slate-600 md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
            Senior Full Stack Engineer with <span className="text-slate-900 font-semibold">3+ years of experience</span> building scalable SaaS platforms, real-time systems, CRM products, automation tools, and high-performance web applications.
            Proven record of <span className="text-slate-900 font-semibold">leading a 4-person team</span>, managing 5+ Australian and European client accounts, and delivering 10+ production SaaS modules.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <a
              href="mailto:harshkumar672001@gmail.com"
              className="glow-button px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              Hire Me Now
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start items-center gap-8 mt-12">
            <a href="https://github.com/HARSHKUMAR65" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-950 hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="GitHub">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-kumar-1849b61b8/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
              <FaLinkedin size={30} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass-card depth-card rounded-lg px-5 py-4 flex flex-col items-center lg:items-start">
              <span className="text-3xl font-bold text-slate-950">3+</span>
              <span className="text-sm text-slate-500 mt-1">Years Experience</span>
            </div>
            <div className="glass-card depth-card rounded-lg px-5 py-4 flex flex-col items-center lg:items-start">
              <span className="text-3xl font-bold text-slate-950">10+</span>
              <span className="text-sm text-slate-500 mt-1">SaaS Modules</span>
            </div>
            <div className="glass-card depth-card rounded-lg px-5 py-4 flex flex-col items-center lg:items-start">
              <span className="text-3xl font-bold text-slate-950">5+</span>
              <span className="text-sm text-slate-500 mt-1">Client Accounts</span>
            </div>
            <div className="glass-card depth-card rounded-lg px-5 py-4 flex flex-col items-center lg:items-start">
              <span className="text-3xl font-bold text-slate-950">4</span>
              <span className="text-sm text-slate-500 mt-1">Person Team Lead</span>
            </div>
          </div>
        </div>

        <div className="section-reveal hero-stage relative min-h-[420px] lg:min-h-[560px]">
          <div className="absolute inset-4 rounded-[32px] bg-gradient-to-br from-white/70 via-cyan-100/30 to-blue-200/30 blur-2xl" />
          <div className="premium-shell glass-card depth-card relative h-[420px] lg:h-[560px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 ambient-grid opacity-60" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-violet-500/30 blur-2xl" />

            <div className="hero-orbit absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/45" />
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/40 rotate-45" />

            <span className="floating-shape shape-cube h-24 w-24 rounded-lg left-[16%] top-[20%]" />
            <span className="floating-shape shape-disc h-28 w-28 rounded-full right-[16%] top-[22%] [animation-delay:-2s]" />
            <span className="floating-shape shape-ring h-32 w-32 rounded-full left-[31%] bottom-[15%] [animation-delay:-4s]" />

            <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/60 bg-white/55 p-6 text-center shadow-2xl backdrop-blur-xl">
              <div className="mx-auto mb-5 h-16 w-16 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/30" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-primary">Senior Full Stack Engineer</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">Harsh Kumar</h2>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
                Technical Lead building SaaS architecture, real-time systems, CRM products, and automation workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
