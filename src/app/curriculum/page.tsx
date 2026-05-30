import type { Metadata } from "next";
import { enrichmentPrograms } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Curriculum & Enrichment",
  description:
    "Montessori-inspired, Reggio-influenced curriculum with Spanish, music, yoga, art, and nature education — all included in tuition.",
};

const curriculumDomains = [
  {
    question: "Cognitive Development & STEM",
    answer:
      "Hands-on exploration, problem-solving challenges, and age-appropriate STEM activities woven into daily play. Children build, experiment, and discover through guided inquiry.",
  },
  {
    question: "Language & Literacy",
    answer:
      "Rich language environments with read-alouds, storytelling, journaling, and emergent literacy activities. Spanish immersion begins in our toddler program.",
  },
  {
    question: "Social-Emotional Learning",
    answer:
      "Emotional vocabulary, conflict resolution, mindfulness practices, and collaborative projects build the self-regulation skills that predict lifelong success.",
  },
  {
    question: "Physical Development",
    answer:
      "Daily outdoor play, yoga, fine motor activities, and gross motor challenges support healthy bodies and brains. Our outdoor classroom is used in all weather.",
  },
  {
    question: "Creative Expression",
    answer:
      "Open-ended art in our dedicated studio, music & movement classes, dramatic play, and documentation of children's creative processes.",
  },
  {
    question: "Assessment & Progress Tracking",
    answer:
      "Teachers document learning through photos, portfolios, and developmental checklists shared with families via Brightwheel. Formal conferences twice yearly.",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="Curriculum & Enrichment"
        subtitle="Deep, research-backed learning — with every enrichment program included"
      />

      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-6">Our Educational Approach</h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              We blend Montessori-inspired self-direction, Reggio Emilia documentation,
              STEM integration, nature-based learning, and social-emotional development
              into a cohesive framework that honors each child&apos;s unique path.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="birch">
        <SectionHeading title="Core Curriculum Domains" />
        <Accordion items={curriculumDomains} className="max-w-3xl mx-auto" />
      </Section>

      <Section background="white">
        <SectionHeading
          title="Enrichment Programs"
          subtitle="All included in tuition — no extra fees, ever"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrichmentPrograms.map((program, index) => (
            <AnimateInView key={program.name} delay={index * 0.08}>
              <Card className="h-full">
                <span className="inline-block px-3 py-1 bg-amber/10 text-amber text-xs font-semibold rounded-full mb-3">
                  {program.frequency}
                </span>
                <h3 className="font-serif text-xl text-charcoal mb-2">{program.name}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{program.description}</p>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <AnimateInView>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-4">School Readiness</h2>
            <p className="text-charcoal/70 leading-relaxed">
              Our Pre-K graduates enter kindergarten with confidence, curiosity, and a
              genuine love of learning. We partner with local Blue Valley and Shawnee Mission
              teachers to ensure seamless transitions and maintain relationships with alumni
              families for years.
            </p>
          </div>
        </AnimateInView>
      </Section>

      <CTASection />
    </>
  );
}
