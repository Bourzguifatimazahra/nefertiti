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
import { LanguageProvider } from "@/lib/i18n";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CookieBanner } from "@/components/CookieBanner";
import { generateCSP, SECURITY_HEADERS } from "@/lib/sanitize";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blanc px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl text-charbon">Page introuvable</h2>
        <p className="mt-3 text-sm text-charbon/60">Cette page n'existe pas ou a été déplacée.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-charbon px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-blanc hover:bg-walnut transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-blanc px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-charbon">Cette page n'a pas pu se charger</h1>
        <p className="mt-3 text-sm text-charbon/60">
          Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-charbon px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-blanc hover:bg-walnut transition-colors"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-charbon/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-charbon hover:bg-blanc-warm"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nefertiti Aesthetic Clinic | Médecine Esthétique & Lasers Médicaux" },
      {
        name: "description",
        content:
          "Clinique de médecine esthétique dirigée par Dr Iman Mahmoud Abdelaal. Injections, lasers médicaux, PRP, exosomes, harmonisation faciale et médecine régénérative.",
      },
      { name: "author", content: "Dr. Iman Mahmoud Abdelaal" },
      { property: "og:site_name", content: "Nefertiti Aesthetic Clinic" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Nefertiti Aesthetic Clinic" },
      {
        property: "og:description",
        content:
          "L'Art Médical de l'Harmonisation du Visage — Médecine esthétique et lasers médicaux par Dr. Iman Mahmoud Abdelaal.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Nefertiti Aesthetic Clinic",
          medicalSpecialty: [
            "Dermatology",
            "CosmeticDermatology",
            "AestheticMedicine",
            "RegenerativeMedicine",
          ],
          founder: {
            "@type": "Physician",
            name: "Dr. Iman Mahmoud Abdelaal",
          },
          description:
            "Clinique de médecine esthétique dirigée par Dr Iman Mahmoud Abdelaal. Injections, lasers médicaux, médecine régénérative et harmonisation faciale.",
        }),
      },
    ],
  }),
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

  return (
    <html lang="fr">
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
