"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();

  const targetLocale = locale === "en" ? "ar" : "en";
  const ariaLabel =
    locale === "en" ? t("switchToArabic") : t("switchToEnglish");

  function onClick() {
    router.replace(pathname, { locale: targetLocale });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={locale === "en" ? "false" : "true"}
      title={ariaLabel}
      className="inline-flex items-center gap-1.5 rounded-full border border-mist bg-white px-2.5 py-1.5 text-xs text-ink hover:border-cobalt focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 transition-colors"
    >
      <span
        className="block h-3.5 w-[22px] overflow-hidden rounded-[2px]"
        style={{
          opacity: locale === "ar" ? 1 : 0.35,
          filter: locale === "ar" ? "none" : "grayscale(0.6)",
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 16" preserveAspectRatio="none" className="h-full w-full">
          <rect width="24" height="16" fill="#ffffff" />
          <rect width="9" height="16" fill="#8d1b3d" />
          <path
            d="M9 0 L11 1 L9 2 L11 3 L9 4 L11 5 L9 6 L11 7 L9 8 L11 9 L9 10 L11 11 L9 12 L11 13 L9 14 L11 15 L9 16 Z"
            fill="#8d1b3d"
          />
        </svg>
      </span>
      <span
        className="block h-3.5 w-[22px] overflow-hidden rounded-[2px]"
        style={{
          opacity: locale === "en" ? 1 : 0.35,
          filter: locale === "en" ? "none" : "grayscale(0.6)",
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 16" preserveAspectRatio="none" className="h-full w-full">
          <rect width="24" height="16" fill="#012169" />
          <path d="M0,0 L24,16 M24,0 L0,16" stroke="#ffffff" strokeWidth="3" />
          <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.5" />
          <path d="M12,0 v16 M0,8 h24" stroke="#ffffff" strokeWidth="4" />
          <path d="M12,0 v16 M0,8 h24" stroke="#C8102E" strokeWidth="2.5" />
        </svg>
      </span>
      <span className="font-medium tracking-wide">
        {locale === "en" ? "EN" : "AR"}
      </span>
    </button>
  );
}
