import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroAnimatedBackground } from "@/components/home/hero-animated-background";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden box-border bg-sage-dark"
      style={{ paddingTop: "var(--site-top-offset)" }}
    >
      <HeroAnimatedBackground />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-24 sm:pb-28">
        <p className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/35 backdrop-blur-sm border border-white/30 text-white font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-xs sm:text-sm shadow-lg animate-fade-in-up">
          Johnson County, Kansas
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-4 sm:mb-6 animate-fade-in-up">
          Where Curiosity Blossoms
        </h1>
        <p className="text-white/90 text-[15px] sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed animate-fade-in-up">
          <span className="sm:hidden">
            Boutique early learning for ages 2.5–5 in Johnson County.
          </span>
          <span className="hidden sm:inline">
            A boutique early learning experience for children ages 2.5 to 5 in the
            Johnson County area
          </span>
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 animate-fade-in-up">
          <Button href="/contact" size="lg" className="w-full sm:w-auto max-w-xs sm:max-w-none">
            Schedule a Tour
          </Button>
          <Link
            href="/programs"
            className="sm:hidden text-white/90 text-sm font-medium underline underline-offset-4 hover:text-white transition-colors"
          >
            Explore Our Programs
          </Link>
          <Button
            href="/programs"
            variant="outline"
            size="lg"
            className="hidden sm:inline-flex w-auto"
          >
            Explore Our Programs
          </Button>
        </div>
      </div>

      <div className="absolute bottom-20 sm:bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
