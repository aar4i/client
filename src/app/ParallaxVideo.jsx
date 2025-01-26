import React, { useEffect, useState } from "react";

const ParallaxVideo = ({ videoSrc, height = "500px" }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: height,
        overflow: "hidden",
        perspective: "1px",
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: `${offsetY * 0.9}px`, // Adjust the multiplier for more/less parallax
          left: "50%",
          transform: "translate(-50%, 0)",
          minWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ParallaxVideo;
