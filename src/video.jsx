import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => {
        video.muted = false; // Unmute the video when it starts playing
      };

      video.muted = true; // Mute the video to ensure autoplay works
      video.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });

      // Add event listener for the play event
      video.addEventListener("play", handlePlay);

      // Cleanup the event listener on component unmount
      return () => {
        video.removeEventListener("play", handlePlay);
      };
    }
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-yellow-500 font-serif pt-4">
        This is our delightful journey through our cherished moments and
        memories
      </h1>
      <div className="aspect-video h-[550px] w-full flex justify-center mt-4">
        <video ref={videoRef} controls autoPlay muted>
          <source src="memoryVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full p-1 flex justify-center">
        <h1 className="p-3">Thank You For Watching Our Sweet Memories Video</h1>
      </div>
    </div>
  );
};

export default Video;
