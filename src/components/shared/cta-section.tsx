import { Phone } from "lucide-react";
import { siteConfig, siteImages } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { HeroAnimatedBackground } from "@/components/home/hero-animated-background";
import Image from "next/image";

interface CTASectionProps {
  /** Use illustrated animation instead of a photo — ideal until real facility photos are ready */
  animatedBackground?: boolean;
}

export function CTASection({ animatedBackground = false }: CTASectionProps) {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-sage">
      <div className="absolute inset-0">
        {animatedBackground ? (
          <HeroAnimatedBackground subtle />
        ) : (
          <>
            <Image
              src={siteImages.outdoor}
              alt="Outdoor learning at Birch Learning Academy"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-sage/85" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <AnimateInView>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-3 sm:mb-4">
            Ready to See the Birch Difference?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Schedule your private tour today. We can&apos;t wait to meet your
            family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Schedule a Tour
            </Button>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 text-white font-medium hover:text-amber transition-colors"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
