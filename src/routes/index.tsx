import { createFileRoute, Link } from "@tanstack/react-router";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

import heroDoctor from "@/assets/dr.jpg";
import aboutHands from "@/assets/dr.jpg";
import deptInjections from "@/assets/Injections & Fillers/1.jpeg";
import equipInjections from "@/assets/Injections & Fillers/2.jpeg";
import deptSkin from "@/assets/dept-skin.jpg";
import equipSkin from "@/assets/equip-skin.jpg";
import deptLaser from "@/assets/Lasers/1.jpeg";
import equipLaser from "@/assets/Lasers/5.jpeg";
import deptAntiage from "@/assets/dept-antiage.jpg";
import equipAntiage from "@/assets/equip-antiage.jpg";
import deptRegen from "@/assets/Régénérative/3.jpeg";
import equipRegen from "@/assets/Régénérative/3.jpeg";
import deptBody from "@/assets/Body/1.jpeg";
import equipBody from "@/assets/Body/3.jpeg";
import training from "@/assets/Formation/training.jpg";
import training5 from "@/assets/Formation/5.jpeg";
import training6 from "@/assets/Formation/6.jpeg";
import technologiesImg from "@/assets/technologies.jpg";

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

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TestimonialsFlipFlap } from "@/components/TestimonialsFlipFlap";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Chatbot } from "@/components/Chatbot";
import { MotionSection } from "@/components/MotionSection";
import { MapSection } from "@/components/MapSection";
import { BeforeAfterCarousel } from "@/components/BeforeAfterCarousel";
import { useI18n } from "@/lib/i18n";
import { POSTS, localizedPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nefertiti Aesthetic Clinic | Médecine Esthétique & Lasers Médicaux" },
      {
        name: "description",
        content:
          "Clinique de médecine esthétique dirigée par Dr Iman Mahmoud Abdelaal. Injections, lasers médicaux, PRP, exosomes, harmonisation faciale et médecine régénérative.",
      },
      { property: "og:title", content: "Nefertiti Aesthetic Clinic" },
      {
        property: "og:description",
        content: "L'Art Médical de l'Harmonisation du Visage.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroDoctor },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

interface Expertise {
  title: string;
  treatments: string;
  dept: string;
  deptAlt: string;
  equip: string;
  equipAlt: string;
  href: string;
}

const EXPERTISES: Expertise[] = [
  {
    title: "Harmonisation Faciale",
    treatments: "Botox · Acide Hyaluronique · Lips · Jawline · Full Face · Skinboosters",
    dept: deptInjections,
    deptAlt: "Salle d'injections de la clinique Nefertiti",
    equip: equipInjections,
    equipAlt: "Produits d'injection et harmonisation faciale",
    href: "/injections-acide-hyaluronique",
  },
  {
    title: "Qualité de Peau",
    treatments: "Skinboosters · PRP · Peelings · Mésothérapie",
    dept: deptSkin,
    deptAlt: "Salle de traitement skinboosters",
    equip: equipSkin,
    equipAlt: "Sérums et flacons de mésothérapie",
    href: "/skinboosters",
  },
  {
    title: "Lasers Médicaux",
    treatments: "Fotona · Rajeunissement · Fractionné · Pigmentation · Cicatrices",
    dept: deptLaser,
    deptAlt: "Salle laser Fotona",
    equip: equipLaser,
    equipAlt: "Pièce à main du laser médical",
    href: "/laser-fotona",
  },
  {
    title: "Anti-Âge",
    treatments: "Biostimulateurs · Collagène · Prévention du vieillissement",
    dept: deptAntiage,
    deptAlt: "Salle de consultation anti-âge",
    equip: equipAntiage,
    equipAlt: "Flacons de biostimulateurs de collagène",
    href: "/biostimulators",
  },
  {
    title: "Médecine Régénérative",
    treatments: "PRP · Exosomes · Secretome · Cellules souches · Médecine régénérative",
    dept: deptRegen,
    deptAlt: "Laboratoire de médecine régénérative",
    equip: equipRegen,
    equipAlt: "Tubes d'exosomes et PRP",
    href: "/prp",
  },
  {
    title: "Corps",
    treatments: "Cryolipolyse · Radiofréquence · HIFU · Raffermissement corporel",
    dept: deptBody,
    deptAlt: "Salle dédiée au body contouring",
    equip: equipBody,
    equipAlt: "Appareil de cryolipolyse",
    href: "/body-contouring",
  },
];

interface TechCard {
  name: string;
  description: string;
  icon: string;
}

const TECH_CARDS: TechCard[] = [
  {
    name: "Fotona",
    description: "Laser 4D pour le rajeunissement global du visage et le resurfacing cutané.",
    icon: "✦",
  },
  {
    name: "HIFU",
    description: "Ultrasons focalisés pour un lifting non-invasif et un tightening profond.",
    icon: "◈",
  },
  {
    name: "Nanopore",
    description:
      "Microneedling avancé pour la régénération cutanée et l'absorption de principes actifs.",
    icon: "⬡",
  },
  {
    name: "PRP",
    description: "Plasma riche en plaquettes pour la régénération cellulaire naturelle.",
    icon: "◎",
  },
  {
    name: "Exosomes",
    description: "Vésicules cellulaires régénérantes — la révolution de la médecine esthétique.",
    icon: "◉",
  },
  {
    name: "Radiofréquence",
    description: "Stimulation thermique du collagène pour un raffermissement cutané durable.",
    icon: "⬢",
  },
];

// Before/After data organized by treatment
const beforeAfterItems = [
  { before: before1, after: after1, treatment: "Lèvres" },
  { before: before2, after: after2, treatment: "Jawline" },
  { before: before3, after: after3, treatment: "Cernes" },
  { before: before4, after: after4, treatment: "Full Face" },
  { before: before5, after: after5, treatment: "Cicatrices" },
  { before: before6, after: after6, treatment: "PRP cheveux" },
  { before: before7, after: after7, treatment: "Lèvres" },
  { before: before8, after: after8, treatment: "Jawline" },
  { before: before9, after: after9, treatment: "Cernes" },
  { before: before10, after: after10, treatment: "Full Face" },
  { before: before11, after: after11, treatment: "Cicatrices" },
  { before: before12, after: after12, treatment: "PRP cheveux" },
  { before: before13, after: after13, treatment: "Lèvres" },
  { before: before14, after: after14, treatment: "Jawline" },
  { before: before15, after: after15, treatment: "Cernes" },
  { before: before16, after: after16, treatment: "Full Face" },
  { before: before17, after: after17, treatment: "Cicatrices" },
];

// Animation variants
const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease }
  }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease }
  }
};

function HomePage() {
  const { t, lang } = useI18n();
  const recentPosts = POSTS.slice(0, 3);
  
  return (
    <div className="bg-blanc text-charbon font-sans overflow-x-hidden">
      <SiteHeader />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-blanc via-blanc/95 to-blanc/90"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
          className="pointer-events-none absolute -left-32 top-1/4 z-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="pointer-events-none absolute -right-32 bottom-1/4 z-0 h-[30rem] w-[30rem] rounded-full bg-walnut/5 blur-3xl"
        />

        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-12 gap-8 items-center relative z-10 py-20">
          <motion.div
            className="col-span-12 lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeInUp}
              className="text-gold font-mono text-[11px] tracking-[0.3em] uppercase block mb-6"
            >
              {t("hero.eyebrow")}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] text-balance mb-8"
            >
              {t("hero.title.1")} <br />
              <span className="italic text-walnut bg-gradient-to-r from-walnut to-gold bg-clip-text text-transparent">
                {t("hero.title.2")}
              </span>
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="h-px w-32 bg-gradient-to-r from-gold to-transparent mb-8 origin-left"
            />
            <motion.p
              variants={fadeInUp}
              className="max-w-md text-charbon/70 text-lg leading-relaxed mb-10"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-charbon text-blanc px-8 py-4 rounded-full text-xs font-medium tracking-wide hover:bg-walnut transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t("hero.cta.appointment")}
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="#expertises"
                  className="inline-block border-2 border-charbon/20 px-8 py-4 rounded-full text-sm font-medium hover:border-gold hover:bg-gold/5 transition-all duration-300"
                >
                  {t("hero.cta.discover")}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 1.1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          className="absolute top-0 right-0 w-1/2 h-full hidden lg:block"
        >
          <div className="relative w-full h-full">
            <img
              src={heroDoctor}
              alt="Portrait du Dr. Iman Mahmoud Abdelaal"
              width={1080}
              height={1600}
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blanc via-blanc/30 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* CREDIBILITY SECTION */}
      <motion.section 
        className="bg-charbon py-24 text-blanc relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { num: "12+", label: t("cred.years") },
              { num: "5000+", label: t("cred.consultations") },
              { num: "1000+", label: t("cred.treatments") },
              { num: "Expert", label: t("cred.expert") },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span 
                  className="font-display text-5xl md:text-7xl block text-gold mb-3"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300 }}
                >
                  {s.num}
                </motion.span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-blanc/50">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section 
        className="py-32 bg-gradient-to-br from-blanc-warm to-blanc relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              className="relative"
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={aboutHands}
                  alt="Portrait du Dr. Iman Mahmoud Abdelaal"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] object-cover w-full"
                />
              </div>
              <motion.div 
                className="absolute -bottom-8 -right-4 md:-right-8 bg-gradient-to-br from-walnut to-gold p-8 text-blanc max-w-[260px] shadow-2xl rounded-lg"
                initial={{ opacity: 0, x: 40, y: 40, rotate: -3 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                whileHover={{ rotate: -1, scale: 1.02 }}
              >
                <p className="font-display text-xl italic leading-tight">
                  "La beauté est un équilibre, pas une transformation."
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-gold font-mono text-[11px] tracking-[0.3em] uppercase block mb-4"
                variants={fadeInUp}
              >
                À Propos du Dr. Iman Mahmoud Abdelaal
              </motion.span>
              <motion.h2 
                className="font-display text-4xl md:text-5xl mb-8 leading-tight"
                variants={fadeInUp}
              >
                Une Vision Médicale de l'Esthétique
              </motion.h2>
              <motion.p 
                className="text-charbon/80 leading-relaxed mb-6 text-lg"
                variants={fadeInUp}
              >
                Médecin esthétique spécialisée en harmonisation faciale, médecine régénérative et
                lasers médicaux, Dr. Iman dédie sa pratique à l'excellence clinique.
              </motion.p>
              <motion.p 
                className="text-charbon/70 leading-relaxed mb-10"
                variants={fadeInUp}
              >
                Médecin formatrice internationale, elle transmet son expertise aux praticiens à
                travers des masterclasses dédiées.
              </motion.p>
              
              <motion.ul 
                className="space-y-4 font-mono text-[11px] uppercase tracking-wider text-charbon/60 mb-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  "Médecine Esthétique et Anti-Âge",
                  "Dermatologie Interventionnelle",
                  "Lasers Médicaux",
                  "Micronutrition",
                  "Médecine Régénérative",
                ].map((d, idx) => (
                  <motion.li 
                    key={d} 
                    className="flex items-center gap-3"
                    variants={fadeInLeft}
                  >
                    <motion.span 
                      className="w-8 h-[2px] bg-gradient-to-r from-gold to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    />
                    {d}
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/about-dr-iman-abdelaal"
                  className="inline-block text-xs uppercase tracking-[0.25em] border-b-2 border-charbon pb-2 hover:text-gold hover:border-gold transition-colors"
                >
                  Découvrir son parcours
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* EXPERTISES SECTION */}
      <section id="expertises" className="py-32 bg-blanc">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-gold font-mono text-[11px] tracking-[0.3em] uppercase block mb-4">
              {t("exp.eyebrow")}
            </span>
            <h2 className="font-display text-5xl italic bg-gradient-to-r from-charbon to-gold bg-clip-text text-transparent">
              {t("exp.title")}
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {EXPERTISES.map((e) => (
              <motion.div
                key={e.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={e.href} className="group cursor-pointer block">
                  <div className="flex gap-2 mb-6 overflow-hidden rounded-lg">
                    <motion.div 
                      className="w-1/2 overflow-hidden rounded-l-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={e.dept}
                        alt={e.deptAlt}
                        loading="lazy"
                        width={400}
                        height={400}
                        className="w-full aspect-square object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="w-1/2 overflow-hidden rounded-r-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, delay: 0.05 }}
                    >
                      <img
                        src={e.equip}
                        alt={e.equipAlt}
                        loading="lazy"
                        width={400}
                        height={400}
                        className="w-full aspect-square object-cover"
                      />
                    </motion.div>
                  </div>
                  <motion.h3 
                    className="font-display text-2xl mb-3 group-hover:text-gold transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {e.title}
                  </motion.h3>
                  <p className="text-charbon/60 text-sm leading-relaxed mb-4">{e.treatments}</p>
                  <motion.span 
                    className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    {t("exp.discover")} <span className="rtl-flip">→</span>
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <motion.section 
        className="py-32 bg-charbon text-blanc relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 text-center">
            <span className="text-gold font-mono text-[11px] tracking-[0.3em] uppercase block mb-4">
              {t("philo.eyebrow")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl">{t("philo.title")}</h2>
            <p className="text-blanc/50 mt-6 max-w-2xl mx-auto">{t("philo.intro")}</p>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-blanc/20 rounded-lg overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              { n: "01", t: t("philo.1.t"), d: t("philo.1.d") },
              { n: "02", t: t("philo.2.t"), d: t("philo.2.d") },
              { n: "03", t: t("philo.3.t"), d: t("philo.3.d") },
            ].map((p, i, arr) => (
              <motion.div
                key={p.n}
                variants={scaleIn}
                whileHover={{ 
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                  transition: { duration: 0.3 }
                }}
                className={`p-12 transition-all duration-300 group ${
                  i < arr.length - 1 ? "md:border-r border-blanc/20" : ""
                }`}
              >
                <motion.span 
                  className="text-gold/30 font-display text-7xl block mb-8 group-hover:text-gold transition-all duration-300 italic"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  {p.n}
                </motion.span>
                <h3 className="font-display text-3xl mb-6">{p.t}</h3>
                <p className="text-blanc/40 text-sm leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* TECHNOLOGIES SECTION */}
      <section className="py-32 bg-gradient-to-br from-blanc-warm to-blanc relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-gold font-mono text-[11px] tracking-[0.3em] uppercase block mb-4">
              {t("tech.eyebrow")}
            </span>
            <h2 className="font-display text-5xl md:text-6xl italic mb-6 bg-gradient-to-r from-charbon to-gold bg-clip-text text-transparent">
              {t("tech.titleFull")}
            </h2>
            <p className="text-charbon/60 max-w-2xl mx-auto text-lg leading-relaxed">
              {t("tech.text")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {TECH_CARDS.map((card) => (
              <motion.div
                key={card.name}
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -3,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="group relative"
                style={{ perspective: 1200 }}
              >
                <div
                  className="relative bg-blanc border border-charbon/10 rounded-xl p-8 h-full transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-2xl group-hover:shadow-gold/10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div 
                    className="text-gold text-5xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="font-display text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
                    {card.name}
                  </h3>
                  <p className="text-charbon/60 text-sm leading-relaxed">{card.description}</p>
                  
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div 
                      className="absolute top-4 right-4 w-10 h-[2px] bg-gold/30 group-hover:w-14 group-hover:bg-gold transition-all duration-500"
                      whileHover={{ width: 56 }}
                    />
                    <motion.div 
                      className="absolute top-4 right-4 w-[2px] h-10 bg-gold/30 group-hover:h-14 group-hover:bg-gold transition-all duration-500"
                      whileHover={{ height: 56 }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mt-8 h-px bg-gradient-to-r from-charbon/10 via-gold/30 to-transparent group-hover:via-gold transition-all duration-500"
                    whileHover={{ scaleX: 1.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 overflow-hidden rounded-xl shadow-2xl"
          >
            <div className="relative overflow-hidden group">
              <img
                src={technologiesImg}
                alt="Plateau technique de la clinique Nefertiti"
                loading="lazy"
                width={1600}
                height={900}
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-charbon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsFlipFlap />

      {/* BEFORE / AFTER CAROUSEL */}
      <BeforeAfterCarousel items={beforeAfterItems} />

      {/* BLOG PREVIEW */}
      <MotionSection className="py-32 bg-gradient-to-br from-blanc-warm to-blanc">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-gold font-mono text-[11px] tracking-[0.3em] uppercase block mb-3">
                {t("blog.eyebrow")}
              </span>
              <h2 className="font-display text-4xl md:text-5xl">{t("blog.title")}</h2>
            </div>
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/blog"
                className="text-[10px] font-mono uppercase tracking-widest border-b-2 border-charbon pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                {t("blog.viewAll")} <span className="rtl-flip">→</span>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {recentPosts.map((p, i) => {
              const lp = localizedPost(p, lang);
              return (
                <motion.div
                  key={p.slug}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="overflow-hidden mb-5 aspect-[4/3] rounded-xl shadow-md">
                      <motion.img
                        src={p.image}
                        alt={p.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-3">
                      {String(i + 1).padStart(2, "0")} · {lp.category} · {p.readTime}
                    </span>
                    <h3 className="font-display text-xl mb-3 group-hover:text-gold transition-colors">
                      {lp.title}
                    </h3>
                    <p className="text-charbon/70 text-sm leading-relaxed mb-4">{lp.excerpt}</p>
                    <motion.span 
                      className="text-[10px] font-mono uppercase tracking-widest border-b border-charbon pb-1 group-hover:text-gold group-hover:border-gold inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {t("blog.read")} <span className="rtl-flip">→</span>
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </MotionSection>

      {/* TRAINING SECTION - VERSION CORRIGÉE */}
      <motion.section 
        className="py-24 bg-charbon relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-full">
          <div className="bg-gradient-to-br from-charbon/95 to-charbon overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Photo responsive - sans zoom */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden">
                <img
                  src={training}
                  alt="Centre de formation médicale Nefertiti"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Overlay subtil pour la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/30 via-transparent to-transparent" />
              </div>
            </motion.div>
            
            {/* Contenu texte */}
            <motion.div 
              className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-blanc"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-6"
              >
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-gold font-mono text-[10px] tracking-[0.2em] uppercase">
                  Excellence Académique
                </span>
              </motion.div>
              
              <motion.h2 
                className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                Centre de Formation <br />
                <span className="text-gold">Médicale</span>
              </motion.h2>
              
              <motion.p 
                className="text-blanc/70 mb-8 leading-relaxed text-base md:text-lg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {t("train.text") || "Formation médicale continue de haut niveau, certifiée et reconnue internationalement. Programme complet couvrant les dernières innovations en médecine esthétique."}
              </motion.p>
              
              {/* Liste des formations */}
              <motion.ul 
                className="grid grid-cols-2 gap-3 text-[11px] uppercase tracking-widest text-blanc/70 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  "Injections",
                  "Anatomie faciale",
                  "Lasers médicaux",
                  "Médecine régénérative",
                  "Hands-on pratique",
                  "Certification"
                ].map((f, idx) => (
                  <motion.li 
                    key={f} 
                    className="flex items-center gap-2"
                    variants={fadeInLeft}
                  >
                    <motion.span 
                      className="w-3 h-[2px] bg-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: 12 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    />
                    {f}
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Lien simple */}
              <motion.a
                href="#"
                className="self-start text-gold font-mono text-[10px] uppercase tracking-widest flex items-center gap-3 hover:gap-4 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                {t("train.cta") || "Découvrir la formation"} 
                <span className="text-sm">→</span>
              </motion.a>
              
              {/* Statistiques minimales */}
              <motion.div 
                className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-blanc/20"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  { num: "500+", label: "Médecins formés" },
                  { num: "15+", label: "Programmes" },
                  { num: "100%", label: "Satisfaction" }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    className="text-center"
                  >
                    <div className="font-display text-xl text-gold">{stat.num}</div>
                    <div className="text-[9px] uppercase tracking-wider text-blanc/40">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* MAP SECTION */}
      <MapSection />

      {/* FINAL CTA */}
      <MotionSection className="py-32 text-center relative overflow-hidden bg-gradient-to-br from-blanc-warm to-blanc">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <span className="text-gold font-mono text-[11px] tracking-[0.3em] uppercase block mb-4">
            {t("final.eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight bg-gradient-to-r from-charbon to-gold bg-clip-text text-transparent">
            {t("final.title")}
          </h2>
          <p className="text-charbon/70 mb-10 leading-relaxed">{t("final.text")}</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="inline-block bg-charbon text-blanc px-12 py-5 rounded-full text-sm uppercase tracking-[0.25em] hover:bg-walnut transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {t("hero.cta.appointment")}
            </Link>
          </motion.div>
        </div>
      </MotionSection>

      <SiteFooter />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
}