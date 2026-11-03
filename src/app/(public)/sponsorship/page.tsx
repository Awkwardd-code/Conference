import { ArrowRight, CheckCircle2 } from "lucide-react";
import SponsorshipForm from "@/components/sponsorship/SponsorshipForm";

const benefits = [
  ["Reach engaged participants", "Introduce your organization to researchers, educators, students, and professionals."],
  ["Increase brand visibility", "Feature your organization in selected event materials and communications."],
  ["Make valuable connections", "Meet attendees, speakers, and representatives of participating organizations."],
  ["Encourage research exchange", "Support events that bring people together to present work and discuss ideas."],
  ["Explore available options", "Discuss sponsorship arrangements that align with your objectives and opportunities."],
];

const enquiryOptions = [
  "Event sponsorship",
  "Sponsorship package information",
  "Brand visibility",
  "Exhibition or on-site display",
  "Event activity support",
  "Customized sponsorship arrangements",
];

export default function PublicSponsorshipPage() {
  return (
    <>
      <main className="overflow-x-clip bg-white">
        <section className="relative overflow-hidden bg-[#1A3A32] px-5 py-9 text-white sm:px-8 sm:py-12">
          <div aria-hidden="true" className="absolute -right-20 -top-24 size-80 rounded-full border-[32px] border-[#D4AF37]/10" />
          <div aria-hidden="true" className="absolute bottom-[-8rem] right-[18%] size-64 rounded-full border-[18px] border-white/5" />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Put your organization in front of a research audience
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Sponsorship opportunities at Global Scholarly Nexus
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                Support academic events, connect with researchers, and position your organization within a global scholarly community.
              </p>
              <a href="#sponsorship-form" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#1A3A32] transition hover:bg-white">
                Send an enquiry <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">Why partner with us?</p>
              <p className="mt-3 font-serif text-2xl font-bold">Put your ideas in front of a connected research community.</p>
              <div className="mt-5 h-1 w-16 rounded-full bg-[#D4AF37]" />
            </div>
          </div>
        </section>

        <section className="relative bg-[#f5f8f6] px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">The value of partnership</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A3A32]">Benefits of sponsoring</h2>
            <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(([title, description], index) => (
                <article key={title} className="group flex min-h-36 flex-col rounded-xl border border-[#dce8e2] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-md sm:p-5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#1A3A32] text-xs font-bold text-[#D4AF37] transition group-hover:bg-[#D4AF37] group-hover:text-[#1A3A32]">0{index + 1}</span>
                  <h3 className="mt-2 font-bold capitalize text-[#1A3A32]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Ways to work together</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A3A32]">Sponsorship opportunities</h2>
            <p className="mt-4 text-gray-700">Enquiries are welcome about:</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {enquiryOptions.map((option) => (
                <li key={option} className="flex items-start gap-3 text-gray-800">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 fill-[#D4AF37] text-white" />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sponsorship-form" className="bg-[#f5f8f6] px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 rounded-2xl bg-[#1A3A32] p-5 text-white shadow-lg sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Become a partner</p>
              <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="font-serif text-3xl font-bold leading-tight">Let&apos;s create impact together.</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                    Tell us what you would like to support and we&apos;ll help shape the right opportunity.
                  </p>
                </div>
                <a href="mailto:team@globalscholarlynexus.com" className="text-sm font-semibold text-[#D4AF37] underline underline-offset-4">
                  team@globalscholarlynexus.com
                </a>
              </div>
            </div>
            <SponsorshipForm />
          </div>
        </section>
      </main>
    </>
  );
}
