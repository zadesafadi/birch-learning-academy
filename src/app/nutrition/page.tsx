import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { siteImages } from "@/lib/site-data";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Nutrition & Premium Catering",
  description:
    "Premium catered meals and organic snacks throughout the day at Birch Learning Academy in Johnson County, Kansas.",
};

const sampleMenu = {
  lunch: ["Grilled chicken with roasted vegetables", "Brown rice pilaf", "Mixed green salad"],
  snacks: ["Apple slices with almond butter", "Organic whole grain muffins", "Veggie sticks with hummus"],
};

export default function NutritionPage() {
  return (
    <>
      <PageHero
        title="Premium Nutrition"
        subtitle="Catered lunch and organic snacks throughout the day—included in tuition"
        image={siteImages.nutrition}
        imageAlt="Fresh organic meals served at Birch Learning Academy"
      />

      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <AnimateInView>
            <h2 className="font-serif text-3xl text-charcoal mb-6">Our Food Philosophy</h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              We believe what children eat fuels how they learn. That&apos;s why Birch partners
              with a premium catering service to deliver organic, thoughtfully prepared meals
              and snacks throughout the day—lunch and afternoon snack included in
              your tuition. No processed fillers, no mystery ingredients—just wholesome food
              that supports focus, energy, and healthy habits.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="birch">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimateInView>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
              <Image
                src={siteImages.nutrition}
                alt="Premium catered organic meals for children"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-sage font-medium text-sm mb-2">Included in Tuition</p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Premium Catered Meals</h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Every day, our catering partner delivers fresh, premium meals to Birch Learning
              Academy. Menus rotate seasonally and are designed with young children in
              mind—balanced, nutritious, and appealing to developing palates.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Organic snacks are available throughout the day to keep energy steady between
              meals. Families never pay extra for nutrition—it&apos;s part of the Birch
              experience.
            </p>
          </AnimateInView>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading
          title="Sample Daily Menu"
          subtitle="Menus rotate weekly—always organic-focused and age-appropriate"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
              <h3 className="font-serif text-xl text-charcoal mb-3">What's Included Daily</h3>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                  Premium catered lunch
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                  Organic afternoon snack
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-2" />
                  Snacks available throughout the day
                </li>
              </ul>
            </Card>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <Card>
              <h3 className="font-serif text-xl text-charcoal mb-3">Dietary Accommodations</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We accommodate allergies, vegetarian and vegan preferences, religious dietary
                requirements, and cultural food traditions. Our catering partner works closely
                with families to ensure every child&apos;s needs are met safely and consistently.
              </p>
            </Card>
          </AnimateInView>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
