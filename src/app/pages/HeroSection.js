import React from 'react';
import '../styles/HeroSection.css';

import ParallaxVideo from '../components/ParallaxVideo';

export default function HeroSection() {
  return (
    <section className='hero'>
      <ParallaxVideo videoSrc='/portraits/Movie.mp4' />
    </section>
  );
}
