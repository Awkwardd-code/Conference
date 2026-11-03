import {
  Building2,
  Globe2,
  Landmark,
  Lightbulb,
  Microscope,
  University,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Institution = {
  name: string;
  shortName: string;
  category: string;
  icon: LucideIcon;
};

const institutions: Institution[] = [
  {
    name: "Oxford University",
    shortName: "OU",
    category: "Academic partner",
    icon: University,
  },
  {
    name: "University of Toronto",
    shortName: "UT",
    category: "Research network",
    icon: Landmark,
  },
  {
    name: "National University",
    shortName: "NU",
    category: "Knowledge partner",
    icon: Building2,
  },
  {
    name: "Global Research Institute",
    shortName: "GRI",
    category: "Research institute",
    icon: Microscope,
  },
  {
    name: "European Academy",
    shortName: "EA",
    category: "Academic partner",
    icon: Globe2,
  },
  {
    name: "Innovation Lab",
    shortName: "IL",
    category: "Innovation partner",
    icon: Lightbulb,
  },
];

export default function InstitutionalLogos() {
  const marqueeInstitutions = [...institutions, ...institutions];

  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            Our academic network
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1A3A32] sm:text-4xl">
            Institutions shaping meaningful research
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Scholars from leading universities and research communities
            contribute to the Global Scholarly Nexus.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
          />
          <div className="research-logo-marquee flex w-max gap-4 py-3">
            {marqueeInstitutions.map((institution, index) => {
              const InstitutionIcon = institution.icon;

              return (
                <article
                  key={`${institution.name}-${index}`}
                  className="group flex h-28 w-64 items-center gap-4 rounded-2xl border border-gray-100 bg-[#F9F9F6] px-5 shadow-[0_4px_18px_rgb(0,0,0,0.04)] transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(26,58,50,0.12)]"
                >
                  <div className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-[#1A3A32] text-[#D4AF37] shadow-md transition-all duration-500 ease-in-out group-hover:bg-[#D4AF37] group-hover:text-[#1A3A32]">
                    <div className="absolute inset-1 rounded-full border border-current/30" />
                    <InstitutionIcon className="size-6" />
                    <span className="absolute -bottom-1 -right-1 rounded-full border-2 border-[#F9F9F6] bg-white px-1.5 py-0.5 text-[8px] font-bold text-[#1A3A32]">
                      {institution.shortName}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 font-serif text-base font-bold leading-tight text-[#1A3A32] transition-colors duration-500 group-hover:text-[#D4AF37]">
                      {institution.name}
                    </h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500">
                      {institution.category}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
