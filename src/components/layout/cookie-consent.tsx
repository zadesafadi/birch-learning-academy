"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("birch-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("birch-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-20 lg:bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:max-w-md z-50 bg-white rounded-2xl shadow-2xl border border-birch p-6 animate-fade-in-up"
    >
      <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
        We use cookies to improve your experience and analyze site traffic. By
        continuing, you agree to our{" "}
        <Link href="/privacy" className="text-sage underline hover:text-sage-dark">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <Button size="sm" onClick={accept} className="flex-1">
          Accept
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setVisible(false)}
          className="flex-1"
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
