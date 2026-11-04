import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Users,
} from "lucide-react";
import type { PublicConference } from "@/lib/public-conferences";

const audience = [
  {
    icon: GraduationCap,
    title: "Students and researchers",
    description:
      "Build knowledge, develop research ideas, and learn from discussion with peers.",
  },
  {
    icon: BookOpen,
    title: "Educators and academics",
    description:
      "Share experience, exchange perspectives, and explore opportunities for collaboration.",
  },
  {
    icon: Users,
    title: "Professionals and practitioners",
    description:
      "Connect current research with questions emerging in professional practice.",
  },
  {
    icon: Handshake,
    title: "Institutions and partners",
    description:
      "Meet others interested in advancing discussion and cooperation in the field.",
  },
];

export default function ConferenceDetailsSections({
  conference,
}: {
  conference: PublicConference;
}) {
  const eventPath = `/event/${conference.slug}`;
  const isResearchBootcamp =
    conference.slug ===
    "research-bootcamp-1-on-artificial-intelligence-and-cyber-law";
  return (
    <>
      <section
        aria-labelledby="conference-theme-title"
        className="bg-white py-6 sm:py-8"
      >
        <article className="w-full border border-[#e1e1e1] bg-white p-5 sm:p-8">
          <h2
            id="conference-theme-title"
            className="border-b border-[#c96c78] pb-2 font-serif text-lg font-bold text-[#762838]"
          >
            Conference Theme and Objective
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#343a40] sm:text-base">
            <p>
              {isResearchBootcamp
                ? "This research bootcamp focuses on building practical research skills while examining the fast-changing relationship between artificial intelligence, digital systems, and law."
                : `This conference brings attention to current questions and developments in ${conference.title.replace(/^International Conference on /i, "")}.`}
            </p>
            <p>
              Its objective is to create an opportunity for learners,
              researchers, educators, and practitioners to exchange ideas,
              strengthen understanding, and discuss challenges related to the
              conference subject.
            </p>
            <p>
              Participants are encouraged to connect research with real-world
              needs and consider how collaboration can contribute to future
              academic and professional work. Confirmed session details will be
              shared by the organizers.
            </p>
          </div>
        </article>
      </section>

      <section
        aria-labelledby="about-organizer-title"
        className="bg-[#f5f6f7] py-4 sm:py-5"
      >
        <article className="w-full border border-[#e1e1e1] bg-white p-5 sm:p-8">
          <h2
            id="about-organizer-title"
            className="border-b border-[#c96c78] pb-2 font-serif text-lg font-bold text-[#762838]"
          >
            About the Organizer
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#343a40] sm:text-base">
            {conference.organizer} is organizing{" "}
            <strong>{conference.title}</strong>. The event website is the place
            to find conference information, participation links, and updates
            as they are confirmed.
          </p>
          <Link
            href={`${eventPath}/contact`}
            className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#a34758] hover:text-[#762838] hover:underline"
          >
            Contact the organizer
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </article>
      </section>

      <section className="bg-[#efefef] py-6 sm:py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-lg border border-[#e8c9cd] bg-white p-5 sm:p-7">
            <h2 className="text-center text-xl font-bold text-[#762838]">
              Who should attend?
            </h2>
            <ul className="mt-5 space-y-3">
              {audience.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-[#a34758]"
                    />
                    <span className="text-sm leading-6 text-[#36434b]">
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                );
              })}
            </ul>
            <Link
              href={`${eventPath}/about/who-should-attend`}
              className="mt-auto inline-flex min-h-10 w-fit items-center gap-2 rounded-sm bg-[#a34758] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#762838]"
            >
              View More
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </article>

          <article className="flex h-full flex-col rounded-lg border border-[#e8c9cd] bg-white p-5 sm:p-7">
            <h2 className="text-center text-xl font-bold text-[#762838]">
              Why should you attend?
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Explore ideas and developments connected to the conference subject.",
                "Take part in academic and professional knowledge exchange.",
                "Learn about different research approaches and perspectives.",
                "Connect with people who share an interest in the field.",
              ].map((reason) => (
                <li key={reason} className="flex items-start gap-2.5">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-[#a34758]"
                  />
                  <span className="text-sm leading-6 text-[#36434b]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={`${eventPath}/about/why-should-attend`}
              className="mt-auto inline-flex min-h-10 w-fit items-center gap-2 rounded-sm bg-[#a34758] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#762838]"
            >
              View More
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="why-register-title"
        className="!mb-0 bg-[#efefef] pb-1 sm:pb-2"
      >
        <div>
          <h2
            id="why-register-title"
            className="border-b border-[#c96c78] pb-2 font-serif text-xl font-bold text-[#762838]"
          >
            Why Register?
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#343a40] sm:text-base">
            Registering helps you plan your participation and receive
            event-specific instructions from the organizers. Review the
            registration information for available options and requirements.
          </p>
          <ul className="mt-3 space-y-1.5 pl-5 text-sm leading-6 text-[#36434b] sm:text-base">
            {[
              "Get the information you need to prepare for the event.",
              "Choose from the participation options listed by the organizers.",
              "Receive updates about the program when they are announced.",
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-[#a34758]"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`${eventPath}/registration/conference-registration`}
            className="mt-4 inline-flex min-h-10 items-center gap-2 font-semibold text-[#a34758] hover:text-[#762838] hover:underline"
          >
            View registration information
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

    </>
  );
}
