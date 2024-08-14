import React, { useState } from "react";

const ImageMagnifier = ({ src, width, height }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierStyle, setMagnifierStyle] = useState({});

  const handleMouseEnter = (e) => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMagnifierStyle({
      backgroundImage: `url(${src})`,
      backgroundSize: `${width * 2}px ${height * 2}px`,
      backgroundPosition: `-${x * 2}px -${y * 2}px`,
      left: `${x + 20}px`,
      top: `${y - 30}px`,
    });
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={src} width={width} height={height} alt="Magnify" />
      {showMagnifier && (
        <div
          style={{
            zIndex: 1000,
            position: "absolute",
            border: "1px solid lightgrey",
            width: "150px",
            height: "150px",
            backgroundColor: "white",
            backgroundRepeat: "no-repeat",
            borderRadius: "5px",
            pointerEvents: "none",
            ...magnifierStyle,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
