"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navLinks } from "@/lib/site-data";
import { BirchLogo } from "@/components/ui/birch-logo";
import { Button } from "@/components/ui/button";

function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return createPortal(
    <div
      className="lg:hidden fixed left-0 right-0 bottom-0 z-[45] bg-cream overflow-y-auto overscroll-contain pb-28"
      style={{ top: "var(--site-top-offset)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="px-6 py-4 space-y-1" aria-label="Mobile navigation">
        <p className="px-4 py-2 text-xs font-semibold text-sage uppercase tracking-wider">
          Programs
        </p>
        <Link
          href="/programs"
          className="block px-4 py-3 text-charcoal hover:bg-birch rounded-lg"
          onClick={onClose}
        >
          All Programs
        </Link>
        {navLinks.programs.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-3 text-charcoal/80 hover:bg-birch rounded-lg pl-8"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <p className="px-4 py-2 mt-4 text-xs font-semibold text-sage uppercase tracking-wider">
          About
        </p>
        {navLinks.about.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-3 text-charcoal hover:bg-birch rounded-lg"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        {navLinks.main.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-3 text-charcoal hover:bg-birch rounded-lg"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-6 px-4 space-y-3">
          <Button href="/contact" className="w-full" onClick={onClose}>
            Schedule a Tour
          </Button>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="flex items-center justify-center gap-2 py-3 text-sage font-medium"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
        </div>
      </nav>
    </div>,
    document.body
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "relative z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/95 shadow-sm py-3"
            : "bg-charcoal/40 py-5",
          !scrolled && !mobileOpen && "backdrop-blur-sm",
          mobileOpen && "bg-cream py-3"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${siteConfig.name} home`}
            onClick={closeMobile}
          >
            <BirchLogo
              className={cn(
                "h-10 w-10 transition-colors group-hover:text-sage-dark",
                scrolled || mobileOpen ? "text-sage" : "text-white"
              )}
            />
            <div className="hidden sm:block">
              <span
                className={cn(
                  "font-serif text-lg font-medium leading-tight block",
                  scrolled || mobileOpen ? "text-charcoal" : "text-white"
                )}
              >
                Birch Learning
              </span>
              <span
                className={cn(
                  "text-xs tracking-widest uppercase",
                  scrolled || mobileOpen ? "text-sage" : "text-white/80"
                )}
              >
                Academy
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "text-charcoal hover:text-sage" : "text-white/90 hover:text-white"
                )}
                aria-expanded={programsOpen}
              >
                Programs
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    programsOpen && "rotate-180"
                  )}
                />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="rounded-xl bg-white shadow-xl border border-birch p-2">
                    <Link
                      href="/programs"
                      className="block px-4 py-2 text-sm font-medium text-sage hover:bg-birch rounded-lg"
                    >
                      All Programs
                    </Link>
                    {navLinks.programs.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-birch rounded-lg"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "text-charcoal hover:text-sage" : "text-white/90 hover:text-white"
                )}
                aria-expanded={aboutOpen}
              >
                About
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    aboutOpen && "rotate-180"
                  )}
                />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div className="rounded-xl bg-white shadow-xl border border-birch p-2">
                    {navLinks.about.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-birch rounded-lg"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "text-charcoal hover:text-sage" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm transition-colors",
                scrolled ? "text-charcoal hover:text-sage" : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button href="/contact" size="sm">
              Schedule a Tour
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "lg:hidden p-2 relative z-[60]",
              scrolled || mobileOpen ? "text-charcoal" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {mounted && <MobileNav open={mobileOpen} onClose={closeMobile} />}
    </>
  );
}
