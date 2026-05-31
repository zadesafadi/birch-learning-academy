import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 md:mt-4 text-base md:text-xl max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/80" : "text-charcoal/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
