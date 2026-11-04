import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Factory,
  GraduationCap,
  MapPin,
} from "lucide-react";

const awardees = [
  {
    conference: "ICIAIL-26",
    date: "October 29, 2026",
    location: "Yokohama, Japan",
    name: "Vackova Dana, Lam W, Tam C – The University of Hong Kong",
    paper:
      "A pathway for lifelong learning: Interprofessional training for Future Healthcare Professionals at the University of Hong Kong",
    sdg: "SDG 4: Quality Education",
    icon: GraduationCap,
  },
  {
    conference: "ICISP-26",
    date: "October 28, 2026",
    location: "Jeddah, Saudi Arabia",
    name: "Omar Alhafidh – Mid Cheshire Hospitals NHS FT",
    paper:
      "Optimising Seton Techniques in the Management of Perianal Fistula: A Contemporary Overview",
    sdg: "SDG 9: Industry, Innovation and Infrastructure",
    icon: Factory,
  },
];

export default function RecentEventAwardees() {
  return (
    <section
      aria-labelledby="recent-event-awardees-title"
      className="mx-auto mt-10 w-full max-w-6xl border-t border-[#d8dde1] px-4 pt-8 sm:mt-12 sm:px-6 sm:pt-10"
    >
      <header className="text-center">
        <h2
          id="recent-event-awardees-title"
          className="text-2xl font-extrabold uppercase text-[#202b33] sm:text-3xl"
        >
          Recent <span className="text-[#762838]">Awardees</span>
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-1 w-12 rounded-full bg-[#c96c78]"
        />
      </header>

      <ul className="mt-7 grid items-stretch gap-4 sm:gap-5 md:grid-cols-2">
        {awardees.map((awardee) => {
          const SdgIcon = awardee.icon;

          return (
            <li
              key={awardee.conference}
              className="group relative min-w-0 overflow-hidden rounded-lg border border-[#e7e7e7] bg-white shadow-[0_5px_20px_rgba(30,30,30,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(30,30,30,0.1)]"
            >
              <div className="h-1 bg-gradient-to-r from-[#762838] via-[#c96c78] to-[#762838]" />
              <article className="p-4 sm:p-5">
                <div className="flex min-w-0 flex-col items-start justify-between gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                  <span className="rounded-sm bg-[#a34758] px-2.5 py-1 text-[0.65rem] font-bold text-white">
                    {awardee.conference}
                  </span>
                  <div className="flex min-w-0 flex-wrap gap-x-3 gap-y-1 text-xs text-[#59656b]">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays
                        aria-hidden="true"
                        className="size-3.5 shrink-0 text-[#a34758]"
                      />
                      {awardee.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin
                        aria-hidden="true"
                        className="size-3.5 shrink-0 text-[#a34758]"
                      />
                      {awardee.location}
                    </span>
                  </div>
                </div>

                <p className="mt-3 flex items-center gap-1.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-[#a34758]">
                  <Award aria-hidden="true" className="size-4" />
                  Best Paper Presentation Award
                </p>
                <h3 className="mt-2 break-words text-base font-bold leading-snug text-[#202b33] sm:text-lg">
                  {awardee.name}
                </h3>

                <div className="mt-3 border-l-[3px] border-[#c96c78] bg-[#fff7f7] px-3 py-2.5">
                  <p className="text-[0.6rem] font-bold uppercase tracking-wide text-[#762838]">
                    Paper title
                  </p>
                  <p className="mt-1 break-words font-serif text-sm leading-5 text-[#30343a]">
                    {awardee.paper}
                  </p>
                </div>

                <p className="mt-3 flex items-start gap-2 border-t border-[#ededed] pt-3 text-xs leading-5 text-[#44515a]">
                  <SdgIcon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-[#a34758]"
                  />
                  {awardee.sdg}
                </p>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mt-7 text-center">
        <Link
          href="/conferences"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#a34758] px-7 text-xs font-extrabold uppercase text-white transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          View all awardees
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
