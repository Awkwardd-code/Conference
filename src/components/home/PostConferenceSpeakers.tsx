"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

type Speaker = {
  id: number;
  name: string;
  department: string;
  designation: string;
  organization: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Amarnath Reddy Kallam",
    department: "Bachelor of Engineering",
    designation: "Gen AI Engineer",
    organization: "Jawaharlal Nehru Technological University",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Mr Bhuman Vyas",
    department: "Software Engineer",
    designation: "Senior Software Developer",
    organization: "Credit Acceptance",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Dr. J. Somasekar",
    department: "Computer Science",
    designation: "Professor",
    organization: "JAIN University, Bangalore",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "Dr. Priya Nair",
    department: "Information Systems",
    designation: "Associate Professor",
    organization: "University of Kerala",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 5,
    name: "Prof. Daniel Okafor",
    department: "Data Science",
    designation: "Research Director",
    organization: "University of Lagos",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 6,
    name: "Dr. Sofia Rossi",
    department: "Sustainable Engineering",
    designation: "Senior Research Fellow",
    organization: "Politecnico di Milano",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 7,
    name: "Dr. Elena Virtanen",
    department: "Environmental Policy",
    designation: "Research Director",
    organization: "University of Helsinki",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 8,
    name: "Prof. Noah Williams",
    department: "Public Health",
    designation: "Professor",
    organization: "Monash University",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 9,
    name: "Dr. Laila Mensah",
    department: "Development Studies",
    designation: "Senior Lecturer",
    organization: "University of Ghana",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c81f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
];

function stagedVisibility(index: number, expanded: boolean) {
  if (expanded) {
    return index < 4 ? "flex" : index < 6 ? "hidden md:flex" : "hidden";
  }

  return index < 2 ? "flex" : index === 2 ? "hidden md:flex" : "hidden";
}

export default function PostConferenceSpeakers() {
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const handleLoadMore = () => {
    setHasLoadedMore(true);
  };

  return (
    <section className="w-full bg-[#F9F9F6] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center font-serif text-2xl leading-tight text-[#1A3A32] sm:text-3xl md:text-4xl">
          Our Past Conference <span className="text-[#D4AF37]">Speakers</span>
        </h2>
        <p className="mb-10 text-center text-sm text-gray-500 sm:mb-16 md:text-base">
          Distinguished experts who have shared their knowledge and insights at
          our previous international conferences.
        </p>

        <div className={`home-staged-grid grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 ${hasLoadedMore ? "is-expanded" : ""}`}>
          {speakers.slice(0, 6).map((speaker, index) => (
            <article
              key={speaker.id}
              className={`${stagedVisibility(index, hasLoadedMore)} group relative min-w-0 cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] sm:p-6 ${
                index >= 3 ? "speaker-card-reveal" : ""
              }`}
            >
              <div className="absolute left-0 top-0 z-20 h-1.5 w-0 bg-gradient-to-r from-[#1A3A32] to-[#D4AF37] transition-all duration-500 ease-in-out group-hover:w-full" />
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A3A32] to-[#D4AF37] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

              <div className="relative z-10 flex w-full flex-col items-center">
                <div className="relative mb-4">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={112}
                    height={112}
                    className="size-20 rounded-full object-cover ring-4 ring-[#D4AF37] shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:ring-white sm:size-28"
                  />
                  <span className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#1A3A32] text-[10px] font-bold text-white transition-colors duration-500 group-hover:bg-[#D4AF37] group-hover:text-[#1A3A32]">
                    {String(speaker.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-1 line-clamp-2 text-sm font-serif font-bold leading-tight text-[#1A3A32] transition-colors duration-500 group-hover:text-white sm:text-lg">
                  {speaker.name}
                </h3>
                <p className="mb-3 line-clamp-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] transition-colors duration-500 group-hover:text-white sm:mb-5 sm:text-xs sm:tracking-[0.12em]">
                  {speaker.designation}
                </p>

                <div className="w-full space-y-2 border-t border-gray-100 pt-4 text-left transition-colors duration-500 group-hover:border-white/30">
                  <p className="text-[10px] leading-3 sm:text-xs sm:leading-relaxed">
                    <span className="font-bold text-[#1A3A32] transition-colors duration-500 group-hover:text-[#D4AF37]">
                      Department:
                    </span>{" "}
                    <span className="text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                      {speaker.department}
                    </span>
                  </p>
                  <p className="text-[10px] leading-3 sm:text-xs sm:leading-relaxed">
                    <span className="font-bold text-[#1A3A32] transition-colors duration-500 group-hover:text-[#D4AF37]">
                      Organization:
                    </span>{" "}
                    <span className="text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
                      {speaker.organization}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!hasLoadedMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="home-action-button home-action-button-primary cursor-pointer"
            >
              Load More Speakers
              <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
            </button>
          </div>
        )}
        {hasLoadedMore && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/speaker/past-speakers"
              className="home-action-button home-action-button-secondary"
            >
              View More Speakers
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
