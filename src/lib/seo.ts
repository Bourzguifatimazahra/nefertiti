import { getTranslation, type Lang } from "@/lib/i18n";

export const DEFAULT_SITE_URL = "https://nefertiti.ma";

export type PageKey =
  | "home"
  | "about"
  | "biostimulators"
  | "injections"
  | "laser"
  | "skinboosters"
  | "body"
  | "intimate"
  | "prp"
  | "blog"
  | "gallery"
  | "faq"
  | "legal"
  | "privacy"
  | "contact";

const LANGS = new Set<Lang>(["fr", "en", "ar"]);

export function getSiteUrl() {
  return (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
}

export function canonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getLangFromUrl(): Lang {
  if (typeof window !== "undefined") {
    const param = new URLSearchParams(window.location.search).get("lang") as Lang | null;
    if (param && LANGS.has(param)) return param;
  }

  return "fr";
}

export interface SeoCopy {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export function getSeoCopy(lang: Lang = getLangFromUrl()): SeoCopy {
  return {
    title: getTranslation(lang, "seo.title"),
    description: getTranslation(lang, "seo.description"),
    ogTitle: getTranslation(lang, "seo.ogTitle"),
    ogDescription: getTranslation(lang, "seo.ogDescription"),
  };
}

export function getPageSeoCopy(page: PageKey, lang: Lang = getLangFromUrl()): SeoCopy {
  const prefix = `seo.page.${page}` as const;
  return {
    title: getTranslation(lang, `${prefix}.title`),
    description: getTranslation(lang, `${prefix}.description`),
    ogTitle: getTranslation(lang, `${prefix}.ogTitle`),
    ogDescription: getTranslation(lang, `${prefix}.description`),
  };
}

export const seoConfig = {
  title: getSeoCopy("fr").title,
  description: getSeoCopy("fr").description,
  logoUrl: "/logo.png",
  ogImageUrl: "/og-image.jpg",
  telephone: "+212522336860",
  email: "nefertitiaestheticclinic@gmail.com",
  address: {
    streetAddress: "4ème étage, n°05, 47 Rue Othmane Ibn Affane",
    addressLocality: "Casablanca",
    postalCode: "20000",
    addressCountry: "MA",
  },
  sameAs: [
    "https://www.instagram.com/dr_iman_abdelaal",
    "https://www.linkedin.com/company/nefertiti-aesthetic-clinic/",
    "https://wa.me/212668783931",
  ],
} as const;
