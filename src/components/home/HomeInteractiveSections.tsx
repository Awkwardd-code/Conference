"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("@/components/home/HeroSlider"), {
  ssr: false,
  loading: () => <div className="min-h-[30rem] bg-[#17102f]" />,
});

const ConferenceHighlights = dynamic(
  () => import("@/components/home/ConferenceHighlights"),
  {
    ssr: false,
    loading: () => <div className="min-h-96 bg-white" />,
  },
);

export default function HomeInteractiveSections() {
  return (
    <>
      <HeroSlider />
      <ConferenceHighlights />
    </>
  );
}
