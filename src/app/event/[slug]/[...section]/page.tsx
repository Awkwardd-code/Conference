import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EventUnderConstruction from "../_components/EventUnderConstruction";
import {
  getPublicConferenceBySlug,
  type PublicConference,
} from "@/lib/public-conferences";

type EventSection = {
  path: string;
  title: string;
  category: string;
  description: string;
};

const eventSections: EventSection[] = [
  {
    path: "about/about-conference",
    title: "About the Conference",
    category: "About",
    description: "Conference overview, theme, and key information.",
  },
  {
    path: "about/who-should-attend",
    title: "Who Should Attend?",
    category: "About",
    description: "Learn who can benefit from joining this event.",
  },
  {
    path: "about/why-should-attend",
    title: "Why Should Attend?",
    category: "About",
    description: "Explore the opportunities available to participants.",
  },
  {
    path: "about/collaboration",
    title: "Collaboration",
    category: "About",
    description: "Information about research and event collaboration.",
  },
  {
    path: "submission/call-for-papers",
    title: "Call for Papers",
    category: "Submission",
    description: "Find the event's submission topics and important dates.",
  },
  {
    path: "submission/guidelines",
    title: "Submission Guidelines",
    category: "Submission",
    description: "Guidance for preparing and submitting your work.",
  },
  {
    path: "submission/topics",
    title: "Conference Topics",
    category: "Submission",
    description: "Review the research areas planned for this conference.",
  },
  {
    path: "registration/conference-registration",
    title: "Conference Registration",
    category: "Registration",
    description: "Registration options and attendee information.",
  },
  {
    path: "registration/guidelines",
    title: "Registration Guidelines",
    category: "Registration",
    description: "Details to help you complete your event registration.",
  },
  {
    path: "registration/benefits",
    title: "Registration Benefits",
    category: "Registration",
    description: "See what is included with conference participation.",
  },
  {
    path: "advisory-committee/focus-responsibilities-eligibility",
    title: "Focus, Responsibilities & Eligibility",
    category: "Advisory Committee",
    description: "Information about the advisory committee and its roles.",
  },
  {
    path: "advisory-committee/join",
    title: "Join as an Advisory Member",
    category: "Advisory Committee",
    description: "Learn how to express interest in joining the committee.",
  },
  {
    path: "advisory-committee/members",
    title: "Our Advisory Committee",
    category: "Advisory Committee",
    description: "Meet the people supporting this conference.",
  },
  {
    path: "speakers/guidelines",
    title: "Speaker Guidelines",
    category: "Conference Speakers",
    description: "Guidance for conference speakers and presenters.",
  },
  {
    path: "speakers/application",
    title: "Speaker Application",
    category: "Conference Speakers",
    description: "Information about applying to speak at the event.",
  },
  {
    path: "speakers/past-speakers",
    title: "Past Speakers",
    category: "Conference Speakers",
    description: "A look at speakers from previous events.",
  },
  {
    path: "agenda",
    title: "Conference Agenda",
    category: "Program",
    description: "Conference agenda and program information.",
  },
  {
    path: "guidelines/do-and-donts",
    title: "Participant Guidelines",
    category: "Guidelines",
    description: "Practical guidance for event participants.",
  },
  {
    path: "invitation-letter",
    title: "Invitation Letter",
    category: "Event Information",
    description: "Information about requesting an event invitation letter.",
  },
  {
    path: "venue",
    title: "Venue Information",
    category: "Event Information",
    description: "Conference venue and location information.",
  },
  {
    path: "sponsorship",
    title: "Sponsorship",
    category: "Get Involved",
    description: "Sponsorship and partnership information for this event.",
  },
  {
    path: "subscribe",
    title: "Subscribe",
    category: "Stay Informed",
    description: "Updates and announcements for this conference.",
  },
  {
    path: "journals-publication",
    title: "Journals Publication",
    category: "Publication",
    description: "Publication information associated with the conference.",
  },
  {
    path: "faq",
    title: "Frequently Asked Questions",
    category: "Help",
    description: "Answers to common questions about this event.",
  },
  {
    path: "contact",
    title: "Contact Us",
    category: "Get in Touch",
    description: "Contact information for the conference organizers.",
  },
  {
    path: "brochure",
    title: "Conference Brochure",
    category: "Event Information",
    description: "The conference brochure and event overview.",
  },
];

type EventSectionPageProps = {
  params: Promise<{ slug: string; section: string[] }>;
};

function getSection(path: string) {
  return eventSections.find((section) => section.path === path);
}

export async function generateMetadata({
  params,
}: EventSectionPageProps): Promise<Metadata> {
  const { slug, section } = await params;
  const conference = getPublicConferenceBySlug(slug);
  const page = getSection(section.join("/"));

  return {
    title:
      conference && page
        ? `${page.title} | ${conference.acronym}`
        : "Event page not found",
    description: page?.description,
  };
}

export default function EventSectionPage({
  params,
}: EventSectionPageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto min-h-screen max-w-7xl animate-pulse px-4 py-10 sm:px-8">
          <div className="h-52 rounded bg-[#49202a]" />
          <div className="mt-6 h-64 rounded-lg bg-white" />
        </main>
      }
    >
      <EventSectionContentByParams params={params} />
    </Suspense>
  );
}

async function EventSectionContentByParams({
  params,
}: EventSectionPageProps) {
  const { slug, section } = await params;
  const conference = getPublicConferenceBySlug(slug);
  const page = getSection(section.join("/"));

  if (!conference || !page) {
    notFound();
  }

  return <EventSectionContent conference={conference} page={page} />;
}

function EventSectionContent({
  conference,
  page,
}: {
  conference: PublicConference;
  page: EventSection;
}) {
  const eventPath = `/event/${conference.slug}`;

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-9">
      <section className="relative isolate overflow-hidden rounded-sm bg-[#282223] px-5 py-10 text-center text-white sm:px-8 sm:py-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,108,120,0.35),transparent_60%),linear-gradient(115deg,#30121a,#49202a_50%,#30121a)]"
        />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0c77e]">
          {conference.acronym} · {page.category}
        </p>
        <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
          {page.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
          {conference.title}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/80">
          <span>{conference.city}, {conference.country}</span>
          <span aria-hidden="true">·</span>
          <span>{conference.startDate.slice(0, 4)}</span>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="rounded-lg border border-[#e8e1da] bg-white p-5 shadow-sm sm:p-8">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm">
            <Link
              href={eventPath}
              className="inline-flex items-center gap-2 font-semibold text-[#a34758] hover:underline"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Event home
            </Link>
            <span className="mx-2 text-[#9aa0a3]" aria-hidden="true">
              /
            </span>
            <span className="text-[#62696d]">{page.title}</span>
          </nav>
          <EventUnderConstruction
            title={page.title}
            category={page.category}
            description={page.description}
            eventPath={eventPath}
          />
        </article>

        <aside className="h-fit rounded-lg border border-[#e8e1da] bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a36e34]">
            Explore this event
          </p>
          <Link
            href={`${eventPath}/registration/conference-registration`}
            className="mt-4 flex min-h-11 items-center justify-between gap-2 rounded-md bg-[#a34758] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#762838]"
          >
            Attendee registration
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </Link>
          <Link
            href={`${eventPath}/submission/call-for-papers`}
            className="mt-3 flex min-h-11 items-center justify-between gap-2 rounded-md border border-[#e8c9cd] px-4 py-2 text-sm font-semibold text-[#762838] transition hover:bg-[#fff4f5]"
          >
            Call for papers
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </Link>
          <p className="mt-5 border-t border-[#eee8e2] pt-4 text-xs leading-5 text-[#697176]">
            Organized by {conference.organizer}
          </p>
        </aside>
      </div>
    </main>
  );
}
