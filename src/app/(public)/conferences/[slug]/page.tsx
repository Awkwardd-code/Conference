import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import { publicConferences } from "@/lib/public-conferences";

type LegacyConferencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publicConferences.map((conference) => ({
    slug: String(conference.id),
  }));
}

export default function LegacyConferencePage({
  params,
}: LegacyConferencePageProps) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen animate-pulse bg-[#f9f9f6] p-8">
          <div className="mx-auto h-40 max-w-4xl rounded-2xl bg-white" />
        </main>
      }
    >
      <RedirectToEvent params={params} />
    </Suspense>
  );
}

async function RedirectToEvent({
  params,
}: LegacyConferencePageProps): Promise<never> {
  const { slug } = await params;
  const conferenceId = Number(slug);
  const conference = Number.isSafeInteger(conferenceId)
    ? publicConferences.find((item) => item.id === conferenceId)
    : undefined;

  if (!conference) {
    notFound();
  }

  return redirect(`/event/${conference.slug}`);
}
