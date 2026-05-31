"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateInView } from "@/components/ui/animate-in-view";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <Section background="sage">
      <SectionHeading
        title="What Families Say"
        subtitle="Hear from Johnson County parents who chose Birch."
        light
      />
      <AnimateInView>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber text-amber" />
            ))}
          </div>
          <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-6 sm:mb-8 min-h-[100px] sm:min-h-[120px]">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <p className="text-white font-medium">{testimonial.name}</p>
            <p className="text-white/70 text-sm">Parent of {testimonial.child}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={prev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-amber" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </AnimateInView>
    </Section>
  );
}
