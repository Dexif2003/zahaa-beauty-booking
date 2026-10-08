import { useEffect } from "react";
import { audienceLabels, type Audience, type Category } from "@/data/services";

const SITE_URL = "https://zahaa-beauty-booking.lovable.app";
const HOME_TITLE = "Studio Zahaa | Institut de Beauté à Asnières-sur-Seine";
const HOME_DESCRIPTION = "Studio Zahaa, institut de beauté à Asnières-sur-Seine. Soins visage, lifting coréen, laser, sourcils et esthétique dentaire sur rendez-vous.";

const infoPages: Record<string, { title: string; description: string }> = {
  "/le-centre": {
    title: "Le centre | Studio Zahaa à Asnières-sur-Seine",
    description: "Découvrez Studio Zahaa à Asnières-sur-Seine, son approche personnalisée et ses engagements de qualité, de douceur et d’hygiène.",
  },
  "/nos-recommandations": {
    title: "Conseils avant et après vos soins | Studio Zahaa",
    description: "Préparez votre rendez-vous et suivez les recommandations Studio Zahaa après un soin visage, laser, électrolyse, peeling ou beauté du regard.",
  },
  "/nous-contacter": {
    title: "Contact et accès | Studio Zahaa à Asnières-sur-Seine",
    description: "Contactez Studio Zahaa et retrouvez l’institut au 99 Quai du Docteur Dervaux, 92600 Asnières-sur-Seine.",
  },
};

type SeoProps = {
  path: string;
  audience: Audience | null;
  category?: Category;
};

export function Seo({ path, audience, category }: SeoProps) {
  let title = HOME_TITLE;
  let description = HOME_DESCRIPTION;

  if (category && audience) {
    title = `${category.label} ${audience === "femme" ? "femme" : "homme"} | Studio Zahaa`;
    description = `Découvrez les prestations ${category.label.toLocaleLowerCase("fr-FR")} pour ${audience === "femme" ? "femmes" : "hommes"} proposées par Studio Zahaa à Asnières-sur-Seine, avec durées et tarifs.`;
  } else if (audience) {
    title = `${audienceLabels[audience]} | Studio Zahaa à Asnières-sur-Seine`;
    description = `Découvrez toutes les ${audienceLabels[audience].toLocaleLowerCase("fr-FR")} de Studio Zahaa : soins, durées, tarifs et réservation en ligne.`;
  } else if (infoPages[path]) {
    title = infoPages[path].title;
    description = infoPages[path].description;
  }

  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;

  useEffect(() => {
    document.title = title;

    const setContent = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
    };

    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);
    setContent('meta[name="description"]', description);
    setContent('meta[property="og:title"]', title);
    setContent('meta[property="og:description"]', description);
    setContent('meta[property="og:url"]', canonical);
    setContent('meta[name="twitter:title"]', title);
    setContent('meta[name="twitter:description"]', description);
  }, [canonical, description, title]);

  return null;
}