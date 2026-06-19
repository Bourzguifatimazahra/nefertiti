import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useI18n } from "@/lib/i18n";

interface BeforeAfterItem {
  before: string;
  after: string;
  treatment: string;
  treatmentKey?: string;
}

interface BeforeAfterCarouselProps {
  items: BeforeAfterItem[];
}

export function BeforeAfterCarousel({ items }: BeforeAfterCarouselProps) {
  const { t } = useI18n();
  if (items.length === 0) return null;

  // Group items into chunks of 4 for the carousel
  const groupedItems: BeforeAfterItem[][] = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }

  return (
    <section className="py-24 bg-blanc-warm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
            {t("beforeafter.eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            {t("beforeafter.title")}
          </h2>
          <p className="text-charbon/70 text-lg leading-relaxed">
            {t("beforeafter.text")}
          </p>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {groupedItems.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="basis-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {group.map((item, itemIndex) => {
                    const treatmentLabel = item.treatmentKey ? t(item.treatmentKey) : item.treatment;
                    return (
                      <div key={itemIndex} className="space-y-2">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                          <img
                            src={item.before}
                            alt={`${t("beforeafter.altBefore")} — ${treatmentLabel}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                          <img
                            src={item.after}
                            alt={`${t("beforeafter.altAfter")} — ${treatmentLabel}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}