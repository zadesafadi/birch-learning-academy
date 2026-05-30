import type { Metadata } from "next";
import { Check } from "lucide-react";
import {
  enrollmentSteps,
  tuitionTable,
  includedInTuition,
  faqs,
  siteImages,
} from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared/cta-section";
import { JsonLd, getFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Enrollment & Tuition",
  description:
    "Transparent tuition pricing and a simple enrollment process. See what's included at Birch Learning Academy — no hidden fees.",
};

export default function EnrollmentPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(faqs)} />

      <PageHero
        title="Enrollment & Tuition"
        subtitle="Transparent pricing. Simple process. No surprises."
        image={siteImages.classroom}
        imageAlt="Enrollment at Birch Learning Academy"
      />

      <Section background="cream">
        <SectionHeading title="How Enrollment Works" subtitle="Five simple steps to joining the Birch family" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {enrollmentSteps.map((step, index) => (
            <AnimateInView key={step.step} delay={index * 0.08}>
              <Card className="text-center h-full">
                <div className="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center mx-auto mb-3 font-serif text-lg">
                  {step.step}
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">{step.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
              </Card>
            </AnimateInView>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/contact" size="lg">Start with a Tour</Button>
        </div>
      </Section>

      <Section background="birch">
        <SectionHeading
          title="Tuition & Fees"
          subtitle="We're proud to be the first center in Johnson County with fully transparent pricing"
        />
        <AnimateInView>
          <div className="overflow-x-auto rounded-2xl border border-birch bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-birch bg-cream">
                  <th className="px-6 py-4 font-serif text-charcoal">Program</th>
                  <th className="px-6 py-4 font-serif text-charcoal">Monthly</th>
                  <th className="px-6 py-4 font-serif text-charcoal">Weekly</th>
                  <th className="px-6 py-4 font-serif text-charcoal">Annual</th>
                </tr>
              </thead>
              <tbody>
                {tuitionTable.map((row) => (
                  <tr key={row.program} className="border-b border-birch last:border-0">
                    <td className="px-6 py-4 text-charcoal/80 text-sm">{row.program}</td>
                    <td className="px-6 py-4 text-amber font-semibold">{row.monthly}</td>
                    <td className="px-6 py-4 text-charcoal/80 text-sm">{row.weekly}</td>
                    <td className="px-6 py-4 text-charcoal/60 text-sm">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <AnimateInView>
            <Card>
              <h3 className="font-serif text-xl text-charcoal mb-4">Included in Tuition</h3>
              <ul className="space-y-2">
                {includedInTuition.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <Check className="h-4 w-4 text-sage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <Card>
              <h3 className="font-serif text-xl text-charcoal mb-4">Additional Info</h3>
              <ul className="space-y-3 text-sm text-charcoal/70">
                <li><strong className="text-charcoal">Registration fee:</strong> $200 (one-time, non-refundable)</li>
                <li><strong className="text-charcoal">Sibling discount:</strong> 10% off older child&apos;s tuition</li>
                <li><strong className="text-charcoal">Payment options:</strong> Monthly auto-pay or annual prepay (5% discount)</li>
                <li><strong className="text-charcoal">Waitlist:</strong> Free to join after your tour</li>
              </ul>
            </Card>
          </AnimateInView>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading title="Frequently Asked Questions" />
        <Accordion items={faqs} className="max-w-3xl mx-auto" />
      </Section>

      <CTASection />
    </>
  );
}
