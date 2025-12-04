import type { PodcastEpisode } from "@/types";
import { SpeakerGrille } from "./speaker-grille";
import { DisplayScreen } from "./display-screen";
import { Controls } from "./controls";

interface RadioCardProps {
    isLoading: boolean;
    isPlaying: boolean;
    isMuted: boolean;
    currentEpisode: PodcastEpisode | null;
    togglePlay: () => void;
    toggleMute: () => void;
    tuneInRandomly: () => void;
}

const Screw = () => (
    <div className="w-3 h-3 rounded-full bg-muted flex items-center justify-center"><div className="w-1.5 h-0.5 bg-muted-foreground/50 rotate-45"></div></div>
)

export const RadioCard = (props: RadioCardProps) => {
    return (
        <div className="relative w-full max-w-md md:max-w-lg aspect-[4/5] md:aspect-auto md:h-[640px] rounded-[3rem] p-8 shadow-2xl transition-all duration-500 flex flex-col justify-between bg-card border dark:border-white/10">
          <div className="absolute top-6 left-6"><Screw /></div>
          <div className="absolute top-6 right-6"><Screw /></div>
          <div className="absolute bottom-6 left-6"><Screw /></div>
          <div className="absolute bottom-6 right-6"><Screw /></div>

          <SpeakerGrille />
          
          <DisplayScreen 
            isLoading={props.isLoading}
            isPlaying={props.isPlaying}
            currentEpisode={props.currentEpisode}
          />

          <Controls
            isLoading={props.isLoading}
            isPlaying={props.isPlaying}
            isMuted={props.isMuted}
            togglePlay={props.togglePlay}
            toggleMute={props.toggleMute}
            tuneInRandomly={props.tuneInRandomly}
          />
        </div>
    );
};
