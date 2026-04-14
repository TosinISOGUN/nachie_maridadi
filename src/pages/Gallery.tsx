import { useState } from "react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

import { usePortfolio } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";

const Gallery = () => {
  const { data: galleryData } = usePortfolio();
  
  const displayItems = (galleryData || []).map((item: any) => ({
    ...item,
    src: item.image ? urlFor(item.image).width(1200).url() : "",
    alt: item.altText || item.title || "Gallery image",
  }));

  const dynamicCategories = [
    "All",
    ...new Set(displayItems.map((item: any) => item.category).filter(Boolean)),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? displayItems
    : displayItems.filter((item: any) => item.category === activeCategory);

  return (
    <main>
      <SEO 
        title="Our Creations — Nachie Maridadi Portfolio"
        description="A visual journey through our finest bespoke creations. Ankara gowns, power suiting, and elegant occasion wear."
        url="https://nachiemaridadi.vercel.app/gallery"
      />
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="label-caps text-accent mb-4">Portfolio</p>
            <h1 className="heading-display mb-6">Our Gallery</h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A curated collection of our bespoke creations — each piece as unique as the woman who wears it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 lg:px-24 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {dynamicCategories.map((cat: any) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "label-caps px-5 py-2.5 transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <AnimatedSection key={item._id || i} delay={i * 0.05}>
              <div className="break-inside-avoid overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="label-caps text-background text-xs">{item.category}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
