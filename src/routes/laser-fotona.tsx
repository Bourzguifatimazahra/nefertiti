import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import dept1 from "@/assets/Lasers/1.jpeg";
import dept5 from "@/assets/Lasers/5.jpeg";
import equip1 from "@/assets/Lasers/1.jpeg";
import equip5 from "@/assets/Lasers/5.jpeg";

const deptImages = [dept1,dept5];
const equipImages = [equip1,equip5];

export const Route = createFileRoute("/laser-fotona")({
  head: () => ({
    meta: [
      { title: "Lasers Médicaux Fotona & EndoliftX | Nefertiti Clinic" },
      {
        name: "description",
        content:
          "Lasers médicaux de dernière génération : Fotona 4D, laser fractionné, EndoliftX, épilation laser. Traitement de la peau, pigmentation et cicatrices.",
      },
      { property: "og:title", content: "Lasers Médicaux" },
      { property: "og:url", content: "/laser-fotona" },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: "/laser-fotona" }],
  }),
  component: () => (
    <>
      <SiteHeader />
      <DepartmentPage
        eyebrow="Plateau Laser"
        title="Lasers Médicaux"
        intro="Notre plateau technique laser couvre toutes les indications dermatologiques et esthétiques : rajeunissement, traitement des taches, des cicatrices, raffermissement et épilation médicale."
        deptImage={deptImages[0]}
        deptAlt="Salle laser Fotona de la clinique Nefertiti"
        equipImage={equipImages[0]}
        equipAlt="Pièce à main du laser médical"
        deptImages={deptImages}
        equipImages={equipImages}
        treatments={[
          {
            name: "Laser Fotona 4D",
            description: "Protocole complet de rajeunissement non-invasif du visage.",
          },
          {
            name: "Rajeunissement",
            description:
              "Rafraîchissement global de la peau : texture, éclat et fermeté restaurés.",
          },
          {
            name: "Laser Fractionné",
            description:
              "Resurfacing pour la texture, les pores, les cicatrices et les vergetures.",
          },
          {
            name: "Épilation Laser Médicale",
            description: "Épilation définitive sur tous phototypes.",
          },
          { name: "EndoliftX", description: "Tightening interne par laser à fibre optique." },
          {
            name: "Traitement Pigmentaire",
            description: "Élimination ciblée des taches solaires et du mélasma.",
          },
          { name: "Cicatrices", description: "Traitement des cicatrices d'acné et chirurgicales." },
        ]}
        technologies={["Fotona", "EndoliftX", "Laser Fractionné", "Q-Switched"]}
      />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  ),
});
