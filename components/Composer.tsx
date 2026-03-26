import { useMemo, useState } from "react";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";
import {
  composerAdvertisingProjects,
  composerFilmItems,
  composerGenreLabels,
  composerGenreOrder,
  type ComposerGenreKey,
} from "@/constants/composer";
import { extractVimeoId } from "./VideoPlayer";

type MainTab = "film" | "advertising";

const Composer = () => {
  const { language } = useLanguage();
  const t = texts[language].composer;

  const [mainTab, setMainTab] = useState<MainTab>("film");
  const [genre, setGenre] = useState<ComposerGenreKey>("cinematic");
  const [activeFilmId, setActiveFilmId] = useState<number>(
    composerFilmItems.find((i) => i.genre === "cinematic")?.id ?? 1,
  );
  const [activeAdLink, setActiveAdLink] = useState<string | null>(
    composerAdvertisingProjects[0]?.link ?? null,
  );

  const filteredFilm = useMemo(
    () => composerFilmItems.filter((item) => item.genre === genre),
    [genre],
  );

  const activeFilm =
    composerFilmItems.find((i) => i.id === activeFilmId) ?? filteredFilm[0];

  const embedUrl = activeFilm
    ? `https://www.youtube.com/embed/${activeFilm.youtubeId}`
    : null;

  const activeAdProject =
    composerAdvertisingProjects.find((p) => p.link === activeAdLink) ??
    composerAdvertisingProjects[0];
  const vimeoEmbedId = activeAdLink ? extractVimeoId(activeAdLink) : null;

  return (
    <section id="composer" className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-yellow-400 font-semibold text-lg">{t.subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">{t.title}</h2>
        <p className="text-gray-300 mt-3 md:max-w-2xl">{t.description}</p>

        <div className="mt-6 inline-flex flex-wrap gap-2 rounded-full bg-gray-800 p-1 text-sm">
          <button
            type="button"
            onClick={() => setMainTab("film")}
            className={`px-4 py-2 rounded-full transition ${
              mainTab === "film"
                ? "bg-yellow-400 text-gray-900 font-semibold"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {t.tabFilm}
          </button>
          <button
            type="button"
            onClick={() => setMainTab("advertising")}
            className={`px-4 py-2 rounded-full transition ${
              mainTab === "advertising"
                ? "bg-yellow-400 text-gray-900 font-semibold"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {t.tabAdvertising}
          </button>
        </div>
      </div>

      {mainTab === "film" && (
        <div className="max-w-6xl mx-auto mt-8">
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2 -mx-1 px-1">
            {composerGenreOrder.map((key) => {
              const label =
                language === "es"
                  ? composerGenreLabels[key].es
                  : composerGenreLabels[key].en;
              const isActive = key === genre;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setGenre(key);
                    const first = composerFilmItems.find((i) => i.genre === key);
                    setActiveFilmId(first?.id ?? activeFilmId);
                  }}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm border transition ${
                    isActive
                      ? "border-yellow-400 bg-yellow-400/10 text-yellow-300"
                      : "border-gray-600 text-gray-300 hover:border-gray-400"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col gap-2 max-h-[min(70vh,520px)] overflow-y-auto pr-1 custom-scrollbar">
              {filteredFilm.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveFilmId(item.id)}
                  className={`w-full text-left rounded-lg p-4 border transition ${
                    item.id === activeFilm?.id
                      ? "bg-yellow-100/10 border-yellow-400 shadow-md"
                      : "bg-gray-800/50 border-gray-700 hover:bg-gray-800"
                  }`}
                >
                  <p className="font-semibold text-white text-sm leading-snug">
                    {item.title}
                  </p>
                </button>
              ))}
            </div>

            <div className="md:w-1/2 flex-shrink-0">
              <div className="md:sticky md:top-24">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={activeFilm?.title ?? "Video"}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm p-4">
                      {t.pickTrack}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mainTab === "advertising" && (
        <div className="max-w-6xl mx-auto mt-8">
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl">
            {t.advertisingBlurb}
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col gap-2 max-h-[min(70vh,520px)] overflow-y-auto pr-1 custom-scrollbar">
              {composerAdvertisingProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveAdLink(project.link)}
                  className={`w-full text-left rounded-lg p-4 border transition ${
                    project.link === activeAdProject?.link
                      ? "bg-yellow-100/10 border-yellow-400 shadow-md"
                      : "bg-gray-800/50 border-gray-700 hover:bg-gray-800"
                  }`}
                >
                  <p className="font-semibold text-white text-sm leading-snug">
                    {project.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{project.credits}</p>
                </button>
              ))}
            </div>

            <div className="md:w-1/2 flex-shrink-0">
              <div className="md:sticky md:top-24">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                  {vimeoEmbedId ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${vimeoEmbedId}`}
                      title={activeAdProject?.title ?? "Vimeo"}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm p-4">
                      {t.pickTrack}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Composer;
