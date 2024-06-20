import React from "react";

const VideoPlayer = () => {
  return (
      <video width="400" controls className="rounded-lg drop-shadow-2xl">
        <source src="/test.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
  );
};

export default VideoPlayer;
