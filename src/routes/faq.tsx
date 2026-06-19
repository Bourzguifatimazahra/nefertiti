import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getTranslation, useI18n } from "@/lib/i18n";
import { canonicalUrl, getLangFromUrl, getPageSeoCopy } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => {
    const lang = getLangFromUrl();
    const seo = getPageSeoCopy("faq", lang);
    const faqJsonLd = [1, 2, 3, 4, 5, 6].map((n) => ({
      "@type": "Question",
      name: getTranslation(lang, `faq.page.q${n}`),
      acceptedAnswer: { "@type": "Answer", text: getTranslation(lang, `faq.page.a${n}`) },
    }));
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/faq") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/faq") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqJsonLd,
        }),
      },
    ],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  const { t } = useI18n();
  const faqItems = [
    { q: "faq.page.q1", a: "faq.page.a1" },
    { q: "faq.page.q2", a: "faq.page.a2" },
    { q: "faq.page.q3", a: "faq.page.a3" },
    { q: "faq.page.q4", a: "faq.page.a4" },
    { q: "faq.page.q5", a: "faq.page.a5" },
    { q: "faq.page.q6", a: "faq.page.a6" },
  ];
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main className="py-20">
        <section className="container mx-auto px-6 max-w-4xl">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
            {t("faq.page.eyebrow")}
          </span>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95] mb-16">
            {t("faq.page.title")}
          </h1>

          <div className="space-y-2">
            {faqItems.map((f, i) => (
              <details key={f.q} className="border-t border-charbon/10 py-6 group" open={i === 0}>
                <summary className="font-display text-2xl cursor-pointer list-none flex justify-between items-start gap-6 group-hover:text-gold transition-colors">
                  <span>{t(f.q)}</span>
                  <span className="text-gold font-mono text-sm shrink-0 mt-2">+</span>
                </summary>
                <p className="text-charbon/70 leading-relaxed mt-4 max-w-2xl">{t(f.a)}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
