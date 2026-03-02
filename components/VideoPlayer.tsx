interface VideoPlayerProps {
  videoUrl: string | null;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  if (!videoUrl)
    return (
      <p className="text-gray-400 mt-4">
        Selecciona un proyecto para ver el video.
      </p>
    );

  const vimeoId = videoUrl.split("/").pop();

  return (
    <div className="mt-6">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        width="100%"
        height="400"
        allow="autoplay; fullscreen"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
