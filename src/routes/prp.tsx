import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DepartmentPage } from "@/components/DepartmentPage";
import { BeforeAfterCarousel } from "@/components/BeforeAfterCarousel";
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

// Before/After images
import before1 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (1).jpeg";
import after1 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (2).jpeg";
import before2 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (3).jpeg";
import after2 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.46 (4).jpeg";
import before3 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (1).jpeg";
import after3 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (2).jpeg";
import before4 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (3).jpeg";
import after4 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (4).jpeg";
import before5 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (5).jpeg";
import after5 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (6).jpeg";
import before6 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47 (7).jpeg";
import after6 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.47.jpeg";
import before7 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (1).jpeg";
import after7 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (2).jpeg";
import before8 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (3).jpeg";
import after8 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (4).jpeg";
import before9 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (5).jpeg";
import after9 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (6).jpeg";
import before10 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (7).jpeg";
import after10 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48 (8).jpeg";
import before11 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.48.jpeg";
import after11 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (1).jpeg";
import before12 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (2).jpeg";
import after12 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (3).jpeg";
import before13 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (4).jpeg";
import after13 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (5).jpeg";
import before14 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49 (6).jpeg";
import after14 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.49.jpeg";
import before15 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (1).jpeg";
import after15 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (2).jpeg";
import before16 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (3).jpeg";
import after16 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (4).jpeg";
import before17 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50 (5).jpeg";
import after17 from "@/assets/BEFORE_AFTE/WhatsApp Image 2026-06-12 at 19.01.50.jpeg";

const deptImages = [dept1, dept2, dept3, dept4, dept5];
const equipImages = [equip1, equip2, equip3, equip4, equip5];

// Before/After data organized by treatment
const beforeAfterItems = [
  { before: before1, after: after1, treatment: "Lèvres", treatmentKey: "beforeafter.treatment.lips" },
  { before: before2, after: after2, treatment: "Jawline", treatmentKey: "beforeafter.treatment.jawline" },
  { before: before3, after: after3, treatment: "Cernes", treatmentKey: "beforeafter.treatment.tearTroughs" },
  { before: before4, after: after4, treatment: "Full Face", treatmentKey: "beforeafter.treatment.fullFace" },
  { before: before5, after: after5, treatment: "Cicatrices", treatmentKey: "beforeafter.treatment.scars" },
  { before: before6, after: after6, treatment: "PRP cheveux", treatmentKey: "beforeafter.treatment.prpHair" },
  { before: before7, after: after7, treatment: "Lèvres", treatmentKey: "beforeafter.treatment.lips" },
  { before: before8, after: after8, treatment: "Jawline", treatmentKey: "beforeafter.treatment.jawline" },
  { before: before9, after: after9, treatment: "Cernes", treatmentKey: "beforeafter.treatment.tearTroughs" },
  { before: before10, after: after10, treatment: "Full Face", treatmentKey: "beforeafter.treatment.fullFace" },
  { before: before11, after: after11, treatment: "Cicatrices", treatmentKey: "beforeafter.treatment.scars" },
  { before: before12, after: after12, treatment: "PRP cheveux", treatmentKey: "beforeafter.treatment.prpHair" },
  { before: before13, after: after13, treatment: "Lèvres", treatmentKey: "beforeafter.treatment.lips" },
  { before: before14, after: after14, treatment: "Jawline", treatmentKey: "beforeafter.treatment.jawline" },
  { before: before15, after: after15, treatment: "Cernes", treatmentKey: "beforeafter.treatment.tearTroughs" },
  { before: before16, after: after16, treatment: "Full Face", treatmentKey: "beforeafter.treatment.fullFace" },
  { before: before17, after: after17, treatment: "Cicatrices", treatmentKey: "beforeafter.treatment.scars" },
];

export const Route = createFileRoute("/prp")({
  head: () => {
    const seo = getPageSeoCopy("prp");
    return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: canonicalUrl("/prp") },
      { property: "og:image", content: equipImages[0] },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/prp") }],
    };
  },
  component: () => {
    const { t } = useI18n();
    return (
      <>
        <SiteHeader />
        <DepartmentPage
          eyebrow={t("prp.page.eyebrow")}
          title={t("prp.page.title")}
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
        <BeforeAfterCarousel items={beforeAfterItems} />
        <SiteFooter />
        <WhatsAppFloat />
      </>
    );
  },
});
