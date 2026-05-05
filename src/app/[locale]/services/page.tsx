import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

type Params = Promise<{ locale: string }>;

export default async function ServicesPage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">
              {t("eyebrow")}
            </p>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
              {t("indexTitle")}
            </h1>
            <p className="mt-5 text-lg leading-8 text-steel">{t("indexLede")}</p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                href={`/services/${s.slug}`}
                title={s.title[locale]}
                dek={s.dek[locale]}
                photo={s.photo}
                photoPosition={s.photoPosition}
                readMoreLabel={t("readMore")}
                fullWidth={i === services.length - 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cobalt text-white">
        <Container>
          <div className="py-14 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight">
              {t("ctaTitle")}
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-ink px-6 py-3 text-sm font-semibold hover:bg-mist transition-colors"
            >
              {t("ctaButton")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
