import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Booking } from "@/components/Booking";
import { audienceCategoryOrder, audienceHref, audienceLabels, BOOKSY_URL, categories, categoryHref, type Audience } from "@/data/services";

export function CategoryPage({ audience, categoryId }: { audience: Audience; categoryId: string }) {
  const category = categories.find((item) => item.id === categoryId && item.audiences.includes(audience));
  if (!category) return null;

  const related = audienceCategoryOrder[audience]
    .filter((id) => id !== categoryId)
    .map((id) => categories.find((item) => item.id === id))
    .filter((item): item is (typeof categories)[number] => Boolean(item));

  return (
    <>
      <header className="bg-secondary/50 pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <a href={audienceHref(audience)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Toutes les prestations
          </a>
          <p className="mt-12 text-xs uppercase tracking-[0.25em] text-gold">{audienceLabels[audience]} · Asnières-sur-Seine</p>
          <h1 className="mt-3 text-5xl leading-tight md:text-7xl">{category.label}</h1>
          <p className="mt-5 text-muted-foreground">Découvrez nos soins et choisissez votre prochain rendez-vous.</p>
        </div>
      </header>
      <section className="py-16 md:py-24" aria-label={`Soins ${category.label}`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.services.map((service) => (
              <article key={service.name} className="flex min-h-56 flex-col justify-between border border-border bg-card p-6 md:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-gold">Studio Zahaa</p>
                  <h2 className="mt-5 text-3xl leading-tight">{service.name}</h2>
                </div>
                <div className="mt-8 flex items-end justify-between gap-3 border-t border-border pt-5">
                  <div><span className="block text-xs text-muted-foreground">{service.duration}</span><span className="font-serif text-2xl text-gold">{service.price}</span></div>
                  <Button asChild size="sm" className="rounded-none">
                    <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">Réserver <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <nav className="bg-secondary/40 py-12" aria-label="Autres catégories">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl">Découvrir aussi</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((item) => (
              <a key={item.id} href={categoryHref(audience, item.id)} className="border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-gold">{item.label} ↗</a>
            ))}
          </div>
        </div>
      </nav>
      <Booking />
    </>
  );
}