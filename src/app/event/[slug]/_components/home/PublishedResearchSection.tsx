import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PublicConference } from "@/lib/public-conferences";
import ResearchAreasCarousel from "./ResearchAreasCarousel";
import EventTestimonials from "./EventTestimonials";
import KeynoteSpeakerReviews from "./KeynoteSpeakerReviews";
import InvitedGuestSpeakers from "./InvitedGuestSpeakers";
import RecentEventAwardees from "./RecentEventAwardees";

const bootcampResearchAreas = [
  {
    title: "Artificial intelligence and emerging technology",
    icon: "dna" as const,
    category: "Technology & society",
  },
  {
    title: "Cyber law, digital rights, and governance",
    icon: "database" as const,
    category: "Law & digital policy",
  },
  {
    title: "Research foundations and academic writing",
    icon: "heart" as const,
    category: "Research practice",
  },
];

const generalResearchAreas = [
  {
    title: "Emerging ideas and developments",
    icon: "dna" as const,
    category: "New perspectives",
  },
  {
    title: "Research methods and evidence",
    icon: "database" as const,
    category: "Research & evidence",
  },
  {
    title: "Practice, policy, and application",
    icon: "heart" as const,
    category: "Real-world impact",
  },
];

export default function PublishedResearchSection({
  conference,
}: {
  conference: PublicConference;
}) {
  const isResearchBootcamp =
    conference.slug ===
    "research-bootcamp-1-on-artificial-intelligence-and-cyber-law";
  const researchAreas = isResearchBootcamp
    ? bootcampResearchAreas
    : generalResearchAreas;

  return (
    <section
      aria-labelledby="published-research-title"
      className="bg-[#f3f4f5] px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="inline-flex rounded-sm bg-[#fff0f2] px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#762838]">
            Explore published research
          </p>
          <h2
            id="published-research-title"
            className="sr-only"
          >
            Published research related to {conference.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#64717b] sm:text-base">
            Browse the Research Leagues library for publications related to
            this conference. The cards below highlight subject areas, not
            specific conference publications.
          </p>
        </header>

        <ResearchAreasCarousel areas={researchAreas} />

        <div className="mt-6 text-center">
          <Link
            href="/journal/publications"
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#a34758] px-5 text-sm font-bold text-[#762838] transition hover:bg-[#a34758] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
          >
            View more research
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-10 border-t border-[#d8dde1] pt-8 sm:mt-14 sm:pt-10">
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="mt-2 text-2xl font-extrabold text-[#762838] sm:text-3xl">
              What People Say
            </h2>
          </header>
          <EventTestimonials />
        </div>
        <KeynoteSpeakerReviews />
        <InvitedGuestSpeakers />
        <RecentEventAwardees />
      </div>
    </section>
  );
}
