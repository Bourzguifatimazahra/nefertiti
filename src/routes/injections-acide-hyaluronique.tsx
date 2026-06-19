import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { useI18n } from "@/lib/i18n";
import { canonicalUrl, getPageSeoCopy } from "@/lib/seo";
import dept1 from "@/assets/Injections & Fillers/1.jpeg";
import dept2 from "@/assets/Injections & Fillers/2.jpeg";
import dept5 from "@/assets/Injections & Fillers/5.jpeg";
import equip1 from "@/assets/Injections & Fillers/1.jpeg";
import equip2 from "@/assets/Injections & Fillers/2.jpeg";
import equip5 from "@/assets/Injections & Fillers/5.jpeg";

const deptImages = [dept1, dept2, dept5];
const equipImages = [equip1, equip2, equip5];

export const Route = createFileRoute("/injections-acide-hyaluronique")({
  head: () => {
    const seo = getPageSeoCopy("injections");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/injections-acide-hyaluronique") },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/injections-acide-hyaluronique") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("injections.page.eyebrow")}
          title={t("injections.page.title")}
          intro={t("injections.page.intro")}
          deptImage={deptImages[0]}
          deptAlt={t("injections.page.deptAlt")}
          equipImage={equipImages[0]}
          equipAlt={t("injections.page.equipAlt")}
          deptImages={deptImages}
          equipImages={equipImages}
          treatments={[
            {
              name: t("injections.page.treatments.1.name"),
              description: t("injections.page.treatments.1.description"),
            },
            {
              name: t("injections.page.treatments.2.name"),
              description: t("injections.page.treatments.2.description"),
            },
            {
              name: t("injections.page.treatments.3.name"),
              description: t("injections.page.treatments.3.description"),
            },
            {
              name: t("injections.page.treatments.4.name"),
              description: t("injections.page.treatments.4.description"),
            },
            {
              name: t("injections.page.treatments.5.name"),
              description: t("injections.page.treatments.5.description"),
            },
            {
              name: t("injections.page.treatments.6.name"),
              description: t("injections.page.treatments.6.description"),
            },
            {
              name: t("injections.page.treatments.7.name"),
              description: t("injections.page.treatments.7.description"),
            },
          ]}
          technologies={[
            t("injections.page.technologies.1"),
            t("injections.page.technologies.2"),
            t("injections.page.technologies.3"),
            t("injections.page.technologies.4"),
          ]}
        />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
