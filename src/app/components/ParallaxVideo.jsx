import React, { useEffect, useState } from 'react';
import '../styles/ParallaxVideo.css';

const ParallaxVideo = ({ videoSrc }) => {
  const [verticalOffset, setVerticalOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log('handling scroll...');
      setVerticalOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <video
      src={videoSrc}
      style={{
        top: `${verticalOffset * 0.5}px`,
      }}
      autoPlay
      muted
      loop
    />
  );
};

export default ParallaxVideo;
