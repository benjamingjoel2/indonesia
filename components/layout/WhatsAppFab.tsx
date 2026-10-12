import { whatsappHref } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/Icon";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref("Hi! I'd like help planning a trip to Indonesia.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with a travel specialist on WhatsApp (opens in a new tab)"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4f] text-white shadow-[0_10px_30px_-8px_rgba(15,46,42,0.55)] transition-transform duration-200 hover:scale-105 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
