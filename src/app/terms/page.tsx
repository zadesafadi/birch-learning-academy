import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Birch Learning Academy website.",
};

export default function TermsPage() {
  return (
    <Section background="cream" padding="lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-charcoal mb-8">Terms of Use</h1>
        <div className="space-y-6 text-charcoal/70 leading-relaxed">
          <p>Last updated: May 30, 2026</p>
          <p>
            By accessing the Birch Learning Academy website, you agree to these terms.
            Content on this site is for informational purposes and does not constitute a
            binding enrollment agreement.
          </p>
          <h2 className="font-serif text-2xl text-charcoal pt-4">Website Content</h2>
          <p>
            Tuition rates, program availability, and other details are subject to change.
            Please contact us directly for the most current information.
          </p>
          <h2 className="font-serif text-2xl text-charcoal pt-4">Contact</h2>
          <p>
            Questions? Reach us at hello@birchlearningacademy.com or (913) 555-0142.
          </p>
        </div>
      </div>
    </Section>
  );
}
