import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, UserRound } from "lucide-react";
import GlobalGoalsSection from "./GlobalGoalsSection";
import EventOverviewSection from "./EventOverviewSection";
import SessionTracksSection from "./SessionTracksSection";
import PublishedResearchSection from "./PublishedResearchSection";
import {
  formatConferenceDates,
  type PublicConference,
} from "@/lib/public-conferences";

export default function EventHomePage({
  conference,
}: {
  conference: PublicConference;
}) {
  const eventPath = `/event/${conference.slug}`;
  const isResearchBootcamp =
    conference.slug ===
    "research-bootcamp-1-on-artificial-intelligence-and-cyber-law";

  return (
    <main className="bg-[#efefef]">
      <section className="relative isolate mx-1 mt-1 flex min-h-[min(38rem,calc(100svh-16rem))] items-center justify-center overflow-hidden bg-[#211d1e] px-4 py-8 text-center text-white sm:px-8 sm:py-10 lg:py-12">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2400&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#341019]/70" />
        </div>

        <div className="mx-auto max-w-5xl">
          <h1 className="mx-auto max-w-4xl text-2xl font-bold leading-tight sm:text-3xl">
            {conference.title} - ({conference.acronym})
          </h1>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em]">
            {isResearchBootcamp ? "RESEARCH BOOTCAMP" : "CONFERENCE THEME"}
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm italic leading-6 text-white/95 sm:text-base">
            {isResearchBootcamp
              ? "Build research skills and explore the questions shaping artificial intelligence and cyber law."
              : `Exploring current research and new perspectives in ${conference.title.replace(/^International Conference on /i, "")}.`}
          </p>
          <p className="mt-5 font-serif text-base font-bold text-[#f1c2c8] sm:mt-7 sm:text-lg">
            {formatConferenceDates(conference)} | {conference.city},{" "}
            {conference.country}
          </p>
          <p className="mt-3 text-lg font-bold sm:mt-4 sm:text-xl">
            Multi-Format (In-Person / Virtual)
          </p>

          <div className="mt-4 flex flex-col justify-center gap-2 sm:mt-5 sm:flex-row sm:gap-2.5">
            <Link
              href={`${eventPath}/submission/call-for-papers`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#a34758] to-[#c96c78] px-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Submit for Presentation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href={`${eventPath}/registration/conference-registration`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#a34758] to-[#c96c78] px-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Attendee Registration
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href={`${eventPath}/brochure`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#fff0f2] px-5 text-sm font-bold text-[#762838] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
            >
              Conference Brochure
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <Link
            href={`${eventPath}/registration/conference-registration`}
            className="mx-auto mt-3 flex w-fit items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-white/10"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <UserRound aria-hidden="true" className="size-4" />
            </span>
            <span>
              <span className="flex items-center gap-2 font-semibold">
                Registration Options
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-[#f1c2c8]"
                />
              </span>
              <span className="mt-0.5 block text-xs text-white/75 sm:text-sm">
                Explore conference registration categories and participation
                options.
              </span>
            </span>
          </Link>
        </div>
      </section>

      <GlobalGoalsSection />
      <EventOverviewSection conference={conference} />
      <SessionTracksSection conference={conference} />
      <PublishedResearchSection conference={conference} />
    </main>
  );
}
