import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Chatbot } from "@/components/Chatbot";
import { useI18n } from "@/lib/i18n";
import { sanitizeInput } from "@/lib/sanitize";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Rendez-vous | Nefertiti Aesthetic Clinic Casablanca" },
      {
        name: "description",
        content:
          "Prenez rendez-vous avec Dr. Iman Mahmoud Abdelaal à Casablanca. Téléphone +212 522 33 68 60, WhatsApp, email et plan d'accès.",
      },
      { property: "og:title", content: "Contact — Nefertiti Clinic Casablanca" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CLINIC_EMAIL = "nefertitiaestheticclinic@gmail.com";
const WHATSAPP_NUMBER = "212668783931";

function ContactPage() {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Sanitize all user inputs to prevent XSS
    const name = sanitizeInput(String(fd.get("name") || ""), 120);
    const email = sanitizeInput(String(fd.get("email") || ""), 120);
    const phone = sanitizeInput(String(fd.get("phone") || ""), 40);
    const message = sanitizeInput(String(fd.get("message") || ""), 1000);

    if (!name || !email || !phone || !message) return;

    setSubmitting(true);

    // Construct WhatsApp message with form data
    const waText = `Demande de rendez-vous - Nefertiti Aesthetic Clinic

Nom: ${name}
Email: ${email}
Téléphone: ${phone}

Demande:
${message}`;

    // Redirect to WhatsApp
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitting(false);
    setDone(true);
    (e.target as HTMLFormElement).reset();
  };

  const fields: { name: "name" | "email" | "phone"; type: string; key: string }[] = [
    { name: "name", type: "text", key: "form.name" },
    { name: "email", type: "email", key: "form.email" },
    { name: "phone", type: "tel", key: "form.phone" },
  ];

  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main className="py-20">
        <motion.section
          className="container mx-auto px-6 max-w-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
            {t("form.eyebrow")}
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-4">
            {t("form.title")}
          </h1>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-charbon/50">
            <span className="text-gold">*</span> {t("form.required")}
          </p>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              {fields.map((f) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-charbon/50 block mb-2"
                  >
                    {t(f.key)} <span className="text-gold">*</span>
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    maxLength={120}
                    className="w-full border-b border-charbon/20 bg-transparent py-3 outline-none focus:border-gold transition-colors"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-charbon/50 block mb-2"
                >
                  {t("form.message")} <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={1000}
                  className="w-full border-b border-charbon/20 bg-transparent py-3 outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <label className="flex items-start gap-3 text-[11px] text-charbon/60 leading-relaxed">
                <input type="checkbox" required className="mt-1 accent-gold" />
                <span>
                  {t("form.consent")}{" "}
                  <a href="/politique-confidentialite" className="text-gold underline">
                    {t("form.privacy")}
                  </a>
                  .
                </span>
              </label>
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-charbon text-blanc px-10 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors disabled:opacity-60"
              >
                {submitting ? t("form.sending") : t("form.submit")}
              </motion.button>
              {done && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-gold mt-4"
                >
                  {t("form.success")}
                </motion.p>
              )}
            </form>

            <aside className="space-y-10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-3">
                  {t("form.address")}
                </span>
                <p className="font-display text-2xl leading-snug">
                  4ème étage, n°05
                  <br />
                  47 Rue Othmane Ibn Affane
                  <br />
                  Casablanca 20000
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-3">
                  {t("form.phoneLabel")}
                </span>
                <a href="tel:+212522336860" className="font-display text-3xl hover:text-gold">
                  +212 522 33 68 60
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-3">
                  {t("form.whatsapp")}
                </span>
                <a
                  href="https://wa.me/212668783931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-3xl hover:text-gold"
                >
                  +212 668 78 39 31
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-3">
                  {t("form.emailLabel")}
                </span>
                <a
                  href={`mailto:${CLINIC_EMAIL}`}
                  className="font-display text-xl hover:text-gold break-all"
                >
                  {CLINIC_EMAIL}
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-3">
                  {t("form.instagram")}
                </span>
                <a
                  href="https://www.instagram.com/dr_iman_abdelaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl hover:text-gold"
                >
                  @dr_iman_abdelaal
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-3">
                  {t("form.linkedin")}
                </span>
                <a
                  href="https://www.linkedin.com/company/nefertiti-aesthetic-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl hover:text-gold"
                >
                  Nefertiti Aesthetic Clinic
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-3">
                  {t("form.hours")}
                </span>
                <p className="text-charbon/70">{t("foot.hours")}</p>
              </div>
            </aside>
          </div>
        </motion.section>

        <motion.section
          className="container mx-auto px-6 max-w-6xl mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            {t("form.map")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl mb-8">{t("form.mapCity")}</h2>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-sm border border-charbon/10 shadow-lg">
            <iframe
              title="Nefertiti Aesthetic Clinic — Casablanca"
              src="https://www.google.com/maps?q=47+Rue+Othmane+Ibn+Affane,+Casablanca+20000&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/oXR75tvVThW5SQEc7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] font-mono uppercase tracking-widest border-b border-charbon pb-1 hover:text-gold hover:border-gold"
            >
              {t("form.mapOpen")}
            </a>
          </div>
        </motion.section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
}
