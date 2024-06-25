import DemoSection from '../components/homeNoAuth/DemoSection/DemoSection';
import FeatureSection from '../components/homeNoAuth/FeaturesSection/FeatureSection';
import PresentationSection from '../components/homeNoAuth/PresentationSection/PresentationSection';

export default function HomeNoAuth() {
  return (
    <main>
      <PresentationSection />
      <FeatureSection />
      <DemoSection />
    </main>
  );
}
