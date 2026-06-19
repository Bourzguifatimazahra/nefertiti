import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () => {
    const seo = getPageSeoCopy("legal");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/mentions-legales") },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/mentions-legales") }],
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
        <article className="container mx-auto px-6 max-w-3xl prose prose-neutral">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            {t("legal.page.eyebrow")}
          </span>
          <h1 className="font-display text-5xl md:text-6xl mb-10">{t("legal.page.title")}</h1>

          <h2 className="font-display text-2xl mt-10 mb-3">{t("legal.page.editor.title")}</h2>
          <p className="text-charbon/80 leading-relaxed">
            <strong>{t("legal.page.editor.line1")}</strong>
            <br />
            {t("legal.page.editor.line2")}
            <br />
            {t("legal.page.editor.line3")}
            <br />
            {t("legal.page.editor.line4")}
            <br />
            {t("legal.page.editor.line5")}
            <br />
            {t("legal.page.editor.line6")}
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">{t("legal.page.director")}</h2>
          <p className="text-charbon/80">{t("legal.page.director.content")}</p>

          <h2 className="font-display text-2xl mt-10 mb-3">{t("legal.page.hosting")}</h2>
          <p className="text-charbon/80">{t("legal.page.hosting.content")}</p>

          <h2 className="font-display text-2xl mt-10 mb-3">{t("legal.page.ip")}</h2>
          <p className="text-charbon/80 leading-relaxed">
            {t("legal.page.ip.content")}
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">{t("legal.page.medical")}</h2>
          <p className="text-charbon/80 leading-relaxed">
            {t("legal.page.medical.content")}
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">{t("legal.page.liability")}</h2>
          <p className="text-charbon/80 leading-relaxed">
            {t("legal.page.liability.content")}
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">{t("legal.page.law")}</h2>
          <p className="text-charbon/80">
            {t("legal.page.law.content")}
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
