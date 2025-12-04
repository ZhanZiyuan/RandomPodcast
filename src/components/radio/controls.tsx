import { Pause, Play, SkipForward, Volume2, VolumeX } from "lucide-react";

interface ControlsProps {
    isLoading: boolean;
    isPlaying: boolean;
    isMuted: boolean;
    togglePlay: () => void;
    toggleMute: () => void;
    tuneInRandomly: () => void;
}

export const Controls = ({ isLoading, isPlaying, isMuted, togglePlay, toggleMute, tuneInRandomly }: ControlsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 items-center h-24">
      <div className="flex justify-center">
        <button 
          onClick={toggleMute}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-secondary text-secondary-foreground shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.05)]"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={togglePlay}
          disabled={isLoading || !tuneInRandomly}
          className="relative group w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-primary"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]"></div>
          
          {isPlaying ? (
            <Pause className="text-primary-foreground w-8 h-8 fill-current" />
          ) : (
            <Play className="text-primary-foreground w-8 h-8 fill-current ml-1" />
          )}
        </button>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={tuneInRandomly}
          disabled={isLoading}
          className="flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-xl transition-all active:scale-95 bg-secondary text-secondary-foreground shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.05)] disabled:opacity-50"
          aria-label="Scan for new channel"
        >
          <SkipForward size={24} />
          <span className="text-[10px] font-bold uppercase opacity-60">Scan</span>
        </button>
      </div>
    </div>
  );
};
