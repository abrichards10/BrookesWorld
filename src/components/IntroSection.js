// src/components/IntroSection.js
import React from "react";
import "./App.css"; // Create this CSS file for styling
import brookephoto from "./assets/BrookeLook.jpeg";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="intro-text">
          <h2>Welcome!</h2>
          <br />
          <p className="introTextSummary">
            I'm Brooke and I am currently devoting my time to preparing myself
            for a full-time job, working on personal full stack side projects in
            Dart and React, and discovering my newest passion for Product
            Management through local experimental design and leading the
            #MakeTechPurple project. In my free time, I climb rocks (a lot),
            teach (also a lot), bake, and redesign/renovate my childhood house
            with my dad.
          </p>
        </div>
        <div className="intro-photo">
          <img
            src={brookephoto} // Replace with the actual path to your photo
            alt="Brooke Richards"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
