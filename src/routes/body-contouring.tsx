import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import dept1 from "@/assets/Body/1.jpeg";
import dept3 from "@/assets/Body/3.jpeg";
import dept4 from "@/assets/Body/4.jpeg";
import dept6 from "@/assets/Body/6.jpeg";
import equip1 from "@/assets/Body/1.jpeg";
import equip3 from "@/assets/Body/3.jpeg";
import equip4 from "@/assets/Body/4.jpeg";
import equip6 from "@/assets/Body/6.jpeg";

const deptImages = [dept1, dept3, dept4, dept6];
const equipImages = [equip1, equip3, equip4, equip6];

export const Route = createFileRoute("/body-contouring")({
  head: () => ({
    meta: [
      { title: "Body Contouring, Cryolipolyse & Radiofréquence | Nefertiti Clinic" },
      {
        name: "description",
        content: "Remodelage corporel non-invasif : cryolipolyse, radiofréquence et tightening.",
      },
      { property: "og:title", content: "Body Contouring" },
      { property: "og:url", content: "/body-contouring" },
      { property: "og:image", content: deptImages[0] },
    ],
    links: [{ rel: "canonical", href: "/body-contouring" }],
  }),
  component: () => (
    <>
      <SiteHeader />
      <DepartmentPage
        eyebrow="Corps"
        title="Body Contouring"
        intro="Sculpter la silhouette par des technologies non-invasives, validées cliniquement, pour des résultats progressifs et naturels."
        deptImage={deptImages[0]}
        deptAlt="Salle dédiée au body contouring"
        equipImage={equipImages[0]}
        equipAlt="Appareil de cryolipolyse"
        deptImages={deptImages}
        equipImages={equipImages}
        treatments={[
          {
            name: "Cryolipolyse",
            description: "Destruction sélective des adipocytes par le froid.",
          },
          {
            name: "Radiofréquence",
            description: "Raffermissement cutané et stimulation du collagène.",
          },
          { name: "HIFU Corps", description: "Lifting non-invasif des zones corporelles ciblées." },
          {
            name: "Raffermissement",
            description:
              "Tightening cutané pour restaurer la fermeté et la tonicité des zones relâchées.",
          },
        ]}
        technologies={["Cryolipolyse", "Radiofréquence", "HIFU"]}
      />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  ),
});
