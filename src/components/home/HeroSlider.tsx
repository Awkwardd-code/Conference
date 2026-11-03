"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const slides = [
  {
    alt: "Researchers collaborating during an international conference",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2200&q=90",
  },
  {
    alt: "Speaker presenting research to an engaged academic audience",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2200&q=90",
  },
  {
    alt: "Scholars exchanging ideas at a global research event",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2200&q=90",
  },
  {
    alt: "Students and researchers working together in a modern library",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=90",
  },
  {
    alt: "Research team collaborating around a shared workspace",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
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
