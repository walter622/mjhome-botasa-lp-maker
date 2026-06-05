import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const WHATSAPP_URL = "#";

interface CTAButtonProps {
  className?: string;
  size?: "default" | "lg";
}

export function CTAButton({ className, size = "default" }: CTAButtonProps) {
  const sizes = {
    default: "pl-2 pr-7 py-2 text-sm",
    lg: "pl-2.5 pr-10 py-2.5 text-base",
  };
  const iconSize = {
    default: "size-11",
    lg: "size-14",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-whatsapp text-whatsapp-foreground uppercase shadow-[0_8px_30px_-8px_oklch(0.68_0.18_145/0.7)] hover:shadow-[0_10px_40px_-6px_oklch(0.68_0.18_145/0.9)] transition-all hover:scale-[1.02]",
        sizes[size],
        className,
      )}
    >
      <span className={cn("inline-flex items-center justify-center rounded-full bg-white text-whatsapp shrink-0", iconSize[size])}>
        <MessageCircle className="size-[58%]" strokeWidth={0} fill="currentColor" />
      </span>
      <span className="flex flex-col leading-[1.15] text-left tracking-wide">
        <span className="font-medium">Clique e entre no grupo</span>
        <span className="font-extrabold">exclusivo do WhatsApp!</span>
      </span>
    </a>
  );
}

interface HeaderCTAProps {
  className?: string;
}

export function HeaderCTA({ className }: HeaderCTAProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold uppercase tracking-wider px-5 py-2.5 text-xs shadow-[0_0_30px_-8px_oklch(0.68_0.18_145/0.6)] hover:scale-[1.02] transition-transform",
        className,
      )}
    >
      <MessageCircle className="size-4" strokeWidth={2.2} />
      <span>Grupo VIP</span>
    </a>
  );
}
