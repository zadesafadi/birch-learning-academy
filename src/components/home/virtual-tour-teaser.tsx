import Image from "next/image";
import { Play } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-data";

export function VirtualTourTeaser() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimateInView>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
            <Image
              src={siteImages.classroom}
              alt="Bright, natural-light classroom at Birch Learning Academy"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center group-hover:bg-charcoal/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-7 w-7 text-sage ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
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
