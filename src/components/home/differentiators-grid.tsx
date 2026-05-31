import {
  Leaf,
  Palette,
  Users,
  UtensilsCrossed,
  Shield,
  Smartphone,
} from "lucide-react";
import { differentiators } from "@/lib/site-data";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateInView } from "@/components/ui/animate-in-view";

const iconMap: Record<string, React.ElementType> = {
  leaf: Leaf,
  palette: Palette,
  users: Users,
  utensils: UtensilsCrossed,
  shield: Shield,
  smartphone: Smartphone,
};

export function DifferentiatorsGrid() {
  return (
    <Section background="cream">
      <SectionHeading
        title="The Birch Difference"
        subtitle="What sets us apart from every other center in Johnson County."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {differentiators.map((item, index) => {
          const Icon = iconMap[item.icon] || Leaf;
          return (
            <AnimateInView key={item.title} delay={index * 0.08}>
              <div className="text-center p-4 sm:p-6">
                <div className="inline-flex p-4 rounded-2xl bg-sage/10 text-sage mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateInView>
          );
        })}
      </div>
    </Section>
  );
}
