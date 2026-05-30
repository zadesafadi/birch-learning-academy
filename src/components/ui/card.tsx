import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-birch/50",
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-sage/30",
        className
      )}
    >
      {children}
    </div>
  );
}
