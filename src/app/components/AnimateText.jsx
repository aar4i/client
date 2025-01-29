// AnimateText.jsx
"use client";

import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const AnimateText = ({ children, bgColor = "#000", fgColor = "#fff" }) => {
  useEffect(() => {
    const element = document.querySelector(".reveal-type");

    // Split the text into characters
    const split = new SplitType(element, { types: "chars" });

    // Apply GSAP animation
    gsap.fromTo(
      split.chars,
      { color: bgColor },
      {
        color: fgColor,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
          toggleActions: "play play reverse reverse",
        },
      }
    );

    // Cleanup function
    return () => {
      gsap.killTweensOf(element);
    };
  }, [bgColor, fgColor]);

  return <div className="reveal-type">{children}</div>;
};

export default AnimateText;
