import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const WHATSAPP_URL = "#";

interface CTAButtonProps {
  label?: string;
  className?: string;
  size?: "default" | "lg" | "sm";
}

export function CTAButton({
  label = "Clique e entre no grupo exclusivo do WhatsApp",
  className,
  size = "default",
}: CTAButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    default: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-sm md:text-base",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold uppercase tracking-wider shadow-[0_0_40px_-8px_oklch(0.68_0.18_145/0.6)] hover:shadow-[0_0_60px_-6px_oklch(0.68_0.18_145/0.8)] transition-all hover:scale-[1.02]",
        sizes[size],
        className,
      )}
    >
      <MessageCircle className="size-5" strokeWidth={2.2} />
      <span>{label}</span>
    </a>
  );
}
