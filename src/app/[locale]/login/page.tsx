import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";

type Params = Promise<{ locale: string }>;

export default async function LoginPage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "login" });

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-mist shadow-lg p-8 sm:p-10">
            <div className="text-center">
              <Link
                href="/"
                aria-label="AlphaNorm — home"
                className="inline-block"
              >
                <Image
                  src="/logo.png"
                  alt="AlphaNorm"
                  width={120}
                  height={88}
                  className="h-14 w-auto mx-auto"
                />
              </Link>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cobalt font-semibold">
                {t("eyebrow")}
              </p>
              <h1 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                {t("title")}
              </h1>
              <p className="mt-2 text-sm text-steel">{t("subtitle")}</p>
            </div>
            <div className="mt-8">
              <LoginForm />
            </div>
            <p className="mt-6 text-center text-sm text-steel">
              {t("noAccount")}{" "}
              <Link
                href="/contact"
                className="text-cobalt font-medium hover:underline"
              >
                {t("contactUs")}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
