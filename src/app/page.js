'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import HeroSection from './pages/HeroSection';
import ProjectsSection from './pages/ProjectsSection';
import AboutSection from './pages/AboutSection';
import BannerSection from './pages/BannerSection';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <ReactLenis root>
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <BannerSection />
    </ReactLenis>
  );
}
