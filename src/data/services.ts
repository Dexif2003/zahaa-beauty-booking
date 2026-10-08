export type Service = { name: string; price: string; duration: string };
export type Audience = "femme" | "homme";
export type Category = {
  id: string;
  label: string;
  audiences: Audience[];
  services: Service[];
};

export const categories: Category[] = [
  {
    id: "visage",
    label: "Soin du visage",
    audiences: ["femme", "homme"],
    services: [
      { name: "Soin visage personnalisé", price: "60€", duration: "1h" },
      { name: "Soin microneedling", price: "85€", duration: "45min" },
      { name: "Soin sur mesure réhydratation globale", price: "70€", duration: "1h" },
      { name: "Modelage liftant", price: "40€", duration: "30min" },
    ],
  },
  {
    id: "coreen",
    label: "Soin Coréen",
    audiences: ["femme"],
    services: [
      { name: "LIFT KOREA", price: "75€", duration: "30min" },
      { name: "Lifting Coréen Fils de Collagène (1 zone)", price: "60€", duration: "40min" },
      { name: "Lifting Coréen Fils de Collagène (2 zones)", price: "80€", duration: "1h" },
      { name: "Lifting Coréen Fils de Collagène (3 zones)", price: "100€", duration: "1h20" },
      { name: "Collagen +", price: "80€", duration: "1h" },
    ],
  },
  {
    id: "sourcils",
    label: "Beauté des sourcils",
    audiences: ["femme"],
    services: [
      { name: "Restructuration des sourcils", price: "25€", duration: "30min" },
      { name: "Henna Brow - Teinture hybride", price: "15€", duration: "30min" },
      { name: "Browlift Russe", price: "70€", duration: "1h15" },
      { name: "Browlift sourcils", price: "30€", duration: "30min" },
      { name: "Teinture cils", price: "10€", duration: "10min" },
    ],
  },
  {
    id: "laser",
    label: "Épilation laser",
    audiences: ["femme", "homme"],
    services: [
      { name: "LASER BOOST petite zone", price: "35€", duration: "30min" },
      { name: "LASER BOOST grande zone", price: "75€", duration: "30min" },
      { name: "LASER PRO IA petite zone", price: "75€", duration: "30min" },
      { name: "LASER PRO IA zone illimitée", price: "250€", duration: "2h" },
      { name: "Rendez-vous d'information laser", price: "Gratuit", duration: "30min" },
    ],
  },
  {
    id: "peeling",
    label: "Peeling",
    audiences: ["femme"],
    services: [
      { name: "Peeling anti taches", price: "160€", duration: "45min" },
      { name: "Peeling lifting +", price: "180€", duration: "45min" },
      { name: "Carbon peeling", price: "90€", duration: "1h" },
      { name: "Peeling aux acides", price: "75€", duration: "45min" },
    ],
  },
  {
    id: "smile",
    label: "Esthétique dentaire",
    audiences: ["femme", "homme"],
    services: [
      {
        name: "Blancheur absolue - soin éclaircissant du sourire",
        price: "75€",
        duration: "20min",
      },
    ],
  },
  {
    id: "electrolyse",
    label: "Électrolyse",
    audiences: ["femme", "homme"],
    services: [
      { name: "Électrolyse 10min", price: "35€", duration: "10min" },
      { name: "Électrolyse 20min", price: "50€", duration: "20min" },
      { name: "Électrolyse 30min", price: "60€", duration: "30min" },
    ],
  },
];

export const audienceLabels: Record<Audience, string> = {
  femme: "Prestations Femme",
  homme: "Prestations Homme",
};

export const audienceCategoryOrder: Record<Audience, string[]> = {
  femme: ["laser", "electrolyse", "peeling", "visage", "coreen", "sourcils", "smile"],
  homme: ["laser", "electrolyse", "visage", "smile"],
};

export const audienceHref = (audience: Audience) => `/prestations/${audience}`;

export const categoryHref = (audience: Audience, categoryId: string) =>
  `/prestations/${audience}/${categoryId}`;

export const featuredServices = [
  {
    id: "electrolyse",
    name: "Électrolyse",
    categoryId: "electrolyse",
    description:
      "L'électrolyse élimine durablement les poils un à un à la racine, même les plus fins, clairs ou résistants.",
  },
  {
    id: "peeling-lift",
    name: "Peeling lifting +",
    categoryId: "peeling",
    description:
      "Le Peeling lifting + lisse les ridules, raffermit la peau et ravive l'éclat du teint pour une peau plus lisse, tonique et lumineuse.",
  },
  {
    id: "dentaire",
    name: "Esthétique dentaire",
    categoryId: "smile",
    description:
      "L'esthétique dentaire ravive l'éclat naturel des dents pour un sourire plus lumineux, harmonieux et éclatant.",
  },
  {
    id: "rehydratation",
    name: "Soin sur mesure réhydratation globale",
    categoryId: "visage",
    description:
      "Un soin personnalisé qui hydrate intensément, apaise les tiraillements et redonne souplesse, confort et éclat aux peaux déshydratées.",
  },
  {
    id: "laser",
    name: "Laser diode / yag",
    categoryId: "laser",
    description:
      "Une épilation durable qui cible le poil à la racine pour réduire progressivement la repousse et retrouver une peau plus douce.",
  },
] as const;

// Fiche Google de Studio Zahaa, ouverte directement sur l'onglet « Avis ».
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Studio+Zahaa/data=!4m8!3m7!1s0x47e66f001cbfb799:0xe973dd9292f7e3f8!8m2!3d48.9080067!4d2.2921155!9m1!1b1!16s%2Fg%2F11wr077wqp?hl=fr";

export const reviews = [
  {
    name: "Delphine",
    text: "Une super première expérience avec Nina, très douce, pédagogue, humaine. Un résultat top à renouveler très vite. Allez-y les yeux fermés !",
  },
  {
    name: "Melissa",
    text: "Très contente du résultat ! Mes sourcils sont bien nets, bien dessinés. Le travail est propre, précis. Je recommande les yeux fermés !",
  },
  {
    name: "Benahmed Nourine",
    text: "Au top, très professionnel et à l'écoute. J'ai réalisé un soin visage avec lifting coréen. Je recommande à 100% !",
  },
  {
    name: "Mina",
    text: "Personne très sérieuse, professionnelle, très à l'écoute. Je recommande vivement !",
  },
  {
    name: "Iphone",
    text: "Choquée du résultat au bout de la 2e séance laser, plus aucun poil sur les jambes et aisselles. Spectaculaire !",
  },
];

export const BOOKSY_URL =
  "https://booksy.com/fr-fr/38075_studio-zahaa_instituts-de-beaute_99187_asnieres-sur-seine";
