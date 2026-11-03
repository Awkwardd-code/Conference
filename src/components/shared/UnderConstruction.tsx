import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#F9F9F6] px-4 py-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(90vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A3A32]/5"
      >
        <div className="absolute inset-8 rounded-full border border-[#D4AF37]/10" />
        <div className="absolute inset-20 rounded-full border border-[#1A3A32]/5" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(30deg,#1A3A32_1px,transparent_1px),linear-gradient(150deg,#1A3A32_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#D4AF37]/10">
          <Construction className="h-12 w-12 text-[#D4AF37]" strokeWidth={1.5} />
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Global Scholarly Nexus
        </p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#1A3A32] md:text-5xl">
          Page Under Construction
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
          We are working hard to bring you this feature. Our team is currently
          building this section to ensure it meets the highest academic
          standards. Please check back soon!
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-md bg-[#1A3A32] px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#1A3A32]"
        >
          <ArrowLeft className="size-4" />
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
