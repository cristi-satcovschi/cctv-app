"use client";

import { formatDuration } from "@/app/_lib/format";
import { HLSPlayer } from "@/app/_ui/HSLPlayer";
import Image from "next/image";
import { useState } from "react";

type SearchResult = {
  id: number;
  videoSrc: string;
  dateTime: string;
  camera: string;
  duration: number;
};

type SearchResultsSectionProps = {
  results: SearchResult[];
};

export function SearchResultsSection({ results }: SearchResultsSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<null | string>(null);

  const handleVideoClick = (video: string) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Search Results</h2>
        <span className="text-gray-600">{results.length} results</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {results.map((result) => (
          <div
            key={result.id}
            className="relative flex-col space-justify-between"
          >
            <div>
              {/* Play button or Video player */}
              {selectedVideo === result.videoSrc ? (
                <div className="h-48 flex justify-center items-center bg-black">
                  {/* HLSPlayer component to display the byte-sized video */}
                  <HLSPlayer videoSrc={result.videoSrc} />
                </div>
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleVideoClick(result.videoSrc)}
                >
                  <div className="bg-gray-200 flex items-center justify-center h-48">
                    <Image
                      src="https://img.icons8.com/android/64/000000/play.png"
                      alt="Play Video"
                      className="text-gray-600"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Additional information */}
            <div className="bg-gray-900 text-white p-2">
              <div>
                <p className="text-xs mb-1">{result.dateTime}</p>
                <p className="text-xs mb-1">Camera: {result.camera}</p>
              </div>
              <p className="text-xs">
                Duration: {formatDuration(result.duration)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
