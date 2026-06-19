import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
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
  head: () => {
    const seo = getPageSeoCopy("body");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/body-contouring") },
      { property: "og:image", content: deptImages[0] },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/body-contouring") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("body.page.eyebrow")}
          title={t("body.page.title")}
          intro={t("body.page.intro")}
          deptImage={deptImages[0]}
          deptAlt={t("body.page.deptAlt")}
          equipImage={equipImages[0]}
          equipAlt={t("body.page.equipAlt")}
          deptImages={deptImages}
          equipImages={equipImages}
          treatments={[
            {
              name: t("body.page.treatments.1.name"),
              description: t("body.page.treatments.1.description"),
            },
            {
              name: t("body.page.treatments.2.name"),
              description: t("body.page.treatments.2.description"),
            },
            {
              name: t("body.page.treatments.3.name"),
              description: t("body.page.treatments.3.description"),
            },
            {
              name: t("body.page.treatments.4.name"),
              description: t("body.page.treatments.4.description"),
            },
          ]}
          technologies={[
            t("body.page.technologies.1"),
            t("body.page.technologies.2"),
            t("body.page.technologies.3"),
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
