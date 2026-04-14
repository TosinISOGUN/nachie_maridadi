import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHomePage } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";

const HorizontalGallery = () => {
  const { data: homeData } = useHomePage();
  const rawImages = (homeData?.horizontalGallery || []).map((item: any) => ({
    ...item,
    src: item.image ? urlFor(item.image).width(800).height(1066).url() : "",
  }));

  const displayImages = [...rawImages, ...rawImages, ...rawImages];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setTrackWidth(scrollRef.current.scrollWidth / 3);
    }
  }, [displayImages]);

  useAnimationFrame((time, delta) => {
    if (isDragging || trackWidth === 0) return;

    const baseSpeed = -0.6;
    let nextX = x.get() + baseSpeed;

    if (nextX <= -trackWidth) {
      nextX += trackWidth;
    } else if (nextX > 0) {
      nextX -= trackWidth;
    }

    x.set(nextX);
  });

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    let currentX = x.get();
    if (currentX <= -trackWidth) {
      x.set(currentX + trackWidth);
    } else if (currentX > 0) {
      x.set(currentX - trackWidth);
    }
  };

  const manualScroll = (direction: number) => {
    const scrollAmount = window.innerWidth * 0.5 * direction;
    let nextX = x.get() + scrollAmount;

    // Smoothly animate the manual scroll
    animate(x, nextX, {
      type: "spring",
      stiffness: 100,
      damping: 20,
      onComplete: () => {
        // After animation, ensure we are inside the boundaries for seamless looping
        let currentX = x.get();
        if (currentX <= -trackWidth) {
          x.set(currentX + trackWidth);
        } else if (currentX > 0) {
          x.set(currentX - trackWidth);
        }
      }
    });
  };

  if (rawImages.length === 0) return null;

  return (
    <section className="relative pt-20 md:pt-28 pb-0 overflow-hidden group/gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 select-none">
        <p className="label-caps text-accent mb-4">Nachie Maridadi Babes</p>
        <h2 className="font-body text-xl md:text-2xl italic text-foreground/80">
          Beautiful Moments: Our Clients, Captured in Nachie Maridadi
        </h2>
      </div>

      <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
        {/* Navigation Arrows - Visible on hover and for better mobile accessibility */}
        <button
          onClick={() => manualScroll(1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:bg-background/80"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => manualScroll(-1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:bg-background/80"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Infinite scrolling track */}
        <motion.div
          ref={scrollRef}
          className="flex select-none"
          style={{ x }}
          drag="x"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragElastic={0.05}
        >
          {displayImages.map((img: any, i: number) => (
            <div
              key={i}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[32vw] lg:w-[25vw] aspect-[3/4] overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt || "Nachie Maridadi Client"}
                className="w-full h-full object-cover transition-all duration-700 active:scale-95"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
