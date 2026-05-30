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
                    <a href={`mailto:${siteConfig.email}`} className="text-charcoal/70 hover:text-sage transition-colors">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{siteConfig.hours}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-birch aspect-[4/3] bg-birch">
                <iframe
                  title="Birch Learning Academy location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.5!2d-94.6169!3d38.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU4JzAwLjEiTiA5NMKwMzcnMDAuOCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
