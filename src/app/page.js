import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expert from "@/components/Expert";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-12%] left-[-12%] h-[40%] w-[40%] rounded-full bg-cyan-200/40 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-12%] h-[40%] w-[40%] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[160px] opacity-40" />
      </div>

      <main className="relative z-10">
        <Banner />
        <Expert />
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
          className="rounded-full bg-green-500 p-3 text-white shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="tel:+918800288159"
          className="rounded-full bg-blue-500 p-3 text-white shadow-lg transition-transform hover:scale-110"
          aria-label="Call"
        >
          <FaPhoneAlt size={20} />
        </a>
        <a
          href="mailto:harshkumar672001@gmail.com"
          className="rounded-full bg-red-500 p-3 text-white shadow-lg transition-transform hover:scale-110"
          aria-label="Send an email"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </div>
  );
}
