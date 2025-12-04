import type { PodcastEpisode } from "@/types";
import { Loader2, Signal } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface DisplayScreenProps {
  isLoading: boolean;
  isPlaying: boolean;
  currentEpisode: PodcastEpisode | null;
}

const noCoverArt = PlaceHolderImages.find(p => p.id === 'no-cover');

export const DisplayScreen = ({ isLoading, isPlaying, currentEpisode }: DisplayScreenProps) => {
  return (
    <div className="flex-1 w-full rounded-2xl mb-6 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center border-4 bg-background/50 dark:bg-black/50 border-white/80 dark:border-gray-700 shadow-inner">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

      {isLoading ? (
        <div className="flex flex-col items-center gap-3 animate-pulse">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <span className="font-mono text-sm opacity-60">TUNING FREQUENCY...</span>
        </div>
      ) : currentEpisode ? (
        <>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg mb-4 overflow-hidden border-2 border-white/20 relative">
            <Image 
              src={currentEpisode.artworkUrl600} 
              alt={currentEpisode.collectionName || "Podcast cover art"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 96px, 128px"
              data-ai-hint="podcast cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = noCoverArt?.imageUrl || '';
              }}
            />
          </div>
          
          <div className="w-full overflow-hidden">
            <h2 className="font-bold text-lg md:text-xl line-clamp-2 mb-1 text-card-foreground">
              {currentEpisode.trackName}
            </h2>
            <p className="font-mono text-xs md:text-sm uppercase tracking-wider mb-2 text-primary">
              {currentEpisode.collectionName}
            </p>
            <div className="flex justify-center items-center gap-1 h-4">
              {isPlaying && (
                <>
                  <div className="w-1 h-3 bg-primary animate-[bounce_1s_infinite]"></div>
                  <div className="w-1 h-4 bg-primary animate-[bounce_1.2s_infinite]"></div>
                  <div className="w-1 h-2 bg-primary animate-[bounce_0.8s_infinite]"></div>
                  <div className="w-1 h-3 bg-primary animate-[bounce_1.1s_infinite]"></div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center text-muted-foreground">
          <Signal className="w-12 h-12 mb-2 opacity-50" />
          <span className="font-mono text-sm tracking-widest">NO SIGNAL</span>
          <span className="text-xs mt-2 opacity-50">Press Scan to tune</span>
        </div>
      )}
    </div>
  );
};
