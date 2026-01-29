import Image from "next/image";

import HeroScroll from "@/components/HeroScroll";

import FutureAISection from "@/components/FutureAISection";
import AIContentBlocks from "@/components/AIContentBlocks";
import AnimatedNavigation from "@/components/AnimatedNavigation";

export default function Home() {
  return (
    <main className="bg-black">
      <AnimatedNavigation />
      <HeroScroll />
      <FutureAISection />
      <AIContentBlocks />
    </main>
  );
}
