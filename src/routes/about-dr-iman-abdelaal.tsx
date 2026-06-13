import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import portrait from "@/assets/dr.jpg";

export const Route = createFileRoute("/about-dr-iman-abdelaal")({
  head: () => ({
    meta: [
      { title: "Dr. Iman Mahmoud Abdelaal — Médecin Esthétique | Nefertiti Clinic" },
      {
        name: "description",
        content:
          "Dr. Iman Mahmoud Abdelaal, médecin esthétique spécialisée en harmonisation faciale, lasers médicaux et médecine régénérative. Formatrice internationale.",
      },
      { property: "og:title", content: "Dr. Iman Mahmoud Abdelaal" },
      { property: "og:url", content: "/about-dr-iman-abdelaal" },
      { property: "og:image", content: portrait },
    ],
    links: [{ rel: "canonical", href: "/about-dr-iman-abdelaal" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-blanc text-charbon">
      <SiteHeader />
      <main>
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">
                Portrait
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
                Dr. Iman Mahmoud Abdelaal
              </h1>
              <div className="h-px w-24 bg-gold mb-8" />
              <p className="text-charbon/70 text-lg leading-relaxed mb-6">
                Médecin esthétique spécialisée en harmonisation faciale, médecine régénérative et
                lasers médicaux.
              </p>
              <p className="text-charbon/70 leading-relaxed">
                Dr. Iman dédie sa pratique à l'excellence clinique. Elle allie une connaissance
                approfondie de l'anatomie faciale, une maîtrise des technologies les plus innovantes
                et une vision artistique au service d'une beauté révélée — jamais transformée.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src={portrait}
                alt="Portrait du Dr. Iman Mahmoud Abdelaal"
                width={1080}
                height={1600}
                className="w-full aspect-[3/4] object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-blanc-warm">
          <div className="container mx-auto px-6 max-w-7xl">
            <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
              Formations
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-16">Diplômes et Spécialisations</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  y: "DU",
                  t: "Médecine Esthétique et Anti-Âge",
                  d: "Diplôme universitaire de spécialisation supérieure.",
                },
                {
                  y: "DU",
                  t: "Dermatologie Interventionnelle",
                  d: "Expertise avancée en pathologies cutanées et lasers.",
                },
                { y: "DU", t: "Lasers Médicaux", d: "Maîtrise des plateformes laser de pointe." },
                {
                  y: "DU",
                  t: "Micronutrition",
                  d: "Approche systémique du vieillissement et de la peau.",
                },
                {
                  y: "DU",
                  t: "Médecine Régénérative",
                  d: "PRP, exosomes, secretome, cellules souches.",
                },
              ].map((f, i) => (
                <article key={f.t} className="flex gap-6 border-t border-charbon/10 pt-6">
                  <span className="font-display text-3xl text-gold italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charbon/40 block mb-2">
                      {f.y}
                    </span>
                    <h3 className="font-display text-2xl mb-2">{f.t}</h3>
                    <p className="text-charbon/70">{f.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Une consultation, une analyse, un plan sur-mesure
            </h2>
            <p className="text-charbon/70 mb-10">
              Chaque parcours commence par une consultation médicale approfondie.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-charbon text-blanc px-10 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
