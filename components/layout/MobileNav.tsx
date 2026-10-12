"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  aboutMenu,
  destinationsMenu,
  experiencesMenu,
  site,
  whatsappHref,
} from "@/data/site";
import type { NavGroup, NavLink } from "@/data/types";
import { useFocusTrap, useScrollLock } from "@/lib/hooks";
import { useUi } from "@/lib/ui-state";
import { Button } from "@/components/ui/Button";
import { Icon, WhatsAppIcon } from "@/components/ui/Icon";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { Logo } from "./Logo";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
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
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full animate-fade-in bg-jungle-950/50"
      />
      <div
        ref={panelRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-full max-w-md animate-slide-in flex-col bg-paper"
      >
        <div className="flex h-16 items-center justify-between border-b border-sand-300 px-5">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm hover:bg-sand-100"
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-8">
          <Accordion title="Destinations">
            {destinationsMenu.map((g) => (
              <GroupLinks key={g.title} group={g} />
            ))}
            <SimpleLink href="/destinations" strong>
              View all destinations
            </SimpleLink>
          </Accordion>
          <SimpleRow href="/trips">Trips</SimpleRow>
          <Accordion title="Experiences">
            <LinkList links={experiencesMenu} />
            <SimpleLink href="/experiences" strong>
              All experiences
            </SimpleLink>
          </Accordion>
          <SimpleRow href="/stays">Stays</SimpleRow>
          <Accordion title="About">
            {aboutMenu.map((g) => (
              <GroupLinks key={g.title} group={g} />
            ))}
          </Accordion>
          <SimpleRow href="/contact">Contact</SimpleRow>

          <div className="mt-6 flex items-center justify-between rounded-sm bg-sand-100 px-4 py-2">
            <span className="text-sm text-ink-soft">Currency</span>
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
              Start planning
            </Button>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-jungle-900 px-5 text-[0.9375rem] font-medium"
            >
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
            <a href={site.phoneHref} className="text-center text-sm text-ink-soft underline-offset-4 hover:underline">
              {site.phone}
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
    <Link href={href} className={`block py-2 text-[1.0625rem] ${strong ? "font-medium underline underline-offset-4" : ""}`}>
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
