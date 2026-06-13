import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité (CNDP) | Nefertiti Aesthetic Clinic" },
      {
        name: "description",
        content:
          "Politique de protection des données personnelles conforme à la loi 09-08 et aux recommandations de la CNDP.",
      },
      { property: "og:title", content: "Politique de confidentialité — Nefertiti" },
      { property: "og:url", content: "/politique-confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/politique-confidentialite" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main className="py-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            CNDP · Loi 09-08
          </span>
          <h1 className="font-display text-5xl md:text-6xl mb-10">Politique de confidentialité</h1>

          <p className="text-charbon/80 leading-relaxed mb-8">
            La présente politique décrit la manière dont Nefertiti Aesthetic Clinic, dirigée par Dr.
            Iman Mahmoud Abdelaal, collecte et traite vos données personnelles, conformément à la{" "}
            <strong>loi marocaine n°09-08</strong> relative à la protection des personnes physiques
            à l'égard du traitement des données à caractère personnel et aux recommandations de la{" "}
            <strong>CNDP</strong>.
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">1. Responsable du traitement</h2>
          <p className="text-charbon/80">
            Nefertiti Aesthetic Clinic — 4ème étage, n°05, 47 Rue Othmane Ibn Affane, Casablanca
            20000. Contact : nefertitiaestheticclinic@gmail.com — +212 522 33 68 60.
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">2. Données collectées</h2>
          <ul className="list-disc pl-6 text-charbon/80 space-y-1">
            <li>Identité : nom, prénom.</li>
            <li>Coordonnées : email, téléphone.</li>
            <li>Contenu de votre demande (formulaire / WhatsApp / chatbot).</li>
            <li>Données médicales communiquées uniquement en consultation, jamais via le site.</li>
          </ul>

          <h2 className="font-display text-2xl mt-8 mb-3">3. Finalités</h2>
          <ul className="list-disc pl-6 text-charbon/80 space-y-1">
            <li>Répondre à vos demandes de rendez-vous ou d'information.</li>
            <li>Assurer le suivi médical et administratif des patients.</li>
            <li>Respecter nos obligations légales et déontologiques.</li>
          </ul>

          <h2 className="font-display text-2xl mt-8 mb-3">4. Base légale</h2>
          <p className="text-charbon/80">
            Consentement explicite recueilli via case à cocher sur les formulaires, et exécution de
            la relation médicale.
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">5. Destinataires</h2>
          <p className="text-charbon/80">
            Les données sont strictement réservées à l'équipe de Nefertiti Aesthetic Clinic. Aucune
            donnée n'est cédée à des tiers à des fins commerciales.
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">6. Durée de conservation</h2>
          <p className="text-charbon/80">
            Formulaires de contact : 12 mois. Dossiers médicaux : durée légale prévue par la
            réglementation marocaine.
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">7. Vos droits</h2>
          <p className="text-charbon/80 leading-relaxed">
            Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification,
            d'opposition et de suppression de vos données. Vous pouvez exercer ces droits par email
            à{" "}
            <a href="mailto:nefertitiaestheticclinic@gmail.com" className="text-gold underline">
              nefertitiaestheticclinic@gmail.com
            </a>
            . Vous pouvez également introduire une réclamation auprès de la CNDP —{" "}
            <a
              href="https://www.cndp.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              www.cndp.ma
            </a>
            .
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">8. Cookies</h2>
          <p className="text-charbon/80">
            Le site n'utilise que des cookies techniques nécessaires à son fonctionnement. Aucun
            cookie publicitaire ou de profilage n'est déposé sans votre consentement préalable.
          </p>

          <h2 className="font-display text-2xl mt-8 mb-3">9. Sécurité</h2>
          <p className="text-charbon/80">
            Les données sont hébergées sur une infrastructure sécurisée (chiffrement HTTPS) et
            l'accès est restreint au personnel autorisé.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
