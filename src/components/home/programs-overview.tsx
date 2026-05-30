import Link from "next/link";
import { Baby, Footprints, Sprout, Palette, GraduationCap, Sun, ArrowRight } from "lucide-react";
import { programs } from "@/lib/site-data";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";

const iconMap: Record<string, React.ElementType> = {
  baby: Baby,
  footprints: Footprints,
  sprout: Sprout,
  palette: Palette,
  "graduation-cap": GraduationCap,
  sun: Sun,
};

export function ProgramsOverview() {
  return (
    <Section background="birch">
      <SectionHeading
        title="Programs for Every Stage"
        subtitle="From first smiles to kindergarten-ready confidence, we nurture development at every age."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => {
          const Icon = iconMap[program.icon] || Sprout;
          return (
            <AnimateInView key={program.slug} delay={index * 0.1}>
              <Card hover className="h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-sage/10 text-sage">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal">
                      {program.name}
                    </h3>
                    <p className="text-sm text-sage">{program.ageRange}</p>
                  </div>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed flex-1 mb-4">
                  {program.shortDescription}
                </p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-2 text-sage font-medium text-sm hover:text-sage-dark transition-colors group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </AnimateInView>
          );
        })}
      </div>
    </Section>
  );
}
