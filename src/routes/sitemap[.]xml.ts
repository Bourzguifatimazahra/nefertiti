import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const ROUTES: { path: string; priority?: string; changefreq?: "weekly" | "monthly" }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-dr-iman-abdelaal", priority: "0.9", changefreq: "monthly" },
  { path: "/injections-acide-hyaluronique", priority: "0.9", changefreq: "monthly" },
  { path: "/laser-fotona", priority: "0.9", changefreq: "monthly" },
  { path: "/prp", priority: "0.9", changefreq: "monthly" },
  { path: "/skinboosters", priority: "0.8", changefreq: "monthly" },
  { path: "/biostimulators", priority: "0.8", changefreq: "monthly" },
  { path: "/body-contouring", priority: "0.8", changefreq: "monthly" },
  { path: "/intimate-rejuvenation", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/galerie", priority: "0.7", changefreq: "monthly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/mentions-legales", priority: "0.3", changefreq: "monthly" },
  { path: "/politique-confidentialite", priority: "0.3", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ROUTES.map(
          (r) =>
            `  <url><loc>${BASE_URL}${r.path}</loc>${
              r.changefreq ? `<changefreq>${r.changefreq}</changefreq>` : ""
            }${r.priority ? `<priority>${r.priority}</priority>` : ""}</url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
