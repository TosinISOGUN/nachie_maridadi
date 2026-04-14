import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHomePage } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";


const HorizontalGallery = () => {
  const { data: homeData } = useHomePage();
  const displayImages = (homeData?.horizontalGallery || []).map((item: any) => ({
    ...item,
    src: item.image ? urlFor(item.image).width(800).height(1066).url() : "",
  }));

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 md:pt-28 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <p className="label-caps text-accent mb-4">Nachie Maridadi Babes</p>
        <h2 className="font-body text-xl md:text-2xl italic text-foreground/80">Beautiful Moments — Our Clients, Captured in Nachie Maridadi</h2>
      </div>

      <div className="relative group">
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
        >
          {displayImages.map((img: any, i: number) => (
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
