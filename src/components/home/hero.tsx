import Image from "next/image";
import { Button } from "@/components/ui/button";

const heroImages = [
  "https://images.unsplash.com/photo-1503454537845-b83146933a1b?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1587654787591-70c8d94be832?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1920&h=1080&fit=crop",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden box-border"
      style={{ paddingTop: "var(--site-top-offset)" }}
    >
      <div className="absolute inset-0">
        <Image
          src={heroImages[0]}
          alt="Children exploring nature in the outdoor classroom at Birch Learning Academy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-32">
        <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-sm border border-white/30 text-white font-semibold tracking-[0.18em] uppercase text-sm shadow-lg animate-fade-in-up">
          Johnson County, Kansas
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6 animate-fade-in-up">
          Where Curiosity Blossoms
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          A boutique early learning experience for children ages 2.5 to 5 in
          the Leawood, Overland Park, and Olathe area
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <Button href="/contact" size="lg">
            Schedule a Tour
          </Button>
          <Button href="/programs" variant="outline" size="lg">
            Explore Our Programs
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
