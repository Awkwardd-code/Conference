"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";

type Publication = {
  title: string;
  date: string;
  location: string;
  accent: string;
  secondary: string;
  theme: string;
};

const publications: Publication[] = [
  {
    title: "Innovation for Sustainable Growth and Well-Being",
    date: "28th July 2026",
    location: "Global Research Forum",
    accent: "#11A7C8",
    secondary: "#F59E0B",
    theme: "Growth & Well-Being",
  },
  {
    title: "Advancing Resilience, Health, Inclusion, and Sustainable Development",
    date: "20th June 2026",
    location: "Rome, Italy",
    accent: "#D90429",
    secondary: "#1E293B",
    theme: "Resilience & Inclusion",
  },
  {
    title: "Emerging Technologies and Applied Sciences for Human-Centric Development",
    date: "2nd May 2026",
    location: "Antalya, Turkey",
    accent: "#FBBF24",
    secondary: "#0759B5",
    theme: "Emerging Technologies",
  },
  {
    title: "Advancing Healthcare, Diagnostics, and Wellbeing through Innovation",
    date: "13th April 2026",
    location: "Singapore",
    accent: "#42C5E5",
    secondary: "#123A73",
    theme: "Healthcare Innovation",
  },
  {
    title: "Integrating Smart Technologies and Sustainable Solutions",
    date: "10th March 2026",
    location: "Seoul, South Korea",
    accent: "#F59E0B",
    secondary: "#075B5B",
    theme: "Smart Sustainability",
  },
  {
    title: "Building Trustworthy Artificial Intelligence for Public Good",
    date: "18th February 2026",
    location: "Berlin, Germany",
    accent: "#10B981",
    secondary: "#1D4ED8",
    theme: "Responsible AI",
  },
  {
    title: "Water Security, Food Systems, and Climate Adaptation",
    date: "7th January 2026",
    location: "Nairobi, Kenya",
    accent: "#0EA5E9",
    secondary: "#166534",
    theme: "Climate Resilience",
  },
  {
    title: "Inclusive Cities and the Future of Digital Citizenship",
    date: "19th December 2025",
    location: "Toronto, Canada",
    accent: "#F97316",
    secondary: "#7C3AED",
    theme: "Inclusive Cities",
  },
];

function stagedVisibility(index: number, expanded: boolean) {
  if (expanded) {
    return index < 4 ? "flex" : index < 6 ? "hidden md:flex" : "hidden";
  }

  return index < 2 ? "flex" : index === 2 ? "hidden md:flex" : "hidden";
}

export default function FeaturedPublications() {
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#050936] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
            Research library
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Featured Publications
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-blue-100/80 md:text-base">
            Access the newest research publications and academic insights from
            global scholars.
          </p>
        </div>

        <div className={`home-staged-grid mt-9 grid grid-cols-2 items-stretch gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-3 lg:gap-7 ${hasLoadedMore ? "is-expanded" : ""}`}>
          {publications.slice(0, 6).map((publication, index) => (
            <Link
              key={publication.title}
              href="/journal/publications"
              className={`${stagedVisibility(index, hasLoadedMore)} group w-full min-w-0 cursor-pointer`}
              aria-label={`Read ${publication.title}`}
            >
              <article className="relative flex h-full min-w-0 w-full flex-col">
                <div
                  className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/50 bg-[#F8FAFC] p-2 shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[0_24px_45px_rgba(0,0,0,0.42)]"
                >
                  <div
                    className="absolute -right-8 top-8 h-16 w-40 rotate-45 opacity-95"
                    style={{ backgroundColor: publication.secondary }}
                  />
                  <div
                    className="absolute -left-8 bottom-12 h-12 w-44 -rotate-12 opacity-90"
                    style={{ backgroundColor: publication.accent }}
                  />
                  <div className="relative flex h-full flex-col overflow-hidden border border-slate-300/70 bg-white px-3 py-4 text-[#12305A]">
                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#A53E42] via-[#D4AF37] to-[#12305A]" />
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="font-sans text-[10px] font-black tracking-[0.08em] text-[#A53E42]">
                        RESEARCH
                      </span>
                      <span className="text-[8px] font-bold tracking-[0.2em] text-[#A53E42]">
                        LEAGUES
                      </span>
                    </div>
                    <div className="mt-4 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <span className="flex items-center gap-1 text-[7px] font-bold uppercase tracking-[0.16em] text-slate-500">
                            <BookOpen className="size-2.5" />
                            Featured
                          </span>
                          <span className="text-[9px] font-black text-[#A53E42]">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="text-[8px] font-bold uppercase leading-tight tracking-wide text-[#12305A]">
                          {publication.title}
                        </p>
                        <div
                          className="mt-3 h-1 w-3/4"
                          style={{ backgroundColor: publication.accent }}
                        />
                        <div className="mt-3 flex size-12 items-center justify-center rounded-full border-4 border-dotted border-[#10A37F] text-center text-[7px] font-black leading-tight text-[#12305A]">
                          SDGs
                        </div>
                        <div className="mt-3 flex gap-1">
                          <span className="h-1 w-5 rounded-full bg-[#A53E42]" />
                          <span className="h-1 w-5 rounded-full bg-[#F59E0B]" />
                          <span className="h-1 w-5 rounded-full bg-[#10A37F]" />
                          <span className="h-1 w-5 rounded-full bg-[#123A73]" />
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 flex items-end justify-between gap-1">
                          <span className="text-[8px] font-bold text-[#12305A]">
                            {publication.theme}
                          </span>
                          <Sparkles
                            className="size-4"
                            style={{ color: publication.accent }}
                          />
                        </div>
                        <div
                          className="h-1.5 w-full"
                          style={{ backgroundColor: publication.secondary }}
                        />
                        <p className="mt-2 text-[7px] font-bold uppercase tracking-wide text-slate-500">
                          {publication.location}
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-5"
                      style={{ backgroundColor: publication.accent }}
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
                      Publication date
                    </p>
                    <p className="mt-1 text-xs font-bold text-[#F43F5E]">
                      {publication.date}
                    </p>
                  </div>
                  <span className="flex size-8 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 transition-colors duration-500 group-hover:bg-[#D4AF37]">
                    <ArrowUpRight className="size-4 text-[#D4AF37] transition-all duration-500 group-hover:text-[#050936] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-12">
          {hasLoadedMore ? (
            <Link
              href="/journal/publications"
              className="home-action-button home-action-button-secondary w-full max-w-[16rem] sm:w-auto sm:max-w-none"
            >
              Explore all publications
              <ArrowUpRight className="size-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setHasLoadedMore(true)}
              className="home-action-button home-action-button-primary w-full max-w-[16rem] sm:w-auto sm:max-w-none"
            >
              Load More Publications
              <ArrowUpRight className="size-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
