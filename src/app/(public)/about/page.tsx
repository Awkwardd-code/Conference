import CommitmentSection from "@/components/about/CommitmentSection";
import FeatureCardsGrid from "@/components/about/FeatureCardsGrid";
import VisionMission from "@/components/about/VisionMission";
import PageHeroSlider from "@/components/home/PageHeroSlider";
import QuickLinksSidebar from "@/components/layout/QuickLinksSidebar";

export default function PublicAboutPage() {
  return (
    <>
      <PageHeroSlider />
      <main className="bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-4 lg:gap-10 lg:px-10">
          <div className="min-w-0 lg:col-span-3">
            <header className="mb-10 text-center">
              <h1 className="font-sans text-3xl font-extrabold leading-tight text-[#1A3A32] sm:text-4xl">
                About <span className="text-[#D4AF37]">Global Scholarly Nexus</span>
              </h1>
              <p className="mt-7 text-left text-base leading-relaxed text-gray-800">
                Global Scholarly Nexus is a worldwide academic platform
                connecting researchers, educators, and institutions through
                meaningful exchange.
              </p>
              <p className="mt-4 text-left leading-relaxed text-gray-800">
                We create spaces where rigorous scholarship meets fresh
                perspectives and practical impact. Through conferences,
                publications, and collaborative initiatives, we help ideas
                travel further and support a more connected research
                community.
              </p>
            </header>

            <section aria-labelledby="what-we-do">
              <div className="mb-6 text-center">
                <h2
                  id="what-we-do"
                  className="font-sans text-3xl font-extrabold text-[#1A3A32]"
                >
                  What We Do
                </h2>
              </div>
              <p className="mb-4 text-left leading-relaxed text-gray-800">
                Global Scholarly Nexus aims to enhance the research community
                with knowledge and recent innovations. We support the
                communication of scientific findings to improve understanding
                and create meaningful impact.
              </p>
              <FeatureCardsGrid />
            </section>

          </div>

          <QuickLinksSidebar />
        </div>
        <section
          className="mx-auto max-w-[1400px] px-4 pb-12 sm:px-8 sm:pb-16 lg:px-10"
          aria-label="Vision and mission"
        >
          <VisionMission />
        </section>
      </main>
      <CommitmentSection />
    </>
  );
}
