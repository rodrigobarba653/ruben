import { useState } from "react";
import Image from "next/image";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

import soundDesignProjects from "@/constants/soundDesign";

type TabKey = "cine" | "games" | "videos";

const tabConfig: { key: TabKey; labelEn: string; labelEs: string; category: string }[] =
  [
    { key: "cine", labelEn: "Film & TV", labelEs: "Cine & TV", category: "Cine & TV" },
    { key: "games", labelEn: "Video Games", labelEs: "Videojuegos", category: "Video Game" },
    { key: "videos", labelEn: "Videoclips", labelEs: "Videoclips", category: "Videoclips" },
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
        <div className="inline-flex rounded-full bg-gray-200 p-1 text-sm">
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
                className={`px-4 py-1 rounded-full transition ${
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
        <div className="md:w-1/2 flex flex-col gap-3">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveId(project.id)}
              className={`w-full text-left rounded-lg p-4 border transition ${
                project.id === activeId
                  ? "bg-yellow-100 border-yellow-400 shadow-md"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                {project.category}
              </p>
              <p className="font-semibold text-gray-900">{project.title}</p>
              <p className="text-sm text-gray-600 mt-1">{project.role}</p>
            </button>
          ))}
        </div>

        {/* Right: Active image (sticky on desktop) */}
        <div className="md:w-1/2 flex-shrink-0">
          <div className="md:sticky md:top-24">
            <div className="relative w-full h-72 md:h-[560px] rounded-2xl overflow-hidden  flex items-center justify-center bg-gray-900">
              {activeProject ? (
                activeProject.image ? (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                ) : activeProject.videoUrl ? (
                  <iframe
                    src={activeProject.videoUrl}
                    title={activeProject.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <p className="text-gray-400 text-sm">
                    Select a project to preview the artwork or video.
                  </p>
                )
              ) : (
                <p className="text-gray-400 text-sm">
                  Select a project to preview the artwork or video.
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
