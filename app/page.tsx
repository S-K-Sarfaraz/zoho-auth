import Image from "next/image";

import HeroScroll from "@/components/HeroScroll";

import FutureAISection from "@/components/FutureAISection";
import AIContentBlocks from "@/components/AIContentBlocks";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import Carousel from "@/components/landing/Carousel";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <AnimatedNavigation />
      <HeroScroll />
      <div className="relative z-10 bg-black">
        <Carousel />
        <FutureAISection />
        <AIContentBlocks />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
