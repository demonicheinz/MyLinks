"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MusicInfo } from "./music-info";

interface Track {
  title: string;
  artist: string;
  source: string;
  copyright: string;
  url: string;
}

const tracks: Track[] = [
  {
    title: "Redemption",
    artist: "Besomorph & Coopex ft. Riell",
    source: "https://ncs.io/",
    copyright: "NCS - Copyright Free Music",
    url: "/music/redemption.mp3",
  },
  {
    title: "Mortals Funk Remix",
    artist: "LXNGVX, Warriyo",
    source: "https://ncs.io/",
    copyright: "NCS - Copyright Free Music",
    url: "/music/mortals.mp3",
  },
  {
    title: "Pure Dream",
    artist: "Kashia",
    source: "https://freetouse.com/music",
    copyright: "NCS - Copyright Free Music",
    url: "/music/pure-dream.mp3",
  },
];

interface MusicPlayerProps {
  onPlayingChange: (isPlaying: boolean) => void;
  onModeChange: (mode: string) => void;
}

export function MusicPlayer({ onPlayingChange, onModeChange }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      onPlayingChange(!isPlaying);
    }
  };

  const playNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const playPrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    onModeChange(isPlaying ? "Playing music" : "No song playing");
  }, [isPlaying, onModeChange]);

  return (
    <div className="space-y-4">
      <audio ref={audioRef} src={tracks[currentTrackIndex].url} onEnded={playNext} />
      <div className="flex items-center justify-between gap-2">
        <MusicInfo
          isPlaying={isPlaying}
          currentTrack={isPlaying ? tracks[currentTrackIndex] : null}
        />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={playPrevious}>
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative scale-150 mx-2"
            onClick={togglePlay}
          >
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full" />
            {isPlaying ? (
              <Pause className="h-5 w-5 relative z-10" />
            ) : (
              <Play className="h-5 w-5 relative z-10" />
            )}
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={playNext}>
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
