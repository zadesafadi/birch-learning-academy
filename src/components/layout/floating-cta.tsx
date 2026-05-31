"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-birch shadow-lg">
      <div className="grid grid-cols-2 divide-x divide-birch">
        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className="flex items-center justify-center gap-1.5 py-3 text-sage font-medium hover:bg-birch/50 transition-colors"
          aria-label={`Call us at ${siteConfig.phone}`}
        >
          <Phone className="h-5 w-5 shrink-0" />
          <span className="max-[380px]:sr-only text-sm">Call Us</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-3 bg-amber text-white font-medium hover:bg-amber-dark transition-colors"
          aria-label="Schedule a tour"
        >
          <Calendar className="h-5 w-5 shrink-0" />
          <span className="max-[380px]:sr-only text-sm">Schedule Tour</span>
        </Link>
      </div>
    </div>
  );
}
