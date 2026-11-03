import { Mail, Phone } from "lucide-react";

export default function InvitationContact() {
  return (
    <section className="flex flex-col justify-between gap-4 rounded-2xl border border-[#dce8e2] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b51f3b]">Need assistance?</p>
        <h2 className="mt-2 font-serif text-2xl font-bold text-[#102e28]">Contact our team</h2>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-700 sm:items-end">
        <a className="inline-flex items-center gap-2 transition hover:text-[#b51f3b]" href="mailto:team@researchleagues.com"><Mail className="size-4 text-[#b51f3b]" /> team@researchleagues.com</a>
        <a className="inline-flex items-center gap-2 transition hover:text-[#b51f3b]" href="tel:+971978129171"><Phone className="size-4 text-[#b51f3b]" /> +971 978129171</a>
      </div>
    </section>
  );
}
