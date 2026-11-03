import QuickLinksSidebar from "@/components/layout/QuickLinksSidebar";
import PageHeroSlider from "@/components/home/PageHeroSlider";
import InvitationContact from "@/components/invitation/InvitationContact";
import InvitationHero from "@/components/invitation/InvitationHero";
import InvitationInfoCards from "@/components/invitation/InvitationInfoCards";
import InvitationIntro from "@/components/invitation/InvitationIntro";
import InvitationProcess from "@/components/invitation/InvitationProcess";

export default function PublicInvitationLetterPage() {
  return (
    <>
      <PageHeroSlider />
      <main className="bg-[#fbfcfb]">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:px-10">
        <div className="min-w-0 space-y-8">
          <InvitationHero />
          <InvitationIntro />
          <InvitationProcess />
          <InvitationInfoCards />
          <InvitationContact />
        </div>
        <QuickLinksSidebar />
      </div>
      </main>
    </>
  );
}
