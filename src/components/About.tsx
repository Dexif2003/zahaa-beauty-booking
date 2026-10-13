import aboutImg from "@/assets/studio-zahaa-about.jpg.asset.json";
import { StudioValues } from "@/components/StudioValues";

export function About() {
  return (
    <>
      <section id="about" className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-sm bg-secondary" />
            <img
              src={`https://studio-zahaa-elegance.lovable.app${aboutImg.url}`}
              alt="Deux visages lors d'un soin du visage chez Studio Zahaa"
              width={735}
              height={985}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
          </div>

          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.4em] text-gold">À propos</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              L'art du soin, par <span className="italic">Yasmina</span>
            </h2>
            <div className="my-8 h-px w-16 bg-gold" />
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              Studio Zahaa est un écrin dédié à la beauté, fondé et animé par Yasmina, spécialiste
              en soins du visage, techniques coréennes, laser et épilation. Chaque prestation est
              pensée comme une expérience sensorielle, alliant expertise pointue et rituels
              d'exception.
            </p>
          </div>
        </div>
      </section>
      <StudioValues />
    </>
  );
}
