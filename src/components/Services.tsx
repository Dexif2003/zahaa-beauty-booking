import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  audienceCategoryOrder,
  audienceHref,
  audienceLabels,
  BOOKSY_URL,
  categoryHref,
  categories,
  type Audience,
  type Category,
} from "@/data/services";

const audiences: Audience[] = ["femme", "homme"];

export function Services() {
  const [audience, setAudience] = useState<Audience>("femme");
  const [openCategory, setOpenCategory] = useState<string>("laser");
  const visible = audienceCategoryOrder[audience]
    .map((id) => categories.find((category) => category.id === id))
    .filter((category): category is Category => Boolean(category));

  return (
    <section id="services" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Carte des soins</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Nos prestations</h2>
          <div className="mx-auto my-8 h-px w-16 bg-gold" />
          <p className="mx-auto max-w-2xl text-foreground/70">
            Découvrez les soins Studio Zahaa et réservez votre rendez-vous en ligne.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 grid max-w-2xl grid-cols-2 border border-border bg-background p-1">
          {audiences.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={audience === item}
              onClick={() => {
                setAudience(item);
                setOpenCategory(audienceCategoryOrder[item][0] ?? "");
              }}
              className={`px-3 py-4 text-sm uppercase tracking-[0.12em] transition-colors ${
                audience === item
                  ? "bg-noir text-ivory"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {audienceLabels[item]}
            </button>
          ))}
        </div>
        <div className="reveal mt-4 text-center">
          <a
            href={audienceHref(audience)}
            className="text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-gold"
          >
            Voir la page {audienceLabels[audience].toLowerCase()} →
          </a>
        </div>

        <div className="mt-12 space-y-3">
          {visible.map((category) => (
            <CategoryAccordion
              key={category.id}
              category={category}
              audience={audience}
              open={openCategory === category.id}
              onToggle={() => setOpenCategory(openCategory === category.id ? "" : category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryAccordion({
  category,
  audience,
  open,
  onToggle,
}: {
  category: Category;
  audience: Audience;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      id={`category-${category.id}`}
      className="reveal scroll-mt-28 border border-border bg-card"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`services-${category.id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-8"
      >
        <span>
          <span className="font-serif text-2xl md:text-3xl">{category.label}</span>
          <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {category.services.length} soins
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180 text-gold" : ""}`}
        />
      </button>

      {open && (
        <div
          id={`services-${category.id}`}
          className="border-t border-border px-6 pb-6 md:px-8 md:pb-8"
        >
          {category.services.map((service) => (
            <div
              key={service.name}
              className="grid gap-3 border-b border-border py-5 last:border-0 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-8"
            >
              <h3 className="text-xl leading-snug">{service.name}</h3>
              <span className="text-sm text-muted-foreground">{service.duration}</span>
              <div className="flex items-center justify-between gap-5 sm:justify-end">
                <span className="font-serif text-2xl text-gold">{service.price}</span>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Réserver →
                </a>
              </div>
            </div>
          ))}
          <a
            href={categoryHref(audience, category.id)}
            className="inline-block border-b border-gold pb-1 text-sm text-foreground hover:text-gold"
          >
            Voir la page de cette catégorie →
          </a>
        </div>
      )}
    </article>
  );
}
