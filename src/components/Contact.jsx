import { useState } from "react";
import { MdEmail, MdPhone, MdMessage } from "react-icons/md";
import { FaWhatsapp, FaUser } from "react-icons/fa";

const FORM_ENDPOINT = "https://formspree.io/f/your_form_id"; // replace with your endpoint

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (form.phone && !/^[\d+\-\s()]{7,}$/.test(form.phone)) return "Please enter a valid phone.";
    if (!form.message.trim()) return "Please write a message.";
    if (form.company.trim()) return "Spam detected.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ loading: false, ok: false, msg: err });
      return;
    }
    try {
      setStatus({ loading: true, ok: null, msg: "" });
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed to send. Please try again.");
      setStatus({ loading: false, ok: true, msg: "✅ Message sent successfully!" });
      setForm({ name: "", email: "", phone: "", message: "", company: "" });
    } catch (error) {
      setStatus({ loading: false, ok: false, msg: error.message || "Something went wrong." });
    }
  };

  return (
    <div name="contact" className="w-full py-20 px-4 text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center bg-white/10 backdrop-blur-md shadow-md rounded-xl p-6 transform hover:scale-105 transition duration-300">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold border-b-4 border-pink-600 inline-block mb-16 text-white">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full">
          {/* Left: Contact Info */}
          <div className="flex flex-col items-center text-center space-y-10">
            <div>
              <MdEmail className="text-pink-500 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-lg text-gray-400">harshkumar672001@gmail.com</p>
            </div>

            <div>
              <MdPhone className="text-pink-500 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-lg text-gray-400">+91 8800288159</p>
            </div>

            <div>
              <FaWhatsapp className="text-green-500 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold mb-2 text-white">WhatsApp</h3>
              <a
                href="https://wa.me/918800288159"
                className="text-lg text-pink-400 hover:text-pink-300 underline"
                target="_blank"
                rel="noreferrer"
              >
                +91 8800288159
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">Send me a message</h3>

            {status.msg && (
              <div
                className={`mb-4 rounded-lg px-4 py-3 text-sm ${
                  status.ok
                    ? "bg-green-500/10 text-green-300 border border-green-500/30"
                    : "bg-red-500/10 text-red-300 border border-red-500/30"
                }`}
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={onSubmit} noValidate className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={onChange}
                className="hidden"
                tabIndex="-1"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-lg bg-black/30 border border-white/10 focus:border-pink-600 outline-none pl-10 pr-3 py-3 text-white placeholder-gray-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="relative">
                  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full rounded-lg bg-black/30 border border-white/10 focus:border-pink-600 outline-none pl-10 pr-3 py-3 text-white placeholder-gray-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <MdPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className="w-full rounded-lg bg-black/30 border border-white/10 focus:border-pink-600 outline-none pl-10 pr-3 py-3 text-white placeholder-gray-500"
                  placeholder="+91 98XXXXXXXX"
                />
              </div>

              <div className="relative">
                <MdMessage className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  className="w-full rounded-lg bg-black/30 border border-white/10 focus:border-pink-600 outline-none pl-10 pr-3 py-3 text-white placeholder-gray-500 resize-y"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full rounded-xl bg-pink-600 hover:bg-pink-500 disabled:opacity-60 disabled:cursor-not-allowed transition px-6 py-3 font-semibold text-white shadow-lg shadow-pink-600/20"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
