import React from "react";

const VideoPlayer = () => {
  return (
      <video  controls className="rounded-lg drop-shadow-2xl cursor-pointer">
        <source src="/test.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
  );
};

export default VideoPlayer;
