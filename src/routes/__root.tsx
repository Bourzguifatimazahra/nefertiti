// Install @tanstack/react-query package if not already installed: npm install @tanstack/react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CookieBanner } from "@/components/CookieBanner";
import { generateCSP, SECURITY_HEADERS } from "@/lib/sanitize";
import { canonicalUrl, getLangFromUrl, getSeoCopy, seoConfig } from "@/lib/seo";

function NotFoundComponent() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-blanc px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl text-charbon">{t("root.notFound.title")}</h2>
        <p className="mt-3 text-sm text-charbon/60">{t("root.notFound.text")}</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-charbon px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-blanc hover:bg-walnut transition-colors"
          >
            {t("root.notFound.home")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-blanc px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-charbon">{t("root.error.title")}</h1>
        <p className="mt-3 text-sm text-charbon/60">{t("root.error.text")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-charbon px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-blanc hover:bg-walnut transition-colors"
          >
            {t("root.error.retry")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-charbon/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-charbon hover:bg-blanc-warm"
          >
            {t("root.error.home")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const seo = getSeoCopy();
    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "author", content: "Dr. Iman Mahmoud Abdelaal" },
      { name: "robots", content: "index,follow" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:site_name", content: "Nefertiti Aesthetic Clinic" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: seo.ogTitle },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:image", content: canonicalUrl(seoConfig.ogImageUrl) },
      { property: "og:url", content: canonicalUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.ogTitle },
      { name: "twitter:description", content: seo.ogDescription },
      { name: "twitter:image", content: canonicalUrl(seoConfig.ogImageUrl) },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: seoConfig.logoUrl, type: "image/png" },
      { rel: "apple-touch-icon", href: seoConfig.logoUrl },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "@id": `${canonicalUrl("/")}#medical-clinic`,
          name: "Nefertiti Aesthetic Clinic",
          url: canonicalUrl("/"),
          logo: canonicalUrl(seoConfig.logoUrl),
          image: canonicalUrl(seoConfig.ogImageUrl),
          description: seo.description,
          medicalSpecialty: [
            "Dermatology",
            "CosmeticDermatology",
            "AestheticMedicine",
            "RegenerativeMedicine",
            "LaserSurgery",
          ],
          founder: {
            "@type": "Physician",
            name: "Dr. Iman Mahmoud Abdelaal",
            sameAs: seoConfig.sameAs,
          },
          telephone: seoConfig.telephone,
          email: seoConfig.email,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: seoConfig.address.streetAddress,
            addressLocality: seoConfig.address.addressLocality,
            postalCode: seoConfig.address.postalCode,
            addressCountry: seoConfig.address.addressCountry,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 33.5731,
            longitude: -7.5898,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
          areaServed: {
            "@type": "City",
            name: "Casablanca",
          },
          hasMap:
            "https://www.google.com/maps/search/?api=1&query=47+Rue+Othmane+Ibn+Affane+Casablanca",
          sameAs: seoConfig.sameAs,
        }),
      },
    ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  // Add security headers via meta tags for additional XSS protection
  useEffect(() => {
    // Set CSP meta tag (as fallback; headers are preferred)
    const cspMeta = document.createElement("meta");
    cspMeta.httpEquiv = "Content-Security-Policy";
    cspMeta.content = generateCSP();
    document.head.appendChild(cspMeta);

    // Add X-XSS-Protection meta tag
    const xssMeta = document.createElement("meta");
    xssMeta.httpEquiv = "X-XSS-Protection";
    xssMeta.content = SECURITY_HEADERS["X-XSS-Protection"];
    document.head.appendChild(xssMeta);

    return () => {
      document.head.removeChild(cspMeta);
      document.head.removeChild(xssMeta);
    };
  }, []);

  const lang = getLangFromUrl();

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <LoadingScreen />
        <Outlet />
        <CookieBanner />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
