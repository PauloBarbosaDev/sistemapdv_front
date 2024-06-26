import DemoSection from '../components/homeNoAuth/DemoSection/DemoSection';
import FeatureSection from '../components/homeNoAuth/FeaturesSection/FeatureSection';
import HelpSection from '../components/homeNoAuth/HelpSection/HelpSection';
import PresentationSection from '../components/homeNoAuth/PresentationSection/PresentationSection';

export default function HomeNoAuth() {
  return (
    <main>
      <PresentationSection />
      <FeatureSection />
      <DemoSection />
      <HelpSection />
    </main>
  );
}
