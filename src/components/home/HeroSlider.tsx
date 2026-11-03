"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const slides = [
  {
    alt: "Rajshahi University Research Bootcamp banner",
    image: "/sliders/Rajshahi University Research Bootcamp Banner.png",
  },
  {
    alt: "Research Bootcamp registration banner",
    image: "/sliders/Research Bootcamp Registration Banner.png",
  },
  {
    alt: "Research Bootcamp registration banner alternative",
    image: "/sliders/Research Bootcamp Registration Banner (1).png",
  },
  {
    alt: "RURJ Club Research Bootcamp banner",
    image: "/sliders/RURJ Club Research Bootcamp Banner.png",
  },
  {
    alt: "RURJ Club Research Bootcamp banner alternative",
    image: "/sliders/RURJ Club Research Bootcamp Banner (1).png",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative overflow-hidden bg-[#101c1b]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        grabCursor
        speed={1400}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="research-flow-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.alt}>
            <article className="relative h-[clamp(15rem,48vw,25rem)] min-h-[15rem] w-full overflow-hidden bg-[#1A3A32] sm:h-[clamp(20rem,42vw,35rem)] sm:min-h-[20rem]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
