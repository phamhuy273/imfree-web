import HeroSection from "../components/home/HeroSection";
import FeatureOverview from "../components/home/FeatureOverview";
import FeatureHighlights from "../components/home/FeatureHighlights";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureOverview />
      <FeatureHighlights />
    </main>
  );
}
