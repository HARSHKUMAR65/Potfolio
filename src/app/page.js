import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expert from "@/components/Expert";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-900 overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="ambient-grid absolute inset-0 opacity-70" />
        <div className="ambient-float absolute top-[-16%] left-[-12%] h-[44%] w-[44%] rounded-full bg-cyan-200/50 blur-[120px]" />
        <div className="ambient-float absolute bottom-[-14%] right-[-12%] h-[44%] w-[44%] rounded-full bg-blue-300/40 blur-[130px] [animation-delay:-5s]" />
        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55 blur-[170px]" />
        <span className="floating-shape shape-cube hidden lg:block h-16 w-16 rounded-lg left-[7%] top-[28%]" />
        <span className="floating-shape shape-disc hidden lg:block h-20 w-20 rounded-full right-[7%] top-[22%] [animation-delay:-2s]" />
        <span className="floating-shape shape-ring hidden lg:block h-24 w-24 rounded-full right-[16%] bottom-[18%] [animation-delay:-4s]" />
      </div>

      <main className="relative z-10">
        <Banner />
        <Expert />
        <Cards />
        <Experience />
        <Newsletter />
        <Contact />
      </main>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-20 flex flex-col gap-3">
        <a
          href="https://wa.me/918800288159"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 p-3 text-white shadow-lg shadow-green-500/25 transition-all hover:-translate-y-1 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="tel:+918800288159"
          className="rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1 hover:scale-110"
          aria-label="Call"
        >
          <FaPhoneAlt size={20} />
        </a>
        <a
          href="mailto:harshkumar672001@gmail.com"
          className="rounded-full bg-red-500 p-3 text-white shadow-lg shadow-red-500/25 transition-all hover:-translate-y-1 hover:scale-110"
          aria-label="Send an email"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </div>
  );
}
