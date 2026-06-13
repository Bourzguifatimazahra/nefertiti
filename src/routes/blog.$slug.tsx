import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useMemo } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Chatbot } from "@/components/Chatbot";
import { ArticleTTS } from "@/components/ArticleTTS";
import { POSTS, localizedPost } from "@/lib/blog-posts";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const idx = POSTS.findIndex((p) => p.slug === params.slug);
    if (idx === -1) throw notFound();
    return {
      post: POSTS[idx],
      prev: POSTS[(idx - 1 + POSTS.length) % POSTS.length],
      next: POSTS[(idx + 1) % POSTS.length],
    };
  },
  head: ({ loaderData }) => {
    const fr = loaderData?.post.i18n.fr;
    return {
      meta: loaderData
        ? [
            { title: `${fr!.title} | Nefertiti Clinic` },
            { name: "description", content: fr!.excerpt },
            { property: "og:title", content: fr!.title },
            { property: "og:description", content: fr!.excerpt },
            { property: "og:type", content: "article" },
            { property: "og:url", content: `/blog/${loaderData.post.slug}` },
            { property: "og:image", content: loaderData.post.image },
          ]
        : [],
      links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }] : [],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: fr!.title,
                description: fr!.excerpt,
                image: loaderData.post.image,
                author: { "@type": "Person", name: "Dr. Iman Mahmoud Abdelaal" },
                publisher: {
                  "@type": "Organization",
                  name: "Nefertiti Aesthetic Clinic",
                },
              }),
            },
          ]
        : [],
    };
  },
  component: PostPage,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="bg-blanc text-charbon min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Article introuvable</h1>
        <Link to="/blog" className="text-gold underline">
          Retour au blog
        </Link>
      </div>
    </div>
  );
}

const SECTION_LABELS = {
  fr: ["Introduction", "Mécanisme", "Indications", "Protocole & résultats"],
  en: ["Introduction", "Mechanism", "Indications", "Protocol & results"],
  ar: ["مقدمة", "آلية العمل", "الاستطبابات", "البروتوكول والنتائج"],
};

function PostPage() {
  const { post, prev, next } = Route.useLoaderData();
  const { lang } = useI18n();
  const lp = localizedPost(post, lang);
  const prevLp = localizedPost(prev, lang);
  const nextLp = localizedPost(next, lang);
  const sectionLabels = SECTION_LABELS[lang];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  const labels = useMemo(
    () =>
      ({
        fr: {
          back: "Retour au blog",
          cta: "Prendre rendez-vous",
          q: "Une question médicale ?",
          ctaText:
            "Dr. Iman Mahmoud Abdelaal vous accueille à Casablanca pour une consultation personnalisée.",
          toc: "Sommaire",
          prev: "Article précédent",
          next: "Article suivant",
          share: "Partager",
          by: "Par Dr. Iman Mahmoud Abdelaal",
        },
        en: {
          back: "Back to blog",
          cta: "Book appointment",
          q: "A medical question?",
          ctaText:
            "Dr. Iman Mahmoud Abdelaal welcomes you in Casablanca for a personalized consultation.",
          toc: "Contents",
          prev: "Previous article",
          next: "Next article",
          share: "Share",
          by: "By Dr. Iman Mahmoud Abdelaal",
        },
        ar: {
          back: "العودة إلى المدونة",
          cta: "احجز موعدًا",
          q: "سؤال طبي؟",
          ctaText: "ترحب بك د. إيمان محمود عبد العال في الدار البيضاء لاستشارة مخصصة.",
          toc: "المحتويات",
          prev: "المقال السابق",
          next: "المقال التالي",
          share: "مشاركة",
          by: "بقلم د. إيمان محمود عبد العال",
        },
      })[lang],
    [lang],
  );

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
              to="/blog"
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
                {lp.category} · {post.readTime}
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8 max-w-4xl">
                {lp.title}
              </h1>
              <p className="text-xl md:text-2xl text-charbon/70 font-display italic mb-8 leading-relaxed max-w-3xl">
                {lp.excerpt}
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
              src={post.image}
              alt={post.imageAlt}
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
                <ArticleTTS text={`${lp.title}. ${lp.excerpt} ${lp.body.join(" ")}`} />
              </div>

              <div className="space-y-16">
                {lp.body.map((p, i) => (
                  <motion.section
                    key={i}
                    id={`section-${i + 1}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.04 }}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-charbon/15" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                        {sectionLabels[i] ?? `§ ${i + 1}`}
                      </span>
                    </div>
                    <p className="text-lg md:text-xl leading-[1.75] text-charbon/85 first-letter:font-display first-letter:text-5xl first-letter:font-normal first-letter:float-start first-letter:me-3 first-letter:mt-1 first-letter:text-gold">
                      {p}
                    </p>
                  </motion.section>
                ))}
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
                  {lp.body.map((_, i) => (
                    <a
                      key={i}
                      href={`#section-${i + 1}`}
                      className="block text-xs uppercase tracking-widest text-charbon/60 hover:text-gold transition-colors"
                    >
                      <span className="font-mono text-gold me-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {sectionLabels[i] ?? `§ ${i + 1}`}
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
              to="/blog/$slug"
              params={{ slug: prev.slug }}
              className="group bg-blanc p-8 md:p-10 hover:bg-blanc-warm transition-colors"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                <span className="rtl-flip inline-block">←</span> {labels.prev}
              </span>
              <h3 className="font-display text-xl md:text-2xl group-hover:text-gold transition-colors">
                {prevLp.title}
              </h3>
              <span className="block mt-3 text-xs font-mono uppercase tracking-widest text-charbon/50">
                {prevLp.category} · {prev.readTime}
              </span>
            </Link>
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="group bg-blanc p-8 md:p-10 hover:bg-blanc-warm transition-colors md:text-end"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                {labels.next} <span className="rtl-flip inline-block">→</span>
              </span>
              <h3 className="font-display text-xl md:text-2xl group-hover:text-gold transition-colors">
                {nextLp.title}
              </h3>
              <span className="block mt-3 text-xs font-mono uppercase tracking-widest text-charbon/50">
                {nextLp.category} · {next.readTime}
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
