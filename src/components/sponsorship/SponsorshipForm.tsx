"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "mt-1 min-h-10 w-full min-w-0 rounded-lg border border-[#b8c9c0] bg-white px-3 py-2 text-sm font-normal text-[#1A3A32] outline-none placeholder:text-[#6b7b74] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20";
const labelClass =
  "flex w-full min-w-0 flex-col gap-1 text-sm font-semibold text-[#1A3A32]";

export default function SponsorshipForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = event.currentTarget;

    try {
      const response = await fetch("/api/sponsorship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit sponsorship enquiry");
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit sponsorship enquiry");
      setStatus("error");
    }
  }

  return (
    <form
      noValidate
      onSubmit={submit}
      className="mx-auto max-w-5xl rounded-3xl border border-[#dce8e2] bg-white p-5 shadow-[0_18px_50px_rgba(26,58,50,0.12)] sm:p-7 lg:p-8"
    >
      <div className="min-w-0">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Sponsorship enquiry</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-[#1A3A32]">Share your requirements</h2>
          <p className="mt-2 text-sm text-gray-600">Fields marked <span className="text-red-600">*</span> are required.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className={labelClass}>First name <span className="text-red-600">*</span><input required name="firstName" autoComplete="given-name" className={fieldClass} /></label>
          <label className={labelClass}>Last name <span className="text-red-600">*</span><input required name="lastName" autoComplete="family-name" className={fieldClass} /></label>
          <label className={labelClass}>Organization <span className="text-red-600">*</span><input required name="organization" autoComplete="organization" className={fieldClass} /></label>
          <label className={labelClass}>Designation <span className="text-red-600">*</span><input required name="designation" className={fieldClass} /></label>
          <label className={labelClass}>Email <span className="text-red-600">*</span><input required type="email" name="email" autoComplete="email" className={fieldClass} /></label>
          <label className={labelClass}>Phone <span className="text-red-600">*</span><input required name="phone" type="tel" autoComplete="tel" placeholder="Include country code" className={fieldClass} /></label>
          <label className={labelClass}>Website <span className="font-normal text-gray-500">(optional)</span><input type="url" name="website" autoComplete="url" className={fieldClass} /></label>
          <label className={labelClass}>Enquiry type <span className="text-red-600">*</span><select required name="enquiryType" defaultValue="" className={fieldClass}><option value="" disabled>Select an option</option><option>Event sponsorship</option><option>Exhibition or on-site display</option><option>Brand visibility</option><option>Customized sponsorship arrangement</option></select></label>
          <label className={`${labelClass} sm:col-span-2`}>Message <span className="text-red-600">*</span><textarea required name="message" rows={5} maxLength={600} placeholder="Describe the sponsorship opportunity you would like to discuss." className={fieldClass} /></label>
        </div>

        <button disabled={status === "sending"} type="submit" className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-[#1A3A32] px-7 py-2.5 text-sm font-bold text-white transition hover:bg-[#D4AF37] hover:text-[#1A3A32] disabled:opacity-70">
          {status === "sending" ? "Submitting..." : "Submit enquiry"}
        </button>
        {status === "success" && <p role="status" className="mt-4 text-sm font-semibold text-[#1A3A32]">Thank you. Your sponsorship enquiry has been received.</p>}
        {status === "error" && <p role="alert" className="mt-4 text-sm font-semibold text-red-700">{errorMessage}</p>}
      </div>
    </form>
  );
}
