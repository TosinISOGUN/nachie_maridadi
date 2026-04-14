import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, MapPin, MessageCircle, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = ["Custom Dressmaking", "Ankara Styling", "Occasion Wear", "Fabric Consultation", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hello! My name is ${form.name}. I'm interested in ${form.service || "your services"}. ${form.message}`
    );
    window.open(`https://wa.me/254795680206?text=${whatsappMsg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "We'll get back to you shortly!" });
  };

  return (
    <main>
      <SEO 
        title="Book a Consultation — Nachie Maridadi"
        description="Ready to create something beautiful? Book your custom tailoring consultation or reach out via WhatsApp."
        url="https://nachiemaridadi.vercel.app/contact"
      />
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="label-caps text-accent mb-4">Get in Touch</p>
            <h1 className="heading-display mb-6">Book Your<br /><em className="italic font-normal">Consultation</em></h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Ready to create something extraordinary? Reach out and let's begin your bespoke journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
              </div>
              <div>
                <label className="label-caps text-muted-foreground mb-2 block">Email (Optional)</label>
                <input
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="service-select" className="label-caps text-muted-foreground mb-2 block">Preferred Service</label>
                <select
                  id="service-select"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label-caps text-muted-foreground mb-2 block">Your Message *</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your dream outfit, the occasion, or any special requirements..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto px-12 py-6">
                Send via WhatsApp
              </Button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="bg-foreground text-primary-foreground p-10 h-full flex flex-col justify-between">
              <div>
                <img src={logo} alt="Nachie Maridadi" className="h-14 w-auto mb-8 brightness-0 invert" />

                <div className="space-y-6">
                  <a href="tel:+254795680206" className="flex items-start gap-4 text-primary-foreground/70 hover:text-gold transition-colors group">
                    <Phone size={20} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="label-caps text-primary-foreground/50 mb-1">Call Us</p>
                      <p className="text-lg">+254 795 680 206</p>
                    </div>
                  </a>
                  <a href="https://wa.me/254795680206" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-primary-foreground/70 hover:text-gold transition-colors">
                    <MessageCircle size={20} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="label-caps text-primary-foreground/50 mb-1">WhatsApp</p>
                      <p className="text-lg">+254 795 680 206</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 text-primary-foreground/70">
                    <Mail size={20} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="label-caps text-primary-foreground/50 mb-1">Email</p>
                      <p className="text-lg">hello@nachiemaridadi.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-primary-foreground/70">
                    <MapPin size={20} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="label-caps text-primary-foreground/50 mb-1">Location</p>
                      <p className="text-lg">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-primary-foreground/10 space-y-4">
                  <p className="label-caps text-primary-foreground/50">Follow Us</p>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/nachie_maridadi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/60 hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <Instagram size={20} />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@nachie_maridadi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/60 hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                      <span className="text-sm">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                <p className="text-primary-foreground/40 text-sm">
                  Mon – Fri: 9:00 AM – 6:00 PM<br />
                  Sat – Sun: By Appointment
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
