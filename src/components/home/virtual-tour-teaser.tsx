import { Section } from "@/components/ui/section";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";
import { PlayroomAnimatedPreview } from "@/components/home/playroom-animated-preview";

export function VirtualTourTeaser() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimateInView>
          <PlayroomAnimatedPreview />
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <p className="text-sage font-medium tracking-widest uppercase text-sm mb-3">
            Virtual Tour
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium mb-4">
            Step Inside Birch Learning Academy
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Explore our nature-inspired classrooms, outdoor learning spaces, art
            studio, and bright learning spaces from the comfort of your home. See
            why families across Johnson County choose Birch.
          </p>
          <Button href="/contact" variant="secondary">
            Take a Virtual Tour
          </Button>
        </AnimateInView>
      </div>
    </Section>
  );
}
