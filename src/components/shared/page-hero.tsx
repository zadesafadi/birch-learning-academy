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
  image = "/images/hero.jpg",
  imageAlt = "Birch Learning Academy",
}: PageHeroProps) {
  return (
    <section
      className="relative pb-20 md:pb-28 overflow-hidden bg-sage-dark"
      style={{ paddingTop: "calc(var(--site-top-offset) + 2rem)" }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-sage-dark via-sage to-charcoal/80"
        aria-hidden="true"
      />
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
