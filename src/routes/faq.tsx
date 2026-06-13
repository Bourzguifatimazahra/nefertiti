import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const FAQ = [
  {
    q: "Comment se déroule une première consultation ?",
    a: "La consultation médicale dure environ 45 minutes. Le Dr. Iman analyse votre demande, votre anatomie, vos antécédents et propose un plan personnalisé.",
  },
  {
    q: "Les injections sont-elles douloureuses ?",
    a: "Toutes nos injections sont réalisées avec une anesthésie de contact et une technique douce pour un confort optimal.",
  },
  {
    q: "Combien de temps durent les résultats ?",
    a: "Selon le traitement : 4 à 6 mois pour le Botox, 9 à 18 mois pour l'acide hyaluronique, plusieurs années pour les biostimulateurs.",
  },
  {
    q: "Quelle est la différence entre PRP et Exosomes ?",
    a: "Le PRP utilise votre propre plasma. Les exosomes sont des vésicules cellulaires concentrées issues de cellules souches, avec une puissance régénérative supérieure.",
  },
  {
    q: "Y a-t-il une éviction sociale ?",
    a: "La plupart des traitements n'imposent aucune éviction. Les lasers ablatifs peuvent nécessiter 3 à 7 jours de récupération.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Fotona, EndoliftX, HIFU, Nanopore, Radiofréquence, et les biotechnologies de pointe (PRP, exosomes, secretome).",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Questions Fréquentes | Nefertiti Clinic" },
      {
        name: "description",
        content:
          "Réponses aux questions fréquentes sur les injections, lasers, PRP, exosomes et la médecine esthétique.",
      },
      { property: "og:title", content: "FAQ" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main className="py-20">
        <section className="container mx-auto px-6 max-w-4xl">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
            FAQ
          </span>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95] mb-16">
            Questions Fréquentes
          </h1>

          <div className="space-y-2">
            {FAQ.map((f, i) => (
              <details key={f.q} className="border-t border-charbon/10 py-6 group" open={i === 0}>
                <summary className="font-display text-2xl cursor-pointer list-none flex justify-between items-start gap-6 group-hover:text-gold transition-colors">
                  <span>{f.q}</span>
                  <span className="text-gold font-mono text-sm shrink-0 mt-2">+</span>
                </summary>
                <p className="text-charbon/70 leading-relaxed mt-4 max-w-2xl">{f.a}</p>
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
