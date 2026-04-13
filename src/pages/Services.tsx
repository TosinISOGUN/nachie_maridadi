import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import { Sparkles, Crown, PartyPopper, Palette } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Custom Dressmaking",
    desc: "From concept to creation — we design and tailor dresses that fit your body, style, and story perfectly. Every garment is a one-of-a-kind masterpiece.",
    image: gallery1,
  },
  {
    icon: Crown,
    title: "Ankara Styling",
    desc: "We specialize in transforming traditional Ankara prints into modern, sophisticated garments. From bold statement pieces to subtle elegance.",
    image: gallery2,
  },
  {
    icon: PartyPopper,
    title: "Occasion Wear",
    desc: "Weddings, galas, graduations, or cultural celebrations — we create show-stopping outfits that make you the center of attention.",
    image: gallery4,
  },
  {
    icon: Palette,
    title: "Fabric Consultation",
    desc: "Not sure where to start? We'll guide you through fabric choices, colors, and styles to find the perfect combination for your vision.",
    image: gallery5,
  },
];

const Services = () => {
  return (
    <main>
      <SEO 
        title="Bespoke Services — Nachie Maridadi"
        description="From bridal Ankara gowns to corporate styling, explore our range of custom tailoring services in Nairobi."
        url="https://nachiemaridadi.vercel.app/services"
      />
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="label-caps text-accent mb-4">What We Offer</p>
            <h1 className="heading-display mb-6">Our Services</h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Every service is designed around you — your body, your style, your story. We don't do off-the-rack; we do exceptional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="pb-16">
        {services.map((service, i) => (
          <div key={i} className={`section-padding ${i % 2 === 1 ? "bg-secondary/50" : ""}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <AnimatedSection className={i % 2 === 1 ? "order-1 md:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.2} className={i % 2 === 1 ? "order-2 md:order-1" : ""}>
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="text-accent" size={26} />
                </div>
                <h2 className="heading-section mb-4">{service.title}</h2>
                <div className="divider-gold mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{service.desc}</p>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Book This Service
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-section text-primary-foreground mb-6">Not Sure What You Need?</h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Let's have a conversation. We'll help you figure out the perfect service for your occasion and style.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-12 py-6">
                  Get in Touch
                </Button>
              </Link>
              <a href="https://wa.me/254795680206" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="px-12 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Services;
