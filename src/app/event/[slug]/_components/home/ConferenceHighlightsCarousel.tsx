"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const highlights = [
  {
    title: "Research presentations",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
    alt: "Audience attending a research presentation",
  },
  {
    title: "Academic discussion",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    alt: "Speaker sharing ideas at an academic gathering",
  },
  {
    title: "Knowledge exchange",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    alt: "Conference participants connecting and exchanging ideas",
  },
  {
    title: "Collaborative learning",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",
    alt: "Students collaborating around a table",
  },
  {
    title: "Academic networking",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    alt: "Group of people talking together outdoors",
  },
  {
    title: "Research collaboration",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    alt: "Colleagues working together around a table",
  },
];

export default function ConferenceHighlightsCarousel() {
  return (
    <section
      aria-labelledby="conference-highlights-title"
      className="flex min-w-0 flex-col bg-[#efefef] px-4 pb-2 pt-1"
    >
      <div className="relative flex min-w-0 flex-col">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2
              id="conference-highlights-title"
              className="text-xl font-bold text-[#762838]"
            >
              Conference Highlights
            </h2>
            <p className="mt-1 text-sm text-[#59656b]">
              Illustrative moments from academic events and research gatherings.
            </p>
          </div>
        </div>

        <div className="mt-4 flex min-w-0 flex-col">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
              el: ".event-highlights-pagination",
            }}
            loop
            slidesPerGroup={1}
            speed={700}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="event-highlights-swiper w-full min-w-0 overflow-hidden"
          >
            {highlights.map((highlight) => (
              <SwiperSlide key={highlight.title} className="h-auto">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[16/9] w-full flex-none overflow-hidden rounded-lg bg-[#e8ecef]">
                    <Image
                      src={highlight.image}
                      alt={highlight.alt}
                      fill
                      sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, (max-width: 1279px) 30vw, 24vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-medium leading-5 text-[#263746]">
                    {highlight.title}
                  </h3>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="event-highlights-pagination mt-1 flex h-6 shrink-0 items-center justify-center gap-2" />
        </div>
        <p className="sr-only">
          Illustrative images showing conference and research activities.
        </p>
      </div>
    </section>
  );
}
