import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LangSwitcher, useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV = [
    { to: "/", label: t("nav.home") },
    { to: "/injections-acide-hyaluronique", label: t("nav.injections") },
    { to: "/laser-fotona", label: t("nav.lasers") },
    { to: "/prp", label: t("nav.regen") },
    { to: "/body-contouring", label: t("nav.body") },
    { to: "/intimate-rejuvenation", label: t("nav.intime") },
    { to: "/galerie", label: t("nav.gallery") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/about-dr-iman-abdelaal", label: t("nav.doctor") },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "bg-blanc/95 shadow-md border-charbon/10" : "bg-blanc/85 border-charbon/5"
      }`}
    >
      <div className="px-6 py-3 flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label={t("header.home.aria")}
        >
          <img
            src="/logo.png"
            alt={t("header.logoAlt")}
            className="h-12 w-auto object-contain"
            width="120"
            height="120"
            loading="eager"
            fetchPriority="high"
          />
        </Link>
        <div className="hidden lg:flex gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-charbon/60">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="line-draw hover:text-charbon transition-colors">
              {n.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <LangSwitcher />
          </div>
          <Link
            to="/contact"
            className="bg-charbon text-blanc px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-walnut transition-colors duration-300"
          >
            {t("nav.appointment")}
          </Link>
          <button
            aria-label={t("header.menu")}
            onClick={() => setOpen(!open)}
            className="lg:hidden text-charbon"
          >
            <span className="block w-6 h-px bg-charbon mb-1.5" />
            <span className="block w-6 h-px bg-charbon mb-1.5" />
            <span className="block w-4 h-px bg-charbon ml-auto" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-charbon/5 px-6 py-6 flex flex-col gap-4 bg-blanc">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-charbon/70"
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-charbon/5">
            <LangSwitcher />
          </div>
        </div>
      )}
    </motion.nav>
  );
}
