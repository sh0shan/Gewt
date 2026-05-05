import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";

type Params = Promise<{ locale: string }>;

export default async function ContactPage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <section className="relative isolate overflow-hidden h-[260px] sm:h-[320px]">
        <Image
          src="/oilrig3.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover photo-tint"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/65 to-ink/85"
        />
        <Container className="relative h-full flex items-end pb-10">
          <div className="text-white">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/25">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              {t("headerTitle")}
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3">
              <h2 className="text-xs uppercase tracking-[0.22em] text-steel mb-4">
                {t("formTitle")}
              </h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-mist p-6 sm:p-8">
                <h3 className="font-display text-xl font-medium text-ink">
                  AlphaNorm Enviro Solutions
                </h3>
                <dl className="mt-5 space-y-4 text-sm text-steel">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel/80">
                      {t("detailsAddress")}
                    </dt>
                    <dd className="mt-1 text-ink">{t("detailsAddressValue")}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel/80">
                      {t("detailsPhone")}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="text-ink hover:text-cobalt"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel/80">
                      {t("detailsEmail")}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-ink hover:text-cobalt"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel/80">
                      {t("detailsHours")}
                    </dt>
                    <dd className="mt-1 text-ink">{t("detailsHoursValue")}</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-cobalt/8 border border-cobalt/30 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-cobalt">
                  {t("licenseLabel")}
                </p>
                <p className="mt-2 text-sm text-ink">{t("licenseValue")}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
