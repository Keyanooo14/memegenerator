import { FloatingMemes } from './FloatingMemes';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { ShowcaseSection } from './ShowcaseSection';
import { HowItWorksSection } from './HowItWorksSection';
import { CTASection } from './CTASection';
import { Footer } from './Footer';

interface LandingPageProps {
  onEnterGenerator: () => void;
}

export function LandingPage({ onEnterGenerator }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#0F172A] relative overflow-hidden">
      <FloatingMemes />
      <Navbar onLaunchClick={onEnterGenerator} />
      <HeroSection onStartClick={onEnterGenerator} />
      <FeaturesSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <CTASection onGetStartedClick={onEnterGenerator} />
      <Footer />
    </div>
  );
}
