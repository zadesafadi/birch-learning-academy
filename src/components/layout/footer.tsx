import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, programs } from "@/lib/site-data";
import { BirchLogo } from "@/components/ui/birch-logo";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <BirchLogo className="h-10 w-10 text-sage-light" />
              <span className="font-serif text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Nurturing curious minds from 6 weeks to Pre-K with a modern,
              play-based approach in Johnson County, Kansas.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="text-white/60 hover:text-amber transition-colors text-sm font-medium"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="text-white/60 hover:text-amber transition-colors text-sm font-medium"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Programs", href: "/programs" },
                { label: "About Us", href: "/about" },
                { label: "Enrollment & Tuition", href: "/enrollment" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-amber text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.slice(0, 5).map((program) => (
                <li key={program.slug}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="text-white/70 hover:text-amber text-sm transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-sage-light" />
                {siteConfig.address.full}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sage-light" />
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-amber transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sage-light" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-sage-light" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-amber transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber transition-colors">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="hover:text-amber transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
