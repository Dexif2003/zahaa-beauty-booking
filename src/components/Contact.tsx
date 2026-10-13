import { WHATSAPP_URL } from "@/data/studio";
import { BOOKSY_URL } from "@/data/services";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.35.1 11.94c0 2.1.55 4.15 1.6 5.95L0 24l6.26-1.64a11.93 11.93 0 0 0 5.78 1.47h.01c6.59 0 11.95-5.35 11.95-11.94 0-3.19-1.24-6.19-3.48-8.41ZM12.05 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.88 9.88 0 0 1-1.52-5.24c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.94 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.68-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.52.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Contact</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Nous trouver</h2>
          <div className="mx-auto my-8 h-px w-16 bg-gold" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-card">
              <iframe
                title="Studio Zahaa - Carte"
                src="https://www.google.com/maps?q=99+Quai+du+Docteur+Dervaux,+92600+Asni%C3%A8res-sur-Seine&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Info
                label="Adresse"
                lines={["99 Quai du Docteur Dervaux", "92600 Asnières-sur-Seine"]}
              />
              <Info label="Commodités" lines={["Parking disponible", "Wi-Fi offert"]} />
            </div>
          </div>

          <div className="reveal flex flex-col border border-border bg-card p-8 md:p-10">
            <h3 className="text-2xl">Contactez-nous sur WhatsApp</h3>
            <div className="my-7 h-px w-16 bg-gold" />
            <p className="leading-relaxed text-foreground/75">
              La façon la plus rapide de nous joindre : posez vos questions, demandez un
              renseignement sur un soin ou réservez votre rendez-vous directement par message.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nous vous répondons dès que possible.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-noir px-8 py-4 text-sm uppercase tracking-widest text-ivory transition-all hover:bg-noir/90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Écrire sur WhatsApp
              </a>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-border px-8 py-4 text-center text-sm uppercase tracking-widest transition-colors hover:border-gold"
              >
                Réserver en ligne
              </a>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Vous êtes déjà sur WhatsApp ?
              </p>
              <p className="mt-2 font-serif text-lg">
                Le petit bouton en bas de l’écran ouvre aussi notre discussion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div className="border border-border bg-card p-6">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      {lines.map((l) => (
        <p key={l} className="mt-2 font-serif text-lg">
          {l}
        </p>
      ))}
    </div>
  );
}
