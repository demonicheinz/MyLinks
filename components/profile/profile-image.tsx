"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProfileImageProps {
  isPlaying: boolean;
  imageUrl: string;
}

export function ProfileImage({ isPlaying, imageUrl }: ProfileImageProps) {
  // const outerRingRef = useRef<HTMLDivElement>(null);
  // const [rotationAngle, setRotationAngle] = useState(0);

  // useEffect(() => {
  //   let animationFrameId: number;

  //   const animate = () => {
  //     if (isPlaying) {
  //       setRotationAngle((prevAngle) => (prevAngle + 1) % 360);
  //       animationFrameId = requestAnimationFrame(animate);
  //     }
  //   };

  //   if (isPlaying) {
  //     animationFrameId = requestAnimationFrame(animate);
  //   }

  //   return () => {
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId);
  //     }
  //   };
  // }, [isPlaying]);

  return (
    <div className="relative w-60 h-60 rounded-full overflow-hidden">
      {/* <div
        ref={outerRingRef}
        className="w-full h-full"
        style={{ transform: `rotate(${rotationAngle}deg)`}}
      > */}
      <div
        className={`w-full h-full ${isPlaying ? "animate-spin-slow" : "animate-spin-slow paused"}`}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="profile-image"
          width={300}
          height={300}
          priority
          className="aspect-square w-full h-full rounded-full object-cover bg-center"
        />
      </div>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="Profile"
        width={300}
        height={300}
        priority
        className="aspect-square w-full h-full rounded-full object-cover bg-center absolute inset-0 scale-90 border-8 border-white/20 dark:border-gray-900/60"
      />
    </div>
  );
}
