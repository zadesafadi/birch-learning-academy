import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";

export function WelcomeSection() {
  return (
    <Section background="cream">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateInView>
          <p className="text-sage font-medium tracking-widest uppercase text-sm mb-3">
            Welcome to Birch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-medium mb-6 leading-tight">
            More Than Daycare — A Foundation for Life
          </h2>
          <div className="space-y-4 text-charcoal/70 leading-relaxed">
            <p>
              At Birch Learning Academy, we believe childhood is not a season to
              rush through—it&apos;s a foundation to nurture. Like the birch tree
              that symbolizes our name, we cultivate resilience, flexibility, and
              graceful growth in every child who walks through our doors.
            </p>
            <p>
              Our play-based approach blends Montessori-inspired independence,
              Reggio Emilia documentation, STEM exploration, and daily nature
              immersion. We&apos;re not a franchise. We&apos;re your neighbors in
              Johnson County—a boutique sanctuary where children are known, loved,
              and inspired.
            </p>
            <p>
              From our garden-to-table kitchen to our biometric secure entry,
              every detail is designed with your family in mind. Because you
              deserve transparency, excellence, and a partner who shares your
              values.
            </p>
          </div>
          <Button href="/about" variant="ghost" className="mt-8 group">
            Meet Our Founder
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
              alt="Dr. Lauren Birch, Founder of Birch Learning Academy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimateInView>
      </div>
    </Section>
  );
}
