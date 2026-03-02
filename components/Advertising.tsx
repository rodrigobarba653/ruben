import { useState } from "react";
import ProjectList from "./ProjectList";
import VideoPlayer from "./VideoPlayer";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

import { publicidadProjects } from "@/constants/projects";

const Advertising = () => {
  const { language } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(
    publicidadProjects[0]?.link ?? null,
  );

  const handleProjectClick = (link: string) => {
    setActiveVideo(link);
  };

  return (
    <section id="advertising" className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-400 font-semibold text-lg">
          {texts[language].multimedia.subtitle}
        </p>
        <h2 className="text-4xl font-bold mt-2">
          {texts[language].multimedia.sectionTitle}
        </h2>
        <p className="text-gray-300 mt-2 md:w-2/3">
          {texts[language].multimedia.description}
        </p>

        <ProjectList
          projects={publicidadProjects}
          onProjectClick={handleProjectClick}
          activeVideo={activeVideo}
        />

        <VideoPlayer videoUrl={activeVideo} />
      </div>
    </section>
  );
};

export default Advertising;

