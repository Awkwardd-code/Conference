"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("@/components/home/HeroSlider"), {
  ssr: false,
  loading: () => <div className="min-h-[15rem] bg-[#1A3A32] sm:min-h-[20rem]" />,
});

export default function PageHeroSlider() {
  return <HeroSlider />;
}
