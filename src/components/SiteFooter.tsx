import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/logo.png";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <>
      <AnnouncementBar />
      <footer className="bg-charbon text-blanc pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-4">
              <img
                src={logoSrc}
                alt="Nefertiti Aesthetic Clinic"
                className="h-20 w-auto mb-6 invert"
                loading="lazy"
              />
              <p className="text-blanc/40 text-sm max-w-xs leading-relaxed mb-6">
                L'art médical de l'harmonisation du visage — sous la direction du Dr. Iman Mahmoud
                Abdelaal.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/dr_iman_abdelaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Dr. Iman Abdelaal"
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/nefertiti-aesthetic-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("form.linkedin")} Nefertiti Aesthetic Clinic`}
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/212668783931"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 gap-8 text-[11px] uppercase tracking-widest">
              <div className="flex flex-col gap-4">
                <span className="text-gold font-mono text-[10px] tracking-widest mb-2">
                  {t("foot.expertise")}
                </span>
                <Link
                  to="/injections-acide-hyaluronique"
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  {t("nav.injections")}
                </Link>
                <Link
                  to="/laser-fotona"
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  {t("nav.lasers")}
                </Link>
                <Link to="/prp" className="text-blanc/60 hover:text-gold transition-colors">
                  {t("nav.regen")}
                </Link>
                <Link to="/galerie" className="text-blanc/60 hover:text-gold transition-colors">
                  {t("nav.gallery")}
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-gold font-mono text-[10px] tracking-widest mb-2">
                  {t("foot.clinic")}
                </span>
                <Link
                  to="/about-dr-iman-abdelaal"
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  {t("nav.doctor")}
                </Link>
                <Link to="/blog" className="text-blanc/60 hover:text-gold transition-colors">
                  {t("nav.blog")}
                </Link>
                <Link to="/contact" className="text-blanc/60 hover:text-gold transition-colors">
                  {t("nav.contact")}
                </Link>
                <Link
                  to="/mentions-legales"
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  {t("foot.legal")}
                </Link>
                <Link
                  to="/politique-confidentialite"
                  className="text-blanc/60 hover:text-gold transition-colors"
                >
                  {t("foot.privacy")}
                </Link>
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="text-gold font-mono text-[10px] tracking-widest block mb-6">
                {t("foot.contact")}
              </span>
              <div className="space-y-3 text-blanc/60 text-sm">
                <p className="leading-relaxed">
                  4ème étage, n°05
                  <br />
                  47 Rue Othmane Ibn Affane
                  <br />
                  Casablanca 20000, Maroc
                </p>
                <a
                  href="tel:+212522336860"
                  className="block text-xl font-display text-blanc hover:text-gold"
                >
                  +212 522 33 68 60
                </a>
                <a
                  href="mailto:nefertitiaestheticclinic@gmail.com"
                  className="block hover:text-gold break-all"
                >
                  nefertitiaestheticclinic@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blanc/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-blanc/30 tracking-widest">
            <span>© {new Date().getFullYear()} NEFERTITI AESTHETIC CLINIC · CASABLANCA</span>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="hover:text-gold">
                MENTIONS LÉGALES
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-gold">
                CONFIDENTIALITÉ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
