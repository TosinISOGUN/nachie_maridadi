import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const phoneNumber = "254795680206";
  const message = encodeURIComponent("Hello! I'd like to inquire about your bespoke tailoring services.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-background rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 safe-bottom safe-right"
      style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))", right: "max(1.5rem, env(safe-area-inset-right, 0px))" }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
