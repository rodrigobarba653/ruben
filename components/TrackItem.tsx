import Image from "next/image";
import { useState } from "react";
import { IoPause, IoPlay } from "react-icons/io5";
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

/** These CDNs often block or throttle Next.js image optimization fetches. */
function imageShouldUseUnoptimized(src: string) {
  return /mzstatic\.com|sndcdn\.com|soundcloud\.com|scdn\.co|bcbits\.com|img\.youtube\.com|i\.ytimg\.com/i.test(
    src,
  );
}

const TrackItem = ({ track, isActive, onClick }: TrackItemProps) => {
  const { language } = useLanguage();
  const [hasImageError, setHasImageError] = useState(false);
  const useUnoptimizedImage =
    track.image != null && imageShouldUseUnoptimized(track.image);

  const platform = track.link.includes("spotify.com")
    ? "Spotify"
    : track.link.includes("bandcamp.com")
      ? "Bandcamp"
      : track.link.includes("music.apple.com")
        ? "Apple Music"
        : track.link.includes("soundcloud.com")
          ? "SoundCloud"
          : track.link.includes("youtube.com")
            ? "YouTube"
            : "External";

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
            unoptimized={useUnoptimizedImage}
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
              {platform}
            </span>
            <div>
              <p className="text-base font-semibold leading-tight">
                {track.artist}
              </p>
              {track.album ? (
                <p className="mt-1 text-sm text-white/75 line-clamp-2">
                  {track.album}
                </p>
              ) : (
                <p className="mt-1 text-xs text-white/60">
                  {texts[language].discography.imageNotAvailable}
                </p>
              )}
            </div>
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
