import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function AnnouncementBar() {
  const { t, lang } = useI18n();
  const MESSAGES = [t("promo.1"), t("promo.2"), t("promo.3"), t("promo.4"), t("promo.5")];
  const items = [...MESSAGES, ...MESSAGES];
  const direction = lang === "ar" ? ["-50%", "0%"] : ["0%", "-50%"];
  return (
    <div className="bg-charbon text-blanc overflow-hidden border-y border-gold/20">
      <motion.div
        className="flex gap-12 py-3 whitespace-nowrap text-[11px] font-mono uppercase tracking-[0.25em]"
        animate={{ x: direction }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-12 text-blanc/80">
            <span>{m}</span>
            <span className="text-gold">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
