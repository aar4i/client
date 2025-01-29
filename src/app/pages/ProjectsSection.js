import React from 'react';
import RevealText from '../components/RevealText';
import '../styles/ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <section className='projects'>
      <div className='about-brief'>
        <RevealText bgColor='#000000' fgColor='#ffffff'>
          full-service clothing manufacturing for your business or brand
        </RevealText>
        <RevealText bgColor='#000000' fgColor='#ffffff'>
          custom garments from scratch or premade blanks
        </RevealText>
        <RevealText bgColor='#000000' fgColor='#ffffff'>
          low minimum order quantity
        </RevealText>
      </div>
    </section>
  );
}
