import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "cream" | "birch" | "sage" | "white" | "dark";
  padding?: "sm" | "md" | "lg";
}

const backgrounds = {
  cream: "bg-cream",
  birch: "bg-birch",
  sage: "bg-sage text-white",
  white: "bg-white",
  dark: "bg-charcoal text-white",
};

const paddings = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "cream",
  padding = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
