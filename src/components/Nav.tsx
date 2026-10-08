import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/studio-zahaa-logo.png";
import {
  audienceCategoryOrder,
  audienceHref,
  audienceLabels,
  BOOKSY_URL,
  categoryHref,
  categories,
  type Audience,
} from "@/data/services";

const links = [
  { href: "/#about", label: "À propos" },
  { href: "/#reviews", label: "Avis" },
];

const discoverLinks = [
  { href: "/le-centre", label: "Le centre" },
  { href: "/nos-recommandations", label: "Nos recommandations" },
  { href: "/nous-contacter", label: "Nous contacter" },
];

const audiences: Audience[] = ["femme", "homme"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAudience, setOpenAudience] = useState<Audience | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openDiscover, setOpenDiscover] = useState(false);
  const overHero = !scrolled && !open && window.location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setOpenAudience(null);
    setOpenCategory(null);
    setOpenDiscover(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Studio Zahaa — accueil"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Studio Zahaa"
            className={`h-auto w-36 sm:w-44 ${overHero ? "brightness-0 invert" : ""}`}
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigation principale">
          <div className="group relative">
            <a
              href="/#top-services"
              className={`text-sm transition-colors ${overHero ? "text-ivory hover:text-gold" : "text-foreground/80 hover:text-foreground"}`}
            >
              Prestations
            </a>
            <div className="invisible absolute left-1/2 top-full z-10 min-w-56 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border border-border bg-background p-2 shadow-lg">
                {audiences.map((audience) => (
                  <div key={audience} className="group/audience relative">
                    <a
                      href={audienceHref(audience)}
                      className="block px-4 py-3 text-sm hover:bg-secondary"
                    >
                      {audienceLabels[audience]} →
                    </a>
                    <div className="invisible absolute left-full top-0 min-w-56 pl-2 opacity-0 group-hover/audience:visible group-hover/audience:opacity-100 group-focus-within/audience:visible group-focus-within/audience:opacity-100">
                      <div className="border border-border bg-background p-2 shadow-lg">
                        {audienceCategoryOrder[audience].map((id) => {
                          const category = categories.find((item) => item.id === id);
                          return category ? (
                            <a
                              key={id}
                              href={categoryHref(audience, id)}
                              className="block px-4 py-3 text-sm hover:bg-secondary"
                            >
                              {category.label}
                            </a>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${overHero ? "text-ivory hover:text-gold" : "text-foreground/80 hover:text-foreground"}`}
            >
              {link.label}
            </a>
          ))}
          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 text-sm transition-colors ${overHero ? "text-ivory hover:text-gold" : "text-foreground/80 hover:text-foreground"}`}
            >
              En savoir plus
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-10 min-w-56 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border border-border bg-background p-2 shadow-lg">
                {discoverLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden bg-noir px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-noir/90 md:inline-block"
        >
          Réserver
        </a>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`grid h-10 w-10 place-items-center border md:hidden ${overHero ? "border-ivory text-ivory" : "border-border"}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[73px] h-[calc(100dvh-73px)] overflow-y-auto bg-background md:hidden">
          <nav
            className="mx-auto flex min-h-full max-w-md flex-col px-6 pb-10 pt-8"
            aria-label="Menu mobile"
          >
            <div className="divide-y divide-border border-y border-border">
              {audiences.map((audience) => {
                const audienceOpen = openAudience === audience;
                const audienceCategories = audienceCategoryOrder[audience]
                  .map((id) => categories.find((category) => category.id === id))
                  .filter((category): category is (typeof categories)[number] => Boolean(category));

                return (
                  <div key={audience}>
                    <div className="flex items-center justify-between gap-3">
                      <a
                        href={audienceHref(audience)}
                        onClick={closeMenu}
                        className="flex-1 py-5 text-left font-serif text-2xl"
                      >
                        {audienceLabels[audience]}
                      </a>
                      <button
                        type="button"
                        aria-label={`Afficher les catégories : ${audienceLabels[audience]}`}
                        aria-expanded={audienceOpen}
                        onClick={() => {
                          setOpenAudience(audienceOpen ? null : audience);
                          setOpenCategory(null);
                        }}
                        className="grid h-12 w-12 shrink-0 place-items-center"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${audienceOpen ? "rotate-180 text-gold" : ""}`}
                        />
                      </button>
                    </div>

                    {audienceOpen && (
                      <div className="mb-5 ml-4 border-l border-gold pl-5">
                        {audienceCategories.map((category) => {
                          const categoryOpen = openCategory === `${audience}-${category.id}`;
                          return (
                            <div key={category.id} className="border-b border-border last:border-0">
                              <div className="flex items-center justify-between gap-3">
                                <a
                                  href={categoryHref(audience, category.id)}
                                  onClick={closeMenu}
                                  className="flex-1 py-4 text-left text-sm uppercase tracking-[0.12em]"
                                >
                                  {category.label}
                                </a>
                                <button
                                  type="button"
                                  aria-label={`Afficher les soins : ${category.label}`}
                                  aria-expanded={categoryOpen}
                                  onClick={() =>
                                    setOpenCategory(
                                      categoryOpen ? null : `${audience}-${category.id}`,
                                    )
                                  }
                                  className="grid h-10 w-10 shrink-0 place-items-center"
                                >
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform ${categoryOpen ? "rotate-180 text-gold" : ""}`}
                                  />
                                </button>
                              </div>
                              {categoryOpen && (
                                <div className="pb-4 pl-4">
                                  {category.services.map((service) => (
                                    <a
                                      key={service.name}
                                      href={categoryHref(audience, category.id)}
                                      onClick={closeMenu}
                                      className="block py-2 text-sm leading-snug text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                      {service.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div>
                <button
                  type="button"
                  aria-expanded={openDiscover}
                  onClick={() => {
                    setOpenDiscover((value) => !value);
                    setOpenAudience(null);
                    setOpenCategory(null);
                  }}
                  className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl"
                >
                  En savoir plus
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${openDiscover ? "rotate-180" : ""}`}
                  />
                </button>
                {openDiscover && (
                  <div className="mb-5 ml-4 border-l border-gold pl-5">
                    {discoverLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="block border-b border-border py-4 text-sm uppercase tracking-[0.12em] last:border-0"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-serif text-xl"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 bg-noir px-6 py-4 text-center text-sm uppercase tracking-[0.16em] text-ivory"
              >
                Réserver sur Booksy
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
