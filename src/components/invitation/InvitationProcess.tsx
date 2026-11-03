import { CheckCircle2, ClipboardCheck, FileText, MailCheck, SearchCheck } from "lucide-react";

const steps = [
  ["Registration", "Complete conference registration and successfully process payment.", ClipboardCheck],
  ["Information", "Submit all required details accurately after confirmation.", FileText],
  ["Verification", "Our team reviews the submitted information for completeness.", SearchCheck],
  ["Issuance", "The invitation letter is sent to your registered email address.", MailCheck],
] as const;

export default function InvitationProcess() {
  return (
    <section id="request-process" aria-labelledby="request-process-title">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b51f3b]">Simple process</p>
          <h2 id="request-process-title" className="mt-2 font-serif text-3xl font-bold text-[#102e28]">Request your letter</h2>
        </div>
        <CheckCircle2 className="hidden size-8 text-[#3bb273] sm:block" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {steps.map(([title, description, Icon], index) => (
          <article key={title} className="relative rounded-2xl border border-[#dce8e2] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <span className="absolute right-4 top-4 text-3xl font-bold text-[#e8efeb]">0{index + 1}</span>
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#102e28] text-[#D4AF37]"><Icon className="size-5" /></span>
            <h3 className="mt-5 font-bold text-[#102e28]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
