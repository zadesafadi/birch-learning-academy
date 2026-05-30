import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";

export function SiteHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <Header />
    </div>
  );
}
