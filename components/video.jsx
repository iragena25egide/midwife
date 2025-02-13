import React from "react";

export default function VideoPlayer() {
  return (
    <div className="flex justify-center items-center bg-black p-4">
      <video
        className="w-full max-w-4xl rounded-lg shadow-lg"
        controls
        autoPlay
        loop
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
