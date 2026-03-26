/** Film & TV composition reels — YouTube embed IDs */
export type ComposerGenreKey =
  | "cinematic"
  | "drama"
  | "thriller"
  | "action"
  | "world"
  | "comedy"
  | "documentary";

export const composerGenreLabels: Record<
  ComposerGenreKey,
  { en: string; es: string }
> = {
  cinematic: {
    en: "Cinematic / Orchestral",
    es: "Cinemático / Orquestal",
  },
  drama: {
    en: "Drama / Emotional",
    es: "Drama / Emocional",
  },
  thriller: {
    en: "Thriller / Suspense",
    es: "Thriller / Suspenso",
  },
  action: {
    en: "Action / Rock",
    es: "Acción / Rock",
  },
  world: {
    en: "World Music / Latin",
    es: "Música del mundo / Latina",
  },
  comedy: {
    en: "Comedy / Background",
    es: "Comedia / Fondo",
  },
  documentary: {
    en: "Documentary / Atmospheric",
    es: "Documental / Atmosférico",
  },
};

export const composerGenreOrder: ComposerGenreKey[] = [
  "cinematic",
  "drama",
  "thriller",
  "action",
  "world",
  "comedy",
  "documentary",
];

export interface ComposerFilmItem {
  id: number;
  genre: ComposerGenreKey;
  title: string;
  youtubeId: string;
}

export const composerFilmItems: ComposerFilmItem[] = [
  {
    id: 1,
    genre: "cinematic",
    title: "Human Stories — Main Theme (All I Ever Wanted) (Emmy Winner)",
    youtubeId: "dNC8Y_MGrlI",
  },
  {
    id: 2,
    genre: "cinematic",
    title: "Tiempo — Main Theme (Cola de Rata)",
    youtubeId: "70MododkVig",
  },
  {
    id: 3,
    genre: "cinematic",
    title: "Horizonte — End Theme (Cola de Rata)",
    youtubeId: "8g8GdIMj2Gc",
  },
  {
    id: 4,
    genre: "cinematic",
    title: "Memories — Opening Theme (See you Later)",
    youtubeId: "wuvMpx18TGk",
  },
  {
    id: 5,
    genre: "cinematic",
    title: "Goodbye — End Theme (See you Later)",
    youtubeId: "R-YUQjgG0Eg",
  },
  {
    id: 6,
    genre: "drama",
    title: "Memories — Main Theme (See you Later)",
    youtubeId: "Ksh_RC4v9AQ",
  },
  {
    id: 7,
    genre: "drama",
    title: "Lluvia — Main Theme (Va por Diego) (Cannes World Winner)",
    youtubeId: "-oTJRu8JT08",
  },
  {
    id: 8,
    genre: "drama",
    title: "Silence — End Credits (La Llamada)",
    youtubeId: "qBojHI9SZPI",
  },
  {
    id: 9,
    genre: "drama",
    title: "Sunset — Emotional Cue (Chavorrucos)",
    youtubeId: "TH2fq0OUCcQ",
  },
  {
    id: 10,
    genre: "thriller",
    title: "Destello — Main Theme (Culpables)",
    youtubeId: "l_T4scgiX50",
  },
  {
    id: 11,
    genre: "thriller",
    title: "In the Shadow — Main Theme (Step 9)",
    youtubeId: "2HALs_dHyFI",
  },
  {
    id: 12,
    genre: "thriller",
    title: "Al Filo — Suspense Cue (Despedida de Soltera)",
    youtubeId: "JBood2F_gYI",
  },
  {
    id: 13,
    genre: "thriller",
    title: "Pressure — Tension Cue (Despedida de Soltera)",
    youtubeId: "keUoTa5o8GY",
  },
  {
    id: 14,
    genre: "thriller",
    title: "Secret — End Credits (Step 9)",
    youtubeId: "aECyBYLA7E8",
  },
  {
    id: 15,
    genre: "action",
    title: "Moto Raider — Character Theme (Chavorrucos)",
    youtubeId: "zZIbH6rj9HQ",
  },
  {
    id: 16,
    genre: "action",
    title: "Pulse — Tension Build (La Llamada)",
    youtubeId: "whUDhtlqgHg",
  },
  {
    id: 17,
    genre: "action",
    title: "Back to the Wild — Action Cue (Chavorrucos)",
    youtubeId: "42v7JSsV5Pw",
  },
  {
    id: 18,
    genre: "action",
    title: "King of Funk — Action Cue (Chavorrucos)",
    youtubeId: "aSmoZ0wgeMs",
  },
  {
    id: 19,
    genre: "world",
    title: "El Malandro — Latin Dance Cue (Chavorrucos)",
    youtubeId: "f5Ot1IKVjtc",
  },
  {
    id: 20,
    genre: "world",
    title: "Camina — Latin Groove (Va por Diego) (Cannes World Winner)",
    youtubeId: "T5WGIbMvXGQ",
  },
  {
    id: 21,
    genre: "world",
    title: "Tierra — Latin Groove (Hasta la Raíz)",
    youtubeId: "qqSBMKjmbzA",
  },
  {
    id: 22,
    genre: "world",
    title: "Lleva — Latin Groove (Hacedores de Nostalgia)",
    youtubeId: "wA8lAe7msFI",
  },
  {
    id: 23,
    genre: "comedy",
    title: "The Unexpected — Main Theme (HFTE)",
    youtubeId: "kgsGSiCQOzc",
  },
  {
    id: 24,
    genre: "comedy",
    title: "A Small Problem — Background Cue (HFTE)",
    youtubeId: "G3wA0VPvJSw",
  },
  {
    id: 25,
    genre: "comedy",
    title: "Foggy Night — Background Cue (Chavorrucos)",
    youtubeId: "GOoGfDIGYRk",
  },
  {
    id: 26,
    genre: "comedy",
    title: "Funky Dog — Background Cue (Chavorrucos)",
    youtubeId: "c9x3KwWtTiI",
  },
  {
    id: 27,
    genre: "comedy",
    title: "Paso a paso — Background Cue (Chavorrucos)",
    youtubeId: "t9VApr1_7Rs",
  },
  {
    id: 28,
    genre: "documentary",
    title:
      "Horizonts — Emotional Cue (All I Ever Wanted) (Emmy Winner 2025)",
    youtubeId: "Vn78n1R-dAg",
  },
  {
    id: 29,
    genre: "documentary",
    title: "Aire — Main Theme (Justicia para Sanar)",
    youtubeId: "gqGquPLxo2s",
  },
  {
    id: 30,
    genre: "documentary",
    title: "Echoes — Piano (All I Ever Wanted) (Emmy Winner 2025)",
    youtubeId: "8-R7D9_gUqE",
  },
  {
    id: 31,
    genre: "documentary",
    title:
      "Distant — Emotional Cue (All I Ever Wanted) (Emmy Winner 2025)",
    youtubeId: "qyHwgqZCdIE",
  },
];

/** Composition for advertising — public Vimeo URLs (IDs from client links) */
export const composerAdvertisingProjects = [
  {
    id: 1,
    title: "Coca Cola — El Amor multiplica",
    credits: "Composer",
    link: "https://vimeo.com/996881919",
  },
  {
    id: 2,
    title: "Total Play — Enganchados",
    credits: "Composer",
    link: "https://vimeo.com/996946669",
  },
  {
    id: 3,
    title: "Bring It",
    credits: "Composer",
    link: "https://vimeo.com/350893124",
  },
  {
    id: 4,
    title: "Gran Tradición — Receta",
    credits: "Composer",
    link: "https://vimeo.com/997225758",
  },
  {
    id: 5,
    title: "Nutrioli — Bienestar",
    credits: "Composer",
    link: "https://vimeo.com/997122627",
  },
  {
    id: 6,
    title: "Sesame Street — Compost",
    credits: "Composer",
    link: "https://vimeo.com/274585051",
  },
  {
    id: 7,
    title: "Sesame Street — Rain",
    credits: "Composer",
    link: "https://vimeo.com/12311504",
  },
  {
    id: 8,
    title: "Fuerza México",
    credits: "Composer",
    link: "https://vimeo.com/224887145",
  },
  {
    id: 9,
    title: "Gracias Venezuela",
    credits: "Composer",
    link: "https://vimeo.com/148104192",
  },
  {
    id: 10,
    title: "Latin Us — Audiologo",
    credits: "Composer",
    link: "https://vimeo.com/748621398",
  },
];
