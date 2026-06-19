import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
import dept1 from "@/assets/Lasers/1.jpeg";
import dept5 from "@/assets/Lasers/5.jpeg";
import equip1 from "@/assets/Lasers/1.jpeg";
import equip5 from "@/assets/Lasers/5.jpeg";

const deptImages = [dept1,dept5];
const equipImages = [equip1,equip5];

export const Route = createFileRoute("/laser-fotona")({
  head: () => {
    const seo = getPageSeoCopy("laser");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/laser-fotona") },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/laser-fotona") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("laser.page.eyebrow")}
          title={t("laser.page.title")}
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
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
