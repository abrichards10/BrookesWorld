import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const container = ".content";
const texts = [
  "Flutter",
  "Dart",
  "Objective-C",
  "C#",
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
  "HTML",
  "CSS",
  "React",
  "Bootstrap",
  "Java",
];
const options = {
  radius: 200,
  maxSpeed: "fast",
  initSpeed: "fast",
  direction: 135,
  keep: true,
};

const WordCloud = () => {
  useEffect(() => {
    // Initialize TagCloud
    const tagCloudInstance = TagCloud(container, texts, options);

    // Cleanup function to remove the TagCloud instance
    return () => {
      // Assuming `TagCloud` exposes a method to remove or destroy instances
      if (tagCloudInstance && typeof tagCloudInstance.destroy === "function") {
        tagCloudInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="word-cloud">
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;
