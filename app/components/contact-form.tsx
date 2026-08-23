"use client";

import { useState, type FormEvent } from "react";
import { profile } from "../site-config";

type ContactValues = { name: string; email: string; project: string; message: string };

const initialValues: ContactValues = { name: "", email: "", project: "", message: "" };

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [channel, setChannel] = useState<"whatsapp" | "email">("email");
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [noticeType, setNoticeType] = useState<"success" | "error" | "info" | "">("");
  const [noticeTitle, setNoticeTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (type: "success" | "error" | "info", title: string, message: string) => {
    setNoticeType(type);
    setNoticeTitle(title);
    setNotice(message);
    setShowModal(true);
  };

  const closeModal = () => {
    if (isSubmitting) {
      return;
    }
    setShowModal(false);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("");
    setNoticeType("");
    const cleanName = values.name.trim();
    const cleanEmail = values.email.trim();
    const cleanProject = values.project.trim();
    const cleanMessage = values.message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      openModal(
        "error",
        "Please complete the form",
        "Please add your name, email, and message before sending.",
      );
      return;
    }

    if (channel === "whatsapp") {
      const summary = [
        `Hello Harsh, my name is ${cleanName}.`,
        `Email: ${cleanEmail}`,
        cleanProject ? `Project: ${cleanProject}` : null,
        `Message: ${cleanMessage}`,
      ].filter(Boolean).join("\n");

      window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(summary)}`, "_blank", "noopener,noreferrer");
      openModal(
        "success",
        "WhatsApp ready",
        "Your enquiry draft is ready. WhatsApp is opening in a new tab so you can send it quickly.",
      );
      return;
    }

    setIsSubmitting(true);
    openModal("info", "Sending your enquiry", "Please wait while we send your message.");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, 18000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          project: cleanProject,
          message: cleanMessage,
        }),
      });

      const text = await response.text();
      let data: { error?: string; detail?: string } = {};
      if (text) {
        try {
          data = JSON.parse(text) as { error?: string; detail?: string };
        } catch {
          data = { error: `Unexpected response from server: ${text.slice(0, 140)}` };
        }
      }

      if (!response.ok) {
        const errorMessage = data.error
          ? `${data.error}${data.detail ? ` (${data.detail})` : ""}`
          : "Unable to send your enquiry right now. Please try again later.";
        openModal(
          "error",
          "Enquiry could not be sent",
          `${errorMessage} You can also message us directly at ${profile.email}.`,
        );
        return;
      }

      setValues(initialValues);
      openModal(
        "success",
        "Enquiry sent",
        "Thanks — your enquiry has been sent successfully. Harsh will reply shortly.",
      );
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        openModal(
          "error",
          "Request timed out",
          "Email sending is taking longer than expected. Please try again in a bit or contact directly.",
        );
        return;
      }
      openModal(
        "error",
        "Unable to reach the server",
        "The request could not be sent due to a temporary issue. Please try again in a few minutes, or email directly.",
      );
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
    <form className={compact ? "contact-form contact-form-compact" : "contact-form"} onSubmit={submit}>
      <div className="contact-form-heading"><span>START A CONVERSATION</span><strong>Tell me what you&apos;re building.</strong></div>
      <div className="contact-form-grid">
        <label><span>Your name</span><input name="name" required autoComplete="name" placeholder="Your full name" value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} /></label>
        <label><span>Email address</span><input name="email" required type="email" autoComplete="email" placeholder="you@company.com" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} /></label>
      </div>
      <label><span>What do you need?</span><input name="project" placeholder="SaaS platform, Next.js website, technical lead…" value={values.project} onChange={(event) => setValues({ ...values, project: event.target.value })} /></label>
      <label><span>Your message</span><textarea name="message" required rows={compact ? 4 : 5} placeholder="A few details about the opportunity, product, or challenge." value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} /></label>
      <div className="contact-form-actions">
        <div className="channel-switch" role="group" aria-label="Preferred contact channel">
          <button type="button" className={channel === "whatsapp" ? "active" : ""} onClick={() => setChannel("whatsapp")}>WhatsApp</button>
          <button type="button" className={channel === "email" ? "active" : ""} onClick={() => setChannel("email")}>Email</button>
        </div>
        <button type="submit" className="button button-primary" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="button-spinner" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Send enquiry ↗"
          )}
        </button>
      </div>

      {showModal ? (
        <div className="contact-modal-backdrop" role="presentation" onClick={closeModal}>
          <div className={`contact-modal contact-modal--${noticeType || "info"}`} role="alertdialog" aria-modal="true" onClick={(event) => event.stopPropagation()} aria-live="assertive">
            <button type="button" className="contact-modal-close" onClick={closeModal} aria-label="Close message">
              ×
            </button>
            <h3>{noticeTitle || "Status update"}</h3>
            <p>{notice}</p>
            {noticeType === "info" && isSubmitting ? (
              <div className="contact-modal-inline">
                <span className="contact-modal-inline-spinner" aria-hidden="true" />
                Sending your enquiry may take a few seconds.
              </div>
            ) : null}
            <button
              type="button"
              className="button button-primary button-inline"
              onClick={closeModal}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Close"}
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
