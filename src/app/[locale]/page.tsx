import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Stat from "@/components/Stat";
import ServiceCard from "@/components/ServiceCard";
import PartnersStrip from "@/components/PartnersStrip";
import { reasons } from "@/data/reasons";
import { services } from "@/data/services";
import { stats } from "@/data/stats";

type Params = Promise<{ locale: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  const tStats = await getTranslations({ locale, namespace: "stats" });

  return (
    <>
      <section className="px-3 sm:px-4 lg:px-6 pt-16 sm:pt-20 lg:pt-24">
        <div className="relative">
          <HeroVideo
            src={locale === "ar" ? "/hero-ar.mp4" : "/hero-en.mp4"}
            poster={
              locale === "ar" ? "/hero-ar-poster.jpg" : "/hero-en-poster.jpg"
            }
            ariaLabel={t("heroVideoLabel")}
            muteLabel={t("muteVideo")}
            unmuteLabel={t("unmuteVideo")}
            className="w-full !rounded-2xl !border-0 !shadow-none"
          />
          <div className="pointer-events-none absolute inset-x-3 sm:inset-x-4 lg:inset-x-6 top-0 -translate-y-1/2 z-10">
            <div className="pointer-events-auto rounded-2xl bg-white/35 backdrop-blur-xl border border-white/50 ring-1 ring-inset ring-white/30 shadow-2xl shadow-ink/20 px-5 sm:px-7 lg:px-9 py-4 sm:py-5">
              <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/50 backdrop-blur-md border border-white/55 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt whitespace-nowrap">
                {tSite("licenseBadge")}
              </p>
              <h1 className="mt-2 font-display text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-ink leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="mt-1 font-display text-sm sm:text-base italic text-cobalt">
                {t("slogan")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-cobalt px-7 py-3 text-sm font-semibold text-white hover:bg-ink transition-colors shadow-md whitespace-nowrap"
            >
              {t("heroLearnMore")}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-white border border-mist px-7 py-3 text-sm font-semibold text-ink hover:border-cobalt hover:text-cobalt transition-colors whitespace-nowrap"
            >
              {t("heroOurServices")}
            </Link>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-mist">
                <Image
                  src="/images/home/expertise.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover photo-tint"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
                  {t("introTitle")}
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-4 text-lg leading-8 text-steel">
                  {t("introBody1")}
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-lg leading-8 text-steel">
                  {t("introBody2")}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-md p-6 border border-mist">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cobalt">
                    {t("qaEyebrow")}
                  </h3>
                  <p className="mt-2 font-display text-2xl font-medium text-ink">
                    {t("qaTitle")}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {t("qaBody")}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <Stat
                key={s.labelKey}
                value={s.value}
                label={tStats(s.labelKey)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src="/images/home/why.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover photo-tint"
          />
          <div className="absolute inset-0 bg-paper/80 backdrop-blur-[2px]" />
        </div>
        <Container>
          <SectionTitle eyebrow={t("whyTitle")} title={t("whyTitle")} description={t("whyBody")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title.en} delay={i * 60}>
                <div className="h-full rounded-2xl bg-white/85 backdrop-blur-md p-6 border border-mist hover:border-cobalt transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-cobalt/10 flex items-center justify-center">
                    <Image
                      src={r.icon}
                      alt=""
                      width={64}
                      height={64}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-medium text-ink">
                    {r.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-steel">
                    {r.body[locale]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services teaser */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
                {t("servicesTitle")}
              </h2>
              <p className="mt-3 text-lg text-steel">{t("servicesBody")}</p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-cobalt hover:underline"
            >
              {t("servicesViewAll")}
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                href={`/services/${s.slug}`}
                title={s.title[locale]}
                dek={s.dek[locale]}
                photo={s.photo}
                photoPosition={s.photoPosition}
                readMoreLabel={t("servicesReadMore")}
                fullWidth={i === services.length - 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <PartnersStrip label={t("partnersLabel")} />

      {/* CTA */}
      <section className="bg-cobalt text-white">
        <Container>
          <div className="py-16 sm:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight">
                {t("ctaTitle")}
              </h2>
              <p className="mt-2 text-slate-200 text-lg">{t("ctaBody")}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-ink px-6 py-3 text-sm font-semibold hover:bg-mist transition-colors"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
