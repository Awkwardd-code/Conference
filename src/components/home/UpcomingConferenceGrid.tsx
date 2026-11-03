"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useState, type CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const conferences = [
  {
    id: 11,
    dates: "7th November, 2026",
    location: "University of Rajshahi, Bangladesh",
    title: "Research Boothcamp-1 on Artificial Intelligence and Cyber Law",
    acronym: "(AI & CYBER LAW)",
    organizer: "Rajshahi University Research & Journal Club, Department of Law",
  },
  {
    id: 1,
    dates: "9th - 10th February, 2027",
    location: "Malaga, Spain",
    title:
      "International Conference on Soil Fertility and Nutrient Cycling in Agroecosystems",
    acronym: "(ICSFNC)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 2,
    dates: "18th - 19th February, 2027",
    location: "Mexico City, Mexico",
    title:
      "International Conference on Real Estate and Economic Development Linkages",
    acronym: "(ICREEDL)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 3,
    dates: "17th - 18th November, 2026",
    location: "Crete, Greece",
    title: "International Conference on Advances in Clinical Medicine Research",
    acronym: "(ICACMR)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 4,
    dates: "12th - 13th April, 2027",
    location: "Phuket, Thailand",
    title:
      "International Conference on Pediatric Cardiology and Heart Transplantation",
    acronym: "(ICPCHT)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 5,
    dates: "29th - 30th December, 2026",
    location: "Kumasi, Ghana",
    title: "International Conference on Political Movements and Social Change",
    acronym: "(ICPMSC)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 6,
    dates: "3rd - 4th May, 2027",
    location: "Vienna, Austria",
    title:
      "International Conference on Aerospace, Mechanical, Automotive and Materials Engineering",
    acronym: "(ICAMAME)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 7,
    dates: "5th - 6th November, 2026",
    location: "Munich, Germany",
    title:
      "International Conference on Globalization, Poverty, and Urban Human Security",
    acronym: "(ICGPUHS)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 8,
    dates: "26th - 27th May, 2027",
    location: "Saint Petersburg, Russia",
    title:
      "International Conference on Property Dispute Resolution and Real Estate Litigation",
    acronym: "(ICPDRREL)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 9,
    dates: "14th - 15th June, 2027",
    location: "Lisbon, Portugal",
    title: "International Conference on Digital Education and Lifelong Learning",
    acronym: "(ICDELL)",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 10,
    dates: "21st - 22nd July, 2027",
    location: "Cape Town, South Africa",
    title: "International Conference on Climate Finance and Sustainable Policy",
    acronym: "(ICCFSP)",
    organizer: "Global Scholarly Nexus",
  },
];

function stagedVisibility(index: number, expanded: boolean) {
  if (expanded) {
    return index < 4 ? "flex" : index < 6 ? "hidden md:flex" : "hidden";
  }

  return index < 2 ? "flex" : index === 2 ? "hidden md:flex" : "hidden";
}

export default function UpcomingConferenceGrid() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const loadMoreConferences = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    window.setTimeout(() => {
      setHasLoadedMore(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="w-full bg-[#F9F9F6] px-4 py-12 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-[#1A3A32] sm:mb-12 sm:text-4xl md:text-5xl">
          Upcoming <span className="text-[#D4AF37]">Conferences</span>
        </h2>

        <div className={`home-staged-grid grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${hasLoadedMore ? "is-expanded" : ""}`}>
          {conferences.slice(0, 6).map((conference, index) => (
            <Card
              key={conference.id}
              style={
                {
                  "--conference-reveal-delay":
                    index >= 6 ? `${(index - 5) * 140}ms` : "0ms",
                } as CSSProperties
              }
              className={`${stagedVisibility(index, hasLoadedMore)} group h-full flex-col overflow-hidden rounded-2xl border border-gray-100/50 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] ${
                index >= 6 ? "conference-card-reveal" : ""
              }`}
            >
              <div className="relative flex min-h-[110px] flex-col items-center justify-center overflow-hidden border-b border-gray-100 bg-[#F9F9F6] p-5 text-center">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-8 w-8 rounded-br-full bg-[#1A3A32]/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-12 w-12 rounded-bl-full bg-[#D4AF37]/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/4 h-4 w-16 rotate-45 bg-[#1A3A32]/5"
                />
                <p className="relative z-10 mb-1 text-sm font-bold tracking-wide text-[#1A3A32]">
                  {conference.dates}
                </p>
                <p className="relative z-10 flex items-center gap-1 text-sm font-medium text-[#D4AF37]">
                  <MapPin className="size-3.5" />
                  {conference.location}
                </p>
              </div>

              <CardContent className="relative z-10 flex-grow bg-white p-5">
                <h3 className="line-clamp-3 text-[15px] font-serif font-bold leading-snug text-[#1A3A32] transition-colors group-hover:text-[#D4AF37]">
                  {conference.title}
                </h3>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  {conference.acronym}
                </p>
                {"organizer" in conference ? (
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    Organized by {conference.organizer}
                  </p>
                ) : null}
              </CardContent>

              <CardFooter className="mt-auto flex items-center justify-between border-t border-gray-50/50 p-5 pt-4">
                <Link
                  href={`/conferences/${conference.id}`}
                  className="home-card-link group/link"
                >
                  View More
                  <ArrowUpRight className="size-4 text-[#1A3A32] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#D4AF37]" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-16">
          {!hasLoadedMore ? (
            <button
              type="button"
              onClick={loadMoreConferences}
              disabled={isLoading}
              aria-busy={isLoading}
              className="home-action-button home-action-button-primary w-full max-w-[22rem] cursor-pointer disabled:cursor-wait disabled:opacity-80 sm:w-auto"
            >
              {isLoading ? (
                <>
                  Loading
                  <span
                    aria-hidden="true"
                    className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  />
                </>
              ) : (
                <>
                  Load More Conferences
                  <ArrowUpRight className="size-5" />
                </>
              )}
            </button>
          ) : (
            <Link
              href="/conferences"
              className="home-action-button home-action-button-secondary"
            >
              View All Conferences
              <ArrowUpRight className="size-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
