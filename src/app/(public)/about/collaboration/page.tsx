import { CheckCircle2 } from "lucide-react";
import PageHeroSlider from "@/components/home/PageHeroSlider";
import QuickLinksSidebar from "@/components/layout/QuickLinksSidebar";

const collaborationBenefits = [
  "Share knowledge and ideas with peers from around the world.",
  "Gain access to diverse perspectives that strengthen research and publications.",
  "Expand professional networks and connect with global experts.",
  "Leverage shared resources to reach wider audiences and promote academic growth.",
];

export default function PublicCollaborationPage() {
  return (
    <>
      <PageHeroSlider />
      <main className="bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-4 py-8 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-4 lg:gap-10 lg:px-10 lg:py-14">
        <article className="min-w-0 lg:col-span-3">
          <header className="mb-8 text-center sm:mb-10">
            <h1 className="mx-auto max-w-3xl font-sans text-[clamp(1.75rem,5vw,2.25rem)] font-extrabold leading-tight text-[#1A3A32]">
              Collaborate with{" "}
              <span className="text-[#D4AF37]">Global Scholarly Nexus</span>
            </h1>
          </header>

          <div className="space-y-4 text-left text-[0.9375rem] leading-relaxed text-gray-800 sm:space-y-5 sm:text-base">
            <p>
              Global Scholarly Nexus invites universities, institutions, and
              academic bodies to collaborate with us in advancing research and
              academic excellence. Our platform offers an opportunity to work
              together through impactful conferences, high-quality
              publications, and global knowledge-sharing.
            </p>
            <p>
              Through collaboration, we foster teamwork and create meaningful
              opportunities for researchers and institutions to grow together:
            </p>
          </div>

          <ul className="my-6 space-y-3 pl-0 sm:my-7 sm:space-y-4 sm:pl-6 md:pl-10">
            {collaborationBenefits.map((benefit) => (
              <li key={benefit} className="flex min-w-0 items-start gap-2 text-sm leading-relaxed text-gray-800 sm:gap-3 sm:text-base">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 fill-[#D4AF37] text-white sm:size-5"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <section aria-labelledby="services-heading">
            <h2
              id="services-heading"
              className="mb-5 text-center font-sans text-2xl font-extrabold leading-tight text-[#1A3A32] sm:mb-6 sm:text-3xl"
            >
              Our Collaborative Services Include
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Research Networks", "Connect with scholars and institutions across disciplines."],
                ["Conference Partnerships", "Build impactful events that bring ideas into conversation."],
                ["Publication Support", "Share valuable research with a wider academic audience."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-[#dce8e2] bg-[#f5f8f6] p-4 text-center shadow-sm sm:p-5"
                >
                  <h3 className="font-bold text-[#1A3A32]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 space-y-4 break-words leading-relaxed text-gray-800 sm:mt-10 sm:space-y-5">
            <p>
              We are connected with international journals and academic
              communities, helping every collaboration create lasting global
              impact.
            </p>
            <p>For collaboration inquiries or more information:</p>
            <p>
              <strong className="text-[#1A3A32]">Email:</strong>{" "}
              <a
                className="text-[#1A3A32] underline decoration-[#D4AF37] underline-offset-4"
                href="mailto:team@globalscholarlynexus.com"
              >
                team@globalscholarlynexus.com
              </a>
            </p>
            <p>
              <strong className="text-[#1A3A32]">Call/WhatsApp:</strong>{" "}
              <a className="text-[#1A3A32]" href="tel:+17178835943">
                +1 717 883 5943
              </a>
            </p>
            <p className="font-semibold text-[#D4AF37]">
              Let&apos;s join hands to advance research, foster innovation, and
              make a lasting impact.
            </p>
          </section>
        </article>

        <QuickLinksSidebar />
        </div>
      </main>
    </>
  );
}
