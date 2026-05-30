import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Nutrition & Farm-to-Table",
  description:
    "Organic, locally-sourced meals prepared daily by our on-site chef. Garden-to-table nutrition at Birch Learning Academy.",
};

const sampleMenu = {
  breakfast: ["Organic oatmeal with berries", "Whole grain toast with avocado", "Fresh fruit"],
  lunch: ["Grilled chicken with roasted vegetables", "Brown rice pilaf", "Garden salad with house dressing"],
  snack: ["Apple slices with almond butter", "Homemade whole grain muffins", "Cheese and crackers"],
};

export default function NutritionPage() {
  return (
    <>
      <PageHero
        title="Farm-to-Table Nutrition"
        subtitle="Organic, locally-sourced meals prepared fresh daily by our on-site chef"
        image="https://images.unsplash.com/photo-1498837167922-ddd27525cd34?w=1920&h=600&fit=crop"
        imageAlt="Fresh organic meals at Birch Learning Academy"
      />

      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-6">Our Food Philosophy</h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              We believe nutrition is education. Children who grow tomatoes in our garden
              are more likely to eat them at lunch. Our on-site chef prepares every meal
              from scratch using organic, locally-sourced ingredients — no processed foods,
              no high-fructose corn syrup, no mystery ingredients.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="birch">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimateInView>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1595273670150-447a04d18696?w=600&h=600&fit=crop"
                alt="Chef Maria Santos"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-sage font-medium text-sm mb-2">Executive Chef</p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Chef Maria Santos</h2>
            <p className="text-charcoal/70 leading-relaxed">
              Culinary Institute graduate with a passion for child nutrition. Maria
              designs seasonal menus that introduce children to diverse flavors while
              accommodating allergies, cultural preferences, and dietary restrictions.
              Her garden-to-table philosophy means kids often eat what they harvested
              that morning.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading title="Sample Seasonal Menu" subtitle="Menus rotate weekly based on seasonal availability" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {Object.entries(sampleMenu).map(([meal, items], index) => (
            <AnimateInView key={meal} delay={index * 0.1}>
              <Card>
                <h3 className="font-serif text-xl text-charcoal capitalize mb-4">{meal}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-charcoal/70 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimateInView>
            <Card>
              <h3 className="font-serif text-xl text-charcoal mb-3">The Garden Program</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Children plant, water, harvest, and cook with produce from our on-site
                garden. Seasonal cycles teach patience, responsibility, and the connection
                between earth and table.
              </p>
            </Card>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <Card>
              <h3 className="font-serif text-xl text-charcoal mb-3">Dietary Accommodations</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We accommodate all allergies, vegetarian/vegan preferences, religious
                dietary requirements, and cultural food traditions. Our kitchen is
                nut-aware with dedicated preparation areas.
              </p>
            </Card>
          </AnimateInView>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
