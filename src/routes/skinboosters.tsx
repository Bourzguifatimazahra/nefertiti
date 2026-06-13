import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import dept from "@/assets/dept-skin.jpg";
import equip from "@/assets/equip-skin.jpg";

export const Route = createFileRoute("/skinboosters")({
  head: () => ({
    meta: [
      { title: "Skinboosters, Peelings & Mésothérapie | Nefertiti Clinic" },
      {
        name: "description",
        content: "Qualité de peau : skinboosters, mésothérapie, peelings médicaux et PRP.",
      },
      { property: "og:title", content: "Qualité de Peau" },
      { property: "og:url", content: "/skinboosters" },
      { property: "og:image", content: dept },
    ],
    links: [{ rel: "canonical", href: "/skinboosters" }],
  }),
  component: () => (
    <>
      <SiteHeader />
      <DepartmentPage
        eyebrow="Qualité de Peau"
        title="Skinboosters & Peelings"
        intro="Une peau dense, hydratée, lumineuse. Nos protocoles de qualité de peau combinent hydratation profonde, micronutriments et stimulation cellulaire."
        deptImage={dept}
        deptAlt="Salle de traitement skinboosters"
        equipImage={equip}
        equipAlt="Sérums et flacons de mésothérapie"
        treatments={[
          {
            name: "Skinboosters",
            description: "Hydratation profonde et amélioration de la qualité cutanée.",
          },
          {
            name: "Mésothérapie",
            description: "Micro-injections de vitamines, acides aminés et antioxydants.",
          },
          {
            name: "Peelings Médicaux",
            description: "Renouvellement cellulaire ciblé selon votre type de peau.",
          },
          { name: "PRP", description: "Régénération cutanée à partir de votre propre plasma." },
        ]}
        technologies={["Skinboosters", "Mésothérapie", "Peelings", "PRP"]}
      />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  ),
});
