import React from 'react';
import '../styles/HeroSection.css';

import ParallaxVideo from '../ParallaxVideo';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="video-background">
        <ParallaxVideo videoSrc="/portraits/Movie.mp4" height="800px" />
      </div>
      <div className="nav">
        <p onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener noreferrer')}>About Us</p>
        <p onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>Updates</p>
        <p onClick={() => window.scrollTo({ top: 2100, behavior: 'smooth' })}>Contact</p>
      </div>
    </section>
  );
}
