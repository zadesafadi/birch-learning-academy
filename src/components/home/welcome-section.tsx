"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/site-data";
import { Section } from "@/components/ui/section";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";

const paragraphs = [
  "At Birch Learning Academy, we believe early childhood is not a season to rush through—it is a critical foundation to nurture. Modeled after our namesake, we cultivate resilience, adaptability, and exceptional growth in every child who walks through our doors.",
  "We are intentionally not a commercial franchise. Serving families across the Johnson County area, Birch Learning Academy is a private-pay, boutique micro-academy engineered for families who refuse to compromise on early education. Our curriculum is built on Brightwheel\u2019s Experience Curriculum—a research-based, standards-aligned system—delivered with instructor-led precision for children ages 2.5 to 5 years old.",
  "By capping our enrollment and maintaining an elite 1:7 to 1:8 teacher-to-child ratio, we offer a level of individualized engagement that standard centers legally requiring only 1:12 simply cannot match. From our organically catered daily menus to our secure, keyless-access infrastructure, every operational detail is built around safety, transparency, and elite developmental care.",
];

export function WelcomeSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section background="cream">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <AnimateInView className="order-2 lg:order-1">
          <p className="text-sage font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Welcome to Birch
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium mb-4 sm:mb-6 leading-tight">
            The Foundation for Directing Greatness
          </h2>

          {/* Mobile: first paragraph + read more */}
          <div className="sm:hidden space-y-3 text-charcoal/70 leading-relaxed text-[15px]">
            <p>{paragraphs[0]}</p>
            {expanded && (
              <div className="space-y-3">
                {paragraphs.slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-sage font-medium text-sm hover:text-sage-dark transition-colors"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </div>

          {/* Desktop: full copy */}
          <div className="hidden sm:block space-y-4 text-charcoal/70 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <Button href="/about" variant="ghost" className="mt-6 sm:mt-8 group">
            Meet Our Founders
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimateInView>

        <AnimateInView delay={0.2} className="order-1 lg:order-2">
          <div className="relative aspect-square max-w-xs sm:max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={siteImages.founders}
              alt="Zade Safadi and Deanna Elkadri, founders of Birch Learning Academy"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 80vw, 50vw"
            />
          </div>
        </AnimateInView>
      </div>
    </Section>
  );
}
