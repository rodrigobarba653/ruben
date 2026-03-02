import TrackItem from "./TrackItem";

interface Track {
  id: number;
  artist: string;
  album?: string;
  credits: string;
  link: string;
   image?: string;
}

interface MusicListProps {
  tracks: Track[];
  activeTrack: number | null;
  onTrackClick: (id: number) => void;
}

const MusicList = ({ tracks, activeTrack, onTrackClick }: MusicListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          isActive={track.id === activeTrack}
          onClick={() => onTrackClick(track.id)}
        />
      ))}
    </div>
  );
};

export default MusicList;
