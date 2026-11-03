import { Diamond } from "lucide-react";

export default function CommitmentSection() {
  const diamonds = [
    "left-[6%] top-[18%] size-7 delay-0",
    "left-[17%] top-[62%] size-4 delay-500",
    "left-[30%] top-[28%] size-5 delay-1000",
    "right-[29%] top-[22%] size-4 delay-700",
    "right-[15%] top-[64%] size-7 delay-300",
    "right-[5%] top-[30%] size-5 delay-1000",
  ];

  return (
    <section className="group relative overflow-hidden bg-white py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/globe.svg')] bg-[length:28rem_28rem] bg-center bg-no-repeat opacity-[0.06] sm:bg-[length:42rem_42rem]"
      />
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {diamonds.map((position, index) => (
          <Diamond
            key={position}
            className={`absolute ${position} fill-[#D4AF37]/10 text-[#D4AF37]/45 motion-safe:animate-[commitment-float_6s_ease-in-out_infinite] transition-all duration-500 group-hover:text-[#1A3A32]/50 group-hover:rotate-45`}
            style={{ animationDelay: `${index * 280}ms` }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-700 group-hover:bg-[#D4AF37]/15" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Diamond
          className="mx-auto mb-4 size-12 text-[#D4AF37]"
          aria-hidden="true"
        />
        <h2 className="mb-6 font-sans text-3xl font-extrabold text-[#1A3A32] sm:text-4xl">
          Our Commitment to Excellence
        </h2>
        <p className="leading-relaxed text-gray-700">
          Global Scholarly Nexus is committed to creating an academic
          environment grounded in integrity, inclusion, and continuous
          learning. We hold ourselves to high standards in every conference,
          publication, and partnership we support.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          By bringing people and ideas together across borders, we help build a
          stronger research culture where rigorous scholarship can become
          meaningful progress.
        </p>
        <p className="mt-6 font-bold text-[#D4AF37]">
          Join us in shaping the future of research and innovation!
        </p>
      </div>
    </section>
  );
}
