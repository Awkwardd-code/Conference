import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  CircleArrowRight,
  FileText,
  MapPin,
} from "lucide-react";
import EventSidebarResources from "./EventSidebarResources";
import ConferenceDetailsSections from "./ConferenceDetailsSections";
import EventHighlightsRow from "./EventHighlightsRow";
import KeyEventInfoSlider from "./KeyEventInfoSlider";
import {
  formatConferenceDates,
  type PublicConference,
} from "@/lib/public-conferences";

const navigationItems = [
  { label: "Home", path: "", icon: CircleArrowRight },
  { label: "About Organizer", path: "about/about-conference", icon: FileText },
  { label: "Call For Paper", path: "submission/call-for-papers", icon: FileText },
  { label: "Paper Submission", path: "submission/guidelines", icon: FileText },
  { label: "Author Guidelines", path: "submission/guidelines", icon: FileText },
  {
    label: "Registration",
    path: "registration/conference-registration",
    icon: CalendarDays,
  },
  {
    label: "Presentation Guidelines",
    path: "speakers/guidelines",
    icon: FileText,
  },
  {
    label: "Organizing Committee",
    path: "advisory-committee/members",
    icon: FileText,
  },
  { label: "Collaboration", path: "about/collaboration", icon: FileText },
  { label: "Agenda", path: "agenda", icon: CalendarDays },
  {
    label: "Do's and Don'ts",
    path: "guidelines/do-and-donts",
    icon: FileText,
  },
  { label: "Invitation Letter", path: "invitation-letter", icon: FileText },
  { label: "Venue", path: "venue", icon: MapPin },
  { label: "Contact Us", path: "contact", icon: FileText },
  { label: "Sponsorship", path: "sponsorship", icon: FileText },
];

export default function EventOverviewSection({
  conference,
}: {
  conference: PublicConference;
}) {
  const eventPath = `/event/${conference.slug}`;
  const isResearchBootcamp =
    conference.slug ===
    "research-bootcamp-1-on-artificial-intelligence-and-cyber-law";

  const overview = isResearchBootcamp
    ? [
        <>
          Join us for the{" "}
          <strong>
            {conference.title} ({conference.acronym})
          </strong>{" "}
          on {formatConferenceDates(conference)} in {conference.city},{" "}
          {conference.country}. Hosted by {conference.organizer}, this
          bootcamp is focused on developing research skills and exploring
          artificial intelligence and cyber law.
        </>,
        <>
          Participants can learn more about research practice, discuss the
          questions emerging around AI and digital law, and find the event
          information they need through the links on this website.
        </>,
      ]
    : [
        <>
          Join us for the{" "}
          <strong>
            {conference.title} ({conference.acronym})
          </strong>{" "}
          on {formatConferenceDates(conference)} in {conference.city},{" "}
          {conference.country}. The event is organized by {conference.organizer}.
        </>,
        <>
          Explore the conference pages for submission, registration, and
          program information. Additional details will be shared as they are
          confirmed by the organizing team.
        </>,
      ];

  return (
    <section
      aria-label="Conference information and navigation"
      className="bg-[#efefef] px-3 pb-0 pt-5 sm:px-5 sm:pb-0 sm:pt-7 lg:px-0"
    >
      <div className="mx-auto grid items-start gap-5 lg:max-w-none lg:grid-cols-[minmax(18rem,29%)_minmax(0,1fr)] lg:gap-0">
        <aside className="space-y-5 lg:px-4 xl:px-10">
          <nav
            aria-label="Conference quick links"
            className="overflow-hidden rounded-md border border-[#d9d9d9] bg-white"
          >
            <ul>
              {navigationItems.map(({ label, path, icon: Icon }) => (
                <li
                  key={label}
                  className="border-b border-[#dedede] last:border-0"
                >
                  <Link
                    href={path ? `${eventPath}/${path}` : eventPath}
                    aria-current={path === "" ? "page" : undefined}
                    className="flex min-h-11 items-center gap-2.5 px-3.5 py-2 text-sm text-[#364b5d] transition-colors hover:bg-[#fff4f5] hover:text-[#762838] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#762838]"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-4 shrink-0 text-[#a34758]"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="event-dates-title" className="space-y-3">
            <h2
              id="event-dates-title"
              className="text-center text-2xl font-extrabold text-[#a34758]"
            >
              Important Dates
            </h2>
            <DateCard label="Pre-registration deadline" value="To be announced" />
            <DateCard label="Paper submission deadline" value="To be announced" />
            <DateCard label="Last date of registration" value="To be announced" />
            <DateCard
              label="Date of conference"
              value={formatConferenceDates(conference)}
            />
          </section>
          <EventSidebarResources conference={conference} />
          <div className="!mt-3">
            <KeyEventInfoSlider conference={conference} />
          </div>
        </aside>

        <div className="min-w-0 space-y-4">
          <section
            aria-label="Conference introduction video"
            className="border border-[#dedede] bg-white p-3 sm:p-5"
          >
            <div className="mx-auto w-full max-w-[60rem] rounded-2xl border-2 border-[#a34758] bg-[#30121a] p-2 shadow-[0_12px_28px_rgba(74,29,20,0.22)]">
              <video
                controls
                preload="metadata"
                playsInline
                aria-label={`${conference.title} introduction`}
                className="aspect-video w-full rounded-xl bg-black object-contain"
              >
                <source src="/promotion.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </section>

          <article className="border border-[#dedede] bg-white p-5 sm:p-7">
            <h2 className="border-b border-[#c96c78] pb-2 font-serif text-lg font-bold text-[#762838]">
              Conference Overview
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[#252a2e] sm:text-base">
              {overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={`${eventPath}/about/about-conference`}
              className="mt-2 inline-flex min-h-10 items-center gap-1 font-semibold text-[#a34758] hover:text-[#762838] hover:underline"
            >
              View More
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </article>
          <ConferenceDetailsSections conference={conference} />
          <div className="!mt-0 min-w-0 lg:ml-7">
            <EventHighlightsRow />
          </div>
        </div>
      </div>
    </section>
  );
}

function DateCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-lg border border-[#d0d0d0] bg-white px-3 py-4 text-center">
      <h3 className="text-sm font-bold text-[#762838]">{label}</h3>
      <CalendarDays
        aria-hidden="true"
        className="mx-auto mt-2 size-6 text-[#a34758]"
      />
      <p className="mt-2 text-sm font-semibold text-[#29343c]">{value}</p>
    </article>
  );
}
