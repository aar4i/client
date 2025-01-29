import React, { useEffect, useState } from 'react';
import RevealText from '../components/RevealText';
import '../styles/ProjectsSection.css';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.projects');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='projects'>
      <div className={`projectsWrapper ${isVisible ? 'visible' : ''}`}>
        <RevealText fgColor='#000000' bgColor='#ffffff'>
          full-service clothing manufacturing for your business or brand
        </RevealText>
        <RevealText fgColor='#000000' bgColor='#ffffff'>
          custom garments from scratch or premade blanks
        </RevealText>
        <RevealText fgColor='#000000' bgColor='#ffffff'>
          low minimum order quantity
        </RevealText>
      </div>
    </section>
  );
}
