import React, { useState } from "react";
import "./image_slider.scss";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/Ai";
const ImageSlider = ({ urls }) => {
  const [currentIndex, setCurrentindex] = useState(0);

  const leftClick = () => {
    if (currentIndex <= 0) {
      setCurrentindex(2);
    } else {
      setCurrentindex(currentIndex - 1);
    }
  };
  const rightClick = () => {
    if (currentIndex >= 2) {
      setCurrentindex(0);
    } else {
      setCurrentindex(currentIndex + 1);
    }
  };
  return (
    <div className="sliderContainer">
      <div className="slides">
        <div
          className="slide"
          style={{ backgroundImage: `url(${urls[currentIndex]})` }}
        >
          <AiFillLeftCircle className="icon" onClick={leftClick} />
          <AiFillRightCircle className="icon" onClick={rightClick} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
