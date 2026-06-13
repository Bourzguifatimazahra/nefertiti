import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import dept from "@/assets/dept-antiage.jpg";
import equip from "@/assets/equip-antiage.jpg";

export const Route = createFileRoute("/biostimulators")({
  head: () => ({
    meta: [
      { title: "Biostimulateurs & Collagène | Nefertiti Clinic" },
      {
        name: "description",
        content:
          "Biostimulateurs, stimulation du collagène et protocoles de prévention du vieillissement cutané.",
      },
      { property: "og:title", content: "Anti-Âge & Biostimulateurs" },
      { property: "og:url", content: "/biostimulators" },
      { property: "og:image", content: equip },
    ],
    links: [{ rel: "canonical", href: "/biostimulators" }],
  }),
  component: () => (
    <>
      <SiteHeader />
      <DepartmentPage
        eyebrow="Anti-Âge"
        title="Biostimulateurs"
        intro="Stimuler la production naturelle de collagène pour un effet anti-âge progressif, naturel et durable. Une approche médicale de prévention du vieillissement."
        deptImage={dept}
        deptAlt="Salle de consultation anti-âge"
        equipImage={equip}
        equipAlt="Flacons de biostimulateurs de collagène"
        treatments={[
          {
            name: "Biostimulateurs Injectables",
            description: "Stimulation profonde du collagène endogène.",
          },
          {
            name: "Collagen Boosting Protocols",
            description: "Programmes personnalisés combinant injections, lasers et soins.",
          },
          {
            name: "Prévention du Vieillissement",
            description: "Stratégies médicales de longévité cutanée.",
          },
        ]}
        technologies={["Sculptra", "Radiesse", "Profhilo"]}
      />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  ),
});
