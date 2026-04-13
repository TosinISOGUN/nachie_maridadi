import { useState } from "react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroMain from "@/assets/hero-main.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import { cn } from "@/lib/utils";

import { usePortfolio } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";

const staticGalleryItems = [
  { src: gallery1, alt: "Burgundy and gold Ankara evening gown", category: "Ankara Gowns" },
  { src: gallery2, alt: "Vibrant Ankara wrap dress", category: "Casual" },
  { src: gallery3, alt: "Ankara blazer and skirt set", category: "Corporate" },
  { src: gallery4, alt: "White and gold bridal Ankara dress", category: "Bridal" },
  { src: gallery5, alt: "Ankara jumpsuit casual wear", category: "Casual" },
  { src: gallery6, alt: "Purple and gold Ankara ball gown", category: "Ankara Gowns" },
  { src: heroMain, alt: "Statement Ankara strapless gown", category: "Ankara Gowns" },
  { src: craftsmanship, alt: "Handcrafted tailoring detail", category: "Casual" },
];

const Gallery = () => {
  const { data: galleryData } = usePortfolio(staticGalleryItems);
  
  // Ensure we fallback to static items if Sanity returns an empty list
  const activeItems = (galleryData && galleryData.length > 0) ? galleryData : staticGalleryItems;
  
  const displayItems = activeItems.map((item: any) => ({
    ...item,
    src: item.image ? urlFor(item.image).width(1200).url() : item.src,
  }));


  const dynamicCategories = ["All", ...new Set(displayItems.map((item: any) => item.category))];

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
            <AnimatedSection key={`${item.alt}-${activeCategory}`} delay={i * 0.05}>
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
