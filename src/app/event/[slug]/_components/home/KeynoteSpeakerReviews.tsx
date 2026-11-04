"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviews = [
  {
    quote: "The conference went smoothly.",
    name: "Paula Rama Silva",
    affiliation:
      "Escola Superior de Hotelaria e Turismo do Estoril (ESHTE) / University of Lisbon (CEAUL)",
    country: "Portugal",
    initials: "PS",
  },
  {
    quote:
      "It was a very endearing and enjoyable experience for me. I've learnt a lot from it and was happy to see positive responses from the audience. Thank you for giving me the opportunity.",
    name: "Mohammed Fuad",
    affiliation: "Al-Neelain University, Sudan.",
    country: "Sudan",
    initials: "MF",
  },
  {
    quote:
      "Huge thanks for inviting me to attend this very interesting and informative Conference. The organization was excellent, thanks to all the efforts you and your team have made.",
    name: "Ayade Salah Ayade",
    affiliation: "",
    country: "",
    initials: "AA",
  },
];

export default function KeynoteSpeakerReviews() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      aria-labelledby="keynote-reviews-title"
      className="mx-auto mt-10 w-full max-w-5xl border-t border-[#d8dde1] px-4 pt-8 sm:mt-12 sm:px-6 sm:pt-10"
    >
      <header className="mx-auto max-w-3xl text-center">
        <h2
          id="keynote-reviews-title"
          className="text-xl font-bold text-[#202b33] sm:text-2xl"
        >
          Keynote Speaker Reviews
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-0.5 w-14 bg-[#c96c78]"
        />
      </header>

      <div className="relative mt-6 sm:px-14">
        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          aria-label="Show previous keynote review"
          className="absolute left-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#efdadd] bg-white text-[#762838] shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition hover:border-[#a34758] hover:text-[#a34758] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] sm:flex"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </button>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          slidesPerView={1}
          speed={500}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
          className="keynote-review-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <article className="min-w-0 rounded-xl border border-[#e8e8e8] bg-white p-4 shadow-[0_8px_28px_rgba(20,30,40,0.07)] sm:p-7 md:p-8">
                <div
                  aria-label="5 out of 5 stars"
                  className="flex gap-1 text-[#a34758]"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="size-4 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 min-h-16 break-words text-sm leading-6 text-[#59656b] sm:text-base">
                  <span aria-hidden="true" className="mr-2 text-2xl text-[#c96c78]/60">
                    “
                  </span>
                  {review.quote}
                  <span aria-hidden="true" className="ml-1 text-2xl text-[#c96c78]/60">
                    ”
                  </span>
                </blockquote>

                <div className="mt-5 border-t border-[#e8e8e8] pt-5">
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#c96c78] bg-[#fff4f5] text-sm font-bold text-[#762838]"
                    >
                      {review.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[#202b33]">{review.name}</p>
                      {review.affiliation ? (
                        <p className="mt-1 break-words text-xs leading-5 text-[#59656b] sm:text-sm">
                          {review.affiliation}
                        </p>
                      ) : null}
                      {review.country ? (
                        <p className="mt-1 text-xs font-semibold text-[#a34758]">
                          {review.country}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="Show next keynote review"
          className="absolute right-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#efdadd] bg-white text-[#762838] shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition hover:border-[#a34758] hover:text-[#a34758] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] sm:flex"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-8 sm:hidden">
        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          aria-label="Show previous keynote review"
          className="flex size-9 items-center justify-center rounded-full border border-[#efdadd] bg-white text-[#762838] shadow-sm transition hover:border-[#a34758] hover:text-[#a34758] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="Show next keynote review"
          className="flex size-9 items-center justify-center rounded-full border border-[#efdadd] bg-white text-[#762838] shadow-sm transition hover:border-[#a34758] hover:text-[#a34758] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838]"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>
      <div
        aria-label={`Review ${activeIndex + 1} of ${reviews.length}`}
        className="mt-5 flex justify-center gap-2"
      >
        {reviews.map((review, index) => (
          <button
            key={review.name}
            type="button"
            onClick={() => swiper?.slideToLoop(index)}
            aria-label={`Go to review ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`size-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] ${
              activeIndex === index
                ? "bg-[#a34758]"
                : "bg-[#d5b9bd] hover:bg-[#a34758]/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
