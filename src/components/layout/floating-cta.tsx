"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-birch shadow-lg safe-area-inset-bottom">
      <div className="grid grid-cols-2 divide-x divide-birch">
        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className="flex items-center justify-center gap-2 py-4 text-sage font-medium hover:bg-birch/50 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Call Us
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 bg-amber text-white font-medium hover:bg-amber-dark transition-colors"
        >
          <Calendar className="h-5 w-5" />
          Schedule Tour
        </Link>
      </div>
    </div>
  );
}
