import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Nefertiti Aesthetic Clinic" },
      {
        name: "description",
        content:
          "Mentions légales de Nefertiti Aesthetic Clinic, Casablanca — éditeur, hébergeur, propriété intellectuelle.",
      },
      { property: "og:title", content: "Mentions légales — Nefertiti Clinic" },
      { property: "og:url", content: "/mentions-legales" },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main className="py-20">
        <article className="container mx-auto px-6 max-w-3xl prose prose-neutral">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            Information légale
          </span>
          <h1 className="font-display text-5xl md:text-6xl mb-10">Mentions légales</h1>

          <h2 className="font-display text-2xl mt-10 mb-3">Éditeur du site</h2>
          <p className="text-charbon/80 leading-relaxed">
            <strong>Nefertiti Aesthetic Clinic</strong>
            <br />
            Dr. Iman Mahmoud Abdelaal — Médecin esthétique
            <br />
            4ème étage, n°05, 47 Rue Othmane Ibn Affane
            <br />
            Casablanca 20000, Maroc
            <br />
            Téléphone : +212 522 33 68 60
            <br />
            Email : nefertitiaestheticclinic@gmail.com
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">Directeur de la publication</h2>
          <p className="text-charbon/80">Dr. Iman Mahmoud Abdelaal.</p>

          <h2 className="font-display text-2xl mt-10 mb-3">Hébergement</h2>
          <p className="text-charbon/80">Site hébergé via une infrastructure cloud sécurisée.</p>

          <h2 className="font-display text-2xl mt-10 mb-3">Propriété intellectuelle</h2>
          <p className="text-charbon/80 leading-relaxed">
            L'ensemble du contenu de ce site (textes, photographies, logos, identité visuelle) est
            la propriété exclusive de Nefertiti Aesthetic Clinic. Toute reproduction, représentation
            ou diffusion, totale ou partielle, est interdite sans autorisation écrite préalable.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">Information médicale</h2>
          <p className="text-charbon/80 leading-relaxed">
            Les informations diffusées sur ce site ne constituent ni un diagnostic ni une
            prescription médicale. Tout acte médical esthétique nécessite une consultation
            personnalisée avec un médecin qualifié.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">Responsabilité</h2>
          <p className="text-charbon/80 leading-relaxed">
            Nefertiti Aesthetic Clinic s'efforce d'assurer l'exactitude des informations publiées
            mais ne peut être tenue responsable des erreurs, omissions ou résultats obtenus à la
            suite d'une mauvaise utilisation du site.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">Loi applicable</h2>
          <p className="text-charbon/80">
            Le présent site est régi par la loi marocaine. Tout litige relèvera des tribunaux
            compétents de Casablanca.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
