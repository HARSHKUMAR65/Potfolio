import Banner from "./components/Banner"
import Expert from "./components/Expert"
import Newsletter from "./components/Newsletter"
import Experience from "./components/Experience"
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="BG1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Banner />
        <Expert />
        <Experience />
        <Newsletter />
        <Contact />
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918800288159" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Call */}
        <a
          href="tel:+918800288159" // replace with your phone number
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaPhoneAlt size={24} />
        </a>

        {/* Email */}
        <a
          href="mailto:harshkumar672001@gmail.com" // replace with your email
          className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  )
}

export default App
