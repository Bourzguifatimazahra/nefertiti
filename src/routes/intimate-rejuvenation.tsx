import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
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
  head: () => {
    const seo = getPageSeoCopy("intimate");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/intimate-rejuvenation") },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/intimate-rejuvenation") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("intimate.page.eyebrow")}
          title={t("intimate.page.title")}
          intro={t("intimate.page.intro")}
          deptImage={deptImages[0]}
          deptAlt={t("intimate.page.deptAlt")}
          equipImage={equipImages[0]}
          equipAlt={t("intimate.page.equipAlt")}
          deptImages={deptImages}
          equipImages={equipImages}
          treatments={[
            {
              name: t("intimate.page.treatments.1.name"),
              description: t("intimate.page.treatments.1.description"),
            },
            {
              name: t("intimate.page.treatments.2.name"),
              description: t("intimate.page.treatments.2.description"),
            },
            {
              name: t("intimate.page.treatments.3.name"),
              description: t("intimate.page.treatments.3.description"),
            },
            {
              name: t("intimate.page.treatments.4.name"),
              description: t("intimate.page.treatments.4.description"),
            },
          ]}
          technologies={[
            t("intimate.page.technologies.1"),
            t("intimate.page.technologies.2"),
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
