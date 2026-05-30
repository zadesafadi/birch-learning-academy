import type { Metadata } from "next";
import Image from "next/image";
import { values } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Birch Learning Academy — a boutique, nature-inspired early learning center in Johnson County, Kansas.",
};

const facilityImages = [
  { src: "https://images.unsplash.com/photo-1589391886646-a6395d0728bd?w=600&h=400&fit=crop", alt: "Natural light classroom with wood furniture" },
  { src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&h=400&fit=crop", alt: "Outdoor classroom and garden" },
  { src: "https://images.unsplash.com/photo-1587654787591-70c8d94be832?w=600&h=400&fit=crop", alt: "Children in art studio" },
  { src: "https://images.unsplash.com/photo-1503454537845-b83146933a1b?w=600&h=400&fit=crop", alt: "Indoor gross motor space" },
  { src: "https://images.unsplash.com/photo-1498837167922-ddd27525cd34?w=600&h=400&fit=crop", alt: "Farm-to-table kitchen" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop", alt: "Secure entry lobby" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Where the birch tree meets the classroom — a new kind of early learning in Johnson County"
      />

      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-6">Why Birch?</h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Dr. Lauren Birch spent fifteen years in public education before a simple
                realization changed everything: children deserve better than what most
                childcare centers offer. Smaller classes. Nature every day. Teachers who
                are truly valued. Transparency about what families pay and why.
              </p>
              <p>
                The birch tree became her symbol — resilient yet graceful, bending without
                breaking, always reaching toward light. Like the birch, children thrive when
                given room to grow at their own pace, rooted in security but free to explore.
              </p>
              <p>
                Birch Learning Academy opened its doors in the Leawood/Overland Park area to
                serve families who refuse to compromise — who want boutique quality without
                corporate coldness, and who believe the earliest years shape a lifetime.
              </p>
            </div>
          </AnimateInView>
        </div>
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
                We blend the best of proven approaches: Montessori-inspired self-direction,
                Reggio Emilia documentation and environment design, daily STEM exploration,
                nature-based learning, and social-emotional development as the foundation
                for everything else.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilityImages.map((img, index) => (
            <AnimateInView key={img.alt} delay={index * 0.05}>
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md group">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="birch">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimateInView>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Dr. Lauren Birch, Founder"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-sage font-medium text-sm mb-2">Founder & Director</p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Dr. Lauren Birch</h2>
            <blockquote className="font-serif text-xl text-charcoal/80 italic mb-4 border-l-4 border-sage pl-4">
              &ldquo;Every child who walks through our doors deserves to be known, loved, and
              inspired. That&apos;s not a tagline — it&apos;s a promise.&rdquo;
            </blockquote>
            <p className="text-charcoal/70 leading-relaxed">
              Ed.D. in Early Childhood Leadership with 20+ years of experience. Lauren
              founded Birch to create the center she wished existed when her own children
              were young — and the one she&apos;d recommend to every patient family as a
              pediatrician would.
            </p>
          </AnimateInView>
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
