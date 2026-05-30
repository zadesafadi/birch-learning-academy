import type { Metadata } from "next";
import { Shield, Heart, GraduationCap, AlertTriangle, Users, Thermometer } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Safety & Security",
  description:
    "Biometric secure entry, CPR-certified staff, fenced outdoor spaces, and comprehensive health protocols at Birch Learning Academy.",
};

const safetySections = [
  {
    icon: Shield,
    title: "Secure Facility",
    items: [
      "Biometric fingerprint entry for all authorized adults",
      "Security cameras in common areas (not classrooms)",
      "Fully fenced outdoor play spaces with single-point entry",
      "Visitor check-in with photo ID verification",
    ],
  },
  {
    icon: Thermometer,
    title: "Health & Cleanliness",
    items: [
      "Enhanced cleaning protocols with EPA-approved disinfectants",
      "Daily health screenings at drop-off",
      "HEPA air filtration throughout the building",
      "Professional deep cleaning weekly",
    ],
  },
  {
    icon: GraduationCap,
    title: "Staff Training",
    items: [
      "All staff CPR & First Aid certified",
      "Ongoing safety training quarterly",
      "Background checks and fingerprinting required",
      "Mandated reporter training for all employees",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Preparedness",
    items: [
      "Monthly fire and tornado drills",
      "Written emergency action plans",
      "Emergency supply kits in every classroom",
      "Immediate parent notification system",
    ],
  },
  {
    icon: Heart,
    title: "Illness Policy",
    items: [
      "Fever-free for 24 hours without medication before return",
      "KDHE guidelines strictly followed",
      "Prompt communication about illness exposure",
      "Separate sick child area until pickup",
    ],
  },
  {
    icon: Users,
    title: "Pickup & Dropoff",
    items: [
      "Authorized pickup list with photo verification",
      "Government-issued ID required for changes",
      "Secure handoff protocols",
      "Real-time sign-in/out via Brightwheel app",
    ],
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        title="Safety & Security"
        subtitle="Your child's safety is our highest priority — every single day"
        image="https://images.unsplash.com/photo-1503454537845-b83146933a1b?w=1920&h=600&fit=crop"
        imageAlt="Safe learning environment at Birch Learning Academy"
      />

      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateInView>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              We know safety is the #1 concern for every parent. That&apos;s why we&apos;ve
              invested in biometric entry, low student-teacher ratios, comprehensive staff
              training, and transparent communication — so you can focus on the joy of
              watching your child grow.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="birch">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetySections.map((section, index) => (
            <AnimateInView key={section.title} delay={index * 0.08}>
              <Card className="h-full">
                <div className="p-3 rounded-xl bg-sage/10 text-sage inline-flex mb-4">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-charcoal/70 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
