import { BookOpen, HeartPulse, Handshake } from "lucide-react";

const goals = [
  {
    label: "Good health and well-being",
    icon: HeartPulse,
    color: "#48a748",
    position: "left-[6%] top-[54%]",
  },
  {
    label: "Quality education",
    icon: BookOpen,
    color: "#c5192d",
    position: "right-[7%] top-[54%]",
  },
  {
    label: "Partnerships for the goals",
    icon: Handshake,
    color: "#e56a24",
    position: "left-1/2 top-[7%] -translate-x-1/2",
  },
];

export default function GlobalGoalsSection() {
  return (
    <section
      aria-labelledby="global-goals-title"
      className="overflow-hidden bg-[#f1f3f4]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[22rem] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="mx-auto max-w-lg lg:mx-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#762838]">
            Sustainable Development Goals
          </p>
          <h2
            id="global-goals-title"
            className="mt-3 text-3xl font-extrabold leading-tight text-[#762838] sm:text-4xl"
          >
            Contributing
            <span className="block text-[#a34758]">to the Global Goals</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#59656b] sm:text-base">
            Connecting research and people to advance healthier communities,
            learning, and meaningful global partnerships.
          </p>
        </div>

        <div
          role="img"
          aria-label="Illustration of global Sustainable Development Goals"
          className="relative mx-auto aspect-[1.65] w-full max-w-2xl"
        >
          <div className="absolute inset-[12%_8%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(232,166,174,0.22),rgba(232,166,174,0.04)_66%,transparent_70%)]" />
          <div className="absolute inset-[18%_12%] rounded-[50%] opacity-70 [background-image:radial-gradient(circle,#e8a6ae_1.4px,transparent_1.7px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_72%)]" />
          <svg
            aria-hidden="true"
            viewBox="0 0 640 360"
            className="absolute inset-0 size-full"
            fill="none"
          >
            <ellipse
              cx="320"
              cy="190"
              rx="252"
              ry="102"
              stroke="#e8a6ae"
              strokeOpacity=".7"
              strokeWidth="2"
            />
            <ellipse
              cx="320"
              cy="190"
              rx="220"
              ry="70"
              stroke="#e8a6ae"
              strokeOpacity=".38"
              strokeWidth="1.5"
              transform="rotate(-16 320 190)"
            />
            <path
              d="M92 218C166 92 460 72 550 213"
              stroke="#e8a6ae"
              strokeOpacity=".48"
              strokeWidth="1.5"
            />
            <path
              d="M109 138C212 288 431 299 532 151"
              stroke="#e8a6ae"
              strokeOpacity=".38"
              strokeWidth="1.5"
            />
            <circle cx="205" cy="155" r="4" fill="#ffb642" />
            <circle cx="390" cy="110" r="4" fill="#ffb642" />
            <circle cx="355" cy="235" r="4" fill="#ffb642" />
            <circle cx="467" cy="200" r="4" fill="#ffb642" />
          </svg>

          {goals.map(({ label, icon: Icon, color, position }) => (
            <div
              key={label}
              className={`absolute z-10 flex size-14 items-center justify-center rounded-full border-2 border-white text-white shadow-[0_4px_18px_rgba(23,52,72,0.2)] sm:size-[4.25rem] ${position}`}
              style={{ backgroundColor: color }}
            >
              <Icon aria-hidden="true" className="size-6 sm:size-7" />
              <span className="sr-only">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
