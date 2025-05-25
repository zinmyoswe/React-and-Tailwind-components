import React, { useState } from "react";

const videoIds = [
  "32si5cfrCNc", "gQlMMD8auMs", "2S24-y0Ij3Y", "XD00TJ-6WSw",
  "bwmSjveL3Lc", "Amq-qlqbjYA", "FzVR_fymZw4", "dyRsYk0LyA8",
  "vRXZj0DzXIA", "VLpUsmBafMQ", "PjrAwC4TIPA", "YudHcBIxlYw" // swapped one for demo
];

function VideoThumbnail({ videoId }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full pt-[56.25%] rounded-lg shadow-lg overflow-hidden">
      {play ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={`YouTube video player ${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer group"
          onClick={() => setPlay(true)}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="YouTube Thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BlackpinkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-1">
      {videoIds.map((id) => (
        <VideoThumbnail key={id} videoId={id} />
      ))}
    </div>
  );
}
