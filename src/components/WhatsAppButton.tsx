import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254795680206";
  const message = encodeURIComponent("Hello! I'd like to inquire about your bespoke tailoring services.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-background rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
