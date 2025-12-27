"use client";

import { useState } from "react";
import { MdEmail, MdPhone, MdMessage } from "react-icons/md";
import { FaWhatsapp, FaUser } from "react-icons/fa";

const FORM_ENDPOINT = "/api/contact";

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
    // Simple basic validation for phone
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
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send. Please try again.");
      }

      const message = data?.skippedEmail
        ? "Message received. Configure email env vars to forward to your inbox."
        : "We will get back to you soon! Thank you for reaching out.";
      setStatus({ loading: false, ok: true, msg: message });
      setForm({ name: "", email: "", phone: "", message: "", company: "" });
    } catch (error) {
      setStatus({ loading: false, ok: false, msg: error.message || "Something went wrong." });
    }
  };

  return (
    <div name="contact" id="contact" className="w-full py-24 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Have a project in mind or want to discuss a freelance opportunity? I&apos;m just a message away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Left: Contact Info */}
          <div className="flex flex-col space-y-8">
            <div className="glass-card p-8 rounded-2xl flex items-center gap-6 hover:shadow-xl transition-colors">
              <div className="bg-accent-primary/10 p-4 rounded-xl text-accent-primary">
                <MdEmail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Email</h3>
                <a href="mailto:harshkumar672001@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                  harshkumar672001@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex items-center gap-6 hover:shadow-xl transition-colors">
              <div className="bg-green-500/10 p-4 rounded-xl text-green-500">
                <FaWhatsapp size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">WhatsApp</h3>
                <a href="https://wa.me/918800288159" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                  +91 8800288159
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex items-center gap-6 hover:shadow-xl transition-colors">
              <div className="bg-blue-500/10 p-4 rounded-xl text-blue-500">
                <MdPhone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Phone</h3>
                <a href="tel:+918800288159" className="text-slate-600 hover:text-slate-900 transition-colors">
                  +91 8800288159
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send me a message</h3>

            {status.msg && (
              <div
                className={`mb-6 rounded-lg px-4 py-3 text-sm ${status.ok
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
                  }`}
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={onSubmit} noValidate className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={onChange}
                className="hidden"
                tabIndex="-1"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-accent-primary transition-colors" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-xl bg-white/80 border border-slate-200 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="relative group">
                  <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-accent-primary transition-colors" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full rounded-xl bg-white/80 border border-slate-200 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 transition-all"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="relative group">
                <MdPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-accent-primary transition-colors" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className="w-full rounded-xl bg-white/80 border border-slate-200 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 transition-all"
                  placeholder="Phone Number (Optional)"
                />
              </div>

              <div className="relative group">
                <MdMessage className="absolute left-4 top-4 text-slate-400 group-focus-within:text-accent-primary transition-colors" />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={onChange}
                  className="w-full rounded-xl bg-white/80 border border-slate-200 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 text-lg"
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
