import React from "react";
import "./Category.css";
const Category = () => {
  const keywards = [
    "All",
    "Javascript",
    "Python",
    "React",
    "Angular.js",
    "React Native",
    "Css",
    "TED",
    "Talk",
    "Django",
    "Flask",
    "Rest",
    "Redux",
  ];
  return (
    <div className="category">
      {keywards.map((keyward, i) => (
        <p key={i}>{keyward}</p>
      ))}
    </div>
  );
};

export default Category;
