import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import ReadMore from "@/components/shared/ReadMore";

const missionPoints = [
  "Facilitating the exchange of ideas across disciplines and borders.",
  "Promoting best practices in research, teaching, and publication.",
  "Organizing conferences that turn insight into meaningful dialogue.",
  "Supporting researchers at every stage of their academic journey.",
  "Encouraging collaboration between scholars, institutions, and industry.",
];

const announcements = [
  "Research Bootcamp 1 — 7 November 2026: Registration details will be announced soon.",
  "Applications are open for our upcoming speaker opportunities.",
  "Join the next Global Scholarly Nexus international conference.",
  "Submit your latest paper for peer review and publication.",
  "Explore new collaboration opportunities with our community.",
  "Meet the scholars shaping the next generation of research.",
  "Discover featured publications from our global network.",
];

function NewsItems() {
  return (
    <div className="flex flex-col">
      {announcements.map((announcement) => (
        <Link
          key={announcement}
          href="/conferences"
          className="group/item flex items-center gap-2 border-b border-gray-50 py-3 text-sm text-gray-700 transition-colors hover:text-[#D4AF37]"
        >
          <ChevronRight className="size-4 shrink-0 text-[#D4AF37] transition-transform group-hover/item:translate-x-1" />
          <span>{announcement}</span>
        </Link>
      ))}
    </div>
  );
}

export default function WelcomeMission() {
  return (
    <section className="w-full bg-[#F9F9F6] py-8 sm:py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-7 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <h2 className="mb-5 font-serif text-2xl font-bold leading-tight text-[#1A3A32] sm:mb-6 sm:text-3xl md:text-4xl">
            Welcome to Global Scholarly Nexus
          </h2>
          <ReadMore
            maxLines={3}
            text="Global Scholarly Nexus is a worldwide academic platform connecting researchers, educators, and institutions through meaningful exchange. We create spaces where rigorous scholarship can meet fresh perspectives and practical impact. Our network brings together diverse voices to advance understanding, strengthen communities, and turn research into responsible action."
          />
          <p className="mt-4 leading-relaxed text-gray-700">
            From global conferences to research publications and collaborative
            initiatives, GSN helps ideas travel further.{" "}
            <Link
              href="/about"
              className="cursor-pointer text-[#D4AF37] hover:underline"
            >
              View More
            </Link>
          </p>

          <h3 className="mb-3 mt-6 font-serif text-lg font-semibold leading-tight text-[#1A3A32] sm:mb-4 sm:mt-8 sm:text-xl md:text-2xl">
            Our mission is to enhance global academic dialogue by:
          </h3>
          <ul>
            {missionPoints.map((point) => (
              <li
                key={point}
                className="mb-2 flex items-start gap-2 text-sm text-gray-700 sm:mb-3 sm:gap-3 sm:text-base"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#D4AF37] sm:size-5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <ReadMore
              maxLines={4}
              text="We believe that the strongest academic communities are built on openness, curiosity, and a shared commitment to excellence. Together, we are building a more connected and equitable future for research, creating lasting relationships among scholars and institutions while making high-quality knowledge more accessible to the people and communities it can serve."
            />
          </div>
        </div>

        <aside className="min-w-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Researchers collaborating around a table"
            width={800}
            height={420}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mb-4 h-44 w-full rounded-xl object-cover shadow-lg sm:mb-8 sm:h-64"
          />

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-lg sm:p-6 md:p-8">
            <h3 className="mb-2 font-serif text-xl font-bold text-[#1A3A32] sm:text-2xl">
              News &amp;{" "}
              <span className="text-[#D4AF37]">Announcements</span>
            </h3>
            <p className="mb-4 text-sm text-gray-500 sm:mb-6">
              Explore the latest trending topics and opportunities from our
              scholarly community.
            </p>

            <div className="group relative h-40 overflow-hidden sm:h-48">
              <div className="news-ticker-track">
                <NewsItems />
                <NewsItems />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-sm font-semibold sm:mt-5 sm:gap-x-5 sm:pt-5">
              <Link
                href="/about/collaboration"
                className="text-[#1A3A32] transition-colors hover:text-[#D4AF37]"
              >
                Collaboration
              </Link>
              <Link
                href="/academic-library"
                className="text-[#1A3A32] transition-colors hover:text-[#D4AF37]"
              >
                Digital Library
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
