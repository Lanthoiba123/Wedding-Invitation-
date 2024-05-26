import React, { useEffect, useRef } from "react";
const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Mute the video to ensure autoplay works
      video.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold text-yellow-500 font-serif pt-4">
        This is our delightful journey through our cherished moments and
        memories
      </h1>
      <div className="aspect-video h-[500px] w-full flex justify-center mt-6">
        <video ref={videoRef} controls autoPlay muted>
          <source src="checkVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <h1>Thank You For Watching Our Sweet Memories Video</h1>
    </div>
  );
};

export default Video;
