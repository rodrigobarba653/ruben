import Image from "next/image";
import { useState } from "react";
import { IoImageOutline, IoPause, IoPlay } from "react-icons/io5";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

interface Track {
  id: number;
  artist: string;
  album?: string;
  credits: string;
  link: string;
  image?: string;
}

interface TrackItemProps {
  track: Track;
  isActive: boolean;
  onClick: () => void;
}

const TrackItem = ({ track, isActive, onClick }: TrackItemProps) => {
  const { language } = useLanguage();
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <a
      href={track.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col gap-3 p-4 rounded-lg transition ${
        isActive ? "bg-yellow-100 shadow-lg" : "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      <div className="w-full relative h-36 rounded-md overflow-hidden bg-gray-300">
        {track.image && !hasImageError ? (
          <Image
            src={track.image}
            alt={`${track.artist}${track.album ? ` - ${track.album}` : ""}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-3 bg-gray-200 text-center">
            <IoImageOutline
              className="text-3xl text-gray-400 shrink-0"
              aria-hidden
            />
            <span className="text-xs font-medium text-gray-500 leading-tight">
              {texts[language].discography.imageNotAvailable}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-start gap-3">
        {/* Play/Pause Icon */}
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0 ${
            isActive ? "bg-yellow-400" : "bg-gray-600"
          }`}
        >
          {isActive ? (
            <IoPause className="text-white text-lg" />
          ) : (
            <IoPlay className="text-white text-lg" />
          )}
        </div>

        {/* Track Details */}
        <div className="flex flex-col text-left">
          <p
            className={`font-semibold line-clamp-2 ${
              isActive ? "text-gray-900" : "text-gray-700"
            }`}
          >
            {track.artist} {track.album && `- ${track.album}`}
          </p>
          <p className="text-gray-500 text-sm">{track.credits}</p>
        </div>
      </div>
    </a>
  );
};

export default TrackItem;
