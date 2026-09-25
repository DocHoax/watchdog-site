import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ArchitectureSection } from "@/components/sections/architecture";
import { DocsSection } from "@/components/sections/docs";
import { CrossPlatformSection } from "@/components/sections/cross-platform";
import { OpenSourceSection } from "@/components/sections/open-source";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />
        <DocsSection />
        <CrossPlatformSection />
        <OpenSourceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
