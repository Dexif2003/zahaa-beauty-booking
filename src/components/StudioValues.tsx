import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { studioValues } from "@/data/studio";

export function StudioValues() {
  return (
    <section aria-labelledby="studio-values-title" className="py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h2 id="studio-values-title" className="text-center text-4xl uppercase md:text-5xl">
          Nos valeurs
        </h2>
        <Accordion type="single" collapsible className="mt-12 md:mt-16">
          {studioValues.map(({ title, text }) => (
            <AccordionItem key={title} value={title} className="border-border/60">
              <AccordionTrigger className="min-h-24 gap-6 py-8 text-lg uppercase hover:no-underline md:min-h-28 md:text-xl [&>svg]:h-5 [&>svg]:w-5">
                {title}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                {text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
