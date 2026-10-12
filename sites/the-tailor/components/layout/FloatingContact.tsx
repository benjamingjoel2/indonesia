"use client";

import { site, whatsappHref } from "@/data/site";
import { useUi } from "@/lib/ui-state";
import { Icon, WhatsAppIcon } from "@/components/ui/Icon";

const fabClass =
  "fixed bottom-5 right-5 z-40 inline-flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(15,46,42,0.55)] transition-transform duration-200 hover:scale-105 md:bottom-7 md:right-7";

/** Floating contact button: WhatsApp when a number is configured, otherwise opens the enquiry form. */
export function FloatingContact() {
  const { openPlanner } = useUi();
  if (site.whatsapp) {
    return (
      <a
        href={whatsappHref("Hello, I'd like help planning a journey.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with a Travel Designer on WhatsApp (opens in a new tab)"
        className={`${fabClass} h-14 w-14 rounded-full bg-[#1f7a4f] text-white`}
      >
        <WhatsAppIcon size={28} />
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={openPlanner}
      className={`${fabClass} h-12 gap-2 rounded-full bg-jungle-900 px-5 text-sm font-medium text-sand-50`}
    >
      <Icon name="mail" size={18} />
      {site.ctaLabel}
    </button>
  );
}
