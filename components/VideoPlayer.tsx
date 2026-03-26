import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

export function extractVimeoId(url: string): string | null {
  const manage = url.match(/manage\/videos\/(\d+)/);
  if (manage) return manage[1];
  const player = url.match(/player\.vimeo\.com\/video\/(\d+)/);
  if (player) return player[1];
  const standard = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (standard) return standard[1];
  return null;
}

interface VideoPlayerProps {
  videoUrl: string | null;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const { language } = useLanguage();

  if (!videoUrl) {
    return (
      <p className="text-gray-400 mt-4">
        {texts[language].videoPlayer.select}
      </p>
    );
  }

  const vimeoId = extractVimeoId(videoUrl);
  if (!vimeoId) {
    return (
      <p className="text-gray-400 mt-4">
        {texts[language].videoPlayer.select}
      </p>
    );
  }

  return (
    <div className="mt-6">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        width="100%"
        height="400"
        title="Vimeo"
        allow="autoplay; fullscreen"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default VideoPlayer;
