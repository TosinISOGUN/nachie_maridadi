import backdropImage from "@/assets/backdrop-transition.webp";

const BackdropSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Sticky parallax image */}
      <div className="absolute inset-0">
        <img
          src={backdropImage}
          alt="Premium tailoring craftsmanship"
          className="w-full h-full object-cover scale-105"
          loading="lazy"
          style={{ willChange: "transform" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </div>

      {/* Floating content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p
            className="label-caps mb-4 tracking-[0.35em]"
            style={{ color: "hsl(38, 40%, 70%)" }}
          >
            The Art of Bespoke
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-background font-normal leading-tight mb-6">
            Every Stitch Tells a Story
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: "hsl(38, 40%, 60%)" }} />
        </div>
      </div>
    </section>
  );
};

export default BackdropSection;
