import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const WHATSAPP_URL = "#";

interface CTAButtonProps {
  className?: string;
  size?: "default" | "lg" | "sm";
}

export function CTAButton({ className, size = "default" }: CTAButtonProps) {
  const sizes = {
    sm: "pl-2 pr-5 py-2 text-[10px]",
    default: "pl-2 pr-7 py-2.5 text-xs",
    lg: "pl-2.5 pr-9 py-3 text-xs md:text-sm",
  };
  const iconSize = {
    sm: "size-7",
    default: "size-9",
    lg: "size-11",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-whatsapp text-whatsapp-foreground font-bold uppercase tracking-wider shadow-[0_0_40px_-8px_oklch(0.68_0.18_145/0.6)] hover:shadow-[0_0_60px_-6px_oklch(0.68_0.18_145/0.8)] transition-all hover:scale-[1.02]",
        sizes[size],
        className,
      )}
    >
      <span className={cn("inline-flex items-center justify-center rounded-full bg-white text-whatsapp shrink-0", iconSize[size])}>
        <MessageCircle className="size-[55%]" strokeWidth={2.4} fill="currentColor" stroke="white" />
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span className="font-semibold">Clique e entre no grupo</span>
        <span className="font-extrabold">exclusivo do WhatsApp!</span>
      </span>
    </a>
  );
}
