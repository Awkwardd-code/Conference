"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const highlights = [
  ["Researchers collaborating at a conference", "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85"],
  ["Academic panel discussion", "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85"],
  ["Speaker presenting to an audience", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85"],
  ["Global research exchange", "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85"],
];

export default function ConferenceHighlights() {
  return (
    <section className="overflow-hidden bg-[#F9F9F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-2xl leading-tight text-[#1A3A32] sm:text-4xl">
            Highlights of the Conference
          </h2>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              className="highlights-prev flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#D4AF37] text-[#1A3A32] transition-transform hover:-translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3A32] focus-visible:ring-offset-2 sm:size-11"
              aria-label="Previous conference highlight"
            >
              <ArrowLeft className="size-4 sm:size-5" />
            </button>
            <button
              className="highlights-next flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#D4AF37] text-[#1A3A32] transition-transform hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3A32] focus-visible:ring-offset-2 sm:size-11"
              aria-label="Next conference highlight"
            >
              <ArrowRight className="size-4 sm:size-5" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".highlights-prev",
            nextEl: ".highlights-next",
          }}
          pagination={{
            clickable: true,
            el: ".highlights-pagination",
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
            1280: { slidesPerView: 4, spaceBetween: 18 },
          }}
          className="mt-6 overflow-hidden sm:mt-8"
        >
          {highlights.map(([alt, src]) => (
            <SwiperSlide key={alt}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg sm:aspect-[4/3]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="highlights-pagination mt-5 flex min-h-3 items-center justify-center gap-1.5 sm:hidden" />
      </div>
    </section>
  );
}
