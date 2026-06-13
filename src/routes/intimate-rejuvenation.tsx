import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import dept2 from "@/assets/Rajeunissement Intime/2.jpeg";
import dept3 from "@/assets/Rajeunissement Intime/3.jpeg";
import dept4 from "@/assets/Rajeunissement Intime/4.jpeg";
import dept5 from "@/assets/Rajeunissement Intime/5.jpeg";
import equip2 from "@/assets/Rajeunissement Intime/2.jpeg";
import equip3 from "@/assets/Rajeunissement Intime/3.jpeg";
import equip4 from "@/assets/Rajeunissement Intime/4.jpeg";
import equip5 from "@/assets/Rajeunissement Intime/5.jpeg";

const deptImages = [dept2, dept3, dept4, dept5];
const equipImages = [equip2, equip3, equip4, equip5];

export const Route = createFileRoute("/intimate-rejuvenation")({
  head: () => ({
    meta: [
      { title: "Rajeunissement Intime & Laser Vaginal | Nefertiti Clinic" },
      {
        name: "description",
        content:
          "Gynécologie esthétique : laser vaginal, rajeunissement intime. Une approche médicale discrète et personnalisée.",
      },
      { property: "og:title", content: "Gynécologie Esthétique" },
      { property: "og:url", content: "/intimate-rejuvenation" },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: "/intimate-rejuvenation" }],
  }),
  component: () => (
    <>
      <SiteHeader />
      <DepartmentPage
        eyebrow="Gynécologie Esthétique"
        title="Rajeunissement Intime"
        intro="Des protocoles médicaux dédiés au confort intime et au bien-être féminin, dans un cadre discret et entièrement personnalisé."
        deptImage={deptImages[0]}
        deptAlt="Salle dédiée au rajeunissement intime"
        equipImage={equipImages[0]}
        equipAlt="Technologie de rajeunissement intime"
        deptImages={deptImages}
        equipImages={equipImages}
        treatments={[
          {
            name: "Laser Gynécologique",
            description: "Traitement laser dédié à la santé intime et au confort féminin.",
          },
          {
            name: "Sécheresse Vaginale",
            description: "Restauration de l'hydratation et de la trophicité muqueuse.",
          },
          {
            name: "Incontinence Légère",
            description: "Renforcement périnéal par laser pour améliorer le contrôle urinaire.",
          },
          {
            name: "Rajeunissement Intime",
            description: "Protocoles combinés laser et injections pour la zone génitale.",
          },
        ]}
        technologies={["Laser CO₂ Intime", "Radiofréquence"]}
      />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  ),
});
