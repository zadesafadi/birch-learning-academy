import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Birch Learning Academy website and services.",
};

export default function PrivacyPage() {
  return (
    <Section background="cream" padding="lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-charcoal mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-charcoal/70 leading-relaxed">
          <p>Last updated: May 30, 2026</p>
          <p>
            Birch Learning Academy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy.
            This policy describes how we collect, use, and protect information when you
            visit our website or use our services.
          </p>
          <h2 className="font-serif text-2xl text-charcoal pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as name, email, phone number,
            and child&apos;s age when you schedule a tour or submit an enrollment application.
            We also collect standard website analytics data.
          </p>
          <h2 className="font-serif text-2xl text-charcoal pt-4">How We Use Information</h2>
          <p>
            We use your information to respond to inquiries, schedule tours, process
            enrollment, and improve our services. We do not sell personal information to
            third parties.
          </p>
          <h2 className="font-serif text-2xl text-charcoal pt-4">Contact</h2>
          <p>
            Questions about this policy? Contact us at hello@birchlearningacademy.com.
          </p>
        </div>
      </div>
    </Section>
  );
}
