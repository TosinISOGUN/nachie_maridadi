import { motion } from "framer-motion";
import { useHomePage } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";

const HorizontalGallery = () => {
  const { data: homeData } = useHomePage();
  const rawImages = (homeData?.horizontalGallery || []).map((item: any) => ({
    ...item,
    src: item.image ? urlFor(item.image).width(800).height(1066).url() : "",
  }));

  // Duplicate the images to create a seamless infinite loop
  const displayImages = [...rawImages, ...rawImages, ...rawImages];

  if (rawImages.length === 0) return null;

  return (
    <section className="relative pt-20 md:pt-28 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <p className="label-caps text-accent mb-4">Nachie Maridadi Babes</p>
        <h2 className="font-body text-xl md:text-2xl italic text-foreground/80">
          Beautiful Moments: Our Clients, Captured in Nachie Maridadi
        </h2>
      </div>

      <div className="relative overflow-hidden group">
        {/* Infinite scrolling track */}
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-33.33%"], // Since we tripled the array, we move by one third
          }}
          transition={{
            duration: rawImages.length * 5, // Speed proportional to image count
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {displayImages.map((img: any, i: number) => (
            <div
              key={i}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[32vw] lg:w-[25vw] aspect-[3/4] overflow-hidden group/item"
            >
              <img
                src={img.src}
                alt={img.alt || "Nachie Maridadi Client"}
                className="w-full h-full object-cover grayscale-[20%] group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
