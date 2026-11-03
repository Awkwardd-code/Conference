import { Globe2, Landmark } from "lucide-react";

export default function InvitationIntro() {
  return (
    <section className="grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
      <div className="rounded-2xl border border-[#dce8e2] bg-white p-5 shadow-sm sm:p-6">
        <p className="text-base leading-relaxed text-gray-700">
          Global Scholarly Nexus issues an official invitation letter to participants who have successfully completed conference registration. The letter confirms participation and is provided in English for submission to relevant authorities.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-gray-500">
          It is a supporting document only and does not guarantee approval by embassies or consulates.
        </p>
      </div>
      <div className="flex flex-col justify-between rounded-2xl bg-[#f7e9ed] p-5 text-[#102e28] sm:p-6">
        <Globe2 className="size-8 text-[#b51f3b]" />
        <div className="mt-6">
          <p className="text-3xl font-bold">01</p>
          <p className="mt-1 text-sm font-semibold">official document</p>
        </div>
      </div>
      <div className="hidden items-center gap-3 rounded-2xl border border-[#dce8e2] bg-[#f5f8f6] p-4 text-sm text-gray-600 sm:flex sm:col-span-2">
        <Landmark className="size-5 shrink-0 text-[#D4AF37]" />
        Submit the letter to the relevant embassy, consulate, or authority as part of your application process.
      </div>
    </section>
  );
}
