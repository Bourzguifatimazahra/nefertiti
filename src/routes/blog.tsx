import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Chatbot } from "@/components/Chatbot";
import { POSTS, localizedPost } from "@/lib/blog-posts";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Médical Esthétique | Nefertiti Clinic Casablanca" },
      {
        name: "description",
        content:
          "Articles d'autorité par Dr. Iman Mahmoud Abdelaal : injections, lasers, PRP, exosomes, prévention du vieillissement.",
      },
      { property: "og:title", content: "Blog — Nefertiti Clinic" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { lang } = useI18n();
  const labels = {
    fr: {
      eyebrow: "Journal",
      title: "Connaissances Médicales Esthétiques",
      read: "Lire l'article",
    },
    en: { eyebrow: "Journal", title: "Aesthetic Medical Knowledge", read: "Read article" },
    ar: { eyebrow: "المدونة", title: "معارف طبية تجميلية", read: "اقرأ المقال" },
  }[lang];
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main className="py-20">
        <section className="container mx-auto px-6 max-w-7xl">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
            {labels.eyebrow}
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-16">{labels.title}</h1>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {POSTS.map((p, i) => {
              const lp = localizedPost(p, lang);
              return (
                <motion.div
                  key={p.slug}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                    },
                  }}
                  whileHover={{ y: -4 }}
                >
                  <Link to="/article/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="overflow-hidden mb-5 aspect-[4/3] rounded-sm">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-3">
                      {String(i + 1).padStart(2, "0")} · {lp.category} · {p.readTime}
                    </span>
                    <h2 className="font-display text-2xl mb-3 group-hover:text-gold transition-colors">
                      {lp.title}
                    </h2>
                    <p className="text-charbon/70 text-sm leading-relaxed mb-4">{lp.excerpt}</p>
                    <span className="text-[10px] font-mono uppercase tracking-widest border-b border-charbon pb-1 group-hover:text-gold group-hover:border-gold">
                      {labels.read} <span className="rtl-flip">→</span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
}
