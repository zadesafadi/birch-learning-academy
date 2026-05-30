import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Calendar, BookOpen, Download, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";

export const metadata: Metadata = {
  title: "Parent Resources",
  description:
    "Parent handbook, Brightwheel app info, calendar, and community resources for Birch Learning Academy families.",
};

const resources = [
  {
    icon: Smartphone,
    title: "Brightwheel Parent App",
    description:
      "Real-time updates, photos, daily reports, and direct messaging with your child's teachers. Download from the App Store or Google Play.",
    link: "#",
    linkText: "Download App",
  },
  {
    icon: Calendar,
    title: "School Calendar",
    description:
      "Important dates, closures, parent events, and community gatherings throughout the year.",
    link: "#",
    linkText: "View Calendar",
  },
  {
    icon: BookOpen,
    title: "Parent Handbook",
    description:
      "Policies, procedures, and everything you need to know about life at Birch Learning Academy.",
    link: "#",
    linkText: "Download PDF",
  },
  {
    icon: Download,
    title: "Required Forms",
    description:
      "Enrollment forms, medical records, emergency contacts, and authorization documents.",
    link: "/enrollment",
    linkText: "View Forms",
  },
];

const communityLinks = [
  { name: "Johnson County Library — Early Literacy Programs", url: "#" },
  { name: "Overland Park Farmers Market", url: "#" },
  { name: "Deanna Rose Children's Farmstead", url: "#" },
  { name: "KC Parent Magazine — Local Events", url: "#" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Parent Resources"
        subtitle="Tools and information for enrolled and prospective families"
      />

      <Section background="cream">
        <div className="grid sm:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <AnimateInView key={resource.title} delay={index * 0.08}>
              <Card className="h-full">
                <div className="p-3 rounded-xl bg-sage/10 text-sage inline-flex mb-4">
                  <resource.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-2">{resource.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="inline-flex items-center gap-1 text-sage font-medium text-sm hover:text-sage-dark transition-colors"
                >
                  {resource.linkText}
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </Section>

      <Section background="birch">
        <AnimateInView>
          <h2 className="font-serif text-3xl text-charcoal mb-8 text-center">
            Community Resources
          </h2>
          <ul className="max-w-xl mx-auto space-y-3">
            {communityLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="flex items-center gap-2 text-charcoal/70 hover:text-sage transition-colors text-sm"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </AnimateInView>
      </Section>

      <Section background="white">
        <AnimateInView>
          <div className="max-w-md mx-auto text-center">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Newsletter Signup</h2>
            <p className="text-charcoal/70 text-sm mb-6">
              Parenting tips, local events, and Birch updates delivered monthly.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl border border-birch bg-white focus:outline-none focus:ring-2 focus:ring-sage/50"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-sage text-white rounded-xl font-medium hover:bg-sage-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </AnimateInView>
      </Section>
    </>
  );
}
