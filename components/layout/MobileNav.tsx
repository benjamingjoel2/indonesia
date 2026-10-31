"use client";

import { useT } from "@/components/i18n/I18nProvider";
import Link from "@/components/i18n/Link";
import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  aboutMenu,
  destinationsMenu,
  experiencesMenu,
  site,
} from "@/data/site";
import type { NavGroup, NavLink } from "@/data/types";
import { useFocusTrap, useScrollLock } from "@/lib/hooks";
import { useUi } from "@/lib/ui-state";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { Logo } from "./Logo";
import { LanguageSelector } from "@/components/i18n/LanguageSelector";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, tx } = useT();
  const panelRef = useRef<HTMLDivElement>(null);
  const { openPlanner } = useUi();
  useScrollLock(open);
  useFocusTrap(panelRef, open, onClose);

  if (!open) return null;

  // Portal to <body>: the sticky header's backdrop-filter would otherwise
  // become the containing block for this fixed-position drawer.
  return createPortal(
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        type="button"
        aria-label={t("Close menu")}
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full animate-fade-in bg-jungle-950/50"
      />
      <div
        ref={panelRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label={t("Site menu")}
        className="absolute inset-y-0 right-0 flex w-full max-w-md animate-slide-in flex-col bg-paper"
      >
        <div className="flex h-16 items-center justify-between border-b border-sand-300 px-5">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm hover:bg-sand-100"
            aria-label={t("Close menu")}
          >
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label={t("Mobile")} className="flex-1 overflow-y-auto px-5 pb-8">
          <LanguageSelector className="border-b border-sand-300 py-4 text-sm" />
          <Accordion title={t("Destinations")}>
            {tx(destinationsMenu).map((g) => (
              <GroupLinks key={g.title} group={g} />
            ))}
            <SimpleLink href="/destinations" strong>
              {t("View all destinations")}
            </SimpleLink>
          </Accordion>
          <SimpleRow href="/trips">{t("Trips")}</SimpleRow>
          <Accordion title={t("Experiences")}>
            <LinkList links={tx(experiencesMenu)} />
            <SimpleLink href="/experiences" strong>
              {t("All experiences")}
            </SimpleLink>
          </Accordion>
          <SimpleRow href="/stays">{t("Stays")}</SimpleRow>
          <Accordion title={t("About")}>
            {tx(aboutMenu).map((g) => (
              <GroupLinks key={g.title} group={g} />
            ))}
          </Accordion>
          <SimpleRow href="/contact">{t("Contact")}</SimpleRow>

          <div className="mt-6 flex items-center justify-between rounded-sm bg-sand-100 px-4 py-2">
            <span className="text-sm text-ink-soft">{t("Currency")}</span>
            <CurrencySwitcher id="currency-mobile" />
          </div>

          <div className="mt-6 grid gap-3">
            <Button
              onClick={() => {
                onClose();
                openPlanner();
              }}
              arrow
            >
              {t("Start planning")}
            </Button>
            <a href={`mailto:${site.email}`} className="text-center text-sm text-ink-soft underline-offset-4 hover:underline">
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </div>,
    document.body,
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="border-b border-sand-300">
      <h2>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between py-4 text-left font-display text-2xl"
        >
          {title}
          <Icon name={open ? "minus" : "plus"} size={18} />
        </button>
      </h2>
      <div id={id} hidden={!open} className="pb-4">
        {children}
      </div>
    </div>
  );
}

function GroupLinks({ group }: { group: NavGroup }) {
  return (
    <div className="mb-4">
      <p className="eyebrow mb-1 text-ink-soft">{group.title}</p>
      <LinkList links={group.links} />
    </div>
  );
}

function LinkList({ links }: { links: NavLink[] }) {
  return (
    <ul>
      {links.map((l) => (
        <li key={l.href}>
          <SimpleLink href={l.href}>{l.label}</SimpleLink>
        </li>
      ))}
    </ul>
  );
}

function SimpleLink({ href, children, strong }: { href: string; children: React.ReactNode; strong?: boolean }) {
  return (
    <Link href={href} className={`block py-2 text-[0.9375rem] ${strong ? "font-medium underline underline-offset-4" : ""}`}>
      {children}
    </Link>
  );
}

function SimpleRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block border-b border-sand-300 py-4 font-display text-2xl">
      {children}
    </Link>
  );
}
