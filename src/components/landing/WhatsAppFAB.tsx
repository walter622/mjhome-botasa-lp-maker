import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./CTAButton";

export function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar no grupo VIP do WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 inline-flex items-center justify-center size-14 md:size-16 rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_0_40px_-4px_oklch(0.68_0.18_145/0.7)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-7" strokeWidth={2.2} />
      <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp/40" />
    </a>
  );
}
