"use client";

import Parallaximage from './Parallaximage';
import { ReactLenis } from '@studio-freight/react-lenis';
import ParallaxVideo from './ParallaxVideo'; // Import the ParallaxVideo component

export default function Home() {
  return (
    <ReactLenis root>
      <div className="app">
        <section className="hero">
          <div className="video-background">
            
            <ParallaxVideo videoSrc="/portraits/Movie.mp4" height="800px" />
          </div>

          <div className="nav">
          <p onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener noreferrer')}>
      About Us
    </p>
    <p onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
      Updates
    </p>
    <p onClick={() => window.scrollTo({ top: 2100, behavior: 'smooth' })}>
      Contact
    </p>
          </div>
        </section>

        <section className="projects">
          
          <div className="about-brief">
            <p>
              Patterns is passionate clothing manufacturing agency dedicated to bringing creativity, quality, and precision to every piece we produce. With years of experience in the fashion and textile industry, we specialize in supporting designers, brands, and entrepreneurs in turning their ideas into high-quality garments.
            </p>
          </div>

          <div className="col project-cover">
            <div className="img">
              <Parallaximage src="/portraits/portrait2.JPG" alt="" />
            </div>
          </div>
          <div className="col project-list"></div>
        </section>

        <section className="about">
          <div className="col intro">
            <p>Introduction</p>
            <p>
              Patterns is passionate clothing manufacturing agency dedicated to bringing creativity, quality, and precision to every piece we produce. With years of experience in the fashion and textile industry, we specialize in supporting designers, brands, and entrepreneurs in turning their ideas into high-quality garments.
            </p>
          </div>
          <div className="col portrait">
            <div className="img">
              <Parallaximage src="/portraits/IMG_0057.JPG" alt="" />
            </div>
          </div>
        </section>

        <section className="banner">
          <div>
            <Parallaximage src="/portraits/portrait4.JPG" alt="" />
          </div>

          <div className="banner-copy">
            <p>Be the</p>
            <h1>First to know</h1>
            <p>Make an order first time and get a discount for 20%</p>
            <button>Make an order</button>
          </div>
        </section>

        <section className="footer">
          <div className="col">
            <p>Instagram / YouTube / Facebook</p>
            <div className="footer-links">
              <p>Menu</p>
              <h1>Tour</h1>
              <h1>Updates</h1>
              <h1>Merch</h1>
              <h1>Contact</h1>
            </div>
          </div>

          <div className="col">
            <p>Subscribe to get news</p>
            <div className="shop">
              <Parallaximage src="/portraits/portrait5.JPG" alt="" />
            </div>
          </div>
          <p>Spotify / Apple / SoundCloud</p>
        </section>
      </div>
    </ReactLenis>
  );
}
