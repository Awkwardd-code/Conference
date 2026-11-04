import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EventHomePage from "./_components/home/EventHomePage";
import { getPublicConferenceBySlug } from "@/lib/public-conferences";

type EventHomeProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: EventHomeProps): Promise<Metadata> {
  const { slug } = await params;
  const conference = getPublicConferenceBySlug(slug);

  return {
    title: conference ? `${conference.title} | Event` : "Event not found",
    description: conference
      ? `${conference.title}, hosted in ${conference.city}, ${conference.country}.`
      : "The requested event could not be found.",
  };
}

export default function EventHome({ params }: EventHomeProps) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen animate-pulse bg-[#efefef] p-5">
          <div className="mx-auto grid max-w-[1680px] gap-6 lg:grid-cols-[17rem_1fr]">
            <div className="h-[42rem] rounded-lg bg-white" />
            <div className="h-[36rem] rounded-lg bg-white" />
          </div>
        </main>
      }
    >
      <EventHomeContent params={params} />
    </Suspense>
  );
}

async function EventHomeContent({ params }: EventHomeProps) {
  const { slug } = await params;
  const conference = getPublicConferenceBySlug(slug);

  if (!conference) {
    notFound();
  }

  return <EventHomePage conference={conference} />;
}
