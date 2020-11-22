import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "@styled-icons/boxicons-solid";
import { css } from "@emotion/css";
import { IntroSlide } from "./slides/IntroSlide";

const columnContainerStyles = css`
  height: 90vh;
  width: 90vh;
`;

const prevButtonStyle = css`
  position: absolute;
  top: 5px;
  left: 50%;
  z-index: 10;
  cursor: pointer;
`;

const nextButtonStyle = css`
  position: absolute;
  bottom: 5px;
  left: 50%;
  z-index: 10;
  cursor: pointer;
`;

export const FramerCube: React.FC = () => {
  // const [slideIndex, setSlideIndex] = useState(0);

  const nextColumn = () => {
    // if (slideIndex < slides.length - 1) {
    //   setSlideIndex(slideIndex + 1);
    // }
  };

  const lastColumn = () => {
    // if (slideIndex > 0) {
    //   setSlideIndex(slideIndex - 1);
    // }
  };

  const PrevButton = () => {
    return (
      <div className={prevButtonStyle} onClick={() => lastColumn()}>
        <ChevronUp size="36" />
      </div>
    );
  };

  const NextButton = () => {
    return (
      <div className={nextButtonStyle} onClick={() => nextColumn()}>
        <ChevronDown size="36" />
      </div>
    );
  };

  return (
    <div className={columnContainerStyles}>
      <IntroSlide
        heading="Hi, my name is Gabe!"
        message="I am a web developer"
      />
    </div>
  );
};

export default FramerCube;
