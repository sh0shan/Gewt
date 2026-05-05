import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import { services } from "@/data/services";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export default async function ServiceDetail({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const t = await getTranslations({ locale, namespace: "services" });

  return (
    <>
      <section className="relative isolate overflow-hidden h-[420px] sm:h-[480px]">
        <Image
          src={service.photo}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover photo-tint"
          style={service.photoPosition ? { objectPosition: service.photoPosition } : undefined}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink/85"
        />
        <Container className="relative h-full flex items-end pb-10 sm:pb-14">
          <div className="text-white max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
              <Link href="/services" className="hover:text-white">
                {t("breadcrumbServices")}
              </Link>{" "}
              ›
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              {service.title[locale]}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-200 max-w-2xl">
              {service.dek[locale]}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink">
              {t("overviewTitle")}
            </h2>
            <div className="mt-5 space-y-4">
              {service.body[locale].map((p, i) => (
                <p key={i} className="text-lg leading-8 text-steel">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink">
              {t("activitiesTitle")}
            </h2>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-steel list-disc ps-6">
              {service.activities[locale].map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink">
              {t("methodologyTitle")}
            </h2>
            <div className="mt-5 space-y-4">
              {service.methodology[locale].map((p, i) => (
                <p key={i} className="text-lg leading-8 text-steel">
                  {p}
                </p>
              ))}
            </div>
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
