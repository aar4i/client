import React from 'react';
import '../styles/HeroSection.css';

import ParallaxVideo from '../ParallaxVideo';

export default function HeroSection() {
  return (
    <section className='hero'>
      <div className='video-background'>
        <ParallaxVideo videoSrc='/portraits/Movie.mp4' />
      </div>
    </section>
  );
}
