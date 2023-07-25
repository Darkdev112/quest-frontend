import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Landing.scss'
  import { HiArrowSmRight ,HiArrowSmLeft} from 'react-icons/hi';

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
      <div>
     <h className="Head">Zero Addiction</h>
    <div className="video-carousel">
       
      <button onClick={handlePrev} className='arrow1'><HiArrowSmLeft/></button>
      <div className="video-wrapper">
        <ReactPlayer url={videos[currentIndex]} controls width="100%" height="100%"  />
      </div>
      <button onClick={handleNext} className='arrow1'><HiArrowSmRight/></button>
    </div>
    </div>
  );
};

export default VideoCarousel;