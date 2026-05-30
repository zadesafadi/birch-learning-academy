import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { ProgramMatcher } from "@/components/programs/program-matcher";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our age-specific programs from infants through Pre-K. Play-based, nature-inspired early learning in Johnson County, Kansas.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Purposeful, play-based learning for every stage from 6 weeks to Pre-K"
        image="https://images.unsplash.com/photo-1587654787591-70c8d94be832?w=1920&h=600&fit=crop"
        imageAlt="Children engaged in learning activities at Birch Learning Academy"
      />

      <Section background="cream">
        <SectionHeading
          title="Find the Right Fit"
          subtitle="Each program is designed around developmental milestones, not arbitrary age cutoffs."
        />
        <ProgramMatcher />
      </Section>

      <Section background="birch">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <AnimateInView key={program.slug} delay={index * 0.1}>
              <Card hover className="h-full">
                <p className="text-sage text-sm font-medium mb-1">{program.ageRange}</p>
                <h2 className="font-serif text-2xl text-charcoal mb-3">{program.name}</h2>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-birch">
                  <span className="text-amber font-semibold">{program.tuition}</span>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1 text-sage font-medium text-sm hover:text-sage-dark transition-colors group"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
