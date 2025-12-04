"use client";

import { Github, Moon, Radio, Sun } from "lucide-react";

interface AppHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const AppHeader = ({ darkMode, toggleDarkMode }: AppHeaderProps) => {
  return (
    <nav className="relative z-50 flex justify-between items-center p-6 w-full">
      <div className="flex items-center gap-2">
        <Radio className="w-6 h-6 text-primary" />
        <span className="font-bold text-xl tracking-tighter text-primary">
          Random Podcast
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <a
          href="https://github.com/ZhanZiyuan/RandomPodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="View source on GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};
