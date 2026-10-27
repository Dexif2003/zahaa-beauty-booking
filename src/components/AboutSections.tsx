import maskAsset from "@/assets/studio-zahaa-masque.jpeg.asset.json";
import brushesAsset from "@/assets/studio-zahaa-pinceaux.jpeg.asset.json";
import greenMaskAsset from "@/assets/studio-zahaa-masque-vert.jpeg.asset.json";
import lipsAsset from "@/assets/studio-zahaa-levres.jpeg.asset.json";
import peelingAsset from "@/assets/studio-zahaa-peeling.jpeg.asset.json";
import brushAsset from "@/assets/studio-zahaa-brosse.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { aboutSections } from "@/data/about";
import { BOOKSY_URL } from "@/data/services";

const photos = [
  { url: maskAsset.url, alt: "Application d’un masque de soin du visage au pinceau" },
  { url: brushesAsset.url, alt: "Pinceaux de soin couverts de mousse délicate" },
  { url: greenMaskAsset.url, alt: "Masque de soin vert appliqué sur le visage" },
  { url: lipsAsset.url, alt: "Gommage sucré appliqué sur les lèvres" },
  { url: peelingAsset.url, alt: "Gommage peeling aux grains appliqué sur le visage" },
  { url: brushAsset.url, alt: "Brosse délicate appliquant une mousse de soin sur le visage" },
];

export function AboutSections() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
      {aboutSections.map((section, index) => {
        const photo = photos[index % photos.length];
        if (!photo) return null;
        return (
          <section
            key={section.label}
            aria-label={section.label}
            className="grid md:grid-cols-2 md:items-stretch"
          >
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <img
                src={`https://zahaa-beauty-booking.lovable.app${photo.url}`}
                alt={photo.alt}
                loading="lazy"
                className="aspect-square w-full object-cover md:h-full md:min-h-[560px]"
              />
            </div>
            <div
              className={`flex min-w-0 flex-col items-center justify-center bg-secondary/30 px-6 py-12 text-center md:px-10 md:py-14 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <span className="text-xs uppercase text-gold">{section.label}</span>
              <h2 className="mt-4 text-3xl leading-tight lg:text-4xl">{section.title}</h2>
              <div className="my-6 h-px w-12 bg-gold" />
              <div className="max-w-lg space-y-4 text-base leading-relaxed text-foreground/80">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {index === aboutSections.length - 1 && (
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild>
                    <a href="/prestations/femme">Découvrir nos soins</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                      Prendre rendez-vous
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
