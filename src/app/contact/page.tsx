import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, faqs } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/shared/contact-form";
import { Accordion } from "@/components/ui/accordion";
import { AnimateInView } from "@/components/ui/animate-in-view";

export const metadata: Metadata = {
  title: "Contact & Schedule a Tour",
  description:
    "Schedule a private tour of Birch Learning Academy in Leawood, KS. Contact us today to see our nature-inspired early learning center.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Schedule a Tour"
        subtitle="We'd love to show you around and answer all your questions"
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&h=600&fit=crop"
        imageAlt="Welcome to Birch Learning Academy"
      />

      <Section background="cream">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <AnimateInView>
              <h2 className="font-serif text-3xl text-charcoal mb-2">Request a Tour</h2>
              <p className="text-charcoal/70 mb-8">
                Fill out the form below and we&apos;ll contact you within one business day
                to confirm your visit.
              </p>
              <ContactForm />
            </AnimateInView>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <AnimateInView delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-birch">
                <h3 className="font-serif text-xl text-charcoal mb-4">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{siteConfig.address.full}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-sage shrink-0" />
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-charcoal/70 hover:text-sage transition-colors">
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-sage shrink-0" />
                    <span className="text-charcoal/70">{siteConfig.email}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{siteConfig.hours}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="rounded-2xl p-8 shadow-sm border border-birch aspect-[4/3] bg-birch flex flex-col items-center justify-center text-center">
                <MapPin className="h-10 w-10 text-sage mb-4" />
                <p className="font-serif text-xl text-charcoal mb-2">Campus Location</p>
                <p className="text-charcoal/70 text-sm leading-relaxed max-w-xs">
                  Our Leawood / Overland Park area campus address will be announced soon.
                  Call us to schedule a tour in the meantime.
                </p>
              </div>
            </AnimateInView>
          </div>
        </div>
      </Section>

      <Section background="birch">
        <AnimateInView>
          <h2 className="font-serif text-3xl text-charcoal mb-8 text-center">
            Common Questions Before Your Tour
          </h2>
          <Accordion items={faqs.slice(0, 4)} className="max-w-3xl mx-auto" />
        </AnimateInView>
      </Section>
    </>
  );
}
