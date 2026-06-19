import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export interface DepartmentPageProps {
  eyebrow: string;
  eyebrowKey?: string;
  title: string;
  titleKey?: string;
  intro: string;
  introKey?: string;
  deptImage: string;
  deptAlt: string;
  equipImage: string;
  equipAlt: string;
  deptImages?: string[];
  equipImages?: string[];
  treatments: { name: string; description: string }[];
  technologies?: string[];
}

interface ImageSwitcherProps {
  images: string[];
  alt: string;
  className: string;
  width: number;
  height: number;
  label: string;
  t: (key: string) => string;
  showLabel?: boolean;
}

function ImageSwitcher({
  images,
  alt,
  className,
  width,
  height,
  label,
  t,
  showLabel = true,
}: ImageSwitcherProps) {
  const [index, setIndex] = useState(0);

  const showControls = images.length > 1;
  const current = images[index];

  // Auto-slideshow every 5 seconds
  useEffect(() => {
    if (!showControls) return;
    
    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [showControls, images.length]);

  const changeImage = (direction: -1 | 1) => {
    setIndex((currentIndex) => (currentIndex + direction + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={current}
            alt={alt}
            loading="lazy"
            width={width}
            height={height}
            className={className}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          />
        </AnimatePresence>
        {showControls && (
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
            <button
              type="button"
              onClick={() => changeImage(-1)}
              className="rounded-full bg-blanc/80 text-charbon px-3 py-1 text-xs font-mono uppercase tracking-widest shadow-sm hover:bg-gold hover:text-blanc"
              aria-label={t("dept.page.previous")}
            >
              ‹
            </button>
            <span className="rounded-full bg-blanc/80 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-charbon shadow-sm">
              {index + 1}/{images.length}
            </span>
            <button
              type="button"
              onClick={() => changeImage(1)}
              className="rounded-full bg-blanc/80 text-charbon px-3 py-1 text-xs font-mono uppercase tracking-widest shadow-sm hover:bg-gold hover:text-blanc"
              aria-label={t("dept.page.next")}
            >
              ›
            </button>
          </div>
        )}
      </div>
      {showLabel && (
        <figcaption className="font-mono text-[10px] uppercase tracking-[0.2em] text-charbon/50">
          {label}
        </figcaption>
      )}
    </div>
  );
}

export function DepartmentPage({
  eyebrow,
  title,
  intro,
  deptImage,
  deptAlt,
  equipImage,
  equipAlt,
  deptImages,
  equipImages,
  treatments,
  technologies,
}: DepartmentPageProps) {
  const { t } = useI18n();
  const activeDeptImages = deptImages?.length ? deptImages : [deptImage];
  const activeEquipImages = equipImages?.length ? equipImages : [equipImage];
  return (
    <main className="bg-blanc text-charbon">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-blanc-warm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
                {eyebrow}
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">{title}</h1>
              <div className="h-px w-24 bg-gold mb-8" />
              <p className="text-charbon/70 text-lg leading-relaxed max-w-xl">{intro}</p>
            </div>
            <div className="lg:col-span-6">
              <ImageSwitcher
                images={activeDeptImages}
                alt={deptAlt}
                width={1200}
                height={1200}
                className="w-full aspect-square object-cover rounded-sm"
                label={deptAlt}
                t={t}
                showLabel={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Department & Equipment imagery */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            <ImageSwitcher
              images={activeDeptImages}
              alt={deptAlt}
              width={800}
              height={800}
              className="w-full aspect-[4/3] object-cover rounded-sm"
                label={`${t("dept.page.room")} — ${t("dept.page.equipment")}`}
                t={t}
              />
            <ImageSwitcher
              images={activeEquipImages}
              alt={equipAlt}
              width={800}
              height={800}
              className="w-full aspect-[4/3] object-cover rounded-sm"
              label={`${t("dept.page.equipment")} — ${t("dept.page.technologiesUsed")}`}
              t={t}
            />
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 bg-blanc-warm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
              {t("dept.page.protocols")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {t("dept.page.treatments")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {treatments.map((t, i) => (
              <article
                key={t.name}
                className="border-t border-charbon/10 pt-6 flex gap-6 items-start"
              >
                <span className="font-display text-3xl text-gold italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl mb-3">{t.name}</h3>
                  <p className="text-charbon/70 leading-relaxed">{t.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
              {t("dept.page.technologiesUsed")}
            </span>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 border border-charbon/15 text-xs uppercase tracking-widest text-charbon/70 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-charbon text-blanc">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">{t("dept.page.cta.title")}</h2>
          <p className="text-blanc/60 mb-10 max-w-xl mx-auto">
            {t("dept.page.cta.text")}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-blanc px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-walnut transition-colors rounded-full"
          >
            {t("dept.page.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
