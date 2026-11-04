import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Download,
  FileText,
  Mail,
} from "lucide-react";
import type { PublicConference } from "@/lib/public-conferences";

export default function EventSidebarResources({
  conference,
}: {
  conference: PublicConference;
}) {
  const eventPath = `/event/${conference.slug}`;
  const resources = [
    { label: "Conference Flyer", path: "brochure" },
    { label: "Sample Abstract", path: "submission/call-for-papers" },
    { label: "Sample Full Paper", path: "submission/guidelines" },
  ];

  return (
    <>
      <section aria-labelledby="event-downloads-title" className="space-y-3">
        <h2
          id="event-downloads-title"
          className="text-center text-2xl font-extrabold text-[#a34758]"
        >
          Downloads
        </h2>
        <ul className="space-y-2.5">
          {resources.map(({ label, path }) => (
            <li key={label}>
              <Link
                href={`${eventPath}/${path}`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#762838] to-[#a34758] px-3 py-2 text-center text-sm font-bold text-white shadow-md transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
              >
                <Download aria-hidden="true" className="size-4" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href={`${eventPath}/journals-publication`}
        aria-label="Explore journal publication information"
        className="block overflow-hidden rounded-lg border border-[#e8c9cd] bg-white p-2 shadow-sm transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
      >
        <div className="overflow-hidden rounded-md border border-[#e1e5eb]">
          <div className="bg-gradient-to-br from-[#762838] via-[#a34758] to-[#49202a] px-4 py-6 text-center text-white">
            <p className="text-lg font-extrabold leading-tight sm:text-xl">
              Continue Your Research Publication Journey
            </p>
            <BookOpen
              aria-hidden="true"
              className="mx-auto mt-5 size-10 text-[#f1c2c8]"
            />
          </div>
          <div className="bg-gradient-to-b from-[#fffafa] to-[#f8e9eb] px-3 py-5 text-center">
            <p className="text-xl font-extrabold leading-tight text-[#762838]">
              Research &amp; Publication
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#735b60]">
              Explore journal publication information
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#a34758] px-4 py-2 text-sm font-bold text-white">
              Learn More
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </div>
        </div>
        <p className="px-2 py-2 text-center text-xs leading-5 text-[#697176]">
          Review publication options and details for this event.
        </p>
      </Link>

      <Link
        href={`${eventPath}/contact`}
        className="block rounded-lg border border-[#efdadd] bg-white p-4 shadow-sm transition hover:border-[#a34758] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
      >
        <span className="flex items-center gap-2 font-bold text-[#762838]">
          <Mail aria-hidden="true" className="size-4 shrink-0" />
          Have questions?
        </span>
        <span className="mt-2 block text-sm leading-5 text-[#735b60]">
          Contact the organizers for confirmed event information and updates.
        </span>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#a34758]">
          Contact the organizer
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </span>
      </Link>

      <Link
        href={`${eventPath}/about/about-conference`}
        className="block rounded-lg border border-[#efdadd] bg-white p-4 shadow-sm transition hover:border-[#c96c78] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
      >
        <span className="flex items-center gap-2 font-bold text-[#a34758]">
          <FileText aria-hidden="true" className="size-4 shrink-0" />
          Explore the conference
        </span>
        <span className="mt-2 block text-sm leading-5 text-[#66594e]">
          Learn about the event, its theme, and the organizing team.
        </span>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#a34758]">
          Read the overview
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </span>
      </Link>

    </>
  );
}
