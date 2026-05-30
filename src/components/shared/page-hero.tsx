import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1503454537845-b83146933a1b?w=1920&h=600&fit=crop",
  imageAlt = "Birch Learning Academy",
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
