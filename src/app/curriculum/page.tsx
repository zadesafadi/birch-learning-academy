import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Box, ClipboardCheck, Smartphone } from "lucide-react";
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
    "Experience Curriculum through Brightwheel—research-based, standards-aligned early learning for ages 2.5 to 5, plus enrichment included in tuition at Birch Learning Academy.",
};

const experienceHighlights = [
  {
    icon: BookOpen,
    title: "Research-Based Lesson Plans",
    description:
      "Daily, teacher-ready lesson plans built on decades of early childhood research—aligned with NAEYC, Head Start, Common Core, and all 50 state early learning standards.",
  },
  {
    icon: Box,
    title: "Hands-On Learning Materials",
    description:
      "Monthly themed kits delivered to Birch with books, manipulatives, art supplies, and activity materials—so teachers spend less time prepping and more time teaching.",
  },
  {
    icon: ClipboardCheck,
    title: "Experience Assessments",
    description:
      "Integrated developmental assessments track growth across 8 learning domains, 36 skills, and 73 subskills—giving teachers and families a clear picture of progress.",
  },
  {
    icon: Smartphone,
    title: "Brightwheel App Integration",
    description:
      "Lesson planning, observations, milestones, and progress updates live in one place—so parents see what their child is learning, not just that they had a good day.",
  },
];

const curriculumDomains = [
  {
    question: "Language & Literacy (Science of Reading)",
    answer:
      "Experience Curriculum follows evidence-based literacy instruction with phonological awareness, phonics, vocabulary, and comprehension built into daily activities. Programs like Alphabet Adventure, Write & Wonder, and Storytime Connections prepare children for kindergarten reading expectations.",
  },
  {
    question: "Mathematics & Reasoning",
    answer:
      "A research-based math progression builds number sense, counting, composing and comparing quantities, shapes, measurement, patterns, and early addition and subtraction—developing confidence and foundational reasoning skills.",
  },
  {
    question: "Social-Emotional Development",
    answer:
      "Structured activities emphasize problem-solving, positive peer interactions, self-regulation, and emotional vocabulary—the skills that predict success in kindergarten and beyond.",
  },
  {
    question: "Science, Technology & STEM",
    answer:
      "Hands-on exploration and inquiry-based activities encourage children to ask questions, test ideas, and discover how the world works through guided, play-based STEM experiences.",
  },
  {
    question: "Creative Arts & Expression",
    answer:
      "Themed art projects, music, and dramatic play are woven into each month's curriculum—complemented by daily access to Birch's dedicated art studio and music enrichment.",
  },
  {
    question: "Physical Development & Wellness",
    answer:
      "Fine and gross motor activities, outdoor learning, and yoga enrichment support healthy bodies and brains. Deanna's clinical wellness standards ensure the environment supports whole-child health.",
  },
  {
    question: "Approaches to Learning",
    answer:
      "Children develop curiosity, persistence, and flexible thinking through activities designed to encourage exploration, focus, and the confidence to try new challenges.",
  },
  {
    question: "Assessment & Family Partnership",
    answer:
      "Teachers log observations and milestones in Brightwheel, aligned to the Experience Curriculum developmental continuum. Families receive real-time updates, photos, and progress tracking—plus formal conferences twice yearly.",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="Curriculum & Enrichment"
        subtitle="Experience Curriculum through Brightwheel—plus every enrichment program included"
      />

      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateInView>
            <p className="text-sage font-medium tracking-widest uppercase text-sm mb-3">
              Powered by Brightwheel
            </p>
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              Experience Curriculum at Birch
            </h2>
            <p className="text-charcoal/70 leading-relaxed text-lg mb-4">
              Birch Learning Academy uses{" "}
              <strong className="text-charcoal font-medium">Experience Curriculum</strong>,
              Brightwheel&apos;s research-based early learning system trusted by educators
              for over 30 years. It is a complete, play-based curriculum aligned with
              national and state standards—not a loose collection of activities, but a
              thoughtfully sequenced program designed to help children excel.
            </p>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              Daily lesson plans, hands-on materials, and developmental assessments are
              integrated directly in the Brightwheel app. What makes Birch different is
              how that curriculum is delivered: elite 1:7 to 1:8 ratios, capped enrollment,
              and degreed teachers who have the time and training to implement every lesson
              with precision—not pass children through a crowded classroom.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="birch">
        <SectionHeading
          title="What's Included in Experience Curriculum"
          subtitle="A complete system—not just an app, not just a workbook"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {experienceHighlights.map((item, index) => (
            <AnimateInView key={item.title} delay={index * 0.08}>
              <Card className="h-full text-center">
                <div className="inline-flex p-3 rounded-xl bg-sage/10 text-sage mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{item.description}</p>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-6 text-center">
              The Birch Difference
            </h2>
            <p className="text-charcoal/70 leading-relaxed text-lg mb-4">
              Experience Curriculum gives Birch a rigorous, standards-aligned foundation.
              Our boutique model ensures it is executed the way it was designed— with
              instructor-led academic preparation layered on top of play-based discovery,
              daily Spanish enrichment, and nature-inspired learning that you won&apos;t
              find in a franchise center running the same system at 1:12 ratios.
            </p>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              For the 2025–2026 school year, Experience Curriculum includes enhanced
              literacy aligned with the Science of Reading, expanded mathematics
              foundations, and a revised developmental continuum of skills—keeping Birch
              at the forefront of early education research.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeading title="8 Learning Domains" subtitle="Where your child's growth is intentionally built" />
        <Accordion items={curriculumDomains} className="max-w-3xl mx-auto" />
      </Section>

      <Section background="white">
        <SectionHeading
          title="Enrichment Programs"
          subtitle="Beyond the core curriculum—all included in tuition"
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

      <Section background="birch">
        <AnimateInView>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Kindergarten Readiness</h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Experience Preschool is designed for children ages 3–5, with a developmental
              continuum that prepares graduates for kindergarten with strong literacy,
              math, social-emotional, and executive function skills. Birch extends that
              foundation to children entering at 2.5—with the same rigorous curriculum
              delivered in a classroom small enough for every child to be known.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Our Pre-K graduates enter Blue Valley, Shawnee Mission, and Olathe schools
              confident, curious, and academically prepared. Parents stay connected every
              step of the way through Brightwheel.
            </p>
          </div>
        </AnimateInView>
      </Section>

      <Section background="cream">
        <AnimateInView>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Experience Curriculum is a product of Brightwheel. Learn more at{" "}
              <Link
                href="https://mybrightwheel.com/experience-curriculum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage font-medium hover:text-sage-dark transition-colors"
              >
                mybrightwheel.com/experience-curriculum
              </Link>
            </p>
          </div>
        </AnimateInView>
      </Section>

      <CTASection />
    </>
  );
}
