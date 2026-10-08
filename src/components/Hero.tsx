import heroImg from "@/assets/studio-zahaa-soin-visage.png.asset.json";
import { BOOKSY_URL } from "@/data/services";
import logo from "@/assets/studio-zahaa-logo.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88dvh] w-full overflow-hidden">
      <img
        src={`https://studio-zahaa-elegance.lovable.app${heroImg.url}`}
        alt="Application d'un soin du visage au pinceau chez Studio Zahaa"
        width={928}
        height={1232}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_48%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir/55 via-noir/40 to-noir/80" />

      <div className="relative z-10 mx-auto flex min-h-[88dvh] max-w-5xl flex-col items-center justify-center px-6 pb-12 pt-28 text-center text-ivory">
        <span className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">
          Institut de beauté · Asnières-sur-Seine
        </span>

        <h1 className="w-full">
          <span className="sr-only">Studio Zahaa – Institut de Beauté à Asnières-sur-Seine</span>
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="mx-auto w-[min(82vw,590px)] brightness-0 invert"
          />
        </h1>

        <div className="my-8 h-px w-24 bg-gold" />

        <p className="max-w-xl font-serif text-xl italic text-ivory/90 sm:text-2xl">
          Révélez votre beauté naturelle.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <Button
            asChild
            className="rounded-none bg-gold px-8 py-6 text-sm uppercase text-noir hover:bg-gold-soft"
          >
            <a href={BOOKSY_URL} target="_blank" rel="noreferrer">
              Prendre rendez-vous
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-ivory/40 bg-transparent px-8 py-6 text-sm uppercase text-ivory hover:bg-ivory/10 hover:text-ivory"
          >
            <a href="#top-services">Découvrir</a>
          </Button>
        </div>

        <div className="mt-14 flex items-center gap-3 text-ivory/85">
          <span className="text-gold text-lg tracking-widest">★★★★★</span>
          <span className="text-sm">
            <strong className="font-medium">4.8/5</strong> · 40 avis clients
          </span>
        </div>
      </div>
    </section>
  );
}
