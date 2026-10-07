import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Booking } from "@/components/Booking";
import {
  audienceCategoryOrder,
  audienceLabels,
  BOOKSY_URL,
  categories,
  categoryHref,
  type Audience,
} from "@/data/services";

const intros: Record<Audience, string> = {
  femme: "Épilation laser, électrolyse, peelings, soins du visage coréens et beauté du regard : découvrez tous les soins dédiés aux femmes et réservez votre rendez-vous.",
  homme: "Épilation laser, électrolyse, soins du visage et éclat du sourire : découvrez tous les soins dédiés aux hommes et réservez votre rendez-vous.",
};

export function AudiencePage({ audience }: { audience: Audience }) {
  const other: Audience = audience === "femme" ? "homme" : "femme";
  const list = audienceCategoryOrder[audience]
    .map((id) => categories.find((category) => category.id === id))
    .filter((category): category is (typeof categories)[number] => Boolean(category));

  return (
    <>
      <header className="bg-secondary/50 pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <a href="/#top-services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Toutes les prestations
          </a>
          <p className="mt-12 text-xs uppercase tracking-[0.25em] text-gold">Studio Zahaa · Asnières-sur-Seine</p>
          <h1 className="mt-3 text-5xl leading-tight md:text-7xl">{audienceLabels[audience]}</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">{intros[audience]}</p>
          <a
            href={`/prestations/${other}`}
            className="mt-8 inline-block border-b border-gold pb-1 text-sm text-foreground transition-colors hover:text-gold"
          >
            Voir {audienceLabels[other].toLowerCase()} →
          </a>
        </div>
      </header>

      <section className="py-16 md:py-24" aria-label={`Soins ${audienceLabels[audience]}`}>
        <div className="mx-auto max-w-7xl space-y-16 px-6">
          {list.map((category) => (
            <div key={category.id}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl">{category.label}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {category.services.length} soins
                  </p>
                </div>
                <a
                  href={categoryHref(audience, category.id)}
                  className="border-b border-gold pb-1 text-sm text-foreground transition-colors hover:text-gold"
                >
                  Voir la page de cette catégorie →
                </a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <article
                    key={service.name}
                    className="flex min-h-56 flex-col justify-between border border-border bg-card p-6 md:p-8"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-gold">{category.label}</p>
                      <h3 className="mt-5 text-2xl leading-tight">{service.name}</h3>
                    </div>
                    <div className="mt-8 flex items-end justify-between gap-3 border-t border-border pt-5">
                      <div>
                        <span className="block text-xs text-muted-foreground">{service.duration}</span>
                        <span className="font-serif text-2xl text-gold">{service.price}</span>
                      </div>
                      <Button asChild size="sm" className="rounded-none">
                        <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                          Réserver <ArrowUpRight aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Booking />
    </>
  );
}
