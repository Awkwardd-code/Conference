export default function VideoBanner() {
  return (
    <section className="w-full bg-[#F9F9F6] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-flex rounded-full border border-[#D4AF37]/30 bg-white px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            Conference highlights
          </span>
          <h2 className="font-serif text-2xl font-bold leading-tight text-[#1A3A32] sm:text-3xl md:text-5xl">
            Shaping the Future of Research
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Watch the ideas, people, and conversations shaping our global
            academic community.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border-2 border-white bg-black shadow-[0_24px_60px_-16px_rgba(26,58,50,0.35)] ring-1 ring-[#1A3A32]/10 sm:rounded-3xl sm:border-4">
          <video
            src="/15162-262146025_medium.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=85"
            aria-label="Highlights from Global Scholarly Nexus academic conferences"
            className="aspect-video h-auto w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          >
            Your browser does not support HTML video playback.
          </video>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b1a]/40 via-transparent to-white/10"
          />
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-white/20 bg-[#1A3A32]/80 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm sm:bottom-5 sm:left-5 sm:px-3 sm:py-2 sm:text-xs">
            Global Scholarly Nexus
          </div>
        </div>
      </div>
    </section>
  );
}
