import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/site-data";
import { Section } from "@/components/ui/section";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";

export function WelcomeSection() {
  return (
    <Section background="cream">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateInView>
          <p className="text-sage font-medium tracking-widest uppercase text-sm mb-3">
            Welcome to Birch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium mb-6 leading-tight">
            The Foundation for Directing Greatness
          </h2>
          <div className="space-y-4 text-charcoal/70 leading-relaxed">
            <p>
              At Birch Learning Academy, we believe early childhood is not a season to
              rush through—it is a critical foundation to nurture. Modeled after our
              namesake, we cultivate resilience, adaptability, and exceptional growth in
              every child who walks through our doors.
            </p>
            <p>
              We are intentionally not a commercial franchise. Serving families across
              Serving families across the Johnson County area, Birch Learning Academy
              is a private-pay, boutique micro-academy engineered for families who refuse
              to compromise on early education. Our curriculum is built on Brightwheel&apos;s
              Experience Curriculum—a research-based, standards-aligned system—delivered with
              instructor-led precision for children ages 2.5 to 5 years old.
            </p>
            <p>
              By capping our enrollment and maintaining an elite 1:7 to 1:8
              teacher-to-child ratio, we offer a level of individualized engagement that
              standard centers legally requiring only 1:12 simply cannot match. From our
              organically catered daily menus to our secure, keyless-access
              infrastructure, every operational detail is built around safety,
              transparency, and elite developmental care.
            </p>
          </div>
          <Button href="/about" variant="ghost" className="mt-8 group">
            Meet Our Founders
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={siteImages.founders}
              alt="Zade Safadi and Deanna Elkadri, founders of Birch Learning Academy"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimateInView>
      </div>
    </Section>
  );
}
