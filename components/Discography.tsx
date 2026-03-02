import { useState } from "react";
import TrackItem from "./TrackItem";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

import tracks from "@/constants/tracks"; // Importing the track list

const Discography = () => {
  const { language } = useLanguage();
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const handleTrackClick = (id: number) => {
    setActiveTrack((prev) => (prev === id ? null : id)); // Toggle selection
  };

  return (
    <section id="discography" className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Section Title */}
        <div className="md:w-1/2 text-center mx-auto mb-12">
          <h2 className="text-gray-500 text-lg">
            {texts[language].discography.subtitle}
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">
            {texts[language].discography.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((track) => (
            <TrackItem
              key={track.id}
              track={track}
              isActive={track.id === activeTrack}
              onClick={() => handleTrackClick(track.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
