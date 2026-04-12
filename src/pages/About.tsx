import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import aboutFabrics from "@/assets/about-fabrics.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="label-caps text-accent mb-4">Our Story</p>
            <h1 className="heading-display mb-6">Crafted With Purpose,<br /><em className="italic font-normal">Worn With Pride</em></h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Nachie Maridadi was born from a love of African heritage, a passion for craftsmanship, and the belief that every woman deserves clothing as unique as she is.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection>
            <img src={aboutFabrics} alt="Ankara fabric swatches" className="w-full aspect-square object-cover" loading="lazy" width={1024} height={1024} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="heading-section mb-6">The Heart of Ankara</h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ankara fabric carries centuries of African storytelling. Each pattern tells a tale — of community, celebration, strength, and beauty. At Nachie Maridadi, we honor this tradition by transforming these vibrant textiles into modern, bespoke garments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Based in the heart of Nairobi, our atelier is where tradition meets contemporary design. We work closely with each client to understand their story, style, and occasion — then bring it to life stitch by stitch.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you bring your own fabric or choose from our curated collection, we pour love and precision into every garment. Because for us, fashion isn't just about clothes — it's about confidence, culture, and self-expression.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection delay={0.1} className="order-2 md:order-1">
            <h2 className="heading-section mb-6">Our Values</h2>
            <div className="divider-gold mb-8" />
            <div className="space-y-8">
              {[
                { title: "Craftsmanship", desc: "Every stitch is intentional. We take pride in delivering perfection, never cutting corners." },
                { title: "Individuality", desc: "No two women are the same, and no two of our garments are either. Every piece is uniquely yours." },
                { title: "Cultural Pride", desc: "We celebrate African heritage through fashion, keeping traditions alive in modern silhouettes." },
                { title: "Warmth", desc: "From the first consultation to the final fitting, we treat every client like family." },
              ].map((v, i) => (
                <div key={i}>
                  <h3 className="font-heading text-lg font-medium mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection className="order-1 md:order-2">
            <img src={craftsmanship} alt="Tailoring craftsmanship" className="w-full aspect-square object-cover" loading="lazy" width={1024} height={1024} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-section text-primary-foreground mb-6">Let's Tell Your Story</h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Book a consultation and let us create something beautiful — just for you.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-12 py-6">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default About;
