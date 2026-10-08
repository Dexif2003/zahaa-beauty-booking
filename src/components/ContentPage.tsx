import { ArrowLeft, CalendarDays, Check, Heart, ShieldCheck, Sparkles } from "lucide-react";
import aboutImg from "@/assets/studio-zahaa-about.jpg.asset.json";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  introduction: string;
};

function PageIntro({ eyebrow, title, introduction }: PageIntroProps) {
  return (
    <header className="bg-secondary/50 pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</span>
        <h1 className="mt-5 text-5xl leading-tight md:text-7xl">{title}</h1>
        <div className="mx-auto my-8 h-px w-16 bg-gold" />
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
          {introduction}
        </p>
      </div>
    </header>
  );
}

function BackHome() {
  return (
    <Button asChild variant="outline" className="rounded-full px-6">
      <a href="/">
        <ArrowLeft aria-hidden="true" />
        Retour à l’accueil
      </a>
    </Button>
  );
}

const values = [
  {
    icon: Heart,
    title: "Écoute & personnalisation",
    text: "Chaque rendez-vous commence par un échange attentif afin d’adapter le soin à vos besoins, votre peau et vos attentes.",
  },
  {
    icon: Sparkles,
    title: "Expertise & exigence",
    text: "Les gestes, les protocoles et les technologies sont sélectionnés avec précision pour privilégier la qualité et la justesse.",
  },
  {
    icon: ShieldCheck,
    title: "Douceur & confiance",
    text: "L’hygiène, le confort et le respect de votre rythme sont au cœur de chaque expérience au Studio Zahaa.",
  },
];

export function CentrePage() {
  return (
    <>
      <PageIntro
        eyebrow="En savoir plus"
        title="Le centre"
        introduction="Un lieu confidentiel pensé pour prendre soin de vous, au cœur d’Asnières-sur-Seine."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <img
            src={`https://studio-zahaa-elegance.lovable.app${aboutImg.url}`}
            alt="Soin du visage au Studio Zahaa à Asnières-sur-Seine"
            width={735}
            height={985}
            className="aspect-[5/6] w-full object-cover"
          />
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Notre approche</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              La beauté dans ce qu’elle a de plus personnel
            </h2>
            <div className="my-7 h-px w-16 bg-gold" />
            <p className="leading-relaxed text-foreground/75 md:text-lg">
              Fondé par Yasmina, Studio Zahaa conjugue savoir-faire, technologies ciblées et sens du
              détail. Ici, chaque soin est envisagé comme un moment unique : un diagnostic attentif,
              un protocole ajusté et des conseils pensés pour vous accompagner durablement.
            </p>
            <p className="mt-5 leading-relaxed text-foreground/75 md:text-lg">
              Dans une atmosphère calme et élégante, nous vous accueillons avec bienveillance pour
              révéler votre beauté naturelle, sans jamais la transformer.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Nos engagements</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Les valeurs du Studio</h2>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-background p-8 md:p-10">
                <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <BackHome />
          </div>
        </div>
      </section>
      <Booking />
    </>
  );
}

const recommendations = [
  {
    title: "Soins du visage & soins coréens",
    before:
      "Venez avec une peau propre si possible et signalez tout traitement ou sensibilité lors de l’échange préalable.",
    after:
      "Privilégiez une routine douce, une bonne hydratation et une protection solaire adaptée dans les jours qui suivent.",
  },
  {
    title: "Laser & électrolyse",
    before:
      "Évitez l’exposition solaire et suivez précisément les indications de préparation communiquées avant votre séance.",
    after:
      "Protégez la zone du soleil, évitez la chaleur intense et appliquez uniquement les soins apaisants recommandés.",
  },
  {
    title: "Peelings",
    before:
      "Informez-nous de votre routine, de vos traitements et de toute réaction cutanée récente avant le rendez-vous.",
    after:
      "Ne gommez pas la peau, hydratez-la délicatement et utilisez une haute protection solaire selon les conseils reçus.",
  },
  {
    title: "Sourcils, cils & sourire",
    before:
      "Arrivez sans maquillage sur la zone concernée et partagez toute sensibilité ou contre-indication connue.",
    after:
      "Respectez le temps de repos conseillé et évitez de frotter ou de mouiller la zone pendant la durée indiquée.",
  },
];

export function RecommendationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="En savoir plus"
        title="Nos recommandations"
        introduction="Quelques gestes simples pour préparer votre rendez-vous et prolonger sereinement les bénéfices de votre soin."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {recommendations.map((item) => (
              <article key={item.title} className="border border-border bg-card p-7 md:p-9">
                <h2 className="text-3xl">{item.title}</h2>
                <div className="mt-7 space-y-6">
                  <div className="flex gap-4">
                    <CalendarDays
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg">Avant le rendez-vous</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.before}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg">Après le soin</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Ces conseils sont généraux. Les recommandations personnalisées données par votre
            praticienne lors du rendez-vous restent toujours prioritaires. En cas de doute médical,
            demandez l’avis d’un professionnel de santé.
          </p>
          <div className="mt-10 text-center">
            <BackHome />
          </div>
        </div>
      </section>
      <Booking />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="En savoir plus"
        title="Nous contacter"
        introduction="Une question sur un soin ou votre prochain rendez-vous ? Écrivez-nous ou venez nous rencontrer à Asnières-sur-Seine."
      />
      <Contact />
      <div className="bg-secondary/40 pb-20 text-center">
        <BackHome />
      </div>
      <Booking />
    </>
  );
}
