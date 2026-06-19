import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
import dept from "@/assets/dept-skin.jpg";
import equip from "@/assets/equip-skin.jpg";

export const Route = createFileRoute("/skinboosters")({
  head: () => {
    const seo = getPageSeoCopy("skinboosters");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/skinboosters") },
      { property: "og:image", content: dept },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/skinboosters") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("skinboosters.page.eyebrow")}
          title={t("skinboosters.page.title")}
          intro={t("skinboosters.page.intro")}
          deptImage={dept}
          deptAlt={t("skinboosters.page.deptAlt")}
          equipImage={equip}
          equipAlt={t("skinboosters.page.equipAlt")}
          treatments={[
            {
              name: t("skinboosters.page.treatments.1.name"),
              description: t("skinboosters.page.treatments.1.description"),
            },
            {
              name: t("skinboosters.page.treatments.2.name"),
              description: t("skinboosters.page.treatments.2.description"),
            },
            {
              name: t("skinboosters.page.treatments.3.name"),
              description: t("skinboosters.page.treatments.3.description"),
            },
            {
              name: t("skinboosters.page.treatments.4.name"),
              description: t("skinboosters.page.treatments.4.description"),
            },
          ]}
          technologies={[
            t("skinboosters.page.technologies.1"),
            t("skinboosters.page.technologies.2"),
            t("skinboosters.page.technologies.3"),
            t("skinboosters.page.technologies.4"),
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
