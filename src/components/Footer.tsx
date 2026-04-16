import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src={logo} alt="Nachie Maridadi" className="h-16 w-auto mb-6" />
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Bespoke women's fashion crafted with passion, precision, and the finest African fabrics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-caps text-gold mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-caps text-gold mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+254795680206"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                +254 795 680 206
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <MapPin size={16} />
                Nairobi, Kenya
              </div>
              <a
                href="mailto:naomi01williams@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} />
                naomi01williams@gmail.com
              </a>
              <a
                href="https://www.instagram.com/nachie_maridadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                <Instagram size={16} />
                @nachie_maridadi
              </a>
              <a
                href="https://www.tiktok.com/@01nachie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 text-xs">
            &copy; {new Date().getFullYear()} Nachie Maridadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
