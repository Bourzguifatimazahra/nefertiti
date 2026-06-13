import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoSrc from "@/assets/logo.png";
import { useI18n } from "@/lib/i18n";

export function LoadingScreen() {
  const { t } = useI18n();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }}
          className="loading-screen fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle radial gradient background */}
          <div className="loading-bg absolute inset-0 bg-blanc" />

          {/* Floating particles */}
          <div className="loading-particles absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className="loading-particle absolute h-1 w-1 rounded-full bg-gold/40"
                style={{
                  left: `${15 + ((i * 7) % 70)}%`,
                  top: `${20 + ((i * 11) % 60)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.7, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + (i % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>

          {/* Animated gold rings */}
          <motion.div
            className="loading-ring absolute rounded-full border border-gold/25"
            style={{ width: 300, height: 300 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.15, 1], opacity: [0, 0.5, 0.25] }}
            transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
          />
          <motion.div
            className="loading-ring absolute rounded-full border border-gold/15"
            style={{ width: 440, height: 440 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.25, 1], opacity: [0, 0.35, 0.15] }}
            transition={{ duration: 2.2, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          />
          <motion.div
            className="loading-ring absolute rounded-full border border-gold/10"
            style={{ width: 580, height: 580 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.3, 1], opacity: [0, 0.2, 0.08] }}
            transition={{ duration: 2.4, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          />

          {/* Sweeping gold sheen */}
          <motion.div
            className="loading-sheen absolute h-full w-40 bg-gradient-to-r from-transparent via-gold/20 to-transparent rotate-12"
            initial={{ x: "-50vw" }}
            animate={{ x: "70vw" }}
            transition={{ duration: 1.8, ease: [0.32, 0.72, 0, 1] }}
          />

          {/* Logo with glow */}
          <motion.div
            className="loading-logo-wrapper relative z-10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.img
              src={logoSrc}
              alt="Nefertiti Aesthetic Clinic"
              className="loading-logo h-24 w-auto md:h-28"
              animate={{
                filter: [
                  "drop-shadow(0 0 0px rgba(184,137,106,0))",
                  "drop-shadow(0 0 20px rgba(184,137,106,0.3))",
                  "drop-shadow(0 0 0px rgba(184,137,106,0))",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Elegant divider line */}
          <motion.div
            className="loading-divider relative z-10"
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="loading-tagline mt-6 font-display italic text-charbon/60 text-sm md:text-base relative z-10 text-center px-4"
          >
            {t("loading.tagline")}
          </motion.p>

          {/* Signature */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="loading-signature mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-gold/80 relative z-10"
          >
            {t("loading.signature")}
          </motion.span>

          {/* Progress bar */}
          <motion.div
            className="loading-progress absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="loading-progress-track h-[2px] w-32 overflow-hidden rounded-full bg-charbon/10">
              <motion.div
                className="loading-progress-fill h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
