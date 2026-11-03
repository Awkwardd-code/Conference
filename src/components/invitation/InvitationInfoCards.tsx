import { AlertCircle, ShieldCheck, StickyNote } from "lucide-react";

const cards = [
  {
    title: "Important information",
    icon: ShieldCheck,
    items: [
      "The letter supports your application but does not influence approval decisions.",
      "Processing timelines vary by country and authority; apply early.",
      "Letters are issued only through official Global Scholarly Nexus communication channels.",
    ],
  },
  {
    title: "Before you apply",
    icon: AlertCircle,
    items: [
      "Ensure your registration and payment are complete.",
      "Check that every submitted detail is accurate to avoid delays.",
      "Report messages from unauthorized sources immediately.",
    ],
  },
  {
    title: "Additional notes",
    icon: StickyNote,
    items: [
      "Early application is recommended to prevent last-minute complications.",
      "Global Scholarly Nexus is not responsible for external authority decisions or delays.",
    ],
  },
];

export default function InvitationInfoCards() {
  return (
    <section className="grid gap-4 lg:grid-cols-3" aria-label="Invitation letter notes">
      {cards.map(({ title, icon: Icon, items }) => (
        <article key={title} className="rounded-2xl bg-[#f5f8f6] p-5 sm:p-6">
          <span className="flex size-10 items-center justify-center rounded-xl bg-white text-[#b51f3b] shadow-sm"><Icon className="size-5" /></span>
          <h2 className="mt-5 font-bold text-[#102e28]">{title}</h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-gray-600"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#D4AF37]" />{item}</li>)}
          </ul>
        </article>
      ))}
    </section>
  );
}
