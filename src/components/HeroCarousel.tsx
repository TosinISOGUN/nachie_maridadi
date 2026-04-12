import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-main.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { src: heroImage, alt: "Elegant African woman in custom Ankara dress" },
  { src: hero3, alt: "African woman in bold colorful Ankara ballgown" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <AnimatedSection>
          <p className="label-caps text-gold mb-4">Bespoke African Fashion</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-background leading-tight max-w-2xl mb-6">
            Customized<br />
            <em className="italic font-normal">With Love</em>
          </h1>
          <p className="text-background/80 text-lg md:text-xl max-w-lg mb-10 font-body leading-relaxed">
            Bespoke women's clothing, handcrafted in Nairobi with premium Ankara and curated fabrics — made uniquely for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="px-10 py-6">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="hero-outline" size="lg" className="px-10 py-6 border-background text-background hover:bg-background hover:text-foreground">
                View Collection
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
