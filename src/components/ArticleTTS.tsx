import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useI18n, type Lang } from "@/lib/i18n";
import { stripHtml } from "@/lib/sanitize";

const LABELS: Record<Lang, { play: string; pause: string; stop: string; unsupported: string }> = {
  fr: {
    play: "Écouter l'article",
    pause: "Pause",
    stop: "Arrêter",
    unsupported: "Lecture vocale indisponible",
  },
  en: {
    play: "Listen to article",
    pause: "Pause",
    stop: "Stop",
    unsupported: "Voice playback unavailable",
  },
  ar: {
    play: "استمع للمقال",
    pause: "إيقاف مؤقت",
    stop: "إيقاف",
    unsupported: "القراءة الصوتية غير متاحة",
  },
};

const VOICE_LANG: Record<Lang, string> = { fr: "fr-FR", en: "en-US", ar: "ar-SA" };

export function ArticleTTS({ text }: { text: string }) {
  const { lang } = useI18n();
  const l = LABELS[lang];
  const [supported, setSupported] = useState(true);
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Sanitize text to prevent XSS in speech synthesis
  const sanitizedText = stripHtml(text);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) setSupported(false);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window)
        window.speechSynthesis.cancel();
    };
  }, []);

  // Stop when language/article changes
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setState("idle");
    }
  }, [text, lang]);

  const play = () => {
    if (!supported) return;
    const synth = window.speechSynthesis;
    if (state === "paused") {
      synth.resume();
      setState("playing");
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(sanitizedText);
    u.lang = VOICE_LANG[lang];
    u.rate = 0.95;
    u.pitch = 1;
    const voices = synth.getVoices();
    const v = voices.find((v) =>
      v.lang?.toLowerCase().startsWith(VOICE_LANG[lang].toLowerCase().slice(0, 2)),
    );
    if (v) u.voice = v;
    u.onend = () => setState("idle");
    u.onerror = () => setState("idle");
    utterRef.current = u;
    synth.speak(u);
    setState("playing");
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setState("paused");
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setState("idle");
  };

  if (!supported) {
    return <p className="text-xs text-charbon/40 font-mono">{l.unsupported}</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 p-4 bg-blanc-warm border border-gold/30 rounded-sm"
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold">♪ Audio</span>
      {state !== "playing" ? (
        <button
          onClick={play}
          className="flex items-center gap-2 px-4 py-2 bg-charbon text-blanc rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-walnut transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          {state === "paused" ? l.play : l.play}
        </button>
      ) : (
        <button
          onClick={pause}
          className="flex items-center gap-2 px-4 py-2 bg-gold text-charbon rounded-full text-[11px] uppercase tracking-[0.2em]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
          </svg>
          {l.pause}
        </button>
      )}
      {state !== "idle" && (
        <button
          onClick={stop}
          className="px-3 py-2 border border-charbon/20 rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-charbon/5"
        >
          {l.stop}
        </button>
      )}
    </motion.div>
  );
}
