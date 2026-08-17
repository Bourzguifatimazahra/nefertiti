import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Chatbot } from "@/components/Chatbot";
import { ArticleTTS } from "@/components/ArticleTTS";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";

import fesses1 from "@/assets/Fesses/1.png";
import fesses2 from "@/assets/Fesses/2.png";

const fessesImages = [fesses1, fesses2];

const SECTION_LABELS = {
  fr: ["Qu'est-ce que Hyacorp ?", "Indications", "Déroulement", "Résultats", "Avantages", "Risques", "Tarifs", "FAQ", "Conclusion"],
  en: ["What is Hyacorp?", "Indications", "Procedure", "Results", "Advantages", "Risks", "Pricing", "FAQ", "Conclusion"],
  ar: ["ما هو هايكورب؟", "الاستطبابات", "الإجراء", "النتائج", "المزايا", "المخاطر", "الأسعار", "الأسئلة الشائعة", "الخاتمة"],
};

export const Route = createFileRoute("/hyacorp")({
  head: () => {
    const seo = getPageSeoCopy("hyacorp");
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:url", content: canonicalUrl("/hyacorp") },
        { property: "og:image", content: fessesImages[0] },
      ],
      links: [{ rel: "canonical", href: canonicalUrl("/hyacorp") }],
    };
  },
  component: HyacorpPage,
});

function HyacorpPage() {
  const { lang, t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionLabels = SECTION_LABELS[lang];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  const labels = {
    back: t("article.back"),
    cta: t("about.cta.button"),
    q: t("blog.page.q"),
    ctaText: t("article.ctaText"),
    toc: t("article.toc"),
    prev: t("article.prev"),
    next: t("article.next"),
    share: t("article.share"),
    by: t("article.by"),
  };

  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />

      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold origin-left z-[60]"
      />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl">
            <Link
              to="/body-contouring"
              className="text-[10px] font-mono uppercase tracking-widest text-gold hover:underline"
            >
              <span className="rtl-flip inline-block">←</span> {labels.back}
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="mt-8"
            >
              <span className="block text-gold font-mono text-[10px] tracking-[0.3em] uppercase mb-6">
                {t("dept.body.title")} · 8 min
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8 max-w-4xl">
                {t("hyacorp.page.title")}
              </h1>
              <p className="text-xl md:text-2xl text-charbon/70 font-display italic mb-8 leading-relaxed max-w-3xl">
                {t("hyacorp.page.intro")}
              </p>
              <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-charbon/60 border-t border-charbon/10 pt-6">
                <span>{labels.by}</span>
                <span className="hidden md:inline">·</span>
                <span className="hidden md:inline">Nefertiti Clinic</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <motion.div
          className="container mx-auto px-6 max-w-6xl mb-20"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="overflow-hidden rounded-sm aspect-[21/9] relative">
            <img
              src={fessesImages[0]}
              alt={t("hyacorp.page.deptAlt")}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charbon/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Body + TOC */}
        <section className="container mx-auto px-6 max-w-6xl pb-20">
          <div className="grid lg:grid-cols-[1fr_220px] gap-12 lg:gap-16">
            <article className="max-w-2xl">
              <div className="mb-12 pb-8 border-b border-charbon/10">
                <ArticleTTS text={`${t("hyacorp.page.title")}. ${t("hyacorp.page.intro")} ${t("hyacorp.page.what.p1")} ${t("hyacorp.page.what.p2")} ${t("hyacorp.page.indications.item1")} ${t("hyacorp.page.indications.item2")} ${t("hyacorp.page.indications.item3")} ${t("hyacorp.page.indications.item4")} ${t("hyacorp.page.indications.item5")} ${t("hyacorp.page.indications.item6")} ${t("hyacorp.page.procedure.consultation.content")} ${t("hyacorp.page.procedure.preparation.content")} ${t("hyacorp.page.procedure.injection.content")} ${t("hyacorp.page.procedure.aftercare.content")} ${t("hyacorp.page.results.p1")} ${t("hyacorp.page.risks.p1")} ${t("hyacorp.page.risks.p2")} ${t("hyacorp.page.pricing.p1")} ${t("hyacorp.page.pricing.p2")} ${t("hyacorp.page.faq.q1")} ${t("hyacorp.page.faq.a1")} ${t("hyacorp.page.faq.q2")} ${t("hyacorp.page.faq.a2")} ${t("hyacorp.page.faq.q3")} ${t("hyacorp.page.faq.a3")} ${t("hyacorp.page.faq.q4")} ${t("hyacorp.page.faq.a4")} ${t("hyacorp.page.conclusion.p1")}`} />
              </div>

              <div className="space-y-16">
                {/* Section 1: What is Hyacorp */}
                <motion.section
                  id="section-1"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      01
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[0]}
                    </span>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-[1.75] text-charbon/85">
                    <p className="first-letter:font-display first-letter:text-5xl first-letter:font-normal first-letter:float-start first-letter:me-3 first-letter:mt-1 first-letter:text-gold">{t("hyacorp.page.what.p1")}</p>
                    <p>{t("hyacorp.page.what.p2")}</p>
                  </div>
                </motion.section>

                {/* Section 2: Indications */}
                <motion.section
                  id="section-2"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 1 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      02
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[1]}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <li key={num} className="flex items-start gap-4">
                        <span className="text-gold font-display text-xl italic mt-1">
                          {String(num).padStart(2, "0")}
                        </span>
                        <p className="text-charbon/80 leading-relaxed pt-1">
                          {t(`hyacorp.page.indications.item${num}`)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.section>

                {/* Section 3: Procedure */}
                <motion.section
                  id="section-3"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 2 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      03
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[2]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-8">
                    {t("hyacorp.page.procedure.title")}
                  </h3>
                  <div className="space-y-12">
                    <div className="border-l-2 border-gold pl-8">
                      <h4 className="font-display text-xl mb-3">
                        {t("hyacorp.page.procedure.consultation.title")}
                      </h4>
                      <p className="text-charbon/80 leading-relaxed">
                        {t("hyacorp.page.procedure.consultation.content")}
                      </p>
                    </div>
                    <div className="border-l-2 border-gold pl-8">
                      <h4 className="font-display text-xl mb-3">
                        {t("hyacorp.page.procedure.preparation.title")}
                      </h4>
                      <p className="text-charbon/80 leading-relaxed">
                        {t("hyacorp.page.procedure.preparation.content")}
                      </p>
                    </div>
                    <div className="border-l-2 border-gold pl-8">
                      <h4 className="font-display text-xl mb-3">
                        {t("hyacorp.page.procedure.injection.title")}
                      </h4>
                      <p className="text-charbon/80 leading-relaxed">
                        {t("hyacorp.page.procedure.injection.content")}
                      </p>
                    </div>
                    <div className="border-l-2 border-gold pl-8">
                      <h4 className="font-display text-xl mb-3">
                        {t("hyacorp.page.procedure.aftercare.title")}
                      </h4>
                      <p className="text-charbon/80 leading-relaxed">
                        {t("hyacorp.page.procedure.aftercare.content")}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Section 4: Results */}
                <motion.section
                  id="section-4"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 3 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      04
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[3]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-6">
                    {t("hyacorp.page.results.title")}
                  </h3>
                  <div className="space-y-6 text-lg md:text-xl leading-[1.75] text-charbon/85">
                    <p className="first-letter:font-display first-letter:text-5xl first-letter:font-normal first-letter:float-start first-letter:me-3 first-letter:mt-1 first-letter:text-gold">{t("hyacorp.page.results.p1")}</p>
                    <p>{t("hyacorp.page.results.p2")}</p>
                    <p>{t("hyacorp.page.results.p3")}</p>
                  </div>
                </motion.section>

                {/* Section 5: Advantages */}
                <motion.section
                  id="section-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 4 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      05
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[4]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-8">
                    {t("hyacorp.page.advantages.title")}
                  </h3>

                  <ul className="space-y-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li key={num} className="flex items-start gap-4">
                        <span className="text-gold font-display text-xl italic mt-1">
                          {String(num).padStart(2, "0")}
                        </span>
                        <p className="text-charbon/80 leading-relaxed pt-1">
                          {t(`hyacorp.page.advantages.item${num}`)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.section>

                {/* Section 6: Risks */}
                <motion.section
                  id="section-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 5 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      06
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[5]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-6">
                    {t("hyacorp.page.risks.title")}
                  </h3>
                  <div className="space-y-6 text-lg md:text-xl leading-[1.75] text-charbon/85">
                    <p className="first-letter:font-display first-letter:text-5xl first-letter:font-normal first-letter:float-start first-letter:me-3 first-letter:mt-1 first-letter:text-gold">{t("hyacorp.page.risks.p1")}</p>
                    <p>{t("hyacorp.page.risks.p2")}</p>
                  </div>
                </motion.section>

                {/* Section 7: Pricing */}
                <motion.section
                  id="section-7"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 6 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      07
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[6]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-6">
                    {t("hyacorp.page.pricing.title")}
                  </h3>
                  <div className="space-y-6 text-lg md:text-xl leading-[1.75] text-charbon/85">
                    <p className="first-letter:font-display first-letter:text-5xl first-letter:font-normal first-letter:float-start first-letter:me-3 first-letter:mt-1 first-letter:text-gold">{t("hyacorp.page.pricing.p1")}</p>
                    <p>{t("hyacorp.page.pricing.p2")}</p>
                  </div>
                </motion.section>

                {/* Section 8: FAQ */}
                <motion.section
                  id="section-8"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 7 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      08
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[7]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-8">
                    {t("hyacorp.page.faq.title")}
                  </h3>

                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((num) => (
                      <details
                        key={num}
                        className="border-t border-charbon/10 py-6 group"
                        open={num === 1}
                      >
                        <summary className="font-display text-xl md:text-2xl cursor-pointer list-none flex justify-between items-start gap-6 group-hover:text-gold transition-colors">
                          <span>{t(`hyacorp.page.faq.q${num}`)}</span>
                          <span className="text-gold font-mono text-sm shrink-0 mt-2">+</span>
                        </summary>
                        <p className="text-charbon/70 leading-relaxed mt-4 max-w-2xl">
                          {t(`hyacorp.page.faq.a${num}`)}
                        </p>
                      </details>
                    ))}
                  </div>
                </motion.section>

                {/* Section 9: Conclusion */}
                <motion.section
                  id="section-9"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 8 * 0.04 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      09
                    </span>
                    <span className="h-px flex-1 bg-charbon/15" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                      {sectionLabels[8]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-6">
                    {t("hyacorp.page.conclusion.title")}
                  </h3>
                  <div className="space-y-6 text-lg md:text-xl leading-[1.75] text-charbon/85">
                    <p className="first-letter:font-display first-letter:text-5xl first-letter:font-normal first-letter:float-start first-letter:me-3 first-letter:mt-1 first-letter:text-gold">{t("hyacorp.page.conclusion.p1")}</p>
                  </div>
                </motion.section>
              </div>

              {/* CTA block */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-20 p-8 md:p-12 bg-blanc-warm border-l-4 border-gold"
              >
                <p className="font-display text-2xl md:text-3xl mb-4">{labels.q}</p>
                <p className="text-charbon/70 mb-8 leading-relaxed">{labels.ctaText}</p>
                <Link
                  to="/contact"
                  className="inline-block bg-charbon text-blanc px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors"
                >
                  {labels.cta}
                </Link>
              </motion.div>
            </article>

            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <span className="block font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
                  {labels.toc}
                </span>
                <nav className="space-y-3 border-s border-charbon/15 ps-5">
                  {sectionLabels.map((label, i) => (
                    <a
                      key={i}
                      href={`#section-${i + 1}`}
                      className="block text-xs uppercase tracking-widest text-charbon/60 hover:text-gold transition-colors"
                    >
                      <span className="font-mono text-gold me-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="border-t border-charbon/10 bg-blanc-warm/40">
          <div className="container mx-auto px-6 max-w-6xl py-16 grid md:grid-cols-2 gap-px bg-charbon/10">
            <Link
              to="/prp"
              className="group bg-blanc p-8 md:p-10 hover:bg-blanc-warm transition-colors"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                <span className="rtl-flip inline-block">←</span> {labels.prev}
              </span>
              <h3 className="font-display text-xl md:text-2xl group-hover:text-gold transition-colors">
                {t("prp.page.title")}
              </h3>
              <span className="block mt-3 text-xs font-mono uppercase tracking-widest text-charbon/50">
                {t("dept.regen.title")} · 5 min
              </span>
            </Link>
            <Link
              to="/skinboosters"
              className="group bg-blanc p-8 md:p-10 hover:bg-blanc-warm transition-colors md:text-end"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                {labels.next} <span className="rtl-flip inline-block">→</span>
              </span>
              <h3 className="font-display text-xl md:text-2xl group-hover:text-gold transition-colors">
                {t("skinboosters.page.title")}
              </h3>
              <span className="block mt-3 text-xs font-mono uppercase tracking-widest text-charbon/50">
                {t("dept.skin.title")} · 5 min
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
}
