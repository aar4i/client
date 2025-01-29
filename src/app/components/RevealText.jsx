import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/RevealText.css';

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({ children, bgColor = '#000000', fgColor = '#ffffff' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: 'chars' });

      gsap.fromTo(
        text.chars,
        {
          color: bgColor,
        },
        {
          color: fgColor,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: true,
            markers: false, // Set to true for debugging
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    }

    // Cleanup
    return () => {
      // wtf?
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [bgColor, fgColor]);

  return (
    <p ref={textRef} data-bg-color={bgColor} data-fg-color={fgColor}>
      {children}
    </p>
  );
};

export default RevealText;
