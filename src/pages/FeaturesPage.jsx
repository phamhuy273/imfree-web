import FeatureShowcase from "../components/features/FeatureShowcase";
import FeatureGrid from "../components/features/FeatureGrid";
import VisualFeatureCards from "../components/features/VisualFeatureCards";

export default function FeaturesPage() {
  return (
    <main>
      <FeatureShowcase />
      <FeatureGrid />
      <VisualFeatureCards />
    </main>
  );
}
