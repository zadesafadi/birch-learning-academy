import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sage font-medium text-sm mb-2">404</p>
        <h1 className="font-serif text-4xl text-charcoal mb-4">Page Not Found</h1>
        <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/">Return Home</Button>
      </div>
    </div>
  );
}
