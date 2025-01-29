"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import HeroSection from './pages/HeroSection';
import ProjectsSection from './pages/ProjectsSection';
import AboutSection from './pages/AboutSection';
import BannerSection from './pages/BannerSection';

export default function Home() {
  return (
    <ReactLenis root>
      <div className="app">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <BannerSection />
      </div>
    </ReactLenis>
  );
}
