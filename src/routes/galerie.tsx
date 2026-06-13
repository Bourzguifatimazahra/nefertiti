import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Chatbot } from "@/components/Chatbot";

/**
 * Import images
 */
const galerieModules = import.meta.glob<string>(
  "../assets/Galerie/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

/**
 * Tri + mapping
 */
const PHOTOS = Object.entries(galerieModules)
  .sort(([a], [b]) => {
    const aNum = a.match(/(\d+)/)?.[1];
    const bNum = b.match(/(\d+)/)?.[1];

    return Number(bNum || 0) - Number(aNum || 0); // 🔥 INVERSE ORDER (dernier → premier)
  })
  .map(([, src], index) => ({
    src,
    label: `Galerie ${index + 1}`,
  }));

/**
 * Animations Framer Motion
 */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Clinique Nefertiti" },
      {
        name: "description",
        content:
          "Découvrez les espaces médicaux modernes et équipements de la clinique Nefertiti.",
      },
      { property: "og:image", content: PHOTOS[0]?.src },
    ],
  }),
  component: GaleriePage,
});

function GaleriePage() {
  return (
    <div className="bg-blanc text-charbon min-h-screen">
      <SiteHeader />

      <main className="py-24">
        <section className="container mx-auto px-6 max-w-7xl">
          {/* HEADER */}
          <div className="mb-14">
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase">
              Galerie
            </span>

            <h1 className="font-display text-5xl md:text-7xl mt-4 mb-6 leading-[0.95]">
              La Clinique en Images
            </h1>

            <p className="max-w-2xl text-charbon/70">
              Un environnement médical moderne pensé pour la précision et le confort.
            </p>
          </div>

          {/* GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {PHOTOS.map((photo, i) => (
              <motion.figure
                key={i}
                variants={item}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5]"
              >
                <motion.img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <figcaption className="absolute bottom-0 w-full px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-blanc opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.label}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
}