import { CheckCircle2, Eye, Target } from "lucide-react";

const missionPoints = [
  "Facilitate meaningful exchange across disciplines and borders.",
  "Promote excellence in research, teaching, and publication.",
  "Create opportunities for collaboration between scholars and institutions.",
  "Support researchers at every stage of their academic journey.",
  "Encourage knowledge that contributes to a more equitable future.",
];

export default function VisionMission() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-6">
      <article className="rounded-2xl border border-[#dce8e2] bg-[#f5f8f6] p-6 shadow-[0_8px_24px_rgba(26,58,50,0.08)] sm:p-8">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A3A32] to-[#D4AF37] text-white">
          <Eye className="size-6" aria-hidden="true" />
        </div>
        <h2 className="mb-2 mt-4 font-sans text-2xl font-bold text-[#1A3A32]">
          Vision
        </h2>
        <p className="leading-relaxed text-gray-700">
          To shape a connected global research community where diverse ideas
          are valued, knowledge travels freely, and scholarship creates
          positive change for people and the planet.
        </p>
      </article>

      <article className="lg:col-span-3 rounded-2xl border border-[#e8e4d3] bg-[#fcfbf5] p-6 shadow-[0_8px_24px_rgba(26,58,50,0.08)] sm:p-8">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A3A32] to-[#D4AF37] text-white">
          <Target className="size-6" aria-hidden="true" />
        </div>
        <h2 className="mb-4 mt-4 font-sans text-2xl font-bold text-[#1A3A32]">
          Mission
        </h2>
        <ul>
          {missionPoints.map((point) => (
            <li
              key={point}
              className="mb-3 flex items-start gap-2 text-sm text-gray-600"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 fill-[#D4AF37] text-white" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
