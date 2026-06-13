import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function MapSection() {
  const { lang } = useI18n();
  const labels = {
    fr: {
      eyebrow: "Nous trouver",
      title: "Au cœur de Casablanca",
      address: "4ème étage, n° 05, Ibnou Afane, 47 Rue Othmane Ibn Affane, Casablanca 20000",
      directions: "Itinéraire Google Maps",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      hours: "Du lundi au samedi · 9h — 19h",
    },
    en: {
      eyebrow: "Find us",
      title: "In the heart of Casablanca",
      address: "4th floor, n° 05, Ibnou Afane, 47 Rue Othmane Ibn Affane, Casablanca 20000",
      directions: "Open in Google Maps",
      phone: "Phone",
      whatsapp: "WhatsApp",
      hours: "Monday to Saturday · 9am — 7pm",
    },
    ar: {
      eyebrow: "موقعنا",
      title: "في قلب الدار البيضاء",
      address: "الطابق الرابع، رقم 05، ابن عفان، 47 شارع عثمان بن عفان، الدار البيضاء 20000",
      directions: "افتح في خرائط جوجل",
      phone: "الهاتف",
      whatsapp: "واتساب",
      hours: "من الإثنين إلى السبت · ٩ص — ٧م",
    },
  }[lang];

  return (
    <motion.section
      className="py-24 bg-blanc-warm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
              {labels.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">{labels.title}</h2>
            <div className="h-px w-24 bg-gold mb-8" />
            <p className="text-charbon/80 leading-relaxed mb-8 text-lg">{labels.address}</p>
            <ul className="space-y-3 text-sm text-charbon/70 mb-10">
              <li>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold mr-2 rtl:mr-0 rtl:ml-2">
                  {labels.phone}
                </span>
                <a href="tel:+212522336860" className="hover:text-gold transition-colors" dir="ltr">
                  +212 522 33 68 60
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold mr-2 rtl:mr-0 rtl:ml-2">
                  {labels.whatsapp}
                </span>
                <a
                  href="https://wa.me/212668783931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  dir="ltr"
                >
                  +212 668 78 39 31
                </a>
              </li>
              <li className="font-mono text-[10px] uppercase tracking-widest text-charbon/50">
                {labels.hours}
              </li>
            </ul>
            <a
              href="https://maps.app.goo.gl/oXR75tvVThW5SQEc7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 self-start bg-charbon text-blanc px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors"
            >
              {labels.directions} <span className="rtl-flip">→</span>
            </a>
          </motion.div>
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-sm shadow-xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] border border-charbon/10">
              <iframe
                title="Nefertiti Aesthetic Clinic — Casablanca"
                src="https://www.google.com/maps?q=47+Rue+Othmane+Ibn+Affane,+Casablanca&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
