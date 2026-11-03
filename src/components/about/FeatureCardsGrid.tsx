import {
  FlaskConical,
  Globe,
  GraduationCap,
  Sprout,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "International Conferences & Events",
    description:
      "We create welcoming global forums where researchers exchange ideas, present meaningful work, and build lasting academic connections.",
    icon: Globe,
  },
  {
    title: "Publications & Research Dissemination",
    description:
      "Our publication pathways help high-quality research reach wider scholarly communities through thoughtful review and accessible dissemination.",
    icon: GraduationCap,
  },
  {
    title: "Academic & Industry Partnerships",
    description:
      "We connect universities, research institutions, and industry partners to turn knowledge into practical collaboration and impact.",
    icon: FlaskConical,
  },
  {
    title: "Young Researchers Program",
    description:
      "We support emerging scholars with opportunities to learn, present, collaborate, and grow confidence at every stage of their journey.",
    icon: Sprout,
  },
];

export default function FeatureCardsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {features.map(({ title, description, icon: Icon }) => (
        <article
          key={title}
          className="flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="flex h-28 w-full shrink-0 items-center justify-center bg-gradient-to-r from-[#1A3A32] via-[#315d4f] to-[#D4AF37] sm:h-32">
            <Icon className="size-11 text-white sm:size-12" aria-hidden="true" />
          </div>
          <div className="flex min-h-[190px] flex-col p-5 text-center sm:p-6">
            <h3 className="mb-3 font-sans text-lg font-bold leading-snug text-[#1A3A32]">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-800">
              {description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
