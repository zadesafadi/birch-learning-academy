import { siteConfig } from "@/lib/site-data";

export function AnnouncementBar() {
  return (
    <div className="bg-sage text-white text-center py-2.5 px-4 text-sm font-medium relative z-[60]">
      {siteConfig.announcement}
    </div>
  );
}
