import React, { useEffect, useState } from 'react';

const ParallaxVideo = ({ videoSrc }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
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
        position: 'absolute',
        top: `${offsetY * 0.5}px`,
        left: '0',
        width: '100%',

        objectFit: 'cover',
      }}
      autoPlay
      muted
      loop
    />
  );
};

export default ParallaxVideo;
