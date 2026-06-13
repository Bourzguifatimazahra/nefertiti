import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { BeforeAfterCarousel } from "@/components/BeforeAfterCarousel";
import dept1 from "@/assets/Régénérative/3.jpeg";
import dept2 from "@/assets/Régénérative/4.jpeg";
import dept3 from "@/assets/Régénérative/5.jpeg";
import dept4 from "@/assets/Régénérative/6.jpeg";
import dept5 from "@/assets/Régénérative/7.jpeg";
import equip1 from "@/assets/Régénérative/3.jpeg";
import equip2 from "@/assets/Régénérative/4.jpeg";
import equip3 from "@/assets/Régénérative/5.jpeg";
import equip4 from "@/assets/Régénérative/6.jpeg";
import equip5 from "@/assets/Régénérative/7.jpeg";

// Before/After images
import before1 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (1).jpeg";
import after1 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (2).jpeg";
import before2 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (3).jpeg";
import after2 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (4).jpeg";
import before3 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (1).jpeg";
import after3 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (2).jpeg";
import before4 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (3).jpeg";
import after4 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (4).jpeg";
import before5 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (5).jpeg";
import after5 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (6).jpeg";
import before6 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (7).jpeg";
import after6 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47.jpeg";
import before7 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (1).jpeg";
import after7 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (2).jpeg";
import before8 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (3).jpeg";
import after8 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (4).jpeg";
import before9 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (5).jpeg";
import after9 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (6).jpeg";
import before10 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (7).jpeg";
import after10 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (8).jpeg";
import before11 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48.jpeg";
import after11 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (1).jpeg";
import before12 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (2).jpeg";
import after12 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (3).jpeg";
import before13 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (4).jpeg";
import after13 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (5).jpeg";
import before14 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (6).jpeg";
import after14 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49.jpeg";
import before15 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (1).jpeg";
import after15 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (2).jpeg";
import before16 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (3).jpeg";
import after16 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (4).jpeg";
import before17 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (5).jpeg";
import after17 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50.jpeg";

const deptImages = [dept1, dept2, dept3, dept4, dept5];
const equipImages = [equip1, equip2, equip3, equip4, equip5];

// Before/After data organized by treatment
const beforeAfterItems = [
  { before: before1, after: after1, treatment: "Lèvres" },
  { before: before2, after: after2, treatment: "Jawline" },
  { before: before3, after: after3, treatment: "Cernes" },
  { before: before4, after: after4, treatment: "Full Face" },
  { before: before5, after: after5, treatment: "Cicatrices" },
  { before: before6, after: after6, treatment: "PRP cheveux" },
  { before: before7, after: after7, treatment: "Lèvres" },
  { before: before8, after: after8, treatment: "Jawline" },
  { before: before9, after: after9, treatment: "Cernes" },
  { before: before10, after: after10, treatment: "Full Face" },
  { before: before11, after: after11, treatment: "Cicatrices" },
  { before: before12, after: after12, treatment: "PRP cheveux" },
  { before: before13, after: after13, treatment: "Lèvres" },
  { before: before14, after: after14, treatment: "Jawline" },
  { before: before15, after: after15, treatment: "Cernes" },
  { before: before16, after: after16, treatment: "Full Face" },
  { before: before17, after: after17, treatment: "Cicatrices" },
];

export const Route = createFileRoute("/prp")({
  head: () => ({
    meta: [
      { title: "PRP, Exosomes & Médecine Régénérative | Nefertiti Clinic" },
      {
        name: "description",
        content:
          "Médecine régénérative : PRP, Exosomes, Secretome, cellules souches. Stimulation cellulaire pour la peau, le visage et les cheveux.",
      },
      { property: "og:title", content: "Médecine Régénérative" },
      { property: "og:url", content: "/prp" },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: "/prp" }],
  }),
  component: () => (
    <>
      <SiteHeader />
      <DepartmentPage
        eyebrow="Médecine Régénérative"
        title="PRP & Exosomes"
        intro="La médecine régénérative active les mécanismes naturels de réparation cellulaire de la peau. Une approche biologique de pointe pour restaurer qualité, densité et éclat."
        deptImage={deptImages[0]}
        deptAlt="Laboratoire de médecine régénérative"
        equipImage={equipImages[0]}
        equipAlt="Tubes d'exosomes et PRP"
        deptImages={deptImages}
        equipImages={equipImages}
        treatments={[
          {
            name: "PRP (Plasma Riche en Plaquettes)",
            description:
              "Stimulation de la régénération cutanée et capillaire à partir de votre propre plasma.",
          },
          {
            name: "Exosomes",
            description:
              "Vésicules cellulaires hautement régénérantes — la révolution actuelle de la médecine esthétique.",
          },
          {
            name: "Secretome",
            description: "Cocktail de facteurs de croissance pour une régénération profonde.",
          },
          {
            name: "Cellules Souches",
            description: "Protocoles avancés pour la régénération tissulaire.",
          },
          {
            name: "PRP Cheveux",
            description: "Traitement de la chute des cheveux et stimulation de la repousse.",
          },
        ]}
        technologies={["PRP", "Exosomes", "Secretome", "Stem Cells"]}
      />
      <BeforeAfterCarousel items={beforeAfterItems} />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  ),
});
