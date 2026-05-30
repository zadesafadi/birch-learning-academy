import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { WelcomeSection } from "@/components/home/welcome-section";
import { ProgramsOverview } from "@/components/home/programs-overview";
import { DifferentiatorsGrid } from "@/components/home/differentiators-grid";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { VirtualTourTeaser } from "@/components/home/virtual-tour-teaser";
import { CTASection } from "@/components/shared/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WelcomeSection />
      <ProgramsOverview />
      <DifferentiatorsGrid />
      <TestimonialsCarousel />
      <VirtualTourTeaser />
      <CTASection />
    </>
  );
}
