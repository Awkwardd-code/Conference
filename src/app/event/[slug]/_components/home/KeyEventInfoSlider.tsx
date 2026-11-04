import Link from "next/link";
import { ArrowUpRight, CircleArrowRight } from "lucide-react";
import type { PublicConference } from "@/lib/public-conferences";

type InfoItem = {
  title: string;
  description: string;
  href: string;
  linkText: string;
};

export default function KeyEventInfoSlider({
  conference,
}: {
  conference: PublicConference;
}) {
  const eventPath = `/event/${conference.slug}`;
  const info: InfoItem[] = [
    {
      title: "Conference information",
      description: `Find the latest confirmed details for ${conference.title} on this event website.`,
      href: `${eventPath}/about/about-conference`,
      linkText: "Read conference overview",
    },
    {
      title: "Submission information",
      description:
        "Review the call for papers and submission guidance. Any deadlines will be shown when confirmed by the organizers.",
      href: `${eventPath}/submission/call-for-papers`,
      linkText: "View submission details",
    },
    {
      title: "Registration information",
      description:
        "Explore the available registration options and check the event page for requirements from the organizers.",
      href: `${eventPath}/registration/conference-registration`,
      linkText: "View registration details",
    },
    {
      title: "Program updates",
      description: "The conference agenda will be published when confirmed.",
      href: `${eventPath}/agenda`,
      linkText: "Check the agenda",
    },
    {
      title: "Conference session tracks",
      description:
        "Explore the broad themes related to this event. These topics are not a confirmed session schedule.",
      href: `${eventPath}/submission/topics`,
      linkText: "Explore session topics",
    },
    {
      title: "Venue information",
      description:
        "Check the venue page for location details and any access updates confirmed by the organizers.",
      href: `${eventPath}/venue`,
      linkText: "View venue information",
    },
    {
      title: "About the organizer",
      description:
        "Learn more about the organizing team and find the appropriate contact page for event questions.",
      href: `${eventPath}/about/about-conference`,
      linkText: "Learn about the event",
    },
    {
      title: "Publication information",
      description:
        "Review the publication information and guidance provided for conference participants.",
      href: `${eventPath}/journals-publication`,
      linkText: "View publication details",
    },
  ];

  return (
    <section
      aria-labelledby="key-event-info-title"
      className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#dedede] bg-white p-4 shadow-sm lg:h-[28rem]"
    >
      <h2
        id="key-event-info-title"
        className="text-lg font-bold text-[#a34758]"
      >
        Key Event Information:
      </h2>
      <p className="mt-3 text-sm font-bold leading-6 text-[#343a40]">
        Important updates for {conference.title}. Find conference
        announcements, submission information, and other confirmed details
        here.
      </p>

      <div
        aria-label="Conference information updates"
        aria-live="off"
        className="event-info-slider mt-4 h-96 min-w-0 flex-none overflow-hidden rounded-md lg:h-auto lg:min-h-0 lg:flex-1"
      >
        <div className="event-info-slider-track">
          <InfoCards info={info} />
          <InfoCards info={info} hidden />
        </div>
      </div>
    </section>
  );
}

function InfoCards({
  info,
  hidden = false,
}: {
  info: InfoItem[];
  hidden?: boolean;
}) {
  return (
    <div aria-hidden={hidden || undefined} className="space-y-3 pb-3">
      {info.map((item) => (
        <article
          key={item.title}
          className="rounded-md border border-[#e4e9ec] bg-white p-3"
        >
          <h3 className="rounded-sm bg-gradient-to-r from-[#762838] to-[#a34758] px-2.5 py-2 text-sm font-bold leading-5 text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-justify text-sm leading-5 text-[#3d4850]">
            {item.description}
          </p>
          <Link
            href={item.href}
            tabIndex={hidden ? -1 : undefined}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#a34758] hover:text-[#762838] hover:underline"
          >
            <CircleArrowRight aria-hidden="true" className="size-4" />
            {item.linkText}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </article>
      ))}
    </div>
  );
}
