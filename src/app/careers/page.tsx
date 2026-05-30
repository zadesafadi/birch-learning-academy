import type { Metadata } from "next";
import { Heart, GraduationCap, DollarSign, Users } from "lucide-react";
import { careers } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CareerApplicationForm } from "@/components/careers/career-application-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Birch Learning Academy team. Competitive pay, professional development, and a supportive culture for early childhood educators.",
};

const benefits = [
  { icon: DollarSign, title: "Competitive Pay", description: "Above-market compensation with annual reviews" },
  { icon: GraduationCap, title: "Professional Growth", description: "40+ hours of paid development annually" },
  { icon: Heart, title: "Supportive Culture", description: "Small team, low turnover, genuine appreciation" },
  { icon: Users, title: "Low Ratios", description: "Teach, don't just manage — with time for each child" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join a team that values educators as the professionals they are"
      />

      <Section background="cream">
        <SectionHeading title="Why Work at Birch?" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimateInView key={benefit.title} delay={index * 0.08}>
              <div className="text-center p-4">
                <div className="inline-flex p-3 rounded-xl bg-sage/10 text-sage mb-3">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-1">{benefit.title}</h3>
                <p className="text-charcoal/70 text-sm">{benefit.description}</p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="birch">
        <SectionHeading title="Open Positions" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {careers.map((job, index) => (
            <AnimateInView key={job.title} delay={index * 0.08}>
              <Card className="h-full">
                <span className="text-xs font-medium text-sage bg-sage/10 px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <h3 className="font-serif text-xl text-charcoal mt-3 mb-2">{job.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{job.description}</p>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="white">
        <AnimateInView>
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-2 text-center">Apply Now</h2>
            <p className="text-charcoal/70 text-center mb-8">
              We&apos;d love to hear from passionate educators who share our vision.
            </p>
            <CareerApplicationForm />
          </div>
        </AnimateInView>
      </Section>
    </>
  );
}
