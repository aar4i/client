import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

const ParallaxText = ({ children }) => {
  const textRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.1; // Настройка скорости параллакса
      setOffset(scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={textRef}
      className="parallax-text"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {children}
    </div>
  );
};

export default ParallaxText;
