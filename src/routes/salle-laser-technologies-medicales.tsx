import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
import dept1 from "@/assets/Lasers/1.jpeg";
import dept2 from "@/assets/Lasers/2.jpeg";
import dept3 from "@/assets/Lasers/3.jpeg";
import dept4 from "@/assets/Lasers/4.jpeg";
import dept5 from "@/assets/Lasers/5.jpeg";
import dept6 from "@/assets/Lasers/6.jpeg";
import dept7 from "@/assets/Lasers/7.jpeg";
import equip1 from "@/assets/Lasers/1.jpeg";
import equip2 from "@/assets/Lasers/2.jpeg";
import equip3 from "@/assets/Lasers/3.jpeg";
import equip4 from "@/assets/Lasers/4.jpeg";
import equip5 from "@/assets/Lasers/5.jpeg";
import equip6 from "@/assets/Lasers/6.jpeg";
import equip7 from "@/assets/Lasers/7.jpeg";

const deptImages = [dept1, dept2, dept3, dept4, dept5, dept6, dept7];
const equipImages = [equip1, equip2, equip3, equip4, equip5, equip6, equip7];

export const Route = createFileRoute("/salle-laser-technologies-medicales")({
  head: () => {
    const seo = getPageSeoCopy("laser");
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:url", content: canonicalUrl("/salle-laser-technologies-medicales") },
        { property: "og:image", content: equipImages[0] },
      ],
      links: [{ rel: "canonical", href: canonicalUrl("/salle-laser-technologies-medicales") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("laser.page.eyebrow")}
          title={t("dept.salleLaser.title")}
          intro={t("laser.page.intro")}
          deptImage={deptImages[0]}
          deptAlt={t("laser.page.deptAlt")}
          equipImage={equipImages[0]}
          equipAlt={t("laser.page.equipAlt")}
          deptImages={deptImages}
          equipImages={equipImages}
          treatments={[
            {
              name: t("laser.page.treatments.1.name"),
              description: t("laser.page.treatments.1.description"),
            },
            {
              name: t("laser.page.treatments.2.name"),
              description: t("laser.page.treatments.2.description"),
            },
            {
              name: t("laser.page.treatments.3.name"),
              description: t("laser.page.treatments.3.description"),
            },
            {
              name: t("laser.page.treatments.4.name"),
              description: t("laser.page.treatments.4.description"),
            },
            {
              name: t("laser.page.treatments.5.name"),
              description: t("laser.page.treatments.5.description"),
            },
            {
              name: t("laser.page.treatments.6.name"),
              description: t("laser.page.treatments.6.description"),
            },
            {
              name: t("laser.page.treatments.7.name"),
              description: t("laser.page.treatments.7.description"),
            },
          ]}
          technologies={[
            t("laser.page.technologies.1"),
            t("laser.page.technologies.2"),
            t("laser.page.technologies.3"),
            t("laser.page.technologies.4"),
            t("laser.page.technologies.5"),
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
