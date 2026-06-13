import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import dept1 from "@/assets/Injections & Fillers/1.jpeg";
import dept2 from "@/assets/Injections & Fillers/2.jpeg";
import dept5 from "@/assets/Injections & Fillers/5.jpeg";
import equip1 from "@/assets/Injections & Fillers/1.jpeg";
import equip2 from "@/assets/Injections & Fillers/2.jpeg";
import equip5 from "@/assets/Injections & Fillers/5.jpeg";

const deptImages = [dept1, dept2, dept5];
const equipImages = [equip1, equip2, equip5];

export const Route = createFileRoute("/injections-acide-hyaluronique")({
  head: () => ({
    meta: [
      { title: "Injections d'Acide Hyaluronique & Botox | Nefertiti Clinic" },
      {
        name: "description",
        content:
          "Harmonisation faciale par injections : acide hyaluronique, Botox, skinboosters, lips, jawline et full face. Dr Iman Mahmoud Abdelaal.",
      },
      { property: "og:title", content: "Injections — Harmonisation Faciale" },
      { property: "og:url", content: "/injections-acide-hyaluronique" },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: "/injections-acide-hyaluronique" }],
  }),
  component: () => (
    <>
      <SiteHeader />
      <DepartmentPage
        eyebrow="Harmonisation Faciale"
        title="Injections & Fillers"
        intro="Restaurer les volumes et rééquilibrer les proportions du visage avec une précision anatomique millimétrée. Acide hyaluronique, Botox et biostimulateurs sont utilisés au service d'une beauté naturelle, jamais transformée."
        deptImage={deptImages[0]}
        deptAlt="Salle d'injections de la clinique Nefertiti"
        equipImage={equipImages[0]}
        equipAlt="Acide hyaluronique et seringue de précision"
        deptImages={deptImages}
        equipImages={equipImages}
        treatments={[
          {
            name: "Acide Hyaluronique",
            description:
              "Volumisation et hydratation profonde des zones traitées avec une approche anatomique.",
          },
          {
            name: "Botox / Toxine Botulique",
            description:
              "Relaxation ciblée des muscles d'expression pour un visage reposé et naturel.",
          },
          {
            name: "Lips",
            description:
              "Rehaussement et harmonisation des lèvres avec un résultat tout en finesse.",
          },
          {
            name: "Jawline",
            description: "Définition de l'ovale du visage et de la ligne mandibulaire.",
          },
          { name: "Full Face", description: "Protocole global d'harmonisation faciale." },
          {
            name: "Biostimulateurs",
            description:
              "Stimulation de la production naturelle de collagène pour un effet anti-âge durable.",
          },
          {
            name: "Skinboosters",
            description:
              "Hydratation profonde et amélioration de la qualité cutanée par micro-injections.",
          },
        ]}
        technologies={["Acide Hyaluronique", "Botox", "Biostimulateurs", "Skinboosters"]}
      />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  ),
});
