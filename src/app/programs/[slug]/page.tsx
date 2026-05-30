import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { programs } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared/cta-section";
import { JsonLd, getBreadcrumbSchema } from "@/lib/seo";

const programImages: Record<string, string> = {
  infants: "https://images.unsplash.com/photo-1515488042361-ee00e8170dc8?w=1920&h=600&fit=crop",
  toddlers: "https://images.unsplash.com/photo-1503454537845-b83146933a1b?w=1920&h=600&fit=crop",
  "early-preschool": "https://images.unsplash.com/photo-1587654787591-70c8d94be832?w=1920&h=600&fit=crop",
  preschool: "https://images.unsplash.com/photo-1589391886646-a6395d0728bd?w=1920&h=600&fit=crop",
  "pre-k": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1920&h=600&fit=crop",
  summer: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=600&fit=crop",
};

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.name} Program (${program.ageRange})`,
    description: program.description,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const curriculumAreas = [
    "Cognitive Development",
    "Language & Literacy",
    "Social-Emotional Learning",
    "Physical Development",
    "Creative Expression",
    "Nature & Outdoor Learning",
  ];

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Programs", url: "/programs" },
          { name: program.name, url: `/programs/${program.slug}` },
        ])}
      />

      <PageHero
        title={program.name}
        subtitle={`${program.ageRange} · ${program.tuition}`}
        image={programImages[program.slug]}
        imageAlt={`${program.name} program at Birch Learning Academy`}
      />

      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-6">Program Overview</h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">{program.description}</p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="birch">
        <SectionHeading title="A Day in the Life" subtitle={`Sample schedule for our ${program.name} classroom`} />
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-2">
            {program.schedule.map((block, index) => (
              <AnimateInView key={block.time} delay={index * 0.05}>
                <Card className="w-64 shrink-0">
                  <p className="text-amber font-semibold text-sm mb-2">{block.time}</p>
                  <p className="text-charcoal text-sm leading-relaxed">{block.activity}</p>
                </Card>
              </AnimateInView>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading title="Curriculum Focus Areas" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {curriculumAreas.map((area, index) => (
            <AnimateInView key={area} delay={index * 0.05}>
              <div className="p-5 rounded-xl bg-birch/50 border border-birch">
                <h3 className="font-medium text-charcoal">{area}</h3>
              </div>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Key Milestones</h2>
            <ul className="space-y-3">
              {program.milestones.map((milestone) => (
                <li key={milestone} className="flex items-center gap-3 text-charcoal/70">
                  <span className="w-2 h-2 rounded-full bg-sage shrink-0" />
                  {milestone}
                </li>
              ))}
            </ul>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={programImages[program.slug]}
                alt={`${program.name} classroom environment`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateInView>
        </div>
      </Section>

      <Section background="birch">
        <AnimateInView>
          <Card className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-sage/20 mx-auto mb-4 flex items-center justify-center">
              <span className="font-serif text-2xl text-sage">
                {program.teacher.name.split(" ").pop()?.[0]}
              </span>
            </div>
            <p className="text-sage text-sm font-medium mb-1">Lead Teacher</p>
            <h3 className="font-serif text-2xl text-charcoal mb-1">{program.teacher.name}</h3>
            <p className="text-charcoal/60 text-sm mb-4">{program.teacher.credentials}</p>
            <p className="text-charcoal/70 leading-relaxed">{program.teacher.bio}</p>
          </Card>
        </AnimateInView>
      </Section>

      <Section background="cream">
        <div className="text-center">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Enrichment Included</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto mb-8">
              Spanish, music & movement, yoga, art studio, and garden-to-table learning—all
              included in your tuition. No hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">Schedule a Tour</Button>
              <Button href="/enrollment" variant="secondary" size="lg">Check Availability</Button>
            </div>
          </AnimateInView>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
