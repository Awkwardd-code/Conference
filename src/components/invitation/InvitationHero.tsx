import { ArrowDown, FileCheck2 } from "lucide-react";

export default function InvitationHero() {
  return (
    <header className="rounded-2xl border border-[#dce8e2] bg-white p-5 shadow-sm sm:p-7">
      <div className="flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1A3A32] text-[#D4AF37]">
            <FileCheck2 className="size-5" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b51f3b]">Participant guide</p>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#102e28] sm:text-4xl">
            Invitation Letter
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
            Information and steps for requesting your official conference invitation letter.
          </p>
          <a href="#request-process" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1A3A32] underline decoration-[#D4AF37] decoration-2 underline-offset-4 transition hover:text-[#b51f3b]">
            View request process <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
