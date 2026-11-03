"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

const participants = [
  {
    quote:
      "GSN gave me the confidence, connections, and thoughtful feedback to take my research from a promising idea to a meaningful international conversation.",
    name: "Dr. Priya Nair",
    role: "Research Fellow",
    institution: "University of Melbourne",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=85",
  },
  {
    quote:
      "The double-blind review process was transparent and constructive. Every stage helped me sharpen both my paper and my presentation.",
    name: "Dr. Aisha Rahman",
    role: "Digital Health Researcher",
    institution: "National University of Singapore",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=256&q=85",
  },
  {
    quote:
      "I met researchers from different disciplines and left with collaborations that are already becoming meaningful projects.",
    name: "Prof. Daniel Okafor",
    role: "Professor of Data Science",
    institution: "University of Lagos",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=85",
  },
  {
    quote:
      "The conference created a welcoming space for rigorous ideas, practical questions, and conversations that continued well beyond the event.",
    name: "Dr. Sofia Rossi",
    role: "Senior Research Fellow",
    institution: "Politecnico di Milano",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=85",
  },
];

function ParticipantCard({
  participant,
}: {
  participant: (typeof participants)[number];
}) {
  return (
    <article className="group relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgba(26,58,50,0.08)] transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,58,50,0.14)]">
      <div className="absolute left-0 top-0 h-1.5 w-2/5 bg-gradient-to-r from-[#1A3A32] to-[#D4AF37] transition-all duration-500 group-hover:w-3/5" />
      <div className="flex h-full flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="absolute -inset-2 rounded-full border border-dashed border-[#D4AF37]/50 transition-transform duration-700 ease-in-out group-hover:rotate-180" />
          <Image
            src={participant.image}
            alt={participant.name}
            width={80}
            height={80}
            className="relative size-20 rounded-full object-cover ring-4 ring-[#F9F9F6] shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 flex size-9 items-center justify-center rounded-full bg-[#D4AF37] text-[#1A3A32] shadow-md">
            <Quote className="size-4 fill-current" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <div className="mb-3 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-3.5 fill-[#D4AF37] text-[#D4AF37]"
              />
            ))}
          </div>
          <blockquote className="line-clamp-5 font-serif text-base font-medium leading-relaxed text-[#1A3A32]">
            “{participant.quote}”
          </blockquote>
          <div className="mt-auto w-full border-t border-gray-100 pt-4">
            <p className="font-bold text-[#1A3A32]">{participant.name}</p>
            <p className="mt-1 text-sm text-gray-500">
              {participant.role} · {participant.institution}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F6] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 size-72 rounded-full bg-[#1A3A32]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-10 size-72 rounded-full bg-[#D4AF37]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:items-end sm:text-left">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
              Participant voices
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1A3A32] sm:text-4xl">
              What our participants say
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-500">
            Real experiences from researchers who have shared ideas, built
            connections, and grown their global academic network.
          </p>
        </div>

        <div className="relative -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-hidden sm:px-0">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F9F9F6] to-transparent sm:w-20" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F9F9F6] to-transparent sm:w-20" />
          <div className="participant-marquee flex w-max gap-3 py-3 sm:gap-4">
            {[...participants, ...participants].map((participant, index) => (
              <div
                key={`${participant.name}-${index}`}
                className="w-[calc(100vw-2.5rem)] flex-none max-[359px]:w-[calc(100vw-3.5rem)] sm:w-[320px] lg:w-[360px]"
              >
                <ParticipantCard participant={participant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
