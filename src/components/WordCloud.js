import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const container = ".content";
const texts = [
  "Flutter",
  "Objective-C",
  "JavaScript",
  "Typescript",
  "NodeJS",
  "Python",
  "iOS Development",
  "Android Development",
  "Firestore",
  "AWS",
  "Docker",
  "Postman",
  "XCode",
  "Jupyter Notebook",
];
const options = {
  radius: 200,
  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true,
};

const WordCloud = () => {
  useEffect(() => {
    try {
      TagCloud(container, texts, options);
    } catch (error) {
      console.error("TagCloud error:", error);
    }
  }, []);

  return (
    <div className="word-cloud">
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;
