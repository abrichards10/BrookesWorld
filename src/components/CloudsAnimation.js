// src/components/Clouds.js

import React from "react";
import "./App.css";

const Cloud = () => (
  <div className="cloud">
    <div className="circle circle1"></div>
    <div className="circle circle2"></div>
    <div className="circle circle3"></div>
    <div className="circle circle4"></div>
    <div className="circle circle5"></div>
  </div>
);

const CloudsAnimation = () => {
  return (
    <div className="clouds-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <Cloud key={index} />
      ))}
    </div>
  );
};

export default CloudsAnimation;
