"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  Factory,
  Globe,
  HeartPulse,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Awardee = {
  id: number;
  date: string;
  location: string;
  conference: string;
  award: string;
  name: string;
  university: string;
  paper: string;
  sdgIcon: LucideIcon;
  sdgLabel: string;
  sdgDescription: string;
};

const awardees: Awardee[] = [
  {
    id: 1,
    date: "July 2, 2025",
    location: "Nanjing, China",
    conference: "ICCSC-25",
    award: "Best Paper Presentation Award",
    name: "Icy Bing Ni",
    university: "The Hang Seng University of Hong Kong",
    paper: "Augmented Data for the Prediction and Evaluation of Customer Churn",
    sdgIcon: Factory,
    sdgLabel: "SDG 9: Industry, Innovation and Infrastructure",
    sdgDescription:
      "For advancing data-driven decision-making in digital business systems",
  },
  {
    id: 2,
    date: "June 18, 2025",
    location: "Paris, France",
    conference: "ICGSD-25",
    award: "Best Research Presentation Award",
    name: "Dr. Maya Chen",
    university: "University of Melbourne",
    paper: "Inclusive Innovation Models for Sustainable Urban Development",
    sdgIcon: Globe,
    sdgLabel: "SDG 11: Sustainable Cities and Communities",
    sdgDescription:
      "For connecting inclusive research with resilient urban planning",
  },
  {
    id: 3,
    date: "May 27, 2025",
    location: "Rome, Italy",
    conference: "WCSI-25",
    award: "Outstanding Academic Award",
    name: "Prof. Daniel Okafor",
    university: "University of Lagos",
    paper: "Expanding Equitable Access to Digital Learning Ecosystems",
    sdgIcon: HeartPulse,
    sdgLabel: "SDG 4: Quality Education",
    sdgDescription:
      "For developing evidence-based approaches to accessible education",
  },
  {
    id: 4,
    date: "April 11, 2025",
    location: "Berlin, Germany",
    conference: "FAR-25",
    award: "Innovation in Research Award",
    name: "Dr. Sofia Rossi",
    university: "Politecnico di Milano",
    paper: "Climate-Resilient Futures for Coastal Communities",
    sdgIcon: Globe,
    sdgLabel: "SDG 13: Climate Action",
    sdgDescription:
      "For translating climate research into practical community solutions",
  },
  {
    id: 5,
    date: "March 22, 2025",
    location: "Singapore",
    conference: "ICMST-25",
    award: "Emerging Researcher Award",
    name: "Dr. Aisha Rahman",
    university: "National University of Singapore",
    paper: "Digital Health Systems for Underserved Communities",
    sdgIcon: HeartPulse,
    sdgLabel: "SDG 3: Good Health and Well-Being",
    sdgDescription:
      "For improving access to responsible and inclusive digital healthcare",
  },
  {
    id: 6,
    date: "February 14, 2025",
    location: "Toronto, Canada",
    conference: "ICERI-25",
    award: "Excellence in Research Award",
    name: "Prof. Liam O'Connor",
    university: "University of Toronto",
    paper: "Building Resilient Learning Communities Through Open Research",
    sdgIcon: Globe,
    sdgLabel: "SDG 4: Quality Education",
    sdgDescription:
      "For strengthening accessible and collaborative approaches to education",
  },
  {
    id: 7,
    date: "January 30, 2025",
    location: "Seoul, South Korea",
    conference: "ICGTE-25",
    award: "Sustainable Innovation Award",
    name: "Dr. Min-Jae Park",
    university: "Seoul National University",
    paper: "Smart Infrastructure Strategies for Low-Carbon Cities",
    sdgIcon: Factory,
    sdgLabel: "SDG 9: Industry, Innovation and Infrastructure",
    sdgDescription:
      "For connecting technology innovation with sustainable urban development",
  },
  {
    id: 8,
    date: "December 9, 2024",
    location: "Cape Town, South Africa",
    conference: "ICSD-24",
    award: "Outstanding Contribution Award",
    name: "Dr. Naledi Mokoena",
    university: "University of Cape Town",
    paper: "Community-Led Models for Climate Adaptation",
    sdgIcon: Globe,
    sdgLabel: "SDG 13: Climate Action",
    sdgDescription:
      "For advancing practical, community-centered responses to climate change",
  },
  {
    id: 9,
    date: "November 18, 2024",
    location: "Helsinki, Finland",
    conference: "ICRSE-24",
    award: "Best Applied Research Award",
    name: "Dr. Elena Virtanen",
    university: "University of Helsinki",
    paper: "Evidence-Based Models for Inclusive Regional Innovation",
    sdgIcon: Globe,
    sdgLabel: "SDG 10: Reduced Inequalities",
    sdgDescription:
      "For designing practical pathways to more inclusive innovation ecosystems",
  },
  {
    id: 10,
    date: "October 6, 2024",
    location: "Melbourne, Australia",
    conference: "ICLRS-24",
    award: "Young Researcher Award",
    name: "Dr. Noah Williams",
    university: "Monash University",
    paper: "Open Knowledge Networks for Resilient Communities",
    sdgIcon: HeartPulse,
    sdgLabel: "SDG 17: Partnerships for the Goals",
    sdgDescription:
      "For strengthening collaboration between researchers and local communities",
  },
];

function stagedVisibility(index: number, expanded: boolean) {
  if (expanded) {
    return index < 4 ? "flex" : index < 6 ? "hidden md:flex" : "hidden";
  }

  return index < 2 ? "flex" : index === 2 ? "hidden md:flex" : "hidden";
}

export default function RecentAwardees() {
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const handleLoadMore = () => {
    setHasLoadedMore(true);
  };

  return (
    <section className="w-full bg-[#F9F9F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <h2 className="font-serif text-2xl text-[#1A3A32] sm:text-3xl md:text-4xl">
            Recent <span className="text-[#D4AF37]">Awardees</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
            Celebrating outstanding researchers honoured at our recent
            international conferences for their innovative contributions to
            global knowledge.
          </p>
        </div>

        <div className={`home-staged-grid grid grid-cols-2 gap-4 pt-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${hasLoadedMore ? "is-expanded" : ""}`}>
          {awardees.slice(0, 6).map((awardee) => {
            const SdgIcon = awardee.sdgIcon;

            return (
              <Card
                key={awardee.id}
                className={`${stagedVisibility(awardees.indexOf(awardee), hasLoadedMore)} group relative h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)]`}
              >
                <div className="absolute left-0 top-0 z-20 h-1.5 w-0 bg-gradient-to-r from-[#1A3A32] to-[#D4AF37] transition-all duration-500 ease-in-out group-hover:w-full" />
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A3A32] to-[#D4AF37] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

                <div className="absolute left-1/2 top-2 z-30 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#D4AF37] to-[#1A3A32] shadow-lg sm:top-3 sm:size-14 sm:border-4">
                  <Award className="size-5 text-white sm:size-8" />
                </div>

                <CardContent className="relative z-10 flex flex-grow flex-col items-center bg-white p-2 pt-14 transition-colors duration-500 ease-in-out group-hover:bg-transparent sm:p-4 sm:pt-20">
                  <div className="mb-2 flex flex-col items-center justify-center gap-0.5 text-[8px] text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-gray-100 sm:flex-row sm:gap-x-2 sm:gap-y-1 sm:text-[11px]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="size-2.5 text-[#D4AF37] sm:size-3" />
                      {awardee.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-2.5 text-[#D4AF37] sm:size-3" />
                      {awardee.location}
                    </span>
                  </div>

                  <span className="mb-2 rounded-full bg-[#F9F9F6] px-2 py-0.5 text-[8px] font-bold text-[#1A3A32] transition-colors duration-500 ease-in-out group-hover:bg-white/20 group-hover:text-white sm:mb-3 sm:px-3 sm:text-[11px]">
                    {awardee.conference}
                  </span>

                  <p className="mb-2 text-center text-[8px] font-bold uppercase tracking-[0.08em] leading-3 text-[#D4AF37] transition-colors duration-500 ease-in-out group-hover:text-white sm:text-[10px] sm:leading-4 sm:tracking-[0.12em]">
                    {awardee.award}
                  </p>

                  <h3 className="mb-0.5 line-clamp-2 text-center font-serif text-[13px] font-bold leading-tight text-[#1A3A32] transition-colors duration-500 ease-in-out group-hover:text-white sm:text-base">
                    {awardee.name}
                  </h3>
                  <p className="mb-2 line-clamp-2 text-center text-[9px] italic leading-3 text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-gray-100 sm:mb-3 sm:text-[11px] sm:leading-4">
                    {awardee.university}
                  </p>

                  <div className="relative mb-2 hidden min-h-20 w-full flex-grow overflow-hidden rounded-md bg-[#F9F9F6] p-2 text-left transition-colors duration-500 ease-in-out group-hover:bg-white/10 sm:flex sm:mb-4 sm:min-h-0 sm:p-3">
                    <div className="absolute left-0 top-0 h-0 w-1 bg-[#D4AF37] transition-all duration-500 ease-in-out group-hover:h-full" />
                    <p>
                      <span className="text-[9px] font-bold text-[#1A3A32] transition-colors duration-500 ease-in-out group-hover:text-white sm:text-xs">
                        Paper:
                      </span>{" "}
                      <span className="line-clamp-4 text-[9px] leading-3 text-gray-700 transition-colors duration-500 ease-in-out group-hover:text-[#1A3A32] sm:text-xs sm:leading-relaxed">
                        {awardee.paper}
                      </span>
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 mt-auto hidden min-h-20 items-start gap-1 border-t border-dashed border-gray-200 bg-white p-2 pt-2 text-left transition-colors duration-500 ease-in-out group-hover:bg-transparent group-hover:border-white/30 sm:flex sm:min-h-0 sm:gap-2 sm:p-4 sm:pt-3">
                  <div className="mt-0.5 flex-shrink-0 text-[#1A3A32] transition-colors duration-500 ease-in-out group-hover:text-white">
                    <SdgIcon className="size-3 shrink-0 sm:size-4" />
                  </div>
                  <p className="line-clamp-4 text-[9px] leading-3 text-gray-600 transition-colors duration-500 ease-in-out group-hover:text-gray-100 sm:text-[11px] sm:leading-relaxed">
                    {awardee.sdgDescription}{" "}
                    <strong className="font-semibold text-[#1A3A32] transition-colors duration-500 ease-in-out group-hover:text-white">
                      ({awardee.sdgLabel})
                    </strong>
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          {!hasLoadedMore ? (
            <button
              type="button"
              onClick={handleLoadMore}
              className="home-action-button home-action-button-primary cursor-pointer"
            >
              Load More Awardees
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          ) : (
            <Link
              href="/conferences"
              className="home-action-button home-action-button-secondary"
            >
              View More Awardees
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
