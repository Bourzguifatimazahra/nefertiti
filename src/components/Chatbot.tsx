import { useState, useEffect } from "react";
import { escapeHtml } from "@/lib/sanitize";
import { useI18n } from "@/lib/i18n";

interface Msg {
  role: "bot" | "user";
  text: string;
}

export function Chatbot() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: t("chatbot.title") + " — " + t("chatbot.subtitle") },
  ]);

  const quickItems = [
    { q: t("chatbot.quick.1.q"), a: t("chatbot.quick.1.a") },
    { q: t("chatbot.quick.2.q"), a: t("chatbot.quick.2.a") },
    { q: t("chatbot.quick.3.q"), a: t("chatbot.quick.3.a") },
    { q: t("chatbot.quick.4.q"), a: t("chatbot.quick.4.a") },
  ];

  function ask(q: string) {
    const found = quickItems.find((x) => x.q === q);
    // Sanitize the question to prevent XSS
    const sanitizedQ = escapeHtml(q);
    const sanitizedA = found
      ? escapeHtml(found.a)
      : t("chatbot.quick.4.a");
    setMessages((m) => [
      ...m,
      { role: "user", text: sanitizedQ },
      { role: "bot", text: sanitizedA },
    ]);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={t("chatbot.aria")}
        className="fixed bottom-8 left-8 rtl:left-auto rtl:right-8 z-40 bg-charbon text-blanc p-4 rounded-full shadow-2xl hover:bg-walnut transition-colors"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
      {open && (
        <div className="fixed bottom-28 left-8 rtl:left-auto rtl:right-8 z-50 w-[320px] max-w-[calc(100vw-2rem)] bg-blanc border border-charbon/10 rounded-lg shadow-2xl overflow-hidden animate-fade-up">
          <div className="bg-charbon text-blanc px-5 py-4 flex justify-between items-center">
            <div>
              <p className="font-display text-lg leading-none">{t("chatbot.title")}</p>
              <p className="text-[10px] text-blanc/50 font-mono mt-1">{t("chatbot.online")}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label={t("chatbot.close")}
              className="text-blanc/60 hover:text-gold"
            >
              ✕
            </button>
          </div>
          <div className="p-4 max-h-72 overflow-y-auto space-y-3 bg-blanc-warm">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.role === "bot" ? "" : "text-right"}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${m.role === "bot" ? "bg-blanc text-charbon" : "bg-gold text-blanc"}`}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-charbon/10 flex flex-wrap gap-2 bg-blanc">
            {quickItems.map((x) => (
              <button
                key={x.q}
                onClick={() => ask(x.q)}
                className="text-[10px] uppercase tracking-wider border border-charbon/20 px-3 py-1.5 rounded-full hover:border-gold hover:text-gold"
              >
                {x.q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
