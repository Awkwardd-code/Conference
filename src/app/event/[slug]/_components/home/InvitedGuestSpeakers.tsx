"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const speakers = [
  {
    name: "Amarnath Reddy Kallam",
    qualification: "Bachelor of Engineering",
    designation: "Gen AI Engineer",
    organization: "Jawaharlal Nehru Technological University",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Mr Bhuman Vyas",
    qualification: "Software Engineer",
    designation: "Senior Software Developer",
    organization: "Credit Acceptance",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Dr. J. Somasekar",
    qualification: "",
    designation: "",
    organization: "JAIN University, Bangalore",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Dr. Parul Verma",
    qualification: "",
    designation: "Asst. Professor",
    organization: "Amity University, India",
    image: null,
  },
];

export default function InvitedGuestSpeakers() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      aria-labelledby="invited-speakers-title"
      className="mx-auto mt-10 w-full max-w-6xl border-t border-[#d8dde1] px-4 pt-8 sm:mt-12 sm:px-6 sm:pt-10"
    >
      <header className="text-center">
        <h2
          id="invited-speakers-title"
          className="text-2xl font-extrabold uppercase tracking-wide text-[#762838] sm:text-3xl"
        >
          Invited &amp; Guest Speakers
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-1 w-12 rounded-full bg-[#c96c78]"
        />
      </header>

      <div className="relative mt-7 sm:px-12">
        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          aria-label="Show previous invited speakers"
          className="absolute left-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] sm:flex"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </button>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".invited-speakers-pagination",
          }}
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={16}
          speed={500}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
          className="invited-speakers-swiper"
        >
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.name} className="h-auto">
              <article className="group flex h-full min-h-40 items-center gap-4 rounded-xl border border-[#eee7e7] bg-white p-4 shadow-[0_5px_20px_rgba(35,20,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(35,20,20,0.11)] sm:gap-5 sm:p-5">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={88}
                    height={88}
                    sizes="88px"
                    className="size-16 shrink-0 rounded-full object-cover shadow-md ring-2 ring-[#f1dfe2] transition group-hover:ring-[#c96c78] sm:size-[5.5rem]"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#fff4f5] text-base font-bold text-[#762838] shadow-md ring-2 ring-[#f1dfe2] sm:size-[5.5rem]"
                  >
                    PV
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#a34758]">
                    Invited &amp; Guest Speaker
                  </p>
                  <h3 className="mt-1 text-base font-bold leading-snug text-[#762838]">
                    {speaker.name}
                  </h3>
                  {speaker.qualification ? (
                    <p className="mt-1 text-sm text-[#202b33]">
                      {speaker.qualification}
                    </p>
                  ) : null}
                  {speaker.designation ? (
                    <p className="mt-2 border-t border-[#c96c78] pt-2 text-xs font-semibold text-[#762838]">
                      {speaker.designation}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm leading-5 text-[#202b33]">
                    {speaker.organization}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="Show next invited speakers"
          className="absolute right-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] sm:flex"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-8 sm:hidden">
        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          aria-label="Show previous invited speakers"
          className="flex size-9 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="Show next invited speakers"
          className="flex size-9 items-center justify-center rounded-full bg-[#a34758] text-white shadow-sm transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>
      <div className="invited-speakers-pagination mt-4 flex min-h-3 items-center justify-center gap-2" />
      <p className="sr-only">
        Showing speaker group {activeIndex + 1} of {speakers.length}.
      </p>

      <div className="mt-6 text-center">
        <Link
          href="/speaker/past-speakers"
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#a34758] px-6 text-xs font-extrabold uppercase text-white transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          View all past guest speakers
        </Link>
      </div>
    </section>
  );
}
