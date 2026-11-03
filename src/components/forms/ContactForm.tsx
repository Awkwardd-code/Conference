"use client";

import { FormEvent, useState } from "react";

const categories = ["Attendee", "Speaker", "Committee Member", "Partner", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Unable to submit contact form");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white p-5 sm:p-8 lg:p-10"
    >
      <div className="mb-7 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
          Send us a message
        </p>
        <h2 className="text-2xl font-extrabold text-[#1A3A32] sm:text-3xl">
        Get in <span className="text-[#D4AF37]">touch</span> with us.
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="contact-label">Full name<input required name="name" placeholder="Your full name" aria-label="Full name" className="contact-field" /></label>
        <label className="contact-label">Email address<input required type="email" name="email" placeholder="you@example.com" aria-label="Email address" className="contact-field" /></label>
        <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-2">
          <label className="contact-label">Code<input name="countryCode" placeholder="+1" aria-label="Country code" className="contact-field" /></label>
          <label className="contact-label">Phone number<input name="phone" placeholder="Your phone number" aria-label="Phone number" className="contact-field" /></label>
        </div>
        <label className="contact-label">I am interested in<select required name="category" defaultValue="" aria-label="Participation category" className="contact-field">
          <option value="" disabled>Select Participation Category</option>
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select></label>
        <label className="contact-label">Research field<input name="researchField" placeholder="Your area of research" aria-label="Research field" className="contact-field" /></label>
        <label className="contact-label">Preferred location<input name="location" placeholder="Conference location" aria-label="Preferred conference location" className="contact-field" /></label>
        <label className="contact-label sm:col-span-2">Your message<textarea name="message" placeholder="Tell us how we can help..." aria-label="Message" rows={4} className="contact-field" /></label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mx-auto mt-7 block min-h-11 w-full max-w-sm rounded-lg bg-gradient-to-r from-[#1A3A32] to-[#D4AF37] px-6 py-3 text-sm font-bold text-white transition hover:shadow-lg disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && <p role="status" className="mt-4 text-center text-sm font-semibold text-[#1A3A32]">Thanks! Your message has been received.</p>}
      {status === "error" && <p role="alert" className="mt-4 text-center text-sm font-semibold text-red-700">We could not send your message. Please try again.</p>}
    </form>
  );
}
