import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame, useSpring } from "framer-motion";
import { useHomePage } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";

const HorizontalGallery = () => {
  const { data: homeData } = useHomePage();
  const rawImages = (homeData?.horizontalGallery || []).map((item: any) => ({
    ...item,
    src: item.image ? urlFor(item.image).width(800).height(1066).url() : "",
  }));

  // Triple the images for a seamless infinite loop during drags
  const displayImages = [...rawImages, ...rawImages, ...rawImages];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  // Calculate width for looping logic
  useEffect(() => {
    if (scrollRef.current) {
      setTrackWidth(scrollRef.current.scrollWidth / 3);
    }
  }, [displayImages]);

  // Infinite auto-scroll and teleportation logic
  useAnimationFrame((time, delta) => {
    if (isDragging || trackWidth === 0) return;

    // Movement speed (adjust as needed)
    const baseSpeed = -0.5; // pixels per frame
    let nextX = x.get() + baseSpeed;

    // Teleport logic for seamless looping
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
    // Ensure we are within the "middle" set of images after drag
    let currentX = x.get();
    if (currentX <= -trackWidth) {
      x.set(currentX + trackWidth);
    } else if (currentX > 0) {
      x.set(currentX - trackWidth);
    }
  };

  if (rawImages.length === 0) return null;

  return (
    <section className="relative pt-20 md:pt-28 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 select-none">
        <p className="label-caps text-accent mb-4">Nachie Maridadi Babes</p>
        <h2 className="font-body text-xl md:text-2xl italic text-foreground/80">
          Beautiful Moments: Our Clients, Captured in Nachie Maridadi
        </h2>
      </div>

      <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
        {/* Infinite scrolling track */}
        <motion.div
          ref={scrollRef}
          className="flex select-none"
          style={{ x }}
          drag="x"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragElastic={0.05} // Slight elasticity for a premium feel
        >
          {displayImages.map((img: any, i: number) => (
            <div
              key={i}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[32vw] lg:w-[25vw] aspect-[3/4] overflow-hidden pointer-events-none"
            >
              <img
                src={img.src}
                alt={img.alt || "Nachie Maridadi Client"}
                className="w-full h-full object-cover grayscale-[20%] transition-all duration-700 pointer-events-none"
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
