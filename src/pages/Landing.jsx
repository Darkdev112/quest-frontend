import React from 'react';
import VideoCarousel from './VideoCarousel';
import './Landing.scss'

const videos = [
  'https://youtu.be/eVLpnMHHEPU',
  'https://youtu.be/RZ5LH634W8s',
  'https://youtu.be/1Luw2tiMuLk',
];

function Landing() {
  return (
    <div className="Landing">
      <VideoCarousel videos={videos} />
    </div>
  );
}

export default Landing;