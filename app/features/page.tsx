import FeaturesHero from "@/components/features/FeaturesHero";
import BentoGrid from "@/components/features/BentoGrid";
import ParallaxFeature from "@/components/features/ParallaxFeature";
import FeaturesCTA from "@/components/features/FeaturesCTA";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import Footer from "@/components/layout/Footer";

export default function FeaturesPage() {
  return (
    <main className="bg-black min-h-screen selection:bg-blue-500 selection:text-white">
      <AnimatedNavigation />
      
      <FeaturesHero />
      
      <BentoGrid />
      
      <ParallaxFeature
        title="Neural Sync"
        subtitle="Real-Time"
        description="Our proprietary synapsis protocol ensures your data is replicated across the globe in milliseconds, maintaining state consistency even in partitioned networks."
        image="/images/neural-sync.png"
        align="left"
      />
      
      <ParallaxFeature
        title="Zero Trust"
        subtitle="Security"
        description="Every request is authenticated, authorized, and encrypted. We assume breach and verify explicitly, providing you with military-grade protection for your most sensitive assets."
        image="/images/zero-trust.png"
        align="right"
      />

       <ParallaxFeature
        title="Quantum Ready"
        subtitle="Future Proof"
        description="Built on algorithms designed to withstand the post-quantum era. Your infrastructure is not just ready for today, but solidified for the computing paradigms of tomorrow."
        image="/images/quantum-core.png"
        align="left"
      />
      
      <FeaturesCTA />
      
      <Footer />
    </main>
  );
}
