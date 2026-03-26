import { Fragment, useState } from "react";
import Image from "next/image";
import { IoVideocam } from "react-icons/io5";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

import soundDesignProjects from "@/constants/soundDesign";

type SoundProject = (typeof soundDesignProjects)[number];

/** Local poster or derived thumb for video (mobile card strip). */
function getCardThumbSrc(project: SoundProject): string | null {
  if (project.image) return project.image;
  const v = project.videoUrl;
  if (!v) return null;
  const yt = v.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/mqdefault.jpg`;
  const vm = v.match(/vimeo\.com\/video\/(\d+)/);
  if (vm) return `https://vumbnail.com/${vm[1]}.jpg`;
  return null;
}

/** Opens in new tab: YouTube watch, Vimeo page, or local poster image. */
function getProjectExternalUrl(project: SoundProject): string | null {
  if (project.videoUrl) {
    const v = project.videoUrl;
    const yt = v.match(/youtube\.com\/embed\/([^?&/]+)/);
    if (yt) {
      const id = yt[1];
      const start = v.match(/[?&]start=(\d+)/);
      const tParam = start ? `&t=${start[1]}s` : "";
      return `https://www.youtube.com/watch?v=${id}${tParam}`;
    }
    const vm = v.match(/vimeo\.com\/video\/(\d+)/);
    if (vm) return `https://vimeo.com/${vm[1]}`;
  }
  if (project.image) return project.image;
  return null;
}

type TabKey = "cine" | "videos" | "advertising" | "games";

const tabConfig: {
  key: TabKey;
  labelEn: string;
  labelEs: string;
  category: string;
}[] = [
  {
    key: "cine",
    labelEn: "Film & TV",
    labelEs: "Cine & TV",
    category: "Cine & TV",
  },
  {
    key: "videos",
    labelEn: "Music Videos",
    labelEs: "Videoclips",
    category: "Videoclips",
  },
  {
    key: "advertising",
    labelEn: "Advertising",
    labelEs: "Publicidad",
    category: "Advertising",
  },
  {
    key: "games",
    labelEn: "Video Games",
    labelEs: "Videojuegos",
    category: "Video Game",
  },
];

const SoundDesign = () => {
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<TabKey>("cine");

  const currentTab = tabConfig.find((tab) => tab.key === activeTab)!;
  const filteredProjects = soundDesignProjects.filter(
    (project) => project.category === currentTab.category,
  );

  const [activeId, setActiveId] = useState<number | null>(
    filteredProjects[0]?.id ?? null,
  );

  const activeProject =
    soundDesignProjects.find((project) => project.id === activeId) ||
    filteredProjects[0] ||
    null;

  return (
    <section id="sound-design" className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 text-center mx-auto mb-4">
          <h2 className="text-gray-500 text-lg">
            {texts[language].soundDesign.subtitle}
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">
            {texts[language].soundDesign.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-4">
        {/* Tabs */}
        <div className="inline-flex flex-wrap gap-1 rounded-full bg-gray-200 p-1 text-sm max-w-full">
          {tabConfig.map((tab) => {
            const label = language === "es" ? tab.labelEs : tab.labelEn;
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  const nextProjects = soundDesignProjects.filter(
                    (p) => p.category === tab.category,
                  );
                  setActiveId(nextProjects[0]?.id ?? null);
                }}
                className={`px-3 sm:px-4 py-1 rounded-full transition ${
                  isActive
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "text-gray-700 hover:bg-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row gap-8">
        {/* Left: List of projects */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          {filteredProjects.map((project) => {
            const thumbSrc = getCardThumbSrc(project);
            const thumbRemote = thumbSrc?.startsWith("http") ?? false;
            const externalHref = getProjectExternalUrl(project);
            const cardClass = `w-full text-left rounded-lg border transition flex gap-3 p-3 items-center md:block md:p-4 no-underline text-inherit ${
              project.id === activeId
                ? "bg-yellow-100 border-yellow-400 shadow-md"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`;

            const cardBody = (
              <>
                <div className="relative w-[7.25rem] aspect-video shrink-0 rounded-lg overflow-hidden bg-gray-200 md:hidden">
                  {thumbSrc ? (
                    <Image
                      src={thumbSrc}
                      alt=""
                      fill
                      sizes="116px"
                      className="object-cover"
                      unoptimized={thumbRemote}
                    />
                  ) : (
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-gray-500">
                      <IoVideocam className="text-xl" aria-hidden />
                      <span className="text-[10px] font-medium uppercase tracking-wide">
                        {language === "es" ? "Vídeo" : "Video"}
                      </span>
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1 md:w-full">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    {project.category}
                  </p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                    {project.title}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1 leading-snug">
                    {project.role}
                  </p>
                </div>
              </>
            );

            return (
              <Fragment key={project.id}>
                {externalHref ? (
                  <a
                    href={externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} md:hidden`}
                    onClick={() => setActiveId(project.id)}
                  >
                    {cardBody}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={`${cardClass} md:hidden`}
                    onClick={() => setActiveId(project.id)}
                  >
                    {cardBody}
                  </button>
                )}
                <button
                  type="button"
                  className={`${cardClass} hidden md:block`}
                  onClick={() => setActiveId(project.id)}
                >
                  {cardBody}
                </button>
              </Fragment>
            );
          })}
        </div>

        {/* Right: Active image / video (desktop only — mobile uses card thumbs) */}
        <div className="hidden md:block md:w-1/2 flex-shrink-0">
          <div className="md:sticky md:top-24">
            <div className="relative w-full h-72 md:h-[560px] rounded-2xl overflow-hidden  flex items-center justify-center bg-gray-900">
              {activeProject ? (
                activeProject.videoUrl ? (
                  <iframe
                    src={activeProject.videoUrl}
                    title={activeProject.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : activeProject.image ? (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                ) : (
                  <p className="text-gray-400 text-sm px-4 text-center">
                    {language === "es"
                      ? "Selecciona un proyecto para ver imagen o video."
                      : "Select a project to preview artwork or video."}
                  </p>
                )
              ) : (
                <p className="text-gray-400 text-sm px-4 text-center">
                  {language === "es"
                    ? "Selecciona un proyecto para ver imagen o video."
                    : "Select a project to preview artwork or video."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundDesign;
