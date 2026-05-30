import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility commitment for Birch Learning Academy website.",
};

export default function AccessibilityPage() {
  return (
    <Section background="cream" padding="lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-charcoal mb-8">Accessibility Statement</h1>
        <div className="space-y-6 text-charcoal/70 leading-relaxed">
          <p>
            Birch Learning Academy is committed to ensuring digital accessibility for
            people with disabilities. We continually improve the user experience for
            everyone and apply relevant WCAG 2.1 AA accessibility standards.
          </p>
          <h2 className="font-serif text-2xl text-charcoal pt-4">Measures We Take</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Semantic HTML with proper heading hierarchy</li>
            <li>Keyboard-accessible navigation and interactive elements</li>
            <li>Sufficient color contrast ratios (4.5:1 minimum)</li>
            <li>Alt text on all meaningful images</li>
            <li>Form labels and error states for screen readers</li>
          </ul>
          <h2 className="font-serif text-2xl text-charcoal pt-4">Feedback</h2>
          <p>
            If you encounter accessibility barriers on our website, please contact us at{" "}
            {siteConfig.phone}. We take your feedback seriously and will respond promptly.
          </p>
        </div>
      </div>
    </Section>
  );
}
