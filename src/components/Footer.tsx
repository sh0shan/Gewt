import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const tFooter = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="bg-ink text-slate-300 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.png"
              alt={t("site.name")}
              width={200}
              height={104}
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">
            {tFooter("blurb")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            {tFooter("navigateHeading")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">{tNav("home")}</Link></li>
            <li><Link href="/about" className="hover:text-white">{tNav("about")}</Link></li>
            <li><Link href="/services" className="hover:text-white">{tNav("services")}</Link></li>
            <li><Link href="/insights" className="hover:text-white">{tNav("insights")}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{tNav("contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            {tFooter("contactHeading")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>{tContact("detailsAddressValue")}</li>
            <li>
              <a href="tel:0097477778967" className="hover:text-white">
                +974 7777 8967
              </a>
            </li>
            <li>
              <a href="mailto:contact@alphanorm.qa" className="hover:text-white">
                contact@alphanorm.qa
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} AlphaNorm Enviro Solutions. {tFooter("rights")}</p>
          <p>{tFooter("license")}</p>
        </div>
      </div>
    </footer>
  );
}
