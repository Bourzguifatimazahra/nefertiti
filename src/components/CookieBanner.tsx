import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("nef-cookies")) {
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (v: "accept" | "decline") => {
    localStorage.setItem("nef-cookies", v);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50 bg-charbon text-blanc shadow-2xl rounded-sm border border-gold/40"
          role="dialog"
          aria-label={t("cookie.aria")}
        >
          <div className="max-w-5xl mx-auto p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-xs md:text-sm leading-relaxed flex-1">
              {t("cookie.text")}{" "}
              <a href="/politique-confidentialite" className="underline text-gold">
                {t("cookie.learnMore")}
              </a>
            </p>
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={() => choose("decline")}
                className="flex-1 md:flex-initial px-5 py-2 text-[10px] uppercase tracking-[0.2em] border border-blanc/30 hover:bg-blanc/10 transition-colors rounded-full"
              >
                {t("cookie.decline")}
              </button>
              <button
                onClick={() => choose("accept")}
                className="flex-1 md:flex-initial px-5 py-2 text-[10px] uppercase tracking-[0.2em] bg-gold text-charbon hover:bg-gold/90 transition-colors rounded-full font-medium"
              >
                {t("cookie.accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
