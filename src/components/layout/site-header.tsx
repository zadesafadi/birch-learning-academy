"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";

export function SiteHeader() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--site-top-offset",
      compact ? "4.5rem" : "8.25rem"
    );
  }, [compact]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "transition-[max-height,opacity] duration-300 ease-out overflow-hidden",
          compact ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <AnnouncementBar />
      </div>
      <Header />
    </div>
  );
}
