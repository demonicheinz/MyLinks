"use client";

import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Track {
  title: string;
  artist: string;
  source: string;
  copyright: string;
}

interface MusicInfoProps {
  isPlaying: boolean;
  currentTrack: Track | null;
}

export function MusicInfo({ isPlaying, currentTrack }: MusicInfoProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Info className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white/20 dark:bg-gray-900/60 backdrop-blur-xl border-none">
        <div className="p-4 space-y-2">
          <h3 className="font-semibold">Now Playing</h3>
          {isPlaying && currentTrack ? (
            <>
              <p className="text-lg">
                MusicTrack: {currentTrack.title} by {currentTrack.artist}
              </p>
              <p className="text-sm text-gray-400">
                Source:{" "}
                <a
                  href={currentTrack.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {currentTrack.source}
                </a>
              </p>
              <p className="text-sm text-gray-400">Copyright: {currentTrack.copyright}</p>
            </>
          ) : (
            <p className="text-sm">No any song playing</p>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
