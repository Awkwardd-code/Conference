import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import EventSiteHeader from "./_components/EventSiteHeader";
import { getPublicConferenceBySlug } from "@/lib/public-conferences";

type EventLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>;

export default function EventLayout({ children, params }: EventLayoutProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen animate-pulse bg-[#fff7f7]">
          <div className="h-11 bg-[#762838]" />
          <div className="h-20 bg-white" />
          <div className="h-72 bg-[#49202a]" />
        </div>
      }
    >
      <EventSite params={params}>{children}</EventSite>
    </Suspense>
  );
}

async function EventSite({ children, params }: EventLayoutProps) {
  const { slug } = await params;
  const conference = getPublicConferenceBySlug(slug);

  if (!conference) {
    notFound();
  }

  const eventPath = `/event/${conference.slug}`;
  const year = conference.startDate.slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col bg-[#fffafa] text-[#292c31]">
      <EventSiteHeader conference={conference} />
      <div className="flex-1">{children}</div>

      <footer className="mt-auto bg-[#762838] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <Link
            href={eventPath}
            className="text-sm font-bold tracking-wide transition hover:text-[#f1c2c8]"
          >
            {conference.acronym} · {year}
          </Link>
          <p className="text-xs leading-5 text-white/85 sm:text-sm">
            © {year} {conference.organizer}. All rights reserved.
          </p>
          <Link
            href={`${eventPath}/contact`}
            className="text-sm font-semibold underline decoration-[#f1c2c8]/60 underline-offset-4 transition hover:text-[#f1c2c8]"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}
