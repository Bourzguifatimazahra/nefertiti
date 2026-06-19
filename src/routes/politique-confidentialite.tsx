import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => {
    const seo = getPageSeoCopy("privacy");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/politique-confidentialite") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/politique-confidentialite") }],
    };
  },
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main className="py-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            {t("privacy.page.eyebrow")}
          </span>
          <h1 className="font-display text-5xl md:text-6xl mb-10">{t("privacy.page.title")}</h1>

          <p className="text-charbon/80 leading-relaxed mb-8">
            {t("privacy.page.intro")}
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s1.title")}</h2>
          <p className="text-charbon/80">
            {t("privacy.page.s1.content")}
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s2.title")}</h2>
          <ul className="list-disc pl-6 text-charbon/80 space-y-1">
            <li>{t("privacy.page.s2.item.1")}</li>
            <li>{t("privacy.page.s2.item.2")}</li>
            <li>{t("privacy.page.s2.item.3")}</li>
            <li>{t("privacy.page.s2.item.4")}</li>
          </ul>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s3.title")}</h2>
          <ul className="list-disc pl-6 text-charbon/80 space-y-1">
            <li>{t("privacy.page.s3.item.1")}</li>
            <li>{t("privacy.page.s3.item.2")}</li>
            <li>{t("privacy.page.s3.item.3")}</li>
          </ul>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s4.title")}</h2>
          <p className="text-charbon/80">
            {t("privacy.page.s4.content")}
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s5.title")}</h2>
          <p className="text-charbon/80">
            {t("privacy.page.s5.content")}
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s6.title")}</h2>
          <p className="text-charbon/80">
            {t("privacy.page.s6.content")}
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s7.title")}</h2>
          <p className="text-charbon/80 leading-relaxed">
            {t("privacy.page.s7.content")}
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s8.title")}</h2>
          <p className="text-charbon/80">
            {t("privacy.page.s8.content")}
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">{t("privacy.page.s9.title")}</h2>
          <p className="text-charbon/80">
            {t("privacy.page.s9.content")}
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
