import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n, type Lang } from "@/lib/i18n";

const COPY: Record<Lang, { text: string; accept: string; decline: string; more: string }> = {
  fr: {
    text: "Nous utilisons des cookies pour améliorer votre expérience et mesurer l'audience du site, conformément à la loi 09-08 (CNDP).",
    accept: "Accepter",
    decline: "Refuser",
    more: "En savoir plus",
  },
  en: {
    text: "We use cookies to enhance your experience and measure site audience, in compliance with Moroccan law 09-08 (CNDP).",
    accept: "Accept",
    decline: "Decline",
    more: "Learn more",
  },
  ar: {
    text: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وقياس جمهور الموقع، وفقًا للقانون 09-08 (CNDP).",
    accept: "قبول",
    decline: "رفض",
    more: "المزيد",
  },
};

export function CookieBanner() {
  const { lang } = useI18n();
  const [visible, setVisible] = useState(false);
  const c = COPY[lang];

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
          aria-label="Cookies"
        >
          <div className="max-w-5xl mx-auto p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-xs md:text-sm leading-relaxed flex-1">
              {c.text}{" "}
              <a href="/politique-confidentialite" className="underline text-gold">
                {c.more}
              </a>
            </p>
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={() => choose("decline")}
                className="flex-1 md:flex-initial px-5 py-2 text-[10px] uppercase tracking-[0.2em] border border-blanc/30 hover:bg-blanc/10 transition-colors rounded-full"
              >
                {c.decline}
              </button>
              <button
                onClick={() => choose("accept")}
                className="flex-1 md:flex-initial px-5 py-2 text-[10px] uppercase tracking-[0.2em] bg-gold text-charbon hover:bg-gold/90 transition-colors rounded-full font-medium"
              >
                {c.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
