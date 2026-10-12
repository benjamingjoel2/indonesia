"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  aboutMenu,
  destinationsMenu,
  experiencesMenu,
  mainNav,
  site,
  type MainNavItem,
} from "@/data/site";
import type { NavGroup } from "@/data/types";
import { useUi } from "@/lib/ui-state";
import { ArrowLink, Button } from "@/components/ui/Button";
import { emphasize } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

type MenuKind = Exclude<MainNavItem["kind"], "link">;

export function Header() {
  const pathname = usePathname();
  const { openPlanner, openSearch } = useUi();
  const [openMenu, setOpenMenu] = useState<MenuKind | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpenMenu(null), []);

  // Close menus on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape / outside click.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = document.getElementById(`menu-trigger-${openMenu}`);
        close();
        trigger?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu, close]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard shortcut: "/" or Cmd/Ctrl+K opens search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable;
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        openSearch();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openSearch]);

  const hoverOpen = (kind: MenuKind) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(kind), 120);
  };
  const hoverClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-colors ${
        scrolled || openMenu ? "border-sand-300" : "border-transparent"
      }`}
      onMouseLeave={hoverClose}
    >
      <div className="container-edit flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.kind === "link" ? (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onMouseEnter={hoverClose}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="inline-flex h-10 items-center rounded-sm px-3 text-[0.9375rem] hover:bg-sand-100 aria-[current=page]:underline aria-[current=page]:underline-offset-8"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label} onMouseEnter={() => hoverOpen(item.kind as MenuKind)}>
                  <button
                    id={`menu-trigger-${item.kind}`}
                    type="button"
                    aria-expanded={openMenu === item.kind}
                    aria-controls={`menu-panel-${item.kind}`}
                    onClick={() =>
                      setOpenMenu((m) => (m === item.kind ? null : (item.kind as MenuKind)))
                    }
                    className="inline-flex h-10 items-center gap-1 rounded-sm px-3 text-[0.9375rem] hover:bg-sand-100 aria-expanded:bg-sand-100"
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      size={14}
                      className={`transition-transform ${openMenu === item.kind ? "rotate-180" : ""}`}
                    />
                  </button>
                </li>
              ),
            )}
            <li>
              <Link
                href="/contact"
                onMouseEnter={hoverClose}
                className="inline-flex h-10 items-center rounded-sm px-3 text-[0.9375rem] hover:bg-sand-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm hover:bg-sand-100"
            aria-label="Search the site"
            aria-keyshortcuts="/ Control+K Meta+K"
          >
            <Icon name="search" />
          </button>
          <div className="hidden lg:block">
            <CurrencySwitcher id="currency-desktop" />
          </div>
          <div className="hidden sm:block">
            <Button onClick={openPlanner} arrow>
              Enquire
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm hover:bg-sand-100 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {/* Mega-menu panels */}
      <MegaPanel kind="destinations" open={openMenu === "destinations"} onEnter={() => hoverOpen("destinations")}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
          {destinationsMenu.map((group) => (
            <MenuColumn key={group.title} group={group} />
          ))}
          <MenuFeature
            title="Not sure where to *begin*?"
            text="Tell us how you like to travel. Your Travel Designer will suggest a route across the country that fits."
            onPlan={openPlanner}
          />
        </div>
        <div className="mt-8 border-t border-sand-300 pt-5">
          <ArrowLink href="/destinations" className="text-sm">
            View all destinations
          </ArrowLink>
        </div>
      </MegaPanel>

      <MegaPanel kind="experiences" open={openMenu === "experiences"} onEnter={() => hoverOpen("experiences")}>
        <div className="grid gap-10 lg:grid-cols-[2fr_0.9fr]">
          <div>
            <p className="eyebrow mb-4 text-ink-soft">Travel by the kind of journey</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1 xl:grid-cols-3">
              {experiencesMenu.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1.5 font-display text-lg hover:text-lagoon-500">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <MenuFeature
            title="Something more *bespoke*?"
            text="Private yachts, remote islands, multi-generation celebrations. Our private travel desk handles it."
            href="/private-travel"
            hrefLabel="Private & bespoke travel"
          />
        </div>
        <div className="mt-8 border-t border-sand-300 pt-5">
          <ArrowLink href="/experiences" className="text-sm">
            All experiences
          </ArrowLink>
        </div>
      </MegaPanel>

      <MegaPanel kind="about" open={openMenu === "about"} onEnter={() => hoverOpen("about")}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
          {aboutMenu.map((group) => (
            <MenuColumn key={group.title} group={group} />
          ))}
          <div className="rounded-sm bg-sand-100 p-6">
            <p className="eyebrow mb-3 text-ink-soft">Talk to a Travel Designer</p>
            <a href={site.phoneHref} className="flex items-center gap-2 py-1 hover:text-lagoon-500">
              <Icon name="phone" size={16} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 py-1 hover:text-lagoon-500">
              <Icon name="mail" size={16} /> {site.email}
            </a>
            <p className="mt-3 text-sm text-ink-soft">{site.hours}</p>
          </div>
        </div>
      </MegaPanel>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MegaPanel({
  kind,
  open,
  onEnter,
  children,
}: {
  kind: MenuKind;
  open: boolean;
  onEnter: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      id={`menu-panel-${kind}`}
      role="region"
      aria-labelledby={`menu-trigger-${kind}`}
      hidden={!open}
      onMouseEnter={onEnter}
      className="absolute inset-x-0 top-full hidden border-b border-sand-300 bg-paper shadow-[0_24px_40px_-24px_rgba(15,46,42,0.25)] lg:block [&[hidden]]:hidden"
    >
      <div className="container-edit animate-fade-in py-10">{children}</div>
    </div>
  );
}

function MenuColumn({ group }: { group: NavGroup }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-ink-soft">{group.title}</p>
      <ul className="space-y-1">
        {group.links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block py-1.5 font-display text-lg hover:text-lagoon-500">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuFeature({
  title,
  text,
  onPlan,
  href,
  hrefLabel,
}: {
  title: string;
  text: string;
  onPlan?: () => void;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-sm bg-jungle-900 p-6 text-sand-50">
      <div>
        <p className="font-display text-2xl leading-tight">{emphasize(title)}</p>
        <p className="mt-3 text-sm text-sand-200">{text}</p>
      </div>
      {onPlan ? (
        <Button variant="light" onClick={onPlan} className="mt-6 self-start" arrow>
          Enquire
        </Button>
      ) : href ? (
        <ArrowLink href={href} className="mt-6 text-sm text-sand-50">
          {hrefLabel}
        </ArrowLink>
      ) : null}
    </div>
  );
}
