import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function EventUnderConstruction({
  title,
  category,
  description,
  eventPath,
}: {
  title: string;
  category: string;
  description: string;
  eventPath: string;
}) {
  return (
    <section
      aria-labelledby="event-under-construction-title"
      className="rounded-lg border border-[#efdadd] bg-[#fff7f7] p-5 sm:p-8"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a34758]">
        {category}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-[#762838] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-7 rounded-lg border border-dashed border-[#e8c9cd] bg-white px-5 py-8 text-center sm:px-8 sm:py-10">
        <Construction
          aria-hidden="true"
          className="mx-auto size-10 text-[#a34758]"
          strokeWidth={1.6}
        />
        <h3
          id="event-under-construction-title"
          className="mt-4 text-xl font-bold text-[#762838]"
        >
          This page is under construction
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#59656b]">
          {description} The organizers are preparing this information. Please
          check back for updates.
        </p>
        <Link
          href={eventPath}
          className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#a34758] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to event home
        </Link>
      </div>
    </section>
  );
}
