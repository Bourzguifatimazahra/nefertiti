import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
import dept from "@/assets/dept-antiage.jpg";
import equip from "@/assets/equip-antiage.jpg";

export const Route = createFileRoute("/biostimulators")({
  head: () => {
    const seo = getPageSeoCopy("biostimulators");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/biostimulators") },
      { property: "og:image", content: equip },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/biostimulators") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("dept.eyebrow")}
          title={t("dept.title")}
          intro={t("dept.intro")}
          deptImage={dept}
          deptAlt={t("dept.deptAlt")}
          equipImage={equip}
          equipAlt={t("dept.equipAlt")}
          treatments={[
            {
              name: t("dept.treatments.1.name"),
              description: t("dept.treatments.1.description"),
            },
            {
              name: t("dept.treatments.2.name"),
              description: t("dept.treatments.2.description"),
            },
            {
              name: t("dept.treatments.3.name"),
              description: t("dept.treatments.3.description"),
            },
          ]}
          technologies={[
            t("injections.page.technologies.3"),
            t("dept.biostimulators.radiesse"),
            t("dept.biostimulators.profhilo"),
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
