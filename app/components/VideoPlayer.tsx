import React from 'react';

const VideoPlayer = () => {
  return (
    <video width="600" controls>
      <source src="/test.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
