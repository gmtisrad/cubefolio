import React, { useState, useEffect, useContext } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "@styled-icons/boxicons-solid";
import { css, cx } from "@emotion/css";
import { IntroSlide } from "../slides/IntroSlide";
import { Frame, Page } from "framer";
import {
  getCurrentStyle,
  getBackgroundColor,
  getTextColor,
} from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";
import TitleSlide from "../slides/TitleSlide";

const MAX_HORIZONTAL_SIDES = 4;
const MAX_VERTICAL_SIDES = 3;

const columnContainerStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const upButtonStyle = css`
  position: absolute;
  top: 5px;
  left: 50%;
  z-index: 10;
  cursor: pointer;
`;

const downButtonStyle = css`
  position: absolute;
  bottom: 5px;
  left: 50%;
  z-index: 10;
  cursor: pointer;
`;

const leftButtonStyle = css`
  position: absolute;
  top: 50%;
  left: 5px;
  z-index: 10;
  cursor: pointer;
`;

const rightButtonStyle = css`
  position: absolute;
  top: 50%;
  right: 5px;
  z-index: 10;
  cursor: pointer;
`;

export const FramerCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [currentStyle, setCurrentStyle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verticalIndex, setVerticalIndex] = useState(1);

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

  const upFromCurrent = (): void => {
    setVerticalIndex(verticalIndex - 1);
  };

  const downFromCurrent = (): void => {
    setVerticalIndex(verticalIndex + 1);
  };

  const rightFromCurrent = (): void => {
    if (verticalIndex === 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (verticalIndex === 0 || verticalIndex === 2) {
      setVerticalIndex(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const leftFromCurrent = (): void => {
    if (verticalIndex === 1) {
      setCurrentIndex(currentIndex - 1);
    } else if (verticalIndex === 0 || verticalIndex === 2) {
      setVerticalIndex(1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const UpButton: React.FC = () => {
    return (
      <div className={upButtonStyle} onClick={upFromCurrent}>
        <ChevronUp size="36" />
      </div>
    );
  };

  const DownButton: React.FC = () => {
    return (
      <div className={downButtonStyle} onClick={downFromCurrent}>
        <ChevronDown size="36" />
      </div>
    );
  };

  const LeftButton: React.FC = () => {
    return (
      <div className={leftButtonStyle} onClick={leftFromCurrent}>
        <ChevronLeft size="36" />
      </div>
    );
  };

  const RightButton: React.FC = () => {
    return (
      <div className={rightButtonStyle} onClick={rightFromCurrent}>
        <ChevronRight size="36" />
      </div>
    );
  };

  const Controls: React.FC = () => (
    <>
      {verticalIndex !== 0 && currentIndex === 0 && <UpButton />}
      {verticalIndex < MAX_VERTICAL_SIDES - 1 && currentIndex === 0 && (
        <DownButton />
      )}
      {currentIndex !== 0 && verticalIndex === 1 && <LeftButton />}
      {currentIndex < MAX_HORIZONTAL_SIDES - 1 && verticalIndex === 1 && (
        <RightButton />
      )}
    </>
  );

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
        currentPage={currentIndex}
        dragEnabled={false}
      >
        <Page
          direction={"vertical"}
          defaultEffect={"cube"}
          paddingTop={40}
          paddingBottom={40}
          currentPage={verticalIndex}
          dragEnabled={false}
        >
          <Frame
            backgroundColor={backgroundColor}
            height={"100vh"}
            width={"100vh"}
            style={frameStyle}
            center
          >
            <Controls />
            <TitleSlide />
          </Frame>
          <Frame
            backgroundColor={backgroundColor}
            height={"100vh"}
            width={"100vh"}
            style={frameStyle}
            center
          >
            <Controls />
            <TitleSlide />
          </Frame>
          <Frame
            backgroundColor={backgroundColor}
            height={"100vh"}
            width={"100vh"}
            style={frameStyle}
            center
          >
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          paddingTop={40}
          paddingBottom={40}
          directionLock={true}
        >
          <Frame
            backgroundColor={backgroundColor}
            height={"100vh"}
            width={"100vh"}
            style={frameStyle}
          >
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          paddingTop={40}
          paddingBottom={40}
          directionLock={true}
        >
          <Frame
            backgroundColor={backgroundColor}
            height={"100vh"}
            width={"100vh"}
            style={frameStyle}
          >
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          paddingTop={40}
          paddingBottom={40}
          directionLock={true}
        >
          <Frame
            backgroundColor={backgroundColor}
            height={"100vh"}
            width={"100vh"}
            style={frameStyle}
          >
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
      </Page>
    </div>
  );
};

export default FramerCube;
