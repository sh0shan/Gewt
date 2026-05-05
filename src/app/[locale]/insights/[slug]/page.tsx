import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import { insights } from "@/data/insights";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    insights.map((i) => ({ locale, slug: i.slug })),
  );
}

export default async function InsightDetail({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const article = insights.find((i) => i.slug === slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "insights" });
  const localeTag = locale === "ar" ? "ar-QA" : "en-GB";
  const dateStr = new Date(article.date).toLocaleDateString(localeTag, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <article>
      <section className="pt-20 sm:pt-24 pb-8">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-steel">
              {dateStr} · {t("minRead", { n: article.readMinutes })} · {t("byline")}
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
              {article.title[locale]}
            </h1>
            <p className="mt-5 text-xl leading-8 text-steel">
              {article.dek[locale]}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-mist">
            <Image
              src={article.photo}
              alt=""
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover photo-tint"
            />
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="max-w-prose mx-auto space-y-6">
            {article.sections.map((section, i) => (
              <div key={i} className="space-y-4">
                {section.heading && (
                  <h2 className="mt-8 font-display text-2xl sm:text-3xl font-medium text-ink">
                    {section.heading[locale]}
                  </h2>
                )}
                {section.paragraphs[locale].map((p, j) => (
                  <p key={j} className="text-lg leading-8 text-steel">
                    {p}
                  </p>
                ))}
                {section.blockquote && (
                  <blockquote className="border-s-4 border-cobalt ps-5 my-6 font-display text-xl italic text-ink">
                    &ldquo;{section.blockquote[locale]}&rdquo;
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
