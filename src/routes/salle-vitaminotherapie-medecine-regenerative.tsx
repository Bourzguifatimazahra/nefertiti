import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
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

const deptImages = [dept1, dept2, dept3, dept4, dept5];
const equipImages = [equip1, equip2, equip3, equip4, equip5];

export const Route = createFileRoute("/salle-vitaminotherapie-medecine-regenerative")({
  head: () => {
    const seo = getPageSeoCopy("prp");
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:url", content: canonicalUrl("/salle-vitaminotherapie-medecine-regenerative") },
        { property: "og:image", content: equipImages[0] },
      ],
      links: [{ rel: "canonical", href: canonicalUrl("/salle-vitaminotherapie-medecine-regenerative") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("prp.page.eyebrow")}
          title={t("dept.salleVitaminotherapie.title")}
          intro={t("prp.page.intro")}
          deptImage={deptImages[0]}
          deptAlt={t("prp.page.deptAlt")}
          equipImage={equipImages[0]}
          equipAlt={t("prp.page.equipAlt")}
          deptImages={deptImages}
          equipImages={equipImages}
          treatments={[
            {
              name: t("prp.page.treatments.1.name"),
              description: t("prp.page.treatments.1.description"),
            },
            {
              name: t("prp.page.treatments.2.name"),
              description: t("prp.page.treatments.2.description"),
            },
            {
              name: t("prp.page.treatments.3.name"),
              description: t("prp.page.treatments.3.description"),
            },
            {
              name: t("prp.page.treatments.4.name"),
              description: t("prp.page.treatments.4.description"),
            },
            {
              name: t("prp.page.treatments.5.name"),
              description: t("prp.page.treatments.5.description"),
            },
          ]}
          technologies={[
            t("prp.page.technologies.1"),
            t("prp.page.technologies.2"),
            t("prp.page.technologies.3"),
            t("prp.page.technologies.4"),
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
