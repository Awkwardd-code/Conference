import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Info, Sprout } from "lucide-react";
import type { PublicConference } from "@/lib/public-conferences";

const generalTracks = [
  "Emerging ideas and developments",
  "Research methods and evidence",
  "Practice, policy, and application",
];

const bootcampTracks = [
  "Research foundations and academic writing",
  "Artificial intelligence and emerging technology",
  "Cyber law, digital rights, and governance",
];

const alignedGoals = [
  {
    number: "03",
    label: "Good Health and Well-being",
    image: "/SDG_17_Goals_4K/SDG_03_Good_Health_and_Well-being.png",
  },
  {
    number: "04",
    label: "Quality Education",
    image: "/SDG_17_Goals_4K/SDG_04_Quality_Education.png",
  },
  {
    number: "17",
    label: "Partnerships for the Goals",
    image: "/SDG_17_Goals_4K/SDG_17_Partnerships_for_the_Goals.png",
  },
];

export default function SessionTracksSection({
  conference,
}: {
  conference: PublicConference;
}) {
  const isResearchBootcamp =
    conference.slug ===
    "research-bootcamp-1-on-artificial-intelligence-and-cyber-law";
  const tracks = isResearchBootcamp ? bootcampTracks : generalTracks;
  const topicsHref = `/event/${conference.slug}/submission/topics`;

  return (
    <section
      aria-labelledby="session-topics-title"
      className="bg-white px-3 pb-6 pt-4 sm:px-5 sm:pb-8 sm:pt-5 lg:px-8"
    >
      <article className="mx-auto w-full max-w-[1680px] border border-[#efdadd] bg-white p-4 shadow-[8px_8px_0_rgba(114,63,18,0.07)] md:w-[90%] sm:p-6 lg:w-4/5 lg:p-8">
        <header className="text-center">
          <h2
            id="session-topics-title"
            className="text-2xl font-extrabold tracking-tight text-[#49202a] sm:text-3xl"
          >
            Conference Session{" "}
            <span className="font-medium italic text-[#a34758]">Tracks</span>
          </h2>
          <p className="mx-auto mt-3 max-w-5xl text-sm leading-6 text-[#343a40] sm:text-base">
            The session tracks highlight research areas connected to{" "}
            <strong>{conference.title}</strong> and invite interdisciplinary
            discussion and knowledge-sharing.
          </p>
          <p className="mx-auto mt-3 max-w-5xl text-sm leading-6 text-[#343a40] sm:text-base">
            They offer a starting point for researchers and practitioners to
            exchange perspectives, explore new ideas, and connect research with
            real-world questions.
          </p>
          <p className="mx-auto mt-3 max-w-5xl text-sm leading-6 text-[#343a40] sm:text-base">
            The detailed program and session schedule will be shared by the
            organizers when confirmed.
          </p>
        </header>

        <div className="mt-7">
          <div className="flex items-center justify-center gap-3 text-[#a34758]">
            <span className="flex size-9 items-center justify-center rounded-full border border-[#c96c78]">
              <Sprout aria-hidden="true" className="size-5" />
            </span>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#34443a]">
              Related Sustainable Development Goals
            </h3>
          </div>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
            {alignedGoals.map((goal) => (
              <li
                key={goal.number}
                className="flex min-h-[3.5rem] items-center gap-2 border border-[#efdadd] bg-white py-1 pl-1 pr-3 text-xs text-[#343a40] transition duration-200 hover:-translate-y-1 hover:border-[#c96c78] hover:shadow-md sm:text-sm"
              >
                <Image
                  src={goal.image}
                  alt=""
                  width={48}
                  height={48}
                  className="size-10 object-cover"
                />
                <span>
                  SDG {goal.number}: {goal.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-5 border-t border-[#efdadd]" />

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <li key={track}>
              <Link
                href={topicsHref}
                className="group flex min-h-[4.5rem] items-center gap-3 border border-[#efdadd] bg-[#fffafa] px-4 py-3 transition duration-200 hover:-translate-y-1 hover:border-[#762838] hover:bg-[#a34758] hover:text-white hover:shadow-[5px_5px_0_rgba(114,40,56,0.18)] focus-visible:-translate-y-1 focus-visible:border-[#762838] focus-visible:bg-[#a34758] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762838] focus-visible:shadow-[5px_5px_0_rgba(114,40,56,0.18)]"
              >
                <span className="border-r border-[#efdadd] pr-3 font-serif text-2xl text-[#a34758] transition-colors group-hover:border-white/40 group-hover:text-[#fff0f2] group-focus-visible:border-white/40 group-focus-visible:text-[#fff0f2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold leading-5 text-[#29251f] transition-colors group-hover:text-white group-focus-visible:text-white">
                  {track}
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <footer className="mt-5 flex flex-col gap-4 bg-[#762838] px-4 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="flex items-start gap-2.5 text-sm leading-6">
            <Info
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-[#f1c2c8]"
            />
            <span>
              Explore additional topic information and updates on the Session
              Tracks page.
            </span>
          </p>
          <Link
            href={topicsHref}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 bg-[#f1c2c8] px-5 text-xs font-extrabold uppercase tracking-wide text-[#49202a] transition-colors hover:bg-[#fff0f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View Topics
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </footer>
      </article>
    </section>
  );
}
