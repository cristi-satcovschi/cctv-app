"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";

type HLSPlayerProps = {
  videoSrc: string;
};

export function HLSPlayer({ videoSrc }: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoElement);
      } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src = videoSrc;
      } else {
        console.error("HLS.js is not supported in this browser.");
      }
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.src = "";
        videoElement.removeAttribute("src");
        videoElement.load();
      }
    };
  }, [videoSrc]);

  return (
    <div className="w-full">
      <video
        ref={videoRef}
        className="w-full"
        // substract the height of the navbar
        style={{ maxHeight: "calc(100vh - 4rem)" }}
        controls
      />
    </div>
  );
}
