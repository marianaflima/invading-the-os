import React, { useState } from "react";

interface VideoPlayerProps {
  thumbnailSrc: string;
  videoSrc?: string;
}

export default function VideoPlayer({
  thumbnailSrc,
  videoSrc,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="video-container"
      style={{ position: "relative", width: "640px" }}
    >
      {!isPlaying && (
        <img
          src={thumbnailSrc}
          alt="Video Thumbnail"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={handleThumbnailClick}
        />
      )}
      {isPlaying && (
        <video src={videoSrc} controls style={{width: '100%'}} onEnded={() => setIsPlaying(false)}></video>
      )}
    </div>
  );
}
