import { trustBadges } from "@/lib/site-data";
import { Shield, GraduationCap, Leaf, Users, Lock, Award } from "lucide-react";

const icons = [Shield, GraduationCap, Leaf, Users, Lock, Award];

export function TrustBar() {
  const items = trustBadges.map((badge, i) => ({
    label: badge,
    icon: icons[i % icons.length],
  }));

  return (
    <div className="bg-white border-y border-birch py-3 sm:py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="inline-flex items-center gap-3 mx-8 text-charcoal/80"
          >
            <item.icon className="h-5 w-5 text-sage shrink-0" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
