import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  // Pages with dark hero backgrounds where white text works
  const isHeroPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine color scheme based on scroll + page
  const showWhiteBg = scrolled;
  const linkColor = showWhiteBg
    ? "text-foreground/80 hover:text-accent"
    : isHeroPage
      ? "text-background/90 hover:text-gold"
      : "text-foreground/80 hover:text-accent";
  const activeLinkColor = showWhiteBg ? "text-accent" : isHeroPage ? "text-gold" : "text-accent";
  const hamburgerColor = showWhiteBg ? "text-foreground" : isHeroPage ? "text-background" : "text-foreground";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showWhiteBg
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : (isHeroPage && isOpen)
            ? "bg-black/40 backdrop-blur-xl py-5"
            : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Nachie Maridadi"
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-12 md:h-14" : "h-14 md:h-16",
              showWhiteBg
                ? "brightness-0"
                : !isHeroPage
                  ? "brightness-0"
                  : ""
            )}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "label-caps transition-colors duration-300",
                location.pathname === link.path ? activeLinkColor : linkColor
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="gold" size="sm" className="ml-2">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("md:hidden transition-colors", hamburgerColor)}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div 
          className={cn(
            "md:hidden animate-fade-in",
            showWhiteBg 
              ? "border-t border-border" 
              : isHeroPage 
                ? "border-t border-white/10" 
                : "border-t border-border"
          )}
        >
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "label-caps transition-colors duration-300 px-4 py-2",
                  location.pathname === link.path ? activeLinkColor : linkColor
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="gold" size="sm" className={cn(!showWhiteBg && isHeroPage && "bg-white text-accent hover:bg-white/90")}>
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
