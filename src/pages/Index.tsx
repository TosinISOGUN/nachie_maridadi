import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import HeroCarousel from "@/components/HeroCarousel";
import BackdropSection from "@/components/BackdropSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Scissors, Ruler, Sparkles, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Amina W.",
    text: "Nachie Maridadi brought my vision to life. The attention to detail on my wedding Ankara gown was extraordinary. I felt like royalty.",
  },
  {
    name: "Grace M.",
    text: "From fabric selection to the final fitting, every step was a dream. My custom dress was the talk of the entire event!",
  },
  {
    name: "Sarah K.",
    text: "I've never felt more beautiful. The craftsmanship, the fit, the fabric — everything was perfection. I'm a client for life.",
  },
];

const steps = [
  { icon: Heart, title: "Consultation", desc: "Share your vision, occasion, and style preferences with us." },
  { icon: Scissors, title: "Fabric Selection", desc: "Choose from premium Ankara prints or bring your own fabric." },
  { icon: Ruler, title: "Measurements", desc: "Precise measurements taken for a flawless, custom fit." },
  { icon: Sparkles, title: "Creation & Fitting", desc: "Your piece is crafted with love and perfected to your body." },
];

const Index = () => {
  return (
    <main>
      <HeroCarousel />

      {/* Brand Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection>
            <img
              src={craftsmanshipImage}
              alt="Artisan craftsmanship with Ankara fabric"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="label-caps text-accent mb-4">Our Story</p>
            <h2 className="heading-section mb-6">Where Heritage Meets Haute Couture</h2>
            <div className="divider-gold mb-8" />
            <p className="body-large text-muted-foreground mb-6">
              At Nachie Maridadi, we believe every woman deserves clothing that tells her story. Rooted in the vibrant traditions of African textile artistry, we craft bespoke garments that celebrate individuality, culture, and elegance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From bold Ankara prints to the fabric of your choice, every piece is designed and tailored with meticulous care in our Nairobi atelier — ensuring a perfect fit and an unforgettable look.
            </p>
            <Link to="/about">
              <Button variant="hero-outline" size="lg">
                Learn More
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-caps text-accent mb-4">Featured</p>
            <h2 className="heading-section">Our Creations</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: gallery1, label: "Statement Pieces", cat: "Ankara Gowns" },
              { img: gallery2, label: "Day Wear", cat: "Casual Elegance" },
              { img: gallery3, label: "Corporate", cat: "Power Suiting" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <Link to="/gallery" className="group block overflow-hidden">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={1024}
                      height={1024}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="label-caps text-gold-light mb-1">{item.cat}</p>
                      <p className="font-heading text-xl text-background">{item.label}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="hero-outline" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Horizontal Gallery */}
      <HorizontalGallery />

      {/* How It Works */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <p className="label-caps text-accent mb-3">The Process</p>
            <h2 className="heading-section">How It Works</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-accent" size={24} />
                </div>
                <p className="label-caps text-muted-foreground mb-1">Step {i + 1}</p>
                <h3 className="font-heading text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="label-caps text-gold mb-4">Client Voices</p>
            <h2 className="heading-section text-primary-foreground">Words That Inspire Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-12 h-px bg-gold mx-auto mb-6" />
                  <blockquote className="font-heading text-lg md:text-xl text-primary-foreground/85 leading-relaxed italic font-normal mb-6">
                    "{t.text}"
                  </blockquote>
                  <p className="label-caps text-gold tracking-[0.3em]">{t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Backdrop transition */}
      <BackdropSection />

      {/* CTA */}
      <section className="section-padding text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <p className="label-caps text-accent mb-4">Ready?</p>
            <h2 className="heading-section mb-6">Let's Create Something Beautiful Together</h2>
            <p className="body-large text-muted-foreground mb-10">
              Your dream outfit is one conversation away. Book a consultation and let's bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="px-12 py-6">
                  Book a Consultation
                </Button>
              </Link>
              <a href="https://wa.me/254795680206" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="px-12 py-6">
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

export default Index;
