import React, { useState, useEffect, useContext } from "react";
import { ChevronUp, ChevronDown } from "@styled-icons/boxicons-solid";
import { css, cx } from "@emotion/css";
import { IntroSlide } from "./slides/IntroSlide";
import { Frame, Page } from "framer";
import {
  getCurrentStyle,
  getBackgroundColor,
  getTextColor,
} from "../utils/styleUtils";
import ThemeContext from "../context/ThemeContext";

const columnContainerStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const pageStyle = css`
  height: 100%;
  width: 100%;
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
  const { light, dark, neon } = useContext(ThemeContext);
  const [currentStyle, setCurrentStyle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const frameStyle = !light
    ? {
        boxShadow: `${textColor} 0px 0px 1em`,
        textShadow: `${textColor} 0px 0px 1em`,
      }
    : {};

  useEffect(() => {
    setCurrentStyle(getCurrentStyle(light, neon, dark));
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const PrevButton = () => {
    return (
      <div className={prevButtonStyle}>
        <ChevronUp size="36" />
      </div>
    );
  };

  const NextButton = () => {
    return (
      <div className={nextButtonStyle}>
        <ChevronDown size="36" />
      </div>
    );
  };

  return (
    <div className={cx(currentStyle, columnContainerStyles)}>
      <Page
        height={"100vh"}
        width={"100vh"}
        alignment="center"
        gap={0}
        defaultEffect={"cube"}
        backgroundColor="transparent"
        paddingLeft={40}
        paddingRight={40}
      >
        <Frame
          backgroundColor={backgroundColor}
          height={"100vh"}
          width={"100vh"}
          style={frameStyle}
        >
          <IntroSlide
            heading="Hi, my name is Gabe!"
            message="I am a web developer"
          />
        </Frame>
        <Frame
          backgroundColor={backgroundColor}
          height={"100vh"}
          width={"100vh"}
          style={frameStyle}
        >
          <IntroSlide
            heading="Hi, my name is Gabe!"
            message="I am a web developer"
          />
        </Frame>
      </Page>
    </div>
  );
};

export default FramerCube;
