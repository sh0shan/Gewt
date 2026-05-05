"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LangToggle from "./LangToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/insights", label: t("insights") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-mist"
          : "bg-white/30 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="AlphaNorm — home">
          <Image
            src="/logo.png"
            alt="AlphaNorm"
            width={140}
            height={92}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 ${
                  active
                    ? "text-cobalt bg-cobalt/5"
                    : "text-steel hover:text-cobalt hover:bg-mist/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/login"
            className="ms-2 inline-flex items-center rounded-full bg-cobalt px-4 py-2 text-sm font-medium text-white hover:bg-ink transition-colors shadow-sm"
          >
            {t("login")}
          </Link>
          <div className="ms-2">
            <LangToggle />
          </div>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <LangToggle />
          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-mist/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-steel hover:bg-mist/40 hover:text-cobalt"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 block text-center rounded-full bg-cobalt px-4 py-2 text-sm font-medium text-white"
            >
              {t("login")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
