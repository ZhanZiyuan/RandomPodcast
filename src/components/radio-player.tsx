"use client";

import { useState, useEffect, useRef } from 'react';
import type { PodcastEpisode } from '@/types';
import { EquilateralTriangle } from '@/components/penrose-triangle';
import { AppHeader } from '@/components/app-header';
import { RadioCard } from '@/components/radio/card';
import { useToast } from '@/hooks/use-toast';

const SEARCH_KEYWORDS_EN = [
  'technology', 'design', 'history', 'true crime', 'comedy', 
  'science', 'philosophy', 'startups', 'jazz', 'lo-fi', 
  'news', 'coding', 'minimalism', 'architecture', 'space',
  'storytelling', 'interview', 'education', 'business'
];
const SEARCH_KEYWORDS_CN = [
  '科技', '设计', '历史', '真实犯罪', '喜剧', '科学', 
  '哲学', '创业', '故事', '新闻', '编程', '极简主义',
  '建筑', '太空', '音乐', '艺术', '文化', '播客'
];

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isSystemDark);
    document.documentElement.classList.toggle('dark', isSystemDark);
    
    const tuneInOnLoad = async () => {
      await tuneInRandomly();
    }
    tuneInOnLoad();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const tuneInRandomly = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsLoading(true);
    setIsPlaying(false);
    
    try {
      const isChinese = Math.random() > 0.5;
      const lang = isChinese ? 'zh' : 'en';
      const keywords = isChinese ? SEARCH_KEYWORDS_CN : SEARCH_KEYWORDS_EN;
      const selectedKeyword = keywords[Math.floor(Math.random() * keywords.length)];
      
      const offset = Math.floor(Math.random() * 20);
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(selectedKeyword)}&media=podcast&entity=podcastEpisode&limit=1&offset=${offset}&lang=${lang}&country=${isChinese ? 'CN' : 'US'}`
      );
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        
        const newEpisode: PodcastEpisode = {
          trackName: result.trackName || 'Unknown Episode',
          collectionName: result.collectionName || 'Unknown Podcast',
          artistName: result.artistName || 'Unknown Artist',
          artworkUrl600: result.artworkUrl600 || '',
          episodeUrl: result.episodeUrl || '',
          feedUrl: result.feedUrl
        };
        
        if(!newEpisode.episodeUrl) {
            console.warn('Episode has no stream URL, retrying...');
            setTimeout(tuneInRandomly, 500);
            return;
        }

        setCurrentEpisode(newEpisode);

        if (audioRef.current) {
          audioRef.current.src = newEpisode.episodeUrl;
          audioRef.current.load();
          const playPromise = audioRef.current.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => setIsPlaying(true))
              .catch(error => {
                console.log("Auto-play was prevented:", error);
                setIsPlaying(false);
              });
          }
        }
      } else {
        console.warn('No results found for keyword, retrying...');
        setTimeout(tuneInRandomly, 500); 
        return;
      }
    } catch (error) {
      console.error('Error fetching podcast:', error);
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Could not fetch new station. Please check your connection.",
      });
      // Do not retry on error to avoid loops
    } finally {
      setIsLoading(false);
    }
  };
  
  const togglePlay = () => {
    if (!audioRef.current || isLoading) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!currentEpisode) {
        tuneInRandomly();
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Play error:", e));
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMutedState = !isMuted;
    audioRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };
  
  return (
    <div className="min-h-screen w-full transition-colors duration-500 overflow-hidden relative font-sans bg-background text-foreground">
      <audio 
        ref={audioRef} 
        onEnded={tuneInRandomly} // Auto-scan for next episode when one finishes
        onError={(e) => {
          console.error("Audio playback error:", e);
          setIsPlaying(false);
          toast({ variant: "destructive", title: "Playback Error", description: "Could not play audio." });
        }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-[0.03] dark:opacity-[0.05]">
           <div className="w-full h-full animate-spin-slow">
              <EquilateralTriangle className="w-full h-full text-foreground" />
           </div>
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 text-primary opacity-10 animate-float">
           <EquilateralTriangle className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-10 w-48 h-48 text-primary opacity-10 animate-float-delayed">
           <EquilateralTriangle className="w-full h-full rotate-90" />
        </div>
        <div className="absolute bottom-1/2 right-1/4 w-24 h-24 text-accent opacity-5 animate-float">
           <EquilateralTriangle className="w-full h-full rotate-45" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 text-accent opacity-5 animate-float-delayed">
           <EquilateralTriangle className="w-full h-full -rotate-45" />
        </div>

        <div className="absolute inset-0 bg-transparent z-10 backdrop-blur-[1px]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")' }}>
        </div>
      </div>

      <AppHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="relative z-40 flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-4">
        <RadioCard
          isLoading={isLoading}
          isPlaying={isPlaying}
          isMuted={isMuted}
          currentEpisode={currentEpisode}
          togglePlay={togglePlay}
          toggleMute={toggleMute}
          tuneInRandomly={tuneInRandomly}
        />
        
        <div className="mt-8 text-center opacity-40 font-mono text-xs">
          <p>STEREO RECEIVER • MODEL NO. 2025-X</p>
          <p className="mt-1">BROADCASTING FROM THE VOID</p>
        </div>
      </main>
    </div>
  );
}
