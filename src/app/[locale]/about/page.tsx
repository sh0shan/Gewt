import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import IndustryCard from "@/components/IndustryCard";
import TeamCard from "@/components/TeamCard";
import { industries } from "@/data/industries";
import { team } from "@/data/team";

type Params = Promise<{ locale: string }>;

export default async function AboutPage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <>
      {/* Page header */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">
              {t("eyebrow")}
            </p>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
              {t("headerTitle")}
            </h1>
            <p className="mt-5 text-lg leading-8 text-steel">{t("headerLede")}</p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="pb-12">
        <Container>
          <div className="relative rounded-2xl overflow-hidden border border-mist">
            <div className="relative h-[320px] sm:h-[380px]">
              <Image
                src="/mission.webp"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/15"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 sm:px-12 max-w-xl text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                    {t("missionEyebrow")}
                  </p>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-medium">
                    {t("missionTitle")}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-200">
                    {t("missionBody")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="pb-20">
        <Container>
          <div className="relative rounded-2xl overflow-hidden border border-mist">
            <div className="relative h-[320px] sm:h-[380px]">
              <Image
                src="/vision.webp"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-l from-ink/85 via-ink/55 to-ink/15"
              />
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="px-6 sm:px-12 max-w-xl text-white text-end">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                    {t("visionEyebrow")}
                  </p>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-medium">
                    {t("visionTitle")}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-200">
                    {t("visionBody")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
              {t("industriesTitle")}
            </h2>
            <p className="mt-3 text-lg text-steel">{t("industriesBody")}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <Reveal key={ind.key}>
                <IndustryCard label={ind.label[locale]} photo={ind.photo} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
              {t("teamTitle")}
            </h2>
            <p className="mt-3 text-lg text-steel">{t("teamBody")}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Reveal key={member.key}>
                <TeamCard
                  name={member.name[locale]}
                  role={member.role[locale]}
                  bio={member.bio[locale]}
                  photo={member.photo}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
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
