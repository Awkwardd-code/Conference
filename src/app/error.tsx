"use client";

import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F9F9F6] px-4 py-16 text-center font-sans">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(90vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A3A32]/5"
      >
        <div className="absolute inset-10 rounded-full border border-[#D4AF37]/10" />
        <div className="absolute inset-24 rounded-full border border-[#1A3A32]/5" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(30deg,#1A3A32_1px,transparent_1px),linear-gradient(150deg,#1A3A32_1px,transparent_1px)] [background-size:96px_96px]"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-12 w-12 text-red-600" strokeWidth={1.5} />
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Global Scholarly Nexus
        </p>
        <h1 className="mb-6 font-serif text-5xl font-bold text-[#1A3A32] md:text-7xl">
          500 - Something Went Wrong
        </h1>
        <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-gray-600">
          Our servers encountered an unexpected issue while trying to load this
          page. Our technical team has been notified.
        </p>
        {error.message && (
          <code className="mb-8 max-w-xl break-words rounded-md bg-red-50 px-3 py-2 text-xs text-red-500">
            {error.message}
          </code>
        )}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1A3A32] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#1A3A32]"
          >
            <RotateCcw className="size-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#1A3A32] bg-white px-8 py-3 font-semibold text-[#1A3A32] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1A3A32] hover:text-white"
          >
            <Home className="size-5" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

