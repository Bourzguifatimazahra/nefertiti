import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
import portrait from "@/assets/dr.jpg";

export const Route = createFileRoute("/about-dr-iman-abdelaal")({
  head: () => {
    const seo = getPageSeoCopy("about");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/about-dr-iman-abdelaal") },
      { property: "og:image", content: portrait },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/about-dr-iman-abdelaal") }],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main>
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
                {t("about.page.eyebrow")}
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
                {t("about.page.title")}
              </h1>
              <div className="h-px w-24 bg-gold mb-8" />
              <p className="text-charbon/70 text-lg leading-relaxed mb-6">
                {t("about.page.p1")}
              </p>
              <p className="text-charbon/70 leading-relaxed">
                {t("about.page.p2")}
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src={portrait}
                alt={t("about.name")}
                width={1080}
                height={1600}
                className="w-full aspect-[3/4] object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-blanc-warm">
          <div className="container mx-auto px-6 max-w-7xl">
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
              {t("about.page.expertise.eyebrow")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-16">{t("about.page.expertise.title")}</h2>
            <ul className="space-y-4 font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-16">
              {[
                t("about.page.expertise.1"),
                t("about.page.expertise.2"),
                t("about.page.expertise.3"),
                t("about.page.expertise.4"),
                t("about.page.expertise.5"),
                t("about.page.expertise.6"),
                t("about.page.expertise.7"),
                t("about.page.expertise.8"),
                t("about.page.expertise.9"),
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-gold to-transparent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24 bg-blanc">
          <div className="container mx-auto px-6 max-w-7xl">
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
              {t("about.page.philosophy.eyebrow")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-8">{t("about.page.philosophy.title")}</h2>
            <p className="text-gold font-mono text-[11px] uppercase tracking-wider mb-6">
              {t("about.page.philosophy.tagline")}
            </p>
            <p className="text-charbon/70 leading-relaxed max-w-3xl">
              {t("about.page.philosophy.text")}
            </p>
          </div>
        </section>

        <section className="py-24 bg-blanc-warm">
          <div className="container mx-auto px-6 max-w-7xl">
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
              {t("about.page.trainings.eyebrow")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-16">{t("about.page.trainings.title")}</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  y: t("about.page.trainings.1.y"),
                  t: t("about.page.trainings.1.t"),
                  d: t("about.page.trainings.1.d"),
                },
                {
                  y: t("about.page.trainings.2.y"),
                  t: t("about.page.trainings.2.t"),
                  d: t("about.page.trainings.2.d"),
                },
                { y: t("about.page.trainings.3.y"), t: t("about.page.trainings.3.t"), d: t("about.page.trainings.3.d") },
                {
                  y: t("about.page.trainings.4.y"),
                  t: t("about.page.trainings.4.t"),
                  d: t("about.page.trainings.4.d"),
                },
                {
                  y: t("about.page.trainings.5.y"),
                  t: t("about.page.trainings.5.t"),
                  d: t("about.page.trainings.5.d"),
                },
              ].map((f, i) => (
                <article key={f.t} className="flex gap-6 border-t border-charbon/10 pt-6">
                  <span className="font-display text-3xl text-gold italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/40 block mb-2">
                      {f.y}
                    </span>
                    <h3 className="font-display text-2xl mb-2">{f.t}</h3>
                    <p className="text-charbon/70">{f.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              {t("about.page.cta.title")}
            </h2>
            <p className="text-charbon/70 mb-10">
              {t("about.page.cta.text")}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-charbon text-blanc px-10 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors"
            >
              {t("about.page.cta.button")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
