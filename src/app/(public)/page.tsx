import FeaturedPublications from "@/components/home/FeaturedPublications";
import HomeInteractiveSections from "@/components/home/HomeInteractiveSections";
import InstitutionalLogos from "@/components/home/InstitutionalLogos";
import PeerReviewTimeline from "@/components/home/PeerReviewTimeline";
import PostConferenceSpeakers from "@/components/home/PostConferenceSpeakers";
import RecentAwardees from "@/components/home/RecentAwardees";
import SDGGrid from "@/components/home/SDGGrid";
import SocialMediaCards from "@/components/home/SocialMediaCards";
import Testimonials from "@/components/home/Testimonials";
import UpcomingConferenceGrid from "@/components/home/UpcomingConferenceGrid";
import VideoBanner from "@/components/home/VideoBanner";
import VideoLibrary from "@/components/home/VideoLibrary";
import WelcomeMission from "@/components/home/WelcomeMission";

export default function PublicHomePage() {
  return (
    <main>
      <HomeInteractiveSections />
      <WelcomeMission />
      <VideoBanner />
      <UpcomingConferenceGrid />
      <SDGGrid />
      <RecentAwardees />
      <PostConferenceSpeakers />
      <VideoLibrary />
      <PeerReviewTimeline />
      <InstitutionalLogos />
      <FeaturedPublications />
      <Testimonials />
      <SocialMediaCards />
    </main>
  );
}
