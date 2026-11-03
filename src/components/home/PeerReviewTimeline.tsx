"use client";

import {
  Award,
  Bell,
  BookOpenCheck,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  FileText,
  RotateCcw,
  Search,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

type TimelineStep = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  align: "left" | "right";
};

const steps: TimelineStep[] = [
  {
    id: 1,
    title: "Abstract Submission",
    description:
      "Authors submit an abstract detailing their research problem, methods, and anticipated findings.",
    icon: Send,
    align: "left",
  },
  {
    id: 2,
    title: "Peer Review of Abstract",
    description:
      "The abstract undergoes structured double-blind review to assess originality, relevance, and quality.",
    icon: Search,
    align: "right",
  },
  {
    id: 3,
    title: "Notification of Results",
    description:
      "Authors are notified of their abstract's acceptance or the need for revision.",
    icon: Bell,
    align: "left",
  },
  {
    id: 4,
    title: "Conference Registration",
    description:
      "Accepted authors complete registration and payment to confirm their participation.",
    icon: CreditCard,
    align: "right",
  },
  {
    id: 5,
    title: "Full Paper Submission",
    description:
      "Authors submit their complete research paper for comprehensive peer review.",
    icon: FileText,
    align: "left",
  },
  {
    id: 6,
    title: "Peer Review of Full Paper",
    description:
      "Subject-matter experts assess academic rigor, methodology, and findings in a double-blind review.",
    icon: ClipboardCheck,
    align: "right",
  },
  {
    id: 7,
    title: "Revisions (If Required)",
    description:
      "Authors revise their papers based on detailed reviewer feedback and resubmit.",
    icon: RotateCcw,
    align: "left",
  },
  {
    id: 8,
    title: "Final Decision",
    description:
      "The committee issues a final decision on acceptance for the conference programme.",
    icon: FileCheck2,
    align: "right",
  },
  {
    id: 9,
    title: "Publication Consideration",
    description:
      "Accepted papers are considered for publication in proceedings or affiliated journals.",
    icon: BookOpenCheck,
    align: "left",
  },
  {
    id: 10,
    title: "Award Eligibility",
    description:
      "Outstanding research and presentations are considered for conference awards and recognition.",
    icon: Award,
    align: "right",
  },
];

/** Leaf-shaped node with veins */
function LeafNode({ icon: Icon, index }: { icon: LucideIcon; index: number }) {
  return (
    <div className="relative size-12 sm:size-14">
      <svg
        viewBox="0 0 64 64"
        className="absolute inset-0 size-full drop-shadow-[0_4px_10px_rgba(26,58,50,0.18)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`leafGrad-${index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1A3A32" />
            <stop offset="60%" stopColor="#3E6B5A" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <path
          d="M32 2 C 50 14, 62 30, 62 44 C 62 56, 48 62, 32 62 C 16 62, 2 56, 2 44 C 2 30, 14 14, 32 2 Z"
          fill={`url(#leafGrad-${index})`}
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2"
        />
        <path
          d="M32 8 L 32 56"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M32 20 L 44 28 M32 20 L 20 28 M32 34 L 46 42 M32 34 L 18 42"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="size-4 text-white drop-shadow-sm sm:size-5" strokeWidth={2.2} />
      </div>
    </div>
  );
}

function LeafCard({
  step,
  isLeft,
}: {
  step: TimelineStep;
  isLeft: boolean;
}) {
  return (
    <div className="group relative w-full">
      <div
        aria-hidden="true"
        className={`absolute top-1/2 z-0 hidden size-5 -translate-y-1/2 rotate-45 border-[#D4AF37]/30 bg-white md:block ${
          isLeft
            ? "-right-2 border-r border-t"
            : "-left-2 border-b border-l"
        }`}
      />
      <div
        className={`relative z-10 overflow-hidden border border-[#D4AF37]/25 bg-white px-4 py-4 shadow-[0_6px_18px_rgba(26,58,50,0.08)] transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-[0_12px_28px_rgba(26,58,50,0.14)] sm:px-6 sm:py-5 ${
          isLeft
            ? "rounded-2xl sm:rounded-[3rem_1.25rem_3rem_1.25rem]"
            : "rounded-2xl sm:rounded-[1.25rem_3rem_1.25rem_3rem]"
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute top-0 h-1 w-2/5 bg-gradient-to-r from-[#1A3A32] to-[#D4AF37] ${
            isLeft ? "left-8" : "right-8"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-3 top-3 w-0.5 rounded-full bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/50 to-[#1A3A32]/10 ${
            isLeft ? "right-5" : "left-5"
          }`}
        />
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A3A32]/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1A3A32]">
            <span className="inline-block size-1.5 rounded-full bg-[#D4AF37]" />
            Step {String(step.id).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]/70">
            GSN
          </span>
        </div>
        <h3 className="mb-1.5 font-serif text-base font-bold leading-snug text-[#1A3A32]">
          {step.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function PeerReviewTimeline() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined && latest !== previous) {
      setScrollDirection(latest > previous ? "down" : "up");
    }
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F6] px-4 py-10 sm:py-16">
      {/* Ambient blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 size-64 rounded-full bg-[#1A3A32]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-24 size-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="font-serif text-3xl text-[#1A3A32] md:text-4xl">
            Double-Blind{" "}
            <span className="text-[#D4AF37]">Peer Review</span> Process
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            A transparent, structured pathway from abstract submission to
            publication and recognition.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            key={scrollDirection}
            aria-hidden="true"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{
              once: false,
              amount: 0.05,
            }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            style={{
              transformOrigin:
                scrollDirection === "down" ? "center top" : "center bottom",
            }}
            className="pointer-events-none absolute bottom-0 left-6 top-0 z-0 -ml-0.5 w-1 rounded-full bg-gradient-to-b from-[#D4AF37]/25 via-[#D4AF37] to-[#1A3A32]/45 md:left-1/2"
          />

          <div className="space-y-4 sm:space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const isLeft = step.align === "left";

              return (
                <motion.div
                  key={step.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: scrollDirection === "down" ? 45 : -45,
                    },
                    visible: { opacity: 1, y: 0 },
                  }}
                  viewport={{
                    once: false,
                    amount: 0.35,
                    margin: "0px 0px -12% 0px",
                  }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: index * 0.05,
                  }}
                  className="group relative will-change-transform"
                >
                  {/* Leaf node */}
                  <div className="absolute left-6 top-5 z-10 -translate-x-1/2 rounded-full bg-[#F9F9F6] p-1 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-rotate-6 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <LeafNode icon={step.icon} index={step.id} />
                  </div>

                  {/* Card wrapper — indented so the point faces the vine */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft
                        ? "md:pr-[calc(50%+2.5rem)]"
                        : "md:pl-[calc(50%+2.5rem)]"
                    }`}
                  >
                    <LeafCard step={step} isLeft={isLeft} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}