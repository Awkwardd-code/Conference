import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, MessageCircle, Share2 } from "lucide-react";

const feeds = [
  {
    name: "Facebook",
    handle: "@GlobalScholarlyNexus",
    href: "https://facebook.com/",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "LinkedIn",
    handle: "@global-scholarly-nexus",
    href: "https://linkedin.com/",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
] as const;

function FacebookMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${className} fill-current`}
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z" />
    </svg>
  );
}

function LinkedInMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${className} fill-current`}
    >
      <path d="M5.2 7.3A1.9 1.9 0 1 0 5.2 3.5a1.9 1.9 0 0 0 0 3.8ZM3.6 20.5h3.2V9H3.6v11.5ZM9 9v11.5h3.2v-6.4c0-1.7.3-3.3 2.4-3.3 2.1 0 2.1 1.9 2.1 3.4v6.3H20v-7.1c0-3.5-.8-6.2-4.8-6.2-1.9 0-3.2 1-3.7 2h-.1V9H9Z" />
    </svg>
  );
}

function PlatformBadge({ platform }: { platform: "Facebook" | "LinkedIn" }) {
  const isFacebook = platform === "Facebook";
  return (
    <div
      className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:size-11 sm:rounded-xl ${
        isFacebook
          ? "bg-[#1877F2] shadow-[#1877F2]/30"
          : "bg-[#0A66C2] shadow-[#0A66C2]/30"
      }`}
      aria-hidden="true"
    >
      {isFacebook ? <FacebookMark /> : <LinkedInMark />}
    </div>
  );
}

export default function SocialMediaCards() {
  return (
    <section className="bg-[#F9F9F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
              Stay connected
            </p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-[#1A3A32] sm:text-4xl">
              Follow Our Research Community
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-500">
            Discover conversations, announcements, and ideas from researchers
            across the Global Scholarly Nexus.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-5 md:gap-6">
          {feeds.map(({ name, handle, href, image }) => {
            const isFacebook = name === "Facebook";
            return (
              <article
                key={name}
                className={`group relative min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(26,58,50,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(26,58,50,0.14)] ${
                  isFacebook
                    ? "hover:border-[#1877F2]/30"
                    : "hover:border-[#0A66C2]/30"
                }`}
              >
                {/* Brand glow — appears on hover, sits behind content */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-16 -right-16 size-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                    isFacebook ? "bg-[#1877F2]/20" : "bg-[#0A66C2]/20"
                  }`}
                />

                {/* Header */}
                <div className="relative flex items-center gap-1.5 p-2.5 sm:gap-3 sm:p-5">
                  <PlatformBadge platform={name} />
                  <div className="min-w-0">
                    <h3 className="truncate text-[10px] font-semibold text-[#1A3A32] sm:text-base">
                      Global Scholarly Nexus
                    </h3>
                    <p className="truncate text-[8px] text-gray-500 sm:text-xs">
                      <span className="font-medium text-[#1A3A32]/70">
                        {handle}
                      </span>{" "}
                      · {name}
                    </p>
                  </div>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-auto inline-block cursor-pointer rounded-full border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider transition-all duration-300 sm:px-3 sm:py-1 sm:text-[11px] ${
                      isFacebook
                        ? "border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                        : "border-[#0A66C2]/30 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                    }`}
                    aria-label={`Follow Global Scholarly Nexus on ${name}`}
                  >
                    Follow
                  </Link>
                </div>

                {/* Cover image */}
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[1.65/1] cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-inset sm:aspect-[2/1]"
                  aria-label={`Open Global Scholarly Nexus on ${name}`}
                >
                  <Image
                    src={image}
                    alt={`${name} research community post`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Persistent subtle vignette for depth */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  {/* Hover darkening + arrow hint */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  <div className="pointer-events-none absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#1A3A32] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </div>
                </Link>

                {/* Footer actions */}
                <div className="relative flex items-center gap-0 border-t border-gray-100 p-1.5 text-gray-400 sm:gap-1 sm:p-3">
                  <button
                    type="button"
                    aria-label="Like"
                    className="cursor-pointer rounded-md p-1 transition-colors hover:bg-[#F9F9F6] hover:text-[#1A3A32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:p-2"
                  >
                    <Heart className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Comment"
                    className="cursor-pointer rounded-md p-1 transition-colors hover:bg-[#F9F9F6] hover:text-[#1A3A32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:p-2"
                  >
                    <MessageCircle className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Share"
                    className="cursor-pointer rounded-md p-1 transition-colors hover:bg-[#F9F9F6] hover:text-[#1A3A32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:p-2"
                  >
                    <Share2 className="size-4" />
                  </button>

                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn ml-auto inline-flex cursor-pointer items-center gap-1 rounded-lg px-1.5 py-1 text-[8px] font-bold text-white shadow-sm transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-xs ${
                      isFacebook
                        ? "bg-[#1A3A32] hover:bg-[#1877F2] focus-visible:ring-[#1877F2]"
                        : "bg-[#1A3A32] hover:bg-[#0A66C2] focus-visible:ring-[#0A66C2]"
                    }`}
                    aria-label={`Visit ${name} page`}
                  >
                    Visit {name}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}