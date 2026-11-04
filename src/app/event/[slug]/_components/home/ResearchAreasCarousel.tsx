"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Database,
  Dna,
  HeartPulse,
} from "lucide-react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type ResearchArea = {
  title: string;
  category: string;
  icon: "dna" | "database" | "heart";
};

const icons = {
  dna: Dna,
  database: Database,
  heart: HeartPulse,
};

export default function ResearchAreasCarousel({
  areas,
}: {
  areas: ResearchArea[];
}) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        slidesPerView={1.04}
        slidesPerGroup={1}
        spaceBetween={16}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1.15 },
          1024: { slidesPerView: 3 },
        }}
        className="research-areas-swiper mt-7 w-full min-w-0"
      >
        {areas.map(({ title, category, icon }, index) => {
          const Icon = icons[icon];

          return (
            <SwiperSlide key={title} className="h-auto">
              <article className="group h-full min-w-0 overflow-hidden rounded-xl border border-[#efdadd] bg-white shadow-[0_8px_24px_rgba(47,20,20,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#c96c78] hover:shadow-[0_14px_30px_rgba(47,20,20,0.13)]">
                <div className="relative flex min-h-48 flex-col justify-between overflow-hidden bg-gradient-to-br from-[#762838] via-[#a34758] to-[#c96c78] p-5 text-white sm:p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1.5px)] [background-position:8px_8px] [background-size:22px_22px]"
                  />
                  <Icon
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 size-24 -translate-y-1/2 text-white/20 transition duration-500 group-hover:scale-110 group-hover:text-white/30 sm:size-28"
                    strokeWidth={1.1}
                  />
                  <div className="relative z-10 flex min-h-8 items-start justify-between gap-3">
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-white/70">
                      {category}
                    </p>
                    <span className="shrink-0 rounded-full border border-white/25 bg-black/10 px-2.5 py-1 text-[0.65rem] font-bold text-white/85">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative z-10 max-w-[16rem] break-words pr-10 text-xl font-extrabold leading-tight sm:text-[1.35rem]">
                    {title}
                  </h3>
                </div>
                <div className="flex min-h-[4.25rem] flex-col items-start justify-center gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-2">
                  <span className="flex min-w-0 items-center gap-2 text-[0.68rem] leading-4 text-[#64717b]">
                    <BookOpen
                      aria-hidden="true"
                      className="size-4 shrink-0 text-[#a34758]"
                    />
                    <span>Research Leagues Library</span>
                  </span>
                  <Link
                    href="/journal/publications"
                    className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-md bg-[#a34758] px-3 text-[0.7rem] font-bold text-white transition hover:bg-[#762838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
                  >
                    View articles
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          aria-label="Show previous research area"
          className="flex size-9 items-center justify-center rounded-full border border-[#c96c78]/40 bg-white text-[#762838] shadow-sm transition hover:bg-[#a34758] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </button>
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Research areas"
        >
          {areas.map((area, index) => (
            <button
              key={area.title}
              type="button"
              onClick={() => swiper?.slideTo(index)}
              aria-label={`Go to research area ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`size-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] ${
                activeIndex === index
                  ? "bg-[#a34758]"
                  : "bg-[#d5b9bd] hover:bg-[#a34758]/70"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="Show next research area"
          className="flex size-9 items-center justify-center rounded-full border border-[#c96c78]/40 bg-white text-[#762838] shadow-sm transition hover:bg-[#a34758] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>
    </>
  );
}
