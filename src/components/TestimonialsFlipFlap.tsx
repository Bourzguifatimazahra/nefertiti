import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { useI18n } from "@/lib/i18n";

const TESTIMONIAL_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(TESTIMONIAL_IDS.length / ITEMS_PER_PAGE);

export function TestimonialsFlipFlap() {
  const { t } = useI18n();
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
        setIsTransitioning(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = TESTIMONIAL_IDS.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  ).map((id) => ({ id, text: t(`testimonials.${id}`) }));

  return (
    <section className="py-32 bg-blanc-warm overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="font-display text-5xl md:text-6xl italic mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-charbon/60 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Flip-Flap Grid */}
        <div className="relative min-h-[320px]">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -30, rotateX: 10 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="group relative"
              >
                <div className="bg-blanc border border-charbon/10 rounded-sm p-8 h-full transition-all duration-500 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 relative overflow-hidden">
                  {/* Decorative quote mark */}
                  <div className="absolute top-4 right-6 text-gold/10 font-display text-8xl leading-none select-none pointer-events-none">
                    "
                  </div>

                  {/* Testimonial text */}
                  <p className="text-charbon/80 text-sm leading-relaxed mb-6 relative z-10 font-light italic">
                    {testimonial.text}
                  </p>

                  {/* Bottom accent */}
                  <div className="h-px bg-charbon/10 group-hover:bg-gold/50 transition-colors duration-500" />

                  {/* Gold corner accent */}
                  <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden rounded-bl-sm">
                    <div className="absolute bottom-3 left-3 w-6 h-[1px] bg-gold/30 group-hover:w-10 group-hover:bg-gold transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-[1px] h-6 bg-gold/30 group-hover:h-10 group-hover:bg-gold transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentPage(index);
                    setIsTransitioning(false);
                  }, 400);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentPage
                  ? "w-8 h-2 bg-gold"
                  : "w-2 h-2 bg-charbon/20 hover:bg-charbon/40"
              }`}
              aria-label={t("testimonials.pageAria")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
