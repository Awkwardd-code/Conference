"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "It was a very endearing and enjoyable experience for me. I've learnt a lot from it and was happy to see positive responses from the audience. Thank you for giving me the opportunity.",
    name: "Mohammed Fuad",
    affiliation: "Al-Neelain University, Sudan.",
    initials: "MF",
  },
  {
    quote:
      "Huge thanks for inviting me to attend this very interesting and informative Conference. The organization was excellent, thanks to all the efforts you and your team have made.",
    name: "Ayade Salah Ayade",
    affiliation: "",
    initials: "AA",
  },
];

export default function EventTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = testimonials.map(
    (_, index) => testimonials[(startIndex + index) % testimonials.length],
  );

  function showPrevious() {
    setStartIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  }

  function showNext() {
    setStartIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <div className="relative mx-auto mt-6 max-w-6xl sm:px-14">
      <button
        type="button"
        onClick={showPrevious}
        aria-label="Show previous testimonials"
        className="absolute left-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] sm:flex"
      >
        <ArrowLeft aria-hidden="true" className="size-5" />
      </button>

      <ul className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <li
            key={testimonial.name}
            className={`min-w-0 flex-col items-center text-center ${
              index === 0 ? "flex" : "hidden sm:flex"
            }`}
          >
            <div
              aria-hidden="true"
              className="flex size-[4.5rem] items-center justify-center rounded-full border border-[#c96c78] bg-white text-lg font-bold text-[#762838] shadow-sm"
            >
              {testimonial.initials}
            </div>
            <blockquote className="mt-2 flex min-h-24 w-full items-center break-words rounded-lg border border-[#d6e0e8] bg-[#f0f7fc] px-4 py-4 text-left text-sm leading-6 text-[#202b33] shadow-[0_1px_3px_rgba(23,52,72,0.08)] sm:px-5">
              <span className="sr-only">“</span>
              {testimonial.quote}
              <span className="sr-only">”</span>
            </blockquote>
            <p className="mt-2 font-bold text-[#202b33]">
              {testimonial.name}
            </p>
            {testimonial.affiliation ? (
              <p className="mt-1 text-xs text-[#59656b]">
                {testimonial.affiliation}
              </p>
            ) : null}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={showNext}
        aria-label="Show next testimonials"
        className="absolute right-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] sm:flex"
      >
        <ArrowRight aria-hidden="true" className="size-5" />
      </button>

      <div className="mt-4 flex justify-center gap-8 sm:hidden">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Show previous testimonials"
          className="flex size-9 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Show next testimonials"
          className="flex size-9 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
