"use client";

import {
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Play,
  Video,
} from "lucide-react";
import { useState } from "react";

const videos = [
  {
    title: "How great leaders inspire action",
    date: "TED Talks",
    videoId: "qp0HIF3SfI4",
  },
  {
    title: "The power of vulnerability",
    date: "TED Talks",
    videoId: "iCvmsMzlF7o",
  },
  {
    title: "Do schools kill creativity?",
    date: "TED Talks",
    videoId: "iG9CE55wbtY",
  },
  {
    title: "The happy secret to better work",
    date: "TED Talks",
    videoId: "fLJsdqxnZb0",
  },
  {
    title: "What makes a good life?",
    date: "TED Talks",
    videoId: "8KkKuTCFvzI",
  },
  {
    title: "The danger of a single story",
    date: "TED Talks",
    videoId: "D9Ihs241zeg",
  },
  {
    title: "The future of medicine is in your hands",
    date: "TED Talks",
    videoId: "j0w8JX9a7Eo",
  },
  {
    title: "What does it mean to be a citizen of the world?",
    date: "TED Talks",
    videoId: "5LiuU8Y7H8s",
  },
];

function stagedVisibility(index: number, expanded: boolean) {
  if (expanded) {
    return index < 4 ? "block" : index < 6 ? "hidden md:block" : "hidden";
  }

  return index < 2 ? "block" : index === 2 ? "hidden md:block" : "hidden";
}

export default function VideoLibrary() {
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const loadMoreVideos = () => {
    setHasLoadedMore(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#F9F9F6] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 size-80 rounded-full bg-[#D4AF37]/10 blur-3xl max-[359px]:size-64 md:size-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-0 size-80 rounded-full bg-[#1A3A32]/5 blur-3xl max-[359px]:size-64 md:size-96"
      />
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-10 flex flex-col items-center justify-between gap-6 text-center md:mb-12 md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] shadow-sm">
              <Play className="size-3 fill-current" />
              Explore the archive
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#1A3A32] sm:text-4xl md:text-5xl">
              Ideas worth <span className="text-[#D4AF37]">watching</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 md:pb-1">
            Revisit memorable sessions and discover perspectives from leading
            thinkers. Play every talk here or continue watching on YouTube.
          </p>
        </div>
        <div className={`home-staged-grid relative grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 md:gap-6 ${hasLoadedMore ? "is-expanded" : ""}`}>
          {videos.slice(0, 6).map((video, index) => (
            <article
              key={video.videoId}
              className={`${stagedVisibility(index, hasLoadedMore)} group overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_10px_30px_rgba(26,58,50,0.08)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_45px_rgba(26,58,50,0.16)]`}
            >
              <div className="relative aspect-video overflow-hidden bg-[#1A3A32]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0"
                />
                <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#1A3A32]/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Video className="size-3.5 text-[#D4AF37]" />
                  Talk {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-3 sm:p-6">
                <h3 className="line-clamp-2 min-h-10 font-serif text-sm font-bold leading-snug text-[#1A3A32] transition-colors duration-500 sm:min-h-12 sm:text-lg">
                  {video.title}
                </h3>
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-gray-100 pt-3 sm:mt-5 sm:gap-3 sm:pt-4">
                  <p className="flex min-w-0 items-center gap-1.5 truncate text-[10px] text-gray-500 sm:gap-2 sm:text-xs">
                    <CalendarDays className="size-3.5 shrink-0 text-[#D4AF37] sm:size-4" />
                    {video.date}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#1A3A32]/5 px-2 py-1 text-[10px] font-semibold text-[#1A3A32] transition-colors hover:bg-[#D4AF37] hover:text-[#1A3A32] sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs"
                    aria-label={`Watch ${video.title} on YouTube`}
                  >
                    YouTube
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-9 flex justify-center sm:mt-12">
          {!hasLoadedMore ? (
            <button
              type="button"
              onClick={loadMoreVideos}
              className="home-action-button home-action-button-primary w-full max-w-[16rem] sm:w-auto sm:max-w-none"
            >
              Load More Videos
              <ArrowUpRight className="size-4" />
            </button>
          ) : (
            <a
              href="https://www.youtube.com/results?search_query=academic+conference+research+talks"
              target="_blank"
              rel="noopener noreferrer"
              className="home-action-button home-action-button-secondary w-full max-w-[16rem] sm:w-auto sm:max-w-none"
            >
              View More on YouTube
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
