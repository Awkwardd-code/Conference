import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      aria-label="Global Scholarly Nexus home"
      className={`group inline-flex max-w-full items-center gap-2 overflow-hidden sm:gap-3 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 64 72"
        className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-10 sm:w-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 2 58 11v22c0 16.8-10.7 29-26 37C16.7 62 6 49.8 6 33V11L32 2Z"
          fill="#1A3A32"
        />
        <path
          d="M32 7 53 14v19c0 13.5-8.1 23.7-21 31-12.9-7.3-21-17.5-21-31V14l21-7Z"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />
        <path
          d="M18 38c4.5-7.2 9.2-10.8 14-10.8S41.5 30.8 46 38M20 43h24"
          stroke="#D4AF37"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M32 15v20M25 25h14"
          stroke="#F9F9F6"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="m32 10 1.5 3.2 3.5.4-2.6 2.3.8 3.4-3.2-1.8-3.2 1.8.8-3.4-2.6-2.3 3.5-.4L32 10Z"
          fill="#D4AF37"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`truncate font-serif text-base font-bold leading-none transition-colors duration-300 group-hover:text-[#D4AF37] sm:text-xl ${
            isDark ? "text-white" : "text-[#1A3A32]"
          }`}
        >
          GLOBAL SCHOLARLY
        </span>
        <span className="mt-0.5 truncate font-sans text-[8px] font-semibold tracking-[0.25em] text-[#D4AF37] sm:text-[9px] sm:tracking-[0.3em]">
          NEXUS
        </span>
      </span>
    </Link>
  );
}
