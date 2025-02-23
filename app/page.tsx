"use client";

import { useState, useEffect } from "react";
import { ShareLinks } from "@/components/share/share-links";
import { ProfileImage } from "@/components/profile/profile-image";
import { MusicPlayer } from "@/components/music/music-player";
import { SocialLinks } from "@/components/social/social-links";
import { WebsiteLinks } from "@/components/website/website-links";

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMode, setCurrentMode] = useState("No song playing");
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
      <div className="min-h-screen backdrop-blur-sm bg-black/30 flex items-center justify-center p-4">
        <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm w-full min-h-screen md:min-h-0 md:h-auto max-w-md mx-auto relative z-10 rounded-2xl shadow-black/20 shadow-lg overflow-auto no-scrollbar">
          <ShareLinks shareUrl={currentUrl} />
          <div className="flex flex-col items-center space-y-6 p-8">
            <ProfileImage isPlaying={isPlaying} imageUrl="/images/profile.png" />
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">Heinz</h1>
              <div className="flex items-center justify-center space-x-1">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-foreground to-transparent" />
                <p className="text-gray-900/75 dark:text-gray-400 px-2">{currentMode}</p>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-foreground to-transparent" />
              </div>
            </div>
            <MusicPlayer onPlayingChange={setIsPlaying} onModeChange={setCurrentMode} />
            <SocialLinks />
            <WebsiteLinks />
            <p className="text-center text-md mt-6">© 2025 Heinz. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
