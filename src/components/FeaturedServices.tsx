import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import peeling from "@/assets/studio-zahaa-top5-peeling.jpg.asset.json";
import rehydratation from "@/assets/studio-zahaa-top5-rehydratation.jpg.asset.json";
import electrolyse from "@/assets/studio-zahaa-top5-electrolyse.jpg.asset.json";
import dentaire from "@/assets/studio-zahaa-top5-dentaire.jpg.asset.json";
import laser from "@/assets/studio-zahaa-top5-laser.jpg.asset.json";
import { BOOKSY_URL, categoryHref, featuredServices } from "@/data/services";

const CDN = "https://studio-zahaa-elegance.lovable.app";
const photos: Record<string, { url: string }> = {
  electrolyse,
  "peeling-lift": peeling,
  dentaire,
  rehydratation,
  laser,
};

export function FeaturedServices() {
  return (
    <section id="top-services" className="overflow-hidden bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="reveal text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Les incontournables</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Notre Top 5</h2>
          <div className="mx-auto mt-7 h-px w-16 bg-gold" />
        </header>
        <div className="mt-14 grid grid-cols-2 items-start gap-x-5 gap-y-12 sm:gap-x-8 md:grid-cols-5 md:gap-x-5 lg:gap-x-8">
          {featuredServices.map((service, index) => (
            <article key={service.id} className={`reveal min-w-0 text-center ${index === 4 ? "col-span-2 mx-auto w-[calc(50%-0.625rem)] md:col-span-1 md:w-full" : ""} ${index % 2 ? "md:pt-10" : ""}`}>
              <a href={categoryHref("femme", service.categoryId)} className="group block" aria-label={`Voir les soins ${service.name}`}>
                <div className="top-five-float relative mx-auto aspect-square w-full max-w-[235px] rounded-full border border-gold/30 p-1.5 transition-[border-color] duration-500 group-hover:border-gold">
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <img
                      src={`${CDN}${photos[service.id].url}`}
                      alt={service.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <span className="mt-5 block text-xs text-gold">0{index + 1} / 05</span>
                <h3 className="mt-2 text-xl leading-tight md:text-2xl">{service.name}</h3>
              </a>
              <p className="mx-auto mt-3 max-w-56 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <Button asChild variant="link" className="mt-2 h-auto px-0 text-xs text-foreground underline-offset-4">
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">Réserver <ArrowUpRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" /></a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
