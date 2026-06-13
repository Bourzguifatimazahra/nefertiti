import { useState, useEffect } from "react";
import * as motion from "motion/react-client";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Bonjour Docteur, je vous remercie énormément pour vos conseils et vos mains si douces. J'ai trop apprécié le résultat du soin LOLA et je compte le refaire bientôt.",
  },
  {
    id: 2,
    text: "Vous êtes le meilleur. Je vous aime plus que tout ❤️❤️❤️❤️❤️.",
  },
  {
    id: 3,
    text: "Merci beaucoup Docteur, je suis trop satisfaite du laser, j'ai hâte de voir le résultat final.",
  },
  {
    id: 4,
    text: "Un grand merci Docteure. C'est la troisième séance de laser. Le résultat est meilleur que prévu. Merci Docteure. Docteure, pour le Fotona, qu'est-ce que vous recommandez pour les rides ?",
  },
  {
    id: 5,
    text: "Docteure, franchement, le Botox est génial. Déjà, il a fait disparaître mes rides, et en même temps mon visage est resté naturel. C'est un résultat naturel.",
  },
  {
    id: 6,
    text: "Bonjour Docteure, merci infiniment pour la technique médicale du laser. Elle m'a donné d'excellents résultats. Je suis très satisfaite, pour une fois pas de rougeurs. Vous êtes la meilleure. Bon continuation, bravo. Chères dames, je vous conseille d'aller chez Dr Imane Abdelal, elle est excellente dans tout le travail et la relation.",
  },
  {
    id: 7,
    text: "Docteure, merci beaucoup. Tu n'imagines pas à quel point je suis heureuse du résultat. Je souffrais d'un problème de creux sur le côté. Le filler était excellent et rendait naturel.",
  },
  {
    id: 8,
    text: "Docteure, je suis tellement contente du résultat du Fotona. Mon visage est plus ferme et plus lumineux, sans aucune douleur. Merci pour votre gentillesse et votre professionnalisme.",
  },
  {
    id: 9,
    text: "J'avais peur des aiguilles mais vous avez été si douce. Le résultat du Botox est incroyable : mes rides ont disparu mais je peux toujours bouger mon visage naturellement. Merci mille fois.",
  },
  {
    id: 10,
    text: "Le laser a changé ma peau. Je ne m'attendais pas à un tel résultat après une seule séance. Les rougeurs sont parties très vite. Je reviens sans hésiter. Merci Docteure.",
  },
  {
    id: 11,
    text: "J'ai fait du filler sous les yeux et la différence est spectaculaire. J'ai l'air reposée et plus jeune. On ne voit absolument rien, c'est très naturel. Merci pour votre travail parfait.",
  },
  {
    id: 12,
    text: "Un immense merci pour le soin LOLA. Ma peau est plus douce, plus hydratée et rayonnante. Vous avez des mains en or. Je le recommande à toutes mes amies.",
  },
];

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE);

export function TestimonialsFlipFlap() {
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

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="py-32 bg-blanc-warm overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-5xl md:text-6xl italic mb-6">
            Ce que disent nos patientes
          </h2>
          <p className="text-charbon/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Des retours authentiques de celles qui nous font confiance pour leur beauté naturelle.
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
              aria-label={`Page ${index + 1} des témoignages`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
