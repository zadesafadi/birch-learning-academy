import type { Metadata } from "next";
import Image from "next/image";
import { teamMembers, siteImages } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Degreed lead teachers, passionate educators, and dedicated staff at Birch Learning Academy in Johnson County, Kansas.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="Passionate educators who choose Birch — and stay"
        image={siteImages.outdoor}
        imageAlt="Birch Learning Academy teaching team"
      />

      <Section background="cream">
        <SectionHeading title="Leadership Team" />
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimateInView key={member.name} delay={index * 0.1}>
              <Card className="text-center h-full">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-birch">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-serif text-xl text-charcoal">{member.name}</h3>
                <p className="text-sage text-sm font-medium mb-1">{member.role}</p>
                <p className="text-charcoal/50 text-xs mb-3">{member.credentials}</p>
                <p className="text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="birch">
        <AnimateInView>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Why Teachers Love Birch</h2>
            <blockquote className="font-serif text-xl text-charcoal/80 italic leading-relaxed mb-4">
              &ldquo;After years in franchise centers, Birch feels like coming home. Small
              classes, respected expertise, professional development that actually matters,
              and a leadership team that listens.&rdquo;
            </blockquote>
            <p className="text-charcoal/60 text-sm">— Ms. Rachel Kim, Lead Preschool Teacher</p>
          </div>
        </AnimateInView>
      </Section>

      <Section background="white">
        <AnimateInView>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Professional Development</h2>
            <p className="text-charcoal/70 leading-relaxed">
              Every teacher receives 40+ hours of professional development annually — from
              Montessori workshops to Reggio documentation training, nature-based education
              certifications, and social-emotional learning intensives. We invest in our
              team because your children deserve the best.
            </p>
          </div>
        </AnimateInView>
      </Section>

      <CTASection />
    </>
  );
}
