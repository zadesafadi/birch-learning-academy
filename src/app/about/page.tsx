import type { Metadata } from "next";
import Image from "next/image";
import { values, siteImages } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Our Story & Leadership",
  description:
    "Meet Zade Safadi and Deanna Elkadri, the founders of Birch Learning Academy — a boutique early learning center in Johnson County, Kansas.",
};

const facilityImages = [
  { src: siteImages.classroom, alt: "Natural light classroom with wood furniture" },
  { src: siteImages.outdoor, alt: "Outdoor classroom and garden" },
  { src: siteImages.art, alt: "Children in art studio" },
  { src: siteImages.childrenLearning, alt: "Indoor gross motor space" },
  { src: siteImages.nutrition, alt: "Premium catered meal service" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story & Leadership"
        subtitle="A husband-and-wife partnership dedicated to redefining early childhood education in Johnson County"
      />

      <Section background="cream" id="leadership">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <AnimateInView>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none sticky top-36">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={siteImages.zade}
                  alt="Zade Safadi, Co-Founder of Birch Learning Academy"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={siteImages.deanna}
                  alt="Deanna Elkadri, Co-Founder of Birch Learning Academy"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.1}>
            <p className="text-sage font-medium tracking-widest uppercase text-sm mb-3">
              Our Founders
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium mb-6 leading-tight">
              Zade Safadi &amp; Deanna Elkadri
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                At the heart of Birch Learning Academy is a husband-and-wife partnership
                dedicated to redefining early childhood education. When founders Zade Safadi
                and Deanna Elkadri envisioned the academy, they wanted to step away from
                the cold, assembly-line feel of national childcare franchises. They believed
                families in Johnson County deserved an intimate alternative—a boutique space
                engineered for families who refuse to compromise on the safety, environment,
                and academic preparation of their children.
              </p>
              <p>
                Their marriage brings a rare harmony of modern clinical insights and
                operational precision to the academy:
              </p>
            </div>
          </AnimateInView>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
          <AnimateInView delay={0.15}>
            <Card className="h-full">
              <p className="text-sage text-sm font-medium mb-2">Deanna Elkadri</p>
              <h3 className="font-serif text-xl text-charcoal mb-3">
                A Healthy, Protective Foundation
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Deanna directs the academy&apos;s wellness layout and safety standards.
                Currently completing her advanced degree in nursing, she leverages her
                active clinical training and pediatric health modules to establish strict,
                top-tier wellness guidelines and sanitization workflows that far exceed
                standard center requirements.
              </p>
            </Card>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <Card className="h-full">
              <p className="text-sage text-sm font-medium mb-2">Zade Safadi</p>
              <h3 className="font-serif text-xl text-charcoal mb-3">
                An Elite Infrastructure
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                With an MBA from UMKC and an engineering background, Zade structures the
                business with exceptional reliability. His corporate focus on systems and
                strategy means the academy operates with institutional stability, protecting
                teacher-to-child interactions and ensuring long-term excellence.
              </p>
            </Card>
          </AnimateInView>
        </div>

        <AnimateInView delay={0.25}>
          <p className="text-charcoal/70 leading-relaxed text-center max-w-3xl mx-auto mt-12 text-lg font-serif italic">
            Birch Learning Academy is our personal commitment to your family. We invite you
            to experience a micro-academy built on love, structure, and an unyielding
            standard of quality.
          </p>
        </AnimateInView>
      </Section>

      <Section background="birch">
        <SectionHeading title="Our Mission & Values" subtitle="What guides every decision we make" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <AnimateInView key={value.title} delay={index * 0.08}>
              <Card className="h-full">
                <h3 className="font-serif text-xl text-charcoal mb-2">{value.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{value.description}</p>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-6 text-center">Our Philosophy</h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                We blend the best of proven approaches: Brightwheel&apos;s Experience
                Curriculum as our structured foundation, instructor-led academic preparation,
                daily STEM exploration, nature-based learning, and social-emotional
                development as the foundation for everything else.
              </p>
              <p>
                Our teachers don&apos;t follow a rigid script. They observe, document, and
                respond to each child&apos;s interests — turning a fascination with bugs into
                a science project, or a love of building into an engineering challenge.
              </p>
            </div>
          </AnimateInView>
        </div>
      </Section>

      <Section background="cream" id="facility">
        <SectionHeading title="Our Facility" subtitle="Designed to inspire wonder at every turn" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {facilityImages.map((img, index) => (
            <AnimateInView key={img.alt} delay={index * 0.05}>
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md group">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="white">
        <AnimateInView>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Community Involvement</h2>
            <p className="text-charcoal/70 leading-relaxed">
              We partner with Johnson County libraries, local farms, and community gardens.
              Our families participate in seasonal festivals, charity drives, and
              neighborhood events — because we&apos;re not just in this community, we&apos;re
              part of it.
            </p>
          </div>
        </AnimateInView>
      </Section>

      <CTASection />
    </>
  );
}
