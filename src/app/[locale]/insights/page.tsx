import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Container from "@/components/Container";
import InsightCard from "@/components/InsightCard";
import { insights } from "@/data/insights";

type Params = Promise<{ locale: string }>;

function formatMeta(date: string, minutes: number, locale: Locale, minReadTpl: string) {
  const d = new Date(date);
  const localeTag = locale === "ar" ? "ar-QA" : "en-GB";
  const dateStr = d.toLocaleDateString(localeTag, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return `${dateStr} · ${minReadTpl.replace("{n}", String(minutes))}`;
}

export default async function InsightsPage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "insights" });
  const minReadTpl = t("minRead", { n: 0 }).replace("0", "{n}");

  const sorted = [...insights].sort((a, b) => (a.date < b.date ? 1 : -1));

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

      <section className="pb-24">
        <Container>
          <div className="space-y-4">
            {sorted.map((article) => (
              <InsightCard
                key={article.slug}
                href={`/insights/${article.slug}`}
                title={article.title[locale]}
                dek={article.dek[locale]}
                photo={article.photo}
                meta={formatMeta(article.date, article.readMinutes, locale, minReadTpl)}
                layout="row"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
