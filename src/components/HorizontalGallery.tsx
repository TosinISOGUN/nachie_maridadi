import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroMain from "@/assets/hero-main.jpg";

const images = [
  { src: gallery1, alt: "Ankara evening gown" },
  { src: gallery2, alt: "Ankara wrap dress" },
  { src: heroMain, alt: "Statement gown" },
  { src: gallery3, alt: "Corporate Ankara set" },
  { src: gallery4, alt: "Bridal Ankara dress" },
  { src: gallery5, alt: "Casual Ankara jumpsuit" },
  { src: gallery6, alt: "Ankara ball gown" },
];

const HorizontalGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <p className="label-caps text-accent mb-4">Our Clients</p>
        <h2 className="font-body text-xl md:text-2xl italic text-foreground/80">Beautiful Moments — Our Clients, Captured in Nachie Maridadi</h2>
      </div>

      <div className="relative group">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Arrows */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background/80 transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background/80 transition-all duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable gallery */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] aspect-[3/4] overflow-hidden group/item"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
